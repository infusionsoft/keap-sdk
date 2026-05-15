# keap_core_v2_client.AutomationApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**achieve_goal**](AutomationApi.md#achieve_goal) | **POST** /rest/v2/automations/goals/achieve | Achieve an Automation Goal
[**add_contacts_to_automation_sequence**](AutomationApi.md#add_contacts_to_automation_sequence) | **POST** /rest/v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence
[**bulk_assignment_automations_categories**](AutomationApi.md#bulk_assignment_automations_categories) | **POST** /rest/v2/automations/categories/batchAssign | Bulk update for Automations Categories
[**bulk_unpublish_automations**](AutomationApi.md#bulk_unpublish_automations) | **POST** /rest/v2/automations/batch-unpublish | Bulk unpublish Automations
[**delete_automation**](AutomationApi.md#delete_automation) | **DELETE** /rest/v2/automations | Delete an Automation
[**get_automation**](AutomationApi.md#get_automation) | **GET** /rest/v2/automations/{automation_id} | Retrieve an Automation
[**list_all_automation_ids**](AutomationApi.md#list_all_automation_ids) | **GET** /rest/v2/automations/ids | List Automations Ids
[**list_automations**](AutomationApi.md#list_automations) | **GET** /rest/v2/automations | List Automations
[**unpublish_automation**](AutomationApi.md#unpublish_automation) | **PUT** /rest/v2/automations/{automation_id}/unpublish | Unpublish an Automation


# **achieve_goal**
> AchieveGoalResponse achieve_goal(achieve_goal_request)

Achieve an Automation Goal

Achieves a goal in an automation for a contact

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.achieve_goal_request import AchieveGoalRequest
from keap_core_v2_client.models.achieve_goal_response import AchieveGoalResponse
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    achieve_goal_request = keap_core_v2_client.AchieveGoalRequest() # AchieveGoalRequest | 

    try:
        # Achieve an Automation Goal
        api_response = api_instance.achieve_goal(achieve_goal_request)
        print("The response of AutomationApi->achieve_goal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationApi->achieve_goal: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **achieve_goal_request** | [**AchieveGoalRequest**](AchieveGoalRequest.md)|  | 

### Return type

[**AchieveGoalResponse**](AchieveGoalResponse.md)

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

# **add_contacts_to_automation_sequence**
> AddToAutomationSequenceResponse add_contacts_to_automation_sequence(automation_id, sequence_id, add_to_automation_sequence_request)

Add Contacts to an Automation Sequence

Adds a list of contacts to an automation sequence
Response contains a map of the provided list of Contact Ids and their individual result.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.add_to_automation_sequence_request import AddToAutomationSequenceRequest
from keap_core_v2_client.models.add_to_automation_sequence_response import AddToAutomationSequenceResponse
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    automation_id = 'automation_id_example' # str | 
    sequence_id = 'sequence_id_example' # str | 
    add_to_automation_sequence_request = keap_core_v2_client.AddToAutomationSequenceRequest() # AddToAutomationSequenceRequest | 

    try:
        # Add Contacts to an Automation Sequence
        api_response = api_instance.add_contacts_to_automation_sequence(automation_id, sequence_id, add_to_automation_sequence_request)
        print("The response of AutomationApi->add_contacts_to_automation_sequence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationApi->add_contacts_to_automation_sequence: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automation_id** | **str**|  | 
 **sequence_id** | **str**|  | 
 **add_to_automation_sequence_request** | [**AddToAutomationSequenceRequest**](AddToAutomationSequenceRequest.md)|  | 

### Return type

[**AddToAutomationSequenceResponse**](AddToAutomationSequenceResponse.md)

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

# **bulk_assignment_automations_categories**
> bulk_assignment_automations_categories(assign_automation_category_request)

Bulk update for Automations Categories

Bulk updates the categories of one or more automations

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.assign_automation_category_request import AssignAutomationCategoryRequest
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    assign_automation_category_request = keap_core_v2_client.AssignAutomationCategoryRequest() # AssignAutomationCategoryRequest | 

    try:
        # Bulk update for Automations Categories
        api_instance.bulk_assignment_automations_categories(assign_automation_category_request)
    except Exception as e:
        print("Exception when calling AutomationApi->bulk_assignment_automations_categories: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assign_automation_category_request** | [**AssignAutomationCategoryRequest**](AssignAutomationCategoryRequest.md)|  | 

### Return type

void (empty response body)

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

# **bulk_unpublish_automations**
> bulk_unpublish_automations(batch_unpublish_automation_request)

Bulk unpublish Automations

Bulk unpublish one or more automations

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.batch_unpublish_automation_request import BatchUnpublishAutomationRequest
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    batch_unpublish_automation_request = keap_core_v2_client.BatchUnpublishAutomationRequest() # BatchUnpublishAutomationRequest | 

    try:
        # Bulk unpublish Automations
        api_instance.bulk_unpublish_automations(batch_unpublish_automation_request)
    except Exception as e:
        print("Exception when calling AutomationApi->bulk_unpublish_automations: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_unpublish_automation_request** | [**BatchUnpublishAutomationRequest**](BatchUnpublishAutomationRequest.md)|  | 

### Return type

void (empty response body)

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

# **delete_automation**
> delete_automation(automation_ids)

Delete an Automation

Deletes a single automation

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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    automation_ids = [56] # List[int] | 

    try:
        # Delete an Automation
        api_instance.delete_automation(automation_ids)
    except Exception as e:
        print("Exception when calling AutomationApi->delete_automation: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automation_ids** | [**List[int]**](int.md)|  | 

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

# **get_automation**
> Automation get_automation(automation_id)

Retrieve an Automation

Retrieves a single automation

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.automation import Automation
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    automation_id = 'automation_id_example' # str | 

    try:
        # Retrieve an Automation
        api_response = api_instance.get_automation(automation_id)
        print("The response of AutomationApi->get_automation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationApi->get_automation: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automation_id** | **str**|  | 

### Return type

[**Automation**](Automation.md)

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

# **list_all_automation_ids**
> ListAutomationIdsResponse list_all_automation_ids(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Automations Ids

Retrieves a list of automations IDs

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_automation_ids_response import ListAutomationIdsResponse
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Automations Ids
        api_response = api_instance.list_all_automation_ids(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AutomationApi->list_all_automation_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationApi->list_all_automation_ids: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListAutomationIdsResponse**](ListAutomationIdsResponse.md)

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

# **list_automations**
> ListAutomationResponse list_automations(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Automations

Retrieves a list of automations

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_automation_response import ListAutomationResponse
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Automations
        api_response = api_instance.list_automations(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AutomationApi->list_automations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationApi->list_automations: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListAutomationResponse**](ListAutomationResponse.md)

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

# **unpublish_automation**
> unpublish_automation(automation_id, unpublish_automation_request)

Unpublish an Automation

Unpublishes a single automation

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.unpublish_automation_request import UnpublishAutomationRequest
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
    api_instance = keap_core_v2_client.AutomationApi(api_client)
    automation_id = 'automation_id_example' # str | 
    unpublish_automation_request = keap_core_v2_client.UnpublishAutomationRequest() # UnpublishAutomationRequest | 

    try:
        # Unpublish an Automation
        api_instance.unpublish_automation(automation_id, unpublish_automation_request)
    except Exception as e:
        print("Exception when calling AutomationApi->unpublish_automation: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automation_id** | **str**|  | 
 **unpublish_automation_request** | [**UnpublishAutomationRequest**](UnpublishAutomationRequest.md)|  | 

### Return type

void (empty response body)

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

