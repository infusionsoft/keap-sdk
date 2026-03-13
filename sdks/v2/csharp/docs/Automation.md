# Keap.Core.V2.Model.Automation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier of the automation | [optional] 
**Title** | **string** | The title of the automation | [optional] 
**Categories** | **List&lt;string&gt;** | List of category IDs associated with this automation | [optional] 
**Status** | **string** | The publication status of the automation | [optional] 
**Locked** | **bool** | Whether the automation is locked for editing | [optional] 
**ActiveContacts** | **int** | Number of contacts currently active in this automation | [optional] 
**ErrorMessage** | **string** | Error message if the automation has issues | [optional] 
**PublishedDate** | **DateTime** | The date and time when the automation was published. In ISO-8601 format | [optional] 
**PublishedBy** | **string** | The user ID who published the automation | [optional] 
**PublishedTimezone** | **string** | The timezone used when publishing | [optional] 
**CurrentEditLockStatus** | [**AutomationLockStatus**](AutomationLockStatus.md) | Current edit lock status information | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

