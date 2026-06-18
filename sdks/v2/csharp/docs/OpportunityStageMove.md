# Keap.Core.V2.Model.OpportunityStageMove
Historical record of an opportunity moving from one pipeline stage to another

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique ID of this stage-move record | [optional] 
**OpportunityId** | **string** | ID of the opportunity that was moved | [optional] 
**MoveTime** | **string** | Date-time when the move occurred (ISO-8601 UTC) | [optional] 
**MoveFromStageId** | **string** | ID of the stage moved FROM. 0 &#x3D; no previous stage (first move) | [optional] 
**MoveToStageId** | **string** | ID of the stage moved TO | [optional] 
**PrevStageMoveTime** | **string** | Date-time of the previous stage-move (ISO-8601 UTC). Null if first move. | [optional] 
**UserId** | **string** | ID of the user associated with this move | [optional] 
**CreatedBy** | **string** | ID of the user who created this record | [optional] 
**CreateTime** | **string** | Date-time this record was created (ISO-8601 UTC) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

