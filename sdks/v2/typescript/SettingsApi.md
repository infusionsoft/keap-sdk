# .SettingsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationConfigurationsUsingGET**](SettingsApi.md#getApplicationConfigurationsUsingGET) | **GET** /v2/settings/applications:getConfiguration | Get Application Configuration
[**getContactOptionTypesUsingGET1**](SettingsApi.md#getContactOptionTypesUsingGET1) | **GET** /v2/settings/contactOptionTypes | Get Contact Option types
[**isApplicationEnabledUsingGET**](SettingsApi.md#isApplicationEnabledUsingGET) | **GET** /v2/settings/applications:isEnabled | Get Application Status


# **getApplicationConfigurationsUsingGET**
> GetSettingsResponse getApplicationConfigurationsUsingGET()

Get configuration values for the application instance.

### Example


```typescript
import { createConfiguration, SettingsApi } from '';
import type { SettingsApiGetApplicationConfigurationsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SettingsApi(configuration);

const request: SettingsApiGetApplicationConfigurationsUsingGETRequest = {
    // By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional)
  fields: [
    "AFFILIATE",
  ],
};

const data = await apiInstance.getApplicationConfigurationsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Array<&#39;AFFILIATE&#39; &#124; &#39;APPOINTMENT&#39; &#124; &#39;CONTACT&#39; &#124; &#39;ECOMMERCE&#39; &#124; &#39;EMAIL&#39; &#124; &#39;FORMS&#39; &#124; &#39;FULFILLMENT&#39; &#124; &#39;INVOICE&#39; &#124; &#39;NOTE&#39; &#124; &#39;OPPORTUNITY&#39; &#124; &#39;TASK&#39; &#124; &#39;TEMPLATE&#39;>** | By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. | (optional) defaults to undefined


### Return type

**GetSettingsResponse**

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

# **getContactOptionTypesUsingGET1**
> GetContactOptionTypesResponse getContactOptionTypesUsingGET1()

Gets a list of Contact Option types.

### Example


```typescript
import { createConfiguration, SettingsApi } from '';

const configuration = createConfiguration();
const apiInstance = new SettingsApi(configuration);

const request = {};

const data = await apiInstance.getContactOptionTypesUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetContactOptionTypesResponse**

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

# **isApplicationEnabledUsingGET**
> GetApplicationEnabledStatusResponse isApplicationEnabledUsingGET()

Check if the application is enabled or not

### Example


```typescript
import { createConfiguration, SettingsApi } from '';

const configuration = createConfiguration();
const apiInstance = new SettingsApi(configuration);

const request = {};

const data = await apiInstance.isApplicationEnabledUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetApplicationEnabledStatusResponse**

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


