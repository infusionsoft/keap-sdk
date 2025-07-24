# AutomationCategoryApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCategory**](AutomationCategoryApi.md#createCategory) | **POST** /v2/automationCategory | Create automation category |
| [**createCategoryWithHttpInfo**](AutomationCategoryApi.md#createCategoryWithHttpInfo) | **POST** /v2/automationCategory | Create automation category |
| [**deleteCategories**](AutomationCategoryApi.md#deleteCategories) | **DELETE** /v2/automationCategory | Delete automation category |
| [**deleteCategoriesWithHttpInfo**](AutomationCategoryApi.md#deleteCategoriesWithHttpInfo) | **DELETE** /v2/automationCategory | Delete automation category |
| [**listCategories**](AutomationCategoryApi.md#listCategories) | **GET** /v2/automationCategory | List automation categories |
| [**listCategoriesWithHttpInfo**](AutomationCategoryApi.md#listCategoriesWithHttpInfo) | **GET** /v2/automationCategory | List automation categories |
| [**patchCategory**](AutomationCategoryApi.md#patchCategory) | **PATCH** /v2/automationCategory/{id} | Update automation category |
| [**patchCategoryWithHttpInfo**](AutomationCategoryApi.md#patchCategoryWithHttpInfo) | **PATCH** /v2/automationCategory/{id} | Update automation category |



## createCategory

> AutomationCategory createCategory(createAutomationCategoryRequest)

Create automation category

Creates a single automation category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        CreateAutomationCategoryRequest createAutomationCategoryRequest = new CreateAutomationCategoryRequest(); // CreateAutomationCategoryRequest | createAutomationCategoryRequest
        try {
            AutomationCategory result = apiInstance.createCategory(createAutomationCategoryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#createCategory");
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
| **createAutomationCategoryRequest** | [**CreateAutomationCategoryRequest**](CreateAutomationCategoryRequest.md)| createAutomationCategoryRequest | |

### Return type

[**AutomationCategory**](AutomationCategory.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## createCategoryWithHttpInfo

> ApiResponse<AutomationCategory> createCategory createCategoryWithHttpInfo(createAutomationCategoryRequest)

Create automation category

Creates a single automation category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        CreateAutomationCategoryRequest createAutomationCategoryRequest = new CreateAutomationCategoryRequest(); // CreateAutomationCategoryRequest | createAutomationCategoryRequest
        try {
            ApiResponse<AutomationCategory> response = apiInstance.createCategoryWithHttpInfo(createAutomationCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#createCategory");
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
| **createAutomationCategoryRequest** | [**CreateAutomationCategoryRequest**](CreateAutomationCategoryRequest.md)| createAutomationCategoryRequest | |

### Return type

ApiResponse<[**AutomationCategory**](AutomationCategory.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |


## deleteCategories

> void deleteCategories(ids)

Delete automation category

Deletes one or more automation categories based on the request parameters

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        List<Long> ids = Arrays.asList(); // List<Long> | ids
        try {
            apiInstance.deleteCategories(ids);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#deleteCategories");
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
| **ids** | [**List&lt;Long&gt;**](Long.md)| ids | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## deleteCategoriesWithHttpInfo

> ApiResponse<Void> deleteCategories deleteCategoriesWithHttpInfo(ids)

Delete automation category

Deletes one or more automation categories based on the request parameters

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        List<Long> ids = Arrays.asList(); // List<Long> | ids
        try {
            ApiResponse<Void> response = apiInstance.deleteCategoriesWithHttpInfo(ids);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#deleteCategories");
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
| **ids** | [**List&lt;Long&gt;**](Long.md)| ids | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |


## listCategories

> ListAutomationCategoryResponse listCategories()

List automation categories

Retrieves a list of automation categories

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        try {
            ListAutomationCategoryResponse result = apiInstance.listCategories();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#listCategories");
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

[**ListAutomationCategoryResponse**](ListAutomationCategoryResponse.md)


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

## listCategoriesWithHttpInfo

> ApiResponse<ListAutomationCategoryResponse> listCategories listCategoriesWithHttpInfo()

List automation categories

Retrieves a list of automation categories

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        try {
            ApiResponse<ListAutomationCategoryResponse> response = apiInstance.listCategoriesWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#listCategories");
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

ApiResponse<[**ListAutomationCategoryResponse**](ListAutomationCategoryResponse.md)>


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


## patchCategory

> AutomationCategory patchCategory(id, patchAutomationCategoryRequest)

Update automation category

Updates part of a single automation category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        String id = "id_example"; // String | id
        PatchAutomationCategoryRequest patchAutomationCategoryRequest = new PatchAutomationCategoryRequest(); // PatchAutomationCategoryRequest | patchAutomationCategoryRequest
        try {
            AutomationCategory result = apiInstance.patchCategory(id, patchAutomationCategoryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#patchCategory");
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
| **id** | **String**| id | |
| **patchAutomationCategoryRequest** | [**PatchAutomationCategoryRequest**](PatchAutomationCategoryRequest.md)| patchAutomationCategoryRequest | |

### Return type

[**AutomationCategory**](AutomationCategory.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## patchCategoryWithHttpInfo

> ApiResponse<AutomationCategory> patchCategory patchCategoryWithHttpInfo(id, patchAutomationCategoryRequest)

Update automation category

Updates part of a single automation category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        String id = "id_example"; // String | id
        PatchAutomationCategoryRequest patchAutomationCategoryRequest = new PatchAutomationCategoryRequest(); // PatchAutomationCategoryRequest | patchAutomationCategoryRequest
        try {
            ApiResponse<AutomationCategory> response = apiInstance.patchCategoryWithHttpInfo(id, patchAutomationCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#patchCategory");
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
| **id** | **String**| id | |
| **patchAutomationCategoryRequest** | [**PatchAutomationCategoryRequest**](PatchAutomationCategoryRequest.md)| patchAutomationCategoryRequest | |

### Return type

ApiResponse<[**AutomationCategory**](AutomationCategory.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

