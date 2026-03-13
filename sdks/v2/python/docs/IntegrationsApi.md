# keap_core_v2_client.IntegrationsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_integrations_word_press_opt_in**](IntegrationsApi.md#add_integrations_word_press_opt_in) | **POST** /rest/v2/integrations/wordpress/options | Add a WordPress Opt-In Option
[**delete_integrations_word_press_opt_in**](IntegrationsApi.md#delete_integrations_word_press_opt_in) | **DELETE** /rest/v2/integrations/wordpress/options/{option_key} | Delete a WordPress Opt-In Option


# **add_integrations_word_press_opt_in**
> WordPressOptInOption add_integrations_word_press_opt_in(create_integrations_word_press_opt_in_option)

Add a WordPress Opt-In Option

Adds a value to the list of WordPress Opt-In Options Available

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_integrations_word_press_opt_in_option import CreateIntegrationsWordPressOptInOption
from keap_core_v2_client.models.word_press_opt_in_option import WordPressOptInOption
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
    api_instance = keap_core_v2_client.IntegrationsApi(api_client)
    create_integrations_word_press_opt_in_option = keap_core_v2_client.CreateIntegrationsWordPressOptInOption() # CreateIntegrationsWordPressOptInOption | 

    try:
        # Add a WordPress Opt-In Option
        api_response = api_instance.add_integrations_word_press_opt_in(create_integrations_word_press_opt_in_option)
        print("The response of IntegrationsApi->add_integrations_word_press_opt_in:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->add_integrations_word_press_opt_in: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_integrations_word_press_opt_in_option** | [**CreateIntegrationsWordPressOptInOption**](CreateIntegrationsWordPressOptInOption.md)|  | 

### Return type

[**WordPressOptInOption**](WordPressOptInOption.md)

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_integrations_word_press_opt_in**
> delete_integrations_word_press_opt_in(option_key)

Delete a WordPress Opt-In Option

Deletes a value from the list of WordPress Opt-In Options Available

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
    api_instance = keap_core_v2_client.IntegrationsApi(api_client)
    option_key = 'option_key_example' # str | 

    try:
        # Delete a WordPress Opt-In Option
        api_instance.delete_integrations_word_press_opt_in(option_key)
    except Exception as e:
        print("Exception when calling IntegrationsApi->delete_integrations_word_press_opt_in: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **option_key** | **str**|  | 

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

