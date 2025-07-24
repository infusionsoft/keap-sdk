# KeapCoreServiceV2Sdk.ShippingApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listShippingMethods**](ShippingApi.md#listShippingMethods) | **GET** /v2/shipping | List Shipping methods



## listShippingMethods

> ListRestShippingMethodsResponse listShippingMethods()

List Shipping methods

Retrieves a list of Shipping methods

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ShippingApi();
apiInstance.listShippingMethods().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListRestShippingMethodsResponse**](ListRestShippingMethodsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

