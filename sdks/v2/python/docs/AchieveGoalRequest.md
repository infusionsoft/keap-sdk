# AchieveGoalRequest

Request to achieve a goal in an automation. You must provide EITHER (integration + call_name) OR (automation_id + goal_id), along with contact_id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **str** | The integration name of the goal. Required when using integration/call_name approach. Use together with &#39;call_name&#39;. Mutually exclusive with automation_id/goal_id. | [optional] 
**call_name** | **str** | The call name of the goal. Required when using integration/call_name approach. Use together with &#39;integration&#39;. Mutually exclusive with automation_id/goal_id. | [optional] 
**automation_id** | **int** | The automation ID. Required when using automation_id/goal_id approach. Use together with &#39;goal_id&#39;. Mutually exclusive with integration/call_name. | [optional] 
**goal_id** | **int** | The goal ID within the automation. Required when using automation_id/goal_id approach. Use together with &#39;automation_id&#39;. Mutually exclusive with integration/call_name. | [optional] 
**contact_id** | **int** | The contact ID for whom to achieve the goal | 

## Example

```python
from keap_core_v2_client.models.achieve_goal_request import AchieveGoalRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AchieveGoalRequest from a JSON string
achieve_goal_request_instance = AchieveGoalRequest.from_json(json)
# print the JSON string representation of the object
print(AchieveGoalRequest.to_json())

# convert the object into a dict
achieve_goal_request_dict = achieve_goal_request_instance.to_dict()
# create an instance of AchieveGoalRequest from a dict
achieve_goal_request_from_dict = AchieveGoalRequest.from_dict(achieve_goal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


