# KeapCoreServiceV2Sdk.BusinessProfileApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBusinessProfile**](BusinessProfileApi.md#getBusinessProfile) | **GET** /rest/v2/businessProfile | Retrieve Business Profile
[**updateBusinessProfile**](BusinessProfileApi.md#updateBusinessProfile) | **PATCH** /rest/v2/businessProfile | Update Business Profile



## getBusinessProfile

> GetBusinessProfileResponse getBusinessProfile()

Retrieve Business Profile

Retrieves Business Profile information.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

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

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBusinessProfile

> GetBusinessProfileResponse updateBusinessProfile(updateBusinessProfileRequest, opts)

Update Business Profile

Updates Business Profile information.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.BusinessProfileApi();
let updateBusinessProfileRequest = new KeapCoreServiceV2Sdk.UpdateBusinessProfileRequest(); // UpdateBusinessProfileRequest | 
let opts = {
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateBusinessProfile(updateBusinessProfileRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBusinessProfileRequest** | [**UpdateBusinessProfileRequest**](UpdateBusinessProfileRequest.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

