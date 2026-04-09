# KeapCoreServiceV2Sdk.Contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier | [optional] 
**links** | [**[Link]**](Link.md) |  | [optional] 
**addresses** | [**[Address]**](Address.md) |  | [optional] 
**company** | [**BasicCompany**](BasicCompany.md) | Associated company | [optional] 
**origin** | [**Origin**](Origin.md) |  | [optional] 
**prefix** | **String** | Name prefix | [optional] 
**suffix** | **String** | Name suffix | [optional] 
**website** | **String** | Personal website URL | [optional] 
**groups** | **String** |  | [optional] 
**updateTime** | **String** | Last update timestamp (ISO-8601) | [optional] 
**createTime** | **String** | Creation timestamp (ISO-8601) | [optional] 
**scoreValue** | **String** | Contact score value | [optional] 
**tagIds** | **[String]** |  | [optional] 
**anniversaryDate** | **String** | The anniversary date | [optional] 
**birthDate** | **String** | The birth date | [optional] 
**contactType** | **String** | Type of contact | [optional] 
**customFields** | [**[CustomFieldValue]**](CustomFieldValue.md) |  | [optional] 
**emailAddresses** | [**[EmailAddress]**](EmailAddress.md) |  | [optional] 
**familyName** | **String** | Last name / surname | [optional] 
**faxNumbers** | [**[FaxNumber]**](FaxNumber.md) |  | [optional] 
**givenName** | **String** | First name | [optional] 
**jobTitle** | **String** | Job title | [optional] 
**leadsourceId** | **String** | Lead source identifier | [optional] 
**middleName** | **String** | Middle name | [optional] 
**ownerId** | **String** | ID of the user who owns this contact | [optional] 
**phoneNumbers** | [**[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**preferredLocale** | **String** | Preferred locale | [optional] 
**preferredName** | **String** | Preferred name or nickname | [optional] 
**referralCode** | **String** | Referral code | [optional] 
**socialAccounts** | [**[SocialAccount]**](SocialAccount.md) |  | [optional] 
**sourceType** | **String** |  | [optional] 
**spouseName** | **String** | Spouse&#39;s name | [optional] 
**timeZone** | **String** | Contact&#39;s timezone | [optional] 
**utmParameters** | [**[ContactUtmResponse]**](ContactUtmResponse.md) |  | [optional] 
**accountId** | **String** |  | [optional] 
**assistantName** | **String** |  | [optional] 
**assistantPhone** | **String** |  | [optional] 
**billingInformation** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**lastUpdatedBy** | **String** |  | [optional] 



## Enum: SourceTypeEnum


* `SOURCE_TYPE_UNSPECIFIED` (value: `"SOURCE_TYPE_UNSPECIFIED"`)

* `API` (value: `"API"`)

* `APPOINTMENT` (value: `"APPOINTMENT"`)

* `FORM_API_HOSTED` (value: `"FORM_API_HOSTED"`)

* `FORM_API_INTERNAL` (value: `"FORM_API_INTERNAL"`)

* `IMPORT` (value: `"IMPORT"`)

* `INTERNAL_FORM` (value: `"INTERNAL_FORM"`)

* `LANDING_PAGE` (value: `"LANDING_PAGE"`)

* `MANUAL` (value: `"MANUAL"`)

* `OTHER` (value: `"OTHER"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `WEBFORM` (value: `"WEBFORM"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




