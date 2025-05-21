# PipelineCustomFieldSizeValidator

Class representing a size validator for custom fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size_type** | [**PipelineCustomFieldSizeValidationType**](PipelineCustomFieldSizeValidationType.md) | The type of size validation for the custom field. This field is required. | 
**size** | **int** | The size value for the custom field. | 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_size_validator import PipelineCustomFieldSizeValidator

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldSizeValidator from a JSON string
pipeline_custom_field_size_validator_instance = PipelineCustomFieldSizeValidator.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldSizeValidator.to_json())

# convert the object into a dict
pipeline_custom_field_size_validator_dict = pipeline_custom_field_size_validator_instance.to_dict()
# create an instance of PipelineCustomFieldSizeValidator from a dict
pipeline_custom_field_size_validator_from_dict = PipelineCustomFieldSizeValidator.from_dict(pipeline_custom_field_size_validator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


