# keap_core_v2_client.PipelinesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](PipelinesApi.md#create) | **POST** /v2/pipelines | Creates a new entity.
[**delete**](PipelinesApi.md#delete) | **DELETE** /v2/pipelines/{id} | Deletes a pipeline.
[**get**](PipelinesApi.md#get) | **GET** /v2/pipelines/{id} | Retrieves an entity by its identifier.
[**get_outcome_labels**](PipelinesApi.md#get_outcome_labels) | **GET** /v2/pipelines/{id}/outcomes | Gets the outcome labels for a pipeline.
[**list**](PipelinesApi.md#list) | **GET** /v2/pipelines | Lists entities based on the provided ListCommand.
[**list_stages**](PipelinesApi.md#list_stages) | **GET** /v2/pipelines/{id}/stages | Retrieves a list of stages for a specific pipeline.
[**list_summaries**](PipelinesApi.md#list_summaries) | **GET** /v2/pipelines/summaries | Retrieves a list of pipeline summaries.
[**set_outcome_labels**](PipelinesApi.md#set_outcome_labels) | **PATCH** /v2/pipelines/{id}/outcomes | Sets the outcome labels for a pipeline.
[**update**](PipelinesApi.md#update) | **PATCH** /v2/pipelines/{id} | Updates an existing entity.


# **create**
> Pipeline create(create_pipeline_request)

Creates a new entity.

Creates a new entity.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_pipeline_request import CreatePipelineRequest
from keap_core_v2_client.models.pipeline import Pipeline
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
    api_instance = keap_core_v2_client.PipelinesApi(api_client)
    create_pipeline_request = keap_core_v2_client.CreatePipelineRequest() # CreatePipelineRequest | the create request

    try:
        # Creates a new entity.
        api_response = api_instance.create(create_pipeline_request)
        print("The response of PipelinesApi->create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->create: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_pipeline_request** | [**CreatePipelineRequest**](CreatePipelineRequest.md)| the create request | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete**
> delete(id, allow_cleanup=allow_cleanup, new_stage_id=new_stage_id)

Deletes a pipeline.

Deletes a pipeline.

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
    api_instance = keap_core_v2_client.PipelinesApi(api_client)
    id = 'id_example' # str | the pipeline identifier
    allow_cleanup = True # bool | flag indicating whether cleanup is allowed, can be null (optional)
    new_stage_id = 'new_stage_id_example' # str | the new stage identifier, can be null (optional)

    try:
        # Deletes a pipeline.
        api_instance.delete(id, allow_cleanup=allow_cleanup, new_stage_id=new_stage_id)
    except Exception as e:
        print("Exception when calling PipelinesApi->delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the pipeline identifier | 
 **allow_cleanup** | **bool**| flag indicating whether cleanup is allowed, can be null | [optional] 
 **new_stage_id** | **str**| the new stage identifier, can be null | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | A response indicating no content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get**
> Pipeline get(id)

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.pipeline import Pipeline
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
    api_instance = keap_core_v2_client.PipelinesApi(api_client)
    id = 'id_example' # str | the entity identifier

    try:
        # Retrieves an entity by its identifier.
        api_response = api_instance.get(id)
        print("The response of PipelinesApi->get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the entity identifier | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outcome_labels**
> PipelineOutcomeLabelListResponse get_outcome_labels(id, filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)

Gets the outcome labels for a pipeline.

Gets the outcome labels for a pipeline.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.pipeline_outcome_label_list_response import PipelineOutcomeLabelListResponse
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
    api_instance = keap_core_v2_client.PipelinesApi(api_client)
    id = 'id_example' # str | the pipeline identifier
    filter = 'filter_example' # str |  (optional)
    page_token = 'page_token_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_size = 1000 # int |  (optional) (default to 1000)

    try:
        # Gets the outcome labels for a pipeline.
        api_response = api_instance.get_outcome_labels(id, filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)
        print("The response of PipelinesApi->get_outcome_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_outcome_labels: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the pipeline identifier | 
 **filter** | **str**|  | [optional] 
 **page_token** | **str**|  | [optional] 
 **order_by** | **str**|  | [optional] 
 **page_size** | **int**|  | [optional] [default to 1000]

### Return type

[**PipelineOutcomeLabelListResponse**](PipelineOutcomeLabelListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the updated list of the pipeline&#39;s outcome labels |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> PipelineListResponse list(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.pipeline_list_response import PipelineListResponse
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
    api_instance = keap_core_v2_client.PipelinesApi(api_client)
    filter = 'filter_example' # str |  (optional)
    page_token = 'page_token_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_size = 1000 # int |  (optional) (default to 1000)

    try:
        # Lists entities based on the provided ListCommand.
        api_response = api_instance.list(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)
        print("The response of PipelinesApi->list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->list: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**|  | [optional] 
 **page_token** | **str**|  | [optional] 
 **order_by** | **str**|  | [optional] 
 **page_size** | **int**|  | [optional] [default to 1000]

### Return type

[**PipelineListResponse**](PipelineListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a response containing the list of entities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_stages**
> PipelineStageListResponse list_stages(id, filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)

Retrieves a list of stages for a specific pipeline.

Retrieves a list of stages for a specific pipeline.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.pipeline_stage_list_response import PipelineStageListResponse
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
    api_instance = keap_core_v2_client.PipelinesApi(api_client)
    id = 'id_example' # str | the pipeline identifier
    filter = 'filter_example' # str |  (optional)
    page_token = 'page_token_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_size = 1000 # int |  (optional) (default to 1000)

    try:
        # Retrieves a list of stages for a specific pipeline.
        api_response = api_instance.list_stages(id, filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)
        print("The response of PipelinesApi->list_stages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->list_stages: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the pipeline identifier | 
 **filter** | **str**|  | [optional] 
 **page_token** | **str**|  | [optional] 
 **order_by** | **str**|  | [optional] 
 **page_size** | **int**|  | [optional] [default to 1000]

### Return type

[**PipelineStageListResponse**](PipelineStageListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the response containing the list of pipeline stages and the next page token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_summaries**
> PipelineSummariesListResponse list_summaries(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)

Retrieves a list of pipeline summaries.

Retrieves a list of pipeline summaries.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.pipeline_summaries_list_response import PipelineSummariesListResponse
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
    api_instance = keap_core_v2_client.PipelinesApi(api_client)
    filter = 'filter_example' # str |  (optional)
    page_token = 'page_token_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_size = 1000 # int |  (optional) (default to 1000)

    try:
        # Retrieves a list of pipeline summaries.
        api_response = api_instance.list_summaries(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)
        print("The response of PipelinesApi->list_summaries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->list_summaries: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**|  | [optional] 
 **page_token** | **str**|  | [optional] 
 **order_by** | **str**|  | [optional] 
 **page_size** | **int**|  | [optional] [default to 1000]

### Return type

[**PipelineSummariesListResponse**](PipelineSummariesListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the response containing the list of pipeline summaries and the next page token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_outcome_labels**
> PipelineOutcomeLabelListResponse set_outcome_labels(id, update_outcome_labels_request)

Sets the outcome labels for a pipeline.

Sets the outcome labels for a pipeline.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.pipeline_outcome_label_list_response import PipelineOutcomeLabelListResponse
from keap_core_v2_client.models.update_outcome_labels_request import UpdateOutcomeLabelsRequest
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
    api_instance = keap_core_v2_client.PipelinesApi(api_client)
    id = 'id_example' # str | the pipeline identifier
    update_outcome_labels_request = keap_core_v2_client.UpdateOutcomeLabelsRequest() # UpdateOutcomeLabelsRequest | the request containing the new outcome labels

    try:
        # Sets the outcome labels for a pipeline.
        api_response = api_instance.set_outcome_labels(id, update_outcome_labels_request)
        print("The response of PipelinesApi->set_outcome_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->set_outcome_labels: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the pipeline identifier | 
 **update_outcome_labels_request** | [**UpdateOutcomeLabelsRequest**](UpdateOutcomeLabelsRequest.md)| the request containing the new outcome labels | 

### Return type

[**PipelineOutcomeLabelListResponse**](PipelineOutcomeLabelListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the updated list of the pipeline&#39;s outcome labels |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> Pipeline update(id, update_mask, update_pipeline_request)

Updates an existing entity.

Updates an existing entity.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.pipeline import Pipeline
from keap_core_v2_client.models.update_pipeline_request import UpdatePipelineRequest
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
    api_instance = keap_core_v2_client.PipelinesApi(api_client)
    id = 'id_example' # str | the entity identifier
    update_mask = ['update_mask_example'] # List[str] | the fields to update
    update_pipeline_request = keap_core_v2_client.UpdatePipelineRequest() # UpdatePipelineRequest | the update request

    try:
        # Updates an existing entity.
        api_response = api_instance.update(id, update_mask, update_pipeline_request)
        print("The response of PipelinesApi->update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->update: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the entity identifier | 
 **update_mask** | [**List[str]**](str.md)| the fields to update | 
 **update_pipeline_request** | [**UpdatePipelineRequest**](UpdatePipelineRequest.md)| the update request | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

