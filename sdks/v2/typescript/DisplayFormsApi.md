# .DisplayFormsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDisplayForm**](DisplayFormsApi.md#getDisplayForm) | **GET** /v2/pipelines/{pipeline_id}/form | Retrieves a specific display form by a pipeline ID.
[**updateDisplayForm**](DisplayFormsApi.md#updateDisplayForm) | **PATCH** /v2/pipelines/{pipeline_id}/form | Updates a display form


# **getDisplayForm**
> DisplayForm getDisplayForm()

Retrieves a specific display form by a pipeline ID.

### Example


```typescript
import { createConfiguration, DisplayFormsApi } from '';
import type { DisplayFormsApiGetDisplayFormRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DisplayFormsApi(configuration);

const request: DisplayFormsApiGetDisplayFormRequest = {
    // the ID of the pipeline containing the form
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.getDisplayForm(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pipelineId** | [**string**] | the ID of the pipeline containing the form | defaults to undefined


### Return type

**DisplayForm**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the requested Deal |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDisplayForm**
> DisplayForm updateDisplayForm(updateDisplayFormRequest)

Updates a display form

### Example


```typescript
import { createConfiguration, DisplayFormsApi } from '';
import type { DisplayFormsApiUpdateDisplayFormRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DisplayFormsApi(configuration);

const request: DisplayFormsApiUpdateDisplayFormRequest = {
    // the ID of the pipeline containing the form
  pipelineId: "pipeline_id_example",
    // the request body containing updated display form details
  updateDisplayFormRequest: {
    groups: [
      {
        sortOrder: 1,
        title: "title_example",
        description: "description_example",
        properties: [
          {
            sortOrder: 1,
            id: "id_example",
            source: null,
            systemFieldRecord: "systemFieldRecord_example",
            systemFieldId: "systemFieldId_example",
            label: "label_example",
            description: "description_example",
            helperText: "helperText_example",
            defaultValue: null,
            displayOptions: null,
          },
        ],
      },
    ],
  },
};

const data = await apiInstance.updateDisplayForm(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDisplayFormRequest** | **UpdateDisplayFormRequest**| the request body containing updated display form details |
 **pipelineId** | [**string**] | the ID of the pipeline containing the form | defaults to undefined


### Return type

**DisplayForm**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the updated DisplayForm |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


