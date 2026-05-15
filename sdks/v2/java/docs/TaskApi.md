# TaskApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTask**](TaskApi.md#createTask) | **POST** /rest/v2/tasks | Create a Task |
| [**createTaskWithHttpInfo**](TaskApi.md#createTaskWithHttpInfo) | **POST** /rest/v2/tasks | Create a Task |
| [**createTaskCustomField**](TaskApi.md#createTaskCustomField) | **POST** /rest/v2/tasks/model/customFields | Create a Custom Field |
| [**createTaskCustomFieldWithHttpInfo**](TaskApi.md#createTaskCustomFieldWithHttpInfo) | **POST** /rest/v2/tasks/model/customFields | Create a Custom Field |
| [**deleteTask**](TaskApi.md#deleteTask) | **DELETE** /rest/v2/tasks/{task_id} | Delete a Task |
| [**deleteTaskWithHttpInfo**](TaskApi.md#deleteTaskWithHttpInfo) | **DELETE** /rest/v2/tasks/{task_id} | Delete a Task |
| [**deleteTaskCustomField**](TaskApi.md#deleteTaskCustomField) | **DELETE** /rest/v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**deleteTaskCustomFieldWithHttpInfo**](TaskApi.md#deleteTaskCustomFieldWithHttpInfo) | **DELETE** /rest/v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**getTask**](TaskApi.md#getTask) | **GET** /rest/v2/tasks/{task_id} | Retrieve a Task |
| [**getTaskWithHttpInfo**](TaskApi.md#getTaskWithHttpInfo) | **GET** /rest/v2/tasks/{task_id} | Retrieve a Task |
| [**listTasks**](TaskApi.md#listTasks) | **GET** /rest/v2/tasks | List Tasks |
| [**listTasksWithHttpInfo**](TaskApi.md#listTasksWithHttpInfo) | **GET** /rest/v2/tasks | List Tasks |
| [**retrieveTaskModel**](TaskApi.md#retrieveTaskModel) | **GET** /rest/v2/tasks/model | Retrieve Task Model |
| [**retrieveTaskModelWithHttpInfo**](TaskApi.md#retrieveTaskModelWithHttpInfo) | **GET** /rest/v2/tasks/model | Retrieve Task Model |
| [**updateTask**](TaskApi.md#updateTask) | **PATCH** /rest/v2/tasks/{task_id} | Update a Task |
| [**updateTaskWithHttpInfo**](TaskApi.md#updateTaskWithHttpInfo) | **PATCH** /rest/v2/tasks/{task_id} | Update a Task |
| [**updateTaskCustomField**](TaskApi.md#updateTaskCustomField) | **PATCH** /rest/v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field |
| [**updateTaskCustomFieldWithHttpInfo**](TaskApi.md#updateTaskCustomFieldWithHttpInfo) | **PATCH** /rest/v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field |



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
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `contact_id` - (String) `has_due_date` - (String) `is_completed` - (String) `user_id` - (String) `task_ids` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=has_due_date%3D%3Dtrue` - `filter=is_completed%3D%3Dtrue` - `filter=user_id%3D%3D321` - `filter=task_ids%3D%3D1,2,3` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `due_time`  One of the following directions: - `asc` - `desc`
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
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
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `contact_id` - (String) `has_due_date` - (String) `is_completed` - (String) `user_id` - (String) `task_ids` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=has_due_date%3D%3Dtrue` - `filter=is_completed%3D%3Dtrue` - `filter=user_id%3D%3D321` - `filter=task_ids%3D%3D1,2,3` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `due_time`  One of the following directions: - `asc` - `desc`
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
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
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |
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
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |
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
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

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
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

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

