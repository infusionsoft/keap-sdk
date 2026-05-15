# Keap.Core.V2.Api.OrderTotalDiscountsApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateOrderTotalDiscount**](OrderTotalDiscountsApi.md#createordertotaldiscount) | **POST** /rest/v2/discounts/orderTotals | Create an Order Total Discount |
| [**DeleteOrderTotalDiscount**](OrderTotalDiscountsApi.md#deleteordertotaldiscount) | **DELETE** /rest/v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount |
| [**GetOrderTotalDiscount**](OrderTotalDiscountsApi.md#getordertotaldiscount) | **GET** /rest/v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount |
| [**ListOrderTotalDiscounts**](OrderTotalDiscountsApi.md#listordertotaldiscounts) | **GET** /rest/v2/discounts/orderTotals | List all Order Total Discounts |
| [**UpdateOrderTotalDiscount**](OrderTotalDiscountsApi.md#updateordertotaldiscount) | **PATCH** /rest/v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount |

<a id="createordertotaldiscount"></a>
# **CreateOrderTotalDiscount**
> OrderTotalDiscount CreateOrderTotalDiscount (CreateOrderTotalDiscountRequest createOrderTotalDiscountRequest)

Create an Order Total Discount

Creates an Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateOrderTotalDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrderTotalDiscountsApi(config);
            var createOrderTotalDiscountRequest = new CreateOrderTotalDiscountRequest(); // CreateOrderTotalDiscountRequest | 

            try
            {
                // Create an Order Total Discount
                OrderTotalDiscount result = apiInstance.CreateOrderTotalDiscount(createOrderTotalDiscountRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountsApi.CreateOrderTotalDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOrderTotalDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.CreateOrderTotalDiscountWithHttpInfo(createOrderTotalDiscountRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountsApi.CreateOrderTotalDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createOrderTotalDiscountRequest** | [**CreateOrderTotalDiscountRequest**](CreateOrderTotalDiscountRequest.md) |  |  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

<a id="deleteordertotaldiscount"></a>
# **DeleteOrderTotalDiscount**
> void DeleteOrderTotalDiscount (string discountId)

Delete an Order Total Discount

Deletes a specified Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteOrderTotalDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrderTotalDiscountsApi(config);
            var discountId = "discountId_example";  // string | 

            try
            {
                // Delete an Order Total Discount
                apiInstance.DeleteOrderTotalDiscount(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountsApi.DeleteOrderTotalDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOrderTotalDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Order Total Discount
    apiInstance.DeleteOrderTotalDiscountWithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountsApi.DeleteOrderTotalDiscountWithHttpInfo: " + e.Message);
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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getordertotaldiscount"></a>
# **GetOrderTotalDiscount**
> OrderTotalDiscount GetOrderTotalDiscount (string discountId)

Retrieve an Order Total Discount

Retrieves an Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetOrderTotalDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrderTotalDiscountsApi(config);
            var discountId = "discountId_example";  // string | 

            try
            {
                // Retrieve an Order Total Discount
                OrderTotalDiscount result = apiInstance.GetOrderTotalDiscount(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountsApi.GetOrderTotalDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOrderTotalDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.GetOrderTotalDiscountWithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountsApi.GetOrderTotalDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** |  |  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

<a id="listordertotaldiscounts"></a>
# **ListOrderTotalDiscounts**
> ListOrderTotalDiscountsResponse ListOrderTotalDiscounts (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List all Order Total Discounts

Retrieves a list of Order Total Discounts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListOrderTotalDiscountsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrderTotalDiscountsApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (Boolean) `apply_to_commissions` - (DiscountStrategy) `discount_strategy`: GROSS or NET - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=apply_to_commissions%3D%3Dtrue` - `filter=discount_strategy%3D%3DGROSS` - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D10.0` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `apply_to_commissions` - `discount_strategy` - `discount_type` - `discount_value` - `id` - `name`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List all Order Total Discounts
                ListOrderTotalDiscountsResponse result = apiInstance.ListOrderTotalDiscounts(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountsApi.ListOrderTotalDiscounts: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOrderTotalDiscountsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all Order Total Discounts
    ApiResponse<ListOrderTotalDiscountsResponse> response = apiInstance.ListOrderTotalDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountsApi.ListOrderTotalDiscountsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOrderTotalDiscountsResponse**](ListOrderTotalDiscountsResponse.md)

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

<a id="updateordertotaldiscount"></a>
# **UpdateOrderTotalDiscount**
> OrderTotalDiscount UpdateOrderTotalDiscount (string discountId, UpdateOrderTotalDiscountRequest updateOrderTotalDiscountRequest, Object? updateMask = null)

Update an Order Total Discount

Updates an Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateOrderTotalDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrderTotalDiscountsApi(config);
            var discountId = "discountId_example";  // string | 
            var updateOrderTotalDiscountRequest = new UpdateOrderTotalDiscountRequest(); // UpdateOrderTotalDiscountRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Order Total Discount
                OrderTotalDiscount result = apiInstance.UpdateOrderTotalDiscount(discountId, updateOrderTotalDiscountRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountsApi.UpdateOrderTotalDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOrderTotalDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.UpdateOrderTotalDiscountWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountsApi.UpdateOrderTotalDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** |  |  |
| **updateOrderTotalDiscountRequest** | [**UpdateOrderTotalDiscountRequest**](UpdateOrderTotalDiscountRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

