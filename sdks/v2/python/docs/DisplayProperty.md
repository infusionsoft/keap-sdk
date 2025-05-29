# DisplayProperty

A property for a group inside a display form

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the display property. | [optional] 
**var_property** | [**PipelineCustomField**](PipelineCustomField.md) | The custom field that defines this display property. | [optional] 
**source** | [**DisplayPropertySource**](DisplayPropertySource.md) | The source of the display property. | [optional] 
**system_field_record** | **str** | Represents the domain (e.g., pipeline, contact) that this display property belongs to. | [optional] 
**system_field_id** | **str** | Represents the identifier of the system field that is in that displayProperty. The source of this field will depend on the domain (e. g., \&quot;dealName\&quot; in pipelines) | [optional] 
**label** | **str** | The label to display on this property to help users identify it | [optional] 
**description** | **str** | Documentation that explains the purpose of this property | [optional] 
**helper_text** | **str** | More detailed explanation of the property to be shown if a user requests more information about it | [optional] 
**default_value** | **object** | The value of this property if a value is not explicitly provided | [optional] 
**display_options** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | Allowed values for this property | [optional] 

## Example

```python
from keap_core_v2_client.models.display_property import DisplayProperty

# TODO update the JSON string below
json = "{}"
# create an instance of DisplayProperty from a JSON string
display_property_instance = DisplayProperty.from_json(json)
# print the JSON string representation of the object
print(DisplayProperty.to_json())

# convert the object into a dict
display_property_dict = display_property_instance.to_dict()
# create an instance of DisplayProperty from a dict
display_property_from_dict = DisplayProperty.from_dict(display_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


