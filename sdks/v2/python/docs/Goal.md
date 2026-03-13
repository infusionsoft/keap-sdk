# Goal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the goal | [optional] 
**name** | **str** | The name of the goal | [optional] 
**type** | **str** | The type of goal | [optional] 
**historical_contact_counts** | [**HistoricalCounts**](HistoricalCounts.md) | Historical contact counts for this goal | [optional] 
**next_sequence_ids** | **List[str]** | IDs of sequences that follow this goal | [optional] 
**previous_sequence_ids** | **List[str]** | IDs of sequences that precede this goal | [optional] 

## Example

```python
from keap_core_v2_client.models.goal import Goal

# TODO update the JSON string below
json = "{}"
# create an instance of Goal from a JSON string
goal_instance = Goal.from_json(json)
# print the JSON string representation of the object
print(Goal.to_json())

# convert the object into a dict
goal_dict = goal_instance.to_dict()
# create an instance of Goal from a dict
goal_from_dict = Goal.from_dict(goal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


