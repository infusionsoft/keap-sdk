# PipelineCustomFieldEmptyStateContent

Class representing the content for an empty state in custom fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **List[str]** | The list of titles for the empty state. | 
**description** | **List[str]** | The list of descriptions for the empty state. | 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_empty_state_content import PipelineCustomFieldEmptyStateContent

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldEmptyStateContent from a JSON string
pipeline_custom_field_empty_state_content_instance = PipelineCustomFieldEmptyStateContent.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldEmptyStateContent.to_json())

# convert the object into a dict
pipeline_custom_field_empty_state_content_dict = pipeline_custom_field_empty_state_content_instance.to_dict()
# create an instance of PipelineCustomFieldEmptyStateContent from a dict
pipeline_custom_field_empty_state_content_from_dict = PipelineCustomFieldEmptyStateContent.from_dict(pipeline_custom_field_empty_state_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


