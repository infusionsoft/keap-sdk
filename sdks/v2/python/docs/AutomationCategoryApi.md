# keap_core_v2_client.AutomationCategoryApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_category**](AutomationCategoryApi.md#create_category) | **POST** /rest/v2/automationCategory | Create automation category
[**delete_categories**](AutomationCategoryApi.md#delete_categories) | **DELETE** /rest/v2/automationCategory | Delete automation category
[**list_categories**](AutomationCategoryApi.md#list_categories) | **GET** /rest/v2/automationCategory | List automation categories
[**patch_category**](AutomationCategoryApi.md#patch_category) | **PATCH** /rest/v2/automationCategory/{id} | Update automation category


# **create_category**
> AutomationCategory create_category(create_automation_category_request)

Create automation category

Creates a single automation category

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.automation_category import AutomationCategory
from keap_core_v2_client.models.create_automation_category_request import CreateAutomationCategoryRequest
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
    api_instance = keap_core_v2_client.AutomationCategoryApi(api_client)
    create_automation_category_request = keap_core_v2_client.CreateAutomationCategoryRequest() # CreateAutomationCategoryRequest | 

    try:
        # Create automation category
        api_response = api_instance.create_category(create_automation_category_request)
        print("The response of AutomationCategoryApi->create_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationCategoryApi->create_category: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_automation_category_request** | [**CreateAutomationCategoryRequest**](CreateAutomationCategoryRequest.md)|  | 

### Return type

[**AutomationCategory**](AutomationCategory.md)

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

# **delete_categories**
> delete_categories(ids)

Delete automation category

Deletes one or more automation categories based on the request parameters

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
    api_instance = keap_core_v2_client.AutomationCategoryApi(api_client)
    ids = [56] # List[int] | 

    try:
        # Delete automation category
        api_instance.delete_categories(ids)
    except Exception as e:
        print("Exception when calling AutomationCategoryApi->delete_categories: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List[int]**](int.md)|  | 

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

# **list_categories**
> ListAutomationCategoryResponse list_categories()

List automation categories

Retrieves a list of automation categories

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_automation_category_response import ListAutomationCategoryResponse
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
    api_instance = keap_core_v2_client.AutomationCategoryApi(api_client)

    try:
        # List automation categories
        api_response = api_instance.list_categories()
        print("The response of AutomationCategoryApi->list_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationCategoryApi->list_categories: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAutomationCategoryResponse**](ListAutomationCategoryResponse.md)

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

# **patch_category**
> AutomationCategory patch_category(id, patch_automation_category_request)

Update automation category

Updates part of a single automation category

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.automation_category import AutomationCategory
from keap_core_v2_client.models.patch_automation_category_request import PatchAutomationCategoryRequest
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
    api_instance = keap_core_v2_client.AutomationCategoryApi(api_client)
    id = 'id_example' # str | 
    patch_automation_category_request = keap_core_v2_client.PatchAutomationCategoryRequest() # PatchAutomationCategoryRequest | 

    try:
        # Update automation category
        api_response = api_instance.patch_category(id, patch_automation_category_request)
        print("The response of AutomationCategoryApi->patch_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationCategoryApi->patch_category: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **patch_automation_category_request** | [**PatchAutomationCategoryRequest**](PatchAutomationCategoryRequest.md)|  | 

### Return type

[**AutomationCategory**](AutomationCategory.md)

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

