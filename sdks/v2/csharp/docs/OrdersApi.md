# Keap.Core.V2.Api.OrdersApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ApplyCommissionOnOrderItems**](OrdersApi.md#applycommissiononorderitems) | **POST** /rest/v2/orders/{order_id}/items/{order_item_id}:applyCommission | Apply Commission to an Order Item |
| [**ApplyTax**](OrdersApi.md#applytax) | **POST** /rest/v2/orders/{order_id}:applyTax | Apply Taxes on an Order |
| [**AttachFileToOrder**](OrdersApi.md#attachfiletoorder) | **POST** /rest/v2/orders/{order_id}:attachFile | Attach a File to an Order Invoice |
| [**CreateOrder**](OrdersApi.md#createorder) | **POST** /rest/v2/orders | Create an Order |
| [**CreateOrderCustomField**](OrdersApi.md#createordercustomfield) | **POST** /rest/v2/orders/model/customFields | Create an Order Custom Field |
| [**CreateOrderItem**](OrdersApi.md#createorderitem) | **POST** /rest/v2/orders/{order_id}/items | Create an Order Item |
| [**CreatePaymentForAnOrder**](OrdersApi.md#createpaymentforanorder) | **POST** /rest/v2/orders/{order_id}/payments | Create a Payment |
| [**DeleteOrder**](OrdersApi.md#deleteorder) | **DELETE** /rest/v2/orders/{order_id} | Delete an Order |
| [**DeleteOrderCustomField**](OrdersApi.md#deleteordercustomfield) | **DELETE** /rest/v2/orders/model/customFields/{custom_field_id} | Delete an Order Custom Field |
| [**DeleteOrderItem**](OrdersApi.md#deleteorderitem) | **DELETE** /rest/v2/orders/{order_id}/items/{order_item_id} | Delete an Order Item |
| [**DetachFileFromOrder**](OrdersApi.md#detachfilefromorder) | **POST** /rest/v2/orders/{order_id}:detachFile | Detach a File from an Order Invoice |
| [**GetOrder**](OrdersApi.md#getorder) | **GET** /rest/v2/orders/{order_id} | Retrieve an Order |
| [**ListOrderPayments**](OrdersApi.md#listorderpayments) | **GET** /rest/v2/orders/{order_id}/payments | Retrieve Order Payments |
| [**ListOrders**](OrdersApi.md#listorders) | **GET** /rest/v2/orders | List orders |
| [**RetrieveOrderCustomFieldModel**](OrdersApi.md#retrieveordercustomfieldmodel) | **GET** /rest/v2/orders/model | Retrieve Order Custom Field Model |
| [**UpdateOrder**](OrdersApi.md#updateorder) | **PATCH** /rest/v2/orders/{order_id} | Update an Order |
| [**UpdateOrderCustomField**](OrdersApi.md#updateordercustomfield) | **PATCH** /rest/v2/orders/model/customFields/{custom_field_id} | Update an Order Custom Field |
| [**UpdateOrderItem**](OrdersApi.md#updateorderitem) | **PATCH** /rest/v2/orders/{order_id}/items/{order_item_id} | Update an Order Item |

<a id="applycommissiononorderitems"></a>
# **ApplyCommissionOnOrderItems**
> OrderItem ApplyCommissionOnOrderItems (string orderId, string orderItemId, ApplyCommissionRequest applyCommissionRequest)

Apply Commission to an Order Item

Applies commission to an order item on an existing order.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ApplyCommissionOnOrderItemsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 
            var orderItemId = "orderItemId_example";  // string | 
            var applyCommissionRequest = new ApplyCommissionRequest(); // ApplyCommissionRequest | 

            try
            {
                // Apply Commission to an Order Item
                OrderItem result = apiInstance.ApplyCommissionOnOrderItems(orderId, orderItemId, applyCommissionRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.ApplyCommissionOnOrderItems: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ApplyCommissionOnOrderItemsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Apply Commission to an Order Item
    ApiResponse<OrderItem> response = apiInstance.ApplyCommissionOnOrderItemsWithHttpInfo(orderId, orderItemId, applyCommissionRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.ApplyCommissionOnOrderItemsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |
| **orderItemId** | **string** |  |  |
| **applyCommissionRequest** | [**ApplyCommissionRequest**](ApplyCommissionRequest.md) |  |  |

### Return type

[**OrderItem**](OrderItem.md)

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

<a id="applytax"></a>
# **ApplyTax**
> OrderV2 ApplyTax (string orderId)

Apply Taxes on an Order

Calculate taxes for a single Order for a given order id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ApplyTaxExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 

            try
            {
                // Apply Taxes on an Order
                OrderV2 result = apiInstance.ApplyTax(orderId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.ApplyTax: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ApplyTaxWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Apply Taxes on an Order
    ApiResponse<OrderV2> response = apiInstance.ApplyTaxWithHttpInfo(orderId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.ApplyTaxWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |

### Return type

[**OrderV2**](OrderV2.md)

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

<a id="attachfiletoorder"></a>
# **AttachFileToOrder**
> OrderV2 AttachFileToOrder (string orderId, FileOperationRequest fileOperationRequest)

Attach a File to an Order Invoice

Attaches an uploaded File to an Order Invoice

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AttachFileToOrderExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 
            var fileOperationRequest = new FileOperationRequest(); // FileOperationRequest | 

            try
            {
                // Attach a File to an Order Invoice
                OrderV2 result = apiInstance.AttachFileToOrder(orderId, fileOperationRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.AttachFileToOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AttachFileToOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Attach a File to an Order Invoice
    ApiResponse<OrderV2> response = apiInstance.AttachFileToOrderWithHttpInfo(orderId, fileOperationRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.AttachFileToOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |
| **fileOperationRequest** | [**FileOperationRequest**](FileOperationRequest.md) |  |  |

### Return type

[**OrderV2**](OrderV2.md)

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

<a id="createorder"></a>
# **CreateOrder**
> OrderV2 CreateOrder (RestCreateOrderRequest restCreateOrderRequest)

Create an Order

Creates a one time Order with Order items

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateOrderExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var restCreateOrderRequest = new RestCreateOrderRequest(); // RestCreateOrderRequest | 

            try
            {
                // Create an Order
                OrderV2 result = apiInstance.CreateOrder(restCreateOrderRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.CreateOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Order
    ApiResponse<OrderV2> response = apiInstance.CreateOrderWithHttpInfo(restCreateOrderRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.CreateOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **restCreateOrderRequest** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md) |  |  |

### Return type

[**OrderV2**](OrderV2.md)

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

<a id="createordercustomfield"></a>
# **CreateOrderCustomField**
> CustomFieldMetaData CreateOrderCustomField (CreateCustomFieldRequest createCustomFieldRequest)

Create an Order Custom Field

Creates a custom field of the specified type and options to the Order object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateOrderCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 

            try
            {
                // Create an Order Custom Field
                CustomFieldMetaData result = apiInstance.CreateOrderCustomField(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.CreateOrderCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOrderCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Order Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateOrderCustomFieldWithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.CreateOrderCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) |  |  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

<a id="createorderitem"></a>
# **CreateOrderItem**
> OrderItem CreateOrderItem (string orderId, CreateOrderItemRequest createOrderItemRequest)

Create an Order Item

Creates an order item on an existing order

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateOrderItemExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 
            var createOrderItemRequest = new CreateOrderItemRequest(); // CreateOrderItemRequest | 

            try
            {
                // Create an Order Item
                OrderItem result = apiInstance.CreateOrderItem(orderId, createOrderItemRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.CreateOrderItem: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOrderItemWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Order Item
    ApiResponse<OrderItem> response = apiInstance.CreateOrderItemWithHttpInfo(orderId, createOrderItemRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.CreateOrderItemWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |
| **createOrderItemRequest** | [**CreateOrderItemRequest**](CreateOrderItemRequest.md) |  |  |

### Return type

[**OrderItem**](OrderItem.md)

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

<a id="createpaymentforanorder"></a>
# **CreatePaymentForAnOrder**
> PaymentResult CreatePaymentForAnOrder (string orderId, RestCreatePaymentRequest restCreatePaymentRequest)

Create a Payment

Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreatePaymentForAnOrderExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 
            var restCreatePaymentRequest = new RestCreatePaymentRequest(); // RestCreatePaymentRequest | 

            try
            {
                // Create a Payment
                PaymentResult result = apiInstance.CreatePaymentForAnOrder(orderId, restCreatePaymentRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.CreatePaymentForAnOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreatePaymentForAnOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Payment
    ApiResponse<PaymentResult> response = apiInstance.CreatePaymentForAnOrderWithHttpInfo(orderId, restCreatePaymentRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.CreatePaymentForAnOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |
| **restCreatePaymentRequest** | [**RestCreatePaymentRequest**](RestCreatePaymentRequest.md) |  |  |

### Return type

[**PaymentResult**](PaymentResult.md)

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

<a id="deleteorder"></a>
# **DeleteOrder**
> void DeleteOrder (string orderId)

Delete an Order

Deletes an Order<br/> Note: The Order must not have any transactions recorded to be available for deletion. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteOrderExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 

            try
            {
                // Delete an Order
                apiInstance.DeleteOrder(orderId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.DeleteOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Order
    apiInstance.DeleteOrderWithHttpInfo(orderId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.DeleteOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |

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

<a id="deleteordercustomfield"></a>
# **DeleteOrderCustomField**
> void DeleteOrderCustomField (string customFieldId)

Delete an Order Custom Field

Deletes a Custom Field from the Order object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteOrderCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var customFieldId = "customFieldId_example";  // string | 

            try
            {
                // Delete an Order Custom Field
                apiInstance.DeleteOrderCustomField(customFieldId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.DeleteOrderCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOrderCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Order Custom Field
    apiInstance.DeleteOrderCustomFieldWithHttpInfo(customFieldId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.DeleteOrderCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** |  |  |

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

<a id="deleteorderitem"></a>
# **DeleteOrderItem**
> void DeleteOrderItem (string orderId, string orderItemId)

Delete an Order Item

Deletes an order item on an existing order

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteOrderItemExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 
            var orderItemId = "orderItemId_example";  // string | 

            try
            {
                // Delete an Order Item
                apiInstance.DeleteOrderItem(orderId, orderItemId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.DeleteOrderItem: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOrderItemWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Order Item
    apiInstance.DeleteOrderItemWithHttpInfo(orderId, orderItemId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.DeleteOrderItemWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |
| **orderItemId** | **string** |  |  |

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

<a id="detachfilefromorder"></a>
# **DetachFileFromOrder**
> OrderV2 DetachFileFromOrder (string orderId, FileOperationRequest fileOperationRequest)

Detach a File from an Order Invoice

Detaches a File from an Order Invoice

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DetachFileFromOrderExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 
            var fileOperationRequest = new FileOperationRequest(); // FileOperationRequest | 

            try
            {
                // Detach a File from an Order Invoice
                OrderV2 result = apiInstance.DetachFileFromOrder(orderId, fileOperationRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.DetachFileFromOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DetachFileFromOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Detach a File from an Order Invoice
    ApiResponse<OrderV2> response = apiInstance.DetachFileFromOrderWithHttpInfo(orderId, fileOperationRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.DetachFileFromOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |
| **fileOperationRequest** | [**FileOperationRequest**](FileOperationRequest.md) |  |  |

### Return type

[**OrderV2**](OrderV2.md)

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

<a id="getorder"></a>
# **GetOrder**
> OrderV2 GetOrder (string orderId)

Retrieve an Order

Retrieves a single Order for a given order id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetOrderExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 

            try
            {
                // Retrieve an Order
                OrderV2 result = apiInstance.GetOrder(orderId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.GetOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Order
    ApiResponse<OrderV2> response = apiInstance.GetOrderWithHttpInfo(orderId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.GetOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |

### Return type

[**OrderV2**](OrderV2.md)

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

<a id="listorderpayments"></a>
# **ListOrderPayments**
> ListOrderPaymentsResponse ListOrderPayments (string orderId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

Retrieve Order Payments

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListOrderPaymentsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `invoice_id` - (String) `payment_id` - (String) `amount` - (String) `pay_status` - (Boolean) `skip_commission`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=payment_id%3D%3D123` - `filter=pay_status%3D%3DAPPROVED` - `filter=invoice_id%3D%3D456%3Bskip_commission=true`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `invoice_id` - `payment_id` - `amount` - `pay_time` - `pay_status` - `skip_commission` - `last_updated_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // Retrieve Order Payments
                ListOrderPaymentsResponse result = apiInstance.ListOrderPayments(orderId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.ListOrderPayments: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOrderPaymentsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Order Payments
    ApiResponse<ListOrderPaymentsResponse> response = apiInstance.ListOrderPaymentsWithHttpInfo(orderId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.ListOrderPaymentsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;invoice_id&#x60; - (String) &#x60;payment_id&#x60; - (String) &#x60;amount&#x60; - (String) &#x60;pay_status&#x60; - (Boolean) &#x60;skip_commission&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;payment_id&#x60; - &#x60;amount&#x60; - &#x60;pay_time&#x60; - &#x60;pay_status&#x60; - &#x60;skip_commission&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOrderPaymentsResponse**](ListOrderPaymentsResponse.md)

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

<a id="listorders"></a>
# **ListOrders**
> ListOrders ListOrders (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List orders

Retrieves a list of orders

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListOrdersExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `product_id` - (String) `contact_id` - (String) `invoice_xid` - (Boolean) `paid` - (String) `created_since_time` - (String) `created_until_time` - (String) `title` - (String) `order_type` (Allowed values: `ONLINE`, `OFFLINE`) - (String) `shipping_locality` - (String) `shipping_region_code` - (String) `shipping_postal_code` - (String) `shipping_country_code`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=invoice_xid%3D%3Df411a79c-9a92-4960-91d9-656f910a25e8` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567` - `filter=title%3D%3DOrder` - `filter=order_type%3D%3DONLINE` - `filter=shipping_locality%3D%3DPhoenix` - `filter=shipping_region_code%3D%3DIN-MH` - `filter=shipping_postal_code%3D%3D85001` - `filter=shipping_country_code%3D%3DIND` (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `id` - `order_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List orders
                ListOrders result = apiInstance.ListOrders(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.ListOrders: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOrdersWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List orders
    ApiResponse<ListOrders> response = apiInstance.ListOrdersWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.ListOrdersWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;invoice_xid&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; - (String) &#x60;title&#x60; - (String) &#x60;order_type&#x60; (Allowed values: &#x60;ONLINE&#x60;, &#x60;OFFLINE&#x60;) - (String) &#x60;shipping_locality&#x60; - (String) &#x60;shipping_region_code&#x60; - (String) &#x60;shipping_postal_code&#x60; - (String) &#x60;shipping_country_code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;invoice_xid%3D%3Df411a79c-9a92-4960-91d9-656f910a25e8&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; - &#x60;filter&#x3D;title%3D%3DOrder&#x60; - &#x60;filter&#x3D;order_type%3D%3DONLINE&#x60; - &#x60;filter&#x3D;shipping_locality%3D%3DPhoenix&#x60; - &#x60;filter&#x3D;shipping_region_code%3D%3DIN-MH&#x60; - &#x60;filter&#x3D;shipping_postal_code%3D%3D85001&#x60; - &#x60;filter&#x3D;shipping_country_code%3D%3DIND&#x60; | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOrders**](ListOrders.md)

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

<a id="retrieveordercustomfieldmodel"></a>
# **RetrieveOrderCustomFieldModel**
> ObjectModel RetrieveOrderCustomFieldModel ()

Retrieve Order Custom Field Model

Gets the custom fields for the Order object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RetrieveOrderCustomFieldModelExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);

            try
            {
                // Retrieve Order Custom Field Model
                ObjectModel result = apiInstance.RetrieveOrderCustomFieldModel();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.RetrieveOrderCustomFieldModel: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveOrderCustomFieldModelWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Order Custom Field Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveOrderCustomFieldModelWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.RetrieveOrderCustomFieldModelWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ObjectModel**](ObjectModel.md)

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

<a id="updateorder"></a>
# **UpdateOrder**
> OrderV2 UpdateOrder (string orderId, UpdateOrderRequest updateOrderRequest, Object? updateMask = null)

Update an Order

Updates an Order

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateOrderExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 
            var updateOrderRequest = new UpdateOrderRequest(); // UpdateOrderRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Order
                OrderV2 result = apiInstance.UpdateOrder(orderId, updateOrderRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.UpdateOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Order
    ApiResponse<OrderV2> response = apiInstance.UpdateOrderWithHttpInfo(orderId, updateOrderRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.UpdateOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |
| **updateOrderRequest** | [**UpdateOrderRequest**](UpdateOrderRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**OrderV2**](OrderV2.md)

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

<a id="updateordercustomfield"></a>
# **UpdateOrderCustomField**
> CustomFieldMetaData UpdateOrderCustomField (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, Object? updateMask = null)

Update an Order Custom Field

Updates a custom field of the specified type and options to the Order object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateOrderCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var customFieldId = "customFieldId_example";  // string | 
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Order Custom Field
                CustomFieldMetaData result = apiInstance.UpdateOrderCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.UpdateOrderCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOrderCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Order Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateOrderCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.UpdateOrderCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** |  |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

<a id="updateorderitem"></a>
# **UpdateOrderItem**
> OrderItem UpdateOrderItem (string orderId, string orderItemId, UpdateOrderItemRequest updateOrderItemRequest, Object? updateMask = null)

Update an Order Item

Updates an Order Item

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateOrderItemExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | 
            var orderItemId = "orderItemId_example";  // string | 
            var updateOrderItemRequest = new UpdateOrderItemRequest(); // UpdateOrderItemRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Order Item
                OrderItem result = apiInstance.UpdateOrderItem(orderId, orderItemId, updateOrderItemRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.UpdateOrderItem: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOrderItemWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Order Item
    ApiResponse<OrderItem> response = apiInstance.UpdateOrderItemWithHttpInfo(orderId, orderItemId, updateOrderItemRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.UpdateOrderItemWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** |  |  |
| **orderItemId** | **string** |  |  |
| **updateOrderItemRequest** | [**UpdateOrderItemRequest**](UpdateOrderItemRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**OrderItem**](OrderItem.md)

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

