# CustomFieldGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**order** | **int** |  | [optional] 
**tab_id** | **str** |  | [optional] 
**record_type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.custom_field_group import CustomFieldGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldGroup from a JSON string
custom_field_group_instance = CustomFieldGroup.from_json(json)
# print the JSON string representation of the object
print(CustomFieldGroup.to_json())

# convert the object into a dict
custom_field_group_dict = custom_field_group_instance.to_dict()
# create an instance of CustomFieldGroup from a dict
custom_field_group_from_dict = CustomFieldGroup.from_dict(custom_field_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


