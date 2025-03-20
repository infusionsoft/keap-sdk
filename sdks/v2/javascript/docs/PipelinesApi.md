# KeapCoreServiceV2Sdk.PipelinesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](PipelinesApi.md#callDelete) | **DELETE** /v2/pipelines/{id} | Deletes a pipeline.
[**create**](PipelinesApi.md#create) | **POST** /v2/pipelines | Creates a new entity.
[**get**](PipelinesApi.md#get) | **GET** /v2/pipelines/{id} | Retrieves an entity by its identifier.
[**getOutcomeLabels**](PipelinesApi.md#getOutcomeLabels) | **GET** /v2/pipelines/{id}/outcomes | Gets the outcome labels for a pipeline.
[**list**](PipelinesApi.md#list) | **GET** /v2/pipelines | Lists entities based on the provided ListCommand.
[**listStages**](PipelinesApi.md#listStages) | **GET** /v2/pipelines/{id}/stages | Retrieves a list of stages for a specific pipeline.
[**listSummaries**](PipelinesApi.md#listSummaries) | **GET** /v2/pipelines/summaries | Retrieves a list of pipeline summaries.
[**setOutcomeLabels**](PipelinesApi.md#setOutcomeLabels) | **PATCH** /v2/pipelines/{id}/outcomes | Sets the outcome labels for a pipeline.
[**update**](PipelinesApi.md#update) | **PATCH** /v2/pipelines/{id} | Updates an existing entity.



## callDelete

> callDelete(id, opts)

Deletes a pipeline.

Deletes a pipeline.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.PipelinesApi();
let id = "id_example"; // String | the pipeline identifier
let opts = {
  'allowCleanup': true, // Boolean | flag indicating whether cleanup is allowed, can be null
  'newStageId': "newStageId_example" // String | the new stage identifier, can be null
};
apiInstance.callDelete(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the pipeline identifier | 
 **allowCleanup** | **Boolean**| flag indicating whether cleanup is allowed, can be null | [optional] 
 **newStageId** | **String**| the new stage identifier, can be null | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## create

> Pipeline create(createPipelineRequest)

Creates a new entity.

Creates a new entity.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.PipelinesApi();
let createPipelineRequest = new KeapCoreServiceV2Sdk.CreatePipelineRequest(); // CreatePipelineRequest | the create request
apiInstance.create(createPipelineRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPipelineRequest** | [**CreatePipelineRequest**](CreatePipelineRequest.md)| the create request | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## get

> Pipeline get(id)

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.PipelinesApi();
let id = "id_example"; // String | the entity identifier
apiInstance.get(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the entity identifier | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOutcomeLabels

> PipelineOutcomeLabelListResponse getOutcomeLabels(id, opts)

Gets the outcome labels for a pipeline.

Gets the outcome labels for a pipeline.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.PipelinesApi();
let id = "id_example"; // String | the pipeline identifier
let opts = {
  'filter': "filter_example", // String | 
  'pageToken': "pageToken_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'pageSize': 100 // Number | 
};
apiInstance.getOutcomeLabels(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the pipeline identifier | 
 **filter** | **String**|  | [optional] 
 **pageToken** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] [default to 1000]

### Return type

[**PipelineOutcomeLabelListResponse**](PipelineOutcomeLabelListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list

> PipelineListResponse list(opts)

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.PipelinesApi();
let opts = {
  'filter': "filter_example", // String | 
  'pageToken': "pageToken_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'pageSize': 100 // Number | 
};
apiInstance.list(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**|  | [optional] 
 **pageToken** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] [default to 1000]

### Return type

[**PipelineListResponse**](PipelineListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listStages

> PipelineStageListResponse listStages(id, opts)

Retrieves a list of stages for a specific pipeline.

Retrieves a list of stages for a specific pipeline.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.PipelinesApi();
let id = "id_example"; // String | the pipeline identifier
let opts = {
  'filter': "filter_example", // String | 
  'pageToken': "pageToken_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'pageSize': 100 // Number | 
};
apiInstance.listStages(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the pipeline identifier | 
 **filter** | **String**|  | [optional] 
 **pageToken** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] [default to 1000]

### Return type

[**PipelineStageListResponse**](PipelineStageListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSummaries

> PipelineSummariesListResponse listSummaries(opts)

Retrieves a list of pipeline summaries.

Retrieves a list of pipeline summaries.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.PipelinesApi();
let opts = {
  'filter': "filter_example", // String | 
  'pageToken': "pageToken_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'pageSize': 100 // Number | 
};
apiInstance.listSummaries(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**|  | [optional] 
 **pageToken** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] [default to 1000]

### Return type

[**PipelineSummariesListResponse**](PipelineSummariesListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setOutcomeLabels

> PipelineOutcomeLabelListResponse setOutcomeLabels(id, updateOutcomeLabelsRequest)

Sets the outcome labels for a pipeline.

Sets the outcome labels for a pipeline.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.PipelinesApi();
let id = "id_example"; // String | the pipeline identifier
let updateOutcomeLabelsRequest = new KeapCoreServiceV2Sdk.UpdateOutcomeLabelsRequest(); // UpdateOutcomeLabelsRequest | the request containing the new outcome labels
apiInstance.setOutcomeLabels(id, updateOutcomeLabelsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the pipeline identifier | 
 **updateOutcomeLabelsRequest** | [**UpdateOutcomeLabelsRequest**](UpdateOutcomeLabelsRequest.md)| the request containing the new outcome labels | 

### Return type

[**PipelineOutcomeLabelListResponse**](PipelineOutcomeLabelListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update

> Pipeline update(id, updateMask, updatePipelineRequest)

Updates an existing entity.

Updates an existing entity.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.PipelinesApi();
let id = "id_example"; // String | the entity identifier
let updateMask = ["null"]; // [String] | the fields to update
let updatePipelineRequest = new KeapCoreServiceV2Sdk.UpdatePipelineRequest(); // UpdatePipelineRequest | the update request
apiInstance.update(id, updateMask, updatePipelineRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the entity identifier | 
 **updateMask** | [**[String]**](String.md)| the fields to update | 
 **updatePipelineRequest** | [**UpdatePipelineRequest**](UpdatePipelineRequest.md)| the update request | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

