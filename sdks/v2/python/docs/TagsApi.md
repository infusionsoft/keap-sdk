# keap_core_v2_client.TagsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apply_tags**](TagsApi.md#apply_tags) | **POST** /v2/tags/{tag_id}/contacts:applyTags | Apply Tag
[**create_tag**](TagsApi.md#create_tag) | **POST** /v2/tags | Create Tag
[**create_tag_category**](TagsApi.md#create_tag_category) | **POST** /v2/tags/categories | Create Tag Category
[**delete_tag**](TagsApi.md#delete_tag) | **DELETE** /v2/tags/{tag_id} | Delete Tag
[**delete_tag_category**](TagsApi.md#delete_tag_category) | **DELETE** /v2/tags/categories/{tag_category_id} | Delete Tag Category
[**get_category**](TagsApi.md#get_category) | **GET** /v2/tags/categories/{tag_category_id} | Retrieve a Tag Category
[**get_tag**](TagsApi.md#get_tag) | **GET** /v2/tags/{tag_id} | Retrieve a Tag
[**list_companies_for_tag_id**](TagsApi.md#list_companies_for_tag_id) | **GET** /v2/tags/{tag_id}/companies | List Tagged Companies
[**list_contacts_with_tag_id**](TagsApi.md#list_contacts_with_tag_id) | **GET** /v2/tags/{tag_id}/contacts | List Tagged Contacts
[**list_tag_categories**](TagsApi.md#list_tag_categories) | **GET** /v2/tags/categories | List Tag Categories
[**list_tags**](TagsApi.md#list_tags) | **GET** /v2/tags | List Tags
[**remove_tags**](TagsApi.md#remove_tags) | **POST** /v2/tags/{tag_id}/contacts:removeTags | Remove Tags
[**update_tag**](TagsApi.md#update_tag) | **PATCH** /v2/tags/{tag_id} | Update a Tag
[**update_tag_category**](TagsApi.md#update_tag_category) | **PATCH** /v2/tags/categories/{tag_category_id} | Update a Tag Category


# **apply_tags**
> ApplyTagsResponse apply_tags(tag_id, apply_remove_tag_request)

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
        api_response = api_instance.apply_tags(tag_id, apply_remove_tag_request)
        print("The response of TagsApi->apply_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->apply_tags: %s\n" % e)
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

# **create_tag**
> Tag create_tag(create_update_tag_request)

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
        api_response = api_instance.create_tag(create_update_tag_request)
        print("The response of TagsApi->create_tag:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->create_tag: %s\n" % e)
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

# **create_tag_category**
> TagCategory create_tag_category(create_update_tag_category_request)

Create Tag Category

Creates a new Tag Category.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_update_tag_category_request import CreateUpdateTagCategoryRequest
from keap_core_v2_client.models.tag_category import TagCategory
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
        api_response = api_instance.create_tag_category(create_update_tag_category_request)
        print("The response of TagsApi->create_tag_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->create_tag_category: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_update_tag_category_request** | [**CreateUpdateTagCategoryRequest**](CreateUpdateTagCategoryRequest.md)| request | 

### Return type

[**TagCategory**](TagCategory.md)

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

# **delete_tag**
> delete_tag(tag_id)

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
        api_instance.delete_tag(tag_id)
    except Exception as e:
        print("Exception when calling TagsApi->delete_tag: %s\n" % e)
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

# **delete_tag_category**
> delete_tag_category(tag_category_id)

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
        api_instance.delete_tag_category(tag_category_id)
    except Exception as e:
        print("Exception when calling TagsApi->delete_tag_category: %s\n" % e)
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

# **get_category**
> GetTagCategoryResponse get_category(tag_category_id)

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
        api_response = api_instance.get_category(tag_category_id)
        print("The response of TagsApi->get_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->get_category: %s\n" % e)
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

# **get_tag**
> Tag get_tag(tag_id)

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
        api_response = api_instance.get_tag(tag_id)
        print("The response of TagsApi->get_tag:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->get_tag: %s\n" % e)
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

# **list_companies_for_tag_id**
> ListTaggedCompaniesResponse list_companies_for_tag_id(tag_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

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
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `company_name` - (String) `email` - (String) `since_applied_time` - (String) `until_applied_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `email`, it will check for the non-existence of that field. For the filters listed above, here are some examples: - `filter=company_name%3D%3DCompany` - `filter=email%3D%3Dtest@gmail.com` - `filter=since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `company_name` - `email` - `applied_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Tagged Companies
        api_response = api_instance.list_companies_for_tag_id(tag_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of TagsApi->list_companies_for_tag_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->list_companies_for_tag_id: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**| tag_id | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;company_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
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

# **list_contacts_with_tag_id**
> ListTaggedContactsResponse list_contacts_with_tag_id(tag_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

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
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `given_name` - (String) `family_name` - (String) `email` - (String) `since_applied_time` - (String) `until_applied_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `email`, `given_name`, or `family_name`, it will check for the non-existence of that field. For the filters listed above, here are some examples: - `filter=given_name%3D%3DJohn` - `filter=family_name%3D%3DSmith` - `filter=email%3D%3DNONE` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `given_name` - `family_name` - `email` - `applied_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Tagged Contacts
        api_response = api_instance.list_contacts_with_tag_id(tag_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of TagsApi->list_contacts_with_tag_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->list_contacts_with_tag_id: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**| tag_id | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, &#x60;given_name&#x60;, or &#x60;family_name&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DJohn&#x60; - &#x60;filter&#x3D;family_name%3D%3DSmith&#x60; - &#x60;filter&#x3D;email%3D%3DNONE&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;given_name&#x60; - &#x60;family_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
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

# **list_tag_categories**
> ListTagCategoriesResponse list_tag_categories(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

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
    filter = 'filter_example' # str | Filter to apply, allowed fields are:  - (String) `name` - (String) `description` - (String) `since_create_time` - (String) `until_create_time` - (String) `since_update_time` - (String) `until_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `category_id` or `description`, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - `filter=name%3D%3Dmy-tag` - `filter=description%3D%3DNONE` - `filter=since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields:  - `name` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Tag Categories
        api_response = api_instance.list_tag_categories(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of TagsApi->list_tag_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->list_tag_categories: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
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

# **list_tags**
> ListTagsResponse list_tags(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

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
    filter = 'filter_example' # str | Filter to apply, allowed fields are:  - (String) `name` - (String) `description` - (String) `category_id` - (String) `since_create_time` - (String) `until_create_time` - (String) `since_update_time` - (String) `until_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `category_id` or `description`, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - `filter=name%3D%3Dmy-tag` - `filter=category_id%3D%3DNONE` - `filter=description%3D%3DNONE` - `filter=since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields:  - `name` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Tags
        api_response = api_instance.list_tags(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of TagsApi->list_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->list_tags: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
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

# **remove_tags**
> remove_tags(tag_id, apply_remove_tag_request)

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
        api_instance.remove_tags(tag_id, apply_remove_tag_request)
    except Exception as e:
        print("Exception when calling TagsApi->remove_tags: %s\n" % e)
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

# **update_tag**
> UpdateTagResponse update_tag(tag_id, update_mask=update_mask, create_update_tag_request=create_update_tag_request)

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
        api_response = api_instance.update_tag(tag_id, update_mask=update_mask, create_update_tag_request=create_update_tag_request)
        print("The response of TagsApi->update_tag:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->update_tag: %s\n" % e)
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

# **update_tag_category**
> UpdateTagCategoryResponse update_tag_category(tag_category_id, update_mask=update_mask, create_update_tag_category_request=create_update_tag_category_request)

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
        api_response = api_instance.update_tag_category(tag_category_id, update_mask=update_mask, create_update_tag_category_request=create_update_tag_category_request)
        print("The response of TagsApi->update_tag_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->update_tag_category: %s\n" % e)
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

