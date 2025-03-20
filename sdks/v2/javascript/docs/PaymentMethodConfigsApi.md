# KeapCoreServiceV2Sdk.PaymentMethodConfigsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentMethodConfigUsingPOST**](PaymentMethodConfigsApi.md#createPaymentMethodConfigUsingPOST) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration



## createPaymentMethodConfigUsingPOST

> PaymentMethodConfig createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.PaymentMethodConfigsApi();
let createPaymentMethodConfigRequest = new KeapCoreServiceV2Sdk.CreatePaymentMethodConfigRequest(); // CreatePaymentMethodConfigRequest | request
apiInstance.createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentMethodConfigRequest** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md)| request | 

### Return type

[**PaymentMethodConfig**](PaymentMethodConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

