# keap_core_v2_client.TagsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apply_tags_using_post**](TagsApi.md#apply_tags_using_post) | **POST** /v2/tags/{tag_id}/contacts:applyTags | Apply Tag
[**create_tag_category_using_post1**](TagsApi.md#create_tag_category_using_post1) | **POST** /v2/tags/categories | Create Tag Category
[**create_tag_using_post1**](TagsApi.md#create_tag_using_post1) | **POST** /v2/tags | Create Tag
[**delete_tag_category_using_delete**](TagsApi.md#delete_tag_category_using_delete) | **DELETE** /v2/tags/categories/{tag_category_id} | Delete Tag Category
[**delete_tag_using_delete**](TagsApi.md#delete_tag_using_delete) | **DELETE** /v2/tags/{tag_id} | Delete Tag
[**get_category_using_get**](TagsApi.md#get_category_using_get) | **GET** /v2/tags/categories/{tag_category_id} | Retrieve a Tag Category
[**get_tag_using_get1**](TagsApi.md#get_tag_using_get1) | **GET** /v2/tags/{tag_id} | Retrieve a Tag
[**list_companies_for_tag_id_using_get1**](TagsApi.md#list_companies_for_tag_id_using_get1) | **GET** /v2/tags/{tag_id}/companies | List Tagged Companies
[**list_contacts_with_tag_id_using_get**](TagsApi.md#list_contacts_with_tag_id_using_get) | **GET** /v2/tags/{tag_id}/contacts | List Tagged Contacts
[**list_tag_categories_using_get**](TagsApi.md#list_tag_categories_using_get) | **GET** /v2/tags/categories | List Tag Categories
[**list_tags_using_get1**](TagsApi.md#list_tags_using_get1) | **GET** /v2/tags | List Tags
[**remove_tags_using_post**](TagsApi.md#remove_tags_using_post) | **POST** /v2/tags/{tag_id}/contacts:removeTags | Remove Tags
[**update_tag_category_using_patch**](TagsApi.md#update_tag_category_using_patch) | **PATCH** /v2/tags/categories/{tag_category_id} | Update a Tag Category
[**update_tag_using_patch**](TagsApi.md#update_tag_using_patch) | **PATCH** /v2/tags/{tag_id} | Update a Tag


# **apply_tags_using_post**
> ApplyTagsResponse apply_tags_using_post(tag_id, apply_remove_tag_request)

Apply Tag

Applies a Tag to a list of Contacts.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.apply_remove_tag_request import ApplyRemoveTagRequest
from keap_core_v2_client.models.apply_tags_response import ApplyTagsResponse
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    tag_id = 'tag_id_example' # str | tag_id
    apply_remove_tag_request = keap_core_v2_client.ApplyRemoveTagRequest() # ApplyRemoveTagRequest | applyRemoveTagRequest

    try:
        # Apply Tag
        api_response = api_instance.apply_tags_using_post(tag_id, apply_remove_tag_request)
        print("The response of TagsApi->apply_tags_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->apply_tags_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**| tag_id | 
 **apply_remove_tag_request** | [**ApplyRemoveTagRequest**](ApplyRemoveTagRequest.md)| applyRemoveTagRequest | 

### Return type

[**ApplyTagsResponse**](ApplyTagsResponse.md)

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tag_category_using_post1**
> Tag create_tag_category_using_post1(create_update_tag_category_request)

Create Tag Category

Creates a new Tag Category.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_update_tag_category_request import CreateUpdateTagCategoryRequest
from keap_core_v2_client.models.tag import Tag
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    create_update_tag_category_request = keap_core_v2_client.CreateUpdateTagCategoryRequest() # CreateUpdateTagCategoryRequest | request

    try:
        # Create Tag Category
        api_response = api_instance.create_tag_category_using_post1(create_update_tag_category_request)
        print("The response of TagsApi->create_tag_category_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->create_tag_category_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_update_tag_category_request** | [**CreateUpdateTagCategoryRequest**](CreateUpdateTagCategoryRequest.md)| request | 

### Return type

[**Tag**](Tag.md)

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

# **create_tag_using_post1**
> Tag create_tag_using_post1(create_update_tag_request)

Create Tag

Creates a new Tag

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_update_tag_request import CreateUpdateTagRequest
from keap_core_v2_client.models.tag import Tag
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    create_update_tag_request = keap_core_v2_client.CreateUpdateTagRequest() # CreateUpdateTagRequest | tag

    try:
        # Create Tag
        api_response = api_instance.create_tag_using_post1(create_update_tag_request)
        print("The response of TagsApi->create_tag_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->create_tag_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_update_tag_request** | [**CreateUpdateTagRequest**](CreateUpdateTagRequest.md)| tag | 

### Return type

[**Tag**](Tag.md)

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

# **delete_tag_category_using_delete**
> delete_tag_category_using_delete(tag_category_id)

Delete Tag Category

Deletes the specified Tag Category

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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    tag_category_id = 'tag_category_id_example' # str | tag_category_id

    try:
        # Delete Tag Category
        api_instance.delete_tag_category_using_delete(tag_category_id)
    except Exception as e:
        print("Exception when calling TagsApi->delete_tag_category_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_category_id** | **str**| tag_category_id | 

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

# **delete_tag_using_delete**
> delete_tag_using_delete(tag_id)

Delete Tag

Deletes a Tag.

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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    tag_id = 'tag_id_example' # str | tag_id

    try:
        # Delete Tag
        api_instance.delete_tag_using_delete(tag_id)
    except Exception as e:
        print("Exception when calling TagsApi->delete_tag_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**| tag_id | 

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

# **get_category_using_get**
> GetTagCategoryResponse get_category_using_get(tag_category_id)

Retrieve a Tag Category

Returns information about the specified Tag Category

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.get_tag_category_response import GetTagCategoryResponse
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    tag_category_id = 'tag_category_id_example' # str | tag_category_id

    try:
        # Retrieve a Tag Category
        api_response = api_instance.get_category_using_get(tag_category_id)
        print("The response of TagsApi->get_category_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->get_category_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_category_id** | **str**| tag_category_id | 

### Return type

[**GetTagCategoryResponse**](GetTagCategoryResponse.md)

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

# **get_tag_using_get1**
> Tag get_tag_using_get1(tag_id)

Retrieve a Tag

Retrieves information about the specified Tag

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.tag import Tag
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    tag_id = 'tag_id_example' # str | tag_id

    try:
        # Retrieve a Tag
        api_response = api_instance.get_tag_using_get1(tag_id)
        print("The response of TagsApi->get_tag_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->get_tag_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**| tag_id | 

### Return type

[**Tag**](Tag.md)

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

# **list_companies_for_tag_id_using_get1**
> ListTaggedCompaniesResponse list_companies_for_tag_id_using_get1(tag_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Tagged Companies

Retrieves a list of Companies that have the given Tag applied.
To search for `null` or empty fields use `filter==NONE`

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_tagged_companies_response import ListTaggedCompaniesResponse
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    tag_id = 'tag_id_example' # str | tag_id
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Tagged Companies
        api_response = api_instance.list_companies_for_tag_id_using_get1(tag_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of TagsApi->list_companies_for_tag_id_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->list_companies_for_tag_id_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**| tag_id | 
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListTaggedCompaniesResponse**](ListTaggedCompaniesResponse.md)

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

# **list_contacts_with_tag_id_using_get**
> ListTaggedContactsResponse list_contacts_with_tag_id_using_get(tag_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Tagged Contacts

Retrieves a list of Contacts with the specified Tag
To search for `null` or empty fields use `filter==NONE`

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_tagged_contacts_response import ListTaggedContactsResponse
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    tag_id = 'tag_id_example' # str | tag_id
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Tagged Contacts
        api_response = api_instance.list_contacts_with_tag_id_using_get(tag_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of TagsApi->list_contacts_with_tag_id_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->list_contacts_with_tag_id_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**| tag_id | 
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListTaggedContactsResponse**](ListTaggedContactsResponse.md)

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

# **list_tag_categories_using_get**
> ListTagCategoriesResponse list_tag_categories_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Tag Categories

Retrieves a list of defined Tag Categories
To search for `null` or empty fields use `filter==NONE`

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_tag_categories_response import ListTagCategoriesResponse
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Tag Categories
        api_response = api_instance.list_tag_categories_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of TagsApi->list_tag_categories_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->list_tag_categories_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListTagCategoriesResponse**](ListTagCategoriesResponse.md)

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

# **list_tags_using_get1**
> ListTagsResponse list_tags_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Tags

Retrieves a list of Tags defined in the application
To search for `null` or empty fields use `filter==NONE`

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_tags_response import ListTagsResponse
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Tags
        api_response = api_instance.list_tags_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of TagsApi->list_tags_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->list_tags_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListTagsResponse**](ListTagsResponse.md)

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

# **remove_tags_using_post**
> remove_tags_using_post(tag_id, apply_remove_tag_request)

Remove Tags

Removes a Tag from a list of Contacts.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.apply_remove_tag_request import ApplyRemoveTagRequest
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    tag_id = 'tag_id_example' # str | tag_id
    apply_remove_tag_request = keap_core_v2_client.ApplyRemoveTagRequest() # ApplyRemoveTagRequest | applyRemoveTagRequest

    try:
        # Remove Tags
        api_instance.remove_tags_using_post(tag_id, apply_remove_tag_request)
    except Exception as e:
        print("Exception when calling TagsApi->remove_tags_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**| tag_id | 
 **apply_remove_tag_request** | [**ApplyRemoveTagRequest**](ApplyRemoveTagRequest.md)| applyRemoveTagRequest | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_tag_category_using_patch**
> UpdateTagCategoryResponse update_tag_category_using_patch(tag_category_id, update_mask=update_mask, create_update_tag_category_request=create_update_tag_category_request)

Update a Tag Category

Updates a Tag Category with only the values provided in the request

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_update_tag_category_request import CreateUpdateTagCategoryRequest
from keap_core_v2_client.models.update_tag_category_response import UpdateTagCategoryResponse
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    tag_category_id = 'tag_category_id_example' # str | tag_category_id
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    create_update_tag_category_request = keap_core_v2_client.CreateUpdateTagCategoryRequest() # CreateUpdateTagCategoryRequest | tagCategory (optional)

    try:
        # Update a Tag Category
        api_response = api_instance.update_tag_category_using_patch(tag_category_id, update_mask=update_mask, create_update_tag_category_request=create_update_tag_category_request)
        print("The response of TagsApi->update_tag_category_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->update_tag_category_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_category_id** | **str**| tag_category_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **create_update_tag_category_request** | [**CreateUpdateTagCategoryRequest**](CreateUpdateTagCategoryRequest.md)| tagCategory | [optional] 

### Return type

[**UpdateTagCategoryResponse**](UpdateTagCategoryResponse.md)

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

# **update_tag_using_patch**
> UpdateTagResponse update_tag_using_patch(tag_id, update_mask=update_mask, create_update_tag_request=create_update_tag_request)

Update a Tag

Updates a Tag with only the values provided in the request

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_update_tag_request import CreateUpdateTagRequest
from keap_core_v2_client.models.update_tag_response import UpdateTagResponse
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
    api_instance = keap_core_v2_client.TagsApi(api_client)
    tag_id = 'tag_id_example' # str | tag_id
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    create_update_tag_request = keap_core_v2_client.CreateUpdateTagRequest() # CreateUpdateTagRequest | tag (optional)

    try:
        # Update a Tag
        api_response = api_instance.update_tag_using_patch(tag_id, update_mask=update_mask, create_update_tag_request=create_update_tag_request)
        print("The response of TagsApi->update_tag_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->update_tag_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**| tag_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **create_update_tag_request** | [**CreateUpdateTagRequest**](CreateUpdateTagRequest.md)| tag | [optional] 

### Return type

[**UpdateTagResponse**](UpdateTagResponse.md)

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

