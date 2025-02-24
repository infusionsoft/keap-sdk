# .PaymentMethodConfigApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentMethodConfigUsingPOST**](PaymentMethodConfigApi.md#createPaymentMethodConfigUsingPOST) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration


# **createPaymentMethodConfigUsingPOST**
> PaymentMethodConfig createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest)

Creates configuration details for rendering payment method components

### Example


```typescript
import { createConfiguration, PaymentMethodConfigApi } from '';
import type { PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentMethodConfigApi(configuration);

const request: PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest = {
    // request
  createPaymentMethodConfigRequest: {
    contactId: "contactId_example",
  },
};

const data = await apiInstance.createPaymentMethodConfigUsingPOST(request);
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


