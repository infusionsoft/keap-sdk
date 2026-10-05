# Keap SDK Development Guidelines

This document outlines how the Keap SDK repository is produced, how it is organized, and how to build and
smoke-test each language SDK. This repository holds generated client SDKs for the Keap v2 REST API,
plus one sample project per language.

## Where This Code Comes From (Read First)

Everything under `sdks/` and `samples/` is generated and pushed by the private sibling repository
[`keap-sdk-infrastructure`](https://github.com/infusionsoft/keap-sdk-infrastructure). Its CircleCI job:

1. Downloads the Core OpenAPI spec (`https://crm.infusionsoft.com/app/v3/api-docs/V2`) and hash-diffs it
   against the committed `sdks/v2/swagger.yml`
2. If the spec changed, increments `VERSION.txt` (patch bump of the latest `keap-sdk` release tag)
3. Generates every SDK with the `com.keap.sdk-gen` Gradle plugin (OpenAPI Generator), then applies
   post-generation fixes (`applyOverrides()` in its `build.gradle` and files under its `override/` folder)
4. Clones this repo, runs `rm -rf ./sdks ./samples`, copies its own `sdks/` and `samples/` in, and commits
   `Updating SDK <version> [skip ci]`
5. Packages the SDKs, runs the sample smoke tests, then pushes and creates a GitHub release here

### Rules for agents
- **Do not hand-edit `sdks/`.** Every regeneration deletes and replaces that folder. Make the fix in
  `keap-sdk-infrastructure`: either change the `applyOverrides()` logic in `build.gradle`, or add a file
  under `override/sdks/v2/<language>/` (for example `override/sdks/v2/csharp/Keap.Core.V2.sln`).
- **Edit `samples/` in `keap-sdk-infrastructure` too.** Each regeneration also replaces `samples/`.
  A change made only here (for example a lockfile refresh) is lost on the next run unless the same change
  is in `keap-sdk-infrastructure/samples/`.
- **Do not edit `sdks/v2/swagger.yml`.** It is pulled from the live Core API. API changes belong in the
  service that serves the spec.
- **Do not bump versions by hand.** The infrastructure build writes the version (currently `2.0.25`) into
  `build.gradle`, `package.json`, `composer.json`, `pyproject.toml`/`setup.py`, and the C# project. To force a
  different major/minor version, create a tag and release in this repo (see the infrastructure README).
- The files in this repo that are maintained by hand are `README.md`, `LICENSE`, `.gitignore`,
  `.github/CODEOWNERS`, and `.github/workflows/*`.

## Code Organization

### Directory Layout
```
keap-sdk/
├── .github/
│   ├── CODEOWNERS               # @infusionsoft/gryffindor
│   └── workflows/               # Publish-on-release workflows (one per registry)
├── sdks/v2/
│   ├── swagger.yml              # OpenAPI spec the SDKs are generated from
│   ├── csharp/                  # Keap.Core.V2.sln, src/Keap.Core.V2 (net9.0)
│   ├── java/                    # Gradle build, package com.keap.core, artifact keap-sdk-core-v2
│   ├── javascript/              # Babel build, superagent client
│   ├── php/                     # Composer package keap/keap-sdk, namespace Keap\Core\V2 (lib/)
│   ├── python/                  # Package keap_core_v2_client (setup.py / pyproject.toml)
│   └── typescript/              # tsc build, fetch-based client
└── samples/v2/                  # One "list contacts" smoke test per language
    ├── csharp/                  # MSTest  (ContactsTest.cs)
    ├── java/                    # JUnit 5 (src/test/java/com/keap/ContactsTest.java)
    ├── javascript/              # Jest    (Contacts.test.js)
    ├── php/                     # PHPUnit (tests/ContactsTest.php)
    ├── python/                  # unittest, run with pytest (contacts_test.py)
    └── typescript/              # ts-jest (Contacts.test.ts)
```

Each SDK has a `README.md` and a `docs/` folder (the TypeScript SDK keeps `*Api.md` files at its root).
The generated SDKs have no unit-test folders. The `samples/` projects are the only tests.

### Published Packages
| Language   | Registry      | Package name                     | Workflow                 |
|------------|---------------|----------------------------------|--------------------------|
| C#         | NuGet         | `Thryv.Keap.Core.V2`             | `nuget_publish.yml`      |
| Java       | Maven Central | `com.keap.core:keap-sdk-core-v2` | `maven_publish.yml`      |
| JavaScript | npm           | `keap-core-service-v2-sdk-js`    | `npmjs_publish.yml`      |
| TypeScript | npm           | `keap-core-service-v2-sdk-ts`    | `npmjs_publish.yml`      |
| Python     | PyPI          | `keap-core-v2-sdk`               | `python_publish.yml`     |
| PHP        | Packagist     | `keap/keap-sdk`                  | `deploy-php-sdk.yml`     |

All workflows run on `release: published`. The release tag is the package version. `npmjs_publish.yml` can
also run from `workflow_dispatch`, and that run is a dry run by default. Tags that contain `-` publish to
the npm `next` dist-tag. The PHP workflow does not publish a package. It force-pushes `sdks/v2/php` to
the `infusionsoft/keap-sdk-php` repo, and Packagist reads from that repo.

## Dependencies and Toolchains
Versions come from the CI workflows and the infrastructure `prereqs` README:
- **C#**: .NET SDK 9.0 (`net9.0`), RestSharp, Newtonsoft.Json, JsonSubTypes
- **Java**: JDK 21 for builds. The SDK uses Jackson, Apache HttpClient 4.5, and resilience4j-retry.
  `sdks/v2/java` has **no Gradle wrapper**. CI runs `gradle wrapper` first.
- **JavaScript / TypeScript**: Node (CI uses 24.x). The JS SDK builds with Babel. The TS SDK builds with `tsc`.
- **PHP**: PHP >= 8.3, Composer, Guzzle 7
- **Python**: Python ^3.9 (per `pyproject.toml`), pydantic v2, urllib3 2.x

## Building and Testing

### Building each SDK
Run these commands from the repo root. They are the same commands the publish workflows run.
- **C#**: `dotnet restore sdks/v2/csharp/Keap.Core.V2.sln && dotnet pack sdks/v2/csharp/Keap.Core.V2.sln -c Release -o ./nupkgs -p:PackageVersion=<version>`
- **Java** (in `sdks/v2/java`): `gradle wrapper && ./gradlew build -Pversion=<version>`, then
  `./gradlew publishToMavenLocal -Pversion=<version>` to make it available to the sample
- **JavaScript** (in `sdks/v2/javascript`): `npm install` (the `prepare` script runs `babel src -d dist`)
- **TypeScript** (in `sdks/v2/typescript`): `npm install` (the `prepare` script runs `tsc`)
- **Python** (in `sdks/v2/python`): `python setup.py sdist bdist_wheel`
- **PHP** (in `sdks/v2/php`): `composer install`

### Running the sample smoke tests
The samples call the **live** Keap API. Each one needs the `KEAP_REST_API_SERVICE_ACCESS_TOKEN`
environment variable (a PAT or Service Account Key). Each sample consumes a *packaged* SDK, not the
source folder. The intended way to run them is from `keap-sdk-infrastructure`, which packages the SDKs
and then runs the samples:
```bash
./gradlew packageSdks
./gradlew buildAndRunTests -PKEAP_REST_API_SERVICE_ACCESS_TOKEN="<your PAT or SAK>"
```
If you run a sample by hand, this is what `buildAndRunTests` runs in each `samples/v2/<language>` folder:
- **C#**: `dotnet test`. `NuGet.Config` reads packages from `../../../build/packages/csharp`, which is the
  infrastructure repo's packaging output.
- **Java**: infrastructure runs `./gradlew -b samples/v2/java/build.gradle test` from its own root (this
  sample has no wrapper of its own). The sample resolves `keap-sdk-core-v2` from `mavenLocal()`.
  `settings.gradle` also declares the `artifacts.keap.dev` repository, which needs
  `externalProxyRepositoryUsername`/`Password` system properties.
- **JavaScript / TypeScript**: `npm ci`, then `npm install --no-save <path-to-sdk-tarball>`, then `npx jest --config jest.config.js`
- **PHP**: `composer install` and `vendor/bin/phpunit`. `composer.json` holds `"Add your version here"`
  placeholders that the infrastructure build replaces with the packaged `.phar`.
- **Python**: `pip install -r requirements.txt`, then install the built wheel, then `pytest contacts_test.py`

### Version pins in samples
The infrastructure build rewrites the sample dependency versions when it runs the tests. The committed
pins in this repo are therefore not consistent. For example, the Java sample pins `2.0.1` and the C# sample
pins `2.0.18`. Do not "fix" them here.

---

*This document reflects the current state of the Keap SDK repository and its generation pipeline in
keap-sdk-infrastructure as of the analysis date.*
