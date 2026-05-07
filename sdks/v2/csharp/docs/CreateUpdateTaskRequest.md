# Keap.Core.V2.Model.CreateUpdateTaskRequest
task

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | **string** | Task title | [optional] 
**Description** | **string** | Task description | [optional] 
**Type** | **string** | Task type | [optional] 
**Priority** | **string** | Task priority | [optional] 
**Completed** | **bool** | Whether task is completed | [optional] 
**CompletionTime** | **string** | Completion timestamp (ISO-8601) | [optional] 
**DueTime** | **string** | Due date/time (ISO-8601) | [optional] 
**RemindTimeMins** | **int** | Value in minutes before start_date to show pop-up reminder. | [optional] 
**AssignedToUserId** | **string** | Assigned user ID | [optional] 
**ContactId** | **string** | Associated contact ID | [optional] 
**CustomFields** | [**List&lt;CustomFieldValueObject&gt;**](CustomFieldValueObject.md) | Custom field values for the task. An empty array resets all custom fields to their defaults. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

