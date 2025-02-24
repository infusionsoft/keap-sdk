# GetNoteResponse


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
from keap_core_v2_client.models.get_note_response import GetNoteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetNoteResponse from a JSON string
get_note_response_instance = GetNoteResponse.from_json(json)
# print the JSON string representation of the object
print(GetNoteResponse.to_json())

# convert the object into a dict
get_note_response_dict = get_note_response_instance.to_dict()
# create an instance of GetNoteResponse from a dict
get_note_response_from_dict = GetNoteResponse.from_dict(get_note_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


