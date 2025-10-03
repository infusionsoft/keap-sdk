# KeapCoreServiceV2Sdk.ReferralApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReferral**](ReferralApi.md#createReferral) | **POST** /v2/referrals | Create a Referral



## createReferral

> Referral createReferral(createReferralRequest)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ReferralApi();
let createReferralRequest = new KeapCoreServiceV2Sdk.CreateReferralRequest(); // CreateReferralRequest | request
apiInstance.createReferral(createReferralRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createReferralRequest** | [**CreateReferralRequest**](CreateReferralRequest.md)| request | 

### Return type

[**Referral**](Referral.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

