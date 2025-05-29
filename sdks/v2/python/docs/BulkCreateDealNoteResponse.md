# BulkCreateDealNoteResponse

Response model for creating a deal note as part of a bulk operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the note. | [optional] 
**body** | **str** | The body content of the note. | [optional] 
**deal_id** | **str** | The ID of the deal associated with the note. | [optional] 
**created_by** | **str** | The ID of the user who created the note. | [optional] 
**created_time** | **datetime** | The timestamp when the note was created. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;. | [optional] 
**modified_time** | **datetime** | The timestamp when the note was last modified. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;. | [optional] 
**create_success** | **bool** | Indicates whether the note was created successfully. | [optional] 
**error_message** | **str** | If the note creation was not successful, this field contains the error message. | [optional] 

## Example

```python
from keap_core_v2_client.models.bulk_create_deal_note_response import BulkCreateDealNoteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreateDealNoteResponse from a JSON string
bulk_create_deal_note_response_instance = BulkCreateDealNoteResponse.from_json(json)
# print the JSON string representation of the object
print(BulkCreateDealNoteResponse.to_json())

# convert the object into a dict
bulk_create_deal_note_response_dict = bulk_create_deal_note_response_instance.to_dict()
# create an instance of BulkCreateDealNoteResponse from a dict
bulk_create_deal_note_response_from_dict = BulkCreateDealNoteResponse.from_dict(bulk_create_deal_note_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


