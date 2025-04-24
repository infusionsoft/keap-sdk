# ProductInterestBundlesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addProductInterestUsingPOST**](ProductInterestBundlesApi.md#addProductInterestUsingPOST) | **POST** /v2/productInterestBundles/{id}/interests | Create a Product Interest in an existing Bundle |
| [**addProductInterestUsingPOSTWithHttpInfo**](ProductInterestBundlesApi.md#addProductInterestUsingPOSTWithHttpInfo) | **POST** /v2/productInterestBundles/{id}/interests | Create a Product Interest in an existing Bundle |
| [**createProductInterestBundleUsingPOST**](ProductInterestBundlesApi.md#createProductInterestBundleUsingPOST) | **POST** /v2/productInterestBundles | Create a Product Interest Bundle |
| [**createProductInterestBundleUsingPOSTWithHttpInfo**](ProductInterestBundlesApi.md#createProductInterestBundleUsingPOSTWithHttpInfo) | **POST** /v2/productInterestBundles | Create a Product Interest Bundle |
| [**deleteProductInterestBundleUsingDELETE**](ProductInterestBundlesApi.md#deleteProductInterestBundleUsingDELETE) | **DELETE** /v2/productInterestBundles/{id} | Delete a Product Interest Bundle |
| [**deleteProductInterestBundleUsingDELETEWithHttpInfo**](ProductInterestBundlesApi.md#deleteProductInterestBundleUsingDELETEWithHttpInfo) | **DELETE** /v2/productInterestBundles/{id} | Delete a Product Interest Bundle |
| [**getProductInterestBundleUsingGET**](ProductInterestBundlesApi.md#getProductInterestBundleUsingGET) | **GET** /v2/productInterestBundles/{id} | Get a Product Interest Bundle |
| [**getProductInterestBundleUsingGETWithHttpInfo**](ProductInterestBundlesApi.md#getProductInterestBundleUsingGETWithHttpInfo) | **GET** /v2/productInterestBundles/{id} | Get a Product Interest Bundle |
| [**listProductInterestBundlesUsingGET**](ProductInterestBundlesApi.md#listProductInterestBundlesUsingGET) | **GET** /v2/productInterestBundles | List Product Interest Bundles |
| [**listProductInterestBundlesUsingGETWithHttpInfo**](ProductInterestBundlesApi.md#listProductInterestBundlesUsingGETWithHttpInfo) | **GET** /v2/productInterestBundles | List Product Interest Bundles |
| [**removeProductInterestUsingDELETE**](ProductInterestBundlesApi.md#removeProductInterestUsingDELETE) | **DELETE** /v2/productInterestBundles/{id}/interests/{interest_id} | Delete a Product Interest from an existing Bundle |
| [**removeProductInterestUsingDELETEWithHttpInfo**](ProductInterestBundlesApi.md#removeProductInterestUsingDELETEWithHttpInfo) | **DELETE** /v2/productInterestBundles/{id}/interests/{interest_id} | Delete a Product Interest from an existing Bundle |
| [**updateProductInterestBundleUsingPATCH**](ProductInterestBundlesApi.md#updateProductInterestBundleUsingPATCH) | **PATCH** /v2/productInterestBundles/{id} | Update a Product Interest Bundle |
| [**updateProductInterestBundleUsingPATCHWithHttpInfo**](ProductInterestBundlesApi.md#updateProductInterestBundleUsingPATCHWithHttpInfo) | **PATCH** /v2/productInterestBundles/{id} | Update a Product Interest Bundle |
| [**updateProductInterestUsingPATCH**](ProductInterestBundlesApi.md#updateProductInterestUsingPATCH) | **PATCH** /v2/productInterestBundles/{id}/interests/{interest_id} | Update a Product Interest in an existing Bundle |
| [**updateProductInterestUsingPATCHWithHttpInfo**](ProductInterestBundlesApi.md#updateProductInterestUsingPATCHWithHttpInfo) | **PATCH** /v2/productInterestBundles/{id}/interests/{interest_id} | Update a Product Interest in an existing Bundle |



## addProductInterestUsingPOST

> ProductInterest addProductInterestUsingPOST(id, addProductInterestRequest)

Create a Product Interest in an existing Bundle

Creates a new Product Interest in an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        AddProductInterestRequest addProductInterestRequest = new AddProductInterestRequest(); // AddProductInterestRequest | request
        try {
            ProductInterest result = apiInstance.addProductInterestUsingPOST(id, addProductInterestRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#addProductInterestUsingPOST");
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
| **addProductInterestRequest** | [**AddProductInterestRequest**](AddProductInterestRequest.md)| request | |

### Return type

[**ProductInterest**](ProductInterest.md)


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

## addProductInterestUsingPOSTWithHttpInfo

> ApiResponse<ProductInterest> addProductInterestUsingPOST addProductInterestUsingPOSTWithHttpInfo(id, addProductInterestRequest)

Create a Product Interest in an existing Bundle

Creates a new Product Interest in an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        AddProductInterestRequest addProductInterestRequest = new AddProductInterestRequest(); // AddProductInterestRequest | request
        try {
            ApiResponse<ProductInterest> response = apiInstance.addProductInterestUsingPOSTWithHttpInfo(id, addProductInterestRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#addProductInterestUsingPOST");
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
| **addProductInterestRequest** | [**AddProductInterestRequest**](AddProductInterestRequest.md)| request | |

### Return type

ApiResponse<[**ProductInterest**](ProductInterest.md)>


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


## createProductInterestBundleUsingPOST

> ProductInterestBundle createProductInterestBundleUsingPOST(createProductInterestBundleRequest)

Create a Product Interest Bundle

Creates a new Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        CreateProductInterestBundleRequest createProductInterestBundleRequest = new CreateProductInterestBundleRequest(); // CreateProductInterestBundleRequest | createProductInterestBundleRequest
        try {
            ProductInterestBundle result = apiInstance.createProductInterestBundleUsingPOST(createProductInterestBundleRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#createProductInterestBundleUsingPOST");
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
| **createProductInterestBundleRequest** | [**CreateProductInterestBundleRequest**](CreateProductInterestBundleRequest.md)| createProductInterestBundleRequest | |

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)


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

## createProductInterestBundleUsingPOSTWithHttpInfo

> ApiResponse<ProductInterestBundle> createProductInterestBundleUsingPOST createProductInterestBundleUsingPOSTWithHttpInfo(createProductInterestBundleRequest)

Create a Product Interest Bundle

Creates a new Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        CreateProductInterestBundleRequest createProductInterestBundleRequest = new CreateProductInterestBundleRequest(); // CreateProductInterestBundleRequest | createProductInterestBundleRequest
        try {
            ApiResponse<ProductInterestBundle> response = apiInstance.createProductInterestBundleUsingPOSTWithHttpInfo(createProductInterestBundleRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#createProductInterestBundleUsingPOST");
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
| **createProductInterestBundleRequest** | [**CreateProductInterestBundleRequest**](CreateProductInterestBundleRequest.md)| createProductInterestBundleRequest | |

### Return type

ApiResponse<[**ProductInterestBundle**](ProductInterestBundle.md)>


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


## deleteProductInterestBundleUsingDELETE

> void deleteProductInterestBundleUsingDELETE(id)

Delete a Product Interest Bundle

Deletes an existing Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            apiInstance.deleteProductInterestBundleUsingDELETE(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#deleteProductInterestBundleUsingDELETE");
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

## deleteProductInterestBundleUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteProductInterestBundleUsingDELETE deleteProductInterestBundleUsingDELETEWithHttpInfo(id)

Delete a Product Interest Bundle

Deletes an existing Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<Void> response = apiInstance.deleteProductInterestBundleUsingDELETEWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#deleteProductInterestBundleUsingDELETE");
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


## getProductInterestBundleUsingGET

> ProductInterestBundle getProductInterestBundleUsingGET(id)

Get a Product Interest Bundle

Gets a single Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ProductInterestBundle result = apiInstance.getProductInterestBundleUsingGET(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#getProductInterestBundleUsingGET");
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

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)


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

## getProductInterestBundleUsingGETWithHttpInfo

> ApiResponse<ProductInterestBundle> getProductInterestBundleUsingGET getProductInterestBundleUsingGETWithHttpInfo(id)

Get a Product Interest Bundle

Gets a single Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<ProductInterestBundle> response = apiInstance.getProductInterestBundleUsingGETWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#getProductInterestBundleUsingGET");
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

### Return type

ApiResponse<[**ProductInterestBundle**](ProductInterestBundle.md)>


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


## listProductInterestBundlesUsingGET

> ListProductInterestBundleResponse listProductInterestBundlesUsingGET(filter, orderBy, pageSize, pageToken)

List Product Interest Bundles

Retrieves a list of Product Interest Bundles

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListProductInterestBundleResponse result = apiInstance.listProductInterestBundlesUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#listProductInterestBundlesUsingGET");
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

## listProductInterestBundlesUsingGETWithHttpInfo

> ApiResponse<ListProductInterestBundleResponse> listProductInterestBundlesUsingGET listProductInterestBundlesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Product Interest Bundles

Retrieves a list of Product Interest Bundles

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListProductInterestBundleResponse> response = apiInstance.listProductInterestBundlesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#listProductInterestBundlesUsingGET");
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


## removeProductInterestUsingDELETE

> void removeProductInterestUsingDELETE(id, interestId)

Delete a Product Interest from an existing Bundle

Deletes an existing Product Interest from an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        String interestId = "interestId_example"; // String | interest_id
        try {
            apiInstance.removeProductInterestUsingDELETE(id, interestId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#removeProductInterestUsingDELETE");
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
| **interestId** | **String**| interest_id | |

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

## removeProductInterestUsingDELETEWithHttpInfo

> ApiResponse<Void> removeProductInterestUsingDELETE removeProductInterestUsingDELETEWithHttpInfo(id, interestId)

Delete a Product Interest from an existing Bundle

Deletes an existing Product Interest from an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        String interestId = "interestId_example"; // String | interest_id
        try {
            ApiResponse<Void> response = apiInstance.removeProductInterestUsingDELETEWithHttpInfo(id, interestId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#removeProductInterestUsingDELETE");
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
| **interestId** | **String**| interest_id | |

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


## updateProductInterestBundleUsingPATCH

> ProductInterestBundle updateProductInterestBundleUsingPATCH(id, updateProductInterestBundleRequest, updateMask)

Update a Product Interest Bundle

Updates an existing Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        UpdateProductInterestBundleRequest updateProductInterestBundleRequest = new UpdateProductInterestBundleRequest(); // UpdateProductInterestBundleRequest | updateProductInterestBundleRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ProductInterestBundle result = apiInstance.updateProductInterestBundleUsingPATCH(id, updateProductInterestBundleRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#updateProductInterestBundleUsingPATCH");
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
| **updateProductInterestBundleRequest** | [**UpdateProductInterestBundleRequest**](UpdateProductInterestBundleRequest.md)| updateProductInterestBundleRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description] |

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)


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

## updateProductInterestBundleUsingPATCHWithHttpInfo

> ApiResponse<ProductInterestBundle> updateProductInterestBundleUsingPATCH updateProductInterestBundleUsingPATCHWithHttpInfo(id, updateProductInterestBundleRequest, updateMask)

Update a Product Interest Bundle

Updates an existing Product Interest Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        UpdateProductInterestBundleRequest updateProductInterestBundleRequest = new UpdateProductInterestBundleRequest(); // UpdateProductInterestBundleRequest | updateProductInterestBundleRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<ProductInterestBundle> response = apiInstance.updateProductInterestBundleUsingPATCHWithHttpInfo(id, updateProductInterestBundleRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#updateProductInterestBundleUsingPATCH");
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
| **updateProductInterestBundleRequest** | [**UpdateProductInterestBundleRequest**](UpdateProductInterestBundleRequest.md)| updateProductInterestBundleRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description] |

### Return type

ApiResponse<[**ProductInterestBundle**](ProductInterestBundle.md)>


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


## updateProductInterestUsingPATCH

> ProductInterest updateProductInterestUsingPATCH(id, interestId, updateProductInterestRequest, updateMask)

Update a Product Interest in an existing Bundle

Updates an existing Product Interest in an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        String interestId = "interestId_example"; // String | interest_id
        UpdateProductInterestRequest updateProductInterestRequest = new UpdateProductInterestRequest(); // UpdateProductInterestRequest | updateProductInterestRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ProductInterest result = apiInstance.updateProductInterestUsingPATCH(id, interestId, updateProductInterestRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#updateProductInterestUsingPATCH");
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
| **interestId** | **String**| interest_id | |
| **updateProductInterestRequest** | [**UpdateProductInterestRequest**](UpdateProductInterestRequest.md)| updateProductInterestRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: quantity, price, discount_percent] |

### Return type

[**ProductInterest**](ProductInterest.md)


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

## updateProductInterestUsingPATCHWithHttpInfo

> ApiResponse<ProductInterest> updateProductInterestUsingPATCH updateProductInterestUsingPATCHWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask)

Update a Product Interest in an existing Bundle

Updates an existing Product Interest in an existing Bundle.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductInterestBundlesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductInterestBundlesApi apiInstance = new ProductInterestBundlesApi(defaultClient);
        String id = "id_example"; // String | id
        String interestId = "interestId_example"; // String | interest_id
        UpdateProductInterestRequest updateProductInterestRequest = new UpdateProductInterestRequest(); // UpdateProductInterestRequest | updateProductInterestRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<ProductInterest> response = apiInstance.updateProductInterestUsingPATCHWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductInterestBundlesApi#updateProductInterestUsingPATCH");
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
| **interestId** | **String**| interest_id | |
| **updateProductInterestRequest** | [**UpdateProductInterestRequest**](UpdateProductInterestRequest.md)| updateProductInterestRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: quantity, price, discount_percent] |

### Return type

ApiResponse<[**ProductInterest**](ProductInterest.md)>


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

