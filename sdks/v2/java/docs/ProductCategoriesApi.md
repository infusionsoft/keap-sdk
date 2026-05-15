# ProductCategoriesApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assignProductsToCategory**](ProductCategoriesApi.md#assignProductsToCategory) | **POST** /rest/v2/productCategories/{category_id}:assignProducts | Assign Products to a Product Category |
| [**assignProductsToCategoryWithHttpInfo**](ProductCategoriesApi.md#assignProductsToCategoryWithHttpInfo) | **POST** /rest/v2/productCategories/{category_id}:assignProducts | Assign Products to a Product Category |
| [**createImageFile**](ProductCategoriesApi.md#createImageFile) | **POST** /rest/v2/productCategories/{category_id}/images | Create the product category image file |
| [**createImageFileWithHttpInfo**](ProductCategoriesApi.md#createImageFileWithHttpInfo) | **POST** /rest/v2/productCategories/{category_id}/images | Create the product category image file |
| [**createProductCategory**](ProductCategoriesApi.md#createProductCategory) | **POST** /rest/v2/productCategories | Create a Product Category |
| [**createProductCategoryWithHttpInfo**](ProductCategoriesApi.md#createProductCategoryWithHttpInfo) | **POST** /rest/v2/productCategories | Create a Product Category |
| [**deleteImageFile**](ProductCategoriesApi.md#deleteImageFile) | **DELETE** /rest/v2/productCategories/{category_id}/images | Delete the image from a product category |
| [**deleteImageFileWithHttpInfo**](ProductCategoriesApi.md#deleteImageFileWithHttpInfo) | **DELETE** /rest/v2/productCategories/{category_id}/images | Delete the image from a product category |
| [**deleteProductCategory**](ProductCategoriesApi.md#deleteProductCategory) | **DELETE** /rest/v2/productCategories/{category_id} | Delete a Product Category |
| [**deleteProductCategoryWithHttpInfo**](ProductCategoriesApi.md#deleteProductCategoryWithHttpInfo) | **DELETE** /rest/v2/productCategories/{category_id} | Delete a Product Category |
| [**getProductCategory**](ProductCategoriesApi.md#getProductCategory) | **GET** /rest/v2/productCategories/{category_id} | Get a Product Category |
| [**getProductCategoryWithHttpInfo**](ProductCategoriesApi.md#getProductCategoryWithHttpInfo) | **GET** /rest/v2/productCategories/{category_id} | Get a Product Category |
| [**listProductCategories**](ProductCategoriesApi.md#listProductCategories) | **GET** /rest/v2/productCategories | List all Product Categories |
| [**listProductCategoriesWithHttpInfo**](ProductCategoriesApi.md#listProductCategoriesWithHttpInfo) | **GET** /rest/v2/productCategories | List all Product Categories |
| [**updateProductCategory**](ProductCategoriesApi.md#updateProductCategory) | **PATCH** /rest/v2/productCategories/{category_id} | Update a Product Category |
| [**updateProductCategoryWithHttpInfo**](ProductCategoriesApi.md#updateProductCategoryWithHttpInfo) | **PATCH** /rest/v2/productCategories/{category_id} | Update a Product Category |



## assignProductsToCategory

> void assignProductsToCategory(categoryId, assignProductsRequest)

Assign Products to a Product Category

Updates the list of products assigned to a Product Category. **Note:** The full list of product IDs that should remain assigned must be provided; any IDs omitted are removed automatically.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        AssignProductsRequest assignProductsRequest = new AssignProductsRequest(); // AssignProductsRequest | 
        try {
            apiInstance.assignProductsToCategory(categoryId, assignProductsRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#assignProductsToCategory");
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
| **categoryId** | **String**|  | |
| **assignProductsRequest** | [**AssignProductsRequest**](AssignProductsRequest.md)|  | |

### Return type


null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## assignProductsToCategoryWithHttpInfo

> ApiResponse<Void> assignProductsToCategory assignProductsToCategoryWithHttpInfo(categoryId, assignProductsRequest)

Assign Products to a Product Category

Updates the list of products assigned to a Product Category. **Note:** The full list of product IDs that should remain assigned must be provided; any IDs omitted are removed automatically.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        AssignProductsRequest assignProductsRequest = new AssignProductsRequest(); // AssignProductsRequest | 
        try {
            ApiResponse<Void> response = apiInstance.assignProductsToCategoryWithHttpInfo(categoryId, assignProductsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#assignProductsToCategory");
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
| **categoryId** | **String**|  | |
| **assignProductsRequest** | [**AssignProductsRequest**](AssignProductsRequest.md)|  | |

### Return type


ApiResponse<Void>

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## createImageFile

> void createImageFile(categoryId, _file)

Create the product category image file

Creates the product category image file and uploads it to the specified product category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        File _file = new File("/path/to/file"); // File | File to upload
        try {
            apiInstance.createImageFile(categoryId, _file);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#createImageFile");
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
| **categoryId** | **String**|  | |
| **_file** | **File**| File to upload | |

### Return type


null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createImageFileWithHttpInfo

> ApiResponse<Void> createImageFile createImageFileWithHttpInfo(categoryId, _file)

Create the product category image file

Creates the product category image file and uploads it to the specified product category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        File _file = new File("/path/to/file"); // File | File to upload
        try {
            ApiResponse<Void> response = apiInstance.createImageFileWithHttpInfo(categoryId, _file);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#createImageFile");
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
| **categoryId** | **String**|  | |
| **_file** | **File**| File to upload | |

### Return type


ApiResponse<Void>

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## createProductCategory

> ProductCategory createProductCategory(createProductCategoryRequest)

Create a Product Category

Creates a new Product Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        CreateProductCategoryRequest createProductCategoryRequest = new CreateProductCategoryRequest(); // CreateProductCategoryRequest | 
        try {
            ProductCategory result = apiInstance.createProductCategory(createProductCategoryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#createProductCategory");
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
| **createProductCategoryRequest** | [**CreateProductCategoryRequest**](CreateProductCategoryRequest.md)|  | |

### Return type

[**ProductCategory**](ProductCategory.md)


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createProductCategoryWithHttpInfo

> ApiResponse<ProductCategory> createProductCategory createProductCategoryWithHttpInfo(createProductCategoryRequest)

Create a Product Category

Creates a new Product Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        CreateProductCategoryRequest createProductCategoryRequest = new CreateProductCategoryRequest(); // CreateProductCategoryRequest | 
        try {
            ApiResponse<ProductCategory> response = apiInstance.createProductCategoryWithHttpInfo(createProductCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#createProductCategory");
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
| **createProductCategoryRequest** | [**CreateProductCategoryRequest**](CreateProductCategoryRequest.md)|  | |

### Return type

ApiResponse<[**ProductCategory**](ProductCategory.md)>


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteImageFile

> void deleteImageFile(categoryId)

Delete the image from a product category

Deletes the image from the specified product category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        try {
            apiInstance.deleteImageFile(categoryId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#deleteImageFile");
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
| **categoryId** | **String**|  | |

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteImageFileWithHttpInfo

> ApiResponse<Void> deleteImageFile deleteImageFileWithHttpInfo(categoryId)

Delete the image from a product category

Deletes the image from the specified product category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteImageFileWithHttpInfo(categoryId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#deleteImageFile");
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
| **categoryId** | **String**|  | |

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteProductCategory

> void deleteProductCategory(categoryId)

Delete a Product Category

Deletes the specified Product Category, its sub-categories, and removes products from it

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        try {
            apiInstance.deleteProductCategory(categoryId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#deleteProductCategory");
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
| **categoryId** | **String**|  | |

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteProductCategoryWithHttpInfo

> ApiResponse<Void> deleteProductCategory deleteProductCategoryWithHttpInfo(categoryId)

Delete a Product Category

Deletes the specified Product Category, its sub-categories, and removes products from it

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteProductCategoryWithHttpInfo(categoryId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#deleteProductCategory");
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
| **categoryId** | **String**|  | |

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getProductCategory

> ProductCategory getProductCategory(categoryId)

Get a Product Category

Gets a single Product Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        try {
            ProductCategory result = apiInstance.getProductCategory(categoryId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#getProductCategory");
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
| **categoryId** | **String**|  | |

### Return type

[**ProductCategory**](ProductCategory.md)


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getProductCategoryWithHttpInfo

> ApiResponse<ProductCategory> getProductCategory getProductCategoryWithHttpInfo(categoryId)

Get a Product Category

Gets a single Product Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        try {
            ApiResponse<ProductCategory> response = apiInstance.getProductCategoryWithHttpInfo(categoryId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#getProductCategory");
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
| **categoryId** | **String**|  | |

### Return type

ApiResponse<[**ProductCategory**](ProductCategory.md)>


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listProductCategories

> ListProductCategoriesResponse listProductCategories(filter, orderBy, pageSize, pageToken)

List all Product Categories

Retrieves a list of Product Categories

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `product_id` - (String) `name` - Wildcard matching allowed - (Number) `product_category_id` - supports comparison operators: `==`,`!=`, `>`, `<`, `>=`, `<=`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`.  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo`  For the filters listed above, here are some examples: - `filter=product_id%3D%3D29` - `filter=name%3D%3DTestSearch` - `filter=name%3D%3DElec*` (starts with \"Elec\") - `filter=product_category_id>5` (category ID greater than 5) - `filter=product_category_id>=10` (category ID greater than or equal to 10) - `filter=product_category_id%3D%3D42` (category ID equals 42) - `filter=name%3D%3DElec*%3Bproduct_category_id>5` (multiple filters combined) 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListProductCategoriesResponse result = apiInstance.listProductCategories(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#listProductCategories");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;name&#x60; - Wildcard matching allowed - (Number) &#x60;product_category_id&#x60; - supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;,&#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;.  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60; - &#x60;filter&#x3D;name%3D%3DTestSearch&#x60; - &#x60;filter&#x3D;name%3D%3DElec*&#x60; (starts with \&quot;Elec\&quot;) - &#x60;filter&#x3D;product_category_id&gt;5&#x60; (category ID greater than 5) - &#x60;filter&#x3D;product_category_id&gt;&#x3D;10&#x60; (category ID greater than or equal to 10) - &#x60;filter&#x3D;product_category_id%3D%3D42&#x60; (category ID equals 42) - &#x60;filter&#x3D;name%3D%3DElec*%3Bproduct_category_id&gt;5&#x60; (multiple filters combined)  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListProductCategoriesResponse**](ListProductCategoriesResponse.md)


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listProductCategoriesWithHttpInfo

> ApiResponse<ListProductCategoriesResponse> listProductCategories listProductCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken)

List all Product Categories

Retrieves a list of Product Categories

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `product_id` - (String) `name` - Wildcard matching allowed - (Number) `product_category_id` - supports comparison operators: `==`,`!=`, `>`, `<`, `>=`, `<=`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`.  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo`  For the filters listed above, here are some examples: - `filter=product_id%3D%3D29` - `filter=name%3D%3DTestSearch` - `filter=name%3D%3DElec*` (starts with \"Elec\") - `filter=product_category_id>5` (category ID greater than 5) - `filter=product_category_id>=10` (category ID greater than or equal to 10) - `filter=product_category_id%3D%3D42` (category ID equals 42) - `filter=name%3D%3DElec*%3Bproduct_category_id>5` (multiple filters combined) 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListProductCategoriesResponse> response = apiInstance.listProductCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#listProductCategories");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;name&#x60; - Wildcard matching allowed - (Number) &#x60;product_category_id&#x60; - supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;,&#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;.  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60; - &#x60;filter&#x3D;name%3D%3DTestSearch&#x60; - &#x60;filter&#x3D;name%3D%3DElec*&#x60; (starts with \&quot;Elec\&quot;) - &#x60;filter&#x3D;product_category_id&gt;5&#x60; (category ID greater than 5) - &#x60;filter&#x3D;product_category_id&gt;&#x3D;10&#x60; (category ID greater than or equal to 10) - &#x60;filter&#x3D;product_category_id%3D%3D42&#x60; (category ID equals 42) - &#x60;filter&#x3D;name%3D%3DElec*%3Bproduct_category_id&gt;5&#x60; (multiple filters combined)  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListProductCategoriesResponse**](ListProductCategoriesResponse.md)>


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateProductCategory

> ProductCategory updateProductCategory(categoryId, updateProductCategoryRequest, updateMask)

Update a Product Category

Updates a single Product Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        UpdateProductCategoryRequest updateProductCategoryRequest = new UpdateProductCategoryRequest(); // UpdateProductCategoryRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ProductCategory result = apiInstance.updateProductCategory(categoryId, updateProductCategoryRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#updateProductCategory");
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
| **categoryId** | **String**|  | |
| **updateProductCategoryRequest** | [**UpdateProductCategoryRequest**](UpdateProductCategoryRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**ProductCategory**](ProductCategory.md)


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateProductCategoryWithHttpInfo

> ApiResponse<ProductCategory> updateProductCategory updateProductCategoryWithHttpInfo(categoryId, updateProductCategoryRequest, updateMask)

Update a Product Category

Updates a single Product Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | 
        UpdateProductCategoryRequest updateProductCategoryRequest = new UpdateProductCategoryRequest(); // UpdateProductCategoryRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<ProductCategory> response = apiInstance.updateProductCategoryWithHttpInfo(categoryId, updateProductCategoryRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductCategoriesApi#updateProductCategory");
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
| **categoryId** | **String**|  | |
| **updateProductCategoryRequest** | [**UpdateProductCategoryRequest**](UpdateProductCategoryRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

ApiResponse<[**ProductCategory**](ProductCategory.md)>


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

