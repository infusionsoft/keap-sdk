# .ReferralApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReferral**](ReferralApi.md#createReferral) | **POST** /v2/referrals | Create a Referral


# **createReferral**
> Referral createReferral(createReferralRequest)

Creates a new referral partner referral on the provided contact

### Example


```typescript
import { createConfiguration, ReferralApi } from '';
import type { ReferralApiCreateReferralRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReferralApi(configuration);

const request: ReferralApiCreateReferralRequest = {
    // request
  createReferralRequest: {
    contactId: "contactId_example",
    description: "description_example",
    expirationTime: "expirationTime_example",
    ipAddress: "ipAddress_example",
    referralPartnerId: "referralPartnerId_example",
    referralTime: "referralTime_example",
    referralType: "COOKIE",
    source: "source_example",
  },
};

const data = await apiInstance.createReferral(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createReferralRequest** | **CreateReferralRequest**| request |


### Return type

**Referral**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


