# BulkCreateDealNotesRequest

Request model for creating multiple deal notes in bulk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_note_requests** | [**List[BulkCreateDealNoteRequest]**](BulkCreateDealNoteRequest.md) | List of requests to create deal notes. Each request must not be null and must contain valid data. | 

## Example

```python
from keap_core_v2_client.models.bulk_create_deal_notes_request import BulkCreateDealNotesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreateDealNotesRequest from a JSON string
bulk_create_deal_notes_request_instance = BulkCreateDealNotesRequest.from_json(json)
# print the JSON string representation of the object
print(BulkCreateDealNotesRequest.to_json())

# convert the object into a dict
bulk_create_deal_notes_request_dict = bulk_create_deal_notes_request_instance.to_dict()
# create an instance of BulkCreateDealNotesRequest from a dict
bulk_create_deal_notes_request_from_dict = BulkCreateDealNotesRequest.from_dict(bulk_create_deal_notes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


