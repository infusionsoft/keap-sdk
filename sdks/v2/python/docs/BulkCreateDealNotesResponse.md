# BulkCreateDealNotesResponse

Response model for creating multiple deal notes in bulk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_note_responses** | [**List[BulkCreateDealNoteResponse]**](BulkCreateDealNoteResponse.md) | List of responses for each deal note creation request. Each response contains details about the creation status and any associated error messages. | [optional] 

## Example

```python
from keap_core_v2_client.models.bulk_create_deal_notes_response import BulkCreateDealNotesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreateDealNotesResponse from a JSON string
bulk_create_deal_notes_response_instance = BulkCreateDealNotesResponse.from_json(json)
# print the JSON string representation of the object
print(BulkCreateDealNotesResponse.to_json())

# convert the object into a dict
bulk_create_deal_notes_response_dict = bulk_create_deal_notes_response_instance.to_dict()
# create an instance of BulkCreateDealNotesResponse from a dict
bulk_create_deal_notes_response_from_dict = BulkCreateDealNotesResponse.from_dict(bulk_create_deal_notes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


