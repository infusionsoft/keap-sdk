# PipelineCustomFieldDisplayOptions

Class representing display options for a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**PipelineCustomFieldDisplayOptionsType**](PipelineCustomFieldDisplayOptionsType.md) | The type of display options. This field is required. | 
**hidden** | **bool** | Indicates whether the custom field is hidden. | 
**array_display_options** | [**PipelineCustomFieldArrayDisplayOptions**](PipelineCustomFieldArrayDisplayOptions.md) | The display options for array type custom fields. This field is optional. | [optional] 
**reference_type_display_options** | [**PipelineCustomFieldRefDisplayOptions**](PipelineCustomFieldRefDisplayOptions.md) | The display options for reference type custom fields. This field is optional. | [optional] 
**date_time_display_options** | [**PipelineCustomFieldDateTimeOptions**](PipelineCustomFieldDateTimeOptions.md) | The display options for date and time type custom fields. This field is optional. | [optional] 
**boolean_display_options** | [**PipelineCustomFieldBooleanDisplayOptions**](PipelineCustomFieldBooleanDisplayOptions.md) | The display options for boolean type custom fields. This field is optional. | [optional] 
**duration** | [**PipelineCustomFieldDurationDisplayOptions**](PipelineCustomFieldDurationDisplayOptions.md) | The display options for duration type custom fields. This field is optional. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_display_options import PipelineCustomFieldDisplayOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldDisplayOptions from a JSON string
pipeline_custom_field_display_options_instance = PipelineCustomFieldDisplayOptions.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldDisplayOptions.to_json())

# convert the object into a dict
pipeline_custom_field_display_options_dict = pipeline_custom_field_display_options_instance.to_dict()
# create an instance of PipelineCustomFieldDisplayOptions from a dict
pipeline_custom_field_display_options_from_dict = PipelineCustomFieldDisplayOptions.from_dict(pipeline_custom_field_display_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


