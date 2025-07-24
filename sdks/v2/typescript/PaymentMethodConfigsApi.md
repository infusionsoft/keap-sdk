# .PaymentMethodConfigsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentMethodConfig**](PaymentMethodConfigsApi.md#createPaymentMethodConfig) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration


# **createPaymentMethodConfig**
> PaymentMethodConfig createPaymentMethodConfig(createPaymentMethodConfigRequest)

Creates configuration details for rendering payment method components

### Example


```typescript
import { createConfiguration, PaymentMethodConfigsApi } from '';
import type { PaymentMethodConfigsApiCreatePaymentMethodConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentMethodConfigsApi(configuration);

const request: PaymentMethodConfigsApiCreatePaymentMethodConfigRequest = {
    // request
  createPaymentMethodConfigRequest: {
    contactId: "contactId_example",
  },
};

const data = await apiInstance.createPaymentMethodConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentMethodConfigRequest** | **CreatePaymentMethodConfigRequest**| request |


### Return type

**PaymentMethodConfig**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


