# ProductInterestBundlesApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addProductInterest**](ProductInterestBundlesApi.md#addProductInterest) | **POST** /rest/v2/productInterestBundles/{id}/interests | Create a Product Interest in an existing Bundle |
| [**addProductInterestWithHttpInfo**](ProductInterestBundlesApi.md#addProductInterestWithHttpInfo) | **POST** /rest/v2/productInterestBundles/{id}/interests | Create a Product Interest in an existing Bundle |
| [**createProductInterestBundle**](ProductInterestBundlesApi.md#createProductInterestBundle) | **POST** /rest/v2/productInterestBundles | Create a Product Interest Bundle |
| [**createProductInterestBundleWithHttpInfo**](ProductInterestBundlesApi.md#createProductInterestBundleWithHttpInfo) | **POST** /rest/v2/productInterestBundles | Create a Product Interest Bundle |
| [**deleteProductInterestBundle**](ProductInterestBundlesApi.md#deleteProductInterestBundle) | **DELETE** /rest/v2/productInterestBundles/{id} | Delete a Product Interest Bundle |
| [**deleteProductInterestBundleWithHttpInfo**](ProductInterestBundlesApi.md#deleteProductInterestBundleWithHttpInfo) | **DELETE** /rest/v2/productInterestBundles/{id} | Delete a Product Interest Bundle |
| [**getProductInterestBundle**](ProductInterestBundlesApi.md#getProductInterestBundle) | **GET** /rest/v2/productInterestBundles/{id} | Get a Product Interest Bundle |
| [**getProductInterestBundleWithHttpInfo**](ProductInterestBundlesApi.md#getProductInterestBundleWithHttpInfo) | **GET** /rest/v2/productInterestBundles/{id} | Get a Product Interest Bundle |
| [**listProductInterestBundles**](ProductInterestBundlesApi.md#listProductInterestBundles) | **GET** /rest/v2/productInterestBundles | List Product Interest Bundles |
| [**listProductInterestBundlesWithHttpInfo**](ProductInterestBundlesApi.md#listProductInterestBundlesWithHttpInfo) | **GET** /rest/v2/productInterestBundles | List Product Interest Bundles |
| [**removeProductInterest**](ProductInterestBundlesApi.md#removeProductInterest) | **DELETE** /rest/v2/productInterestBundles/{id}/interests/{interest_id} | Delete a Product Interest from an existing Bundle |
| [**removeProductInterestWithHttpInfo**](ProductInterestBundlesApi.md#removeProductInterestWithHttpInfo) | **DELETE** /rest/v2/productInterestBundles/{id}/interests/{interest_id} | Delete a Product Interest from an existing Bundle |
| [**updateProductInterest**](ProductInterestBundlesApi.md#updateProductInterest) | **PATCH** /rest/v2/productInterestBundles/{id}/interests/{interest_id} | Update a Product Interest in an existing Bundle |
| [**updateProductInterestWithHttpInfo**](ProductInterestBundlesApi.md#updateProductInterestWithHttpInfo) | **PATCH** /rest/v2/productInterestBundles/{id}/interests/{interest_id} | Update a Product Interest in an existing Bundle |
| [**updateProductInterestBundle**](ProductInterestBundlesApi.md#updateProductInterestBundle) | **PATCH** /rest/v2/productInterestBundles/{id} | Update a Product Interest Bundle |
| [**updateProductInterestBundleWithHttpInfo**](ProductInterestBundlesApi.md#updateProductInterestBundleWithHttpInfo) | **PATCH** /rest/v2/productInterestBundles/{id} | Update a Product Interest Bundle |



## addProductInterest

> ProductInterest addProductInterest(id, addProductInterestRequest)

Create a Product Interest in an existing Bundle

Creates a new Product Interest in an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        AddProductInterestRequest addProductInterestRequest = new AddProductInterestRequest(); // AddProductInterestRequest | 
        try {
            ProductInterest result = apiInstance.addProductInterest(id, addProductInterestRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#addProductInterest");
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
| **id** | **String**|  | |
| **addProductInterestRequest** | [**AddProductInterestRequest**](AddProductInterestRequest.md)|  | |

### Return type

[**ProductInterest**](ProductInterest.md)


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

## addProductInterestWithHttpInfo

> ApiResponse<ProductInterest> addProductInterest addProductInterestWithHttpInfo(id, addProductInterestRequest)

Create a Product Interest in an existing Bundle

Creates a new Product Interest in an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        AddProductInterestRequest addProductInterestRequest = new AddProductInterestRequest(); // AddProductInterestRequest | 
        try {
            ApiResponse<ProductInterest> response = apiInstance.addProductInterestWithHttpInfo(id, addProductInterestRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#addProductInterest");
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
| **id** | **String**|  | |
| **addProductInterestRequest** | [**AddProductInterestRequest**](AddProductInterestRequest.md)|  | |

### Return type

ApiResponse<[**ProductInterest**](ProductInterest.md)>


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


## createProductInterestBundle

> ProductInterestBundle createProductInterestBundle(createProductInterestBundleRequest)

Create a Product Interest Bundle

Creates a new Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        CreateProductInterestBundleRequest createProductInterestBundleRequest = new CreateProductInterestBundleRequest(); // CreateProductInterestBundleRequest | 
        try {
            ProductInterestBundle result = apiInstance.createProductInterestBundle(createProductInterestBundleRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#createProductInterestBundle");
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
| **createProductInterestBundleRequest** | [**CreateProductInterestBundleRequest**](CreateProductInterestBundleRequest.md)|  | |

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)


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

## createProductInterestBundleWithHttpInfo

> ApiResponse<ProductInterestBundle> createProductInterestBundle createProductInterestBundleWithHttpInfo(createProductInterestBundleRequest)

Create a Product Interest Bundle

Creates a new Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        CreateProductInterestBundleRequest createProductInterestBundleRequest = new CreateProductInterestBundleRequest(); // CreateProductInterestBundleRequest | 
        try {
            ApiResponse<ProductInterestBundle> response = apiInstance.createProductInterestBundleWithHttpInfo(createProductInterestBundleRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#createProductInterestBundle");
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
| **createProductInterestBundleRequest** | [**CreateProductInterestBundleRequest**](CreateProductInterestBundleRequest.md)|  | |

### Return type

ApiResponse<[**ProductInterestBundle**](ProductInterestBundle.md)>


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


## deleteProductInterestBundle

> void deleteProductInterestBundle(id)

Delete a Product Interest Bundle

Deletes an existing Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        try {
            apiInstance.deleteProductInterestBundle(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#deleteProductInterestBundle");
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
| **id** | **String**|  | |

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

## deleteProductInterestBundleWithHttpInfo

> ApiResponse<Void> deleteProductInterestBundle deleteProductInterestBundleWithHttpInfo(id)

Delete a Product Interest Bundle

Deletes an existing Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteProductInterestBundleWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#deleteProductInterestBundle");
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
| **id** | **String**|  | |

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


## getProductInterestBundle

> ProductInterestBundle getProductInterestBundle(id)

Get a Product Interest Bundle

Gets a single Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        try {
            ProductInterestBundle result = apiInstance.getProductInterestBundle(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#getProductInterestBundle");
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
| **id** | **String**|  | |

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)


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

## getProductInterestBundleWithHttpInfo

> ApiResponse<ProductInterestBundle> getProductInterestBundle getProductInterestBundleWithHttpInfo(id)

Get a Product Interest Bundle

Gets a single Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        try {
            ApiResponse<ProductInterestBundle> response = apiInstance.getProductInterestBundleWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#getProductInterestBundle");
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
| **id** | **String**|  | |

### Return type

ApiResponse<[**ProductInterestBundle**](ProductInterestBundle.md)>


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


## listProductInterestBundles

> ListProductInterestBundleResponse listProductInterestBundles(filter, orderBy, pageSize, pageToken)

List Product Interest Bundles

Retrieves a list of Product Interest Bundles

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListProductInterestBundleResponse result = apiInstance.listProductInterestBundles(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#listProductInterestBundles");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListProductInterestBundleResponse**](ListProductInterestBundleResponse.md)


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

## listProductInterestBundlesWithHttpInfo

> ApiResponse<ListProductInterestBundleResponse> listProductInterestBundles listProductInterestBundlesWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Product Interest Bundles

Retrieves a list of Product Interest Bundles

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListProductInterestBundleResponse> response = apiInstance.listProductInterestBundlesWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#listProductInterestBundles");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListProductInterestBundleResponse**](ListProductInterestBundleResponse.md)>


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


## removeProductInterest

> void removeProductInterest(id, interestId)

Delete a Product Interest from an existing Bundle

Deletes an existing Product Interest from an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        String interestId = "interestId_example"; // String | 
        try {
            apiInstance.removeProductInterest(id, interestId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#removeProductInterest");
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
| **id** | **String**|  | |
| **interestId** | **String**|  | |

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

## removeProductInterestWithHttpInfo

> ApiResponse<Void> removeProductInterest removeProductInterestWithHttpInfo(id, interestId)

Delete a Product Interest from an existing Bundle

Deletes an existing Product Interest from an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        String interestId = "interestId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.removeProductInterestWithHttpInfo(id, interestId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#removeProductInterest");
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
| **id** | **String**|  | |
| **interestId** | **String**|  | |

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


## updateProductInterest

> ProductInterest updateProductInterest(id, interestId, updateProductInterestRequest, updateMask)

Update a Product Interest in an existing Bundle

Updates an existing Product Interest in an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        String interestId = "interestId_example"; // String | 
        UpdateProductInterestRequest updateProductInterestRequest = new UpdateProductInterestRequest(); // UpdateProductInterestRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ProductInterest result = apiInstance.updateProductInterest(id, interestId, updateProductInterestRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#updateProductInterest");
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
| **id** | **String**|  | |
| **interestId** | **String**|  | |
| **updateProductInterestRequest** | [**UpdateProductInterestRequest**](UpdateProductInterestRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**ProductInterest**](ProductInterest.md)


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

## updateProductInterestWithHttpInfo

> ApiResponse<ProductInterest> updateProductInterest updateProductInterestWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask)

Update a Product Interest in an existing Bundle

Updates an existing Product Interest in an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        String interestId = "interestId_example"; // String | 
        UpdateProductInterestRequest updateProductInterestRequest = new UpdateProductInterestRequest(); // UpdateProductInterestRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<ProductInterest> response = apiInstance.updateProductInterestWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#updateProductInterest");
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
| **id** | **String**|  | |
| **interestId** | **String**|  | |
| **updateProductInterestRequest** | [**UpdateProductInterestRequest**](UpdateProductInterestRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

ApiResponse<[**ProductInterest**](ProductInterest.md)>


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


## updateProductInterestBundle

> ProductInterestBundle updateProductInterestBundle(id, updateProductInterestBundleRequest, updateMask)

Update a Product Interest Bundle

Updates an existing Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        UpdateProductInterestBundleRequest updateProductInterestBundleRequest = new UpdateProductInterestBundleRequest(); // UpdateProductInterestBundleRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ProductInterestBundle result = apiInstance.updateProductInterestBundle(id, updateProductInterestBundleRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#updateProductInterestBundle");
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
| **id** | **String**|  | |
| **updateProductInterestBundleRequest** | [**UpdateProductInterestBundleRequest**](UpdateProductInterestBundleRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)


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

## updateProductInterestBundleWithHttpInfo

> ApiResponse<ProductInterestBundle> updateProductInterestBundle updateProductInterestBundleWithHttpInfo(id, updateProductInterestBundleRequest, updateMask)

Update a Product Interest Bundle

Updates an existing Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | 
        UpdateProductInterestBundleRequest updateProductInterestBundleRequest = new UpdateProductInterestBundleRequest(); // UpdateProductInterestBundleRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<ProductInterestBundle> response = apiInstance.updateProductInterestBundleWithHttpInfo(id, updateProductInterestBundleRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#updateProductInterestBundle");
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
| **id** | **String**|  | |
| **updateProductInterestBundleRequest** | [**UpdateProductInterestBundleRequest**](UpdateProductInterestBundleRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

ApiResponse<[**ProductInterestBundle**](ProductInterestBundle.md)>


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

