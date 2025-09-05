# Keap.Core.V2.Api.PaymentMethodsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**DeactivatePaymentMethod**](PaymentMethodsApi.md#deactivatepaymentmethod) | **POST** /v2/contacts/{contact_id}/paymentMethods/{payment_method_id}:deactivate | Deactivate a Payment Method |
| [**DeletePaymentMethod**](PaymentMethodsApi.md#deletepaymentmethod) | **DELETE** /v2/contacts/{contact_id}/paymentMethods/{payment_method_id} | Delete a Payment Method |
| [**ListPaymentMethods**](PaymentMethodsApi.md#listpaymentmethods) | **GET** /v2/contacts/{contact_id}/paymentMethods | List of Payment Methods |

<a id="deactivatepaymentmethod"></a>
# **DeactivatePaymentMethod**
> void DeactivatePaymentMethod (string contactId, string paymentMethodId)

Deactivate a Payment Method

Deactivate the specified payment method

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeactivatePaymentMethodExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PaymentMethodsApi(config);
            var contactId = "contactId_example";  // string | ID of the contact to which the payment method belongs.
            var paymentMethodId = "paymentMethodId_example";  // string | ID of the payment method to be deactivated.

            try
            {
                // Deactivate a Payment Method
                apiInstance.DeactivatePaymentMethod(contactId, paymentMethodId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PaymentMethodsApi.DeactivatePaymentMethod: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeactivatePaymentMethodWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Deactivate a Payment Method
    apiInstance.DeactivatePaymentMethodWithHttpInfo(contactId, paymentMethodId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PaymentMethodsApi.DeactivatePaymentMethodWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | ID of the contact to which the payment method belongs. |  |
| **paymentMethodId** | **string** | ID of the payment method to be deactivated. |  |

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletepaymentmethod"></a>
# **DeletePaymentMethod**
> void DeletePaymentMethod (string contactId, string paymentMethodId)

Delete a Payment Method

Deletes the specified payment method

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeletePaymentMethodExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PaymentMethodsApi(config);
            var contactId = "contactId_example";  // string | ID of the contact to which the payment method belongs.
            var paymentMethodId = "paymentMethodId_example";  // string | ID of the payment method to be deleted.

            try
            {
                // Delete a Payment Method
                apiInstance.DeletePaymentMethod(contactId, paymentMethodId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PaymentMethodsApi.DeletePaymentMethod: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeletePaymentMethodWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Payment Method
    apiInstance.DeletePaymentMethodWithHttpInfo(contactId, paymentMethodId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PaymentMethodsApi.DeletePaymentMethodWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | ID of the contact to which the payment method belongs. |  |
| **paymentMethodId** | **string** | ID of the payment method to be deleted. |  |

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

<a id="listpaymentmethods"></a>
# **ListPaymentMethods**
> ListPaymentMethodsResponse ListPaymentMethods (string contactId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List of Payment Methods

Retrieves a list of Payment Methods

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListPaymentMethodsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PaymentMethodsApi(config);
            var contactId = "contactId_example";  // string | ID of the contact to which the payment method belongs.
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `merchant_account_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=merchant_account_id%3D%3D123`  You can filter across all contacts by using the `-` for the `contact_id` field.  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `date_created`  One of the following directions: - `desc` - `asc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List of Payment Methods
                ListPaymentMethodsResponse result = apiInstance.ListPaymentMethods(contactId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PaymentMethodsApi.ListPaymentMethods: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListPaymentMethodsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List of Payment Methods
    ApiResponse<ListPaymentMethodsResponse> response = apiInstance.ListPaymentMethodsWithHttpInfo(contactId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PaymentMethodsApi.ListPaymentMethodsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | ID of the contact to which the payment method belongs. |  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;  You can filter across all contacts by using the &#x60;-&#x60; for the &#x60;contact_id&#x60; field.  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)

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

