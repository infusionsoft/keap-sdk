# GetNoteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Note ID | [optional] 
**text** | **str** | Note content | [optional] 
**title** | **str** | Note title | [optional] 
**type** | **str** | Note type | [optional] 
**contact_id** | **str** | Associated contact ID | [optional] 
**assigned_to_user** | [**BasicUser**](BasicUser.md) | User assigned to this note | [optional] 
**create_time** | **str** | Creation timestamp (ISO-8601) | [optional] 
**update_time** | **str** | Last update timestamp (ISO-8601) | [optional] 
**last_updated_by_user_id** | **str** | ID of user who last updated | [optional] 
**pinned_at** | **str** | Pin timestamp (ISO-8601), null if not pinned | [optional] 
**created_by_user_id** | **str** | ID of user who created | [optional] 

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


