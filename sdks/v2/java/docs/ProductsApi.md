# ProductsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adjustInventory**](ProductsApi.md#adjustInventory) | **POST** /v2/products/{product_id}:adjustInventory | Adjust Inventory of a Product |
| [**adjustInventoryWithHttpInfo**](ProductsApi.md#adjustInventoryWithHttpInfo) | **POST** /v2/products/{product_id}:adjustInventory | Adjust Inventory of a Product |
| [**createProduct**](ProductsApi.md#createProduct) | **POST** /v2/products | Create a Product |
| [**createProductWithHttpInfo**](ProductsApi.md#createProductWithHttpInfo) | **POST** /v2/products | Create a Product |
| [**createProductImage**](ProductsApi.md#createProductImage) | **POST** /v2/products/{product_id}/images | Create the Product Image |
| [**createProductImageWithHttpInfo**](ProductsApi.md#createProductImageWithHttpInfo) | **POST** /v2/products/{product_id}/images | Create the Product Image |
| [**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /v2/products/{product_id} | Delete a Product |
| [**deleteProductWithHttpInfo**](ProductsApi.md#deleteProductWithHttpInfo) | **DELETE** /v2/products/{product_id} | Delete a Product |
| [**deleteProductImage**](ProductsApi.md#deleteProductImage) | **DELETE** /v2/products/{product_id}/images | Delete the Product Image |
| [**deleteProductImageWithHttpInfo**](ProductsApi.md#deleteProductImageWithHttpInfo) | **DELETE** /v2/products/{product_id}/images | Delete the Product Image |
| [**getProduct**](ProductsApi.md#getProduct) | **GET** /v2/products/{product_id} | Get a Product |
| [**getProductWithHttpInfo**](ProductsApi.md#getProductWithHttpInfo) | **GET** /v2/products/{product_id} | Get a Product |
| [**listProducts**](ProductsApi.md#listProducts) | **GET** /v2/products | List Products |
| [**listProductsWithHttpInfo**](ProductsApi.md#listProductsWithHttpInfo) | **GET** /v2/products | List Products |
| [**updateProduct**](ProductsApi.md#updateProduct) | **PATCH** /v2/products/{product_id} | Update a Product |
| [**updateProductWithHttpInfo**](ProductsApi.md#updateProductWithHttpInfo) | **PATCH** /v2/products/{product_id} | Update a Product |



## adjustInventory

> RestV2Product adjustInventory(productId, updateProductInventoryRequest)

Adjust Inventory of a Product

Increase or decrease the quantity of the Product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        UpdateProductInventoryRequest updateProductInventoryRequest = new UpdateProductInventoryRequest(); // UpdateProductInventoryRequest | updateProductInventoryRequest
        try {
            RestV2Product result = apiInstance.adjustInventory(productId, updateProductInventoryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#adjustInventory");
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
| **updateProductInventoryRequest** | [**UpdateProductInventoryRequest**](UpdateProductInventoryRequest.md)| updateProductInventoryRequest | |

### Return type

[**RestV2Product**](RestV2Product.md)


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
| **500** | Internal Server Error |  -  |

## adjustInventoryWithHttpInfo

> ApiResponse<RestV2Product> adjustInventory adjustInventoryWithHttpInfo(productId, updateProductInventoryRequest)

Adjust Inventory of a Product

Increase or decrease the quantity of the Product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        UpdateProductInventoryRequest updateProductInventoryRequest = new UpdateProductInventoryRequest(); // UpdateProductInventoryRequest | updateProductInventoryRequest
        try {
            ApiResponse<RestV2Product> response = apiInstance.adjustInventoryWithHttpInfo(productId, updateProductInventoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#adjustInventory");
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
| **updateProductInventoryRequest** | [**UpdateProductInventoryRequest**](UpdateProductInventoryRequest.md)| updateProductInventoryRequest | |

### Return type

ApiResponse<[**RestV2Product**](RestV2Product.md)>


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
| **500** | Internal Server Error |  -  |


## createProduct

> RestV2Product createProduct(createProductRequest)

Create a Product

Creates a new product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        CreateProductRequest createProductRequest = new CreateProductRequest(); // CreateProductRequest | createProductRequest
        try {
            RestV2Product result = apiInstance.createProduct(createProductRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#createProduct");
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
| **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md)| createProductRequest | |

### Return type

[**RestV2Product**](RestV2Product.md)


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

## createProductWithHttpInfo

> ApiResponse<RestV2Product> createProduct createProductWithHttpInfo(createProductRequest)

Create a Product

Creates a new product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        CreateProductRequest createProductRequest = new CreateProductRequest(); // CreateProductRequest | createProductRequest
        try {
            ApiResponse<RestV2Product> response = apiInstance.createProductWithHttpInfo(createProductRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#createProduct");
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
| **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md)| createProductRequest | |

### Return type

ApiResponse<[**RestV2Product**](RestV2Product.md)>


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


## createProductImage

> void createProductImage(productId, _file)

Create the Product Image

Creates the Product Image file and uploads it to the specified Product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        File _file = new File("/path/to/file"); // File | File to upload
        try {
            apiInstance.createProductImage(productId, _file);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#createProductImage");
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
| **_file** | **File**| File to upload | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## createProductImageWithHttpInfo

> ApiResponse<Void> createProductImage createProductImageWithHttpInfo(productId, _file)

Create the Product Image

Creates the Product Image file and uploads it to the specified Product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        File _file = new File("/path/to/file"); // File | File to upload
        try {
            ApiResponse<Void> response = apiInstance.createProductImageWithHttpInfo(productId, _file);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#createProductImage");
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
| **_file** | **File**| File to upload | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |


## deleteProduct

> void deleteProduct(productId)

Delete a Product

Deletes a single product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        try {
            apiInstance.deleteProduct(productId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#deleteProduct");
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

## deleteProductWithHttpInfo

> ApiResponse<Void> deleteProduct deleteProductWithHttpInfo(productId)

Delete a Product

Deletes a single product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        try {
            ApiResponse<Void> response = apiInstance.deleteProductWithHttpInfo(productId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#deleteProduct");
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


## deleteProductImage

> void deleteProductImage(productId)

Delete the Product Image

Deletes the Product Image from the specified Product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        try {
            apiInstance.deleteProductImage(productId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#deleteProductImage");
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

## deleteProductImageWithHttpInfo

> ApiResponse<Void> deleteProductImage deleteProductImageWithHttpInfo(productId)

Delete the Product Image

Deletes the Product Image from the specified Product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        try {
            ApiResponse<Void> response = apiInstance.deleteProductImageWithHttpInfo(productId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#deleteProductImage");
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


## getProduct

> RestV2Product getProduct(productId)

Get a Product

Gets a single Product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        try {
            RestV2Product result = apiInstance.getProduct(productId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#getProduct");
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

### Return type

[**RestV2Product**](RestV2Product.md)


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

## getProductWithHttpInfo

> ApiResponse<RestV2Product> getProduct getProductWithHttpInfo(productId)

Get a Product

Gets a single Product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        try {
            ApiResponse<RestV2Product> response = apiInstance.getProductWithHttpInfo(productId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#getProduct");
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

### Return type

ApiResponse<[**RestV2Product**](RestV2Product.md)>


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


## listProducts

> ListProductsResponse listProducts(filter, orderBy, pageSize, pageToken)

List Products

Retrieves a list of Products

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListProductsResponse result = apiInstance.listProducts(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#listProducts");
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
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListProductsResponse**](ListProductsResponse.md)


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

## listProductsWithHttpInfo

> ApiResponse<ListProductsResponse> listProducts listProductsWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Products

Retrieves a list of Products

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListProductsResponse> response = apiInstance.listProductsWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#listProducts");
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
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListProductsResponse**](ListProductsResponse.md)>


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


## updateProduct

> RestV2Product updateProduct(productId, updateProductRequest, updateMask)

Update a Product

Updates a product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        UpdateProductRequest updateProductRequest = new UpdateProductRequest(); // UpdateProductRequest | updateProductRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            RestV2Product result = apiInstance.updateProduct(productId, updateProductRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#updateProduct");
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
| **updateProductRequest** | [**UpdateProductRequest**](UpdateProductRequest.md)| updateProductRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: active, name, description, price, sku, shippable, short_description, subscription_only, storefront_hidden, weight, taxable, country_taxable, city_taxable, state_taxable, inventory_limit, out_of_stock_enabled, email_for_inventory_notifications] |

### Return type

[**RestV2Product**](RestV2Product.md)


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

## updateProductWithHttpInfo

> ApiResponse<RestV2Product> updateProduct updateProductWithHttpInfo(productId, updateProductRequest, updateMask)

Update a Product

Updates a product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductsApi apiInstance = new ProductsApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        UpdateProductRequest updateProductRequest = new UpdateProductRequest(); // UpdateProductRequest | updateProductRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<RestV2Product> response = apiInstance.updateProductWithHttpInfo(productId, updateProductRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductsApi#updateProduct");
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
| **updateProductRequest** | [**UpdateProductRequest**](UpdateProductRequest.md)| updateProductRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: active, name, description, price, sku, shippable, short_description, subscription_only, storefront_hidden, weight, taxable, country_taxable, city_taxable, state_taxable, inventory_limit, out_of_stock_enabled, email_for_inventory_notifications] |

### Return type

ApiResponse<[**RestV2Product**](RestV2Product.md)>


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

