# KeapCoreServiceV2Sdk.BusinessProfileApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBusinessProfile**](BusinessProfileApi.md#getBusinessProfile) | **GET** /v2/businessProfile | Retrieve Business Profile
[**updateBusinessProfile**](BusinessProfileApi.md#updateBusinessProfile) | **PATCH** /v2/businessProfile | Update Business Profile



## getBusinessProfile

> GetBusinessProfileResponse getBusinessProfile()

Retrieve Business Profile

Retrieves Business Profile information.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.BusinessProfileApi();
apiInstance.getBusinessProfile().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBusinessProfile

> GetBusinessProfileResponse updateBusinessProfile(opts)

Update Business Profile

Updates Business Profile information.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.BusinessProfileApi();
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'updateBusinessProfileRequest': new KeapCoreServiceV2Sdk.UpdateBusinessProfileRequest() // UpdateBusinessProfileRequest | businessProfile
};
apiInstance.updateBusinessProfile(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **updateBusinessProfileRequest** | [**UpdateBusinessProfileRequest**](UpdateBusinessProfileRequest.md)| businessProfile | [optional] 

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

