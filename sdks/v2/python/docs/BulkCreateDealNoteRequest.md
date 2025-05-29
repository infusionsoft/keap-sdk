# BulkCreateDealNoteRequest

Request model for creating a deal note as part of a bulk operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The body of the note. Must not be blank and must be between 1 and 5000 characters. | 
**created_by** | **str** | The creator of the note. Must not be blank and must be between 1 and 255 characters. | 
**deal_id** | **str** | The ID of the deal to which the note is associated. Must not be blank. | 

## Example

```python
from keap_core_v2_client.models.bulk_create_deal_note_request import BulkCreateDealNoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreateDealNoteRequest from a JSON string
bulk_create_deal_note_request_instance = BulkCreateDealNoteRequest.from_json(json)
# print the JSON string representation of the object
print(BulkCreateDealNoteRequest.to_json())

# convert the object into a dict
bulk_create_deal_note_request_dict = bulk_create_deal_note_request_instance.to_dict()
# create an instance of BulkCreateDealNoteRequest from a dict
bulk_create_deal_note_request_from_dict = BulkCreateDealNoteRequest.from_dict(bulk_create_deal_note_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


