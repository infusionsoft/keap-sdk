# keap_core_v2_client.LeadSourcesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_lead_source_using_post**](LeadSourcesApi.md#create_lead_source_using_post) | **POST** /v2/leadSources | Create a Lead Source
[**delete_lead_source_using_delete**](LeadSourcesApi.md#delete_lead_source_using_delete) | **DELETE** /v2/leadSources/{lead_source_id} | Delete a Lead Source
[**get_lead_source_using_get**](LeadSourcesApi.md#get_lead_source_using_get) | **GET** /v2/leadSources/{lead_source_id} | Retrieve a Lead Source
[**list_lead_sources_using_get**](LeadSourcesApi.md#list_lead_sources_using_get) | **GET** /v2/leadSources | List Lead Sources
[**update_lead_source_using_patch**](LeadSourcesApi.md#update_lead_source_using_patch) | **PATCH** /v2/leadSources/{lead_source_id} | Update a Lead Source


# **create_lead_source_using_post**
> LeadSource create_lead_source_using_post(create_lead_source_request)

Create a Lead Source

Creates a new Lead Source

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_lead_source_request import CreateLeadSourceRequest
from keap_core_v2_client.models.lead_source import LeadSource
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
    api_instance = keap_core_v2_client.LeadSourcesApi(api_client)
    create_lead_source_request = keap_core_v2_client.CreateLeadSourceRequest() # CreateLeadSourceRequest | The request object to create a new lead source

    try:
        # Create a Lead Source
        api_response = api_instance.create_lead_source_using_post(create_lead_source_request)
        print("The response of LeadSourcesApi->create_lead_source_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourcesApi->create_lead_source_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_lead_source_request** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| The request object to create a new lead source | 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_lead_source_using_delete**
> delete_lead_source_using_delete(lead_source_id)

Delete a Lead Source

Deletes a Lead Source by ID

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
    api_instance = keap_core_v2_client.LeadSourcesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of a lead source

    try:
        # Delete a Lead Source
        api_instance.delete_lead_source_using_delete(lead_source_id)
    except Exception as e:
        print("Exception when calling LeadSourcesApi->delete_lead_source_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of a lead source | 

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

# **get_lead_source_using_get**
> LeadSource get_lead_source_using_get(lead_source_id)

Retrieve a Lead Source

Retrieves a Lead Source by ID

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.lead_source import LeadSource
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
    api_instance = keap_core_v2_client.LeadSourcesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of a lead source

    try:
        # Retrieve a Lead Source
        api_response = api_instance.get_lead_source_using_get(lead_source_id)
        print("The response of LeadSourcesApi->get_lead_source_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourcesApi->get_lead_source_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of a lead source | 

### Return type

[**LeadSource**](LeadSource.md)

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

# **list_lead_sources_using_get**
> ListLeadSourcesResponse list_lead_sources_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Lead Sources

Retrieves a list of Lead Sources

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_lead_sources_response import ListLeadSourcesResponse
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
    api_instance = keap_core_v2_client.LeadSourcesApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:  - (String) `name` - (String) `status` - (String) `lead_source_category_id` - (String) `vendor` - (String) `medium` - (String) `start_time` - (String) `end_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=name%3D%3Dexample` - `filter=start_time%3D%3D2024-12-22T01:00:00.000Z` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields:  - `name` - `status` - `vendor` - `medium` - `start_time` - `end_time` - `create_time` - `update_time`  One of the following directions:  - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Lead Sources
        api_response = api_instance.list_lead_sources_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of LeadSourcesApi->list_lead_sources_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourcesApi->list_lead_sources_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_lead_source_using_patch**
> LeadSource update_lead_source_using_patch(lead_source_id, create_lead_source_request, update_mask=update_mask)

Update a Lead Source

Updates a Lead Source with only the values provided in the request

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_lead_source_request import CreateLeadSourceRequest
from keap_core_v2_client.models.lead_source import LeadSource
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
    api_instance = keap_core_v2_client.LeadSourcesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of a lead source
    create_lead_source_request = keap_core_v2_client.CreateLeadSourceRequest() # CreateLeadSourceRequest | The request object to update a lead source
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Lead Source
        api_response = api_instance.update_lead_source_using_patch(lead_source_id, create_lead_source_request, update_mask=update_mask)
        print("The response of LeadSourcesApi->update_lead_source_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourcesApi->update_lead_source_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of a lead source | 
 **create_lead_source_request** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| The request object to update a lead source | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

