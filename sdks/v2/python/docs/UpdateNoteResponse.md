# UpdateNoteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_to_user** | [**BasicUser**](BasicUser.md) |  | [optional] 
**contact_id** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**created_by_user_id** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_updated_by_user_id** | **str** |  | [optional] 
**pinned_at** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_note_response import UpdateNoteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNoteResponse from a JSON string
update_note_response_instance = UpdateNoteResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateNoteResponse.to_json())

# convert the object into a dict
update_note_response_dict = update_note_response_instance.to_dict()
# create an instance of UpdateNoteResponse from a dict
update_note_response_from_dict = UpdateNoteResponse.from_dict(update_note_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


