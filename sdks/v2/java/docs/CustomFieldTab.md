

# CustomFieldTab


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The unique identifier of the custom field tab |  [optional] |
|**name** | **String** | The name of the custom field tab |  [optional] |
|**order** | **Integer** | The display order of the tab |  [optional] |
|**recordType** | [**RecordTypeEnum**](#RecordTypeEnum) | The record type this tab belongs to (e.g., CONTACT, COMPANY, OPPORTUNITY, REFERRAL_PARTNER, ORDER, SUBSCRIPTION, TASK_NOTE_APPOINTMENT) |  [optional] |



## Enum: RecordTypeEnum

| Name | Value |
|---- | -----|
| CONTACT | &quot;CONTACT&quot; |
| REFERRAL_PARTNER | &quot;REFERRAL_PARTNER&quot; |
| OPPORTUNITY | &quot;OPPORTUNITY&quot; |
| TASK_NOTE_APPOINTMENT | &quot;TASK_NOTE_APPOINTMENT&quot; |
| COMPANY | &quot;COMPANY&quot; |
| ORDER | &quot;ORDER&quot; |
| SUBSCRIPTION | &quot;SUBSCRIPTION&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

