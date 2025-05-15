# ListUsersPaginatedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**users** | [**List[User]**](User.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_users_paginated_response import ListUsersPaginatedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUsersPaginatedResponse from a JSON string
list_users_paginated_response_instance = ListUsersPaginatedResponse.from_json(json)
# print the JSON string representation of the object
print(ListUsersPaginatedResponse.to_json())

# convert the object into a dict
list_users_paginated_response_dict = list_users_paginated_response_instance.to_dict()
# create an instance of ListUsersPaginatedResponse from a dict
list_users_paginated_response_from_dict = ListUsersPaginatedResponse.from_dict(list_users_paginated_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


