# keap_core_v2_client.DealsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_deal**](DealsApi.md#create_deal) | **POST** /v2/deals | Creates a new deal.
[**create_note**](DealsApi.md#create_note) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal.
[**create_notes_bulk**](DealsApi.md#create_notes_bulk) | **POST** /v2/deals/-/notes | Creates new notes in bulk.
[**delete_deal**](DealsApi.md#delete_deal) | **DELETE** /v2/deals/{id} | Deletes a specific deal by its ID.
[**delete_note**](DealsApi.md#delete_note) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID.
[**get_deal**](DealsApi.md#get_deal) | **GET** /v2/deals/{deal_id} | Retrieves a specific deal by its ID.
[**get_note**](DealsApi.md#get_note) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID.
[**list_deals**](DealsApi.md#list_deals) | **GET** /v2/deals/-/contacts/{contact_id} | Lists all deals associated with a specific contact.
[**list_notes**](DealsApi.md#list_notes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal.
[**update_note**](DealsApi.md#update_note) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID.


# **create_deal**
> Deal create_deal(create_deal_request)

Creates a new deal.

Creates a new deal.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_deal_request import CreateDealRequest
from keap_core_v2_client.models.deal import Deal
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
    create_deal_request = keap_core_v2_client.CreateDealRequest() # CreateDealRequest | the request body containing deal details

    try:
        # Creates a new deal.
        api_response = api_instance.create_deal(create_deal_request)
        print("The response of DealsApi->create_deal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealsApi->create_deal: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_deal_request** | [**CreateDealRequest**](CreateDealRequest.md)| the request body containing deal details | 

### Return type

[**Deal**](Deal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | the created Deal |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
**201** | the created DealNote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_notes_bulk**
> BulkCreateDealNotesResponse create_notes_bulk(bulk_create_deal_notes_request)

Creates new notes in bulk.

Creates new notes in bulk.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.bulk_create_deal_notes_request import BulkCreateDealNotesRequest
from keap_core_v2_client.models.bulk_create_deal_notes_response import BulkCreateDealNotesResponse
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
    bulk_create_deal_notes_request = keap_core_v2_client.BulkCreateDealNotesRequest() # BulkCreateDealNotesRequest | the request body containing note details

    try:
        # Creates new notes in bulk.
        api_response = api_instance.create_notes_bulk(bulk_create_deal_notes_request)
        print("The response of DealsApi->create_notes_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealsApi->create_notes_bulk: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulk_create_deal_notes_request** | [**BulkCreateDealNotesRequest**](BulkCreateDealNotesRequest.md)| the request body containing note details | 

### Return type

[**BulkCreateDealNotesResponse**](BulkCreateDealNotesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | the created DealNote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_deal**
> delete_deal(id)

Deletes a specific deal by its ID.

Deletes a specific deal by its ID.

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
    id = 'id_example' # str | the ID of the deal to delete

    try:
        # Deletes a specific deal by its ID.
        api_instance.delete_deal(id)
    except Exception as e:
        print("Exception when calling DealsApi->delete_deal: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the ID of the deal to delete | 

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
**204** | deleteDeal 204 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_note**
> delete_note(note_id)

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
        api_instance.delete_note(note_id)
    except Exception as e:
        print("Exception when calling DealsApi->delete_note: %s\n" % e)
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

# **get_deal**
> Deal get_deal(deal_id)

Retrieves a specific deal by its ID.

Retrieves a specific deal by its ID.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.deal import Deal
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
    deal_id = 'deal_id_example' # str | the ID of the deal to retrieve

    try:
        # Retrieves a specific deal by its ID.
        api_response = api_instance.get_deal(deal_id)
        print("The response of DealsApi->get_deal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealsApi->get_deal: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deal_id** | **str**| the ID of the deal to retrieve | 

### Return type

[**Deal**](Deal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the requested Deal |  -  |

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

# **list_deals**
> DealListResponse list_deals(contact_id, filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)

Lists all deals associated with a specific contact.

Lists all deals associated with a specific contact.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.deal_list_response import DealListResponse
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
    contact_id = 'contact_id_example' # str | the contact ID to list deals for
    filter = 'filter_example' # str |  (optional)
    page_token = 'page_token_example' # str |  (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_size = 1000 # int |  (optional) (default to 1000)

    try:
        # Lists all deals associated with a specific contact.
        api_response = api_instance.list_deals(contact_id, filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)
        print("The response of DealsApi->list_deals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealsApi->list_deals: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| the contact ID to list deals for | 
 **filter** | **str**|  | [optional] 
 **page_token** | **str**|  | [optional] 
 **order_by** | **str**|  | [optional] 
 **page_size** | **int**|  | [optional] [default to 1000]

### Return type

[**DealListResponse**](DealListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of deals wrapped in a DealListResponse |  -  |

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

# **update_note**
> DealNote update_note(note_id, update_deal_note_request)

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
        api_response = api_instance.update_note(note_id, update_deal_note_request)
        print("The response of DealsApi->update_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealsApi->update_note: %s\n" % e)
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

