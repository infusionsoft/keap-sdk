# PipelineCustomFieldPropertyValidator

Class representing a validator for custom field properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | [**PipelineCustomFieldSizeValidator**](PipelineCustomFieldSizeValidator.md) | The size validator for the custom field. This field is required. | 
**required** | **bool** | Indicates whether the custom field is required. | 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_property_validator import PipelineCustomFieldPropertyValidator

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldPropertyValidator from a JSON string
pipeline_custom_field_property_validator_instance = PipelineCustomFieldPropertyValidator.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldPropertyValidator.to_json())

# convert the object into a dict
pipeline_custom_field_property_validator_dict = pipeline_custom_field_property_validator_instance.to_dict()
# create an instance of PipelineCustomFieldPropertyValidator from a dict
pipeline_custom_field_property_validator_from_dict = PipelineCustomFieldPropertyValidator.from_dict(pipeline_custom_field_property_validator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


