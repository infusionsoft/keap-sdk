# PipelineCustomFieldType

Class representing a custom field type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primitive_type** | [**PipelineCustomFieldPrimitiveType**](PipelineCustomFieldPrimitiveType.md) | The base primitive type of the custom field. This field is required. | 
**discriminator** | [**PipelineCustomFieldModelPropertyTypeDiscriminator**](PipelineCustomFieldModelPropertyTypeDiscriminator.md) | The discriminator for the model property type. This field is required. | 
**array** | [**PipelineCustomFieldArrayPropertyType**](PipelineCustomFieldArrayPropertyType.md) | The array property type of the custom field. This field is optional. | [optional] 
**ref** | [**PipelineCustomFieldRefPropertyType**](PipelineCustomFieldRefPropertyType.md) | The reference property type of the custom field. This field is optional. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_type import PipelineCustomFieldType

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldType from a JSON string
pipeline_custom_field_type_instance = PipelineCustomFieldType.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldType.to_json())

# convert the object into a dict
pipeline_custom_field_type_dict = pipeline_custom_field_type_instance.to_dict()
# create an instance of PipelineCustomFieldType from a dict
pipeline_custom_field_type_from_dict = PipelineCustomFieldType.from_dict(pipeline_custom_field_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


