# PipelineCustomFieldOptionGroup

Class representing a group of custom field options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** | The header of the custom field option group. | [optional] 
**options** | [**List[PipelineCustomFieldOption]**](PipelineCustomFieldOption.md) | The list of custom field options in the group. | 
**sort_order** | **int** | The sort order of the custom field option group. | 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_option_group import PipelineCustomFieldOptionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldOptionGroup from a JSON string
pipeline_custom_field_option_group_instance = PipelineCustomFieldOptionGroup.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldOptionGroup.to_json())

# convert the object into a dict
pipeline_custom_field_option_group_dict = pipeline_custom_field_option_group_instance.to_dict()
# create an instance of PipelineCustomFieldOptionGroup from a dict
pipeline_custom_field_option_group_from_dict = PipelineCustomFieldOptionGroup.from_dict(pipeline_custom_field_option_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


