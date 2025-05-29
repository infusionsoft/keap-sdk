# .StagesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countDealsInStage**](StagesApi.md#countDealsInStage) | **GET** /v2/stages/{id}/dealCount | Counts the number of deals in a specific stage.
[**create1**](StagesApi.md#create1) | **POST** /v2/stages | Creates a new entity.
[**delete1**](StagesApi.md#delete1) | **DELETE** /v2/stages/{id} | Deletes a stage by its identifier for a given tenant.
[**get1**](StagesApi.md#get1) | **GET** /v2/stages/{id} | Retrieves an entity by its identifier.
[**list1**](StagesApi.md#list1) | **GET** /v2/stages | Lists entities based on the provided ListCommand.
[**listStageDeals**](StagesApi.md#listStageDeals) | **GET** /v2/stages/{id}/deals | Retrieves a list of deals for a specific stage.
[**update1**](StagesApi.md#update1) | **PATCH** /v2/stages/{id} | Updates an existing entity.


# **countDealsInStage**
> number countDealsInStage()

Counts the number of deals in a specific stage.

### Example


```typescript
import { createConfiguration, StagesApi } from '';
import type { StagesApiCountDealsInStageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StagesApi(configuration);

const request: StagesApiCountDealsInStageRequest = {
    // the stage identifier
  id: "id_example",
};

const data = await apiInstance.countDealsInStage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the stage identifier | defaults to undefined


### Return type

**number**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the count of deals in the stage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **create1**
> Stage create1(createStageRequest)

Creates a new entity.

### Example


```typescript
import { createConfiguration, StagesApi } from '';
import type { StagesApiCreate1Request } from '';

const configuration = createConfiguration();
const apiInstance = new StagesApi(configuration);

const request: StagesApiCreate1Request = {
    // the create request
  createStageRequest: {
    name: "name_example",
    pipelineId: "pipelineId_example",
  },
};

const data = await apiInstance.create1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStageRequest** | **CreateStageRequest**| the create request |


### Return type

**Stage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The create_1d entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **delete1**
> void delete1()

Deletes a stage by its identifier for a given tenant.

### Example


```typescript
import { createConfiguration, StagesApi } from '';
import type { StagesApiDelete1Request } from '';

const configuration = createConfiguration();
const apiInstance = new StagesApi(configuration);

const request: StagesApiDelete1Request = {
    // the stage identifier
  id: "id_example",
    // the new stage identifier, can be null (optional)
  newStageId: "new_stage_id_example",
};

const data = await apiInstance.delete1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the stage identifier | defaults to undefined
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

# **get1**
> Stage get1()

Retrieves an entity by its identifier.

### Example


```typescript
import { createConfiguration, StagesApi } from '';
import type { StagesApiGet1Request } from '';

const configuration = createConfiguration();
const apiInstance = new StagesApi(configuration);

const request: StagesApiGet1Request = {
    // the entity identifier
  id: "id_example",
};

const data = await apiInstance.get1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the entity identifier | defaults to undefined


### Return type

**Stage**

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

# **list1**
> StageListResponse list1()

Lists entities based on the provided ListCommand.

### Example


```typescript
import { createConfiguration, StagesApi } from '';
import type { StagesApiList1Request } from '';

const configuration = createConfiguration();
const apiInstance = new StagesApi(configuration);

const request: StagesApiList1Request = {
  
  filter: "filter_example",
  
  pageToken: "page_token_example",
  
  orderBy: "order_by_example",
  
  pageSize: 100,
};

const data = await apiInstance.list1(request);
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

**StageListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a response containing the list_1 of entities |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listStageDeals**
> StageDealListResponse listStageDeals()

Retrieves a list of deals for a specific stage.

### Example


```typescript
import { createConfiguration, StagesApi } from '';
import type { StagesApiListStageDealsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StagesApi(configuration);

const request: StagesApiListStageDealsRequest = {
    // the stage identifier
  id: "id_example",
  
  filter: "filter_example",
  
  pageToken: "page_token_example",
  
  orderBy: "order_by_example",
  
  pageSize: 100,
};

const data = await apiInstance.listStageDeals(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the stage identifier | defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **pageToken** | [**string**] |  | (optional) defaults to undefined
 **orderBy** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 1000


### Return type

**StageDealListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the response containing the list of deals and the next page token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update1**
> Stage update1(updateStageRequest)

Updates an existing entity.

### Example


```typescript
import { createConfiguration, StagesApi } from '';
import type { StagesApiUpdate1Request } from '';

const configuration = createConfiguration();
const apiInstance = new StagesApi(configuration);

const request: StagesApiUpdate1Request = {
    // the entity identifier
  id: "id_example",
    // the fields to update
  updateMask: [
    "update_mask_example",
  ],
    // the update request
  updateStageRequest: {
    name: "name_example",
    previousStageId: "previousStageId_example",
    nextStageId: "nextStageId_example",
    pipelineId: "pipelineId_example",
  },
};

const data = await apiInstance.update1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStageRequest** | **UpdateStageRequest**| the update request |
 **id** | [**string**] | the entity identifier | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | the fields to update | defaults to undefined


### Return type

**Stage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The update_1d entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


