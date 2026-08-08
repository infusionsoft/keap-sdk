# UpdateCustomFieldTabRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**order** | **int** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_custom_field_tab_request import UpdateCustomFieldTabRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCustomFieldTabRequest from a JSON string
update_custom_field_tab_request_instance = UpdateCustomFieldTabRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCustomFieldTabRequest.to_json())

# convert the object into a dict
update_custom_field_tab_request_dict = update_custom_field_tab_request_instance.to_dict()
# create an instance of UpdateCustomFieldTabRequest from a dict
update_custom_field_tab_request_from_dict = UpdateCustomFieldTabRequest.from_dict(update_custom_field_tab_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


