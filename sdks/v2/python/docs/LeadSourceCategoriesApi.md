# keap_core_v2_client.LeadSourceCategoriesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_lead_source_category_using_post**](LeadSourceCategoriesApi.md#create_lead_source_category_using_post) | **POST** /v2/leadSourceCategories | Create a Lead Source Category
[**delete_lead_source_category_using_delete**](LeadSourceCategoriesApi.md#delete_lead_source_category_using_delete) | **DELETE** /v2/leadSourceCategories/{lead_source_category_id} | Delete a Lead Source Category
[**get_lead_source_category_using_get**](LeadSourceCategoriesApi.md#get_lead_source_category_using_get) | **GET** /v2/leadSourceCategories/{lead_source_category_id} | Retrieve a Lead Source Category
[**list_categories_using_get1**](LeadSourceCategoriesApi.md#list_categories_using_get1) | **GET** /v2/leadSourceCategories | List Lead Source Categories
[**update_lead_source_category_using_patch**](LeadSourceCategoriesApi.md#update_lead_source_category_using_patch) | **PATCH** /v2/leadSourceCategories/{lead_source_category_id} | Update a Lead Source Category


# **create_lead_source_category_using_post**
> LeadSourceCategory create_lead_source_category_using_post(create_update_lead_source_category_request)

Create a Lead Source Category

Creates a new Lead Source Category

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_update_lead_source_category_request import CreateUpdateLeadSourceCategoryRequest
from keap_core_v2_client.models.lead_source_category import LeadSourceCategory
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
    api_instance = keap_core_v2_client.LeadSourceCategoriesApi(api_client)
    create_update_lead_source_category_request = keap_core_v2_client.CreateUpdateLeadSourceCategoryRequest() # CreateUpdateLeadSourceCategoryRequest | The request object to create a new lead source category

    try:
        # Create a Lead Source Category
        api_response = api_instance.create_lead_source_category_using_post(create_update_lead_source_category_request)
        print("The response of LeadSourceCategoriesApi->create_lead_source_category_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceCategoriesApi->create_lead_source_category_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_update_lead_source_category_request** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| The request object to create a new lead source category | 

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

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

# **delete_lead_source_category_using_delete**
> delete_lead_source_category_using_delete(lead_source_category_id)

Delete a Lead Source Category

Deletes the specified Lead Source Category

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
    api_instance = keap_core_v2_client.LeadSourceCategoriesApi(api_client)
    lead_source_category_id = 'lead_source_category_id_example' # str | The ID of a lead source category

    try:
        # Delete a Lead Source Category
        api_instance.delete_lead_source_category_using_delete(lead_source_category_id)
    except Exception as e:
        print("Exception when calling LeadSourceCategoriesApi->delete_lead_source_category_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_category_id** | **str**| The ID of a lead source category | 

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

# **get_lead_source_category_using_get**
> LeadSourceCategory get_lead_source_category_using_get(lead_source_category_id)

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given ID

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.lead_source_category import LeadSourceCategory
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
    api_instance = keap_core_v2_client.LeadSourceCategoriesApi(api_client)
    lead_source_category_id = 'lead_source_category_id_example' # str | The ID of a lead source category

    try:
        # Retrieve a Lead Source Category
        api_response = api_instance.get_lead_source_category_using_get(lead_source_category_id)
        print("The response of LeadSourceCategoriesApi->get_lead_source_category_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceCategoriesApi->get_lead_source_category_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_category_id** | **str**| The ID of a lead source category | 

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

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

# **list_categories_using_get1**
> ListLeadSourceCategoriesResponse list_categories_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Lead Source Categories

Retrieves a list of Lead Source Categories

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_lead_source_categories_response import ListLeadSourceCategoriesResponse
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
    api_instance = keap_core_v2_client.LeadSourceCategoriesApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:  - (String) `name`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here is an example:  - `filter=name%3D%3Dexample` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Lead Source Categories
        api_response = api_instance.list_categories_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of LeadSourceCategoriesApi->list_categories_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceCategoriesApi->list_categories_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListLeadSourceCategoriesResponse**](ListLeadSourceCategoriesResponse.md)

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

# **update_lead_source_category_using_patch**
> LeadSourceCategory update_lead_source_category_using_patch(lead_source_category_id, create_update_lead_source_category_request, update_mask=update_mask)

Update a Lead Source Category

Updates a Lead Source Category

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_update_lead_source_category_request import CreateUpdateLeadSourceCategoryRequest
from keap_core_v2_client.models.lead_source_category import LeadSourceCategory
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
    api_instance = keap_core_v2_client.LeadSourceCategoriesApi(api_client)
    lead_source_category_id = 'lead_source_category_id_example' # str | The ID of a lead source category
    create_update_lead_source_category_request = keap_core_v2_client.CreateUpdateLeadSourceCategoryRequest() # CreateUpdateLeadSourceCategoryRequest | The request object to update a lead source category
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Lead Source Category
        api_response = api_instance.update_lead_source_category_using_patch(lead_source_category_id, create_update_lead_source_category_request, update_mask=update_mask)
        print("The response of LeadSourceCategoriesApi->update_lead_source_category_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceCategoriesApi->update_lead_source_category_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_category_id** | **str**| The ID of a lead source category | 
 **create_update_lead_source_category_request** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| The request object to update a lead source category | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

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

