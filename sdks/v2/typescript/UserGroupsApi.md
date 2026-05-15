# .UserGroupsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserGroup**](UserGroupsApi.md#getUserGroup) | **GET** /rest/v2/userGroups/{user_group_id} | Retrieve a User Group
[**listUserGroups**](UserGroupsApi.md#listUserGroups) | **GET** /rest/v2/userGroups | List User Groups


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
  
  userGroupId: "user_group_id_example",
};

const data = await apiInstance.getUserGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupId** | [**string**] |  | defaults to undefined


### Return type

**UserGroup**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


