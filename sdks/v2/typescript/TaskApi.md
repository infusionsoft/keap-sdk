# .TaskApi

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
[**updateTaskCustomField**](TaskApi.md#updateTaskCustomField) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task\&#39;s Custom Field


# **createTask**
> Task createTask()

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiCreateTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiCreateTaskRequest = {
    // task (optional)
  createTaskRequest: {
    assignedToUserId: "assignedToUserId_example",
    completed: true,
    completionTime: "completionTime_example",
    contactId: "contactId_example",
    description: "description_example",
    dueTime: "dueTime_example",
    priority: "CRITICAL",
    remindTimeMins: 1,
    title: "title_example",
    type: "EMAIL",
  },
};

const data = await apiInstance.createTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTaskRequest** | **CreateTaskRequest**| task |


### Return type

**Task**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTaskCustomField**
> CreateCustomFieldResponse createTaskCustomField(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiCreateTaskCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiCreateTaskCustomFieldRequest = {
    // customField
  createCustomFieldRequest: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createTaskCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**| customField |


### Return type

**CreateCustomFieldResponse**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTask**
> void deleteTask()

Deletes a single task

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiDeleteTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiDeleteTaskRequest = {
    // task_id
  taskId: "task_id_example",
};

const data = await apiInstance.deleteTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] | task_id | defaults to undefined


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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTaskCustomField**
> void deleteTaskCustomField()

Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiDeleteTaskCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiDeleteTaskCustomFieldRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteTaskCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined


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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTask**
> Task getTask()

Retrieves a single task

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiGetTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiGetTaskRequest = {
    // task_id
  taskId: "task_id_example",
};

const data = await apiInstance.getTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] | task_id | defaults to undefined


### Return type

**Task**

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

# **listTasks**
> ListTasksResponse listTasks()

Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiListTasksRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiListTasksRequest = {
  
  endDueTime: "end_due_time_example",
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
  
  startDueTime: "start_due_time_example",
};

const data = await apiInstance.listTasks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDueTime** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **startDueTime** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListTasksResponse**

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

# **retrieveTaskModel**
> ObjectModel retrieveTaskModel()

Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request = {};

const data = await apiInstance.retrieveTaskModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

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

# **updateTask**
> UpdateTaskResponse updateTask()

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiUpdateTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiUpdateTaskRequest = {
    // task_id
  taskId: "task_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "id",
  ],
    // task (optional)
  createUpdateTaskRequest: {
    assignedToUserId: "assignedToUserId_example",
    completed: true,
    completionTime: "completionTime_example",
    contactId: "contactId_example",
    description: "description_example",
    dueTime: "dueTime_example",
    priority: "CRITICAL",
    remindTimeMins: 1,
    title: "title_example",
    type: "EMAIL",
  },
};

const data = await apiInstance.updateTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTaskRequest** | **CreateUpdateTaskRequest**| task |
 **taskId** | [**string**] | task_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**UpdateTaskResponse**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTaskCustomField**
> CustomFieldMetaData updateTaskCustomField(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiUpdateTaskCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiUpdateTaskCustomFieldRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  updateCustomFieldMetaDataRequest: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateTaskCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


