# CreateTaskRequest

task

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | Task title | [optional] 
**description** | **str** | Task description | [optional] 
**type** | **str** | Task type | [optional] 
**priority** | **str** | Task priority | [optional] 
**completed** | **bool** | Whether task is completed | [optional] 
**completion_time** | **str** | Completion timestamp (ISO-8601) | [optional] 
**due_time** | **str** | Due date/time (ISO-8601) | [optional] 
**remind_time_mins** | **int** | Value in minutes before start_date to show pop-up reminder. | [optional] 
**assigned_to_user_id** | **str** | Assigned user ID | 
**contact_id** | **str** | Associated contact ID | [optional] 
**custom_fields** | [**List[CustomFieldValueObject]**](CustomFieldValueObject.md) | Custom field values for the task. An empty array resets all custom fields to their defaults. | [optional] 

## Example

```python
from keap_core_v2_client.models.create_task_request import CreateTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTaskRequest from a JSON string
create_task_request_instance = CreateTaskRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTaskRequest.to_json())

# convert the object into a dict
create_task_request_dict = create_task_request_instance.to_dict()
# create an instance of CreateTaskRequest from a dict
create_task_request_from_dict = CreateTaskRequest.from_dict(create_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


