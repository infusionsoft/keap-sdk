# Keap.Core.V2.Api.PaymentMethodConfigsApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreatePaymentMethodConfig**](PaymentMethodConfigsApi.md#createpaymentmethodconfig) | **POST** /rest/v2/paymentMethodConfigs | Create Payment Method Configuration |

<a id="createpaymentmethodconfig"></a>
# **CreatePaymentMethodConfig**
> PaymentMethodConfig CreatePaymentMethodConfig (CreatePaymentMethodConfigRequest createPaymentMethodConfigRequest)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreatePaymentMethodConfigExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new PaymentMethodConfigsApi(config);
            var createPaymentMethodConfigRequest = new CreatePaymentMethodConfigRequest(); // CreatePaymentMethodConfigRequest | 

            try
            {
                // Create Payment Method Configuration
                PaymentMethodConfig result = apiInstance.CreatePaymentMethodConfig(createPaymentMethodConfigRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PaymentMethodConfigsApi.CreatePaymentMethodConfig: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreatePaymentMethodConfigWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Payment Method Configuration
    ApiResponse<PaymentMethodConfig> response = apiInstance.CreatePaymentMethodConfigWithHttpInfo(createPaymentMethodConfigRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PaymentMethodConfigsApi.CreatePaymentMethodConfigWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createPaymentMethodConfigRequest** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md) |  |  |

### Return type

[**PaymentMethodConfig**](PaymentMethodConfig.md)

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

