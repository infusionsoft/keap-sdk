

# Webform


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createTime** | **String** | When the webform was created |  [optional] |
|**customSlug** | **String** | The custom slug of the webform. Used in pretty webform URLs |  [optional] |
|**duplicateCheckOption** | [**DuplicateCheckOptionEnum**](#DuplicateCheckOptionEnum) | The option that determines if the lead submitted through the form is a duplicate or not. If it&#39;s a duplicate, then the lead will be merged with the existing contact record |  [optional] |
|**exitOption** | [**ExitOptionEnum**](#ExitOptionEnum) | The option that determines what happens after the form is submitted |  [optional] |
|**funnelId** | **String** | The id of the funnel this webform belongs to, if any |  [optional] |
|**id** | **String** | The unique identifier for this webform |  [optional] |
|**name** | **String** | The name of this webform |  [optional] |
|**prettyWebformUrl** | **String** | The URL for this webform that uses the custom slug to identify it |  [optional] |
|**thankYouPageUrl** | **String** | The URL of the thank you page for this webform |  [optional] |
|**updateTime** | **String** | When the webform was last updated |  [optional] |
|**webformType** | [**WebformTypeEnum**](#WebformTypeEnum) | The type of webform this is |  [optional] |
|**webformUrl** | **String** | The URL for this webform that uses the xid to identify it |  [optional] |
|**xid** | **String** | The public unique identifier for this tag, used in webform URLs |  [optional] |



## Enum: DuplicateCheckOptionEnum

| Name | Value |
|---- | -----|
| EMAIL | &quot;EMAIL&quot; |
| EMAIL_AND_NAME | &quot;EMAIL_AND_NAME&quot; |
| EMAIL_AND_NAME_AND_COMPANY | &quot;EMAIL_AND_NAME_AND_COMPANY&quot; |
| NO_CHECK | &quot;NO_CHECK&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: ExitOptionEnum

| Name | Value |
|---- | -----|
| REDIRECT | &quot;REDIRECT&quot; |
| FUNNEL_LINK | &quot;FUNNEL_LINK&quot; |
| HOSTED | &quot;HOSTED&quot; |
| LANDING_PAGE | &quot;LANDING_PAGE&quot; |
| WEB_FORM | &quot;WEB_FORM&quot; |
| SURVEY | &quot;SURVEY&quot; |
| UPDATE | &quot;UPDATE&quot; |
| UPDATE_OPT_OUT | &quot;UPDATE_OPT_OUT&quot; |
| OPT_OUT | &quot;OPT_OUT&quot; |
| CONFIRM | &quot;CONFIRM&quot; |
| MESSAGE | &quot;MESSAGE&quot; |
| AUTHORING_MESSAGE | &quot;AUTHORING_MESSAGE&quot; |
| MANUAL | &quot;MANUAL&quot; |
| CLOSE | &quot;CLOSE&quot; |
| DISPLAY_TEXT_AND_BUTTON | &quot;DISPLAY_TEXT_AND_BUTTON&quot; |
| ERROR | &quot;ERROR&quot; |
| HOSTED_PAGE | &quot;HOSTED_PAGE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: WebformTypeEnum

| Name | Value |
|---- | -----|
| LEGACY | &quot;LEGACY&quot; |
| STANDALONE | &quot;STANDALONE&quot; |
| FUNNEL | &quot;FUNNEL&quot; |
| LANDING_PAGE | &quot;LANDING_PAGE&quot; |
| SURVEY | &quot;SURVEY&quot; |
| INTERNAL | &quot;INTERNAL&quot; |
| TWITTER | &quot;TWITTER&quot; |
| UNKNOWN | &quot;UNKNOWN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

