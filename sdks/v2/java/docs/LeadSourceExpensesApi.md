# LeadSourceExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLeadSourceExpenseUsingPOST**](LeadSourceExpensesApi.md#createLeadSourceExpenseUsingPOST) | **POST** /v2/leadSources/{lead_source_id}/expenses | Create a Lead Source Expense |
| [**createLeadSourceExpenseUsingPOSTWithHttpInfo**](LeadSourceExpensesApi.md#createLeadSourceExpenseUsingPOSTWithHttpInfo) | **POST** /v2/leadSources/{lead_source_id}/expenses | Create a Lead Source Expense |
| [**deleteLeadSourceUsingDELETE1**](LeadSourceExpensesApi.md#deleteLeadSourceUsingDELETE1) | **DELETE** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Delete a lead source expense |
| [**deleteLeadSourceUsingDELETE1WithHttpInfo**](LeadSourceExpensesApi.md#deleteLeadSourceUsingDELETE1WithHttpInfo) | **DELETE** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Delete a lead source expense |
| [**getLeadSourceExpenseUsingGET**](LeadSourceExpensesApi.md#getLeadSourceExpenseUsingGET) | **GET** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Retrieve a Lead Source Expense |
| [**getLeadSourceExpenseUsingGETWithHttpInfo**](LeadSourceExpensesApi.md#getLeadSourceExpenseUsingGETWithHttpInfo) | **GET** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Retrieve a Lead Source Expense |
| [**listLeadSourceExpensesUsingGET**](LeadSourceExpensesApi.md#listLeadSourceExpensesUsingGET) | **GET** /v2/leadSources/{lead_source_id}/expenses | List Lead Source Expenses |
| [**listLeadSourceExpensesUsingGETWithHttpInfo**](LeadSourceExpensesApi.md#listLeadSourceExpensesUsingGETWithHttpInfo) | **GET** /v2/leadSources/{lead_source_id}/expenses | List Lead Source Expenses |
| [**updateLeadSourceExpenseUsingPATCH**](LeadSourceExpensesApi.md#updateLeadSourceExpenseUsingPATCH) | **PATCH** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Update a Lead Source Expense |
| [**updateLeadSourceExpenseUsingPATCHWithHttpInfo**](LeadSourceExpensesApi.md#updateLeadSourceExpenseUsingPATCHWithHttpInfo) | **PATCH** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Update a Lead Source Expense |



## createLeadSourceExpenseUsingPOST

> LeadSourceExpense createLeadSourceExpenseUsingPOST(leadSourceId, createLeadSourceExpenseRequest)

Create a Lead Source Expense

Creates a new Lead Source Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        CreateLeadSourceExpenseRequest createLeadSourceExpenseRequest = new CreateLeadSourceExpenseRequest(); // CreateLeadSourceExpenseRequest | The request object to create a new lead source expense
        try {
            LeadSourceExpense result = apiInstance.createLeadSourceExpenseUsingPOST(leadSourceId, createLeadSourceExpenseRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#createLeadSourceExpenseUsingPOST");
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
| **createLeadSourceExpenseRequest** | [**CreateLeadSourceExpenseRequest**](CreateLeadSourceExpenseRequest.md)| The request object to create a new lead source expense | |

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)


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
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## createLeadSourceExpenseUsingPOSTWithHttpInfo

> ApiResponse<LeadSourceExpense> createLeadSourceExpenseUsingPOST createLeadSourceExpenseUsingPOSTWithHttpInfo(leadSourceId, createLeadSourceExpenseRequest)

Create a Lead Source Expense

Creates a new Lead Source Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        CreateLeadSourceExpenseRequest createLeadSourceExpenseRequest = new CreateLeadSourceExpenseRequest(); // CreateLeadSourceExpenseRequest | The request object to create a new lead source expense
        try {
            ApiResponse<LeadSourceExpense> response = apiInstance.createLeadSourceExpenseUsingPOSTWithHttpInfo(leadSourceId, createLeadSourceExpenseRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#createLeadSourceExpenseUsingPOST");
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
| **createLeadSourceExpenseRequest** | [**CreateLeadSourceExpenseRequest**](CreateLeadSourceExpenseRequest.md)| The request object to create a new lead source expense | |

### Return type

ApiResponse<[**LeadSourceExpense**](LeadSourceExpense.md)>


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
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |


## deleteLeadSourceUsingDELETE1

> void deleteLeadSourceUsingDELETE1(leadSourceExpenseId, leadSourceId)

Delete a lead source expense

Deletes a lead source expense by ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        try {
            apiInstance.deleteLeadSourceUsingDELETE1(leadSourceExpenseId, leadSourceId);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#deleteLeadSourceUsingDELETE1");
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

## deleteLeadSourceUsingDELETE1WithHttpInfo

> ApiResponse<Void> deleteLeadSourceUsingDELETE1 deleteLeadSourceUsingDELETE1WithHttpInfo(leadSourceExpenseId, leadSourceId)

Delete a lead source expense

Deletes a lead source expense by ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        try {
            ApiResponse<Void> response = apiInstance.deleteLeadSourceUsingDELETE1WithHttpInfo(leadSourceExpenseId, leadSourceId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#deleteLeadSourceUsingDELETE1");
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


## getLeadSourceExpenseUsingGET

> LeadSourceExpense getLeadSourceExpenseUsingGET(leadSourceExpenseId, leadSourceId)

Retrieve a Lead Source Expense

Retrieves a single Lead Source Expense for a given ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        try {
            LeadSourceExpense result = apiInstance.getLeadSourceExpenseUsingGET(leadSourceExpenseId, leadSourceId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#getLeadSourceExpenseUsingGET");
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

## getLeadSourceExpenseUsingGETWithHttpInfo

> ApiResponse<LeadSourceExpense> getLeadSourceExpenseUsingGET getLeadSourceExpenseUsingGETWithHttpInfo(leadSourceExpenseId, leadSourceId)

Retrieve a Lead Source Expense

Retrieves a single Lead Source Expense for a given ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        try {
            ApiResponse<LeadSourceExpense> response = apiInstance.getLeadSourceExpenseUsingGETWithHttpInfo(leadSourceExpenseId, leadSourceId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#getLeadSourceExpenseUsingGET");
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


## listLeadSourceExpensesUsingGET

> ListLeadSourceExpensesResponse listLeadSourceExpensesUsingGET(leadSourceId, filter, orderBy, pageSize, pageToken)

List Lead Source Expenses

Retrieves a list of lead source expenses

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListLeadSourceExpensesResponse result = apiInstance.listLeadSourceExpensesUsingGET(leadSourceId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#listLeadSourceExpensesUsingGET");
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

## listLeadSourceExpensesUsingGETWithHttpInfo

> ApiResponse<ListLeadSourceExpensesResponse> listLeadSourceExpensesUsingGET listLeadSourceExpensesUsingGETWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken)

List Lead Source Expenses

Retrieves a list of lead source expenses

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListLeadSourceExpensesResponse> response = apiInstance.listLeadSourceExpensesUsingGETWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#listLeadSourceExpensesUsingGET");
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


## updateLeadSourceExpenseUsingPATCH

> LeadSourceExpense updateLeadSourceExpenseUsingPATCH(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask)

Update a Lead Source Expense

Updates a new Lead Source Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        UpdateLeadSourceExpenseRequest updateLeadSourceExpenseRequest = new UpdateLeadSourceExpenseRequest(); // UpdateLeadSourceExpenseRequest | The request object to update a lead source expense
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            LeadSourceExpense result = apiInstance.updateLeadSourceExpenseUsingPATCH(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#updateLeadSourceExpenseUsingPATCH");
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
| **updateLeadSourceExpenseRequest** | [**UpdateLeadSourceExpenseRequest**](UpdateLeadSourceExpenseRequest.md)| The request object to update a lead source expense | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: title, notes, amount, incurred_time] |

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)


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

## updateLeadSourceExpenseUsingPATCHWithHttpInfo

> ApiResponse<LeadSourceExpense> updateLeadSourceExpenseUsingPATCH updateLeadSourceExpenseUsingPATCHWithHttpInfo(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask)

Update a Lead Source Expense

Updates a new Lead Source Expense

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceExpensesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceExpensesApi apiInstance = new LeadSourceExpensesApi(defaultClient);
        String leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
        String leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
        UpdateLeadSourceExpenseRequest updateLeadSourceExpenseRequest = new UpdateLeadSourceExpenseRequest(); // UpdateLeadSourceExpenseRequest | The request object to update a lead source expense
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<LeadSourceExpense> response = apiInstance.updateLeadSourceExpenseUsingPATCHWithHttpInfo(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceExpensesApi#updateLeadSourceExpenseUsingPATCH");
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
| **updateLeadSourceExpenseRequest** | [**UpdateLeadSourceExpenseRequest**](UpdateLeadSourceExpenseRequest.md)| The request object to update a lead source expense | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: title, notes, amount, incurred_time] |

### Return type

ApiResponse<[**LeadSourceExpense**](LeadSourceExpense.md)>


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

