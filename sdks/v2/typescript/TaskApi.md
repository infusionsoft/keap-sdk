# .TaskApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTask**](TaskApi.md#createTask) | **POST** /rest/v2/tasks | Create a Task
[**createTaskCustomField**](TaskApi.md#createTaskCustomField) | **POST** /rest/v2/tasks/model/customFields | Create a Custom Field
[**createTaskCustomFieldGroup**](TaskApi.md#createTaskCustomFieldGroup) | **POST** /rest/v2/tasks/model/customFields/groups | Create a Task Custom Field Group
[**createTaskCustomFieldTab**](TaskApi.md#createTaskCustomFieldTab) | **POST** /rest/v2/tasks/model/customFields/tabs | Create a Task Custom Field Tab
[**deleteTask**](TaskApi.md#deleteTask) | **DELETE** /rest/v2/tasks/{task_id} | Delete a Task
[**deleteTaskCustomField**](TaskApi.md#deleteTaskCustomField) | **DELETE** /rest/v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field
[**deleteTaskCustomFieldGroup**](TaskApi.md#deleteTaskCustomFieldGroup) | **DELETE** /rest/v2/tasks/model/customFields/groups/{group_id} | Delete a Task Custom Field Group
[**deleteTaskCustomFieldTab**](TaskApi.md#deleteTaskCustomFieldTab) | **DELETE** /rest/v2/tasks/model/customFields/tabs/{tab_id} | Delete a Task Custom Field Tab
[**getTask**](TaskApi.md#getTask) | **GET** /rest/v2/tasks/{task_id} | Retrieve a Task
[**getTaskCustomFieldGroup**](TaskApi.md#getTaskCustomFieldGroup) | **GET** /rest/v2/tasks/model/customFields/groups/{group_id} | Retrieve a Task Custom Field Group
[**getTaskCustomFieldTab**](TaskApi.md#getTaskCustomFieldTab) | **GET** /rest/v2/tasks/model/customFields/tabs/{tab_id} | Retrieve a Task Custom Field Tab
[**listTaskCustomFieldGroups**](TaskApi.md#listTaskCustomFieldGroups) | **GET** /rest/v2/tasks/model/customFields/groups | List Task Custom Field Groups
[**listTaskCustomFieldTabs**](TaskApi.md#listTaskCustomFieldTabs) | **GET** /rest/v2/tasks/model/customFields/tabs | List Task Custom Field Tabs
[**listTasks**](TaskApi.md#listTasks) | **GET** /rest/v2/tasks | List Tasks
[**retrieveTaskModel**](TaskApi.md#retrieveTaskModel) | **GET** /rest/v2/tasks/model | Retrieve Task Model
[**updateTask**](TaskApi.md#updateTask) | **PATCH** /rest/v2/tasks/{task_id} | Update a Task
[**updateTaskCustomField**](TaskApi.md#updateTaskCustomField) | **PATCH** /rest/v2/tasks/model/customFields/{custom_field_id} | Update a Task\&#39;s Custom Field
[**updateTaskCustomFieldGroup**](TaskApi.md#updateTaskCustomFieldGroup) | **PATCH** /rest/v2/tasks/model/customFields/groups/{group_id} | Update a Task Custom Field Group
[**updateTaskCustomFieldTab**](TaskApi.md#updateTaskCustomFieldTab) | **PATCH** /rest/v2/tasks/model/customFields/tabs/{tab_id} | Update a Task Custom Field Tab


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
    opportunityId: "553",
    accepted: true,
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
**405** | Method Not Allowed |  -  |
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTaskCustomFieldGroup**
> CustomFieldGroup createTaskCustomFieldGroup(createCustomFieldGroupRequest)

Creates a new custom field group for the Task record type. If `tab_id` is omitted, the group is added to the default \'Custom Fields\' tab.<br/>Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiCreateTaskCustomFieldGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiCreateTaskCustomFieldGroupRequest = {
  
  createCustomFieldGroupRequest: {
    name: "name_example",
    tabId: "tabId_example",
  },
};

const data = await apiInstance.createTaskCustomFieldGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldGroupRequest** | **CreateCustomFieldGroupRequest**|  |


### Return type

**CustomFieldGroup**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTaskCustomFieldTab**
> CustomFieldTab createTaskCustomFieldTab(createCustomFieldTabRequest)

Creates a new custom field tab for the Task record type.<br/>Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiCreateTaskCustomFieldTabRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiCreateTaskCustomFieldTabRequest = {
  
  createCustomFieldTabRequest: {
    name: "name_example",
  },
};

const data = await apiInstance.createTaskCustomFieldTab(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldTabRequest** | **CreateCustomFieldTabRequest**|  |


### Return type

**CustomFieldTab**

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
**405** | Method Not Allowed |  -  |
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
**405** | Method Not Allowed |  -  |
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTaskCustomFieldGroup**
> void deleteTaskCustomFieldGroup()

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.<br/>Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiDeleteTaskCustomFieldGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiDeleteTaskCustomFieldGroupRequest = {
  
  groupId: "group_id_example",
};

const data = await apiInstance.deleteTaskCustomFieldGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTaskCustomFieldTab**
> void deleteTaskCustomFieldTab()

Deletes a custom field tab. Returns 409 Conflict if the tab still contains groups.<br/>Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiDeleteTaskCustomFieldTabRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiDeleteTaskCustomFieldTabRequest = {
  
  tabId: "tab_id_example",
};

const data = await apiInstance.deleteTaskCustomFieldTab(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | [**string**] |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTaskCustomFieldGroup**
> CustomFieldGroup getTaskCustomFieldGroup()

Retrieves a single custom field group by id for the Task record type.<br/>Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiGetTaskCustomFieldGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiGetTaskCustomFieldGroupRequest = {
  
  groupId: "group_id_example",
};

const data = await apiInstance.getTaskCustomFieldGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined


### Return type

**CustomFieldGroup**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTaskCustomFieldTab**
> CustomFieldTab getTaskCustomFieldTab()

Retrieves a single custom field tab by id for the Task record type.<br/>Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiGetTaskCustomFieldTabRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiGetTaskCustomFieldTabRequest = {
  
  tabId: "tab_id_example",
};

const data = await apiInstance.getTaskCustomFieldTab(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | [**string**] |  | defaults to undefined


### Return type

**CustomFieldTab**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTaskCustomFieldGroups**
> ListCustomFieldGroupsResponse listTaskCustomFieldGroups()

Retrieves a list of custom field groups for the Task record type. Optionally filter by tab_id to scope to a specific tab.<br/>Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiListTaskCustomFieldGroupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiListTaskCustomFieldGroupsRequest = {
    // Optional tab id to scope groups to a single tab (optional)
  tabId: "tab_id_example",
};

const data = await apiInstance.listTaskCustomFieldGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | [**string**] | Optional tab id to scope groups to a single tab | (optional) defaults to undefined


### Return type

**ListCustomFieldGroupsResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTaskCustomFieldTabs**
> ListCustomFieldTabsResponse listTaskCustomFieldTabs()

Retrieves a list of custom field tabs for the Task record type.<br/>Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request = {};

const data = await apiInstance.listTaskCustomFieldTabs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListCustomFieldTabsResponse**

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
**405** | Method Not Allowed |  -  |
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
    // Filter to apply, allowed fields are: - (String) `contact_id` - (String) `has_due_date` - (String) `is_completed` - (String) `user_id` - (String) `opportunity_id` - (String) `task_ids` - (String) `priority`  — one of `CRITICAL`, `ESSENTIAL`, `NONESSENTIAL` - (String) `since_time` - (String) `until_time` - (String)   `id`     — supports `==`, `>`, `<`, `>=`, `<=` - (String) `title`  — supports prefix wildcard (`title==Foo*`)  Operators must be URL-encoded (`==` → `%3D%3D`, `>` → `%3E`, `<` → `%3C`). For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=has_due_date%3D%3Dtrue` - `filter=is_completed%3D%3Dtrue` - `filter=user_id%3D%3D321` - `filter=opportunity_id%3D%3D321` - `filter=task_ids%3D%3D1,2,3` - `filter=priority%3D%3DCRITICAL` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;` - `filter=id%3E5`                  (id > 5) - `filter=id%3C%3D100`              (id <= 100) - `filter=title%3D%3DFollow%2A`     (title starts with \"Follow\")  **Custom fields:** tasks may also be filtered by any custom field defined on the Task record, referenced by its field name (e.g. `filter=cf_priority%3D%3D10`). Both indexed and non-indexed custom fields are filterable. Operators must be URL-encoded, same as the standard fields above. The supported operator and value depend on the field\'s data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (`==`) and prefix wildcard (e.g. `cf_company%3D%3DAcme%2A`) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (`==`, `>`, `<`, `>=`, `<=`) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. `cf_renewDate%3C%3D2026-01-01T00:00:00.000Z`). Date-only values such as `2026-01-01` are rejected - Yes/No fields — equals only, value `0` (No) or `1` (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. `cf_tags%3D%3Dred`) A custom field that does not exist, an operator unsupported for the field\'s type, or a value that does not match the field\'s type returns `400 Bad Request`.  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `due_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
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
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;opportunity_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;priority&#x60;  — one of &#x60;CRITICAL&#x60;, &#x60;ESSENTIAL&#x60;, &#x60;NONESSENTIAL&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String)   &#x60;id&#x60;     — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;title&#x60;  — supports prefix wildcard (&#x60;title&#x3D;&#x3D;Foo*&#x60;)  Operators must be URL-encoded (&#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;). For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;opportunity_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;priority%3D%3DCRITICAL&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;id%3E5&#x60;                  (id &gt; 5) - &#x60;filter&#x3D;id%3C%3D100&#x60;              (id &lt;&#x3D; 100) - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60;     (title starts with \&quot;Follow\&quot;)  **Custom fields:** tasks may also be filtered by any custom field defined on the Task record, referenced by its field name (e.g. &#x60;filter&#x3D;cf_priority%3D%3D10&#x60;). Both indexed and non-indexed custom fields are filterable. Operators must be URL-encoded, same as the standard fields above. The supported operator and value depend on the field\&#39;s data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (&#x60;&#x3D;&#x3D;&#x60;) and prefix wildcard (e.g. &#x60;cf_company%3D%3DAcme%2A&#x60;) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (&#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60;) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. &#x60;cf_renewDate%3C%3D2026-01-01T00:00:00.000Z&#x60;). Date-only values such as &#x60;2026-01-01&#x60; are rejected - Yes/No fields — equals only, value &#x60;0&#x60; (No) or &#x60;1&#x60; (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. &#x60;cf_tags%3D%3Dred&#x60;) A custom field that does not exist, an operator unsupported for the field\&#39;s type, or a value that does not match the field\&#39;s type returns &#x60;400 Bad Request&#x60;.  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
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
**405** | Method Not Allowed |  -  |
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
**405** | Method Not Allowed |  -  |
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
    opportunityId: "77",
    accepted: true,
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "id",
  ],
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
 **updateMask** | **Array<&#39;id&#39; &#124; &#39;title&#39; &#124; &#39;description&#39; &#124; &#39;type&#39; &#124; &#39;priority&#39; &#124; &#39;completion_time&#39; &#124; &#39;due_time&#39; &#124; &#39;remind_time_mins&#39; &#124; &#39;assigned_to_user_id&#39; &#124; &#39;last_updated_by_user_id&#39; &#124; &#39;contact_id&#39; &#124; &#39;opportunity_id&#39; &#124; &#39;accepted&#39; &#124; &#39;completed&#39; &#124; &#39;custom_fields&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined
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
**405** | Method Not Allowed |  -  |
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
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**|  |
 **customFieldId** | [**string**] |  | defaults to undefined
 **updateMask** | **Array<&#39;group_id&#39; &#124; &#39;label&#39; &#124; &#39;options&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTaskCustomFieldGroup**
> CustomFieldGroup updateTaskCustomFieldGroup(updateCustomFieldGroupRequest)

Updates an existing custom field group. Only fields listed in `update_mask` are applied.<br/>Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiUpdateTaskCustomFieldGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiUpdateTaskCustomFieldGroupRequest = {
  
  groupId: "group_id_example",
    // Comma-separated list of fields to update
  updateMask: [
    "name",
  ],
  
  updateCustomFieldGroupRequest: {
    name: "name_example",
    order: 1,
    tabId: "tabId_example",
  },
};

const data = await apiInstance.updateTaskCustomFieldGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldGroupRequest** | **UpdateCustomFieldGroupRequest**|  |
 **groupId** | [**string**] |  | defaults to undefined
 **updateMask** | **Array<&#39;name&#39; &#124; &#39;tab_id&#39; &#124; &#39;order&#39;>** | Comma-separated list of fields to update | defaults to undefined


### Return type

**CustomFieldGroup**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTaskCustomFieldTab**
> CustomFieldTab updateTaskCustomFieldTab(updateCustomFieldTabRequest)

Updates an existing custom field tab. Only fields listed in `update_mask` are applied.<br/>Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiUpdateTaskCustomFieldTabRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiUpdateTaskCustomFieldTabRequest = {
  
  tabId: "tab_id_example",
    // Comma-separated list of fields to update
  updateMask: [
    "name",
  ],
  
  updateCustomFieldTabRequest: {
    name: "name_example",
    order: 1,
  },
};

const data = await apiInstance.updateTaskCustomFieldTab(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldTabRequest** | **UpdateCustomFieldTabRequest**|  |
 **tabId** | [**string**] |  | defaults to undefined
 **updateMask** | **Array<&#39;name&#39; &#124; &#39;order&#39;>** | Comma-separated list of fields to update | defaults to undefined


### Return type

**CustomFieldTab**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


