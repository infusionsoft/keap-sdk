# ListUserGroupsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**user_groups** | [**List[UserGroup]**](UserGroup.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_user_groups_response import ListUserGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserGroupsResponse from a JSON string
list_user_groups_response_instance = ListUserGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUserGroupsResponse.to_json())

# convert the object into a dict
list_user_groups_response_dict = list_user_groups_response_instance.to_dict()
# create an instance of ListUserGroupsResponse from a dict
list_user_groups_response_from_dict = ListUserGroupsResponse.from_dict(list_user_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


