# Keap.Core.V2.Api.ProductInterestBundlesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddProductInterestUsingPOST**](ProductInterestBundlesApi.md#addproductinterestusingpost) | **POST** /v2/productInterestBundles/{id}/interests | Create a Product Interest in an existing Bundle |
| [**CreateProductInterestBundleUsingPOST**](ProductInterestBundlesApi.md#createproductinterestbundleusingpost) | **POST** /v2/productInterestBundles | Create a Product Interest Bundle |
| [**DeleteProductInterestBundleUsingDELETE**](ProductInterestBundlesApi.md#deleteproductinterestbundleusingdelete) | **DELETE** /v2/productInterestBundles/{id} | Delete a Product Interest Bundle |
| [**GetProductInterestBundleUsingGET**](ProductInterestBundlesApi.md#getproductinterestbundleusingget) | **GET** /v2/productInterestBundles/{id} | Get a Product Interest Bundle |
| [**ListProductInterestBundlesUsingGET**](ProductInterestBundlesApi.md#listproductinterestbundlesusingget) | **GET** /v2/productInterestBundles | List Product Interest Bundles |
| [**RemoveProductInterestUsingDELETE**](ProductInterestBundlesApi.md#removeproductinterestusingdelete) | **DELETE** /v2/productInterestBundles/{id}/interests/{interest_id} | Delete a Product Interest from an existing Bundle |
| [**UpdateProductInterestBundleUsingPATCH**](ProductInterestBundlesApi.md#updateproductinterestbundleusingpatch) | **PATCH** /v2/productInterestBundles/{id} | Update a Product Interest Bundle |
| [**UpdateProductInterestUsingPATCH**](ProductInterestBundlesApi.md#updateproductinterestusingpatch) | **PATCH** /v2/productInterestBundles/{id}/interests/{interest_id} | Update a Product Interest in an existing Bundle |

<a id="addproductinterestusingpost"></a>
# **AddProductInterestUsingPOST**
> ProductInterest AddProductInterestUsingPOST (string id, AddProductInterestRequest addProductInterestRequest)

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
    public class AddProductInterestUsingPOSTExample
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
                ProductInterest result = apiInstance.AddProductInterestUsingPOST(id, addProductInterestRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.AddProductInterestUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddProductInterestUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Product Interest in an existing Bundle
    ApiResponse<ProductInterest> response = apiInstance.AddProductInterestUsingPOSTWithHttpInfo(id, addProductInterestRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.AddProductInterestUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="createproductinterestbundleusingpost"></a>
# **CreateProductInterestBundleUsingPOST**
> ProductInterestBundle CreateProductInterestBundleUsingPOST (CreateProductInterestBundleRequest createProductInterestBundleRequest)

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
    public class CreateProductInterestBundleUsingPOSTExample
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
                ProductInterestBundle result = apiInstance.CreateProductInterestBundleUsingPOST(createProductInterestBundleRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.CreateProductInterestBundleUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateProductInterestBundleUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Product Interest Bundle
    ApiResponse<ProductInterestBundle> response = apiInstance.CreateProductInterestBundleUsingPOSTWithHttpInfo(createProductInterestBundleRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.CreateProductInterestBundleUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="deleteproductinterestbundleusingdelete"></a>
# **DeleteProductInterestBundleUsingDELETE**
> void DeleteProductInterestBundleUsingDELETE (string id)

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
    public class DeleteProductInterestBundleUsingDELETEExample
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
                apiInstance.DeleteProductInterestBundleUsingDELETE(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.DeleteProductInterestBundleUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteProductInterestBundleUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Product Interest Bundle
    apiInstance.DeleteProductInterestBundleUsingDELETEWithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.DeleteProductInterestBundleUsingDELETEWithHttpInfo: " + e.Message);
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

<a id="getproductinterestbundleusingget"></a>
# **GetProductInterestBundleUsingGET**
> ProductInterestBundle GetProductInterestBundleUsingGET (string id)

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
    public class GetProductInterestBundleUsingGETExample
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
                ProductInterestBundle result = apiInstance.GetProductInterestBundleUsingGET(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.GetProductInterestBundleUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetProductInterestBundleUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get a Product Interest Bundle
    ApiResponse<ProductInterestBundle> response = apiInstance.GetProductInterestBundleUsingGETWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.GetProductInterestBundleUsingGETWithHttpInfo: " + e.Message);
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

<a id="listproductinterestbundlesusingget"></a>
# **ListProductInterestBundlesUsingGET**
> ListProductInterestBundleResponse ListProductInterestBundlesUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

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
    public class ListProductInterestBundlesUsingGETExample
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
                ListProductInterestBundleResponse result = apiInstance.ListProductInterestBundlesUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.ListProductInterestBundlesUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListProductInterestBundlesUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Product Interest Bundles
    ApiResponse<ListProductInterestBundleResponse> response = apiInstance.ListProductInterestBundlesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.ListProductInterestBundlesUsingGETWithHttpInfo: " + e.Message);
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

<a id="removeproductinterestusingdelete"></a>
# **RemoveProductInterestUsingDELETE**
> void RemoveProductInterestUsingDELETE (string id, string interestId)

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
    public class RemoveProductInterestUsingDELETEExample
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
                apiInstance.RemoveProductInterestUsingDELETE(id, interestId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.RemoveProductInterestUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveProductInterestUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Product Interest from an existing Bundle
    apiInstance.RemoveProductInterestUsingDELETEWithHttpInfo(id, interestId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.RemoveProductInterestUsingDELETEWithHttpInfo: " + e.Message);
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

<a id="updateproductinterestbundleusingpatch"></a>
# **UpdateProductInterestBundleUsingPATCH**
> ProductInterestBundle UpdateProductInterestBundleUsingPATCH (string id, UpdateProductInterestBundleRequest updateProductInterestBundleRequest, List<string>? updateMask = null)

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
    public class UpdateProductInterestBundleUsingPATCHExample
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
                ProductInterestBundle result = apiInstance.UpdateProductInterestBundleUsingPATCH(id, updateProductInterestBundleRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.UpdateProductInterestBundleUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateProductInterestBundleUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Product Interest Bundle
    ApiResponse<ProductInterestBundle> response = apiInstance.UpdateProductInterestBundleUsingPATCHWithHttpInfo(id, updateProductInterestBundleRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.UpdateProductInterestBundleUsingPATCHWithHttpInfo: " + e.Message);
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

<a id="updateproductinterestusingpatch"></a>
# **UpdateProductInterestUsingPATCH**
> ProductInterest UpdateProductInterestUsingPATCH (string id, string interestId, UpdateProductInterestRequest updateProductInterestRequest, List<string>? updateMask = null)

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
    public class UpdateProductInterestUsingPATCHExample
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
                ProductInterest result = apiInstance.UpdateProductInterestUsingPATCH(id, interestId, updateProductInterestRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProductInterestBundlesApi.UpdateProductInterestUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateProductInterestUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Product Interest in an existing Bundle
    ApiResponse<ProductInterest> response = apiInstance.UpdateProductInterestUsingPATCHWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProductInterestBundlesApi.UpdateProductInterestUsingPATCHWithHttpInfo: " + e.Message);
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

