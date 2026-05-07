# Task


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Task ID | [optional] 
**title** | **str** | Task title | [optional] 
**description** | **str** | Task description | [optional] 
**type** | **str** | Task type | [optional] 
**priority** | **str** | Task priority | [optional] 
**completed** | **bool** | Whether task is completed | [optional] 
**create_time** | **str** | Creation timestamp (ISO-8601) | [optional] 
**modification_time** | **str** | Last modification timestamp (ISO-8601) | [optional] 
**completion_time** | **str** | Completion timestamp (ISO-8601) | [optional] 
**due_time** | **str** | Due date/time (ISO-8601) | [optional] 
**remind_time_mins** | **int** | Reminder minutes before due. | [optional] 
**assigned_to_user_id** | **str** | Assigned user ID | [optional] 
**created_by_user_id** | **str** | Creator user ID | [optional] 
**contact_id** | **str** | Associated contact ID | [optional] 
**custom_fields** | [**List[CustomFieldValueObject]**](CustomFieldValueObject.md) | Custom field values for the task | [optional] 

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


