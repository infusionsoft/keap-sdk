# .BusinessProfileApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBusinessProfile**](BusinessProfileApi.md#getBusinessProfile) | **GET** /rest/v2/businessProfile | Retrieve Business Profile
[**updateBusinessProfile**](BusinessProfileApi.md#updateBusinessProfile) | **PATCH** /rest/v2/businessProfile | Update Business Profile


# **getBusinessProfile**
> GetBusinessProfileResponse getBusinessProfile()

Retrieves Business Profile information.

### Example


```typescript
import { createConfiguration, BusinessProfileApi } from '';

const configuration = createConfiguration();
const apiInstance = new BusinessProfileApi(configuration);

const request = {};

const data = await apiInstance.getBusinessProfile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetBusinessProfileResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBusinessProfile**
> GetBusinessProfileResponse updateBusinessProfile(updateBusinessProfileRequest)

Updates Business Profile information.

### Example


```typescript
import { createConfiguration, BusinessProfileApi } from '';
import type { BusinessProfileApiUpdateBusinessProfileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BusinessProfileApi(configuration);

const request: BusinessProfileApiUpdateBusinessProfileRequest = {
  
  updateBusinessProfileRequest: {
    name: "name_example",
    email: "email_example",
    website: "website_example",
    phone: "phone_example",
    address: {
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      region: "Arizona",
      countryCode: "USA",
      postalCode: "postalCode_example",
    },
    currencyCode: "USD",
    businessGoals: [
      "businessGoals_example",
    ],
    businessPrimaryColor: "businessPrimaryColor_example",
    businessSecondaryColor: "businessSecondaryColor_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: `name,email,website,phone,address,currency_code,business_goals,business_primary_color,
business_secondary_color`,
};

const data = await apiInstance.updateBusinessProfile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBusinessProfileRequest** | **UpdateBusinessProfileRequest**|  |
 **updateMask** | [**&#39;name,email,website,phone,address,currency_code,business_goals,business_primary_color, business_secondary_color&#39;**]**Array<&#39;name,email,website,phone,address,currency_code,business_goals,business_primary_color, business_secondary_color&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**GetBusinessProfileResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


