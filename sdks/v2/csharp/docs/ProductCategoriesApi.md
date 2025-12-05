# Keap.Core.V2.Api.ProductCategoriesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AssignProductsToCategory**](ProductCategoriesApi.md#assignproductstocategory) | **POST** /v2/productCategories/{category_id}:assignProducts | Assign Products to a Product Category |
| [**CreateImageFile**](ProductCategoriesApi.md#createimagefile) | **POST** /v2/productCategories/{category_id}/images | Create the product category image file |
| [**CreateProductCategory**](ProductCategoriesApi.md#createproductcategory) | **POST** /v2/productCategories | Create a Product Category |
| [**DeleteImageFile**](ProductCategoriesApi.md#deleteimagefile) | **DELETE** /v2/productCategories/{category_id}/images | Delete the image from a product category |
| [**DeleteProductCategory**](ProductCategoriesApi.md#deleteproductcategory) | **DELETE** /v2/productCategories/{category_id} | Delete a Product Category |
| [**GetProductCategory**](ProductCategoriesApi.md#getproductcategory) | **GET** /v2/productCategories/{category_id} | Get a Product Category |
| [**ListProductCategories**](ProductCategoriesApi.md#listproductcategories) | **GET** /v2/productCategories | List all Product Categories |
| [**UpdateProductCategory**](ProductCategoriesApi.md#updateproductcategory) | **PATCH** /v2/productCategories/{category_id} | Update a Product Category |

<a id="assignproductstocategory"></a>
# **AssignProductsToCategory**
> void AssignProductsToCategory (string categoryId, AssignProductsRequest assignProductsRequest)

Assign Products to a Product Category

Updates the list of products assigned to a Product Category. **Note:** The full list of product IDs that should remain assigned must be provided; any IDs omitted are removed automatically.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AssignProductsToCategoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductCategoriesApi(config);
            var categoryId = "categoryId_example";  // string | category_id
            var assignProductsRequest = new AssignProductsRequest(); // AssignProductsRequest | request

            try
            {
                // Assign Products to a Product Category
                apiInstance.AssignProductsToCategory(categoryId, assignProductsRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductCategoriesApi.AssignProductsToCategory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AssignProductsToCategoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign Products to a Product Category
    apiInstance.AssignProductsToCategoryWithHttpInfo(categoryId, assignProductsRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductCategoriesApi.AssignProductsToCategoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | category_id |  |
| **assignProductsRequest** | [**AssignProductsRequest**](AssignProductsRequest.md) | request |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createimagefile"></a>
# **CreateImageFile**
> void CreateImageFile (string categoryId, System.IO.Stream file)

Create the product category image file

Creates the product category image file and uploads it to the specified product category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateImageFileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductCategoriesApi(config);
            var categoryId = "categoryId_example";  // string | category_id
            var file = new System.IO.MemoryStream(System.IO.File.ReadAllBytes("/path/to/file.txt"));  // System.IO.Stream | File to upload

            try
            {
                // Create the product category image file
                apiInstance.CreateImageFile(categoryId, file);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductCategoriesApi.CreateImageFile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateImageFileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create the product category image file
    apiInstance.CreateImageFileWithHttpInfo(categoryId, file);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductCategoriesApi.CreateImageFileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | category_id |  |
| **file** | **System.IO.Stream****System.IO.Stream** | File to upload |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createproductcategory"></a>
# **CreateProductCategory**
> ProductCategory CreateProductCategory (CreateProductCategoryRequest? createProductCategoryRequest = null)

Create a Product Category

Creates a new Product Category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateProductCategoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductCategoriesApi(config);
            var createProductCategoryRequest = new CreateProductCategoryRequest?(); // CreateProductCategoryRequest? | productCategory (optional) 

            try
            {
                // Create a Product Category
                ProductCategory result = apiInstance.CreateProductCategory(createProductCategoryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductCategoriesApi.CreateProductCategory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateProductCategoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Product Category
    ApiResponse<ProductCategory> response = apiInstance.CreateProductCategoryWithHttpInfo(createProductCategoryRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductCategoriesApi.CreateProductCategoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createProductCategoryRequest** | [**CreateProductCategoryRequest?**](CreateProductCategoryRequest?.md) | productCategory | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteimagefile"></a>
# **DeleteImageFile**
> void DeleteImageFile (string categoryId)

Delete the image from a product category

Deletes the image from the specified product category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteImageFileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductCategoriesApi(config);
            var categoryId = "categoryId_example";  // string | category_id

            try
            {
                // Delete the image from a product category
                apiInstance.DeleteImageFile(categoryId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductCategoriesApi.DeleteImageFile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteImageFileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete the image from a product category
    apiInstance.DeleteImageFileWithHttpInfo(categoryId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductCategoriesApi.DeleteImageFileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | category_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteproductcategory"></a>
# **DeleteProductCategory**
> void DeleteProductCategory (string categoryId)

Delete a Product Category

Deletes the specified Product Category, its sub-categories, and removes products from it

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteProductCategoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductCategoriesApi(config);
            var categoryId = "categoryId_example";  // string | category_id

            try
            {
                // Delete a Product Category
                apiInstance.DeleteProductCategory(categoryId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductCategoriesApi.DeleteProductCategory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteProductCategoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Product Category
    apiInstance.DeleteProductCategoryWithHttpInfo(categoryId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductCategoriesApi.DeleteProductCategoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | category_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getproductcategory"></a>
# **GetProductCategory**
> ProductCategory GetProductCategory (string categoryId)

Get a Product Category

Gets a single Product Category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetProductCategoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductCategoriesApi(config);
            var categoryId = "categoryId_example";  // string | category_id

            try
            {
                // Get a Product Category
                ProductCategory result = apiInstance.GetProductCategory(categoryId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductCategoriesApi.GetProductCategory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetProductCategoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get a Product Category
    ApiResponse<ProductCategory> response = apiInstance.GetProductCategoryWithHttpInfo(categoryId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductCategoriesApi.GetProductCategoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | category_id |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listproductcategories"></a>
# **ListProductCategories**
> ListProductCategoriesResponse ListProductCategories (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List all Product Categories

Retrieves a list of Product Categories

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListProductCategoriesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductCategoriesApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `product_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D29`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `id`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List all Product Categories
                ListProductCategoriesResponse result = apiInstance.ListProductCategories(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductCategoriesApi.ListProductCategories: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListProductCategoriesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all Product Categories
    ApiResponse<ListProductCategoriesResponse> response = apiInstance.ListProductCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductCategoriesApi.ListProductCategoriesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateproductcategory"></a>
# **UpdateProductCategory**
> ProductCategory UpdateProductCategory (string categoryId, UpdateProductCategoryRequest updateProductCategoryRequest, List<string>? updateMask = null)

Update a Product Category

Updates a single Product Category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateProductCategoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductCategoriesApi(config);
            var categoryId = "categoryId_example";  // string | category_id
            var updateProductCategoryRequest = new UpdateProductCategoryRequest(); // UpdateProductCategoryRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Product Category
                ProductCategory result = apiInstance.UpdateProductCategory(categoryId, updateProductCategoryRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductCategoriesApi.UpdateProductCategory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateProductCategoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Product Category
    ApiResponse<ProductCategory> response = apiInstance.UpdateProductCategoryWithHttpInfo(categoryId, updateProductCategoryRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductCategoriesApi.UpdateProductCategoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | category_id |  |
| **updateProductCategoryRequest** | [**UpdateProductCategoryRequest**](UpdateProductCategoryRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

