# AchieveGoalResponse

Response containing the results of achieving a goal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[GoalEventResultDTO]**](GoalEventResultDTO.md) | List of results for each goal that was achieved. Contains information about flows started and stopped as a result. | [optional] 

## Example

```python
from keap_core_v2_client.models.achieve_goal_response import AchieveGoalResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchieveGoalResponse from a JSON string
achieve_goal_response_instance = AchieveGoalResponse.from_json(json)
# print the JSON string representation of the object
print(AchieveGoalResponse.to_json())

# convert the object into a dict
achieve_goal_response_dict = achieve_goal_response_instance.to_dict()
# create an instance of AchieveGoalResponse from a dict
achieve_goal_response_from_dict = AchieveGoalResponse.from_dict(achieve_goal_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


