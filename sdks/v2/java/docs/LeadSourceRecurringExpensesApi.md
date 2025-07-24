# LeadSourceRecurringExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#createLeadSourceRecurringExpense) | **POST** /v2/leadSources/{lead_source_id}/recurringExpenses | Create a Lead Source Recurring Expense |
| [**createLeadSourceRecurringExpenseWithHttpInfo**](LeadSourceRecurringExpensesApi.md#createLeadSourceRecurringExpenseWithHttpInfo) | **POST** /v2/leadSources/{lead_source_id}/recurringExpenses | Create a Lead Source Recurring Expense |
| [**deleteLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#deleteLeadSourceRecurringExpense) | **DELETE** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Delete a Lead Source Recurring Expense |
| [**deleteLeadSourceRecurringExpenseWithHttpInfo**](LeadSourceRecurringExpensesApi.md#deleteLeadSourceRecurringExpenseWithHttpInfo) | **DELETE** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Delete a Lead Source Recurring Expense |
| [**getLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#getLeadSourceRecurringExpense) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Retrieve a Lead Source Recurring Expense |
| [**getLeadSourceRecurringExpenseWithHttpInfo**](LeadSourceRecurringExpensesApi.md#getLeadSourceRecurringExpenseWithHttpInfo) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Retrieve a Lead Source Recurring Expense |
| [**listExpensesIncurredFromLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#listExpensesIncurredFromLeadSourceRecurringExpense) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}/expenses | Retrieves a list of expenses incurred from a recurring expense |
| [**listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo**](LeadSourceRecurringExpensesApi.md#listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}/expenses | Retrieves a list of expenses incurred from a recurring expense |
| [**listLeadSourceRecurringExpenses**](LeadSourceRecurringExpensesApi.md#listLeadSourceRecurringExpenses) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses | Retrieves a list of lead source recurring expenses |
| [**listLeadSourceRecurringExpensesWithHttpInfo**](LeadSourceRecurringExpensesApi.md#listLeadSourceRecurringExpensesWithHttpInfo) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses | Retrieves a list of lead source recurring expenses |
| [**updateLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#updateLeadSourceRecurringExpense) | **PATCH** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Update a Lead Source Recurring Expense |
| [**updateLeadSourceRecurringExpenseWithHttpInfo**](LeadSourceRecurringExpensesApi.md#updateLeadSourceRecurringExpenseWithHttpInfo) | **PATCH** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Update a Lead Source Recurring Expense |



## createLeadSourceRecurringExpense

> LeadSourceRecurringExpense createLeadSourceRecurringExpense(leadSourceId, createLeadSourceRecurringExpenseRequest)

Create a Lead Source Recurring Expense

Creates a new Lead Source Recurring Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        CreateLeadSourceRecurringExpenseRequest createLeadSourceRecurringExpenseRequest = new CreateLeadSourceRecurringExpenseRequest(); // CreateLeadSourceRecurringExpenseRequest | The request object to create a new lead source recurring expense
        try {
            LeadSourceRecurringExpense result = apiInstance.createLeadSourceRecurringExpense(leadSourceId, createLeadSourceRecurringExpenseRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#createLeadSourceRecurringExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **createLeadSourceRecurringExpenseRequest** | [**CreateLeadSourceRecurringExpenseRequest**](CreateLeadSourceRecurringExpenseRequest.md)| The request object to create a new lead source recurring expense | |

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

## createLeadSourceRecurringExpenseWithHttpInfo

> ApiResponse<LeadSourceRecurringExpense> createLeadSourceRecurringExpense createLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, createLeadSourceRecurringExpenseRequest)

Create a Lead Source Recurring Expense

Creates a new Lead Source Recurring Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        CreateLeadSourceRecurringExpenseRequest createLeadSourceRecurringExpenseRequest = new CreateLeadSourceRecurringExpenseRequest(); // CreateLeadSourceRecurringExpenseRequest | The request object to create a new lead source recurring expense
        try {
            ApiResponse<LeadSourceRecurringExpense> response = apiInstance.createLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, createLeadSourceRecurringExpenseRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#createLeadSourceRecurringExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **createLeadSourceRecurringExpenseRequest** | [**CreateLeadSourceRecurringExpenseRequest**](CreateLeadSourceRecurringExpenseRequest.md)| The request object to create a new lead source recurring expense | |

### Return type

ApiResponse<[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)>


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |


## deleteLeadSourceRecurringExpense

> void deleteLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId)

Delete a Lead Source Recurring Expense

Deletes a new Lead Source Recurring Expense that belongs to a Lead Source

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        String leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
        try {
            apiInstance.deleteLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#deleteLeadSourceRecurringExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | |

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

## deleteLeadSourceRecurringExpenseWithHttpInfo

> ApiResponse<Void> deleteLeadSourceRecurringExpense deleteLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId)

Delete a Lead Source Recurring Expense

Deletes a new Lead Source Recurring Expense that belongs to a Lead Source

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        String leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
        try {
            ApiResponse<Void> response = apiInstance.deleteLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#deleteLeadSourceRecurringExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | |

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


## getLeadSourceRecurringExpense

> LeadSourceRecurringExpense getLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId)

Retrieve a Lead Source Recurring Expense

Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        String leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
        try {
            LeadSourceRecurringExpense result = apiInstance.getLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#getLeadSourceRecurringExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | |

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)


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

## getLeadSourceRecurringExpenseWithHttpInfo

> ApiResponse<LeadSourceRecurringExpense> getLeadSourceRecurringExpense getLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId)

Retrieve a Lead Source Recurring Expense

Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        String leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
        try {
            ApiResponse<LeadSourceRecurringExpense> response = apiInstance.getLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#getLeadSourceRecurringExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | |

### Return type

ApiResponse<[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)>


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


## listExpensesIncurredFromLeadSourceRecurringExpense

> ListLeadSourceExpensesResponse listExpensesIncurredFromLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken)

Retrieves a list of expenses incurred from a recurring expense

Retrieves a list of expenses incurred from a recurring expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        String leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListLeadSourceExpensesResponse result = apiInstance.listExpensesIncurredFromLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#listExpensesIncurredFromLeadSourceRecurringExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | |
| **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListLeadSourceExpensesResponse**](ListLeadSourceExpensesResponse.md)


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

## listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo

> ApiResponse<ListLeadSourceExpensesResponse> listExpensesIncurredFromLeadSourceRecurringExpense listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken)

Retrieves a list of expenses incurred from a recurring expense

Retrieves a list of expenses incurred from a recurring expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        String leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListLeadSourceExpensesResponse> response = apiInstance.listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#listExpensesIncurredFromLeadSourceRecurringExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | |
| **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListLeadSourceExpensesResponse**](ListLeadSourceExpensesResponse.md)>


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |


## listLeadSourceRecurringExpenses

> ListLeadSourceRecurringExpensesResponse listLeadSourceRecurringExpenses(leadSourceId, filter, orderBy, pageSize, pageToken)

Retrieves a list of lead source recurring expenses

Retrieves a list of recurring expenses with lead_source_id and optional &#39;filter&#39; query param

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `start_time` - (String) `end_time` - (String) `next_expense_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=next_expense_time%3D%3D2024-12-22T01:00:00.000Z`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `title` - `amount` - `start_time` - `end_time` - `next_expense_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListLeadSourceRecurringExpensesResponse result = apiInstance.listLeadSourceRecurringExpenses(leadSourceId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#listLeadSourceRecurringExpenses");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListLeadSourceRecurringExpensesResponse**](ListLeadSourceRecurringExpensesResponse.md)


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

## listLeadSourceRecurringExpensesWithHttpInfo

> ApiResponse<ListLeadSourceRecurringExpensesResponse> listLeadSourceRecurringExpenses listLeadSourceRecurringExpensesWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken)

Retrieves a list of lead source recurring expenses

Retrieves a list of recurring expenses with lead_source_id and optional &#39;filter&#39; query param

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `start_time` - (String) `end_time` - (String) `next_expense_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=next_expense_time%3D%3D2024-12-22T01:00:00.000Z`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `title` - `amount` - `start_time` - `end_time` - `next_expense_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListLeadSourceRecurringExpensesResponse> response = apiInstance.listLeadSourceRecurringExpensesWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#listLeadSourceRecurringExpenses");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListLeadSourceRecurringExpensesResponse**](ListLeadSourceRecurringExpensesResponse.md)>


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |


## updateLeadSourceRecurringExpense

> LeadSourceRecurringExpense updateLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask)

Update a Lead Source Recurring Expense

Updates a Lead Source Recurring Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        String leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
        LeadSourceRecurringExpenseUpdateRequest leadSourceRecurringExpenseUpdateRequest = new LeadSourceRecurringExpenseUpdateRequest(); // LeadSourceRecurringExpenseUpdateRequest | The request object to update a lead source recurring expense
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            LeadSourceRecurringExpense result = apiInstance.updateLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#updateLeadSourceRecurringExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | |
| **leadSourceRecurringExpenseUpdateRequest** | [**LeadSourceRecurringExpenseUpdateRequest**](LeadSourceRecurringExpenseUpdateRequest.md)| The request object to update a lead source recurring expense | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: title, notes, amount, start_time, end_time] |

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

## updateLeadSourceRecurringExpenseWithHttpInfo

> ApiResponse<LeadSourceRecurringExpense> updateLeadSourceRecurringExpense updateLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask)

Update a Lead Source Recurring Expense

Updates a Lead Source Recurring Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceRecurringExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceRecurringExpensesApi apiInstance = new LeadSourceRecurringExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
        String leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
        LeadSourceRecurringExpenseUpdateRequest leadSourceRecurringExpenseUpdateRequest = new LeadSourceRecurringExpenseUpdateRequest(); // LeadSourceRecurringExpenseUpdateRequest | The request object to update a lead source recurring expense
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<LeadSourceRecurringExpense> response = apiInstance.updateLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceRecurringExpensesApi#updateLeadSourceRecurringExpense");
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
| **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | |
| **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | |
| **leadSourceRecurringExpenseUpdateRequest** | [**LeadSourceRecurringExpenseUpdateRequest**](LeadSourceRecurringExpenseUpdateRequest.md)| The request object to update a lead source recurring expense | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: title, notes, amount, start_time, end_time] |

### Return type

ApiResponse<[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)>


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

