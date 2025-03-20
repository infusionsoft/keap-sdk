# .PipelinesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](PipelinesApi.md#_delete) | **DELETE** /v2/pipelines/{id} | Deletes a pipeline.
[**create**](PipelinesApi.md#create) | **POST** /v2/pipelines | Creates a new entity.
[**get**](PipelinesApi.md#get) | **GET** /v2/pipelines/{id} | Retrieves an entity by its identifier.
[**getOutcomeLabels**](PipelinesApi.md#getOutcomeLabels) | **GET** /v2/pipelines/{id}/outcomes | Gets the outcome labels for a pipeline.
[**list**](PipelinesApi.md#list) | **GET** /v2/pipelines | Lists entities based on the provided ListCommand.
[**listStages**](PipelinesApi.md#listStages) | **GET** /v2/pipelines/{id}/stages | Retrieves a list of stages for a specific pipeline.
[**listSummaries**](PipelinesApi.md#listSummaries) | **GET** /v2/pipelines/summaries | Retrieves a list of pipeline summaries.
[**setOutcomeLabels**](PipelinesApi.md#setOutcomeLabels) | **PATCH** /v2/pipelines/{id}/outcomes | Sets the outcome labels for a pipeline.
[**update**](PipelinesApi.md#update) | **PATCH** /v2/pipelines/{id} | Updates an existing entity.


# **_delete**
> void _delete()

Deletes a pipeline.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiDeleteRequest = {
    // the pipeline identifier
  id: "id_example",
    // flag indicating whether cleanup is allowed, can be null (optional)
  allowCleanup: true,
    // the new stage identifier, can be null (optional)
  newStageId: "new_stage_id_example",
};

const data = await apiInstance._delete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the pipeline identifier | defaults to undefined
 **allowCleanup** | [**boolean**] | flag indicating whether cleanup is allowed, can be null | (optional) defaults to undefined
 **newStageId** | [**string**] | the new stage identifier, can be null | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | A response indicating no content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **create**
> Pipeline create(createPipelineRequest)

Creates a new entity.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiCreateRequest = {
    // the create request
  createPipelineRequest: {
    name: "name_example",
    stages: [
      "stages_example",
    ],
  },
};

const data = await apiInstance.create(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPipelineRequest** | **CreatePipelineRequest**| the create request |


### Return type

**Pipeline**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **get**
> Pipeline get()

Retrieves an entity by its identifier.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetRequest = {
    // the entity identifier
  id: "id_example",
};

const data = await apiInstance.get(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the entity identifier | defaults to undefined


### Return type

**Pipeline**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOutcomeLabels**
> PipelineOutcomeLabelListResponse getOutcomeLabels()

Gets the outcome labels for a pipeline.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetOutcomeLabelsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetOutcomeLabelsRequest = {
    // the pipeline identifier
  id: "id_example",
  
  filter: "filter_example",
  
  pageToken: "page_token_example",
  
  orderBy: "order_by_example",
  
  pageSize: 100,
};

const data = await apiInstance.getOutcomeLabels(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the pipeline identifier | defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **pageToken** | [**string**] |  | (optional) defaults to undefined
 **orderBy** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 1000


### Return type

**PipelineOutcomeLabelListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the updated list of the pipeline\&#39;s outcome labels |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **list**
> PipelineListResponse list()

Lists entities based on the provided ListCommand.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiListRequest = {
  
  filter: "filter_example",
  
  pageToken: "page_token_example",
  
  orderBy: "order_by_example",
  
  pageSize: 100,
};

const data = await apiInstance.list(request);
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

**PipelineListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a response containing the list of entities |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listStages**
> PipelineStageListResponse listStages()

Retrieves a list of stages for a specific pipeline.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiListStagesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiListStagesRequest = {
    // the pipeline identifier
  id: "id_example",
  
  filter: "filter_example",
  
  pageToken: "page_token_example",
  
  orderBy: "order_by_example",
  
  pageSize: 100,
};

const data = await apiInstance.listStages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the pipeline identifier | defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **pageToken** | [**string**] |  | (optional) defaults to undefined
 **orderBy** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 1000


### Return type

**PipelineStageListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the response containing the list of pipeline stages and the next page token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSummaries**
> PipelineSummariesListResponse listSummaries()

Retrieves a list of pipeline summaries.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiListSummariesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiListSummariesRequest = {
  
  filter: "filter_example",
  
  pageToken: "page_token_example",
  
  orderBy: "order_by_example",
  
  pageSize: 100,
};

const data = await apiInstance.listSummaries(request);
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

**PipelineSummariesListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the response containing the list of pipeline summaries and the next page token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setOutcomeLabels**
> PipelineOutcomeLabelListResponse setOutcomeLabels(updateOutcomeLabelsRequest)

Sets the outcome labels for a pipeline.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiSetOutcomeLabelsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiSetOutcomeLabelsRequest = {
    // the pipeline identifier
  id: "id_example",
    // the request containing the new outcome labels
  updateOutcomeLabelsRequest: {
    outcomeLabels: [
      {
        value: null,
        label: "label_example",
      },
    ],
  },
};

const data = await apiInstance.setOutcomeLabels(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOutcomeLabelsRequest** | **UpdateOutcomeLabelsRequest**| the request containing the new outcome labels |
 **id** | [**string**] | the pipeline identifier | defaults to undefined


### Return type

**PipelineOutcomeLabelListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the updated list of the pipeline\&#39;s outcome labels |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update**
> Pipeline update(updatePipelineRequest)

Updates an existing entity.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiUpdateRequest = {
    // the entity identifier
  id: "id_example",
    // the fields to update
  updateMask: [
    "update_mask_example",
  ],
    // the update request
  updatePipelineRequest: {
    name: "name_example",
  },
};

const data = await apiInstance.update(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePipelineRequest** | **UpdatePipelineRequest**| the update request |
 **id** | [**string**] | the entity identifier | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | the fields to update | defaults to undefined


### Return type

**Pipeline**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


