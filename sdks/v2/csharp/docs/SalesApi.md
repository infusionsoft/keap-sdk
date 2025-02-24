# Keap.Core.V2.Api.SalesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**SetMerchantGatewayAsDefaultUsingPOST**](SalesApi.md#setmerchantgatewayasdefaultusingpost) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account |

<a id="setmerchantgatewayasdefaultusingpost"></a>
# **SetMerchantGatewayAsDefaultUsingPOST**
> void SetMerchantGatewayAsDefaultUsingPOST (string id)

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
    public class SetMerchantGatewayAsDefaultUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SalesApi(config);
            var id = "id_example";  // string | id

            try
            {
                // Set default Merchant Account
                apiInstance.SetMerchantGatewayAsDefaultUsingPOST(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SalesApi.SetMerchantGatewayAsDefaultUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SetMerchantGatewayAsDefaultUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Set default Merchant Account
    apiInstance.SetMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SalesApi.SetMerchantGatewayAsDefaultUsingPOSTWithHttpInfo: " + e.Message);
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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

