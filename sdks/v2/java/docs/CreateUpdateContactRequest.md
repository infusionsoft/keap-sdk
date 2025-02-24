

# CreateUpdateContactRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**addresses** | [**List&lt;Address&gt;**](Address.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. |  [optional] |
|**anniversaryDate** | **String** |  |  [optional] |
|**birthDate** | **String** |  |  [optional] |
|**company** | [**BasicCompany**](BasicCompany.md) |  |  [optional] |
|**contactType** | **String** |  |  [optional] |
|**customFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. |  [optional] |
|**emailAddresses** | [**List&lt;EmailAddressRequest&gt;**](EmailAddressRequest.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. |  [optional] |
|**familyName** | **String** |  |  [optional] |
|**faxNumbers** | [**List&lt;FaxNumber&gt;**](FaxNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. |  [optional] |
|**givenName** | **String** |  |  [optional] |
|**jobTitle** | **String** |  |  [optional] |
|**leadsourceId** | **String** |  |  [optional] |
|**middleName** | **String** |  |  [optional] |
|**origin** | [**OriginRequest**](OriginRequest.md) |  |  [optional] |
|**ownerId** | **String** |  |  [optional] |
|**phoneNumbers** | [**List&lt;PhoneNumber&gt;**](PhoneNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. |  [optional] |
|**preferredLocale** | **String** |  |  [optional] |
|**preferredName** | **String** |  |  [optional] |
|**prefix** | **String** |  |  [optional] |
|**referralCode** | **String** |  |  [optional] |
|**socialAccounts** | [**List&lt;SocialAccount&gt;**](SocialAccount.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. |  [optional] |
|**sourceType** | [**SourceTypeEnum**](#SourceTypeEnum) |  |  [optional] |
|**spouseName** | **String** |  |  [optional] |
|**suffix** | **String** |  |  [optional] |
|**timeZone** | **String** |  |  [optional] |
|**utmParameters** | [**CreateContactUtmPropertiesRequest**](CreateContactUtmPropertiesRequest.md) |  |  [optional] |
|**website** | **String** |  |  [optional] |



## Enum: SourceTypeEnum

| Name | Value |
|---- | -----|
| SOURCE_TYPE_UNSPECIFIED | &quot;SOURCE_TYPE_UNSPECIFIED&quot; |
| API | &quot;API&quot; |
| APPOINTMENT | &quot;APPOINTMENT&quot; |
| FORM_API_HOSTED | &quot;FORM_API_HOSTED&quot; |
| FORM_API_INTERNAL | &quot;FORM_API_INTERNAL&quot; |
| IMPORT | &quot;IMPORT&quot; |
| INTERNAL_FORM | &quot;INTERNAL_FORM&quot; |
| LANDING_PAGE | &quot;LANDING_PAGE&quot; |
| MANUAL | &quot;MANUAL&quot; |
| OTHER | &quot;OTHER&quot; |
| UNKNOWN | &quot;UNKNOWN&quot; |
| WEBFORM | &quot;WEBFORM&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

