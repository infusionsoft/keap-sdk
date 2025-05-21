# Keap.Core.V2.Model.CreateDealRequest
Request model for creating a deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the deal. This field is required and must have at least one character. | 
**Value** | [**Money**](Money.md) | The monetary value of the deal. This field is required and must be valid. | 
**Contacts** | [**List&lt;DealContact&gt;**](DealContact.md) | The list of contacts associated with the deal. This field is required. | 
**Stage** | [**Stage**](Stage.md) | The stage of the deal. This field is required and must be valid. | 
**Owners** | [**List&lt;Owner&gt;**](Owner.md) | The list of owners of the deal. This field is required. | 
**OwnerId** | **string** | The ID of the owner of the deal. This field is optional. | [optional] 
**TaskIds** | **List&lt;string&gt;** | The list of task IDs associated with the deal. This field is required. | 
**Status** | **string** | The status of the deal. This field is required. | 
**EstimatedCloseTime** | **DateTime?** | The estimated close time of the deal. This field is optional. | [optional] 
**CustomFields** | **Dictionary&lt;string, Object&gt;** | The custom fields associated with the deal. This field is optional. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

