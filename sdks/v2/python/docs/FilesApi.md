# keap_core_v2_client.FilesApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_file**](FilesApi.md#create_file) | **POST** /rest/v2/files | Create a file
[**delete_file**](FilesApi.md#delete_file) | **DELETE** /rest/v2/files/{file_id} | Delete a file
[**get_file**](FilesApi.md#get_file) | **GET** /rest/v2/files/{file_id} | Retrieve a file
[**get_file_data**](FilesApi.md#get_file_data) | **GET** /rest/v2/files/{file_id}:data | Retrieve a file&#39;s data
[**list_files**](FilesApi.md#list_files) | **GET** /rest/v2/files | List all files
[**update_file**](FilesApi.md#update_file) | **POST** /rest/v2/files/{file_id} | Update a file


# **create_file**
> FileMetadata create_file(file, file_name, is_public, file_association, file2, file_name2, is_public2, file_association2, contact_id=contact_id, contact_id2=contact_id2)

Create a file

Creates a file and uploads it

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.file_metadata import FileMetadata
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
    api_instance = keap_core_v2_client.FilesApi(api_client)
    file = None # bytearray | File to upload. This is a file sent as multi-part (not a string)
    file_name = 'file_name_example' # str | File name
    is_public = True # bool | Is public
    file_association = 'file_association_example' # str | File association
    file2 = None # bytearray | File to upload
    file_name2 = 'file_name_example' # str | File name
    is_public2 = 'is_public_example' # str | Is public
    file_association2 = 'file_association_example' # str | File association
    contact_id = 'contact_id_example' # str | Contact ID (optional)
    contact_id2 = 'contact_id_example' # str | Contact ID. Required if the `file_association` is CONTACT (optional)

    try:
        # Create a file
        api_response = api_instance.create_file(file, file_name, is_public, file_association, file2, file_name2, is_public2, file_association2, contact_id=contact_id, contact_id2=contact_id2)
        print("The response of FilesApi->create_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->create_file: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**| File to upload. This is a file sent as multi-part (not a string) | 
 **file_name** | **str**| File name | 
 **is_public** | **bool**| Is public | 
 **file_association** | **str**| File association | 
 **file2** | **bytearray**| File to upload | 
 **file_name2** | **str**| File name | 
 **is_public2** | **str**| Is public | 
 **file_association2** | **str**| File association | 
 **contact_id** | **str**| Contact ID | [optional] 
 **contact_id2** | **str**| Contact ID. Required if the &#x60;file_association&#x60; is CONTACT | [optional] 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

# **delete_file**
> delete_file(file_id)

Delete a file

Deletes a specified file

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
    api_instance = keap_core_v2_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | 

    try:
        # Delete a file
        api_instance.delete_file(file_id)
    except Exception as e:
        print("Exception when calling FilesApi->delete_file: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**|  | 

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

# **get_file**
> FileMetadata get_file(file_id)

Retrieve a file

Retrieves a file

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.file_metadata import FileMetadata
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
    api_instance = keap_core_v2_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | 

    try:
        # Retrieve a file
        api_response = api_instance.get_file(file_id)
        print("The response of FilesApi->get_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->get_file: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**|  | 

### Return type

[**FileMetadata**](FileMetadata.md)

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

# **get_file_data**
> bytearray get_file_data(file_id)

Retrieve a file's data

Retrieves a file's data

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
    api_instance = keap_core_v2_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | 

    try:
        # Retrieve a file's data
        api_response = api_instance.get_file_data(file_id)
        print("The response of FilesApi->get_file_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->get_file_data: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**|  | 

### Return type

**bytearray**

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

# **list_files**
> ListFilesResponse list_files(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List all files

Retrieves a list of files

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_files_response import ListFilesResponse
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
    api_instance = keap_core_v2_client.FilesApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (Boolean) `is_public` - (String) `contact_id` - (String) `user_id` - (FileBoxCategory) `category` - (FileBoxType) `file_box_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `file_name` - `updated_time` - ...  One of the following directions: - `asc` - `desc`  (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List all files
        api_response = api_instance.list_files(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of FilesApi->list_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->list_files: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListFilesResponse**](ListFilesResponse.md)

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

# **update_file**
> FileMetadata update_file(file_id, update_mask=update_mask, file=file, file_name=file_name, is_public=is_public, file2=file2, file_name2=file_name2, is_public2=is_public2)

Update a file

Updates a file. Note that this endpoint is using a POST method instead of PATCH.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.file_metadata import FileMetadata
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
    api_instance = keap_core_v2_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    file = None # bytearray | File to upload. This is a file sent as multi-part (not a string) (optional)
    file_name = 'file_name_example' # str | File name (optional)
    is_public = True # bool | Is public (optional)
    file2 = None # bytearray | File to upload (optional)
    file_name2 = 'file_name_example' # str | File name (optional)
    is_public2 = True # bool | Is public (optional)

    try:
        # Update a file
        api_response = api_instance.update_file(file_id, update_mask=update_mask, file=file, file_name=file_name, is_public=is_public, file2=file2, file_name2=file_name2, is_public2=is_public2)
        print("The response of FilesApi->update_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->update_file: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **file** | **bytearray**| File to upload. This is a file sent as multi-part (not a string) | [optional] 
 **file_name** | **str**| File name | [optional] 
 **is_public** | **bool**| Is public | [optional] 
 **file2** | **bytearray**| File to upload | [optional] 
 **file_name2** | **str**| File name | [optional] 
 **is_public2** | **bool**| Is public | [optional] 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

