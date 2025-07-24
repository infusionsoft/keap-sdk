# Keap.Core.V2.Api.ProductInterestBundlesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddProductInterest**](ProductInterestBundlesApi.md#addproductinterest) | **POST** /v2/productInterestBundles/{id}/interests | Create a Product Interest in an existing Bundle |
| [**CreateProductInterestBundle**](ProductInterestBundlesApi.md#createproductinterestbundle) | **POST** /v2/productInterestBundles | Create a Product Interest Bundle |
| [**DeleteProductInterestBundle**](ProductInterestBundlesApi.md#deleteproductinterestbundle) | **DELETE** /v2/productInterestBundles/{id} | Delete a Product Interest Bundle |
| [**GetProductInterestBundle**](ProductInterestBundlesApi.md#getproductinterestbundle) | **GET** /v2/productInterestBundles/{id} | Get a Product Interest Bundle |
| [**ListProductInterestBundles**](ProductInterestBundlesApi.md#listproductinterestbundles) | **GET** /v2/productInterestBundles | List Product Interest Bundles |
| [**RemoveProductInterest**](ProductInterestBundlesApi.md#removeproductinterest) | **DELETE** /v2/productInterestBundles/{id}/interests/{interest_id} | Delete a Product Interest from an existing Bundle |
| [**UpdateProductInterest**](ProductInterestBundlesApi.md#updateproductinterest) | **PATCH** /v2/productInterestBundles/{id}/interests/{interest_id} | Update a Product Interest in an existing Bundle |
| [**UpdateProductInterestBundle**](ProductInterestBundlesApi.md#updateproductinterestbundle) | **PATCH** /v2/productInterestBundles/{id} | Update a Product Interest Bundle |

<a id="addproductinterest"></a>
# **AddProductInterest**
> ProductInterest AddProductInterest (string id, AddProductInterestRequest addProductInterestRequest)

Create a Product Interest in an existing Bundle

Creates a new Product Interest in an existing Bundle.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AddProductInterestExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductInterestBundlesApi(config);
            var id = "id_example";  // string | id
            var addProductInterestRequest = new AddProductInterestRequest(); // AddProductInterestRequest | request

            try
            {
                // Create a Product Interest in an existing Bundle
                ProductInterest result = apiInstance.AddProductInterest(id, addProductInterestRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.AddProductInterest: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddProductInterestWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Product Interest in an existing Bundle
    ApiResponse<ProductInterest> response = apiInstance.AddProductInterestWithHttpInfo(id, addProductInterestRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.AddProductInterestWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **addProductInterestRequest** | [**AddProductInterestRequest**](AddProductInterestRequest.md) | request |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createproductinterestbundle"></a>
# **CreateProductInterestBundle**
> ProductInterestBundle CreateProductInterestBundle (CreateProductInterestBundleRequest createProductInterestBundleRequest)

Create a Product Interest Bundle

Creates a new Product Interest Bundle.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateProductInterestBundleExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductInterestBundlesApi(config);
            var createProductInterestBundleRequest = new CreateProductInterestBundleRequest(); // CreateProductInterestBundleRequest | createProductInterestBundleRequest

            try
            {
                // Create a Product Interest Bundle
                ProductInterestBundle result = apiInstance.CreateProductInterestBundle(createProductInterestBundleRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.CreateProductInterestBundle: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateProductInterestBundleWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Product Interest Bundle
    ApiResponse<ProductInterestBundle> response = apiInstance.CreateProductInterestBundleWithHttpInfo(createProductInterestBundleRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.CreateProductInterestBundleWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createProductInterestBundleRequest** | [**CreateProductInterestBundleRequest**](CreateProductInterestBundleRequest.md) | createProductInterestBundleRequest |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteproductinterestbundle"></a>
# **DeleteProductInterestBundle**
> void DeleteProductInterestBundle (string id)

Delete a Product Interest Bundle

Deletes an existing Product Interest Bundle.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteProductInterestBundleExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductInterestBundlesApi(config);
            var id = "id_example";  // string | id

            try
            {
                // Delete a Product Interest Bundle
                apiInstance.DeleteProductInterestBundle(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.DeleteProductInterestBundle: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteProductInterestBundleWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Product Interest Bundle
    apiInstance.DeleteProductInterestBundleWithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.DeleteProductInterestBundleWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |

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

<a id="getproductinterestbundle"></a>
# **GetProductInterestBundle**
> ProductInterestBundle GetProductInterestBundle (string id)

Get a Product Interest Bundle

Gets a single Product Interest Bundle.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetProductInterestBundleExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductInterestBundlesApi(config);
            var id = "id_example";  // string | id

            try
            {
                // Get a Product Interest Bundle
                ProductInterestBundle result = apiInstance.GetProductInterestBundle(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.GetProductInterestBundle: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetProductInterestBundleWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get a Product Interest Bundle
    ApiResponse<ProductInterestBundle> response = apiInstance.GetProductInterestBundleWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.GetProductInterestBundleWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listproductinterestbundles"></a>
# **ListProductInterestBundles**
> ListProductInterestBundleResponse ListProductInterestBundles (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Product Interest Bundles

Retrieves a list of Product Interest Bundles

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListProductInterestBundlesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductInterestBundlesApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `name`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc`  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Product Interest Bundles
                ListProductInterestBundleResponse result = apiInstance.ListProductInterestBundles(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.ListProductInterestBundles: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListProductInterestBundlesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Product Interest Bundles
    ApiResponse<ListProductInterestBundleResponse> response = apiInstance.ListProductInterestBundlesWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.ListProductInterestBundlesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removeproductinterest"></a>
# **RemoveProductInterest**
> void RemoveProductInterest (string id, string interestId)

Delete a Product Interest from an existing Bundle

Deletes an existing Product Interest from an existing Bundle.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RemoveProductInterestExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductInterestBundlesApi(config);
            var id = "id_example";  // string | id
            var interestId = "interestId_example";  // string | interest_id

            try
            {
                // Delete a Product Interest from an existing Bundle
                apiInstance.RemoveProductInterest(id, interestId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.RemoveProductInterest: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveProductInterestWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Product Interest from an existing Bundle
    apiInstance.RemoveProductInterestWithHttpInfo(id, interestId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.RemoveProductInterestWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **interestId** | **string** | interest_id |  |

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

<a id="updateproductinterest"></a>
# **UpdateProductInterest**
> ProductInterest UpdateProductInterest (string id, string interestId, UpdateProductInterestRequest updateProductInterestRequest, List<string>? updateMask = null)

Update a Product Interest in an existing Bundle

Updates an existing Product Interest in an existing Bundle.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateProductInterestExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductInterestBundlesApi(config);
            var id = "id_example";  // string | id
            var interestId = "interestId_example";  // string | interest_id
            var updateProductInterestRequest = new UpdateProductInterestRequest(); // UpdateProductInterestRequest | updateProductInterestRequest
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Product Interest in an existing Bundle
                ProductInterest result = apiInstance.UpdateProductInterest(id, interestId, updateProductInterestRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.UpdateProductInterest: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateProductInterestWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Product Interest in an existing Bundle
    ApiResponse<ProductInterest> response = apiInstance.UpdateProductInterestWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.UpdateProductInterestWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **interestId** | **string** | interest_id |  |
| **updateProductInterestRequest** | [**UpdateProductInterestRequest**](UpdateProductInterestRequest.md) | updateProductInterestRequest |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateproductinterestbundle"></a>
# **UpdateProductInterestBundle**
> ProductInterestBundle UpdateProductInterestBundle (string id, UpdateProductInterestBundleRequest updateProductInterestBundleRequest, List<string>? updateMask = null)

Update a Product Interest Bundle

Updates an existing Product Interest Bundle.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateProductInterestBundleExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ProductInterestBundlesApi(config);
            var id = "id_example";  // string | id
            var updateProductInterestBundleRequest = new UpdateProductInterestBundleRequest(); // UpdateProductInterestBundleRequest | updateProductInterestBundleRequest
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Product Interest Bundle
                ProductInterestBundle result = apiInstance.UpdateProductInterestBundle(id, updateProductInterestBundleRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.UpdateProductInterestBundle: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateProductInterestBundleWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Product Interest Bundle
    ApiResponse<ProductInterestBundle> response = apiInstance.UpdateProductInterestBundleWithHttpInfo(id, updateProductInterestBundleRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.UpdateProductInterestBundleWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **updateProductInterestBundleRequest** | [**UpdateProductInterestBundleRequest**](UpdateProductInterestBundleRequest.md) | updateProductInterestBundleRequest |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

