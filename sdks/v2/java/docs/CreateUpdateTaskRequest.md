

# CreateUpdateTaskRequest

task

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**title** | **String** | Task title |  [optional] |
|**description** | **String** | Task description |  [optional] |
|**type** | **String** | Task type |  [optional] |
|**priority** | [**PriorityEnum**](#PriorityEnum) | Task priority |  [optional] |
|**completed** | **Boolean** | Whether task is completed |  [optional] |
|**completionTime** | **String** | Completion timestamp (ISO-8601) |  [optional] |
|**dueTime** | **String** | Due date/time (ISO-8601) |  [optional] |
|**remindTimeMins** | [**RemindTimeMinsEnum**](#RemindTimeMinsEnum) | Value in minutes before start_date to show pop-up reminder. |  [optional] |
|**assignedToUserId** | **String** | Assigned user ID |  [optional] |
|**contactId** | **String** | Associated contact ID |  [optional] |
|**customFields** | [**List&lt;CustomFieldValueObject&gt;**](CustomFieldValueObject.md) | Custom field values for the task. An empty array resets all custom fields to their defaults. |  [optional] |



## Enum: PriorityEnum

| Name | Value |
|---- | -----|
| CRITICAL | &quot;CRITICAL&quot; |
| ESSENTIAL | &quot;ESSENTIAL&quot; |
| NONESSENTIAL | &quot;NONESSENTIAL&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: RemindTimeMinsEnum

| Name | Value |
|---- | -----|
| NUMBER_5 | 5 |
| NUMBER_10 | 10 |
| NUMBER_15 | 15 |
| NUMBER_30 | 30 |
| NUMBER_60 | 60 |
| NUMBER_120 | 120 |
| NUMBER_240 | 240 |
| NUMBER_480 | 480 |
| NUMBER_1440 | 1440 |
| NUMBER_2880 | 2880 |
| UNKNOWN_COULD_NOT_DESERIALIZE | 11184809 |


## Implemented Interfaces

* Serializable

