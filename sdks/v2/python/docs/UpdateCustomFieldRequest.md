# UpdateCustomFieldRequest

Represents a request to update a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The label of the custom field. | 
**description** | **str** | The description of the custom field. | 
**hint** | **str** | The hint for the custom field. | 
**helper_text** | **str** | The helper text for the custom field. | 
**default_value** | **object** | The default value of the custom field. | 
**display_options** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | The display options for the custom field. | 
**options** | [**PipelineCustomFieldOptions**](PipelineCustomFieldOptions.md) | The options for the custom field. | 
**validators** | [**List[PipelineCustomFieldPropertyValidator]**](PipelineCustomFieldPropertyValidator.md) | The validators for the custom field. | 
**deleted** | **bool** | Indicates whether the custom field is deleted. | 

## Example

```python
from keap_core_v2_client.models.update_custom_field_request import UpdateCustomFieldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCustomFieldRequest from a JSON string
update_custom_field_request_instance = UpdateCustomFieldRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCustomFieldRequest.to_json())

# convert the object into a dict
update_custom_field_request_dict = update_custom_field_request_instance.to_dict()
# create an instance of UpdateCustomFieldRequest from a dict
update_custom_field_request_from_dict = UpdateCustomFieldRequest.from_dict(update_custom_field_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


