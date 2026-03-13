

# Contact


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique identifier |  [optional] |
|**links** | [**List&lt;Link&gt;**](Link.md) |  |  [optional] |
|**addresses** | [**List&lt;Address&gt;**](Address.md) |  |  [optional] |
|**company** | [**BasicCompany**](BasicCompany.md) | Associated company |  [optional] |
|**origin** | [**Origin**](Origin.md) |  |  [optional] |
|**prefix** | **String** | Name prefix |  [optional] |
|**suffix** | **String** | Name suffix |  [optional] |
|**website** | **String** | Personal website URL |  [optional] |
|**updateTime** | **String** | Last update timestamp (ISO-8601) |  [optional] |
|**createTime** | **String** | Creation timestamp (ISO-8601) |  [optional] |
|**scoreValue** | **String** | Contact score value |  [optional] |
|**tagIds** | **List&lt;String&gt;** |  |  [optional] |
|**anniversaryDate** | **String** | The anniversary date |  [optional] |
|**birthDate** | **String** | The birth date |  [optional] |
|**contactType** | **String** | Type of contact |  [optional] |
|**customFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) |  |  [optional] |
|**emailAddresses** | [**List&lt;EmailAddress&gt;**](EmailAddress.md) |  |  [optional] |
|**familyName** | **String** | Last name / surname |  [optional] |
|**faxNumbers** | [**List&lt;FaxNumber&gt;**](FaxNumber.md) |  |  [optional] |
|**givenName** | **String** | First name |  [optional] |
|**jobTitle** | **String** | Job title |  [optional] |
|**leadsourceId** | **String** | Lead source identifier |  [optional] |
|**middleName** | **String** | Middle name |  [optional] |
|**ownerId** | **String** | ID of the user who owns this contact |  [optional] |
|**phoneNumbers** | [**List&lt;PhoneNumber&gt;**](PhoneNumber.md) |  |  [optional] |
|**preferredLocale** | **String** | Preferred locale |  [optional] |
|**preferredName** | **String** | Preferred name or nickname |  [optional] |
|**referralCode** | **String** | Referral code |  [optional] |
|**socialAccounts** | [**List&lt;SocialAccount&gt;**](SocialAccount.md) |  |  [optional] |
|**sourceType** | [**SourceTypeEnum**](#SourceTypeEnum) |  |  [optional] |
|**spouseName** | **String** | Spouse&#39;s name |  [optional] |
|**timeZone** | **String** | Contact&#39;s timezone |  [optional] |
|**utmParameters** | [**List&lt;ContactUtmResponse&gt;**](ContactUtmResponse.md) |  |  [optional] |



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

