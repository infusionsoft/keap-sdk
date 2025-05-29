# .CustomFieldsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomFields**](CustomFieldsApi.md#getCustomFields) | **GET** /v2/customFields | Retrieves a list of custom fields in a tenant.
[**updateCustomField**](CustomFieldsApi.md#updateCustomField) | **PATCH** /v2/customFields/{id} | Updates a custom field


# **getCustomFields**
> PipelineCustomFields getCustomFields()

Retrieves a list of custom fields in a tenant.

### Example


```typescript
import { createConfiguration, CustomFieldsApi } from '';
import type { CustomFieldsApiGetCustomFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomFieldsApi(configuration);

const request: CustomFieldsApiGetCustomFieldsRequest = {
  
  filter: "filter_example",
  
  pageToken: "page_token_example",
  
  orderBy: "order_by_example",
  
  pageSize: 100,
};

const data = await apiInstance.getCustomFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] |  | (optional) defaults to undefined
 **pageToken** | [**string**] |  | (optional) defaults to undefined
 **orderBy** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 1000


### Return type

**PipelineCustomFields**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of PipelineCustomFields |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCustomField**
> PipelineCustomField updateCustomField(updateCustomFieldRequest)

Updates a custom field

### Example


```typescript
import { createConfiguration, CustomFieldsApi } from '';
import type { CustomFieldsApiUpdateCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomFieldsApi(configuration);

const request: CustomFieldsApiUpdateCustomFieldRequest = {
    // the identifier of the custom field to update
  id: "id_example",
    // the request body containing updated custom field details
  updateCustomFieldRequest: {
    label: "label_example",
    description: "description_example",
    hint: "hint_example",
    helperText: "helperText_example",
    defaultValue: {},
    displayOptions: null,
    options: null,
    validators: [
      {
        size: null,
        required: true,
      },
    ],
    deleted: true,
  },
};

const data = await apiInstance.updateCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldRequest** | **UpdateCustomFieldRequest**| the request body containing updated custom field details |
 **id** | [**string**] | the identifier of the custom field to update | defaults to undefined


### Return type

**PipelineCustomField**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the updated PipelineCustomField |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


