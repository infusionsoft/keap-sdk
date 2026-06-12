# ListCustomFieldGroupsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[CustomFieldGroup]**](CustomFieldGroup.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_custom_field_groups_response import ListCustomFieldGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomFieldGroupsResponse from a JSON string
list_custom_field_groups_response_instance = ListCustomFieldGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomFieldGroupsResponse.to_json())

# convert the object into a dict
list_custom_field_groups_response_dict = list_custom_field_groups_response_instance.to_dict()
# create an instance of ListCustomFieldGroupsResponse from a dict
list_custom_field_groups_response_from_dict = ListCustomFieldGroupsResponse.from_dict(list_custom_field_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


