# Keap.Core.V2.Api.SalesApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ListPayments**](SalesApi.md#listpayments) | **GET** /rest/v2/sales/payments | List Payments |
| [**ListTransactions**](SalesApi.md#listtransactions) | **GET** /rest/v2/sales/transactions | List Transactions |
| [**SetMerchantGatewayAsDefault**](SalesApi.md#setmerchantgatewayasdefault) | **POST** /rest/v2/sales/merchants/{id}:setDefault | Set default Merchant Account |

<a id="listpayments"></a>
# **ListPayments**
> ListPayments ListPayments (string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

List Payments

Retrieves a list of payments

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListPaymentsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SalesApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `id` - (String) `amount` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `order_id` - (String) `contact_id` - (String) `since_time` - (String) `until_time` - (String) `merchant_account_id` - (String) `merchant_account_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=order_id%3D%3D123%3Bcontact_id%3D%3D567` (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `id` - `amount` - `payment_time` - `contact_id`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 

            try
            {
                // List Payments
                ListPayments result = apiInstance.ListPayments(filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SalesApi.ListPayments: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListPaymentsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Payments
    ApiResponse<ListPayments> response = apiInstance.ListPaymentsWithHttpInfo(filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SalesApi.ListPaymentsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;amount&#x60; - &#x60;payment_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |

### Return type

[**ListPayments**](ListPayments.md)

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

<a id="listtransactions"></a>
# **ListTransactions**
> ListTransactions ListTransactions (string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

List Transactions

Retrieves a list of sales transactions

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListTransactionsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SalesApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `amount` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `order_id` - (String) `contact_id` - (String) `since_time` - (String) `until_time` - (String) `merchant_account_id` - (String) `merchant_account_type` - (String) `status` - (String) `transaction_method` - (String) `is_successful`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=order_id%3D%3D123` - `filter=order_id%3D%3D123%3Bcontact_id%3D%3D567` (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `amount` - `transaction_time` - `contact_id`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 

            try
            {
                // List Transactions
                ListTransactions result = apiInstance.ListTransactions(filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SalesApi.ListTransactions: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListTransactionsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Transactions
    ApiResponse<ListTransactions> response = apiInstance.ListTransactionsWithHttpInfo(filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SalesApi.ListTransactionsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60; - (String) &#x60;status&#x60; - (String) &#x60;transaction_method&#x60; - (String) &#x60;is_successful&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;order_id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;amount&#x60; - &#x60;transaction_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |

### Return type

[**ListTransactions**](ListTransactions.md)

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

<a id="setmerchantgatewayasdefault"></a>
# **SetMerchantGatewayAsDefault**
> void SetMerchantGatewayAsDefault (string id)

Set default Merchant Account

Sets the specified Merchant Account as the default Merchant Account.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class SetMerchantGatewayAsDefaultExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SalesApi(config);
            var id = "id_example";  // string | 

            try
            {
                // Set default Merchant Account
                apiInstance.SetMerchantGatewayAsDefault(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SalesApi.SetMerchantGatewayAsDefault: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SetMerchantGatewayAsDefaultWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Set default Merchant Account
    apiInstance.SetMerchantGatewayAsDefaultWithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SalesApi.SetMerchantGatewayAsDefaultWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** |  |  |

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

