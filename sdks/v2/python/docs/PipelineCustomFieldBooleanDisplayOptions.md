# PipelineCustomFieldBooleanDisplayOptions

Class representing display options for a boolean custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_type** | [**PipelineCustomFieldBooleanDisplayType**](PipelineCustomFieldBooleanDisplayType.md) | The display type for the boolean custom field. This field is required. | 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_boolean_display_options import PipelineCustomFieldBooleanDisplayOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldBooleanDisplayOptions from a JSON string
pipeline_custom_field_boolean_display_options_instance = PipelineCustomFieldBooleanDisplayOptions.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldBooleanDisplayOptions.to_json())

# convert the object into a dict
pipeline_custom_field_boolean_display_options_dict = pipeline_custom_field_boolean_display_options_instance.to_dict()
# create an instance of PipelineCustomFieldBooleanDisplayOptions from a dict
pipeline_custom_field_boolean_display_options_from_dict = PipelineCustomFieldBooleanDisplayOptions.from_dict(pipeline_custom_field_boolean_display_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


