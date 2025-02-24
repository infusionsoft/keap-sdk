# CreateUpdateTaskRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_to_user_id** | **str** |  | [optional] 
**completed** | **bool** |  | [optional] 
**completion_time** | **str** |  | [optional] 
**contact_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**due_time** | **str** |  | [optional] 
**priority** | **str** |  | [optional] 
**remind_time_mins** | **int** | Value in minutes before start_date to show pop-up reminder.  Acceptable values are [5,10,15,30,60,120,240,480,1440,2880] | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_update_task_request import CreateUpdateTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUpdateTaskRequest from a JSON string
create_update_task_request_instance = CreateUpdateTaskRequest.from_json(json)
# print the JSON string representation of the object
print(CreateUpdateTaskRequest.to_json())

# convert the object into a dict
create_update_task_request_dict = create_update_task_request_instance.to_dict()
# create an instance of CreateUpdateTaskRequest from a dict
create_update_task_request_from_dict = CreateUpdateTaskRequest.from_dict(create_update_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


