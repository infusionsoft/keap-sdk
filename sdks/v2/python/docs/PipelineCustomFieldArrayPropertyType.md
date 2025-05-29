# PipelineCustomFieldArrayPropertyType

Class representing the type of an array property in a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_type** | [**PipelineCustomFieldType**](PipelineCustomFieldType.md) | The type of the list contained in the array property. This field is required. | 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_array_property_type import PipelineCustomFieldArrayPropertyType

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldArrayPropertyType from a JSON string
pipeline_custom_field_array_property_type_instance = PipelineCustomFieldArrayPropertyType.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldArrayPropertyType.to_json())

# convert the object into a dict
pipeline_custom_field_array_property_type_dict = pipeline_custom_field_array_property_type_instance.to_dict()
# create an instance of PipelineCustomFieldArrayPropertyType from a dict
pipeline_custom_field_array_property_type_from_dict = PipelineCustomFieldArrayPropertyType.from_dict(pipeline_custom_field_array_property_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


