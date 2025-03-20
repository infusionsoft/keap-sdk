# keap_core_v2_client.StagesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create1**](StagesApi.md#create1) | **POST** /v2/stages | Creates a new entity.
[**delete2**](StagesApi.md#delete2) | **DELETE** /v2/stages/{id} | Deletes a stage by its identifier for a given tenant.
[**get1**](StagesApi.md#get1) | **GET** /v2/stages/{id} | Retrieves an entity by its identifier.
[**list1**](StagesApi.md#list1) | **GET** /v2/stages | Lists entities based on the provided ListCommand.
[**list_stages1**](StagesApi.md#list_stages1) | **GET** /v2/stages/{id}/deals | Retrieves a list of deals for a specific stage.
[**update2**](StagesApi.md#update2) | **PATCH** /v2/stages/{id} | Updates an existing entity.


# **create1**
> Stage create1(create_stage_request)

Creates a new entity.

Creates a new entity.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_stage_request import CreateStageRequest
from keap_core_v2_client.models.stage import Stage
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
    api_instance = keap_core_v2_client.StagesApi(api_client)
    create_stage_request = keap_core_v2_client.CreateStageRequest() # CreateStageRequest | the create request

    try:
        # Creates a new entity.
        api_response = api_instance.create1(create_stage_request)
        print("The response of StagesApi->create1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagesApi->create1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_stage_request** | [**CreateStageRequest**](CreateStageRequest.md)| the create request | 

### Return type

[**Stage**](Stage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The create_1d entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete2**
> delete2(id, new_stage_id=new_stage_id)

Deletes a stage by its identifier for a given tenant.

Deletes a stage by its identifier for a given tenant.

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
    api_instance = keap_core_v2_client.StagesApi(api_client)
    id = 'id_example' # str | the stage identifier
    new_stage_id = 'new_stage_id_example' # str | the new stage identifier, can be null (optional)

    try:
        # Deletes a stage by its identifier for a given tenant.
        api_instance.delete2(id, new_stage_id=new_stage_id)
    except Exception as e:
        print("Exception when calling StagesApi->delete2: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the stage identifier | 
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

# **get1**
> Stage get1(id)

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.stage import Stage
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
    api_instance = keap_core_v2_client.StagesApi(api_client)
    id = 'id_example' # str | the entity identifier

    try:
        # Retrieves an entity by its identifier.
        api_response = api_instance.get1(id)
        print("The response of StagesApi->get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagesApi->get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the entity identifier | 

### Return type

[**Stage**](Stage.md)

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

# **list1**
> StageListResponse list1(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.stage_list_response import StageListResponse
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
    api_instance = keap_core_v2_client.StagesApi(api_client)
    filter = 'filter_example' # str |  (optional)
    page_token = 'page_token_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_size = 1000 # int |  (optional) (default to 1000)

    try:
        # Lists entities based on the provided ListCommand.
        api_response = api_instance.list1(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)
        print("The response of StagesApi->list1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagesApi->list1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**|  | [optional] 
 **page_token** | **str**|  | [optional] 
 **order_by** | **str**|  | [optional] 
 **page_size** | **int**|  | [optional] [default to 1000]

### Return type

[**StageListResponse**](StageListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a response containing the list_1 of entities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_stages1**
> StageDealListResponse list_stages1(id, filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)

Retrieves a list of deals for a specific stage.

Retrieves a list of deals for a specific stage.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.stage_deal_list_response import StageDealListResponse
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
    api_instance = keap_core_v2_client.StagesApi(api_client)
    id = 'id_example' # str | the stage identifier
    filter = 'filter_example' # str |  (optional)
    page_token = 'page_token_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_size = 1000 # int |  (optional) (default to 1000)

    try:
        # Retrieves a list of deals for a specific stage.
        api_response = api_instance.list_stages1(id, filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)
        print("The response of StagesApi->list_stages1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagesApi->list_stages1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the stage identifier | 
 **filter** | **str**|  | [optional] 
 **page_token** | **str**|  | [optional] 
 **order_by** | **str**|  | [optional] 
 **page_size** | **int**|  | [optional] [default to 1000]

### Return type

[**StageDealListResponse**](StageDealListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the response containing the list of deals and the next page token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update2**
> Stage update2(id, update_mask, update_stage_request)

Updates an existing entity.

Updates an existing entity.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.stage import Stage
from keap_core_v2_client.models.update_stage_request import UpdateStageRequest
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
    api_instance = keap_core_v2_client.StagesApi(api_client)
    id = 'id_example' # str | the entity identifier
    update_mask = ['update_mask_example'] # List[str] | the fields to update
    update_stage_request = keap_core_v2_client.UpdateStageRequest() # UpdateStageRequest | the update request

    try:
        # Updates an existing entity.
        api_response = api_instance.update2(id, update_mask, update_stage_request)
        print("The response of StagesApi->update2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagesApi->update2: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the entity identifier | 
 **update_mask** | [**List[str]**](str.md)| the fields to update | 
 **update_stage_request** | [**UpdateStageRequest**](UpdateStageRequest.md)| the update request | 

### Return type

[**Stage**](Stage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The update_2d entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

