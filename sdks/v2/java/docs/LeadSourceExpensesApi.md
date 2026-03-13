# LeadSourceExpensesApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLeadSourceExpense**](LeadSourceExpensesApi.md#createLeadSourceExpense) | **POST** /rest/v2/leadSources/{lead_source_id}/expenses | Create a Lead Source Expense |
| [**createLeadSourceExpenseWithHttpInfo**](LeadSourceExpensesApi.md#createLeadSourceExpenseWithHttpInfo) | **POST** /rest/v2/leadSources/{lead_source_id}/expenses | Create a Lead Source Expense |
| [**deleteLeadSourceExpense**](LeadSourceExpensesApi.md#deleteLeadSourceExpense) | **DELETE** /rest/v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Delete a lead source expense |
| [**deleteLeadSourceExpenseWithHttpInfo**](LeadSourceExpensesApi.md#deleteLeadSourceExpenseWithHttpInfo) | **DELETE** /rest/v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Delete a lead source expense |
| [**getLeadSourceExpense**](LeadSourceExpensesApi.md#getLeadSourceExpense) | **GET** /rest/v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Retrieve a Lead Source Expense |
| [**getLeadSourceExpenseWithHttpInfo**](LeadSourceExpensesApi.md#getLeadSourceExpenseWithHttpInfo) | **GET** /rest/v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Retrieve a Lead Source Expense |
| [**listLeadSourceExpenses**](LeadSourceExpensesApi.md#listLeadSourceExpenses) | **GET** /rest/v2/leadSources/{lead_source_id}/expenses | List Lead Source Expenses |
| [**listLeadSourceExpensesWithHttpInfo**](LeadSourceExpensesApi.md#listLeadSourceExpensesWithHttpInfo) | **GET** /rest/v2/leadSources/{lead_source_id}/expenses | List Lead Source Expenses |
| [**updateLeadSourceExpense**](LeadSourceExpensesApi.md#updateLeadSourceExpense) | **PATCH** /rest/v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Update a Lead Source Expense |
| [**updateLeadSourceExpenseWithHttpInfo**](LeadSourceExpensesApi.md#updateLeadSourceExpenseWithHttpInfo) | **PATCH** /rest/v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Update a Lead Source Expense |



## createLeadSourceExpense

> LeadSourceExpense createLeadSourceExpense(leadSourceId, createLeadSourceExpenseRequest)

Create a Lead Source Expense

Creates a new Lead Source Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        CreateLeadSourceExpenseRequest createLeadSourceExpenseRequest = new CreateLeadSourceExpenseRequest(); // CreateLeadSourceExpenseRequest | 
        try {
            LeadSourceExpense result = apiInstance.createLeadSourceExpense(leadSourceId, createLeadSourceExpenseRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#createLeadSourceExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this expense belongs to | |
| **createLeadSourceExpenseRequest** | [**CreateLeadSourceExpenseRequest**](CreateLeadSourceExpenseRequest.md)|  | |

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createLeadSourceExpenseWithHttpInfo

> ApiResponse<LeadSourceExpense> createLeadSourceExpense createLeadSourceExpenseWithHttpInfo(leadSourceId, createLeadSourceExpenseRequest)

Create a Lead Source Expense

Creates a new Lead Source Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        CreateLeadSourceExpenseRequest createLeadSourceExpenseRequest = new CreateLeadSourceExpenseRequest(); // CreateLeadSourceExpenseRequest | 
        try {
            ApiResponse<LeadSourceExpense> response = apiInstance.createLeadSourceExpenseWithHttpInfo(leadSourceId, createLeadSourceExpenseRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#createLeadSourceExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this expense belongs to | |
| **createLeadSourceExpenseRequest** | [**CreateLeadSourceExpenseRequest**](CreateLeadSourceExpenseRequest.md)|  | |

### Return type

ApiResponse<[**LeadSourceExpense**](LeadSourceExpense.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteLeadSourceExpense

> void deleteLeadSourceExpense(leadSourceExpenseId, leadSourceId)

Delete a lead source expense

Deletes a lead source expense by ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        try {
            apiInstance.deleteLeadSourceExpense(leadSourceExpenseId, leadSourceId);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#deleteLeadSourceExpense");
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
| **leadSourceExpenseId** | **String**| The ID of a lead source expense | |
| **leadSourceId** | **String**| The ID of the lead source this expense belongs to | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteLeadSourceExpenseWithHttpInfo

> ApiResponse<Void> deleteLeadSourceExpense deleteLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId)

Delete a lead source expense

Deletes a lead source expense by ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        try {
            ApiResponse<Void> response = apiInstance.deleteLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#deleteLeadSourceExpense");
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
| **leadSourceExpenseId** | **String**| The ID of a lead source expense | |
| **leadSourceId** | **String**| The ID of the lead source this expense belongs to | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getLeadSourceExpense

> LeadSourceExpense getLeadSourceExpense(leadSourceExpenseId, leadSourceId)

Retrieve a Lead Source Expense

Retrieves a single Lead Source Expense for a given ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        try {
            LeadSourceExpense result = apiInstance.getLeadSourceExpense(leadSourceExpenseId, leadSourceId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#getLeadSourceExpense");
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
| **leadSourceExpenseId** | **String**| The ID of a lead source expense | |
| **leadSourceId** | **String**| The ID of the lead source this expense belongs to | |

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getLeadSourceExpenseWithHttpInfo

> ApiResponse<LeadSourceExpense> getLeadSourceExpense getLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId)

Retrieve a Lead Source Expense

Retrieves a single Lead Source Expense for a given ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        try {
            ApiResponse<LeadSourceExpense> response = apiInstance.getLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#getLeadSourceExpense");
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
| **leadSourceExpenseId** | **String**| The ID of a lead source expense | |
| **leadSourceId** | **String**| The ID of the lead source this expense belongs to | |

### Return type

ApiResponse<[**LeadSourceExpense**](LeadSourceExpense.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listLeadSourceExpenses

> ListLeadSourceExpensesResponse listLeadSourceExpenses(leadSourceId, filter, orderBy, pageSize, pageToken)

List Lead Source Expenses

Retrieves a list of lead source expenses

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListLeadSourceExpensesResponse result = apiInstance.listLeadSourceExpenses(leadSourceId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#listLeadSourceExpenses");
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
| **leadSourceId** | **String**| The ID of the lead source this expense belongs to | |
| **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListLeadSourceExpensesResponse**](ListLeadSourceExpensesResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listLeadSourceExpensesWithHttpInfo

> ApiResponse<ListLeadSourceExpensesResponse> listLeadSourceExpenses listLeadSourceExpensesWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken)

List Lead Source Expenses

Retrieves a list of lead source expenses

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListLeadSourceExpensesResponse> response = apiInstance.listLeadSourceExpensesWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#listLeadSourceExpenses");
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
| **leadSourceId** | **String**| The ID of the lead source this expense belongs to | |
| **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListLeadSourceExpensesResponse**](ListLeadSourceExpensesResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateLeadSourceExpense

> LeadSourceExpense updateLeadSourceExpense(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask)

Update a Lead Source Expense

Updates a new Lead Source Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        UpdateLeadSourceExpenseRequest updateLeadSourceExpenseRequest = new UpdateLeadSourceExpenseRequest(); // UpdateLeadSourceExpenseRequest | 
        String updateMask = "title,notes,amount,incurred_time"; // String | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            LeadSourceExpense result = apiInstance.updateLeadSourceExpense(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#updateLeadSourceExpense");
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
| **leadSourceExpenseId** | **String**| The ID of a lead source expense | |
| **leadSourceId** | **String**| The ID of the lead source this expense belongs to | |
| **updateLeadSourceExpenseRequest** | [**UpdateLeadSourceExpenseRequest**](UpdateLeadSourceExpenseRequest.md)|  | |
| **updateMask** | **String**| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: title,notes,amount,incurred_time] |

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateLeadSourceExpenseWithHttpInfo

> ApiResponse<LeadSourceExpense> updateLeadSourceExpense updateLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask)

Update a Lead Source Expense

Updates a new Lead Source Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        UpdateLeadSourceExpenseRequest updateLeadSourceExpenseRequest = new UpdateLeadSourceExpenseRequest(); // UpdateLeadSourceExpenseRequest | 
        String updateMask = "title,notes,amount,incurred_time"; // String | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<LeadSourceExpense> response = apiInstance.updateLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#updateLeadSourceExpense");
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
| **leadSourceExpenseId** | **String**| The ID of a lead source expense | |
| **leadSourceId** | **String**| The ID of the lead source this expense belongs to | |
| **updateLeadSourceExpenseRequest** | [**UpdateLeadSourceExpenseRequest**](UpdateLeadSourceExpenseRequest.md)|  | |
| **updateMask** | **String**| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: title,notes,amount,incurred_time] |

### Return type

ApiResponse<[**LeadSourceExpense**](LeadSourceExpense.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

