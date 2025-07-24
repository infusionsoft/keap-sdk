# SubscriptionPlansApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSubscriptionPlans**](SubscriptionPlansApi.md#createSubscriptionPlans) | **POST** /v2/products/{product_id}/subscriptions | Create Subscription Plan |
| [**createSubscriptionPlansWithHttpInfo**](SubscriptionPlansApi.md#createSubscriptionPlansWithHttpInfo) | **POST** /v2/products/{product_id}/subscriptions | Create Subscription Plan |
| [**deleteSubscriptionPlan**](SubscriptionPlansApi.md#deleteSubscriptionPlan) | **DELETE** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Delete Subscription Plan |
| [**deleteSubscriptionPlanWithHttpInfo**](SubscriptionPlansApi.md#deleteSubscriptionPlanWithHttpInfo) | **DELETE** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Delete Subscription Plan |
| [**fetchSubscriptionPlan**](SubscriptionPlansApi.md#fetchSubscriptionPlan) | **GET** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Get Subscription Plan |
| [**fetchSubscriptionPlanWithHttpInfo**](SubscriptionPlansApi.md#fetchSubscriptionPlanWithHttpInfo) | **GET** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Get Subscription Plan |
| [**listSubscriptionPlans**](SubscriptionPlansApi.md#listSubscriptionPlans) | **GET** /v2/products/{product_id}/subscriptions | List Subscription Plans |
| [**listSubscriptionPlansWithHttpInfo**](SubscriptionPlansApi.md#listSubscriptionPlansWithHttpInfo) | **GET** /v2/products/{product_id}/subscriptions | List Subscription Plans |
| [**updateSubscriptionPlan**](SubscriptionPlansApi.md#updateSubscriptionPlan) | **PATCH** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Update Subscription Plan |
| [**updateSubscriptionPlanWithHttpInfo**](SubscriptionPlansApi.md#updateSubscriptionPlanWithHttpInfo) | **PATCH** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Update Subscription Plan |



## createSubscriptionPlans

> SubscriptionPlan createSubscriptionPlans(productId, createSubscriptionPlanRequest)

Create Subscription Plan

Creates a Subscription Plan

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        CreateSubscriptionPlanRequest createSubscriptionPlanRequest = new CreateSubscriptionPlanRequest(); // CreateSubscriptionPlanRequest | createSubscriptionPlanRequest
        try {
            SubscriptionPlan result = apiInstance.createSubscriptionPlans(productId, createSubscriptionPlanRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#createSubscriptionPlans");
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
| **productId** | **String**| product_id | |
| **createSubscriptionPlanRequest** | [**CreateSubscriptionPlanRequest**](CreateSubscriptionPlanRequest.md)| createSubscriptionPlanRequest | |

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)


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

## createSubscriptionPlansWithHttpInfo

> ApiResponse<SubscriptionPlan> createSubscriptionPlans createSubscriptionPlansWithHttpInfo(productId, createSubscriptionPlanRequest)

Create Subscription Plan

Creates a Subscription Plan

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        CreateSubscriptionPlanRequest createSubscriptionPlanRequest = new CreateSubscriptionPlanRequest(); // CreateSubscriptionPlanRequest | createSubscriptionPlanRequest
        try {
            ApiResponse<SubscriptionPlan> response = apiInstance.createSubscriptionPlansWithHttpInfo(productId, createSubscriptionPlanRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#createSubscriptionPlans");
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
| **productId** | **String**| product_id | |
| **createSubscriptionPlanRequest** | [**CreateSubscriptionPlanRequest**](CreateSubscriptionPlanRequest.md)| createSubscriptionPlanRequest | |

### Return type

ApiResponse<[**SubscriptionPlan**](SubscriptionPlan.md)>


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


## deleteSubscriptionPlan

> void deleteSubscriptionPlan(productId, subscriptionPlanId)

Delete Subscription Plan

Deletes a Subscription Plan

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        String subscriptionPlanId = "subscriptionPlanId_example"; // String | subscription_plan_id
        try {
            apiInstance.deleteSubscriptionPlan(productId, subscriptionPlanId);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#deleteSubscriptionPlan");
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
| **productId** | **String**| product_id | |
| **subscriptionPlanId** | **String**| subscription_plan_id | |

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

## deleteSubscriptionPlanWithHttpInfo

> ApiResponse<Void> deleteSubscriptionPlan deleteSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId)

Delete Subscription Plan

Deletes a Subscription Plan

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        String subscriptionPlanId = "subscriptionPlanId_example"; // String | subscription_plan_id
        try {
            ApiResponse<Void> response = apiInstance.deleteSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#deleteSubscriptionPlan");
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
| **productId** | **String**| product_id | |
| **subscriptionPlanId** | **String**| subscription_plan_id | |

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


## fetchSubscriptionPlan

> SubscriptionPlan fetchSubscriptionPlan(productId, subscriptionPlanId)

Get Subscription Plan

Retrieves a Subscription Plan

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        String subscriptionPlanId = "subscriptionPlanId_example"; // String | subscription_plan_id
        try {
            SubscriptionPlan result = apiInstance.fetchSubscriptionPlan(productId, subscriptionPlanId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#fetchSubscriptionPlan");
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
| **productId** | **String**| product_id | |
| **subscriptionPlanId** | **String**| subscription_plan_id | |

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)


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

## fetchSubscriptionPlanWithHttpInfo

> ApiResponse<SubscriptionPlan> fetchSubscriptionPlan fetchSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId)

Get Subscription Plan

Retrieves a Subscription Plan

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        String subscriptionPlanId = "subscriptionPlanId_example"; // String | subscription_plan_id
        try {
            ApiResponse<SubscriptionPlan> response = apiInstance.fetchSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#fetchSubscriptionPlan");
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
| **productId** | **String**| product_id | |
| **subscriptionPlanId** | **String**| subscription_plan_id | |

### Return type

ApiResponse<[**SubscriptionPlan**](SubscriptionPlan.md)>


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


## listSubscriptionPlans

> ListSubscriptionPlansResponse listSubscriptionPlans(productId, filter, orderBy, pageSize, pageToken)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String productId = "'-' can be used for a wildcard (/v2/products/-/subscriptions"; // String | product_id
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (Boolean) `active`: true or false - (BillingCycle) `cycle_type`: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=active%3D%3Dtrue` - `filter=cycle_type%3D%3DDAILY` - `filter=active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `product_id`  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListSubscriptionPlansResponse result = apiInstance.listSubscriptionPlans(productId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#listSubscriptionPlans");
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
| **productId** | **String**| product_id | |
| **filter** | **String**| Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)


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

## listSubscriptionPlansWithHttpInfo

> ApiResponse<ListSubscriptionPlansResponse> listSubscriptionPlans listSubscriptionPlansWithHttpInfo(productId, filter, orderBy, pageSize, pageToken)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String productId = "'-' can be used for a wildcard (/v2/products/-/subscriptions"; // String | product_id
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (Boolean) `active`: true or false - (BillingCycle) `cycle_type`: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=active%3D%3Dtrue` - `filter=cycle_type%3D%3DDAILY` - `filter=active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `product_id`  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListSubscriptionPlansResponse> response = apiInstance.listSubscriptionPlansWithHttpInfo(productId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#listSubscriptionPlans");
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
| **productId** | **String**| product_id | |
| **filter** | **String**| Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)>


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


## updateSubscriptionPlan

> SubscriptionPlan updateSubscriptionPlan(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask)

Update Subscription Plan

Updates a Subscription Plan

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        String subscriptionPlanId = "subscriptionPlanId_example"; // String | subscription_plan_id
        UpdateSubscriptionPlanRequest updateSubscriptionPlanRequest = new UpdateSubscriptionPlanRequest(); // UpdateSubscriptionPlanRequest | updateSubscriptionPlanRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            SubscriptionPlan result = apiInstance.updateSubscriptionPlan(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#updateSubscriptionPlan");
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
| **productId** | **String**| product_id | |
| **subscriptionPlanId** | **String**| subscription_plan_id | |
| **updateSubscriptionPlanRequest** | [**UpdateSubscriptionPlanRequest**](UpdateSubscriptionPlanRequest.md)| updateSubscriptionPlanRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: active, allow_prorating, cycle_type, display_order_index, frequency, plan_price, total_cycles] |

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)


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

## updateSubscriptionPlanWithHttpInfo

> ApiResponse<SubscriptionPlan> updateSubscriptionPlan updateSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask)

Update Subscription Plan

Updates a Subscription Plan

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        String subscriptionPlanId = "subscriptionPlanId_example"; // String | subscription_plan_id
        UpdateSubscriptionPlanRequest updateSubscriptionPlanRequest = new UpdateSubscriptionPlanRequest(); // UpdateSubscriptionPlanRequest | updateSubscriptionPlanRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<SubscriptionPlan> response = apiInstance.updateSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#updateSubscriptionPlan");
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
| **productId** | **String**| product_id | |
| **subscriptionPlanId** | **String**| subscription_plan_id | |
| **updateSubscriptionPlanRequest** | [**UpdateSubscriptionPlanRequest**](UpdateSubscriptionPlanRequest.md)| updateSubscriptionPlanRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: active, allow_prorating, cycle_type, display_order_index, frequency, plan_price, total_cycles] |

### Return type

ApiResponse<[**SubscriptionPlan**](SubscriptionPlan.md)>


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

