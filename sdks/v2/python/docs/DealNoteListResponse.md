# DealNoteListResponse

Response model for a list of deal notes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. | [optional] 
**notes** | [**List[DealNote]**](DealNote.md) | The list of Note entities. | [optional] 

## Example

```python
from keap_core_v2_client.models.deal_note_list_response import DealNoteListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DealNoteListResponse from a JSON string
deal_note_list_response_instance = DealNoteListResponse.from_json(json)
# print the JSON string representation of the object
print(DealNoteListResponse.to_json())

# convert the object into a dict
deal_note_list_response_dict = deal_note_list_response_instance.to_dict()
# create an instance of DealNoteListResponse from a dict
deal_note_list_response_from_dict = DealNoteListResponse.from_dict(deal_note_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


