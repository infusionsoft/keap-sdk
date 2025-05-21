# PipelineCustomFieldDurationDisplayOptions

Class representing display options for a custom field with duration type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_units** | [**List[PipelineCustomFieldDurationOptionsDurationUnit]**](PipelineCustomFieldDurationOptionsDurationUnit.md) | The list of duration units for the custom field. This field is optional. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_duration_display_options import PipelineCustomFieldDurationDisplayOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldDurationDisplayOptions from a JSON string
pipeline_custom_field_duration_display_options_instance = PipelineCustomFieldDurationDisplayOptions.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldDurationDisplayOptions.to_json())

# convert the object into a dict
pipeline_custom_field_duration_display_options_dict = pipeline_custom_field_duration_display_options_instance.to_dict()
# create an instance of PipelineCustomFieldDurationDisplayOptions from a dict
pipeline_custom_field_duration_display_options_from_dict = PipelineCustomFieldDurationDisplayOptions.from_dict(pipeline_custom_field_duration_display_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


