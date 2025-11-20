# KeapCoreServiceV2Sdk.UserGroupsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserGroup**](UserGroupsApi.md#getUserGroup) | **GET** /v2/userGroups/{user_group_id} | Retrieve an User Group
[**listUserGroups**](UserGroupsApi.md#listUserGroups) | **GET** /v2/userGroups | List User Groups



## getUserGroup

> UserGroup getUserGroup(userGroupId)

Retrieve an User Group

Retrieves a single user group by its ID.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.UserGroupsApi();
let userGroupId = "userGroupId_example"; // String | user_group_id
apiInstance.getUserGroup(userGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupId** | **String**| user_group_id | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUserGroups

> ListUserGroupsResponse listUserGroups()

List User Groups

Retrieves a list of all user groups in the application.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.UserGroupsApi();
apiInstance.listUserGroups().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

