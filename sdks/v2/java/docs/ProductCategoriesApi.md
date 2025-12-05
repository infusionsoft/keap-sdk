# ProductCategoriesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assignProductsToCategory**](ProductCategoriesApi.md#assignProductsToCategory) | **POST** /v2/productCategories/{category_id}:assignProducts | Assign Products to a Product Category |
| [**assignProductsToCategoryWithHttpInfo**](ProductCategoriesApi.md#assignProductsToCategoryWithHttpInfo) | **POST** /v2/productCategories/{category_id}:assignProducts | Assign Products to a Product Category |
| [**createImageFile**](ProductCategoriesApi.md#createImageFile) | **POST** /v2/productCategories/{category_id}/images | Create the product category image file |
| [**createImageFileWithHttpInfo**](ProductCategoriesApi.md#createImageFileWithHttpInfo) | **POST** /v2/productCategories/{category_id}/images | Create the product category image file |
| [**createProductCategory**](ProductCategoriesApi.md#createProductCategory) | **POST** /v2/productCategories | Create a Product Category |
| [**createProductCategoryWithHttpInfo**](ProductCategoriesApi.md#createProductCategoryWithHttpInfo) | **POST** /v2/productCategories | Create a Product Category |
| [**deleteImageFile**](ProductCategoriesApi.md#deleteImageFile) | **DELETE** /v2/productCategories/{category_id}/images | Delete the image from a product category |
| [**deleteImageFileWithHttpInfo**](ProductCategoriesApi.md#deleteImageFileWithHttpInfo) | **DELETE** /v2/productCategories/{category_id}/images | Delete the image from a product category |
| [**deleteProductCategory**](ProductCategoriesApi.md#deleteProductCategory) | **DELETE** /v2/productCategories/{category_id} | Delete a Product Category |
| [**deleteProductCategoryWithHttpInfo**](ProductCategoriesApi.md#deleteProductCategoryWithHttpInfo) | **DELETE** /v2/productCategories/{category_id} | Delete a Product Category |
| [**getProductCategory**](ProductCategoriesApi.md#getProductCategory) | **GET** /v2/productCategories/{category_id} | Get a Product Category |
| [**getProductCategoryWithHttpInfo**](ProductCategoriesApi.md#getProductCategoryWithHttpInfo) | **GET** /v2/productCategories/{category_id} | Get a Product Category |
| [**listProductCategories**](ProductCategoriesApi.md#listProductCategories) | **GET** /v2/productCategories | List all Product Categories |
| [**listProductCategoriesWithHttpInfo**](ProductCategoriesApi.md#listProductCategoriesWithHttpInfo) | **GET** /v2/productCategories | List all Product Categories |
| [**updateProductCategory**](ProductCategoriesApi.md#updateProductCategory) | **PATCH** /v2/productCategories/{category_id} | Update a Product Category |
| [**updateProductCategoryWithHttpInfo**](ProductCategoriesApi.md#updateProductCategoryWithHttpInfo) | **PATCH** /v2/productCategories/{category_id} | Update a Product Category |



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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
        AssignProductsRequest assignProductsRequest = new AssignProductsRequest(); // AssignProductsRequest | request
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
| **categoryId** | **String**| category_id | |
| **assignProductsRequest** | [**AssignProductsRequest**](AssignProductsRequest.md)| request | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
        AssignProductsRequest assignProductsRequest = new AssignProductsRequest(); // AssignProductsRequest | request
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
| **categoryId** | **String**| category_id | |
| **assignProductsRequest** | [**AssignProductsRequest**](AssignProductsRequest.md)| request | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |


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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
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
| **categoryId** | **String**| category_id | |
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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
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
| **categoryId** | **String**| category_id | |
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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        CreateProductCategoryRequest createProductCategoryRequest = new CreateProductCategoryRequest(); // CreateProductCategoryRequest | productCategory
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
| **createProductCategoryRequest** | [**CreateProductCategoryRequest**](CreateProductCategoryRequest.md)| productCategory | [optional] |

### Return type

[**ProductCategory**](ProductCategory.md)


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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        CreateProductCategoryRequest createProductCategoryRequest = new CreateProductCategoryRequest(); // CreateProductCategoryRequest | productCategory
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
| **createProductCategoryRequest** | [**CreateProductCategoryRequest**](CreateProductCategoryRequest.md)| productCategory | [optional] |

### Return type

ApiResponse<[**ProductCategory**](ProductCategory.md)>


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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
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
| **categoryId** | **String**| category_id | |

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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
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
| **categoryId** | **String**| category_id | |

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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
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
| **categoryId** | **String**| category_id | |

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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
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
| **categoryId** | **String**| category_id | |

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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
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
| **categoryId** | **String**| category_id | |

### Return type

[**ProductCategory**](ProductCategory.md)


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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
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
| **categoryId** | **String**| category_id | |

### Return type

ApiResponse<[**ProductCategory**](ProductCategory.md)>


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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `product_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D29` 
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListProductCategoriesResponse**](ListProductCategoriesResponse.md)


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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `product_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D29` 
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListProductCategoriesResponse**](ListProductCategoriesResponse.md)>


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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
        UpdateProductCategoryRequest updateProductCategoryRequest = new UpdateProductCategoryRequest(); // UpdateProductCategoryRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **categoryId** | **String**| category_id | |
| **updateProductCategoryRequest** | [**UpdateProductCategoryRequest**](UpdateProductCategoryRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, display_order_index, parent_category_id] |

### Return type

[**ProductCategory**](ProductCategory.md)


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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ProductCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ProductCategoriesApi apiInstance = new ProductCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
        UpdateProductCategoryRequest updateProductCategoryRequest = new UpdateProductCategoryRequest(); // UpdateProductCategoryRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **categoryId** | **String**| category_id | |
| **updateProductCategoryRequest** | [**UpdateProductCategoryRequest**](UpdateProductCategoryRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, display_order_index, parent_category_id] |

### Return type

ApiResponse<[**ProductCategory**](ProductCategory.md)>


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

