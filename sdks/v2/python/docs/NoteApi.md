# keap_core_v2_client.NoteApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_note**](NoteApi.md#create_note) | **POST** /rest/v2/contacts/{contact_id}/notes | Create a Note
[**create_note_custom_field**](NoteApi.md#create_note_custom_field) | **POST** /rest/v2/notes/model/customFields | Create a Custom Field
[**delete_note**](NoteApi.md#delete_note) | **DELETE** /rest/v2/contacts/{contact_id}/notes/{note_id} | Delete a Note
[**delete_notes_custom_field**](NoteApi.md#delete_notes_custom_field) | **DELETE** /rest/v2/notes/model/customFields/{custom_field_id} | Delete a Note Custom Field
[**get_note**](NoteApi.md#get_note) | **GET** /rest/v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note
[**list_all_notes**](NoteApi.md#list_all_notes) | **GET** /rest/v2/notes | List All Notes
[**list_note_templates**](NoteApi.md#list_note_templates) | **GET** /rest/v2/notes/templates | Retrieve Note Templates
[**list_notes**](NoteApi.md#list_notes) | **GET** /rest/v2/contacts/{contact_id}/notes | List Notes
[**retrieve_note_model**](NoteApi.md#retrieve_note_model) | **GET** /rest/v2/notes/model | Retrieve Note Model
[**update_note**](NoteApi.md#update_note) | **PATCH** /rest/v2/contacts/{contact_id}/notes/{note_id} | Update a Note
[**update_notes_custom_field**](NoteApi.md#update_notes_custom_field) | **PATCH** /rest/v2/notes/model/customFields/{custom_field_id} | Update a Custom Field


# **create_note**
> Note create_note(contact_id, create_note_request, fields=fields)

Create a Note

Creates a new Note.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_note_request import CreateNoteRequest
from keap_core_v2_client.models.note import Note
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | 
    create_note_request = keap_core_v2_client.CreateNoteRequest() # CreateNoteRequest | 
    fields = ['fields_example'] # List[str] | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields (optional)

    try:
        # Create a Note
        api_response = api_instance.create_note(contact_id, create_note_request, fields=fields)
        print("The response of NoteApi->create_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->create_note: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 
 **create_note_request** | [**CreateNoteRequest**](CreateNoteRequest.md)|  | 
 **fields** | [**List[str]**](str.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_note_custom_field**
> CustomFieldMetaData create_note_custom_field(create_custom_field_request)

Create a Custom Field

Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)
    create_custom_field_request = keap_core_v2_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | 

    try:
        # Create a Custom Field
        api_response = api_instance.create_note_custom_field(create_custom_field_request)
        print("The response of NoteApi->create_note_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->create_note_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_note**
> delete_note(contact_id, note_id)

Delete a Note

Deletes the specified Note

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | 
    note_id = 'note_id_example' # str | 

    try:
        # Delete a Note
        api_instance.delete_note(contact_id, note_id)
    except Exception as e:
        print("Exception when calling NoteApi->delete_note: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 
 **note_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_notes_custom_field**
> delete_notes_custom_field(custom_field_id)

Delete a Note Custom Field

Deletes a Custom Field from the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | 

    try:
        # Delete a Note Custom Field
        api_instance.delete_notes_custom_field(custom_field_id)
    except Exception as e:
        print("Exception when calling NoteApi->delete_notes_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_note**
> GetNoteResponse get_note(contact_id, note_id, fields=fields)

Retrieve a Note

Retrieves the specified Note

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.get_note_response import GetNoteResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | 
    note_id = 'note_id_example' # str | 
    fields = ['fields_example'] # List[str] | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields (optional)

    try:
        # Retrieve a Note
        api_response = api_instance.get_note(contact_id, note_id, fields=fields)
        print("The response of NoteApi->get_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->get_note: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 
 **note_id** | **str**|  | 
 **fields** | [**List[str]**](str.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] 

### Return type

[**GetNoteResponse**](GetNoteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_notes**
> ListNotesResponse list_all_notes(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size, fields=fields)

List All Notes

Retrieves a list of all notes

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_notes_response import ListNotesResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)
    filter = 'filter_example' # str | Filter to apply. Allowed fields and operators: - (String) `id` — supports `==`, `!=`, `>`, `<`, `>=`, `<=` - (String list) `ids` — comma-separated note ids, supports `==` only (e.g. `ids==1,2,3`) - (String) `title` — supports `==`. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. `title==Follow*`) - (String) `contact_id` - (String) `assigned_to_user_id` - (String) `since_time` — ISO-8601 date/time - (String) `until_time` — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: `==` → `%3D%3D`, `!=` → `!%3D`, `>` → `%3E`, `<` → `%3C`, `>=` → `%3E%3D`, `<=` → `%3C%3D`, `*` → `%2A`.  Multiple filters are combined with AND using `;`.  Examples: - `filter=contact_id%3D%3D1001` - `filter=id%3E5` - `filter=ids%3D%3D1,2,3` - `filter=title%3D%3DFollow%2A` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  Notes: - `id` and `ids` cannot be combined in the same request. - Wildcard `*` may only appear at the end of the value (prefix match).    Leading wildcards (`*foo`, `*foo*`) are rejected for performance reasons.  (optional)
    page_token = 'page_token_example' # str | Page token (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    fields = ['fields_example'] # List[str] | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields (optional)

    try:
        # List All Notes
        api_response = api_instance.list_all_notes(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size, fields=fields)
        print("The response of NoteApi->list_all_notes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->list_all_notes: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply. Allowed fields and operators: - (String) &#x60;id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String list) &#x60;ids&#x60; — comma-separated note ids, supports &#x60;&#x3D;&#x3D;&#x60; only (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;title&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. &#x60;title&#x3D;&#x3D;Follow*&#x60;) - (String) &#x60;contact_id&#x60; - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;since_time&#x60; — ISO-8601 date/time - (String) &#x60;until_time&#x60; — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: &#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;!&#x3D;&#x60; → &#x60;!%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;, &#x60;&gt;&#x3D;&#x60; → &#x60;%3E%3D&#x60;, &#x60;&lt;&#x3D;&#x60; → &#x60;%3C%3D&#x60;, &#x60;*&#x60; → &#x60;%2A&#x60;.  Multiple filters are combined with AND using &#x60;;&#x60;.  Examples: - &#x60;filter&#x3D;contact_id%3D%3D1001&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  Notes: - &#x60;id&#x60; and &#x60;ids&#x60; cannot be combined in the same request. - Wildcard &#x60;*&#x60; may only appear at the end of the value (prefix match).    Leading wildcards (&#x60;*foo&#x60;, &#x60;*foo*&#x60;) are rejected for performance reasons.  | [optional] 
 **page_token** | **str**| Page token | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **fields** | [**List[str]**](str.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] 

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_note_templates**
> ListNoteTemplateResponse list_note_templates(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieve Note Templates

Retrieves a list of Note Templates

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_note_template_response import ListNoteTemplateResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # Retrieve Note Templates
        api_response = api_instance.list_note_templates(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of NoteApi->list_note_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->list_note_templates: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListNoteTemplateResponse**](ListNoteTemplateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_notes**
> ListNotesResponse list_notes(contact_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, fields=fields)

List Notes

Retrieves a list of Notes for a given contact

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_notes_response import ListNotesResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | 
    filter = 'filter_example' # str | Filter to apply. Allowed fields and operators: - (String) `id` — supports `==`, `!=`, `>`, `<`, `>=`, `<=` - (String list) `ids` — comma-separated note ids, supports `==` only (e.g. `ids==1,2,3`) - (String) `title` — supports `==`. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. `title==Follow*`) - (String) `contact_id` - (String) `assigned_to_user_id` - (String) `since_time` — ISO-8601 date/time - (String) `until_time` — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: `==` → `%3D%3D`, `!=` → `!%3D`, `>` → `%3E`, `<` → `%3C`, `>=` → `%3E%3D`, `<=` → `%3C%3D`, `*` → `%2A`.  Multiple filters are combined with AND using `;`.  Examples: - `filter=contact_id%3D%3D1001` - `filter=id%3E5` - `filter=ids%3D%3D1,2,3` - `filter=title%3D%3DFollow%2A` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  Notes: - `id` and `ids` cannot be combined in the same request. - Wildcard `*` may only appear at the end of the value (prefix match).    Leading wildcards (`*foo`, `*foo*`) are rejected for performance reasons.  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)
    fields = ['fields_example'] # List[str] | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields (optional)

    try:
        # List Notes
        api_response = api_instance.list_notes(contact_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, fields=fields)
        print("The response of NoteApi->list_notes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->list_notes: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 
 **filter** | **str**| Filter to apply. Allowed fields and operators: - (String) &#x60;id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String list) &#x60;ids&#x60; — comma-separated note ids, supports &#x60;&#x3D;&#x3D;&#x60; only (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;title&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. &#x60;title&#x3D;&#x3D;Follow*&#x60;) - (String) &#x60;contact_id&#x60; - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;since_time&#x60; — ISO-8601 date/time - (String) &#x60;until_time&#x60; — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: &#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;!&#x3D;&#x60; → &#x60;!%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;, &#x60;&gt;&#x3D;&#x60; → &#x60;%3E%3D&#x60;, &#x60;&lt;&#x3D;&#x60; → &#x60;%3C%3D&#x60;, &#x60;*&#x60; → &#x60;%2A&#x60;.  Multiple filters are combined with AND using &#x60;;&#x60;.  Examples: - &#x60;filter&#x3D;contact_id%3D%3D1001&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  Notes: - &#x60;id&#x60; and &#x60;ids&#x60; cannot be combined in the same request. - Wildcard &#x60;*&#x60; may only appear at the end of the value (prefix match).    Leading wildcards (&#x60;*foo&#x60;, &#x60;*foo*&#x60;) are rejected for performance reasons.  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 
 **fields** | [**List[str]**](str.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] 

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_note_model**
> ObjectModel retrieve_note_model()

Retrieve Note Model

Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.object_model import ObjectModel
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)

    try:
        # Retrieve Note Model
        api_response = api_instance.retrieve_note_model()
        print("The response of NoteApi->retrieve_note_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->retrieve_note_model: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_note**
> UpdateNoteResponse update_note(contact_id, note_id, update_note_request, update_mask=update_mask, fields=fields)

Update a Note

Updates a Note for a Contact

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.update_note_request import UpdateNoteRequest
from keap_core_v2_client.models.update_note_response import UpdateNoteResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | 
    note_id = 'note_id_example' # str | 
    update_note_request = keap_core_v2_client.UpdateNoteRequest() # UpdateNoteRequest | 
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    fields = ['fields_example'] # List[str] | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields (optional)

    try:
        # Update a Note
        api_response = api_instance.update_note(contact_id, note_id, update_note_request, update_mask=update_mask, fields=fields)
        print("The response of NoteApi->update_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->update_note: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**|  | 
 **note_id** | **str**|  | 
 **update_note_request** | [**UpdateNoteRequest**](UpdateNoteRequest.md)|  | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **fields** | [**List[str]**](str.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] 

### Return type

[**UpdateNoteResponse**](UpdateNoteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_notes_custom_field**
> CustomFieldMetaData update_notes_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_core_v2_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.NoteApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | 
    update_custom_field_meta_data_request = keap_core_v2_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | 
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Custom Field
        api_response = api_instance.update_notes_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)
        print("The response of NoteApi->update_notes_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->update_notes_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**|  | 
 **update_custom_field_meta_data_request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

