# Keap.Core.V2.Model.GoalEventResultDTO
Result of achieving a specific goal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | **bool** | Whether the goal was successfully achieved | [optional] 
**Message** | **string** | A message with details about the result | [optional] 
**AutomationId** | **long** | The automation ID where the goal was achieved | [optional] 
**GoalId** | **long** | The goal ID that was achieved | [optional] 
**FlowStartResults** | [**List&lt;FlowEventResultDTO&gt;**](FlowEventResultDTO.md) | List of flows that were started as a result of achieving this goal | [optional] 
**FlowStopResults** | [**List&lt;FlowEventResultDTO&gt;**](FlowEventResultDTO.md) | List of flows that were stopped as a result of achieving this goal | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

