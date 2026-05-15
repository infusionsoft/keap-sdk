# .ReferralApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReferral**](ReferralApi.md#createReferral) | **POST** /rest/v2/referrals | Create a Referral


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
  
  createReferralRequest: {
    description: "Referred via email campaign",
    source: "Email Marketing",
    contactId: "123",
    referralPartnerId: "456",
    referralTime: new Date('2024-05-21T14:30:00Z'),
    expirationTime: new Date('2024-08-21T14:30:00Z'),
    ipAddress: "192.168.1.100",
    referralType: "COOKIE",
  },
};

const data = await apiInstance.createReferral(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createReferralRequest** | **CreateReferralRequest**|  |


### Return type

**Referral**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


