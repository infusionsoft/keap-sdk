# .AutomationCategoryApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategoryUsingPOST**](AutomationCategoryApi.md#createCategoryUsingPOST) | **POST** /v2/automationCategory | Create automation category
[**deleteCategoriesUsingDELETE**](AutomationCategoryApi.md#deleteCategoriesUsingDELETE) | **DELETE** /v2/automationCategory | Delete automation category
[**listCategoriesUsingGET**](AutomationCategoryApi.md#listCategoriesUsingGET) | **GET** /v2/automationCategory | List automation categories
[**saveCategoryUsingPUT**](AutomationCategoryApi.md#saveCategoryUsingPUT) | **PUT** /v2/automationCategory | Save automation category


# **createCategoryUsingPOST**
> AutomationCategory createCategoryUsingPOST(createAutomationCategoryRequest)

Creates a single automation category

### Example


```typescript
import { createConfiguration, AutomationCategoryApi } from '';
import type { AutomationCategoryApiCreateCategoryUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationCategoryApi(configuration);

const request: AutomationCategoryApiCreateCategoryUsingPOSTRequest = {
    // createAutomationCategoryRequest
  createAutomationCategoryRequest: {
    name: "name_example",
  },
};

const data = await apiInstance.createCategoryUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAutomationCategoryRequest** | **CreateAutomationCategoryRequest**| createAutomationCategoryRequest |


### Return type

**AutomationCategory**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCategoriesUsingDELETE**
> void deleteCategoriesUsingDELETE()

Deletes one or more automation categories based on the request parameters

### Example


```typescript
import { createConfiguration, AutomationCategoryApi } from '';
import type { AutomationCategoryApiDeleteCategoriesUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationCategoryApi(configuration);

const request: AutomationCategoryApiDeleteCategoriesUsingDELETERequest = {
    // ids
  ids: [
    1,
  ],
};

const data = await apiInstance.deleteCategoriesUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **Array&lt;number&gt;** | ids | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCategoriesUsingGET**
> ListAutomationCategoryResponse listCategoriesUsingGET()

Retrieves a list of automation categories

### Example


```typescript
import { createConfiguration, AutomationCategoryApi } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationCategoryApi(configuration);

const request = {};

const data = await apiInstance.listCategoriesUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListAutomationCategoryResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **saveCategoryUsingPUT**
> AutomationCategory saveCategoryUsingPUT(saveAutomationCategoryRequest)

Creates or updates a single automation category

### Example


```typescript
import { createConfiguration, AutomationCategoryApi } from '';
import type { AutomationCategoryApiSaveCategoryUsingPUTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationCategoryApi(configuration);

const request: AutomationCategoryApiSaveCategoryUsingPUTRequest = {
    // saveAutomationCategoryRequest
  saveAutomationCategoryRequest: {
    id: 1,
    name: "name_example",
  },
};

const data = await apiInstance.saveCategoryUsingPUT(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **saveAutomationCategoryRequest** | **SaveAutomationCategoryRequest**| saveAutomationCategoryRequest |


### Return type

**AutomationCategory**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


