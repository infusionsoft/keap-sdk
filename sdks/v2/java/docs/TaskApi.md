# TaskApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTask**](TaskApi.md#createTask) | **POST** /rest/v2/tasks | Create a Task |
| [**createTaskWithHttpInfo**](TaskApi.md#createTaskWithHttpInfo) | **POST** /rest/v2/tasks | Create a Task |
| [**createTaskCustomField**](TaskApi.md#createTaskCustomField) | **POST** /rest/v2/tasks/model/customFields | Create a Custom Field |
| [**createTaskCustomFieldWithHttpInfo**](TaskApi.md#createTaskCustomFieldWithHttpInfo) | **POST** /rest/v2/tasks/model/customFields | Create a Custom Field |
| [**createTaskCustomFieldGroup**](TaskApi.md#createTaskCustomFieldGroup) | **POST** /rest/v2/tasks/model/customFields/groups | Create a Task Custom Field Group |
| [**createTaskCustomFieldGroupWithHttpInfo**](TaskApi.md#createTaskCustomFieldGroupWithHttpInfo) | **POST** /rest/v2/tasks/model/customFields/groups | Create a Task Custom Field Group |
| [**createTaskCustomFieldTab**](TaskApi.md#createTaskCustomFieldTab) | **POST** /rest/v2/tasks/model/customFields/tabs | Create a Task Custom Field Tab |
| [**createTaskCustomFieldTabWithHttpInfo**](TaskApi.md#createTaskCustomFieldTabWithHttpInfo) | **POST** /rest/v2/tasks/model/customFields/tabs | Create a Task Custom Field Tab |
| [**deleteTask**](TaskApi.md#deleteTask) | **DELETE** /rest/v2/tasks/{task_id} | Delete a Task |
| [**deleteTaskWithHttpInfo**](TaskApi.md#deleteTaskWithHttpInfo) | **DELETE** /rest/v2/tasks/{task_id} | Delete a Task |
| [**deleteTaskCustomField**](TaskApi.md#deleteTaskCustomField) | **DELETE** /rest/v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**deleteTaskCustomFieldWithHttpInfo**](TaskApi.md#deleteTaskCustomFieldWithHttpInfo) | **DELETE** /rest/v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**deleteTaskCustomFieldGroup**](TaskApi.md#deleteTaskCustomFieldGroup) | **DELETE** /rest/v2/tasks/model/customFields/groups/{group_id} | Delete a Task Custom Field Group |
| [**deleteTaskCustomFieldGroupWithHttpInfo**](TaskApi.md#deleteTaskCustomFieldGroupWithHttpInfo) | **DELETE** /rest/v2/tasks/model/customFields/groups/{group_id} | Delete a Task Custom Field Group |
| [**deleteTaskCustomFieldTab**](TaskApi.md#deleteTaskCustomFieldTab) | **DELETE** /rest/v2/tasks/model/customFields/tabs/{tab_id} | Delete a Task Custom Field Tab |
| [**deleteTaskCustomFieldTabWithHttpInfo**](TaskApi.md#deleteTaskCustomFieldTabWithHttpInfo) | **DELETE** /rest/v2/tasks/model/customFields/tabs/{tab_id} | Delete a Task Custom Field Tab |
| [**getTask**](TaskApi.md#getTask) | **GET** /rest/v2/tasks/{task_id} | Retrieve a Task |
| [**getTaskWithHttpInfo**](TaskApi.md#getTaskWithHttpInfo) | **GET** /rest/v2/tasks/{task_id} | Retrieve a Task |
| [**getTaskCustomFieldGroup**](TaskApi.md#getTaskCustomFieldGroup) | **GET** /rest/v2/tasks/model/customFields/groups/{group_id} | Retrieve a Task Custom Field Group |
| [**getTaskCustomFieldGroupWithHttpInfo**](TaskApi.md#getTaskCustomFieldGroupWithHttpInfo) | **GET** /rest/v2/tasks/model/customFields/groups/{group_id} | Retrieve a Task Custom Field Group |
| [**getTaskCustomFieldTab**](TaskApi.md#getTaskCustomFieldTab) | **GET** /rest/v2/tasks/model/customFields/tabs/{tab_id} | Retrieve a Task Custom Field Tab |
| [**getTaskCustomFieldTabWithHttpInfo**](TaskApi.md#getTaskCustomFieldTabWithHttpInfo) | **GET** /rest/v2/tasks/model/customFields/tabs/{tab_id} | Retrieve a Task Custom Field Tab |
| [**listTaskCustomFieldGroups**](TaskApi.md#listTaskCustomFieldGroups) | **GET** /rest/v2/tasks/model/customFields/groups | List Task Custom Field Groups |
| [**listTaskCustomFieldGroupsWithHttpInfo**](TaskApi.md#listTaskCustomFieldGroupsWithHttpInfo) | **GET** /rest/v2/tasks/model/customFields/groups | List Task Custom Field Groups |
| [**listTaskCustomFieldTabs**](TaskApi.md#listTaskCustomFieldTabs) | **GET** /rest/v2/tasks/model/customFields/tabs | List Task Custom Field Tabs |
| [**listTaskCustomFieldTabsWithHttpInfo**](TaskApi.md#listTaskCustomFieldTabsWithHttpInfo) | **GET** /rest/v2/tasks/model/customFields/tabs | List Task Custom Field Tabs |
| [**listTasks**](TaskApi.md#listTasks) | **GET** /rest/v2/tasks | List Tasks |
| [**listTasksWithHttpInfo**](TaskApi.md#listTasksWithHttpInfo) | **GET** /rest/v2/tasks | List Tasks |
| [**retrieveTaskModel**](TaskApi.md#retrieveTaskModel) | **GET** /rest/v2/tasks/model | Retrieve Task Model |
| [**retrieveTaskModelWithHttpInfo**](TaskApi.md#retrieveTaskModelWithHttpInfo) | **GET** /rest/v2/tasks/model | Retrieve Task Model |
| [**updateTask**](TaskApi.md#updateTask) | **PATCH** /rest/v2/tasks/{task_id} | Update a Task |
| [**updateTaskWithHttpInfo**](TaskApi.md#updateTaskWithHttpInfo) | **PATCH** /rest/v2/tasks/{task_id} | Update a Task |
| [**updateTaskCustomField**](TaskApi.md#updateTaskCustomField) | **PATCH** /rest/v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field |
| [**updateTaskCustomFieldWithHttpInfo**](TaskApi.md#updateTaskCustomFieldWithHttpInfo) | **PATCH** /rest/v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field |
| [**updateTaskCustomFieldGroup**](TaskApi.md#updateTaskCustomFieldGroup) | **PATCH** /rest/v2/tasks/model/customFields/groups/{group_id} | Update a Task Custom Field Group |
| [**updateTaskCustomFieldGroupWithHttpInfo**](TaskApi.md#updateTaskCustomFieldGroupWithHttpInfo) | **PATCH** /rest/v2/tasks/model/customFields/groups/{group_id} | Update a Task Custom Field Group |
| [**updateTaskCustomFieldTab**](TaskApi.md#updateTaskCustomFieldTab) | **PATCH** /rest/v2/tasks/model/customFields/tabs/{tab_id} | Update a Task Custom Field Tab |
| [**updateTaskCustomFieldTabWithHttpInfo**](TaskApi.md#updateTaskCustomFieldTabWithHttpInfo) | **PATCH** /rest/v2/tasks/model/customFields/tabs/{tab_id} | Update a Task Custom Field Tab |



## createTask

> Task createTask(createTaskRequest, fields)

Create a Task

Creates a new task as the authenticated user.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateTaskRequest createTaskRequest = new CreateTaskRequest(); // CreateTaskRequest | 
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields
        try {
            Task result = apiInstance.createTask(createTaskRequest, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTask");
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
| **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)|  | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

[**Task**](Task.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createTaskWithHttpInfo

> ApiResponse<Task> createTask createTaskWithHttpInfo(createTaskRequest, fields)

Create a Task

Creates a new task as the authenticated user.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateTaskRequest createTaskRequest = new CreateTaskRequest(); // CreateTaskRequest | 
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields
        try {
            ApiResponse<Task> response = apiInstance.createTaskWithHttpInfo(createTaskRequest, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTask");
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
| **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)|  | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

ApiResponse<[**Task**](Task.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## createTaskCustomField

> CreateCustomFieldResponse createTaskCustomField(createCustomFieldRequest)

Create a Custom Field

Creates a custom field of the specified type and options to the Task object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
        try {
            CreateCustomFieldResponse result = apiInstance.createTaskCustomField(createCustomFieldRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTaskCustomField");
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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | |

### Return type

[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createTaskCustomFieldWithHttpInfo

> ApiResponse<CreateCustomFieldResponse> createTaskCustomField createTaskCustomFieldWithHttpInfo(createCustomFieldRequest)

Create a Custom Field

Creates a custom field of the specified type and options to the Task object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
        try {
            ApiResponse<CreateCustomFieldResponse> response = apiInstance.createTaskCustomFieldWithHttpInfo(createCustomFieldRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTaskCustomField");
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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | |

### Return type

ApiResponse<[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## createTaskCustomFieldGroup

> CustomFieldGroup createTaskCustomFieldGroup(createCustomFieldGroupRequest)

Create a Task Custom Field Group

Creates a new custom field group for the Task record type. If &#x60;tab_id&#x60; is omitted, the group is added to the default &#39;Custom Fields&#39; tab.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateCustomFieldGroupRequest createCustomFieldGroupRequest = new CreateCustomFieldGroupRequest(); // CreateCustomFieldGroupRequest | 
        try {
            CustomFieldGroup result = apiInstance.createTaskCustomFieldGroup(createCustomFieldGroupRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTaskCustomFieldGroup");
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
| **createCustomFieldGroupRequest** | [**CreateCustomFieldGroupRequest**](CreateCustomFieldGroupRequest.md)|  | |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createTaskCustomFieldGroupWithHttpInfo

> ApiResponse<CustomFieldGroup> createTaskCustomFieldGroup createTaskCustomFieldGroupWithHttpInfo(createCustomFieldGroupRequest)

Create a Task Custom Field Group

Creates a new custom field group for the Task record type. If &#x60;tab_id&#x60; is omitted, the group is added to the default &#39;Custom Fields&#39; tab.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateCustomFieldGroupRequest createCustomFieldGroupRequest = new CreateCustomFieldGroupRequest(); // CreateCustomFieldGroupRequest | 
        try {
            ApiResponse<CustomFieldGroup> response = apiInstance.createTaskCustomFieldGroupWithHttpInfo(createCustomFieldGroupRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTaskCustomFieldGroup");
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
| **createCustomFieldGroupRequest** | [**CreateCustomFieldGroupRequest**](CreateCustomFieldGroupRequest.md)|  | |

### Return type

ApiResponse<[**CustomFieldGroup**](CustomFieldGroup.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## createTaskCustomFieldTab

> CustomFieldTab createTaskCustomFieldTab(createCustomFieldTabRequest)

Create a Task Custom Field Tab

Creates a new custom field tab for the Task record type.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateCustomFieldTabRequest createCustomFieldTabRequest = new CreateCustomFieldTabRequest(); // CreateCustomFieldTabRequest | 
        try {
            CustomFieldTab result = apiInstance.createTaskCustomFieldTab(createCustomFieldTabRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTaskCustomFieldTab");
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
| **createCustomFieldTabRequest** | [**CreateCustomFieldTabRequest**](CreateCustomFieldTabRequest.md)|  | |

### Return type

[**CustomFieldTab**](CustomFieldTab.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createTaskCustomFieldTabWithHttpInfo

> ApiResponse<CustomFieldTab> createTaskCustomFieldTab createTaskCustomFieldTabWithHttpInfo(createCustomFieldTabRequest)

Create a Task Custom Field Tab

Creates a new custom field tab for the Task record type.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateCustomFieldTabRequest createCustomFieldTabRequest = new CreateCustomFieldTabRequest(); // CreateCustomFieldTabRequest | 
        try {
            ApiResponse<CustomFieldTab> response = apiInstance.createTaskCustomFieldTabWithHttpInfo(createCustomFieldTabRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTaskCustomFieldTab");
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
| **createCustomFieldTabRequest** | [**CreateCustomFieldTabRequest**](CreateCustomFieldTabRequest.md)|  | |

### Return type

ApiResponse<[**CustomFieldTab**](CustomFieldTab.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteTask

> void deleteTask(taskId)

Delete a Task

Deletes a single task

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | 
        try {
            apiInstance.deleteTask(taskId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTask");
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
| **taskId** | **String**|  | |

### Return type


null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteTaskWithHttpInfo

> ApiResponse<Void> deleteTask deleteTaskWithHttpInfo(taskId)

Delete a Task

Deletes a single task

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteTaskWithHttpInfo(taskId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTask");
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
| **taskId** | **String**|  | |

### Return type


ApiResponse<Void>

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteTaskCustomField

> void deleteTaskCustomField(customFieldId)

Delete a Custom Field

Deletes a Custom Field from the Task object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        try {
            apiInstance.deleteTaskCustomField(customFieldId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTaskCustomField");
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
| **customFieldId** | **String**|  | |

### Return type


null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteTaskCustomFieldWithHttpInfo

> ApiResponse<Void> deleteTaskCustomField deleteTaskCustomFieldWithHttpInfo(customFieldId)

Delete a Custom Field

Deletes a Custom Field from the Task object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteTaskCustomFieldWithHttpInfo(customFieldId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTaskCustomField");
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
| **customFieldId** | **String**|  | |

### Return type


ApiResponse<Void>

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteTaskCustomFieldGroup

> void deleteTaskCustomFieldGroup(groupId)

Delete a Task Custom Field Group

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        try {
            apiInstance.deleteTaskCustomFieldGroup(groupId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTaskCustomFieldGroup");
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
| **groupId** | **String**|  | |

### Return type


null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteTaskCustomFieldGroupWithHttpInfo

> ApiResponse<Void> deleteTaskCustomFieldGroup deleteTaskCustomFieldGroupWithHttpInfo(groupId)

Delete a Task Custom Field Group

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteTaskCustomFieldGroupWithHttpInfo(groupId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTaskCustomFieldGroup");
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
| **groupId** | **String**|  | |

### Return type


ApiResponse<Void>

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteTaskCustomFieldTab

> void deleteTaskCustomFieldTab(tabId)

Delete a Task Custom Field Tab

Deletes a custom field tab. Returns 409 Conflict if the tab still contains groups.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String tabId = "tabId_example"; // String | 
        try {
            apiInstance.deleteTaskCustomFieldTab(tabId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTaskCustomFieldTab");
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
| **tabId** | **String**|  | |

### Return type


null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteTaskCustomFieldTabWithHttpInfo

> ApiResponse<Void> deleteTaskCustomFieldTab deleteTaskCustomFieldTabWithHttpInfo(tabId)

Delete a Task Custom Field Tab

Deletes a custom field tab. Returns 409 Conflict if the tab still contains groups.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String tabId = "tabId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteTaskCustomFieldTabWithHttpInfo(tabId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTaskCustomFieldTab");
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
| **tabId** | **String**|  | |

### Return type


ApiResponse<Void>

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getTask

> Task getTask(taskId, fields)

Retrieve a Task

Retrieves a single task

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | 
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields
        try {
            Task result = apiInstance.getTask(taskId, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#getTask");
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
| **taskId** | **String**|  | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

[**Task**](Task.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getTaskWithHttpInfo

> ApiResponse<Task> getTask getTaskWithHttpInfo(taskId, fields)

Retrieve a Task

Retrieves a single task

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | 
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields
        try {
            ApiResponse<Task> response = apiInstance.getTaskWithHttpInfo(taskId, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#getTask");
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
| **taskId** | **String**|  | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

ApiResponse<[**Task**](Task.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getTaskCustomFieldGroup

> CustomFieldGroup getTaskCustomFieldGroup(groupId)

Retrieve a Task Custom Field Group

Retrieves a single custom field group by id for the Task record type.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        try {
            CustomFieldGroup result = apiInstance.getTaskCustomFieldGroup(groupId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#getTaskCustomFieldGroup");
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
| **groupId** | **String**|  | |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getTaskCustomFieldGroupWithHttpInfo

> ApiResponse<CustomFieldGroup> getTaskCustomFieldGroup getTaskCustomFieldGroupWithHttpInfo(groupId)

Retrieve a Task Custom Field Group

Retrieves a single custom field group by id for the Task record type.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        try {
            ApiResponse<CustomFieldGroup> response = apiInstance.getTaskCustomFieldGroupWithHttpInfo(groupId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#getTaskCustomFieldGroup");
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
| **groupId** | **String**|  | |

### Return type

ApiResponse<[**CustomFieldGroup**](CustomFieldGroup.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getTaskCustomFieldTab

> CustomFieldTab getTaskCustomFieldTab(tabId)

Retrieve a Task Custom Field Tab

Retrieves a single custom field tab by id for the Task record type.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String tabId = "tabId_example"; // String | 
        try {
            CustomFieldTab result = apiInstance.getTaskCustomFieldTab(tabId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#getTaskCustomFieldTab");
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
| **tabId** | **String**|  | |

### Return type

[**CustomFieldTab**](CustomFieldTab.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getTaskCustomFieldTabWithHttpInfo

> ApiResponse<CustomFieldTab> getTaskCustomFieldTab getTaskCustomFieldTabWithHttpInfo(tabId)

Retrieve a Task Custom Field Tab

Retrieves a single custom field tab by id for the Task record type.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String tabId = "tabId_example"; // String | 
        try {
            ApiResponse<CustomFieldTab> response = apiInstance.getTaskCustomFieldTabWithHttpInfo(tabId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#getTaskCustomFieldTab");
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
| **tabId** | **String**|  | |

### Return type

ApiResponse<[**CustomFieldTab**](CustomFieldTab.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listTaskCustomFieldGroups

> ListCustomFieldGroupsResponse listTaskCustomFieldGroups(tabId)

List Task Custom Field Groups

Retrieves a list of custom field groups for the Task record type. Optionally filter by tab_id to scope to a specific tab.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String tabId = "tabId_example"; // String | Optional tab id to scope groups to a single tab
        try {
            ListCustomFieldGroupsResponse result = apiInstance.listTaskCustomFieldGroups(tabId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#listTaskCustomFieldGroups");
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
| **tabId** | **String**| Optional tab id to scope groups to a single tab | [optional] |

### Return type

[**ListCustomFieldGroupsResponse**](ListCustomFieldGroupsResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listTaskCustomFieldGroupsWithHttpInfo

> ApiResponse<ListCustomFieldGroupsResponse> listTaskCustomFieldGroups listTaskCustomFieldGroupsWithHttpInfo(tabId)

List Task Custom Field Groups

Retrieves a list of custom field groups for the Task record type. Optionally filter by tab_id to scope to a specific tab.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String tabId = "tabId_example"; // String | Optional tab id to scope groups to a single tab
        try {
            ApiResponse<ListCustomFieldGroupsResponse> response = apiInstance.listTaskCustomFieldGroupsWithHttpInfo(tabId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#listTaskCustomFieldGroups");
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
| **tabId** | **String**| Optional tab id to scope groups to a single tab | [optional] |

### Return type

ApiResponse<[**ListCustomFieldGroupsResponse**](ListCustomFieldGroupsResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listTaskCustomFieldTabs

> ListCustomFieldTabsResponse listTaskCustomFieldTabs()

List Task Custom Field Tabs

Retrieves a list of custom field tabs for the Task record type.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        try {
            ListCustomFieldTabsResponse result = apiInstance.listTaskCustomFieldTabs();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#listTaskCustomFieldTabs");
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

[**ListCustomFieldTabsResponse**](ListCustomFieldTabsResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listTaskCustomFieldTabsWithHttpInfo

> ApiResponse<ListCustomFieldTabsResponse> listTaskCustomFieldTabs listTaskCustomFieldTabsWithHttpInfo()

List Task Custom Field Tabs

Retrieves a list of custom field tabs for the Task record type.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        try {
            ApiResponse<ListCustomFieldTabsResponse> response = apiInstance.listTaskCustomFieldTabsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#listTaskCustomFieldTabs");
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

ApiResponse<[**ListCustomFieldTabsResponse**](ListCustomFieldTabsResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listTasks

> ListTasksResponse listTasks(filter, orderBy, pageSize, pageToken, fields)

List Tasks

Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id&#x3D;&#x3D;UNASSIGNED.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `contact_id` - (String) `has_due_date` - (String) `is_completed` - (String) `user_id` - (String) `opportunity_id` - (String) `task_ids` - (String) `priority`  — one of `CRITICAL`, `ESSENTIAL`, `NONESSENTIAL` - (String) `since_time` - (String) `until_time` - (String)   `id`     — supports `==`, `>`, `<`, `>=`, `<=` - (String) `title`  — supports prefix wildcard (`title==Foo*`)  Operators must be URL-encoded (`==` → `%3D%3D`, `>` → `%3E`, `<` → `%3C`). For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=has_due_date%3D%3Dtrue` - `filter=is_completed%3D%3Dtrue` - `filter=user_id%3D%3D321` - `filter=opportunity_id%3D%3D321` - `filter=task_ids%3D%3D1,2,3` - `filter=priority%3D%3DCRITICAL` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;` - `filter=id%3E5`                  (id > 5) - `filter=id%3C%3D100`              (id <= 100) - `filter=title%3D%3DFollow%2A`     (title starts with \"Follow\")  **Custom fields:** tasks may also be filtered by any custom field defined on the Task record, referenced by its field name (e.g. `filter=cf_priority%3D%3D10`). Both indexed and non-indexed custom fields are filterable. Operators must be URL-encoded, same as the standard fields above. The supported operator and value depend on the field's data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (`==`) and prefix wildcard (e.g. `cf_company%3D%3DAcme%2A`) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (`==`, `>`, `<`, `>=`, `<=`) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. `cf_renewDate%3C%3D2026-01-01T00:00:00.000Z`). Date-only values such as `2026-01-01` are rejected - Yes/No fields — equals only, value `0` (No) or `1` (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. `cf_tags%3D%3Dred`) A custom field that does not exist, an operator unsupported for the field's type, or a value that does not match the field's type returns `400 Bad Request`. 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `due_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields
        try {
            ListTasksResponse result = apiInstance.listTasks(filter, orderBy, pageSize, pageToken, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#listTasks");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;opportunity_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;priority&#x60;  — one of &#x60;CRITICAL&#x60;, &#x60;ESSENTIAL&#x60;, &#x60;NONESSENTIAL&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String)   &#x60;id&#x60;     — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;title&#x60;  — supports prefix wildcard (&#x60;title&#x3D;&#x3D;Foo*&#x60;)  Operators must be URL-encoded (&#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;). For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;opportunity_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;priority%3D%3DCRITICAL&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;id%3E5&#x60;                  (id &gt; 5) - &#x60;filter&#x3D;id%3C%3D100&#x60;              (id &lt;&#x3D; 100) - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60;     (title starts with \&quot;Follow\&quot;)  **Custom fields:** tasks may also be filtered by any custom field defined on the Task record, referenced by its field name (e.g. &#x60;filter&#x3D;cf_priority%3D%3D10&#x60;). Both indexed and non-indexed custom fields are filterable. Operators must be URL-encoded, same as the standard fields above. The supported operator and value depend on the field&#39;s data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (&#x60;&#x3D;&#x3D;&#x60;) and prefix wildcard (e.g. &#x60;cf_company%3D%3DAcme%2A&#x60;) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (&#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60;) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. &#x60;cf_renewDate%3C%3D2026-01-01T00:00:00.000Z&#x60;). Date-only values such as &#x60;2026-01-01&#x60; are rejected - Yes/No fields — equals only, value &#x60;0&#x60; (No) or &#x60;1&#x60; (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. &#x60;cf_tags%3D%3Dred&#x60;) A custom field that does not exist, an operator unsupported for the field&#39;s type, or a value that does not match the field&#39;s type returns &#x60;400 Bad Request&#x60;.  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

[**ListTasksResponse**](ListTasksResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listTasksWithHttpInfo

> ApiResponse<ListTasksResponse> listTasks listTasksWithHttpInfo(filter, orderBy, pageSize, pageToken, fields)

List Tasks

Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id&#x3D;&#x3D;UNASSIGNED.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `contact_id` - (String) `has_due_date` - (String) `is_completed` - (String) `user_id` - (String) `opportunity_id` - (String) `task_ids` - (String) `priority`  — one of `CRITICAL`, `ESSENTIAL`, `NONESSENTIAL` - (String) `since_time` - (String) `until_time` - (String)   `id`     — supports `==`, `>`, `<`, `>=`, `<=` - (String) `title`  — supports prefix wildcard (`title==Foo*`)  Operators must be URL-encoded (`==` → `%3D%3D`, `>` → `%3E`, `<` → `%3C`). For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=has_due_date%3D%3Dtrue` - `filter=is_completed%3D%3Dtrue` - `filter=user_id%3D%3D321` - `filter=opportunity_id%3D%3D321` - `filter=task_ids%3D%3D1,2,3` - `filter=priority%3D%3DCRITICAL` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;` - `filter=id%3E5`                  (id > 5) - `filter=id%3C%3D100`              (id <= 100) - `filter=title%3D%3DFollow%2A`     (title starts with \"Follow\")  **Custom fields:** tasks may also be filtered by any custom field defined on the Task record, referenced by its field name (e.g. `filter=cf_priority%3D%3D10`). Both indexed and non-indexed custom fields are filterable. Operators must be URL-encoded, same as the standard fields above. The supported operator and value depend on the field's data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (`==`) and prefix wildcard (e.g. `cf_company%3D%3DAcme%2A`) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (`==`, `>`, `<`, `>=`, `<=`) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. `cf_renewDate%3C%3D2026-01-01T00:00:00.000Z`). Date-only values such as `2026-01-01` are rejected - Yes/No fields — equals only, value `0` (No) or `1` (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. `cf_tags%3D%3Dred`) A custom field that does not exist, an operator unsupported for the field's type, or a value that does not match the field's type returns `400 Bad Request`. 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `due_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields
        try {
            ApiResponse<ListTasksResponse> response = apiInstance.listTasksWithHttpInfo(filter, orderBy, pageSize, pageToken, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#listTasks");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;opportunity_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;priority&#x60;  — one of &#x60;CRITICAL&#x60;, &#x60;ESSENTIAL&#x60;, &#x60;NONESSENTIAL&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String)   &#x60;id&#x60;     — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;title&#x60;  — supports prefix wildcard (&#x60;title&#x3D;&#x3D;Foo*&#x60;)  Operators must be URL-encoded (&#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;). For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;opportunity_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;priority%3D%3DCRITICAL&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;id%3E5&#x60;                  (id &gt; 5) - &#x60;filter&#x3D;id%3C%3D100&#x60;              (id &lt;&#x3D; 100) - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60;     (title starts with \&quot;Follow\&quot;)  **Custom fields:** tasks may also be filtered by any custom field defined on the Task record, referenced by its field name (e.g. &#x60;filter&#x3D;cf_priority%3D%3D10&#x60;). Both indexed and non-indexed custom fields are filterable. Operators must be URL-encoded, same as the standard fields above. The supported operator and value depend on the field&#39;s data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (&#x60;&#x3D;&#x3D;&#x60;) and prefix wildcard (e.g. &#x60;cf_company%3D%3DAcme%2A&#x60;) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (&#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60;) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. &#x60;cf_renewDate%3C%3D2026-01-01T00:00:00.000Z&#x60;). Date-only values such as &#x60;2026-01-01&#x60; are rejected - Yes/No fields — equals only, value &#x60;0&#x60; (No) or &#x60;1&#x60; (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. &#x60;cf_tags%3D%3Dred&#x60;) A custom field that does not exist, an operator unsupported for the field&#39;s type, or a value that does not match the field&#39;s type returns &#x60;400 Bad Request&#x60;.  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

ApiResponse<[**ListTasksResponse**](ListTasksResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## retrieveTaskModel

> ObjectModel retrieveTaskModel()

Retrieve Task Model

Get the custom fields for the Task object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        try {
            ObjectModel result = apiInstance.retrieveTaskModel();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#retrieveTaskModel");
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

[**ObjectModel**](ObjectModel.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## retrieveTaskModelWithHttpInfo

> ApiResponse<ObjectModel> retrieveTaskModel retrieveTaskModelWithHttpInfo()

Retrieve Task Model

Get the custom fields for the Task object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        try {
            ApiResponse<ObjectModel> response = apiInstance.retrieveTaskModelWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#retrieveTaskModel");
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

ApiResponse<[**ObjectModel**](ObjectModel.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateTask

> UpdateTaskResponse updateTask(taskId, createUpdateTaskRequest, updateMask, fields)

Update a Task

Updates a task with only the values provided in the request.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | 
        CreateUpdateTaskRequest createUpdateTaskRequest = new CreateUpdateTaskRequest(); // CreateUpdateTaskRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields
        try {
            UpdateTaskResponse result = apiInstance.updateTask(taskId, createUpdateTaskRequest, updateMask, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#updateTask");
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
| **taskId** | **String**|  | |
| **createUpdateTaskRequest** | [**CreateUpdateTaskRequest**](CreateUpdateTaskRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: id, title, description, type, priority, completion_time, due_time, remind_time_mins, assigned_to_user_id, last_updated_by_user_id, contact_id, opportunity_id, accepted, completed, custom_fields] |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

[**UpdateTaskResponse**](UpdateTaskResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateTaskWithHttpInfo

> ApiResponse<UpdateTaskResponse> updateTask updateTaskWithHttpInfo(taskId, createUpdateTaskRequest, updateMask, fields)

Update a Task

Updates a task with only the values provided in the request.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | 
        CreateUpdateTaskRequest createUpdateTaskRequest = new CreateUpdateTaskRequest(); // CreateUpdateTaskRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields
        try {
            ApiResponse<UpdateTaskResponse> response = apiInstance.updateTaskWithHttpInfo(taskId, createUpdateTaskRequest, updateMask, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#updateTask");
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
| **taskId** | **String**|  | |
| **createUpdateTaskRequest** | [**CreateUpdateTaskRequest**](CreateUpdateTaskRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: id, title, description, type, priority, completion_time, due_time, remind_time_mins, assigned_to_user_id, last_updated_by_user_id, contact_id, opportunity_id, accepted, completed, custom_fields] |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

ApiResponse<[**UpdateTaskResponse**](UpdateTaskResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateTaskCustomField

> CustomFieldMetaData updateTaskCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Task&#39;s Custom Field

Updates a custom field of the specified type and options to the Task object.&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CustomFieldMetaData result = apiInstance.updateTaskCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#updateTaskCustomField");
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
| **customFieldId** | **String**|  | |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateTaskCustomFieldWithHttpInfo

> ApiResponse<CustomFieldMetaData> updateTaskCustomField updateTaskCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Task&#39;s Custom Field

Updates a custom field of the specified type and options to the Task object.&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.updateTaskCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#updateTaskCustomField");
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
| **customFieldId** | **String**|  | |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateTaskCustomFieldGroup

> CustomFieldGroup updateTaskCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest)

Update a Task Custom Field Group

Updates an existing custom field group. Only fields listed in &#x60;update_mask&#x60; are applied.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | Comma-separated list of fields to update
        UpdateCustomFieldGroupRequest updateCustomFieldGroupRequest = new UpdateCustomFieldGroupRequest(); // UpdateCustomFieldGroupRequest | 
        try {
            CustomFieldGroup result = apiInstance.updateTaskCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#updateTaskCustomFieldGroup");
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
| **groupId** | **String**|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| Comma-separated list of fields to update | [enum: name, tab_id, order] |
| **updateCustomFieldGroupRequest** | [**UpdateCustomFieldGroupRequest**](UpdateCustomFieldGroupRequest.md)|  | |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateTaskCustomFieldGroupWithHttpInfo

> ApiResponse<CustomFieldGroup> updateTaskCustomFieldGroup updateTaskCustomFieldGroupWithHttpInfo(groupId, updateMask, updateCustomFieldGroupRequest)

Update a Task Custom Field Group

Updates an existing custom field group. Only fields listed in &#x60;update_mask&#x60; are applied.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | Comma-separated list of fields to update
        UpdateCustomFieldGroupRequest updateCustomFieldGroupRequest = new UpdateCustomFieldGroupRequest(); // UpdateCustomFieldGroupRequest | 
        try {
            ApiResponse<CustomFieldGroup> response = apiInstance.updateTaskCustomFieldGroupWithHttpInfo(groupId, updateMask, updateCustomFieldGroupRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#updateTaskCustomFieldGroup");
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
| **groupId** | **String**|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| Comma-separated list of fields to update | [enum: name, tab_id, order] |
| **updateCustomFieldGroupRequest** | [**UpdateCustomFieldGroupRequest**](UpdateCustomFieldGroupRequest.md)|  | |

### Return type

ApiResponse<[**CustomFieldGroup**](CustomFieldGroup.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateTaskCustomFieldTab

> CustomFieldTab updateTaskCustomFieldTab(tabId, updateMask, updateCustomFieldTabRequest)

Update a Task Custom Field Tab

Updates an existing custom field tab. Only fields listed in &#x60;update_mask&#x60; are applied.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String tabId = "tabId_example"; // String | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | Comma-separated list of fields to update
        UpdateCustomFieldTabRequest updateCustomFieldTabRequest = new UpdateCustomFieldTabRequest(); // UpdateCustomFieldTabRequest | 
        try {
            CustomFieldTab result = apiInstance.updateTaskCustomFieldTab(tabId, updateMask, updateCustomFieldTabRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#updateTaskCustomFieldTab");
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
| **tabId** | **String**|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| Comma-separated list of fields to update | [enum: name, order] |
| **updateCustomFieldTabRequest** | [**UpdateCustomFieldTabRequest**](UpdateCustomFieldTabRequest.md)|  | |

### Return type

[**CustomFieldTab**](CustomFieldTab.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateTaskCustomFieldTabWithHttpInfo

> ApiResponse<CustomFieldTab> updateTaskCustomFieldTab updateTaskCustomFieldTabWithHttpInfo(tabId, updateMask, updateCustomFieldTabRequest)

Update a Task Custom Field Tab

Updates an existing custom field tab. Only fields listed in &#x60;update_mask&#x60; are applied.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String tabId = "tabId_example"; // String | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | Comma-separated list of fields to update
        UpdateCustomFieldTabRequest updateCustomFieldTabRequest = new UpdateCustomFieldTabRequest(); // UpdateCustomFieldTabRequest | 
        try {
            ApiResponse<CustomFieldTab> response = apiInstance.updateTaskCustomFieldTabWithHttpInfo(tabId, updateMask, updateCustomFieldTabRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#updateTaskCustomFieldTab");
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
| **tabId** | **String**|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| Comma-separated list of fields to update | [enum: name, order] |
| **updateCustomFieldTabRequest** | [**UpdateCustomFieldTabRequest**](UpdateCustomFieldTabRequest.md)|  | |

### Return type

ApiResponse<[**CustomFieldTab**](CustomFieldTab.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

