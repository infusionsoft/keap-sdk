# .UserGroupsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserGroup**](UserGroupsApi.md#getUserGroup) | **GET** /v2/userGroups/{user_group_id} | Retrieve an User Group
[**listUserGroups**](UserGroupsApi.md#listUserGroups) | **GET** /v2/userGroups | List User Groups


# **getUserGroup**
> UserGroup getUserGroup()

Retrieves a single user group by its ID.

### Example


```typescript
import { createConfiguration, UserGroupsApi } from '';
import type { UserGroupsApiGetUserGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsApi(configuration);

const request: UserGroupsApiGetUserGroupRequest = {
    // user_group_id
  userGroupId: "user_group_id_example",
};

const data = await apiInstance.getUserGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupId** | [**string**] | user_group_id | defaults to undefined


### Return type

**UserGroup**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listUserGroups**
> ListUserGroupsResponse listUserGroups()

Retrieves a list of all user groups in the application.

### Example


```typescript
import { createConfiguration, UserGroupsApi } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsApi(configuration);

const request = {};

const data = await apiInstance.listUserGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListUserGroupsResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


