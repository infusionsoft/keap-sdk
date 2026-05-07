# KeapCoreServiceV2Sdk.CreateTaskRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | Task title | [optional] 
**description** | **String** | Task description | [optional] 
**type** | **String** | Task type | [optional] 
**priority** | **String** | Task priority | [optional] 
**completed** | **Boolean** | Whether task is completed | [optional] 
**completionTime** | **String** | Completion timestamp (ISO-8601) | [optional] 
**dueTime** | **String** | Due date/time (ISO-8601) | [optional] 
**remindTimeMins** | **Number** | Value in minutes before start_date to show pop-up reminder. | [optional] 
**assignedToUserId** | **String** | Assigned user ID | 
**contactId** | **String** | Associated contact ID | [optional] 
**customFields** | [**[CustomFieldValueObject]**](CustomFieldValueObject.md) | Custom field values for the task. An empty array resets all custom fields to their defaults. | [optional] 



## Enum: PriorityEnum


* `CRITICAL` (value: `"CRITICAL"`)

* `ESSENTIAL` (value: `"ESSENTIAL"`)

* `NONESSENTIAL` (value: `"NONESSENTIAL"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: RemindTimeMinsEnum


* `5` (value: `5`)

* `10` (value: `10`)

* `15` (value: `15`)

* `30` (value: `30`)

* `60` (value: `60`)

* `120` (value: `120`)

* `240` (value: `240`)

* `480` (value: `480`)

* `1440` (value: `1440`)

* `2880` (value: `2880`)

* `unknown_default_open_api` (value: `11184809`)




