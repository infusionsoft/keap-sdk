# GoalEventResultDTO

Result of achieving a specific goal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | Whether the goal was successfully achieved | [optional] 
**message** | **str** | A message with details about the result | [optional] 
**automation_id** | **int** | The automation ID where the goal was achieved | [optional] 
**goal_id** | **int** | The goal ID that was achieved | [optional] 
**flow_start_results** | [**List[FlowEventResultDTO]**](FlowEventResultDTO.md) | List of flows that were started as a result of achieving this goal | [optional] 
**flow_stop_results** | [**List[FlowEventResultDTO]**](FlowEventResultDTO.md) | List of flows that were stopped as a result of achieving this goal | [optional] 

## Example

```python
from keap_core_v2_client.models.goal_event_result_dto import GoalEventResultDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GoalEventResultDTO from a JSON string
goal_event_result_dto_instance = GoalEventResultDTO.from_json(json)
# print the JSON string representation of the object
print(GoalEventResultDTO.to_json())

# convert the object into a dict
goal_event_result_dto_dict = goal_event_result_dto_instance.to_dict()
# create an instance of GoalEventResultDTO from a dict
goal_event_result_dto_from_dict = GoalEventResultDTO.from_dict(goal_event_result_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


