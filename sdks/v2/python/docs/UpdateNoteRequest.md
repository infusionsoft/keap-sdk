# UpdateNoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** |  | [optional] 
**is_pinned** | **bool** |  | [optional] 
**text** | **str** |  | [optional] 
**title** | **str** | A value for either &#x60;title&#x60; or &#x60;type&#x60; is required. | [optional] 
**type** | **str** | A value for either &#x60;title&#x60; or &#x60;type&#x60; is required. The value may be one of &#x60;Appointment&#x60;, &#x60;Call&#x60;, &#x60;Email&#x60;, &#x60;Fax&#x60;, &#x60;Letter&#x60; or &#x60;Other&#x60; in Keap Max/Pro, or an admin-configured value in Classic. | [optional] 
**user_id** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.update_note_request import UpdateNoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNoteRequest from a JSON string
update_note_request_instance = UpdateNoteRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNoteRequest.to_json())

# convert the object into a dict
update_note_request_dict = update_note_request_instance.to_dict()
# create an instance of UpdateNoteRequest from a dict
update_note_request_from_dict = UpdateNoteRequest.from_dict(update_note_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


