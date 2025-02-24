# CreateNoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_pinned** | **bool** |  | [optional] 
**text** | **str** |  | [optional] 
**title** | **str** | A value for either &#x60;title&#x60; or &#x60;type&#x60; is required. | [optional] 
**type** | **str** | A value for either &#x60;title&#x60; or &#x60;type&#x60; is required. The value may be one of &#x60;Appointment&#x60;, &#x60;Call&#x60;, &#x60;Email&#x60;, &#x60;Fax&#x60;, &#x60;Letter&#x60; or &#x60;Other&#x60; in Keap Max/Pro, or an admin-configured value in Classic. | [optional] 
**user_id** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.create_note_request import CreateNoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNoteRequest from a JSON string
create_note_request_instance = CreateNoteRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNoteRequest.to_json())

# convert the object into a dict
create_note_request_dict = create_note_request_instance.to_dict()
# create an instance of CreateNoteRequest from a dict
create_note_request_from_dict = CreateNoteRequest.from_dict(create_note_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


