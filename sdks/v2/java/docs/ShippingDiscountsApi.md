# ShippingDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createShippingDiscount**](ShippingDiscountsApi.md#createShippingDiscount) | **POST** /v2/discounts/shipping | Create a Shipping Discount |
| [**createShippingDiscountWithHttpInfo**](ShippingDiscountsApi.md#createShippingDiscountWithHttpInfo) | **POST** /v2/discounts/shipping | Create a Shipping Discount |
| [**deleteShippingDiscount**](ShippingDiscountsApi.md#deleteShippingDiscount) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount |
| [**deleteShippingDiscountWithHttpInfo**](ShippingDiscountsApi.md#deleteShippingDiscountWithHttpInfo) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount |
| [**getShippingDiscount**](ShippingDiscountsApi.md#getShippingDiscount) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount |
| [**getShippingDiscountWithHttpInfo**](ShippingDiscountsApi.md#getShippingDiscountWithHttpInfo) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount |
| [**listShippingDiscounts**](ShippingDiscountsApi.md#listShippingDiscounts) | **GET** /v2/discounts/shipping | List all Shipping Discounts |
| [**listShippingDiscountsWithHttpInfo**](ShippingDiscountsApi.md#listShippingDiscountsWithHttpInfo) | **GET** /v2/discounts/shipping | List all Shipping Discounts |
| [**updateShippingDiscount**](ShippingDiscountsApi.md#updateShippingDiscount) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount |
| [**updateShippingDiscountWithHttpInfo**](ShippingDiscountsApi.md#updateShippingDiscountWithHttpInfo) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount |



## createShippingDiscount

> ShippingDiscount createShippingDiscount(createShippingDiscountRequest)

Create a Shipping Discount

Creates a Shipping Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingDiscountsApi apiInstance = new ShippingDiscountsApi(defaultClient);
        CreateShippingDiscountRequest createShippingDiscountRequest = new CreateShippingDiscountRequest(); // CreateShippingDiscountRequest | request
        try {
            ShippingDiscount result = apiInstance.createShippingDiscount(createShippingDiscountRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountsApi#createShippingDiscount");
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
| **createShippingDiscountRequest** | [**CreateShippingDiscountRequest**](CreateShippingDiscountRequest.md)| request | |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)


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

## createShippingDiscountWithHttpInfo

> ApiResponse<ShippingDiscount> createShippingDiscount createShippingDiscountWithHttpInfo(createShippingDiscountRequest)

Create a Shipping Discount

Creates a Shipping Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingDiscountsApi apiInstance = new ShippingDiscountsApi(defaultClient);
        CreateShippingDiscountRequest createShippingDiscountRequest = new CreateShippingDiscountRequest(); // CreateShippingDiscountRequest | request
        try {
            ApiResponse<ShippingDiscount> response = apiInstance.createShippingDiscountWithHttpInfo(createShippingDiscountRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountsApi#createShippingDiscount");
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
| **createShippingDiscountRequest** | [**CreateShippingDiscountRequest**](CreateShippingDiscountRequest.md)| request | |

### Return type

ApiResponse<[**ShippingDiscount**](ShippingDiscount.md)>


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


## deleteShippingDiscount

> void deleteShippingDiscount(discountId)

Delete a Shipping Discount

Deletes a specified Shipping Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingDiscountsApi apiInstance = new ShippingDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            apiInstance.deleteShippingDiscount(discountId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountsApi#deleteShippingDiscount");
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

## deleteShippingDiscountWithHttpInfo

> ApiResponse<Void> deleteShippingDiscount deleteShippingDiscountWithHttpInfo(discountId)

Delete a Shipping Discount

Deletes a specified Shipping Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingDiscountsApi apiInstance = new ShippingDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<Void> response = apiInstance.deleteShippingDiscountWithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountsApi#deleteShippingDiscount");
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


## getShippingDiscount

> ShippingDiscount getShippingDiscount(discountId)

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingDiscountsApi apiInstance = new ShippingDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ShippingDiscount result = apiInstance.getShippingDiscount(discountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountsApi#getShippingDiscount");
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

[**ShippingDiscount**](ShippingDiscount.md)


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

## getShippingDiscountWithHttpInfo

> ApiResponse<ShippingDiscount> getShippingDiscount getShippingDiscountWithHttpInfo(discountId)

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingDiscountsApi apiInstance = new ShippingDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<ShippingDiscount> response = apiInstance.getShippingDiscountWithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountsApi#getShippingDiscount");
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

ApiResponse<[**ShippingDiscount**](ShippingDiscount.md)>


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


## listShippingDiscounts

> ListShippingDiscountsResponse listShippingDiscounts(filter, orderBy, pageSize, pageToken)

List all Shipping Discounts

Retrieves a list of Shipping Discounts

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingDiscountsApi apiInstance = new ShippingDiscountsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D4.5` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `discount_type` - `discount_value` - `id` - `name`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListShippingDiscountsResponse result = apiInstance.listShippingDiscounts(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountsApi#listShippingDiscounts");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListShippingDiscountsResponse**](ListShippingDiscountsResponse.md)


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

## listShippingDiscountsWithHttpInfo

> ApiResponse<ListShippingDiscountsResponse> listShippingDiscounts listShippingDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken)

List all Shipping Discounts

Retrieves a list of Shipping Discounts

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingDiscountsApi apiInstance = new ShippingDiscountsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D4.5` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `discount_type` - `discount_value` - `id` - `name`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListShippingDiscountsResponse> response = apiInstance.listShippingDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountsApi#listShippingDiscounts");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListShippingDiscountsResponse**](ListShippingDiscountsResponse.md)>


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


## updateShippingDiscount

> ShippingDiscount updateShippingDiscount(discountId, updateShippingDiscountRequest, updateMask)

Update a Shipping Discount

Updates a Shipping Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingDiscountsApi apiInstance = new ShippingDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        UpdateShippingDiscountRequest updateShippingDiscountRequest = new UpdateShippingDiscountRequest(); // UpdateShippingDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ShippingDiscount result = apiInstance.updateShippingDiscount(discountId, updateShippingDiscountRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountsApi#updateShippingDiscount");
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
| **updateShippingDiscountRequest** | [**UpdateShippingDiscountRequest**](UpdateShippingDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description, discount_type, discount_value, criteria] |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)


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

## updateShippingDiscountWithHttpInfo

> ApiResponse<ShippingDiscount> updateShippingDiscount updateShippingDiscountWithHttpInfo(discountId, updateShippingDiscountRequest, updateMask)

Update a Shipping Discount

Updates a Shipping Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingDiscountsApi apiInstance = new ShippingDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        UpdateShippingDiscountRequest updateShippingDiscountRequest = new UpdateShippingDiscountRequest(); // UpdateShippingDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<ShippingDiscount> response = apiInstance.updateShippingDiscountWithHttpInfo(discountId, updateShippingDiscountRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountsApi#updateShippingDiscount");
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
| **updateShippingDiscountRequest** | [**UpdateShippingDiscountRequest**](UpdateShippingDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description, discount_type, discount_value, criteria] |

### Return type

ApiResponse<[**ShippingDiscount**](ShippingDiscount.md)>


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

