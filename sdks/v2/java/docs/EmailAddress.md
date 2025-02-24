

# EmailAddress


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**email** | **String** |  |  [optional] |
|**emailOptStatus** | [**EmailOptStatusEnum**](#EmailOptStatusEnum) |  |  [optional] |
|**field** | [**FieldEnum**](#FieldEnum) |  |  [optional] |
|**isOptIn** | **Boolean** |  |  [optional] |
|**optInReason** | **String** |  |  [optional] |



## Enum: EmailOptStatusEnum

| Name | Value |
|---- | -----|
| UNENGAGED_MARKETABLE | &quot;UNENGAGED_MARKETABLE&quot; |
| SINGLE_OPT_IN | &quot;SINGLE_OPT_IN&quot; |
| DOUBLE_OPT_IN | &quot;DOUBLE_OPT_IN&quot; |
| CONFIRMED | &quot;CONFIRMED&quot; |
| UNENGAGED_NON_MARKETABLE | &quot;UNENGAGED_NON_MARKETABLE&quot; |
| NON_MARKETABLE | &quot;NON_MARKETABLE&quot; |
| LOCKDOWN | &quot;LOCKDOWN&quot; |
| BOUNCE | &quot;BOUNCE&quot; |
| HARD_BOUNCE | &quot;HARD_BOUNCE&quot; |
| MANUAL | &quot;MANUAL&quot; |
| ADMIN | &quot;ADMIN&quot; |
| SYSTEM | &quot;SYSTEM&quot; |
| LIST_UNSUBSCRIBE | &quot;LIST_UNSUBSCRIBE&quot; |
| FEEDBACK | &quot;FEEDBACK&quot; |
| SPAM | &quot;SPAM&quot; |
| INVALID | &quot;INVALID&quot; |
| DEACTIVATED | &quot;DEACTIVATED&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



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

