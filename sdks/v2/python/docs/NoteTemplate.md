# NoteTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Template ID | [optional] 
**title** | **str** | Template title | [optional] 
**description** | **str** | Template description | [optional] 
**action_type** | **str** | Note action type | [optional] 
**assignment_user_id** | **int** | Default assigned user ID | [optional] 
**notify_users** | **List[str]** | List of user IDs to notify | [optional] 

## Example

```python
from keap_core_v2_client.models.note_template import NoteTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of NoteTemplate from a JSON string
note_template_instance = NoteTemplate.from_json(json)
# print the JSON string representation of the object
print(NoteTemplate.to_json())

# convert the object into a dict
note_template_dict = note_template_instance.to_dict()
# create an instance of NoteTemplate from a dict
note_template_from_dict = NoteTemplate.from_dict(note_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


