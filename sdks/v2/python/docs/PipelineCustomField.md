# PipelineCustomField

Represents a custom field in the system. This class extends the BaseModel and includes various properties related to custom fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the custom field. | 
**name** | **str** | The name of the custom field. This field is optional. | [optional] 
**type** | [**PipelineCustomFieldType**](PipelineCustomFieldType.md) | The type of the custom field. This field is optional and must be a valid PipelineCustomFieldType. | [optional] 
**label** | **str** | The label of the custom field. This field is optional. | [optional] 
**description** | **str** | The description of the custom field. This field is optional. | [optional] 
**helper_text** | **str** | The helper text for the custom field. This field is optional and is serialized to JSON as \&quot;helper_text\&quot;. | [optional] 
**default_value** | **object** | The default value of the custom field. This field is optional and must be a valid Object. | 
**validators** | [**List[PipelineCustomFieldPropertyValidator]**](PipelineCustomFieldPropertyValidator.md) | The list of validators for the custom field. This field is optional and must be a list of valid PipelineCustomFieldPropertyValidator. | [optional] 
**display_options** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | The display options for the custom field. This field is optional and must be a valid DisplayOptions. | [optional] 
**options** | [**PipelineCustomFieldOptions**](PipelineCustomFieldOptions.md) | The options for the custom field. This field is optional and must be a valid PipelineCustomFieldOptions. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field import PipelineCustomField

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomField from a JSON string
pipeline_custom_field_instance = PipelineCustomField.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomField.to_json())

# convert the object into a dict
pipeline_custom_field_dict = pipeline_custom_field_instance.to_dict()
# create an instance of PipelineCustomField from a dict
pipeline_custom_field_from_dict = PipelineCustomField.from_dict(pipeline_custom_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


