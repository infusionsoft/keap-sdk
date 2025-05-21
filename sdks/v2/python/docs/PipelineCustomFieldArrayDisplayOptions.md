# PipelineCustomFieldArrayDisplayOptions

Class representing display options for an array custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sortable** | **bool** | Indicates if the array is sortable. | 
**item_options** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | Display options for the items in the array. This field is required. | 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_array_display_options import PipelineCustomFieldArrayDisplayOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldArrayDisplayOptions from a JSON string
pipeline_custom_field_array_display_options_instance = PipelineCustomFieldArrayDisplayOptions.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldArrayDisplayOptions.to_json())

# convert the object into a dict
pipeline_custom_field_array_display_options_dict = pipeline_custom_field_array_display_options_instance.to_dict()
# create an instance of PipelineCustomFieldArrayDisplayOptions from a dict
pipeline_custom_field_array_display_options_from_dict = PipelineCustomFieldArrayDisplayOptions.from_dict(pipeline_custom_field_array_display_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


