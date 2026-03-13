# KeapCoreServiceV2Sdk.PaymentMethodConfigsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentMethodConfig**](PaymentMethodConfigsApi.md#createPaymentMethodConfig) | **POST** /rest/v2/paymentMethodConfigs | Create Payment Method Configuration



## createPaymentMethodConfig

> PaymentMethodConfig createPaymentMethodConfig(createPaymentMethodConfigRequest)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.PaymentMethodConfigsApi();
let createPaymentMethodConfigRequest = new KeapCoreServiceV2Sdk.CreatePaymentMethodConfigRequest(); // CreatePaymentMethodConfigRequest | 
apiInstance.createPaymentMethodConfig(createPaymentMethodConfigRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentMethodConfigRequest** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md)|  | 

### Return type

[**PaymentMethodConfig**](PaymentMethodConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

