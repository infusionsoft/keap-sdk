# KeapCoreServiceV2Sdk.Webform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createTime** | **String** | When the webform was created | [optional] 
**customSlug** | **String** | The custom slug of the webform. Used in pretty webform URLs | [optional] 
**duplicateCheckOption** | **String** | The option that determines if the lead submitted through the form is a duplicate or not. If it&#39;s a duplicate, then the lead will be merged with the existing contact record | [optional] 
**exitOption** | **String** | The option that determines what happens after the form is submitted | [optional] 
**funnelId** | **String** | The id of the funnel this webform belongs to, if any | [optional] 
**id** | **String** | The unique identifier for this webform | [optional] 
**name** | **String** | The name of this webform | [optional] 
**prettyWebformUrl** | **String** | The URL for this webform that uses the custom slug to identify it | [optional] 
**thankYouPageUrl** | **String** | The URL of the thank you page for this webform | [optional] 
**updateTime** | **String** | When the webform was last updated | [optional] 
**webformType** | **String** | The type of webform this is | [optional] 
**webformUrl** | **String** | The URL for this webform that uses the xid to identify it | [optional] 
**xid** | **String** | The public unique identifier for this tag, used in webform URLs | [optional] 



## Enum: DuplicateCheckOptionEnum


* `EMAIL` (value: `"EMAIL"`)

* `EMAIL_AND_NAME` (value: `"EMAIL_AND_NAME"`)

* `EMAIL_AND_NAME_AND_COMPANY` (value: `"EMAIL_AND_NAME_AND_COMPANY"`)

* `NO_CHECK` (value: `"NO_CHECK"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: ExitOptionEnum


* `REDIRECT` (value: `"REDIRECT"`)

* `FUNNEL_LINK` (value: `"FUNNEL_LINK"`)

* `HOSTED` (value: `"HOSTED"`)

* `LANDING_PAGE` (value: `"LANDING_PAGE"`)

* `WEB_FORM` (value: `"WEB_FORM"`)

* `SURVEY` (value: `"SURVEY"`)

* `UPDATE` (value: `"UPDATE"`)

* `UPDATE_OPT_OUT` (value: `"UPDATE_OPT_OUT"`)

* `OPT_OUT` (value: `"OPT_OUT"`)

* `CONFIRM` (value: `"CONFIRM"`)

* `MESSAGE` (value: `"MESSAGE"`)

* `AUTHORING_MESSAGE` (value: `"AUTHORING_MESSAGE"`)

* `MANUAL` (value: `"MANUAL"`)

* `CLOSE` (value: `"CLOSE"`)

* `DISPLAY_TEXT_AND_BUTTON` (value: `"DISPLAY_TEXT_AND_BUTTON"`)

* `ERROR` (value: `"ERROR"`)

* `HOSTED_PAGE` (value: `"HOSTED_PAGE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: WebformTypeEnum


* `LEGACY` (value: `"LEGACY"`)

* `STANDALONE` (value: `"STANDALONE"`)

* `FUNNEL` (value: `"FUNNEL"`)

* `LANDING_PAGE` (value: `"LANDING_PAGE"`)

* `SURVEY` (value: `"SURVEY"`)

* `INTERNAL` (value: `"INTERNAL"`)

* `TWITTER` (value: `"TWITTER"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




