# DealNote

A model representing a note associated with a deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the model. | [optional] 
**deal_id** | **str** | The ID of the deal associated with the note. | [optional] 
**body** | **str** | The body content of the note. | [optional] 
**created_by** | **str** | The ID of the user who created the note. | [optional] 
**created_time** | **datetime** | The timestamp when the note was created. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;. | [optional] 
**modified_time** | **datetime** | The timestamp when the note was last modified. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;. | [optional] 

## Example

```python
from keap_core_v2_client.models.deal_note import DealNote

# TODO update the JSON string below
json = "{}"
# create an instance of DealNote from a JSON string
deal_note_instance = DealNote.from_json(json)
# print the JSON string representation of the object
print(DealNote.to_json())

# convert the object into a dict
deal_note_dict = deal_note_instance.to_dict()
# create an instance of DealNote from a dict
deal_note_from_dict = DealNote.from_dict(deal_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


