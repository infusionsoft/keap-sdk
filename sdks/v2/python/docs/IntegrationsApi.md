# keap_core_v2_client.IntegrationsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**achieve_integrations_word_press_opt_in_goal**](IntegrationsApi.md#achieve_integrations_word_press_opt_in_goal) | **POST** /rest/v2/integrations/wordpress/options/{option_key}:achieve | Achieve a WordPress Opt-In Goal
[**add_integrations_word_press_opt_in**](IntegrationsApi.md#add_integrations_word_press_opt_in) | **POST** /rest/v2/integrations/wordpress/options | Add a WordPress Opt-In Option
[**delete_integrations_word_press_opt_in**](IntegrationsApi.md#delete_integrations_word_press_opt_in) | **DELETE** /rest/v2/integrations/wordpress/options/{option_key} | Delete a WordPress Opt-In Option
[**list_integrations_word_press_opt_in_options**](IntegrationsApi.md#list_integrations_word_press_opt_in_options) | **GET** /rest/v2/integrations/wordpress/options | List WordPress Opt-In Options


# **achieve_integrations_word_press_opt_in_goal**
> AchieveWordPressOptInGoalResult achieve_integrations_word_press_opt_in_goal(option_key, achieve_integrations_word_press_opt_in_option_goal_request)

Achieve a WordPress Opt-In Goal

Achieves a WordPress Opt-In Option Goal

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.achieve_integrations_word_press_opt_in_option_goal_request import AchieveIntegrationsWordPressOptInOptionGoalRequest
from keap_core_v2_client.models.achieve_word_press_opt_in_goal_result import AchieveWordPressOptInGoalResult
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
    achieve_integrations_word_press_opt_in_option_goal_request = keap_core_v2_client.AchieveIntegrationsWordPressOptInOptionGoalRequest() # AchieveIntegrationsWordPressOptInOptionGoalRequest | 

    try:
        # Achieve a WordPress Opt-In Goal
        api_response = api_instance.achieve_integrations_word_press_opt_in_goal(option_key, achieve_integrations_word_press_opt_in_option_goal_request)
        print("The response of IntegrationsApi->achieve_integrations_word_press_opt_in_goal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->achieve_integrations_word_press_opt_in_goal: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **option_key** | **str**|  | 
 **achieve_integrations_word_press_opt_in_option_goal_request** | [**AchieveIntegrationsWordPressOptInOptionGoalRequest**](AchieveIntegrationsWordPressOptInOptionGoalRequest.md)|  | 

### Return type

[**AchieveWordPressOptInGoalResult**](AchieveWordPressOptInGoalResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
**405** | Method Not Allowed |  -  |
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_integrations_word_press_opt_in_options**
> ListWordPressOptInOptionsResponse list_integrations_word_press_opt_in_options()

List WordPress Opt-In Options

Retrieves the list of WordPress Opt-In Options available

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_word_press_opt_in_options_response import ListWordPressOptInOptionsResponse
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

    try:
        # List WordPress Opt-In Options
        api_response = api_instance.list_integrations_word_press_opt_in_options()
        print("The response of IntegrationsApi->list_integrations_word_press_opt_in_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->list_integrations_word_press_opt_in_options: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ListWordPressOptInOptionsResponse**](ListWordPressOptInOptionsResponse.md)

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

