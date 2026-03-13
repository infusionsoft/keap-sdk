# KeapCoreServiceV2Sdk.Automation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the automation | [optional] 
**title** | **String** | The title of the automation | [optional] 
**categories** | **[String]** | List of category IDs associated with this automation | [optional] 
**status** | **String** | The publication status of the automation | [optional] 
**locked** | **Boolean** | Whether the automation is locked for editing | [optional] 
**activeContacts** | **Number** | Number of contacts currently active in this automation | [optional] 
**errorMessage** | **String** | Error message if the automation has issues | [optional] 
**publishedDate** | **Date** | The date and time when the automation was published. In ISO-8601 format | [optional] 
**publishedBy** | **String** | The user ID who published the automation | [optional] 
**publishedTimezone** | **String** | The timezone used when publishing | [optional] 
**currentEditLockStatus** | [**AutomationLockStatus**](AutomationLockStatus.md) | Current edit lock status information | [optional] 



## Enum: StatusEnum


* `PUBLISHED` (value: `"PUBLISHED"`)

* `DRAFT` (value: `"DRAFT"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




