# Keap.Core.V2.Api.ProductsApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddProductOptionListOptionValue**](ProductsApi.md#addproductoptionlistoptionvalue) | **POST** /rest/v2/products/{product_id}/options/{product_option_id}/listItems | Add a Product Option List Option Value |
| [**AdjustInventory**](ProductsApi.md#adjustinventory) | **POST** /rest/v2/products/{product_id}:adjustInventory | Adjust Inventory of a Product |
| [**CreateProduct**](ProductsApi.md#createproduct) | **POST** /rest/v2/products | Create a Product |
| [**CreateProductImage**](ProductsApi.md#createproductimage) | **POST** /rest/v2/products/{product_id}/images | Create the Product Image |
| [**CreateProductOption**](ProductsApi.md#createproductoption) | **POST** /rest/v2/products/{product_id}/options | Create a Product Option |
| [**DeleteProduct**](ProductsApi.md#deleteproduct) | **DELETE** /rest/v2/products/{product_id} | Delete a Product |
| [**DeleteProductImage**](ProductsApi.md#deleteproductimage) | **DELETE** /rest/v2/products/{product_id}/images | Delete the Product Image |
| [**DeleteProductOption**](ProductsApi.md#deleteproductoption) | **DELETE** /rest/v2/products/{product_id}/options/{product_option_id} | Delete a Product Option |
| [**DeleteProductOptionListOptionValue**](ProductsApi.md#deleteproductoptionlistoptionvalue) | **DELETE** /rest/v2/products/{product_id}/options/{product_option_id}/listItems/{item_id} | Delete a Product Option List Item |
| [**GetFileData**](ProductsApi.md#getfiledata) | **GET** /rest/v2/products/{product_id}/images/legacyImageData | Retrieve Product Legacy Image Data |
| [**GetProduct**](ProductsApi.md#getproduct) | **GET** /rest/v2/products/{product_id} | Get a Product |
| [**GetProductOption**](ProductsApi.md#getproductoption) | **GET** /rest/v2/products/{product_id}/options/{product_option_id} | Get Product Option |
| [**ListProductOptions**](ProductsApi.md#listproductoptions) | **GET** /rest/v2/products/{product_id}/options | List Product Options |
| [**ListProducts**](ProductsApi.md#listproducts) | **GET** /rest/v2/products | List Products |
| [**UpdateProduct**](ProductsApi.md#updateproduct) | **PATCH** /rest/v2/products/{product_id} | Update a Product |
| [**UpdateProductOption**](ProductsApi.md#updateproductoption) | **PATCH** /rest/v2/products/{product_id}/options/{product_option_id} | Updates a Product Option |
| [**UpdateProductOptionListOptionValue**](ProductsApi.md#updateproductoptionlistoptionvalue) | **PATCH** /rest/v2/products/{product_id}/options/{product_option_id}/listItems/{item_id} | Updates a Product Option List Option Value |

<a id="addproductoptionlistoptionvalue"></a>
# **AddProductOptionListOptionValue**
> ProductOption AddProductOptionListOptionValue (string productId, string productOptionId, List<CreateProductOptionListOption> createProductOptionListOption)

Add a Product Option List Option Value

Adds product option values to a product option of type LIST

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AddProductOptionListOptionValueExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id
            var productOptionId = "productOptionId_example";  // string | product_option_id
            var createProductOptionListOption = new List<CreateProductOptionListOption>(); // List<CreateProductOptionListOption> | 

            try
            {
                // Add a Product Option List Option Value
                ProductOption result = apiInstance.AddProductOptionListOptionValue(productId, productOptionId, createProductOptionListOption);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.AddProductOptionListOptionValue: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddProductOptionListOptionValueWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add a Product Option List Option Value
    ApiResponse<ProductOption> response = apiInstance.AddProductOptionListOptionValueWithHttpInfo(productId, productOptionId, createProductOptionListOption);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.AddProductOptionListOptionValueWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **productOptionId** | **string** | product_option_id |  |
| **createProductOptionListOption** | [**List&lt;CreateProductOptionListOption&gt;**](CreateProductOptionListOption.md) |  |  |

### Return type

[**ProductOption**](ProductOption.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="adjustinventory"></a>
# **AdjustInventory**
> RestV2ProductDetail AdjustInventory (string productId, UpdateProductInventoryRequestDetail updateProductInventoryRequestDetail)

Adjust Inventory of a Product

Increase or decrease the quantity of the Product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AdjustInventoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id
            var updateProductInventoryRequestDetail = new UpdateProductInventoryRequestDetail(); // UpdateProductInventoryRequestDetail | 

            try
            {
                // Adjust Inventory of a Product
                RestV2ProductDetail result = apiInstance.AdjustInventory(productId, updateProductInventoryRequestDetail);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.AdjustInventory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AdjustInventoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Adjust Inventory of a Product
    ApiResponse<RestV2ProductDetail> response = apiInstance.AdjustInventoryWithHttpInfo(productId, updateProductInventoryRequestDetail);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.AdjustInventoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **updateProductInventoryRequestDetail** | [**UpdateProductInventoryRequestDetail**](UpdateProductInventoryRequestDetail.md) |  |  |

### Return type

[**RestV2ProductDetail**](RestV2ProductDetail.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createproduct"></a>
# **CreateProduct**
> RestV2ProductDetail CreateProduct (CreateProductRequestDetail createProductRequestDetail)

Create a Product

Creates a new product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateProductExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var createProductRequestDetail = new CreateProductRequestDetail(); // CreateProductRequestDetail | 

            try
            {
                // Create a Product
                RestV2ProductDetail result = apiInstance.CreateProduct(createProductRequestDetail);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.CreateProduct: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateProductWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Product
    ApiResponse<RestV2ProductDetail> response = apiInstance.CreateProductWithHttpInfo(createProductRequestDetail);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.CreateProductWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createProductRequestDetail** | [**CreateProductRequestDetail**](CreateProductRequestDetail.md) |  |  |

### Return type

[**RestV2ProductDetail**](RestV2ProductDetail.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createproductimage"></a>
# **CreateProductImage**
> void CreateProductImage (string productId, System.IO.Stream file, bool? legacy = null)

Create the Product Image

Creates the Product Image file and uploads it to the specified Product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateProductImageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | The product ID
            var file = new System.IO.MemoryStream(System.IO.File.ReadAllBytes("/path/to/file.txt"));  // System.IO.Stream | The image file to upload
            var legacy = true;  // bool? | Set to 'true' if the product image should also be used in legacy cart features. Only one image is allowed. If an image already exists, it will be replaced by the current image. (optional) 

            try
            {
                // Create the Product Image
                apiInstance.CreateProductImage(productId, file, legacy);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.CreateProductImage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateProductImageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create the Product Image
    apiInstance.CreateProductImageWithHttpInfo(productId, file, legacy);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.CreateProductImageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | The product ID |  |
| **file** | **System.IO.Stream****System.IO.Stream** | The image file to upload |  |
| **legacy** | **bool?** | Set to &#39;true&#39; if the product image should also be used in legacy cart features. Only one image is allowed. If an image already exists, it will be replaced by the current image. | [optional]  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createproductoption"></a>
# **CreateProductOption**
> ProductOption CreateProductOption (string productId, CreateProductOptionRequest createProductOptionRequest)

Create a Product Option

Creates a new product option

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateProductOptionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id
            var createProductOptionRequest = new CreateProductOptionRequest(); // CreateProductOptionRequest | 

            try
            {
                // Create a Product Option
                ProductOption result = apiInstance.CreateProductOption(productId, createProductOptionRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.CreateProductOption: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateProductOptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Product Option
    ApiResponse<ProductOption> response = apiInstance.CreateProductOptionWithHttpInfo(productId, createProductOptionRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.CreateProductOptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **createProductOptionRequest** | [**CreateProductOptionRequest**](CreateProductOptionRequest.md) |  |  |

### Return type

[**ProductOption**](ProductOption.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteproduct"></a>
# **DeleteProduct**
> void DeleteProduct (string productId)

Delete a Product

Deletes a single product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteProductExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id

            try
            {
                // Delete a Product
                apiInstance.DeleteProduct(productId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.DeleteProduct: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteProductWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Product
    apiInstance.DeleteProductWithHttpInfo(productId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.DeleteProductWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteproductimage"></a>
# **DeleteProductImage**
> void DeleteProductImage (string productId)

Delete the Product Image

Deletes the Product Image from the specified Product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteProductImageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id

            try
            {
                // Delete the Product Image
                apiInstance.DeleteProductImage(productId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.DeleteProductImage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteProductImageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete the Product Image
    apiInstance.DeleteProductImageWithHttpInfo(productId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.DeleteProductImageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteproductoption"></a>
# **DeleteProductOption**
> void DeleteProductOption (string productId, string productOptionId)

Delete a Product Option

Deletes a single product option

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteProductOptionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id
            var productOptionId = "productOptionId_example";  // string | product_option_id

            try
            {
                // Delete a Product Option
                apiInstance.DeleteProductOption(productId, productOptionId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.DeleteProductOption: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteProductOptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Product Option
    apiInstance.DeleteProductOptionWithHttpInfo(productId, productOptionId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.DeleteProductOptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **productOptionId** | **string** | product_option_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteproductoptionlistoptionvalue"></a>
# **DeleteProductOptionListOptionValue**
> void DeleteProductOptionListOptionValue (string productId, string productOptionId, string itemId)

Delete a Product Option List Item

Deletes a single option value in a Product Option of type LIST

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteProductOptionListOptionValueExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id
            var productOptionId = "productOptionId_example";  // string | product_option_id
            var itemId = "itemId_example";  // string | item_id

            try
            {
                // Delete a Product Option List Item
                apiInstance.DeleteProductOptionListOptionValue(productId, productOptionId, itemId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.DeleteProductOptionListOptionValue: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteProductOptionListOptionValueWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Product Option List Item
    apiInstance.DeleteProductOptionListOptionValueWithHttpInfo(productId, productOptionId, itemId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.DeleteProductOptionListOptionValueWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **productOptionId** | **string** | product_option_id |  |
| **itemId** | **string** | item_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getfiledata"></a>
# **GetFileData**
> byte[] GetFileData (string productId)

Retrieve Product Legacy Image Data

Retrieves the product's legacy image

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetFileDataExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id

            try
            {
                // Retrieve Product Legacy Image Data
                byte[] result = apiInstance.GetFileData(productId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.GetFileData: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetFileDataWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Product Legacy Image Data
    ApiResponse<byte[]> response = apiInstance.GetFileDataWithHttpInfo(productId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.GetFileDataWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |

### Return type

**byte[]**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getproduct"></a>
# **GetProduct**
> RestV2ProductDetail GetProduct (string productId)

Get a Product

Gets a single Product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetProductExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id

            try
            {
                // Get a Product
                RestV2ProductDetail result = apiInstance.GetProduct(productId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.GetProduct: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetProductWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get a Product
    ApiResponse<RestV2ProductDetail> response = apiInstance.GetProductWithHttpInfo(productId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.GetProductWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |

### Return type

[**RestV2ProductDetail**](RestV2ProductDetail.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getproductoption"></a>
# **GetProductOption**
> ProductOption GetProductOption (string productId, string productOptionId)

Get Product Option

Retrieves a Product Option

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetProductOptionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id
            var productOptionId = "productOptionId_example";  // string | product_option_id

            try
            {
                // Get Product Option
                ProductOption result = apiInstance.GetProductOption(productId, productOptionId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.GetProductOption: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetProductOptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Product Option
    ApiResponse<ProductOption> response = apiInstance.GetProductOptionWithHttpInfo(productId, productOptionId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.GetProductOptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **productOptionId** | **string** | product_option_id |  |

### Return type

[**ProductOption**](ProductOption.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listproductoptions"></a>
# **ListProductOptions**
> ListProductOptionsResponse ListProductOptions (string productId)

List Product Options

Retrieves all options of a Product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListProductOptionsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id

            try
            {
                // List Product Options
                ListProductOptionsResponse result = apiInstance.ListProductOptions(productId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.ListProductOptions: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListProductOptionsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Product Options
    ApiResponse<ListProductOptionsResponse> response = apiInstance.ListProductOptionsWithHttpInfo(productId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.ListProductOptionsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |

### Return type

[**ListProductOptionsResponse**](ListProductOptionsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listproducts"></a>
# **ListProducts**
> ListProductsResponseList ListProducts (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Products

Retrieves a list of Products

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListProductsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `name` - Wildcard matching allowed - (String) `sku` - Wildcard matching allowed - (String) `description` - Wildcard matching allowed - (String) `short_description` - Wildcard matching allowed - (String) `product_id` - supports comparison operators: `==`, `>`, `<`, `>=`, `<=` - (List[String]) `product_ids` - accepts a comma-separated list of product IDs  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`.  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo`  For the filters listed above, here are some examples: - `filter=name%3D%3Dtestsearch` - `filter=name%3D%3Dtest*` (starts with \"test\") - `filter=sku%3D%3Dtestsearch` - `filter=sku%3D%3DSKU*` (starts with \"SKU\") - `filter=product_id>5` (product ID greater than 5) - `filter=product_id>=10` (product ID greater than or equal to 10) - `filter=product_id%3D%3D42` (product ID equals 42) - `filter=product_ids%3D%3D1,2,3,4,5` (products with IDs 1, 2, 3, 4, or 5) - `filter=name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `name` - `sku` - `last_updated_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Products
                ListProductsResponseList result = apiInstance.ListProducts(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.ListProducts: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListProductsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Products
    ApiResponse<ListProductsResponseList> response = apiInstance.ListProductsWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.ListProductsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - Wildcard matching allowed - (String) &#x60;sku&#x60; - Wildcard matching allowed - (String) &#x60;description&#x60; - Wildcard matching allowed - (String) &#x60;short_description&#x60; - Wildcard matching allowed - (String) &#x60;product_id&#x60; - supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (List[String]) &#x60;product_ids&#x60; - accepts a comma-separated list of product IDs  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;.  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;name%3D%3Dtest*&#x60; (starts with \&quot;test\&quot;) - &#x60;filter&#x3D;sku%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;sku%3D%3DSKU*&#x60; (starts with \&quot;SKU\&quot;) - &#x60;filter&#x3D;product_id&gt;5&#x60; (product ID greater than 5) - &#x60;filter&#x3D;product_id&gt;&#x3D;10&#x60; (product ID greater than or equal to 10) - &#x60;filter&#x3D;product_id%3D%3D42&#x60; (product ID equals 42) - &#x60;filter&#x3D;product_ids%3D%3D1,2,3,4,5&#x60; (products with IDs 1, 2, 3, 4, or 5) - &#x60;filter&#x3D;name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;sku&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListProductsResponseList**](ListProductsResponseList.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateproduct"></a>
# **UpdateProduct**
> RestV2ProductDetail UpdateProduct (string productId, UpdateProductRequestDetail updateProductRequestDetail, Object? updateMask = null)

Update a Product

Updates a product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateProductExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id
            var updateProductRequestDetail = new UpdateProductRequestDetail(); // UpdateProductRequestDetail | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Product
                RestV2ProductDetail result = apiInstance.UpdateProduct(productId, updateProductRequestDetail, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.UpdateProduct: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateProductWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Product
    ApiResponse<RestV2ProductDetail> response = apiInstance.UpdateProductWithHttpInfo(productId, updateProductRequestDetail, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.UpdateProductWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **updateProductRequestDetail** | [**UpdateProductRequestDetail**](UpdateProductRequestDetail.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**RestV2ProductDetail**](RestV2ProductDetail.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateproductoption"></a>
# **UpdateProductOption**
> ProductOption UpdateProductOption (string productId, string productOptionId, UpdateProductOptionRequest updateProductOptionRequest, Object? updateMask = null)

Updates a Product Option

Updates a product option

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateProductOptionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id
            var productOptionId = "productOptionId_example";  // string | product_option_id
            var updateProductOptionRequest = new UpdateProductOptionRequest(); // UpdateProductOptionRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Updates a Product Option
                ProductOption result = apiInstance.UpdateProductOption(productId, productOptionId, updateProductOptionRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.UpdateProductOption: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateProductOptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Updates a Product Option
    ApiResponse<ProductOption> response = apiInstance.UpdateProductOptionWithHttpInfo(productId, productOptionId, updateProductOptionRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.UpdateProductOptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **productOptionId** | **string** | product_option_id |  |
| **updateProductOptionRequest** | [**UpdateProductOptionRequest**](UpdateProductOptionRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**ProductOption**](ProductOption.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateproductoptionlistoptionvalue"></a>
# **UpdateProductOptionListOptionValue**
> ProductOption UpdateProductOptionListOptionValue (string productId, string productOptionId, string itemId, UpdateProductOptionListOption updateProductOptionListOption, Object? updateMask = null)

Updates a Product Option List Option Value

Updates a single product option value

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateProductOptionListOptionValueExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ProductsApi(config);
            var productId = "productId_example";  // string | product_id
            var productOptionId = "productOptionId_example";  // string | product_option_id
            var itemId = "itemId_example";  // string | item_id
            var updateProductOptionListOption = new UpdateProductOptionListOption(); // UpdateProductOptionListOption | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Updates a Product Option List Option Value
                ProductOption result = apiInstance.UpdateProductOptionListOptionValue(productId, productOptionId, itemId, updateProductOptionListOption, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductsApi.UpdateProductOptionListOptionValue: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateProductOptionListOptionValueWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Updates a Product Option List Option Value
    ApiResponse<ProductOption> response = apiInstance.UpdateProductOptionListOptionValueWithHttpInfo(productId, productOptionId, itemId, updateProductOptionListOption, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductsApi.UpdateProductOptionListOptionValueWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **productOptionId** | **string** | product_option_id |  |
| **itemId** | **string** | item_id |  |
| **updateProductOptionListOption** | [**UpdateProductOptionListOption**](UpdateProductOptionListOption.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**ProductOption**](ProductOption.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

