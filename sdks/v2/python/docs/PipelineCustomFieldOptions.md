# PipelineCustomFieldOptions

Class representing the options for a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_option_id** | **str** | The default option ID for the custom field. | [optional] 
**display_type** | [**PipelineCustomFieldOptionDisplayType**](PipelineCustomFieldOptionDisplayType.md) | The display type of the custom field options. This field is required. | 
**option_source** | [**PipelineCustomFieldRefType**](PipelineCustomFieldRefType.md) | The source of the custom field options. This field is optional. | [optional] 
**groups** | [**List[PipelineCustomFieldOptionGroup]**](PipelineCustomFieldOptionGroup.md) | The list of custom field option groups. | 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_options import PipelineCustomFieldOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldOptions from a JSON string
pipeline_custom_field_options_instance = PipelineCustomFieldOptions.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldOptions.to_json())

# convert the object into a dict
pipeline_custom_field_options_dict = pipeline_custom_field_options_instance.to_dict()
# create an instance of PipelineCustomFieldOptions from a dict
pipeline_custom_field_options_from_dict = PipelineCustomFieldOptions.from_dict(pipeline_custom_field_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


