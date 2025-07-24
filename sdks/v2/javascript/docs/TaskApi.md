# KeapCoreServiceV2Sdk.TaskApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTask**](TaskApi.md#createTask) | **POST** /v2/tasks | Create a Task
[**createTaskCustomField**](TaskApi.md#createTaskCustomField) | **POST** /v2/tasks/model/customFields | Create a Custom Field
[**deleteTask**](TaskApi.md#deleteTask) | **DELETE** /v2/tasks/{task_id} | Delete a Task
[**deleteTaskCustomField**](TaskApi.md#deleteTaskCustomField) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field
[**getTask**](TaskApi.md#getTask) | **GET** /v2/tasks/{task_id} | Retrieve a Task
[**listTasks**](TaskApi.md#listTasks) | **GET** /v2/tasks | List Tasks
[**retrieveTaskModel**](TaskApi.md#retrieveTaskModel) | **GET** /v2/tasks/model | Retrieve Task Model
[**updateTask**](TaskApi.md#updateTask) | **PATCH** /v2/tasks/{task_id} | Update a Task
[**updateTaskCustomField**](TaskApi.md#updateTaskCustomField) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field



## createTask

> Task createTask(opts)

Create a Task

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TaskApi();
let opts = {
  'createTaskRequest': new KeapCoreServiceV2Sdk.CreateTaskRequest() // CreateTaskRequest | task
};
apiInstance.createTask(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)| task | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTaskCustomField

> CreateCustomFieldResponse createTaskCustomField(createCustomFieldRequest)

Create a Custom Field

Creates a custom field of the specified type and options to the Task object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TaskApi();
let createCustomFieldRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createTaskCustomField(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTask

> deleteTask(taskId)

Delete a Task

Deletes a single task

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TaskApi();
let taskId = "taskId_example"; // String | task_id
apiInstance.deleteTask(taskId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTaskCustomField

> deleteTaskCustomField(customFieldId)

Delete a Custom Field

Deletes a Custom Field from the Task object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TaskApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
apiInstance.deleteTaskCustomField(customFieldId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTask

> Task getTask(taskId)

Retrieve a Task

Retrieves a single task

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TaskApi();
let taskId = "taskId_example"; // String | task_id
apiInstance.getTask(taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task_id | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTasks

> ListTasksResponse listTasks(opts)

List Tasks

Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id&#x3D;&#x3D;UNASSIGNED.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TaskApi();
let opts = {
  'endDueTime': "endDueTime_example", // String | 
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example", // String | Page token
  'startDueTime': "startDueTime_example" // String | 
};
apiInstance.listTasks(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDueTime** | **String**|  | [optional] 
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **startDueTime** | **String**|  | [optional] 

### Return type

[**ListTasksResponse**](ListTasksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveTaskModel

> ObjectModel retrieveTaskModel()

Retrieve Task Model

Get the custom fields for the Task object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TaskApi();
apiInstance.retrieveTaskModel().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTask

> UpdateTaskResponse updateTask(taskId, opts)

Update a Task

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TaskApi();
let taskId = "taskId_example"; // String | task_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'createUpdateTaskRequest': new KeapCoreServiceV2Sdk.CreateUpdateTaskRequest() // CreateUpdateTaskRequest | task
};
apiInstance.updateTask(taskId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **createUpdateTaskRequest** | [**CreateUpdateTaskRequest**](CreateUpdateTaskRequest.md)| task | [optional] 

### Return type

[**UpdateTaskResponse**](UpdateTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaskCustomField

> CustomFieldMetaData updateTaskCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Task&#39;s Custom Field

Updates a custom field of the specified type and options to the Task object.&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TaskApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateTaskCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

