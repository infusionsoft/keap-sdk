# keap_core_v2_client.TaskApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_task**](TaskApi.md#create_task) | **POST** /v2/tasks | Create a Task
[**create_task_custom_field**](TaskApi.md#create_task_custom_field) | **POST** /v2/tasks/model/customFields | Create a Custom Field
[**delete_task**](TaskApi.md#delete_task) | **DELETE** /v2/tasks/{task_id} | Delete a Task
[**delete_task_custom_field**](TaskApi.md#delete_task_custom_field) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field
[**get_task**](TaskApi.md#get_task) | **GET** /v2/tasks/{task_id} | Retrieve a Task
[**list_tasks**](TaskApi.md#list_tasks) | **GET** /v2/tasks | List Tasks
[**retrieve_task_model**](TaskApi.md#retrieve_task_model) | **GET** /v2/tasks/model | Retrieve Task Model
[**update_task**](TaskApi.md#update_task) | **PATCH** /v2/tasks/{task_id} | Update a Task
[**update_task_custom_field**](TaskApi.md#update_task_custom_field) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field


# **create_task**
> Task create_task(create_task_request=create_task_request)

Create a Task

Creates a new task as the authenticated user.  
This endpoint does not currently support setting Custom Field values.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_task_request import CreateTaskRequest
from keap_core_v2_client.models.task import Task
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.TaskApi(api_client)
    create_task_request = keap_core_v2_client.CreateTaskRequest() # CreateTaskRequest | task (optional)

    try:
        # Create a Task
        api_response = api_instance.create_task(create_task_request=create_task_request)
        print("The response of TaskApi->create_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->create_task: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_task_request** | [**CreateTaskRequest**](CreateTaskRequest.md)| task | [optional] 

### Return type

[**Task**](Task.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_task_custom_field**
> CreateCustomFieldResponse create_task_custom_field(create_custom_field_request)

Create a Custom Field

Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_core_v2_client.models.create_custom_field_response import CreateCustomFieldResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.TaskApi(api_client)
    create_custom_field_request = keap_core_v2_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create a Custom Field
        api_response = api_instance.create_task_custom_field(create_custom_field_request)
        print("The response of TaskApi->create_task_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->create_task_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_task**
> delete_task(task_id)

Delete a Task

Deletes a single task

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.TaskApi(api_client)
    task_id = 'task_id_example' # str | task_id

    try:
        # Delete a Task
        api_instance.delete_task(task_id)
    except Exception as e:
        print("Exception when calling TaskApi->delete_task: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| task_id | 

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_task_custom_field**
> delete_task_custom_field(custom_field_id)

Delete a Custom Field

Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.TaskApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id

    try:
        # Delete a Custom Field
        api_instance.delete_task_custom_field(custom_field_id)
    except Exception as e:
        print("Exception when calling TaskApi->delete_task_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_task**
> Task get_task(task_id)

Retrieve a Task

Retrieves a single task

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.task import Task
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.TaskApi(api_client)
    task_id = 'task_id_example' # str | task_id

    try:
        # Retrieve a Task
        api_response = api_instance.get_task(task_id)
        print("The response of TaskApi->get_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->get_task: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| task_id | 

### Return type

[**Task**](Task.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_tasks**
> ListTasksResponse list_tasks(end_due_time=end_due_time, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, start_due_time=start_due_time)

List Tasks

Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_tasks_response import ListTasksResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.TaskApi(api_client)
    end_due_time = 'end_due_time_example' # str |  (optional)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)
    start_due_time = 'start_due_time_example' # str |  (optional)

    try:
        # List Tasks
        api_response = api_instance.list_tasks(end_due_time=end_due_time, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, start_due_time=start_due_time)
        print("The response of TaskApi->list_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->list_tasks: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **end_due_time** | **str**|  | [optional] 
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 
 **start_due_time** | **str**|  | [optional] 

### Return type

[**ListTasksResponse**](ListTasksResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_task_model**
> ObjectModel retrieve_task_model()

Retrieve Task Model

Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.object_model import ObjectModel
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.TaskApi(api_client)

    try:
        # Retrieve Task Model
        api_response = api_instance.retrieve_task_model()
        print("The response of TaskApi->retrieve_task_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->retrieve_task_model: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_task**
> UpdateTaskResponse update_task(task_id, update_mask=update_mask, create_update_task_request=create_update_task_request)

Update a Task

Updates a task with only the values provided in the request. 
This endpoint does not currently support updating Custom Field values.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_update_task_request import CreateUpdateTaskRequest
from keap_core_v2_client.models.update_task_response import UpdateTaskResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.TaskApi(api_client)
    task_id = 'task_id_example' # str | task_id
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    create_update_task_request = keap_core_v2_client.CreateUpdateTaskRequest() # CreateUpdateTaskRequest | task (optional)

    try:
        # Update a Task
        api_response = api_instance.update_task(task_id, update_mask=update_mask, create_update_task_request=create_update_task_request)
        print("The response of TaskApi->update_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->update_task: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| task_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **create_update_task_request** | [**CreateUpdateTaskRequest**](CreateUpdateTaskRequest.md)| task | [optional] 

### Return type

[**UpdateTaskResponse**](UpdateTaskResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_task_custom_field**
> CustomFieldMetaData update_task_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update a Task's Custom Field

Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_core_v2_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.TaskApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    update_custom_field_meta_data_request = keap_core_v2_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Task's Custom Field
        api_response = api_instance.update_task_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)
        print("The response of TaskApi->update_task_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaskApi->update_task_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 
 **update_custom_field_meta_data_request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

