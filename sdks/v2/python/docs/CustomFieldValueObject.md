# CustomFieldValueObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**content** | **object** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.custom_field_value_object import CustomFieldValueObject

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldValueObject from a JSON string
custom_field_value_object_instance = CustomFieldValueObject.from_json(json)
# print the JSON string representation of the object
print(CustomFieldValueObject.to_json())

# convert the object into a dict
custom_field_value_object_dict = custom_field_value_object_instance.to_dict()
# create an instance of CustomFieldValueObject from a dict
custom_field_value_object_from_dict = CustomFieldValueObject.from_dict(custom_field_value_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


