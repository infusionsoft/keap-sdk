# CategoryDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCategoryDiscount**](CategoryDiscountsApi.md#createCategoryDiscount) | **POST** /v2/discounts/productCategories | Create a Category Discount |
| [**createCategoryDiscountWithHttpInfo**](CategoryDiscountsApi.md#createCategoryDiscountWithHttpInfo) | **POST** /v2/discounts/productCategories | Create a Category Discount |
| [**deleteCategoryDiscount**](CategoryDiscountsApi.md#deleteCategoryDiscount) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount |
| [**deleteCategoryDiscountWithHttpInfo**](CategoryDiscountsApi.md#deleteCategoryDiscountWithHttpInfo) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount |
| [**getCategoryDiscount**](CategoryDiscountsApi.md#getCategoryDiscount) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount |
| [**getCategoryDiscountWithHttpInfo**](CategoryDiscountsApi.md#getCategoryDiscountWithHttpInfo) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount |
| [**listCategoryDiscounts**](CategoryDiscountsApi.md#listCategoryDiscounts) | **GET** /v2/discounts/productCategories | List Category Discounts |
| [**listCategoryDiscountsWithHttpInfo**](CategoryDiscountsApi.md#listCategoryDiscountsWithHttpInfo) | **GET** /v2/discounts/productCategories | List Category Discounts |
| [**updateCategoryDiscount**](CategoryDiscountsApi.md#updateCategoryDiscount) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount |
| [**updateCategoryDiscountWithHttpInfo**](CategoryDiscountsApi.md#updateCategoryDiscountWithHttpInfo) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount |



## createCategoryDiscount

> CategoryDiscount createCategoryDiscount(createCategoryDiscountRequest)

Create a Category Discount

Creates a Category Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CategoryDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CategoryDiscountsApi apiInstance = new CategoryDiscountsApi(defaultClient);
        CreateCategoryDiscountRequest createCategoryDiscountRequest = new CreateCategoryDiscountRequest(); // CreateCategoryDiscountRequest | request
        try {
            CategoryDiscount result = apiInstance.createCategoryDiscount(createCategoryDiscountRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountsApi#createCategoryDiscount");
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
| **createCategoryDiscountRequest** | [**CreateCategoryDiscountRequest**](CreateCategoryDiscountRequest.md)| request | |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)


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

## createCategoryDiscountWithHttpInfo

> ApiResponse<CategoryDiscount> createCategoryDiscount createCategoryDiscountWithHttpInfo(createCategoryDiscountRequest)

Create a Category Discount

Creates a Category Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CategoryDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CategoryDiscountsApi apiInstance = new CategoryDiscountsApi(defaultClient);
        CreateCategoryDiscountRequest createCategoryDiscountRequest = new CreateCategoryDiscountRequest(); // CreateCategoryDiscountRequest | request
        try {
            ApiResponse<CategoryDiscount> response = apiInstance.createCategoryDiscountWithHttpInfo(createCategoryDiscountRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountsApi#createCategoryDiscount");
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
| **createCategoryDiscountRequest** | [**CreateCategoryDiscountRequest**](CreateCategoryDiscountRequest.md)| request | |

### Return type

ApiResponse<[**CategoryDiscount**](CategoryDiscount.md)>


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


## deleteCategoryDiscount

> void deleteCategoryDiscount(discountId)

Delete a Category Discount

Deletes a specified Category Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CategoryDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CategoryDiscountsApi apiInstance = new CategoryDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            apiInstance.deleteCategoryDiscount(discountId);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountsApi#deleteCategoryDiscount");
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

## deleteCategoryDiscountWithHttpInfo

> ApiResponse<Void> deleteCategoryDiscount deleteCategoryDiscountWithHttpInfo(discountId)

Delete a Category Discount

Deletes a specified Category Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CategoryDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CategoryDiscountsApi apiInstance = new CategoryDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<Void> response = apiInstance.deleteCategoryDiscountWithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountsApi#deleteCategoryDiscount");
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


## getCategoryDiscount

> CategoryDiscount getCategoryDiscount(discountId)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CategoryDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CategoryDiscountsApi apiInstance = new CategoryDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            CategoryDiscount result = apiInstance.getCategoryDiscount(discountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountsApi#getCategoryDiscount");
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

[**CategoryDiscount**](CategoryDiscount.md)


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

## getCategoryDiscountWithHttpInfo

> ApiResponse<CategoryDiscount> getCategoryDiscount getCategoryDiscountWithHttpInfo(discountId)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CategoryDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CategoryDiscountsApi apiInstance = new CategoryDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<CategoryDiscount> response = apiInstance.getCategoryDiscountWithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountsApi#getCategoryDiscount");
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

ApiResponse<[**CategoryDiscount**](CategoryDiscount.md)>


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


## listCategoryDiscounts

> ListCategoryDiscountsResponse listCategoryDiscounts(filter, orderBy, pageSize, pageToken)

List Category Discounts

Retrieves a list of Category Discounts

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CategoryDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CategoryDiscountsApi apiInstance = new CategoryDiscountsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, the allowed field is: - (String) `product_category_id`  You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `name`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListCategoryDiscountsResponse result = apiInstance.listCategoryDiscounts(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountsApi#listCategoryDiscounts");
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
| **filter** | **String**| Filter to apply, the allowed field is: - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListCategoryDiscountsResponse**](ListCategoryDiscountsResponse.md)


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

## listCategoryDiscountsWithHttpInfo

> ApiResponse<ListCategoryDiscountsResponse> listCategoryDiscounts listCategoryDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Category Discounts

Retrieves a list of Category Discounts

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CategoryDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CategoryDiscountsApi apiInstance = new CategoryDiscountsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, the allowed field is: - (String) `product_category_id`  You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `name`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListCategoryDiscountsResponse> response = apiInstance.listCategoryDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountsApi#listCategoryDiscounts");
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
| **filter** | **String**| Filter to apply, the allowed field is: - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListCategoryDiscountsResponse**](ListCategoryDiscountsResponse.md)>


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


## updateCategoryDiscount

> CategoryDiscount updateCategoryDiscount(discountId, updateCategoryDiscountRequest, updateMask)

Update a Category Discount

Updates a Category Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CategoryDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CategoryDiscountsApi apiInstance = new CategoryDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        UpdateCategoryDiscountRequest updateCategoryDiscountRequest = new UpdateCategoryDiscountRequest(); // UpdateCategoryDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CategoryDiscount result = apiInstance.updateCategoryDiscount(discountId, updateCategoryDiscountRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountsApi#updateCategoryDiscount");
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
| **updateCategoryDiscountRequest** | [**UpdateCategoryDiscountRequest**](UpdateCategoryDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description, discount_percent, apply_to_commissions, criteria, product_category_ids] |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)


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

## updateCategoryDiscountWithHttpInfo

> ApiResponse<CategoryDiscount> updateCategoryDiscount updateCategoryDiscountWithHttpInfo(discountId, updateCategoryDiscountRequest, updateMask)

Update a Category Discount

Updates a Category Discount

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CategoryDiscountsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CategoryDiscountsApi apiInstance = new CategoryDiscountsApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        UpdateCategoryDiscountRequest updateCategoryDiscountRequest = new UpdateCategoryDiscountRequest(); // UpdateCategoryDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CategoryDiscount> response = apiInstance.updateCategoryDiscountWithHttpInfo(discountId, updateCategoryDiscountRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountsApi#updateCategoryDiscount");
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
| **updateCategoryDiscountRequest** | [**UpdateCategoryDiscountRequest**](UpdateCategoryDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description, discount_percent, apply_to_commissions, criteria, product_category_ids] |

### Return type

ApiResponse<[**CategoryDiscount**](CategoryDiscount.md)>


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

