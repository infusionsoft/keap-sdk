# PipelineCustomFieldCardDisplayOptions

Class representing display options for a card custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_properties** | [**List[PipelineCustomFieldCardProperty]**](PipelineCustomFieldCardProperty.md) | The properties of the card custom field. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_card_display_options import PipelineCustomFieldCardDisplayOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldCardDisplayOptions from a JSON string
pipeline_custom_field_card_display_options_instance = PipelineCustomFieldCardDisplayOptions.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldCardDisplayOptions.to_json())

# convert the object into a dict
pipeline_custom_field_card_display_options_dict = pipeline_custom_field_card_display_options_instance.to_dict()
# create an instance of PipelineCustomFieldCardDisplayOptions from a dict
pipeline_custom_field_card_display_options_from_dict = PipelineCustomFieldCardDisplayOptions.from_dict(pipeline_custom_field_card_display_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


