# ListNoteTemplateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**note_templates** | [**List[NoteTemplate]**](NoteTemplate.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_note_template_response import ListNoteTemplateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNoteTemplateResponse from a JSON string
list_note_template_response_instance = ListNoteTemplateResponse.from_json(json)
# print the JSON string representation of the object
print(ListNoteTemplateResponse.to_json())

# convert the object into a dict
list_note_template_response_dict = list_note_template_response_instance.to_dict()
# create an instance of ListNoteTemplateResponse from a dict
list_note_template_response_from_dict = ListNoteTemplateResponse.from_dict(list_note_template_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


