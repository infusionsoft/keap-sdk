# UpdateDisplayGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sort_order** | **int** | Determines the order for where this display group shows up on the form. | [optional] 
**title** | **str** | The title of the display group. | 
**description** | **str** | The description of the display group. | [optional] 
**properties** | [**List[UpdateDisplayPropertyRequest]**](UpdateDisplayPropertyRequest.md) | A list of properties that will be displayed in this group. | 

## Example

```python
from keap_core_v2_client.models.update_display_group_request import UpdateDisplayGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDisplayGroupRequest from a JSON string
update_display_group_request_instance = UpdateDisplayGroupRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDisplayGroupRequest.to_json())

# convert the object into a dict
update_display_group_request_dict = update_display_group_request_instance.to_dict()
# create an instance of UpdateDisplayGroupRequest from a dict
update_display_group_request_from_dict = UpdateDisplayGroupRequest.from_dict(update_display_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


