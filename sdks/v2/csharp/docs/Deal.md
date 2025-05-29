# Keap.Core.V2.Model.Deal
Represents a deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier for the model. | [optional] 
**Name** | **string** | The name of the deal. This field is required and must have at least one character. | 
**Value** | [**Money**](Money.md) | The monetary value of the deal. This field is required and must be valid. | 
**ContactIds** | **List&lt;string&gt;** | The list of IDs of contacts associated with the deal. This field is required. | 
**StageId** | **string** | The stage of the deal. This field is required and must be valid. | 
**StageAssignmentTime** | **DateTime** | The time when the deal was assigned to the current stage. This field is required. | 
**OwnerIds** | **List&lt;string&gt;** | The list of IDs of owners of the deal. This field is required. | [optional] 
**TaskIds** | **List&lt;string&gt;** | The list of task IDs associated with the deal. This field is required. | 
**OrderId** | **string** | The order of the deal. This field is optional. | [optional] 
**Status** | **string** | The status of the deal. This field is required. | 
**EstimatedCloseTime** | **DateTime?** | The estimated close time of the deal. This field is optional. | [optional] 
**ClosedTime** | **DateTime?** | The actual close time of the deal. This field is optional. | [optional] 
**CustomFields** | **Dictionary&lt;string, Object&gt;** | The custom fields associated with the deal. This field is optional. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

