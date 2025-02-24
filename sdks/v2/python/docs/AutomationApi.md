# keap_core_v2_client.AutomationApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_contacts_to_automation_sequence_using_post**](AutomationApi.md#add_contacts_to_automation_sequence_using_post) | **POST** /v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence
[**delete_automation_using_delete**](AutomationApi.md#delete_automation_using_delete) | **DELETE** /v2/automations | Delete an Automation
[**get_automation_using_get**](AutomationApi.md#get_automation_using_get) | **GET** /v2/automations/{automation_id} | Retrieve an Automation
[**list_all_automation_ids_using_get**](AutomationApi.md#list_all_automation_ids_using_get) | **GET** /v2/automations/ids | List Automations Ids
[**list_automations_using_get**](AutomationApi.md#list_automations_using_get) | **GET** /v2/automations | List Automations
[**update_automation_category_using_put**](AutomationApi.md#update_automation_category_using_put) | **PUT** /v2/automations/category | Update an Automation&#39;s Category


# **add_contacts_to_automation_sequence_using_post**
> AddToAutomationSequenceResponse add_contacts_to_automation_sequence_using_post(automation_id, sequence_id, add_to_automation_sequence_request)

Add Contacts to an Automation Sequence

Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.add_to_automation_sequence_request import AddToAutomationSequenceRequest
from keap_core_v2_client.models.add_to_automation_sequence_response import AddToAutomationSequenceResponse
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    automation_id = 'automation_id_example' # str | automation_id
    sequence_id = 'sequence_id_example' # str | sequence_id
    add_to_automation_sequence_request = keap_core_v2_client.AddToAutomationSequenceRequest() # AddToAutomationSequenceRequest | addToAutomationSequenceRequest

    try:
        # Add Contacts to an Automation Sequence
        api_response = api_instance.add_contacts_to_automation_sequence_using_post(automation_id, sequence_id, add_to_automation_sequence_request)
        print("The response of AutomationApi->add_contacts_to_automation_sequence_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationApi->add_contacts_to_automation_sequence_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automation_id** | **str**| automation_id | 
 **sequence_id** | **str**| sequence_id | 
 **add_to_automation_sequence_request** | [**AddToAutomationSequenceRequest**](AddToAutomationSequenceRequest.md)| addToAutomationSequenceRequest | 

### Return type

[**AddToAutomationSequenceResponse**](AddToAutomationSequenceResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_automation_using_delete**
> delete_automation_using_delete(automation_ids)

Delete an Automation

Deletes a single automation

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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    automation_ids = [56] # List[int] | automation_ids

    try:
        # Delete an Automation
        api_instance.delete_automation_using_delete(automation_ids)
    except Exception as e:
        print("Exception when calling AutomationApi->delete_automation_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automation_ids** | [**List[int]**](int.md)| automation_ids | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_automation_using_get**
> Automation get_automation_using_get(automation_id)

Retrieve an Automation

Retrieves a single automation

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.automation import Automation
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    automation_id = 'automation_id_example' # str | automation_id

    try:
        # Retrieve an Automation
        api_response = api_instance.get_automation_using_get(automation_id)
        print("The response of AutomationApi->get_automation_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationApi->get_automation_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automation_id** | **str**| automation_id | 

### Return type

[**Automation**](Automation.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_automation_ids_using_get**
> ListAutomationIdsResponse list_all_automation_ids_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, stats=stats)

List Automations Ids

Retrieves a list of automations IDs

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_automation_ids_response import ListAutomationIdsResponse
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)
    stats = True # bool |  (optional)

    try:
        # List Automations Ids
        api_response = api_instance.list_all_automation_ids_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, stats=stats)
        print("The response of AutomationApi->list_all_automation_ids_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationApi->list_all_automation_ids_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 
 **stats** | **bool**|  | [optional] 

### Return type

[**ListAutomationIdsResponse**](ListAutomationIdsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_automations_using_get**
> ListAutomationResponse list_automations_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, stats=stats)

List Automations

Retrieves a list of automations

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_automation_response import ListAutomationResponse
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)
    stats = True # bool |  (optional)

    try:
        # List Automations
        api_response = api_instance.list_automations_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, stats=stats)
        print("The response of AutomationApi->list_automations_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationApi->list_automations_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 
 **stats** | **bool**|  | [optional] 

### Return type

[**ListAutomationResponse**](ListAutomationResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_automation_category_using_put**
> update_automation_category_using_put(update_automation_category_request)

Update an Automation's Category

Updates the category of one or more automations

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.update_automation_category_request import UpdateAutomationCategoryRequest
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    update_automation_category_request = keap_core_v2_client.UpdateAutomationCategoryRequest() # UpdateAutomationCategoryRequest | updateAutomationCategoryRequest

    try:
        # Update an Automation's Category
        api_instance.update_automation_category_using_put(update_automation_category_request)
    except Exception as e:
        print("Exception when calling AutomationApi->update_automation_category_using_put: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_automation_category_request** | [**UpdateAutomationCategoryRequest**](UpdateAutomationCategoryRequest.md)| updateAutomationCategoryRequest | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

