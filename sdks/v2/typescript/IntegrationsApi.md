# .IntegrationsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addIntegrationsWordPressOptIn**](IntegrationsApi.md#addIntegrationsWordPressOptIn) | **POST** /rest/v2/integrations/wordpress/options | Add a WordPress Opt-In Option
[**deleteIntegrationsWordPressOptIn**](IntegrationsApi.md#deleteIntegrationsWordPressOptIn) | **DELETE** /rest/v2/integrations/wordpress/options/{option_key} | Delete a WordPress Opt-In Option


# **addIntegrationsWordPressOptIn**
> WordPressOptInOption addIntegrationsWordPressOptIn(createIntegrationsWordPressOptInOption)

Adds a value to the list of WordPress Opt-In Options Available

### Example


```typescript
import { createConfiguration, IntegrationsApi } from '';
import type { IntegrationsApiAddIntegrationsWordPressOptInRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IntegrationsApi(configuration);

const request: IntegrationsApiAddIntegrationsWordPressOptInRequest = {
  
  createIntegrationsWordPressOptInOption: {
    key: "NewsletterOptIn",
    name: "Newsletter Opt-In",
  },
};

const data = await apiInstance.addIntegrationsWordPressOptIn(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createIntegrationsWordPressOptInOption** | **CreateIntegrationsWordPressOptInOption**|  |


### Return type

**WordPressOptInOption**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteIntegrationsWordPressOptIn**
> void deleteIntegrationsWordPressOptIn()

Deletes a value from the list of WordPress Opt-In Options Available

### Example


```typescript
import { createConfiguration, IntegrationsApi } from '';
import type { IntegrationsApiDeleteIntegrationsWordPressOptInRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IntegrationsApi(configuration);

const request: IntegrationsApiDeleteIntegrationsWordPressOptInRequest = {
  
  optionKey: "option_key_example",
};

const data = await apiInstance.deleteIntegrationsWordPressOptIn(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionKey** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


