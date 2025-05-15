# .TaskApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTaskCustomFieldUsingPOST1**](TaskApi.md#createTaskCustomFieldUsingPOST1) | **POST** /v2/tasks/model/customFields | Create a Custom Field
[**createTaskUsingPOST1**](TaskApi.md#createTaskUsingPOST1) | **POST** /v2/tasks | Create a Task
[**deleteTaskCustomFieldUsingDELETE**](TaskApi.md#deleteTaskCustomFieldUsingDELETE) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field
[**deleteTaskUsingDELETE1**](TaskApi.md#deleteTaskUsingDELETE1) | **DELETE** /v2/tasks/{task_id} | Delete a Task
[**getTaskUsingGET1**](TaskApi.md#getTaskUsingGET1) | **GET** /v2/tasks/{task_id} | Retrieve a Task
[**listTasksUsingGET1**](TaskApi.md#listTasksUsingGET1) | **GET** /v2/tasks | List Tasks
[**retrieveTaskModelUsingGET1**](TaskApi.md#retrieveTaskModelUsingGET1) | **GET** /v2/tasks/model | Retrieve Task Model
[**updateTaskCustomFieldUsingPATCH**](TaskApi.md#updateTaskCustomFieldUsingPATCH) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task\&#39;s Custom Field
[**updateTaskUsingPATCH**](TaskApi.md#updateTaskUsingPATCH) | **PATCH** /v2/tasks/{task_id} | Update a Task


# **createTaskCustomFieldUsingPOST1**
> CreateCustomFieldResponse createTaskCustomFieldUsingPOST1(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiCreateTaskCustomFieldUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiCreateTaskCustomFieldUsingPOST1Request = {
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

const data = await apiInstance.createTaskCustomFieldUsingPOST1(request);
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

# **createTaskUsingPOST1**
> Task createTaskUsingPOST1()

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiCreateTaskUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiCreateTaskUsingPOST1Request = {
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

const data = await apiInstance.createTaskUsingPOST1(request);
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

# **deleteTaskCustomFieldUsingDELETE**
> void deleteTaskCustomFieldUsingDELETE()

Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiDeleteTaskCustomFieldUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiDeleteTaskCustomFieldUsingDELETERequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteTaskCustomFieldUsingDELETE(request);
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

# **deleteTaskUsingDELETE1**
> void deleteTaskUsingDELETE1()

Deletes a single task

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiDeleteTaskUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiDeleteTaskUsingDELETE1Request = {
    // task_id
  taskId: "task_id_example",
};

const data = await apiInstance.deleteTaskUsingDELETE1(request);
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

# **getTaskUsingGET1**
> Task getTaskUsingGET1()

Retrieves a single task

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiGetTaskUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiGetTaskUsingGET1Request = {
    // task_id
  taskId: "task_id_example",
};

const data = await apiInstance.getTaskUsingGET1(request);
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

# **listTasksUsingGET1**
> ListTasksResponse listTasksUsingGET1()

Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiListTasksUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiListTasksUsingGET1Request = {
  
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

const data = await apiInstance.listTasksUsingGET1(request);
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

# **retrieveTaskModelUsingGET1**
> ObjectModel retrieveTaskModelUsingGET1()

Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request = {};

const data = await apiInstance.retrieveTaskModelUsingGET1(request);
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

# **updateTaskCustomFieldUsingPATCH**
> CustomFieldMetaData updateTaskCustomFieldUsingPATCH(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiUpdateTaskCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiUpdateTaskCustomFieldUsingPATCHRequest = {
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

const data = await apiInstance.updateTaskCustomFieldUsingPATCH(request);
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

# **updateTaskUsingPATCH**
> UpdateTaskResponse updateTaskUsingPATCH()

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiUpdateTaskUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiUpdateTaskUsingPATCHRequest = {
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

const data = await apiInstance.updateTaskUsingPATCH(request);
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


