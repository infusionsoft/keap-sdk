# UpdateDealNoteRequest

Request model for updating a deal note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The body of the note. Must not be blank and must be between 1 and 5000 characters. | 

## Example

```python
from keap_core_v2_client.models.update_deal_note_request import UpdateDealNoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDealNoteRequest from a JSON string
update_deal_note_request_instance = UpdateDealNoteRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDealNoteRequest.to_json())

# convert the object into a dict
update_deal_note_request_dict = update_deal_note_request_instance.to_dict()
# create an instance of UpdateDealNoteRequest from a dict
update_deal_note_request_from_dict = UpdateDealNoteRequest.from_dict(update_deal_note_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


