# DisplayGroup

A group of properties on a display form

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the display group. | [optional] 
**sort_order** | **int** | Determines the order for where this display group shows up on the form. | [optional] 
**title** | **str** | The title of the display group. | [optional] 
**description** | **str** | The description of the display group. | [optional] 
**properties** | [**List[DisplayProperty]**](DisplayProperty.md) | A list of properties that will be displayed in this group. | [optional] 

## Example

```python
from keap_core_v2_client.models.display_group import DisplayGroup

# TODO update the JSON string below
json = "{}"
# create an instance of DisplayGroup from a JSON string
display_group_instance = DisplayGroup.from_json(json)
# print the JSON string representation of the object
print(DisplayGroup.to_json())

# convert the object into a dict
display_group_dict = display_group_instance.to_dict()
# create an instance of DisplayGroup from a dict
display_group_from_dict = DisplayGroup.from_dict(display_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


