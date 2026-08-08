

# EmailAddressRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**email** | **String** | Email address. Maximum length is 75 characters for EMAIL1 and 100 characters for EMAIL2 and EMAIL3. |  [optional] |
|**field** | [**FieldEnum**](#FieldEnum) | Email address slot |  [optional] |
|**optInReason** | **String** | Reason for opting in |  [optional] |



## Enum: FieldEnum

| Name | Value |
|---- | -----|
| EMAIL_FIELD_UNSPECIFIED | &quot;EMAIL_FIELD_UNSPECIFIED&quot; |
| EMAIL1 | &quot;EMAIL1&quot; |
| EMAIL2 | &quot;EMAIL2&quot; |
| EMAIL3 | &quot;EMAIL3&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

