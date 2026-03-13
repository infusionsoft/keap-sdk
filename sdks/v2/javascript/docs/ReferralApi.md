# KeapCoreServiceV2Sdk.ReferralApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReferral**](ReferralApi.md#createReferral) | **POST** /rest/v2/referrals | Create a Referral



## createReferral

> Referral createReferral(createReferralRequest)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ReferralApi();
let createReferralRequest = new KeapCoreServiceV2Sdk.CreateReferralRequest(); // CreateReferralRequest | 
apiInstance.createReferral(createReferralRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createReferralRequest** | [**CreateReferralRequest**](CreateReferralRequest.md)|  | 

### Return type

[**Referral**](Referral.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

