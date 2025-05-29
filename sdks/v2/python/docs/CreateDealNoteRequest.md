# CreateDealNoteRequest

Request model for creating a deal note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The body of the note. Must not be blank and must be between 1 and 5000 characters. | 
**created_by** | **str** | The creator of the note. Must not be blank and must be between 1 and 255 characters. | 

## Example

```python
from keap_core_v2_client.models.create_deal_note_request import CreateDealNoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDealNoteRequest from a JSON string
create_deal_note_request_instance = CreateDealNoteRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDealNoteRequest.to_json())

# convert the object into a dict
create_deal_note_request_dict = create_deal_note_request_instance.to_dict()
# create an instance of CreateDealNoteRequest from a dict
create_deal_note_request_from_dict = CreateDealNoteRequest.from_dict(create_deal_note_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


