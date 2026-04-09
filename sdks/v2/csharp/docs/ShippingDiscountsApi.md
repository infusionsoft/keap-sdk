# Keap.Core.V2.Api.ShippingDiscountsApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateShippingDiscount**](ShippingDiscountsApi.md#createshippingdiscount) | **POST** /rest/v2/discounts/shipping | Create a Shipping Discount |
| [**DeleteShippingDiscount**](ShippingDiscountsApi.md#deleteshippingdiscount) | **DELETE** /rest/v2/discounts/shipping/{discount_id} | Delete a Shipping Discount |
| [**GetShippingDiscount**](ShippingDiscountsApi.md#getshippingdiscount) | **GET** /rest/v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount |
| [**ListShippingDiscounts**](ShippingDiscountsApi.md#listshippingdiscounts) | **GET** /rest/v2/discounts/shipping | List all Shipping Discounts |
| [**UpdateShippingDiscount**](ShippingDiscountsApi.md#updateshippingdiscount) | **PATCH** /rest/v2/discounts/shipping/{discount_id} | Update a Shipping Discount |

<a id="createshippingdiscount"></a>
# **CreateShippingDiscount**
> ShippingDiscount CreateShippingDiscount (CreateShippingDiscountRequest createShippingDiscountRequest)

Create a Shipping Discount

Creates a Shipping Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateShippingDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ShippingDiscountsApi(config);
            var createShippingDiscountRequest = new CreateShippingDiscountRequest(); // CreateShippingDiscountRequest | 

            try
            {
                // Create a Shipping Discount
                ShippingDiscount result = apiInstance.CreateShippingDiscount(createShippingDiscountRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ShippingDiscountsApi.CreateShippingDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateShippingDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Shipping Discount
    ApiResponse<ShippingDiscount> response = apiInstance.CreateShippingDiscountWithHttpInfo(createShippingDiscountRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ShippingDiscountsApi.CreateShippingDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createShippingDiscountRequest** | [**CreateShippingDiscountRequest**](CreateShippingDiscountRequest.md) |  |  |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteshippingdiscount"></a>
# **DeleteShippingDiscount**
> void DeleteShippingDiscount (string discountId)

Delete a Shipping Discount

Deletes a specified Shipping Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteShippingDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ShippingDiscountsApi(config);
            var discountId = "discountId_example";  // string | 

            try
            {
                // Delete a Shipping Discount
                apiInstance.DeleteShippingDiscount(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ShippingDiscountsApi.DeleteShippingDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteShippingDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Shipping Discount
    apiInstance.DeleteShippingDiscountWithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ShippingDiscountsApi.DeleteShippingDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** |  |  |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getshippingdiscount"></a>
# **GetShippingDiscount**
> ShippingDiscount GetShippingDiscount (string discountId)

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetShippingDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ShippingDiscountsApi(config);
            var discountId = "discountId_example";  // string | 

            try
            {
                // Retrieve a Shipping Discount
                ShippingDiscount result = apiInstance.GetShippingDiscount(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ShippingDiscountsApi.GetShippingDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetShippingDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Shipping Discount
    ApiResponse<ShippingDiscount> response = apiInstance.GetShippingDiscountWithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ShippingDiscountsApi.GetShippingDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** |  |  |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listshippingdiscounts"></a>
# **ListShippingDiscounts**
> ListShippingDiscountsResponse ListShippingDiscounts (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List all Shipping Discounts

Retrieves a list of Shipping Discounts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListShippingDiscountsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ShippingDiscountsApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D4.5` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `discount_type` - `discount_value` - `id` - `name`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List all Shipping Discounts
                ListShippingDiscountsResponse result = apiInstance.ListShippingDiscounts(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ShippingDiscountsApi.ListShippingDiscounts: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListShippingDiscountsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all Shipping Discounts
    ApiResponse<ListShippingDiscountsResponse> response = apiInstance.ListShippingDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ShippingDiscountsApi.ListShippingDiscountsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListShippingDiscountsResponse**](ListShippingDiscountsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateshippingdiscount"></a>
# **UpdateShippingDiscount**
> ShippingDiscount UpdateShippingDiscount (string discountId, UpdateShippingDiscountRequest updateShippingDiscountRequest, Object? updateMask = null)

Update a Shipping Discount

Updates a Shipping Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateShippingDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ShippingDiscountsApi(config);
            var discountId = "discountId_example";  // string | 
            var updateShippingDiscountRequest = new UpdateShippingDiscountRequest(); // UpdateShippingDiscountRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Shipping Discount
                ShippingDiscount result = apiInstance.UpdateShippingDiscount(discountId, updateShippingDiscountRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ShippingDiscountsApi.UpdateShippingDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateShippingDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Shipping Discount
    ApiResponse<ShippingDiscount> response = apiInstance.UpdateShippingDiscountWithHttpInfo(discountId, updateShippingDiscountRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ShippingDiscountsApi.UpdateShippingDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** |  |  |
| **updateShippingDiscountRequest** | [**UpdateShippingDiscountRequest**](UpdateShippingDiscountRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

