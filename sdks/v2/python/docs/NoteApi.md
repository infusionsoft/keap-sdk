# keap_core_v2_client.NoteApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_note**](NoteApi.md#create_note) | **POST** /v2/contacts/{contact_id}/notes | Create a Note
[**create_note_custom_field**](NoteApi.md#create_note_custom_field) | **POST** /v2/notes/model/customFields | Create a Custom Field
[**delete_note**](NoteApi.md#delete_note) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note
[**get_note**](NoteApi.md#get_note) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note
[**list_note_templates**](NoteApi.md#list_note_templates) | **GET** /v2/notes/templates | Retrieve Note Templates
[**list_notes**](NoteApi.md#list_notes) | **GET** /v2/contacts/{contact_id}/notes | List Notes
[**retrieve_note_model**](NoteApi.md#retrieve_note_model) | **GET** /v2/notes/model | Retrieve Note Model
[**update_note**](NoteApi.md#update_note) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note
[**update_notes_custom_field**](NoteApi.md#update_notes_custom_field) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field


# **create_note**
> Note create_note(contact_id, create_note_request)

Create a Note

Creates a new Note.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_note_request import CreateNoteRequest
from keap_core_v2_client.models.note import Note
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
    api_instance = keap_core_v2_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    create_note_request = keap_core_v2_client.CreateNoteRequest() # CreateNoteRequest | request

    try:
        # Create a Note
        api_response = api_instance.create_note(contact_id, create_note_request)
        print("The response of NoteApi->create_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->create_note: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **create_note_request** | [**CreateNoteRequest**](CreateNoteRequest.md)| request | 

### Return type

[**Note**](Note.md)

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

# **create_note_custom_field**
> CustomFieldMetaData create_note_custom_field(create_custom_field_request)

Create a Custom Field

Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
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
    api_instance = keap_core_v2_client.NoteApi(api_client)
    create_custom_field_request = keap_core_v2_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

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
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

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
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_note**
> delete_note(contact_id, note_id)

Delete a Note

Deletes the specified Note

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
    api_instance = keap_core_v2_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    note_id = 'note_id_example' # str | note_id

    try:
        # Delete a Note
        api_instance.delete_note(contact_id, note_id)
    except Exception as e:
        print("Exception when calling NoteApi->delete_note: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **note_id** | **str**| note_id | 

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

# **get_note**
> GetNoteResponse get_note(contact_id, note_id)

Retrieve a Note

Retrieves the specified Note

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.get_note_response import GetNoteResponse
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
    api_instance = keap_core_v2_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    note_id = 'note_id_example' # str | note_id

    try:
        # Retrieve a Note
        api_response = api_instance.get_note(contact_id, note_id)
        print("The response of NoteApi->get_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->get_note: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **note_id** | **str**| note_id | 

### Return type

[**GetNoteResponse**](GetNoteResponse.md)

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

# **list_note_templates**
> ListNoteTemplateResponse list_note_templates(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieve Note Templates

Retrieves a list of Note Templates

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_note_template_response import ListNoteTemplateResponse
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

# **list_notes**
> ListNotesResponse list_notes(contact_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Notes

Retrieves a list of Notes

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_notes_response import ListNotesResponse
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
    api_instance = keap_core_v2_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `assigned_to_user_id` - (String) `title` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=assigned_to_user_id%3D%3DUserId` - `filter=title%3D%3DexpectedTitle` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id` - `create_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Notes
        api_response = api_instance.list_notes(contact_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of NoteApi->list_notes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->list_notes: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;title&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;assigned_to_user_id%3D%3DUserId&#x60; - &#x60;filter&#x3D;title%3D%3DexpectedTitle&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

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

# **retrieve_note_model**
> ObjectModel retrieve_note_model()

Retrieve Note Model

Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

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

# **update_note**
> UpdateNoteResponse update_note(contact_id, note_id, update_note_request, update_mask=update_mask)

Update a Note

Updates a Note for a Contact

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.update_note_request import UpdateNoteRequest
from keap_core_v2_client.models.update_note_response import UpdateNoteResponse
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
    api_instance = keap_core_v2_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    note_id = 'note_id_example' # str | note_id
    update_note_request = keap_core_v2_client.UpdateNoteRequest() # UpdateNoteRequest | updateNoteRequest
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Note
        api_response = api_instance.update_note(contact_id, note_id, update_note_request, update_mask=update_mask)
        print("The response of NoteApi->update_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->update_note: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **note_id** | **str**| note_id | 
 **update_note_request** | [**UpdateNoteRequest**](UpdateNoteRequest.md)| updateNoteRequest | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**UpdateNoteResponse**](UpdateNoteResponse.md)

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

# **update_notes_custom_field**
> CustomFieldMetaData update_notes_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

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
    api_instance = keap_core_v2_client.NoteApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    update_custom_field_meta_data_request = keap_core_v2_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
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

