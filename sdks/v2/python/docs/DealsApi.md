# keap_core_v2_client.DealsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_note**](DealsApi.md#create_note) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal.
[**delete**](DealsApi.md#delete) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID.
[**get_note**](DealsApi.md#get_note) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID.
[**list_notes**](DealsApi.md#list_notes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal.
[**update**](DealsApi.md#update) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID.


# **create_note**
> DealNote create_note(id, create_deal_note_request)

Creates a new note for a specific deal.

Creates a new note for a specific deal.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_deal_note_request import CreateDealNoteRequest
from keap_core_v2_client.models.deal_note import DealNote
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
    api_instance = keap_core_v2_client.DealsApi(api_client)
    id = 'id_example' # str | the deal ID to associate the new note with
    create_deal_note_request = keap_core_v2_client.CreateDealNoteRequest() # CreateDealNoteRequest | the request body containing note details

    try:
        # Creates a new note for a specific deal.
        api_response = api_instance.create_note(id, create_deal_note_request)
        print("The response of DealsApi->create_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealsApi->create_note: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the deal ID to associate the new note with | 
 **create_deal_note_request** | [**CreateDealNoteRequest**](CreateDealNoteRequest.md)| the request body containing note details | 

### Return type

[**DealNote**](DealNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the created DealNote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete**
> delete(note_id)

Deletes a specific deal note by its ID.

Deletes a specific deal note by its ID.

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
    api_instance = keap_core_v2_client.DealsApi(api_client)
    note_id = 'note_id_example' # str | the ID of the note to delete

    try:
        # Deletes a specific deal note by its ID.
        api_instance.delete(note_id)
    except Exception as e:
        print("Exception when calling DealsApi->delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**| the ID of the note to delete | 

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
**204** | a HttpResponse indicating the result of the delete operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_note**
> DealNote get_note(note_id)

Retrieves a specific deal note by its ID.

Retrieves a specific deal note by its ID.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.deal_note import DealNote
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
    api_instance = keap_core_v2_client.DealsApi(api_client)
    note_id = 'note_id_example' # str | the ID of the note to retrieve

    try:
        # Retrieves a specific deal note by its ID.
        api_response = api_instance.get_note(note_id)
        print("The response of DealsApi->get_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealsApi->get_note: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**| the ID of the note to retrieve | 

### Return type

[**DealNote**](DealNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the requested DealNote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_notes**
> DealNoteListResponse list_notes(id, filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)

Lists all notes associated with a specific deal.

Lists all notes associated with a specific deal.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.deal_note_list_response import DealNoteListResponse
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
    api_instance = keap_core_v2_client.DealsApi(api_client)
    id = 'id_example' # str | the deal ID to list notes for
    filter = 'filter_example' # str |  (optional)
    page_token = 'page_token_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_size = 1000 # int |  (optional) (default to 1000)

    try:
        # Lists all notes associated with a specific deal.
        api_response = api_instance.list_notes(id, filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)
        print("The response of DealsApi->list_notes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealsApi->list_notes: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the deal ID to list notes for | 
 **filter** | **str**|  | [optional] 
 **page_token** | **str**|  | [optional] 
 **order_by** | **str**|  | [optional] 
 **page_size** | **int**|  | [optional] [default to 1000]

### Return type

[**DealNoteListResponse**](DealNoteListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of deal notes wrapped in a DealNoteListResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> DealNote update(note_id, update_deal_note_request)

Updates a specific deal note by its ID.

Updates a specific deal note by its ID.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.deal_note import DealNote
from keap_core_v2_client.models.update_deal_note_request import UpdateDealNoteRequest
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
    api_instance = keap_core_v2_client.DealsApi(api_client)
    note_id = 'note_id_example' # str | the ID of the note to update
    update_deal_note_request = keap_core_v2_client.UpdateDealNoteRequest() # UpdateDealNoteRequest | the request body containing updated note details

    try:
        # Updates a specific deal note by its ID.
        api_response = api_instance.update(note_id, update_deal_note_request)
        print("The response of DealsApi->update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealsApi->update: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**| the ID of the note to update | 
 **update_deal_note_request** | [**UpdateDealNoteRequest**](UpdateDealNoteRequest.md)| the request body containing updated note details | 

### Return type

[**DealNote**](DealNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the updated DealNote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

