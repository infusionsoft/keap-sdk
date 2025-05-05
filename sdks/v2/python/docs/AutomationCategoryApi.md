# keap_core_v2_client.AutomationCategoryApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_category_using_post**](AutomationCategoryApi.md#create_category_using_post) | **POST** /v2/automationCategory | Create automation category
[**delete_categories_using_delete**](AutomationCategoryApi.md#delete_categories_using_delete) | **DELETE** /v2/automationCategory | Delete automation category
[**list_categories_using_get**](AutomationCategoryApi.md#list_categories_using_get) | **GET** /v2/automationCategory | List automation categories
[**patch_category_using_patch**](AutomationCategoryApi.md#patch_category_using_patch) | **PATCH** /v2/automationCategory/{id} | Update automation category
[**save_category_using_put**](AutomationCategoryApi.md#save_category_using_put) | **PUT** /v2/automationCategory | Save automation category


# **create_category_using_post**
> AutomationCategory create_category_using_post(create_automation_category_request)

Create automation category

Creates a single automation category

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.automation_category import AutomationCategory
from keap_core_v2_client.models.create_automation_category_request import CreateAutomationCategoryRequest
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
    api_instance = keap_core_v2_client.AutomationCategoryApi(api_client)
    create_automation_category_request = keap_core_v2_client.CreateAutomationCategoryRequest() # CreateAutomationCategoryRequest | createAutomationCategoryRequest

    try:
        # Create automation category
        api_response = api_instance.create_category_using_post(create_automation_category_request)
        print("The response of AutomationCategoryApi->create_category_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationCategoryApi->create_category_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_automation_category_request** | [**CreateAutomationCategoryRequest**](CreateAutomationCategoryRequest.md)| createAutomationCategoryRequest | 

### Return type

[**AutomationCategory**](AutomationCategory.md)

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

# **delete_categories_using_delete**
> delete_categories_using_delete(ids)

Delete automation category

Deletes one or more automation categories based on the request parameters

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
    api_instance = keap_core_v2_client.AutomationCategoryApi(api_client)
    ids = [56] # List[int] | ids

    try:
        # Delete automation category
        api_instance.delete_categories_using_delete(ids)
    except Exception as e:
        print("Exception when calling AutomationCategoryApi->delete_categories_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List[int]**](int.md)| ids | 

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

# **list_categories_using_get**
> ListAutomationCategoryResponse list_categories_using_get()

List automation categories

Retrieves a list of automation categories

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_automation_category_response import ListAutomationCategoryResponse
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
    api_instance = keap_core_v2_client.AutomationCategoryApi(api_client)

    try:
        # List automation categories
        api_response = api_instance.list_categories_using_get()
        print("The response of AutomationCategoryApi->list_categories_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationCategoryApi->list_categories_using_get: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAutomationCategoryResponse**](ListAutomationCategoryResponse.md)

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

# **patch_category_using_patch**
> AutomationCategory patch_category_using_patch(id, patch_automation_category_request)

Update automation category

Updates part of a single automation category

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.automation_category import AutomationCategory
from keap_core_v2_client.models.patch_automation_category_request import PatchAutomationCategoryRequest
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
    api_instance = keap_core_v2_client.AutomationCategoryApi(api_client)
    id = 'id_example' # str | id
    patch_automation_category_request = keap_core_v2_client.PatchAutomationCategoryRequest() # PatchAutomationCategoryRequest | patchAutomationCategoryRequest

    try:
        # Update automation category
        api_response = api_instance.patch_category_using_patch(id, patch_automation_category_request)
        print("The response of AutomationCategoryApi->patch_category_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationCategoryApi->patch_category_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **patch_automation_category_request** | [**PatchAutomationCategoryRequest**](PatchAutomationCategoryRequest.md)| patchAutomationCategoryRequest | 

### Return type

[**AutomationCategory**](AutomationCategory.md)

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

# **save_category_using_put**
> AutomationCategory save_category_using_put(save_automation_category_request)

Save automation category

Creates or updates a single automation category

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.automation_category import AutomationCategory
from keap_core_v2_client.models.save_automation_category_request import SaveAutomationCategoryRequest
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
    api_instance = keap_core_v2_client.AutomationCategoryApi(api_client)
    save_automation_category_request = keap_core_v2_client.SaveAutomationCategoryRequest() # SaveAutomationCategoryRequest | saveAutomationCategoryRequest

    try:
        # Save automation category
        api_response = api_instance.save_category_using_put(save_automation_category_request)
        print("The response of AutomationCategoryApi->save_category_using_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationCategoryApi->save_category_using_put: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **save_automation_category_request** | [**SaveAutomationCategoryRequest**](SaveAutomationCategoryRequest.md)| saveAutomationCategoryRequest | 

### Return type

[**AutomationCategory**](AutomationCategory.md)

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

