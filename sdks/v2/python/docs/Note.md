# Note


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
**custom_fields** | [**List[CustomFieldValueObject]**](CustomFieldValueObject.md) | Custom field values for the note | [optional] 

## Example

```python
from keap_core_v2_client.models.note import Note

# TODO update the JSON string below
json = "{}"
# create an instance of Note from a JSON string
note_instance = Note.from_json(json)
# print the JSON string representation of the object
print(Note.to_json())

# convert the object into a dict
note_dict = note_instance.to_dict()
# create an instance of Note from a dict
note_from_dict = Note.from_dict(note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


