# Keap.Core.V2.Api.PaymentMethodConfigsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreatePaymentMethodConfig**](PaymentMethodConfigsApi.md#createpaymentmethodconfig) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration |

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
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PaymentMethodConfigsApi(config);
            var createPaymentMethodConfigRequest = new CreatePaymentMethodConfigRequest(); // CreatePaymentMethodConfigRequest | request

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
| **createPaymentMethodConfigRequest** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md) | request |  |

### Return type

[**PaymentMethodConfig**](PaymentMethodConfig.md)

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

