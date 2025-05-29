# PipelineCustomFieldRefDisplayOptions

Class representing the display options for a reference custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hidden** | **bool** | Indicates whether the reference custom field is hidden. | [optional] 
**card_options** | [**PipelineCustomFieldCardDisplayOptions**](PipelineCustomFieldCardDisplayOptions.md) | The card display options for the reference custom field. This field is optional. | [optional] 
**title_property** | **str** | The title property for the reference custom field. | [optional] 
**description_property** | **str** | The description property for the reference custom field. | [optional] 
**reference_display_type** | [**PipelineCustomFieldRefDisplayType**](PipelineCustomFieldRefDisplayType.md) | The display type for the reference custom field. This field is optional. | [optional] 
**empty_state** | [**PipelineCustomFieldEmptyStateContent**](PipelineCustomFieldEmptyStateContent.md) | The empty state content for the reference custom field. This field is optional. | [optional] 
**component_name** | **str** | The component name for the reference custom field. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_ref_display_options import PipelineCustomFieldRefDisplayOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldRefDisplayOptions from a JSON string
pipeline_custom_field_ref_display_options_instance = PipelineCustomFieldRefDisplayOptions.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldRefDisplayOptions.to_json())

# convert the object into a dict
pipeline_custom_field_ref_display_options_dict = pipeline_custom_field_ref_display_options_instance.to_dict()
# create an instance of PipelineCustomFieldRefDisplayOptions from a dict
pipeline_custom_field_ref_display_options_from_dict = PipelineCustomFieldRefDisplayOptions.from_dict(pipeline_custom_field_ref_display_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


