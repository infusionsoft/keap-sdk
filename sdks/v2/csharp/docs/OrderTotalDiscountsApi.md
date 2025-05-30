# Keap.Core.V2.Api.OrderTotalDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateOrderTotalDiscountUsingPOST**](OrderTotalDiscountsApi.md#createordertotaldiscountusingpost) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount |
| [**DeleteOrderTotalDiscountUsingDELETE**](OrderTotalDiscountsApi.md#deleteordertotaldiscountusingdelete) | **DELETE** /v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount |
| [**GetOrderTotalDiscountUsingGET**](OrderTotalDiscountsApi.md#getordertotaldiscountusingget) | **GET** /v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount |
| [**ListOrderTotalDiscountsUsingGET**](OrderTotalDiscountsApi.md#listordertotaldiscountsusingget) | **GET** /v2/discounts/orderTotals | List all Order Total Discounts |
| [**UpdateOrderTotalDiscountUsingPATCH**](OrderTotalDiscountsApi.md#updateordertotaldiscountusingpatch) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount |

<a id="createordertotaldiscountusingpost"></a>
# **CreateOrderTotalDiscountUsingPOST**
> OrderTotalDiscount CreateOrderTotalDiscountUsingPOST (CreateOrderTotalDiscountRequest createOrderTotalDiscountRequest)

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
    public class CreateOrderTotalDiscountUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrderTotalDiscountsApi(config);
            var createOrderTotalDiscountRequest = new CreateOrderTotalDiscountRequest(); // CreateOrderTotalDiscountRequest | request

            try
            {
                // Create an Order Total Discount
                OrderTotalDiscount result = apiInstance.CreateOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountsApi.CreateOrderTotalDiscountUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOrderTotalDiscountUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.CreateOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountsApi.CreateOrderTotalDiscountUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createOrderTotalDiscountRequest** | [**CreateOrderTotalDiscountRequest**](CreateOrderTotalDiscountRequest.md) | request |  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

<a id="deleteordertotaldiscountusingdelete"></a>
# **DeleteOrderTotalDiscountUsingDELETE**
> void DeleteOrderTotalDiscountUsingDELETE (string discountId)

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
    public class DeleteOrderTotalDiscountUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrderTotalDiscountsApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Delete an Order Total Discount
                apiInstance.DeleteOrderTotalDiscountUsingDELETE(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountsApi.DeleteOrderTotalDiscountUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOrderTotalDiscountUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Order Total Discount
    apiInstance.DeleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountsApi.DeleteOrderTotalDiscountUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

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

<a id="getordertotaldiscountusingget"></a>
# **GetOrderTotalDiscountUsingGET**
> OrderTotalDiscount GetOrderTotalDiscountUsingGET (string discountId)

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
    public class GetOrderTotalDiscountUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrderTotalDiscountsApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Retrieve an Order Total Discount
                OrderTotalDiscount result = apiInstance.GetOrderTotalDiscountUsingGET(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountsApi.GetOrderTotalDiscountUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOrderTotalDiscountUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.GetOrderTotalDiscountUsingGETWithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountsApi.GetOrderTotalDiscountUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

<a id="listordertotaldiscountsusingget"></a>
# **ListOrderTotalDiscountsUsingGET**
> ListOrderTotalDiscountsResponse ListOrderTotalDiscountsUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

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
    public class ListOrderTotalDiscountsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrderTotalDiscountsApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (Boolean) `apply_to_commissions` - (DiscountStrategy) `discount_strategy`: GROSS or NET - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=apply_to_commissions%3D%3Dtrue` - `filter=discount_strategy%3D%3DGROSS` - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D10.0` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `apply_to_commissions` - `discount_strategy` - `discount_type` - `discount_value` - `id`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List all Order Total Discounts
                ListOrderTotalDiscountsResponse result = apiInstance.ListOrderTotalDiscountsUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountsApi.ListOrderTotalDiscountsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOrderTotalDiscountsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all Order Total Discounts
    ApiResponse<ListOrderTotalDiscountsResponse> response = apiInstance.ListOrderTotalDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountsApi.ListOrderTotalDiscountsUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOrderTotalDiscountsResponse**](ListOrderTotalDiscountsResponse.md)

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

<a id="updateordertotaldiscountusingpatch"></a>
# **UpdateOrderTotalDiscountUsingPATCH**
> OrderTotalDiscount UpdateOrderTotalDiscountUsingPATCH (string discountId, UpdateOrderTotalDiscountRequest updateOrderTotalDiscountRequest, List<string>? updateMask = null)

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
    public class UpdateOrderTotalDiscountUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrderTotalDiscountsApi(config);
            var discountId = "discountId_example";  // string | discount_id
            var updateOrderTotalDiscountRequest = new UpdateOrderTotalDiscountRequest(); // UpdateOrderTotalDiscountRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Order Total Discount
                OrderTotalDiscount result = apiInstance.UpdateOrderTotalDiscountUsingPATCH(discountId, updateOrderTotalDiscountRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountsApi.UpdateOrderTotalDiscountUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOrderTotalDiscountUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.UpdateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountsApi.UpdateOrderTotalDiscountUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |
| **updateOrderTotalDiscountRequest** | [**UpdateOrderTotalDiscountRequest**](UpdateOrderTotalDiscountRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

