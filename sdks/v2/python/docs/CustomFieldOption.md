# CustomFieldOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**options** | [**List[CustomFieldOption]**](CustomFieldOption.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.custom_field_option import CustomFieldOption

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldOption from a JSON string
custom_field_option_instance = CustomFieldOption.from_json(json)
# print the JSON string representation of the object
print(CustomFieldOption.to_json())

# convert the object into a dict
custom_field_option_dict = custom_field_option_instance.to_dict()
# create an instance of CustomFieldOption from a dict
custom_field_option_from_dict = CustomFieldOption.from_dict(custom_field_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


