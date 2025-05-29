# PipelineCustomFieldOption

Class representing an option for a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the custom field option. | 
**title** | **str** | The title of the custom field option. | 
**subtitle** | **str** | The subtitle of the custom field option. | 
**sort_order** | **int** | The sort order of the custom field option. | 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_option import PipelineCustomFieldOption

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldOption from a JSON string
pipeline_custom_field_option_instance = PipelineCustomFieldOption.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldOption.to_json())

# convert the object into a dict
pipeline_custom_field_option_dict = pipeline_custom_field_option_instance.to_dict()
# create an instance of PipelineCustomFieldOption from a dict
pipeline_custom_field_option_from_dict = PipelineCustomFieldOption.from_dict(pipeline_custom_field_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


