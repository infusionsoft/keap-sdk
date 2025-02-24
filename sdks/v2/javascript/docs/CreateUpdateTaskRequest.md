# KeapCoreServiceV2Sdk.CreateUpdateTaskRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignedToUserId** | **String** |  | [optional] 
**completed** | **Boolean** |  | [optional] 
**completionTime** | **String** |  | [optional] 
**contactId** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**dueTime** | **String** |  | [optional] 
**priority** | **String** |  | [optional] 
**remindTimeMins** | **Number** | Value in minutes before start_date to show pop-up reminder.  Acceptable values are [5,10,15,30,60,120,240,480,1440,2880] | [optional] 
**title** | **String** |  | [optional] 
**type** | **String** |  | [optional] 



## Enum: PriorityEnum


* `CRITICAL` (value: `"CRITICAL"`)

* `ESSENTIAL` (value: `"ESSENTIAL"`)

* `NONESSENTIAL` (value: `"NONESSENTIAL"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: TypeEnum


* `EMAIL` (value: `"EMAIL"`)

* `CALL` (value: `"CALL"`)

* `APPOINTMENT` (value: `"APPOINTMENT"`)

* `FAX` (value: `"FAX"`)

* `LETTER` (value: `"LETTER"`)

* `OTHER` (value: `"OTHER"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




