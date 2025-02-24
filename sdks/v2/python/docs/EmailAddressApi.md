# keap_core_v2_client.EmailAddressApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_email_address_status_using_get**](EmailAddressApi.md#get_email_address_status_using_get) | **GET** /v2/emailAddresses/{email} | Retrieve an Email Address status
[**update_email_address_opt_status_using_put**](EmailAddressApi.md#update_email_address_opt_status_using_put) | **PUT** /v2/emailAddresses/{email} | Update an Email Address opt-in status


# **get_email_address_status_using_get**
> RestEmailAddress get_email_address_status_using_get(email)

Retrieve an Email Address status

Retrieves the opt-in status for given Email Address

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_email_address import RestEmailAddress
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
    api_instance = keap_core_v2_client.EmailAddressApi(api_client)
    email = 'email_example' # str | email

    try:
        # Retrieve an Email Address status
        api_response = api_instance.get_email_address_status_using_get(email)
        print("The response of EmailAddressApi->get_email_address_status_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailAddressApi->get_email_address_status_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| email | 

### Return type

[**RestEmailAddress**](RestEmailAddress.md)

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

# **update_email_address_opt_status_using_put**
> RestEmailAddress update_email_address_opt_status_using_put(email, update_email_address)

Update an Email Address opt-in status

Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_email_address import RestEmailAddress
from keap_core_v2_client.models.update_email_address import UpdateEmailAddress
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
    api_instance = keap_core_v2_client.EmailAddressApi(api_client)
    email = 'email_example' # str | email
    update_email_address = keap_core_v2_client.UpdateEmailAddress() # UpdateEmailAddress | updateEmailAddress

    try:
        # Update an Email Address opt-in status
        api_response = api_instance.update_email_address_opt_status_using_put(email, update_email_address)
        print("The response of EmailAddressApi->update_email_address_opt_status_using_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailAddressApi->update_email_address_opt_status_using_put: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| email | 
 **update_email_address** | [**UpdateEmailAddress**](UpdateEmailAddress.md)| updateEmailAddress | 

### Return type

[**RestEmailAddress**](RestEmailAddress.md)

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

