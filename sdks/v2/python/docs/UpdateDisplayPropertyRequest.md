# UpdateDisplayPropertyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sort_order** | **int** | Determines the order for where this display property shows up on the group. | [optional] 
**id** | **str** | Identifies the custom field that is tied to this display property. | [optional] 
**source** | [**DisplayPropertySource**](DisplayPropertySource.md) | Indicates whether this display property is a system or custom field. | 
**system_field_record** | **str** | Represents the domain (e.g., pipeline, contact) that this display property belongs to. | [optional] 
**system_field_id** | **str** | Represents the identifier of the system field that is in that displayProperty. The source of this field will depend on the domain (e. g., \&quot;dealName\&quot; in pipelines) | [optional] 
**label** | **str** | The label to display on this property to help users identify it | [optional] 
**description** | **str** | Documentation that explains the purpose of this property | [optional] 
**helper_text** | **str** | More detailed explanation of the property to be shown if a user requests more information about it | [optional] 
**default_value** | **object** | The value of this property if a value is not explicitly provided | [optional] 
**display_options** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | Allowed values for this property | [optional] 

## Example

```python
from keap_core_v2_client.models.update_display_property_request import UpdateDisplayPropertyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDisplayPropertyRequest from a JSON string
update_display_property_request_instance = UpdateDisplayPropertyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDisplayPropertyRequest.to_json())

# convert the object into a dict
update_display_property_request_dict = update_display_property_request_instance.to_dict()
# create an instance of UpdateDisplayPropertyRequest from a dict
update_display_property_request_from_dict = UpdateDisplayPropertyRequest.from_dict(update_display_property_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


