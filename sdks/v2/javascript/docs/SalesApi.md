# KeapCoreServiceV2Sdk.SalesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setMerchantGatewayAsDefault**](SalesApi.md#setMerchantGatewayAsDefault) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account



## setMerchantGatewayAsDefault

> setMerchantGatewayAsDefault(id)

Set default Merchant Account

Sets the specified Merchant Account as the default Merchant Account.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.SalesApi();
let id = "id_example"; // String | id
apiInstance.setMerchantGatewayAsDefault(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

