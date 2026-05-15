# .UsersApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserById**](UsersApi.md#getUserById) | **GET** /rest/v2/users/{user_id} | Get User
[**getUserInfo**](UsersApi.md#getUserInfo) | **GET** /rest/v2/oauth/connect/userinfo | Retrieve User Info
[**getUserSignature**](UsersApi.md#getUserSignature) | **GET** /rest/v2/users/{user_id}/signature | Get User email signature
[**listPaginatedUsers**](UsersApi.md#listPaginatedUsers) | **GET** /rest/v2/users | List Users
[**updateUser**](UsersApi.md#updateUser) | **PATCH** /rest/v2/users/{user_id} | Update User


# **getUserById**
> User getUserById()

Retrieves a specific User

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiGetUserByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiGetUserByIdRequest = {
  
  userId: "user_id_example",
};

const data = await apiInstance.getUserById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**User**

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

# **getUserInfo**
> GetUserInfoResponse getUserInfo()

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example


```typescript
import { createConfiguration, UsersApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request = {};

const data = await apiInstance.getUserInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetUserInfoResponse**

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

# **getUserSignature**
> string getUserSignature()

Retrieves a HTML snippet that contains the user\'s email signature.

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiGetUserSignatureRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiGetUserSignatureRequest = {
  
  userId: "user_id_example",
};

const data = await apiInstance.getUserSignature(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**string**

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

# **listPaginatedUsers**
> ListUsersPaginatedResponse listPaginatedUsers()

Retrieves a list of users

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiListPaginatedUsersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiListPaginatedUsersRequest = {
    // Filter to apply, allowed fields are: - (String) `email` - (String) `given_name` - (Boolean) `include_inactive` - (Boolean) `include_partners` - (Set[String]) `user_ids`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=given_name%3D%3DMary` - `filter=user_ids%3D%3D123%3Bgiven_name%3D%3DSmith`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `create_time` - `email`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 10,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listPaginatedUsers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (Boolean) &#x60;include_inactive&#x60; - (Boolean) &#x60;include_partners&#x60; - (Set[String]) &#x60;user_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;user_ids%3D%3D123%3Bgiven_name%3D%3DSmith&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListUsersPaginatedResponse**

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

# **updateUser**
> User updateUser(updateUserRequest)

Updates information on a specific User

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUpdateUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUpdateUserRequest = {
  
  userId: "user_id_example",
  
  updateUserRequest: {
    address: {
      country: "United States of America",
      line1: "123",
      line2: "Suite 100",
      locality: "Phoenix",
      region: "Arizona",
      field: "BILLING",
      countryCode: "USA",
      postalCode: "85001",
      regionCode: "US-AZ",
      zipCode: "85001",
      zipFour: "1234",
    },
    title: "Sales Manager",
    website: "https://example.com",
    companyName: "Acme Corp",
    emailAddress: {
      email: "john.smith@example.com",
      field: "EMAIL1",
      optInReason: "Subscribed via website form",
    },
    familyName: "Smith",
    faxNumbers: [
      {
        number: "5551234568",
        type: "Work",
        field: "FAX1",
      },
    ],
    givenName: "John",
    phoneNumbers: [
      {
        extension: "101",
        number: "5551234567",
        type: "Work",
        field: "PHONE1",
        numberE164: "+15551234567",
      },
    ],
    timeZone: "America/New_York",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserRequest** | **UpdateUserRequest**|  |
 **userId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**User**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
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


