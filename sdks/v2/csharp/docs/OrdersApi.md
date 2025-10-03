# Keap.Core.V2.Api.OrdersApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ApplyCommissionOnOrderItems**](OrdersApi.md#applycommissiononorderitems) | **POST** /v2/orders/{order_id}/items/{order_item_id}:applyCommission | Apply Commission to an Order Item |
| [**ApplyTax**](OrdersApi.md#applytax) | **POST** /v2/orders/{order_id}:applyTax | Apply Taxes on an Order |
| [**AttachFileToOrder**](OrdersApi.md#attachfiletoorder) | **POST** /v2/orders/{order_id}:attachFile | Attach a File to an Order Invoice |
| [**CreateOrder**](OrdersApi.md#createorder) | **POST** /v2/orders | Create an Order |
| [**CreateOrderCustomField**](OrdersApi.md#createordercustomfield) | **POST** /v2/orders/model/customFields | Create an Order Custom Field |
| [**CreateOrderItem**](OrdersApi.md#createorderitem) | **POST** /v2/orders/{order_id}/items | Create an Order Item |
| [**CreatePaymentForAnOrder**](OrdersApi.md#createpaymentforanorder) | **POST** /v2/orders/{order_id}/payments | Create a Payment |
| [**DeleteOrder**](OrdersApi.md#deleteorder) | **DELETE** /v2/orders/{order_id} | Delete an Order |
| [**DeleteOrderCustomField**](OrdersApi.md#deleteordercustomfield) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order Custom Field |
| [**DeleteOrderItem**](OrdersApi.md#deleteorderitem) | **DELETE** /v2/orders/{order_id}/items/{order_item_id} | Delete an Order Item |
| [**DetachFileFromOrder**](OrdersApi.md#detachfilefromorder) | **POST** /v2/orders/{order_id}:detachFile | Detach a File from an Order Invoice |
| [**GetOrder**](OrdersApi.md#getorder) | **GET** /v2/orders/{order_id} | Retrieve an Order |
| [**ListOrderPayments**](OrdersApi.md#listorderpayments) | **GET** /v2/orders/{order_id}/payments | Retrieve Order Payments |
| [**ListOrders**](OrdersApi.md#listorders) | **GET** /v2/orders | List orders |
| [**RetrieveOrderCustomFieldModel**](OrdersApi.md#retrieveordercustomfieldmodel) | **GET** /v2/orders/model | Retrieve Order Custom Field Model |
| [**UpdateOrder**](OrdersApi.md#updateorder) | **PATCH** /v2/orders/{order_id} | Update an Order |
| [**UpdateOrderCustomField**](OrdersApi.md#updateordercustomfield) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order Custom Field |
| [**UpdateOrderItem**](OrdersApi.md#updateorderitem) | **PATCH** /v2/orders/{order_id}/items/{order_item_id} | Update an Order Item |

<a id="applycommissiononorderitems"></a>
# **ApplyCommissionOnOrderItems**
> OrderItem ApplyCommissionOnOrderItems (string orderId, string orderItemId, RestApplyCommissionRequest restApplyCommissionRequest)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id
            var orderItemId = "orderItemId_example";  // string | order_item_id
            var restApplyCommissionRequest = new RestApplyCommissionRequest(); // RestApplyCommissionRequest | request

            try
            {
                // Apply Commission to an Order Item
                OrderItem result = apiInstance.ApplyCommissionOnOrderItems(orderId, orderItemId, restApplyCommissionRequest);
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
    ApiResponse<OrderItem> response = apiInstance.ApplyCommissionOnOrderItemsWithHttpInfo(orderId, orderItemId, restApplyCommissionRequest);
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
| **orderId** | **string** | order_id |  |
| **orderItemId** | **string** | order_item_id |  |
| **restApplyCommissionRequest** | [**RestApplyCommissionRequest**](RestApplyCommissionRequest.md) | request |  |

### Return type

[**OrderItem**](OrderItem.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="applytax"></a>
# **ApplyTax**
> Order ApplyTax (string orderId)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id

            try
            {
                // Apply Taxes on an Order
                Order result = apiInstance.ApplyTax(orderId);
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
    ApiResponse<Order> response = apiInstance.ApplyTaxWithHttpInfo(orderId);
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
| **orderId** | **string** | order_id |  |

### Return type

[**Order**](Order.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="attachfiletoorder"></a>
# **AttachFileToOrder**
> Order AttachFileToOrder (string orderId, FileOperationRequest fileOperationRequest)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id
            var fileOperationRequest = new FileOperationRequest(); // FileOperationRequest | File name

            try
            {
                // Attach a File to an Order Invoice
                Order result = apiInstance.AttachFileToOrder(orderId, fileOperationRequest);
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
    ApiResponse<Order> response = apiInstance.AttachFileToOrderWithHttpInfo(orderId, fileOperationRequest);
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
| **orderId** | **string** | order_id |  |
| **fileOperationRequest** | [**FileOperationRequest**](FileOperationRequest.md) | File name |  |

### Return type

[**Order**](Order.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createorder"></a>
# **CreateOrder**
> Order CreateOrder (RestCreateOrderRequest restCreateOrderRequest)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var restCreateOrderRequest = new RestCreateOrderRequest(); // RestCreateOrderRequest | request

            try
            {
                // Create an Order
                Order result = apiInstance.CreateOrder(restCreateOrderRequest);
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
    ApiResponse<Order> response = apiInstance.CreateOrderWithHttpInfo(restCreateOrderRequest);
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
| **restCreateOrderRequest** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md) | request |  |

### Return type

[**Order**](Order.md)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) | customField |  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id
            var createOrderItemRequest = new CreateOrderItemRequest(); // CreateOrderItemRequest | request

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
| **orderId** | **string** | order_id |  |
| **createOrderItemRequest** | [**CreateOrderItemRequest**](CreateOrderItemRequest.md) | request |  |

### Return type

[**OrderItem**](OrderItem.md)

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

<a id="createpaymentforanorder"></a>
# **CreatePaymentForAnOrder**
> PaymentResult CreatePaymentForAnOrder (string orderId, CreatePaymentRequest createPaymentRequest)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id
            var createPaymentRequest = new CreatePaymentRequest(); // CreatePaymentRequest | request

            try
            {
                // Create a Payment
                PaymentResult result = apiInstance.CreatePaymentForAnOrder(orderId, createPaymentRequest);
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
    ApiResponse<PaymentResult> response = apiInstance.CreatePaymentForAnOrderWithHttpInfo(orderId, createPaymentRequest);
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
| **orderId** | **string** | order_id |  |
| **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md) | request |  |

### Return type

[**PaymentResult**](PaymentResult.md)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id

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
| **orderId** | **string** | order_id |  |

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id

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
| **customFieldId** | **string** | custom_field_id |  |

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id
            var orderItemId = "orderItemId_example";  // string | order_item_id

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
| **orderId** | **string** | order_id |  |
| **orderItemId** | **string** | order_item_id |  |

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

<a id="detachfilefromorder"></a>
# **DetachFileFromOrder**
> Order DetachFileFromOrder (string orderId, FileOperationRequest fileOperationRequest)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id
            var fileOperationRequest = new FileOperationRequest(); // FileOperationRequest | request

            try
            {
                // Detach a File from an Order Invoice
                Order result = apiInstance.DetachFileFromOrder(orderId, fileOperationRequest);
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
    ApiResponse<Order> response = apiInstance.DetachFileFromOrderWithHttpInfo(orderId, fileOperationRequest);
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
| **orderId** | **string** | order_id |  |
| **fileOperationRequest** | [**FileOperationRequest**](FileOperationRequest.md) | request |  |

### Return type

[**Order**](Order.md)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getorder"></a>
# **GetOrder**
> Order GetOrder (string orderId)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id

            try
            {
                // Retrieve an Order
                Order result = apiInstance.GetOrder(orderId);
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
    ApiResponse<Order> response = apiInstance.GetOrderWithHttpInfo(orderId);
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
| **orderId** | **string** | order_id |  |

### Return type

[**Order**](Order.md)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id
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
| **orderId** | **string** | order_id |  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;invoice_id&#x60; - (String) &#x60;payment_id&#x60; - (String) &#x60;amount&#x60; - (String) &#x60;pay_status&#x60; - (Boolean) &#x60;skip_commission&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;payment_id&#x60; - &#x60;amount&#x60; - &#x60;pay_time&#x60; - &#x60;pay_status&#x60; - &#x60;skip_commission&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOrderPaymentsResponse**](ListOrderPaymentsResponse.md)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `product_id` - (String) `contact_id` - (Boolean) `paid` - (String) `created_since_time` - (String) `created_until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567` (optional) 
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
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOrders**](ListOrders.md)

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
            config.BasePath = "https://api.keap.com/crm/rest";
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

<a id="updateorder"></a>
# **UpdateOrder**
> Order UpdateOrder (string orderId, List<string>? updateMask = null, UpdateOrderRequest? updateOrderRequest = null)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var updateOrderRequest = new UpdateOrderRequest?(); // UpdateOrderRequest? | order (optional) 

            try
            {
                // Update an Order
                Order result = apiInstance.UpdateOrder(orderId, updateMask, updateOrderRequest);
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
    ApiResponse<Order> response = apiInstance.UpdateOrderWithHttpInfo(orderId, updateMask, updateOrderRequest);
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
| **orderId** | **string** | order_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **updateOrderRequest** | [**UpdateOrderRequest?**](UpdateOrderRequest?.md) | order | [optional]  |

### Return type

[**Order**](Order.md)

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

<a id="updateordercustomfield"></a>
# **UpdateOrderCustomField**
> CustomFieldMetaData UpdateOrderCustomField (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, List<string>? updateMask = null)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

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
| **customFieldId** | **string** | custom_field_id |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

<a id="updateorderitem"></a>
# **UpdateOrderItem**
> OrderItem UpdateOrderItem (string orderId, string orderItemId, List<string>? updateMask = null, UpdateOrderItemRequest? updateOrderItemRequest = null)

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id
            var orderItemId = "orderItemId_example";  // string | order_item_id
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var updateOrderItemRequest = new UpdateOrderItemRequest?(); // UpdateOrderItemRequest? | order (optional) 

            try
            {
                // Update an Order Item
                OrderItem result = apiInstance.UpdateOrderItem(orderId, orderItemId, updateMask, updateOrderItemRequest);
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
    ApiResponse<OrderItem> response = apiInstance.UpdateOrderItemWithHttpInfo(orderId, orderItemId, updateMask, updateOrderItemRequest);
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
| **orderId** | **string** | order_id |  |
| **orderItemId** | **string** | order_item_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **updateOrderItemRequest** | [**UpdateOrderItemRequest?**](UpdateOrderItemRequest?.md) | order | [optional]  |

### Return type

[**OrderItem**](OrderItem.md)

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

