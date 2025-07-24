# FreeTrialDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFreeTrialDiscount**](FreeTrialDiscountsApi.md#createFreeTrialDiscount) | **POST** /v2/discounts/freeTrials | Create a Subscription Free Trial Discount |
| [**createFreeTrialDiscountWithHttpInfo**](FreeTrialDiscountsApi.md#createFreeTrialDiscountWithHttpInfo) | **POST** /v2/discounts/freeTrials | Create a Subscription Free Trial Discount |
| [**deleteFreeTrialDiscount**](FreeTrialDiscountsApi.md#deleteFreeTrialDiscount) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Subscription Free Trial Discount |
| [**deleteFreeTrialDiscountWithHttpInfo**](FreeTrialDiscountsApi.md#deleteFreeTrialDiscountWithHttpInfo) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Subscription Free Trial Discount |
| [**getFreeTrialDiscount**](FreeTrialDiscountsApi.md#getFreeTrialDiscount) | **GET** /v2/discounts/freeTrials/{discount_id} | Retrieve a Subscription Free Trial Discount |
| [**getFreeTrialDiscountWithHttpInfo**](FreeTrialDiscountsApi.md#getFreeTrialDiscountWithHttpInfo) | **GET** /v2/discounts/freeTrials/{discount_id} | Retrieve a Subscription Free Trial Discount |
| [**listFreeTrialDiscounts**](FreeTrialDiscountsApi.md#listFreeTrialDiscounts) | **GET** /v2/discounts/freeTrials | List all Subscription Free Trial Discounts |
| [**listFreeTrialDiscountsWithHttpInfo**](FreeTrialDiscountsApi.md#listFreeTrialDiscountsWithHttpInfo) | **GET** /v2/discounts/freeTrials | List all Subscription Free Trial Discounts |
| [**updateFreeTrialDiscount**](FreeTrialDiscountsApi.md#updateFreeTrialDiscount) | **PATCH** /v2/discounts/freeTrials/{discount_id} | Update a Subscription Free Trial Discount |
| [**updateFreeTrialDiscountWithHttpInfo**](FreeTrialDiscountsApi.md#updateFreeTrialDiscountWithHttpInfo) | **PATCH** /v2/discounts/freeTrials/{discount_id} | Update a Subscription Free Trial Discount |



## createFreeTrialDiscount

> FreeTrialDiscount createFreeTrialDiscount(createFreeTrialDiscountRequest)

Create a Subscription Free Trial Discount

Creates a Subscription Free Trial Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FreeTrialDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FreeTrialDiscountsApi apiInstance = new FreeTrialDiscountsApi(defaultClient);
        CreateFreeTrialDiscountRequest createFreeTrialDiscountRequest = new CreateFreeTrialDiscountRequest(); // CreateFreeTrialDiscountRequest | createFreeTrialDiscountRequest
        try {
            FreeTrialDiscount result = apiInstance.createFreeTrialDiscount(createFreeTrialDiscountRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FreeTrialDiscountsApi#createFreeTrialDiscount");
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
| **createFreeTrialDiscountRequest** | [**CreateFreeTrialDiscountRequest**](CreateFreeTrialDiscountRequest.md)| createFreeTrialDiscountRequest | |

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)


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

## createFreeTrialDiscountWithHttpInfo

> ApiResponse<FreeTrialDiscount> createFreeTrialDiscount createFreeTrialDiscountWithHttpInfo(createFreeTrialDiscountRequest)

Create a Subscription Free Trial Discount

Creates a Subscription Free Trial Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FreeTrialDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FreeTrialDiscountsApi apiInstance = new FreeTrialDiscountsApi(defaultClient);
        CreateFreeTrialDiscountRequest createFreeTrialDiscountRequest = new CreateFreeTrialDiscountRequest(); // CreateFreeTrialDiscountRequest | createFreeTrialDiscountRequest
        try {
            ApiResponse<FreeTrialDiscount> response = apiInstance.createFreeTrialDiscountWithHttpInfo(createFreeTrialDiscountRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FreeTrialDiscountsApi#createFreeTrialDiscount");
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
| **createFreeTrialDiscountRequest** | [**CreateFreeTrialDiscountRequest**](CreateFreeTrialDiscountRequest.md)| createFreeTrialDiscountRequest | |

### Return type

ApiResponse<[**FreeTrialDiscount**](FreeTrialDiscount.md)>


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


## deleteFreeTrialDiscount

> void deleteFreeTrialDiscount(discountId)

Delete a Subscription Free Trial Discount

Deletes a specified Subscription Free Trial Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FreeTrialDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FreeTrialDiscountsApi apiInstance = new FreeTrialDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            apiInstance.deleteFreeTrialDiscount(discountId);
        } catch (ApiException e) {
            System.err.println("Exception when calling FreeTrialDiscountsApi#deleteFreeTrialDiscount");
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
| **discountId** | **String**| discount_id | |

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

## deleteFreeTrialDiscountWithHttpInfo

> ApiResponse<Void> deleteFreeTrialDiscount deleteFreeTrialDiscountWithHttpInfo(discountId)

Delete a Subscription Free Trial Discount

Deletes a specified Subscription Free Trial Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FreeTrialDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FreeTrialDiscountsApi apiInstance = new FreeTrialDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<Void> response = apiInstance.deleteFreeTrialDiscountWithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling FreeTrialDiscountsApi#deleteFreeTrialDiscount");
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
| **discountId** | **String**| discount_id | |

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


## getFreeTrialDiscount

> FreeTrialDiscount getFreeTrialDiscount(discountId)

Retrieve a Subscription Free Trial Discount

Retrieves a Subscription Free Trial Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FreeTrialDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FreeTrialDiscountsApi apiInstance = new FreeTrialDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            FreeTrialDiscount result = apiInstance.getFreeTrialDiscount(discountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FreeTrialDiscountsApi#getFreeTrialDiscount");
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
| **discountId** | **String**| discount_id | |

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)


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

## getFreeTrialDiscountWithHttpInfo

> ApiResponse<FreeTrialDiscount> getFreeTrialDiscount getFreeTrialDiscountWithHttpInfo(discountId)

Retrieve a Subscription Free Trial Discount

Retrieves a Subscription Free Trial Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FreeTrialDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FreeTrialDiscountsApi apiInstance = new FreeTrialDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<FreeTrialDiscount> response = apiInstance.getFreeTrialDiscountWithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FreeTrialDiscountsApi#getFreeTrialDiscount");
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
| **discountId** | **String**| discount_id | |

### Return type

ApiResponse<[**FreeTrialDiscount**](FreeTrialDiscount.md)>


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


## listFreeTrialDiscounts

> ListFreeTrialDiscountsResponse listFreeTrialDiscounts(filter, orderBy, pageSize, pageToken)

List all Subscription Free Trial Discounts

Retrieves a list of Subscription Free Trial Discounts

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FreeTrialDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FreeTrialDiscountsApi apiInstance = new FreeTrialDiscountsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (Integer) `free_trial_days` - (Boolean) `hide_price` - (String) `subscription_plan_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=free_trial_days%3D%3D14` - `filter=hide_price%3D%3DTrue` - `filter=subscription_plan_id%3D%3DmySubscriptionPlanId` - `filter=free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `free_trial_days` - `hide_price` - `id` - `name` - `subscription_plan_id`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListFreeTrialDiscountsResponse result = apiInstance.listFreeTrialDiscounts(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FreeTrialDiscountsApi#listFreeTrialDiscounts");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListFreeTrialDiscountsResponse**](ListFreeTrialDiscountsResponse.md)


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

## listFreeTrialDiscountsWithHttpInfo

> ApiResponse<ListFreeTrialDiscountsResponse> listFreeTrialDiscounts listFreeTrialDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken)

List all Subscription Free Trial Discounts

Retrieves a list of Subscription Free Trial Discounts

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FreeTrialDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FreeTrialDiscountsApi apiInstance = new FreeTrialDiscountsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (Integer) `free_trial_days` - (Boolean) `hide_price` - (String) `subscription_plan_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=free_trial_days%3D%3D14` - `filter=hide_price%3D%3DTrue` - `filter=subscription_plan_id%3D%3DmySubscriptionPlanId` - `filter=free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `free_trial_days` - `hide_price` - `id` - `name` - `subscription_plan_id`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListFreeTrialDiscountsResponse> response = apiInstance.listFreeTrialDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FreeTrialDiscountsApi#listFreeTrialDiscounts");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListFreeTrialDiscountsResponse**](ListFreeTrialDiscountsResponse.md)>


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


## updateFreeTrialDiscount

> FreeTrialDiscount updateFreeTrialDiscount(discountId, updateFreeTrialDiscountRequest, updateMask)

Update a Subscription Free Trial Discount

Updates a Subscription Free Trial Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FreeTrialDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FreeTrialDiscountsApi apiInstance = new FreeTrialDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        UpdateFreeTrialDiscountRequest updateFreeTrialDiscountRequest = new UpdateFreeTrialDiscountRequest(); // UpdateFreeTrialDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            FreeTrialDiscount result = apiInstance.updateFreeTrialDiscount(discountId, updateFreeTrialDiscountRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FreeTrialDiscountsApi#updateFreeTrialDiscount");
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
| **discountId** | **String**| discount_id | |
| **updateFreeTrialDiscountRequest** | [**UpdateFreeTrialDiscountRequest**](UpdateFreeTrialDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description, free_trial_days, hide_price, subscription_plan_id, criteria] |

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)


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

## updateFreeTrialDiscountWithHttpInfo

> ApiResponse<FreeTrialDiscount> updateFreeTrialDiscount updateFreeTrialDiscountWithHttpInfo(discountId, updateFreeTrialDiscountRequest, updateMask)

Update a Subscription Free Trial Discount

Updates a Subscription Free Trial Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FreeTrialDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FreeTrialDiscountsApi apiInstance = new FreeTrialDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        UpdateFreeTrialDiscountRequest updateFreeTrialDiscountRequest = new UpdateFreeTrialDiscountRequest(); // UpdateFreeTrialDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<FreeTrialDiscount> response = apiInstance.updateFreeTrialDiscountWithHttpInfo(discountId, updateFreeTrialDiscountRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FreeTrialDiscountsApi#updateFreeTrialDiscount");
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
| **discountId** | **String**| discount_id | |
| **updateFreeTrialDiscountRequest** | [**UpdateFreeTrialDiscountRequest**](UpdateFreeTrialDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description, free_trial_days, hide_price, subscription_plan_id, criteria] |

### Return type

ApiResponse<[**FreeTrialDiscount**](FreeTrialDiscount.md)>


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

