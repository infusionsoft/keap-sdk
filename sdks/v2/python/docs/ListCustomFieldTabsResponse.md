# ListCustomFieldTabsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tabs** | [**List[CustomFieldTab]**](CustomFieldTab.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_custom_field_tabs_response import ListCustomFieldTabsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomFieldTabsResponse from a JSON string
list_custom_field_tabs_response_instance = ListCustomFieldTabsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomFieldTabsResponse.to_json())

# convert the object into a dict
list_custom_field_tabs_response_dict = list_custom_field_tabs_response_instance.to_dict()
# create an instance of ListCustomFieldTabsResponse from a dict
list_custom_field_tabs_response_from_dict = ListCustomFieldTabsResponse.from_dict(list_custom_field_tabs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


