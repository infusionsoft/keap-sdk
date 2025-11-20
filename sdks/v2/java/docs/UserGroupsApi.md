# UserGroupsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUserGroup**](UserGroupsApi.md#getUserGroup) | **GET** /v2/userGroups/{user_group_id} | Retrieve an User Group |
| [**getUserGroupWithHttpInfo**](UserGroupsApi.md#getUserGroupWithHttpInfo) | **GET** /v2/userGroups/{user_group_id} | Retrieve an User Group |
| [**listUserGroups**](UserGroupsApi.md#listUserGroups) | **GET** /v2/userGroups | List User Groups |
| [**listUserGroupsWithHttpInfo**](UserGroupsApi.md#listUserGroupsWithHttpInfo) | **GET** /v2/userGroups | List User Groups |



## getUserGroup

> UserGroup getUserGroup(userGroupId)

Retrieve an User Group

Retrieves a single user group by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.UserGroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        UserGroupsApi apiInstance = new UserGroupsApi(defaultClient);
        String userGroupId = "userGroupId_example"; // String | user_group_id
        try {
            UserGroup result = apiInstance.getUserGroup(userGroupId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UserGroupsApi#getUserGroup");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userGroupId** | **String**| user_group_id | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## getUserGroupWithHttpInfo

> ApiResponse<UserGroup> getUserGroup getUserGroupWithHttpInfo(userGroupId)

Retrieve an User Group

Retrieves a single user group by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.UserGroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        UserGroupsApi apiInstance = new UserGroupsApi(defaultClient);
        String userGroupId = "userGroupId_example"; // String | user_group_id
        try {
            ApiResponse<UserGroup> response = apiInstance.getUserGroupWithHttpInfo(userGroupId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UserGroupsApi#getUserGroup");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userGroupId** | **String**| user_group_id | |

### Return type

ApiResponse<[**UserGroup**](UserGroup.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |


## listUserGroups

> ListUserGroupsResponse listUserGroups()

List User Groups

Retrieves a list of all user groups in the application.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.UserGroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        UserGroupsApi apiInstance = new UserGroupsApi(defaultClient);
        try {
            ListUserGroupsResponse result = apiInstance.listUserGroups();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UserGroupsApi#listUserGroups");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## listUserGroupsWithHttpInfo

> ApiResponse<ListUserGroupsResponse> listUserGroups listUserGroupsWithHttpInfo()

List User Groups

Retrieves a list of all user groups in the application.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.UserGroupsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        UserGroupsApi apiInstance = new UserGroupsApi(defaultClient);
        try {
            ApiResponse<ListUserGroupsResponse> response = apiInstance.listUserGroupsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UserGroupsApi#listUserGroups");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ListUserGroupsResponse**](ListUserGroupsResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

