# UpdateDisplayFormRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[UpdateDisplayGroupRequest]**](UpdateDisplayGroupRequest.md) | Groups of properties to display on the form. | 

## Example

```python
from keap_core_v2_client.models.update_display_form_request import UpdateDisplayFormRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDisplayFormRequest from a JSON string
update_display_form_request_instance = UpdateDisplayFormRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDisplayFormRequest.to_json())

# convert the object into a dict
update_display_form_request_dict = update_display_form_request_instance.to_dict()
# create an instance of UpdateDisplayFormRequest from a dict
update_display_form_request_from_dict = UpdateDisplayFormRequest.from_dict(update_display_form_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


