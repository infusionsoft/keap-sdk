# .BusinessProfileApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBusinessProfileUsingGET**](BusinessProfileApi.md#getBusinessProfileUsingGET) | **GET** /v2/businessProfile | Retrieve Business Profile
[**updateBusinessProfileUsingPATCH**](BusinessProfileApi.md#updateBusinessProfileUsingPATCH) | **PATCH** /v2/businessProfile | Update Business Profile


# **getBusinessProfileUsingGET**
> GetBusinessProfileResponse getBusinessProfileUsingGET()

Retrieves Business Profile information.

### Example


```typescript
import { createConfiguration, BusinessProfileApi } from '';

const configuration = createConfiguration();
const apiInstance = new BusinessProfileApi(configuration);

const request = {};

const data = await apiInstance.getBusinessProfileUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetBusinessProfileResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBusinessProfileUsingPATCH**
> GetBusinessProfileResponse updateBusinessProfileUsingPATCH()

Updates Business Profile information.

### Example


```typescript
import { createConfiguration, BusinessProfileApi } from '';
import type { BusinessProfileApiUpdateBusinessProfileUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BusinessProfileApi(configuration);

const request: BusinessProfileApiUpdateBusinessProfileUsingPATCHRequest = {
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
    // businessProfile (optional)
  updateBusinessProfileRequest: {
    address: {
      countryCode: "USA",
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      postalCode: "postalCode_example",
      region: "Arizona",
    },
    businessGoals: [
      "businessGoals_example",
    ],
    businessPrimaryColor: "businessPrimaryColor_example",
    businessSecondaryColor: "businessSecondaryColor_example",
    currencyCode: "USD",
    email: "email_example",
    name: "name_example",
    phone: "phone_example",
    website: "website_example",
  },
};

const data = await apiInstance.updateBusinessProfileUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBusinessProfileRequest** | **UpdateBusinessProfileRequest**| businessProfile |
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**GetBusinessProfileResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


