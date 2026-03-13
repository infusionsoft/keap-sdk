# KeapCoreServiceV2Sdk.GoalEventResultDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **Boolean** | Whether the goal was successfully achieved | [optional] 
**message** | **String** | A message with details about the result | [optional] 
**automationId** | **Number** | The automation ID where the goal was achieved | [optional] 
**goalId** | **Number** | The goal ID that was achieved | [optional] 
**flowStartResults** | [**[FlowEventResultDTO]**](FlowEventResultDTO.md) | List of flows that were started as a result of achieving this goal | [optional] 
**flowStopResults** | [**[FlowEventResultDTO]**](FlowEventResultDTO.md) | List of flows that were stopped as a result of achieving this goal | [optional] 


