# keap_core_v2_client.UserGroupsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user_group**](UserGroupsApi.md#get_user_group) | **GET** /v2/userGroups/{user_group_id} | Retrieve an User Group
[**list_user_groups**](UserGroupsApi.md#list_user_groups) | **GET** /v2/userGroups | List User Groups


# **get_user_group**
> UserGroup get_user_group(user_group_id)

Retrieve an User Group

Retrieves a single user group by its ID.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.user_group import UserGroup
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.UserGroupsApi(api_client)
    user_group_id = 'user_group_id_example' # str | user_group_id

    try:
        # Retrieve an User Group
        api_response = api_instance.get_user_group(user_group_id)
        print("The response of UserGroupsApi->get_user_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserGroupsApi->get_user_group: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_group_id** | **str**| user_group_id | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_groups**
> ListUserGroupsResponse list_user_groups()

List User Groups

Retrieves a list of all user groups in the application.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_user_groups_response import ListUserGroupsResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.UserGroupsApi(api_client)

    try:
        # List User Groups
        api_response = api_instance.list_user_groups()
        print("The response of UserGroupsApi->list_user_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserGroupsApi->list_user_groups: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ListUserGroupsResponse**](ListUserGroupsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

