# Task


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_to_user_id** | **str** |  | [optional] 
**completed** | **bool** |  | [optional] 
**completion_time** | **str** |  | [optional] 
**contact_id** | **str** |  | [optional] 
**create_time** | **str** | On initial object the returned value for this property may not accurately represent the exact stored value. | [optional] 
**created_by_user_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**due_time** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**modification_time** | **str** |  | [optional] 
**priority** | **str** |  | [optional] 
**remind_time_mins** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.task import Task

# TODO update the JSON string below
json = "{}"
# create an instance of Task from a JSON string
task_instance = Task.from_json(json)
# print the JSON string representation of the object
print(Task.to_json())

# convert the object into a dict
task_dict = task_instance.to_dict()
# create an instance of Task from a dict
task_from_dict = Task.from_dict(task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


