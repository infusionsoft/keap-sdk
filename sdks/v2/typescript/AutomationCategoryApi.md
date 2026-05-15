# .AutomationCategoryApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](AutomationCategoryApi.md#createCategory) | **POST** /rest/v2/automationCategory | Create automation category
[**deleteCategories**](AutomationCategoryApi.md#deleteCategories) | **DELETE** /rest/v2/automationCategory | Delete automation category
[**listCategories**](AutomationCategoryApi.md#listCategories) | **GET** /rest/v2/automationCategory | List automation categories
[**patchCategory**](AutomationCategoryApi.md#patchCategory) | **PATCH** /rest/v2/automationCategory/{id} | Update automation category


# **createCategory**
> AutomationCategory createCategory(createAutomationCategoryRequest)

Creates a single automation category

### Example


```typescript
import { createConfiguration, AutomationCategoryApi } from '';
import type { AutomationCategoryApiCreateCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationCategoryApi(configuration);

const request: AutomationCategoryApiCreateCategoryRequest = {
  
  createAutomationCategoryRequest: {
    name: "Marketing Campaigns",
  },
};

const data = await apiInstance.createCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAutomationCategoryRequest** | **CreateAutomationCategoryRequest**|  |


### Return type

**AutomationCategory**

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

# **deleteCategories**
> void deleteCategories()

Deletes one or more automation categories based on the request parameters

### Example


```typescript
import { createConfiguration, AutomationCategoryApi } from '';
import type { AutomationCategoryApiDeleteCategoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationCategoryApi(configuration);

const request: AutomationCategoryApiDeleteCategoriesRequest = {
  
  ids: [
    1,
  ],
};

const data = await apiInstance.deleteCategories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **Array&lt;number&gt;** |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCategories**
> ListAutomationCategoryResponse listCategories()

Retrieves a list of automation categories

### Example


```typescript
import { createConfiguration, AutomationCategoryApi } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationCategoryApi(configuration);

const request = {};

const data = await apiInstance.listCategories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListAutomationCategoryResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCategory**
> AutomationCategory patchCategory(patchAutomationCategoryRequest)

Updates part of a single automation category

### Example


```typescript
import { createConfiguration, AutomationCategoryApi } from '';
import type { AutomationCategoryApiPatchCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationCategoryApi(configuration);

const request: AutomationCategoryApiPatchCategoryRequest = {
  
  id: "id_example",
  
  patchAutomationCategoryRequest: {
    name: "Marketing Campaigns",
  },
};

const data = await apiInstance.patchCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchAutomationCategoryRequest** | **PatchAutomationCategoryRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**AutomationCategory**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


