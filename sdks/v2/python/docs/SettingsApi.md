# keap_core_v2_client.SettingsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_application_configurations_using_get**](SettingsApi.md#get_application_configurations_using_get) | **GET** /v2/settings/applications:getConfiguration | Get Application Configuration
[**get_contact_option_types_using_get1**](SettingsApi.md#get_contact_option_types_using_get1) | **GET** /v2/settings/contactOptionTypes | Get Contact Option types
[**is_application_enabled_using_get**](SettingsApi.md#is_application_enabled_using_get) | **GET** /v2/settings/applications:isEnabled | Get Application Status


# **get_application_configurations_using_get**
> GetSettingsResponse get_application_configurations_using_get(fields=fields)

Get Application Configuration

Get configuration values for the application instance.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.get_settings_response import GetSettingsResponse
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
    api_instance = keap_core_v2_client.SettingsApi(api_client)
    fields = ['fields_example'] # List[str] | By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional)

    try:
        # Get Application Configuration
        api_response = api_instance.get_application_configurations_using_get(fields=fields)
        print("The response of SettingsApi->get_application_configurations_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_application_configurations_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**List[str]**](str.md)| By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. | [optional] 

### Return type

[**GetSettingsResponse**](GetSettingsResponse.md)

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

# **get_contact_option_types_using_get1**
> GetContactOptionTypesResponse get_contact_option_types_using_get1()

Get Contact Option types

Gets a list of Contact Option types.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.get_contact_option_types_response import GetContactOptionTypesResponse
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
    api_instance = keap_core_v2_client.SettingsApi(api_client)

    try:
        # Get Contact Option types
        api_response = api_instance.get_contact_option_types_using_get1()
        print("The response of SettingsApi->get_contact_option_types_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_contact_option_types_using_get1: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**GetContactOptionTypesResponse**](GetContactOptionTypesResponse.md)

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

# **is_application_enabled_using_get**
> GetApplicationEnabledStatusResponse is_application_enabled_using_get()

Get Application Status

Check if the application is enabled or not

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.get_application_enabled_status_response import GetApplicationEnabledStatusResponse
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
    api_instance = keap_core_v2_client.SettingsApi(api_client)

    try:
        # Get Application Status
        api_response = api_instance.is_application_enabled_using_get()
        print("The response of SettingsApi->is_application_enabled_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->is_application_enabled_using_get: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**GetApplicationEnabledStatusResponse**](GetApplicationEnabledStatusResponse.md)

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

