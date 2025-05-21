# PipelineCustomFieldCardProperty

Class representing a property of a card custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_name** | **str** | The name of the property. | [optional] 
**styles** | [**List[PipelineCustomFieldDisplayStyle]**](PipelineCustomFieldDisplayStyle.md) | The display styles associated with the property. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_card_property import PipelineCustomFieldCardProperty

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldCardProperty from a JSON string
pipeline_custom_field_card_property_instance = PipelineCustomFieldCardProperty.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldCardProperty.to_json())

# convert the object into a dict
pipeline_custom_field_card_property_dict = pipeline_custom_field_card_property_instance.to_dict()
# create an instance of PipelineCustomFieldCardProperty from a dict
pipeline_custom_field_card_property_from_dict = PipelineCustomFieldCardProperty.from_dict(pipeline_custom_field_card_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


