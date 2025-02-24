# UpdateTaskResponse


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


