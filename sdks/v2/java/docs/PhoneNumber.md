

# PhoneNumber


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**extension** | **String** | Phone extension |  [optional] |
|**number** | **String** | Phone number. Maximum length is 40 characters for PHONE1-PHONE3 and 20 characters for PHONE4-PHONE5. |  [optional] |
|**type** | **String** | Phone type |  [optional] |
|**field** | [**FieldEnum**](#FieldEnum) | Phone number slot |  [optional] |
|**numberE164** | **String** | Phone number in E.164 format |  [optional] |



## Enum: FieldEnum

| Name | Value |
|---- | -----|
| PHONE_NUMBER_FIELD_UNSPECIFIED | &quot;PHONE_NUMBER_FIELD_UNSPECIFIED&quot; |
| PHONE1 | &quot;PHONE1&quot; |
| PHONE2 | &quot;PHONE2&quot; |
| PHONE3 | &quot;PHONE3&quot; |
| PHONE4 | &quot;PHONE4&quot; |
| PHONE5 | &quot;PHONE5&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

