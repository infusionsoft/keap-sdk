# .TaskApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTask**](TaskApi.md#createTask) | **POST** /rest/v2/tasks | Create a Task
[**createTaskCustomField**](TaskApi.md#createTaskCustomField) | **POST** /rest/v2/tasks/model/customFields | Create a Custom Field
[**deleteTask**](TaskApi.md#deleteTask) | **DELETE** /rest/v2/tasks/{task_id} | Delete a Task
[**deleteTaskCustomField**](TaskApi.md#deleteTaskCustomField) | **DELETE** /rest/v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field
[**getTask**](TaskApi.md#getTask) | **GET** /rest/v2/tasks/{task_id} | Retrieve a Task
[**listTasks**](TaskApi.md#listTasks) | **GET** /rest/v2/tasks | List Tasks
[**retrieveTaskModel**](TaskApi.md#retrieveTaskModel) | **GET** /rest/v2/tasks/model | Retrieve Task Model
[**updateTask**](TaskApi.md#updateTask) | **PATCH** /rest/v2/tasks/{task_id} | Update a Task
[**updateTaskCustomField**](TaskApi.md#updateTaskCustomField) | **PATCH** /rest/v2/tasks/model/customFields/{custom_field_id} | Update a Task\&#39;s Custom Field


# **createTask**
> Task createTask(createTaskRequest)

Creates a new task as the authenticated user.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiCreateTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiCreateTaskRequest = {
  
  createTaskRequest: {
    title: "Follow up on proposal",
    description: "Review client feedback",
    type: "CALL",
    priority: "ESSENTIAL",
    completed: false,
    completionTime: "2024-03-20T14:00:00Z",
    dueTime: "2024-03-18T17:00:00Z",
    remindTimeMins: 30,
    assignedToUserId: "456",
    contactId: "1001",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
  },
    // Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields (optional)
  fields: [
    "fields_example",
  ],
};

const data = await apiInstance.createTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTaskRequest** | **CreateTaskRequest**|  |
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | (optional) defaults to undefined


### Return type

**Task**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  createCustomFieldRequest: {
    label: "label_example",
    options: [
      {
        label: "label_example",
      },
    ],
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createTaskCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**|  |


### Return type

**CreateCustomFieldResponse**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  taskId: "task_id_example",
};

const data = await apiInstance.deleteTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] |  | defaults to undefined


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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteTaskCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] |  | defaults to undefined


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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  taskId: "task_id_example",
    // Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields (optional)
  fields: [
    "fields_example",
  ],
};

const data = await apiInstance.getTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] |  | defaults to undefined
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | (optional) defaults to undefined


### Return type

**Task**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
    // Filter to apply, allowed fields are: - (String) `contact_id` - (String) `has_due_date` - (String) `is_completed` - (String) `user_id` - (String) `task_ids` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=has_due_date%3D%3Dtrue` - `filter=is_completed%3D%3Dtrue` - `filter=user_id%3D%3D321` - `filter=task_ids%3D%3D1,2,3` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `due_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
    // Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields (optional)
  fields: [
    "fields_example",
  ],
};

const data = await apiInstance.listTasks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | (optional) defaults to undefined


### Return type

**ListTasksResponse**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTask**
> UpdateTaskResponse updateTask(createUpdateTaskRequest)

Updates a task with only the values provided in the request.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiUpdateTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiUpdateTaskRequest = {
  
  taskId: "task_id_example",
  
  createUpdateTaskRequest: {
    title: "Follow up on proposal",
    description: "Review client feedback",
    type: "CALL",
    priority: "ESSENTIAL",
    completed: false,
    completionTime: "2024-03-20T14:00:00Z",
    dueTime: "2024-03-18T17:00:00Z",
    remindTimeMins: 30,
    assignedToUserId: "456",
    contactId: "1001",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
    // Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields (optional)
  fields: [
    "fields_example",
  ],
};

const data = await apiInstance.updateTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTaskRequest** | **CreateUpdateTaskRequest**|  |
 **taskId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of optional Task properties to include in the response. Allowed values: custom_fields | (optional) defaults to undefined


### Return type

**UpdateTaskResponse**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  customFieldId: "custom_field_id_example",
  
  updateCustomFieldMetaDataRequest: {
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
      },
    ],
    groupId: "groupId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateTaskCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**|  |
 **customFieldId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


