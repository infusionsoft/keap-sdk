# PipelineCustomFieldRefPropertyType

Class representing the property type for a reference custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_type** | [**PipelineCustomFieldRefType**](PipelineCustomFieldRefType.md) | The reference type for the custom field. This field is required. | 
**fields** | **List[str]** | The list of fields for the reference custom field. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_ref_property_type import PipelineCustomFieldRefPropertyType

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldRefPropertyType from a JSON string
pipeline_custom_field_ref_property_type_instance = PipelineCustomFieldRefPropertyType.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldRefPropertyType.to_json())

# convert the object into a dict
pipeline_custom_field_ref_property_type_dict = pipeline_custom_field_ref_property_type_instance.to_dict()
# create an instance of PipelineCustomFieldRefPropertyType from a dict
pipeline_custom_field_ref_property_type_from_dict = PipelineCustomFieldRefPropertyType.from_dict(pipeline_custom_field_ref_property_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


