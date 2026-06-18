# keap_core_v2_client.EmailAddressApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_email_address_status**](EmailAddressApi.md#get_email_address_status) | **GET** /rest/v2/emailAddresses/{email}/status | Retrieve an Email Address status
[**list_email_address_statuses**](EmailAddressApi.md#list_email_address_statuses) | **GET** /rest/v2/emailAddresses | List Email Address Statuses
[**update_email_address_opt_status**](EmailAddressApi.md#update_email_address_opt_status) | **PATCH** /rest/v2/emailAddresses/{email}/status | Update an Email Address opt-in status


# **get_email_address_status**
> RestEmailAddressStatus get_email_address_status(email)

Retrieve an Email Address status

Retrieves the opt-in status for a given Email Address

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_email_address_status import RestEmailAddressStatus
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
    api_instance = keap_core_v2_client.EmailAddressApi(api_client)
    email = 'email_example' # str | 

    try:
        # Retrieve an Email Address status
        api_response = api_instance.get_email_address_status(email)
        print("The response of EmailAddressApi->get_email_address_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailAddressApi->get_email_address_status: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**|  | 

### Return type

[**RestEmailAddressStatus**](RestEmailAddressStatus.md)

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

# **list_email_address_statuses**
> ListEmailAddressStatusResponse list_email_address_statuses(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)

List Email Address Statuses

Retrieve a list of the Status of Email Addresses

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_email_address_status_response import ListEmailAddressStatusResponse
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
    api_instance = keap_core_v2_client.EmailAddressApi(api_client)
    filter = 'filter=opted_in%3D%3Dtrue' # str | Filter to apply, allowed fields are: - (Set[String]) `emails` - (Set[EmailOptStatus]) `statuses` - (Boolean) `opted_in`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=opted_in%3D%3Dtrue` - `filter=emails%3D%3Dexample%40test.com` - `filter=emails%3D%3Dexample%40test.com%2Csecond%40test.com`  (optional)
    page_token = 'page_token_example' # str | Page token (optional)
    order_by = 'order_by=last_sent_time desc' # str | Attribute and direction to order items. One of the following fields: - `email` - `status` - `create_time` - `last_click_time` - `last_open_time` - `last_sent_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)

    try:
        # List Email Address Statuses
        api_response = api_instance.list_email_address_statuses(filter=filter, page_token=page_token, order_by=order_by, page_size=page_size)
        print("The response of EmailAddressApi->list_email_address_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailAddressApi->list_email_address_statuses: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (Set[String]) &#x60;emails&#x60; - (Set[EmailOptStatus]) &#x60;statuses&#x60; - (Boolean) &#x60;opted_in&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;opted_in%3D%3Dtrue&#x60; - &#x60;filter&#x3D;emails%3D%3Dexample%40test.com&#x60; - &#x60;filter&#x3D;emails%3D%3Dexample%40test.com%2Csecond%40test.com&#x60;  | [optional] 
 **page_token** | **str**| Page token | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;email&#x60; - &#x60;status&#x60; - &#x60;create_time&#x60; - &#x60;last_click_time&#x60; - &#x60;last_open_time&#x60; - &#x60;last_sent_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 

### Return type

[**ListEmailAddressStatusResponse**](ListEmailAddressStatusResponse.md)

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

# **update_email_address_opt_status**
> RestEmailAddressStatus update_email_address_opt_status(email, update_email_address)

Update an Email Address opt-in status

Updates an Email Address opt-in status

You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON
with an opt-in reason. (This field is also shown in the complete request body sample.)
The reason you provide here will help with compliance.
Example reasons: "Customer opted-in through webform", "Company gave explicit permission."

```json
"opt_in_reason": "your reason for opt-in"
```
Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses
that are currently in the following states:
- `Unengaged Marketable`
- `Unengaged Non-Marketable`
- `Non-Marketable`
- `Opt-Out: Manual`

All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_email_address_status import RestEmailAddressStatus
from keap_core_v2_client.models.update_email_address import UpdateEmailAddress
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
    api_instance = keap_core_v2_client.EmailAddressApi(api_client)
    email = 'email_example' # str | 
    update_email_address = keap_core_v2_client.UpdateEmailAddress() # UpdateEmailAddress | 

    try:
        # Update an Email Address opt-in status
        api_response = api_instance.update_email_address_opt_status(email, update_email_address)
        print("The response of EmailAddressApi->update_email_address_opt_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailAddressApi->update_email_address_opt_status: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**|  | 
 **update_email_address** | [**UpdateEmailAddress**](UpdateEmailAddress.md)|  | 

### Return type

[**RestEmailAddressStatus**](RestEmailAddressStatus.md)

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

