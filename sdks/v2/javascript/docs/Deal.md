# KeapCoreServiceV2Sdk.Deal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the model. | [optional] 
**name** | **String** | The name of the deal. This field is required and must have at least one character. | 
**value** | [**DealValue**](DealValue.md) |  | 
**contacts** | [**[DealContact]**](DealContact.md) | The list of contacts associated with the deal. This field is required. | 
**stage** | [**DealStage**](DealStage.md) |  | 
**stageAssignmentTime** | **Date** | The time when the deal was assigned to the current stage. This field is required. | 
**owners** | [**[Owner]**](Owner.md) | The list of owners of the deal. This field is required. | 
**ownerId** | **String** | The ID of the owner of the deal. This field is optional. | [optional] 
**taskIds** | **[String]** | The list of task IDs associated with the deal. This field is required. | 
**orderId** | **String** | The order of the deal. This field is optional. | [optional] 
**status** | **String** | The status of the deal. This field is required. | 
**estimatedCloseTime** | **Date** | The estimated close time of the deal. This field is optional. | [optional] 
**closedTime** | **Date** | The actual close time of the deal. This field is optional. | [optional] 
**customFields** | **{String: Object}** | The custom fields associated with the deal. This field is optional. | [optional] 


