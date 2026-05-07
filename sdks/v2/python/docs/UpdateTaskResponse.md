# UpdateTaskResponse


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
from keap_core_v2_client.models.update_task_response import UpdateTaskResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTaskResponse from a JSON string
update_task_response_instance = UpdateTaskResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateTaskResponse.to_json())

# convert the object into a dict
update_task_response_dict = update_task_response_instance.to_dict()
# create an instance of UpdateTaskResponse from a dict
update_task_response_from_dict = UpdateTaskResponse.from_dict(update_task_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


