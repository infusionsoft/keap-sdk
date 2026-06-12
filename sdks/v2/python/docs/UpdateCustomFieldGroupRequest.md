# UpdateCustomFieldGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**order** | **int** |  | [optional] 
**tab_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_custom_field_group_request import UpdateCustomFieldGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCustomFieldGroupRequest from a JSON string
update_custom_field_group_request_instance = UpdateCustomFieldGroupRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCustomFieldGroupRequest.to_json())

# convert the object into a dict
update_custom_field_group_request_dict = update_custom_field_group_request_instance.to_dict()
# create an instance of UpdateCustomFieldGroupRequest from a dict
update_custom_field_group_request_from_dict = UpdateCustomFieldGroupRequest.from_dict(update_custom_field_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


