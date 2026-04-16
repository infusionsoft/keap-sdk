# keap_core_v2_client.PaymentMethodsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deactivate_payment_method**](PaymentMethodsApi.md#deactivate_payment_method) | **POST** /rest/v2/contacts/{contact_id}/paymentMethods/{payment_method_id}:deactivate | Deactivate a Contact Payment Method
[**delete_payment_method**](PaymentMethodsApi.md#delete_payment_method) | **DELETE** /rest/v2/contacts/{contact_id}/paymentMethods/{payment_method_id} | Delete a Contact Payment Method
[**list_payment_methods**](PaymentMethodsApi.md#list_payment_methods) | **GET** /rest/v2/paymentMethods | List of Payment Methods
[**list_payment_methods_0**](PaymentMethodsApi.md#list_payment_methods_0) | **GET** /rest/v2/contacts/{contact_id}/paymentMethods | List of Contact Payment Methods


# **deactivate_payment_method**
> deactivate_payment_method(contact_id, payment_method_id)

Deactivate a Contact Payment Method

Deactivate the specified payment method

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
    api_instance = keap_core_v2_client.PaymentMethodsApi(api_client)
    contact_id = 'contact_id_example' # str | ID of the contact to which the payment method belongs.
    payment_method_id = 'payment_method_id_example' # str | ID of the payment method to be deactivated.

    try:
        # Deactivate a Contact Payment Method
        api_instance.deactivate_payment_method(contact_id, payment_method_id)
    except Exception as e:
        print("Exception when calling PaymentMethodsApi->deactivate_payment_method: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| ID of the contact to which the payment method belongs. | 
 **payment_method_id** | **str**| ID of the payment method to be deactivated. | 

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

# **delete_payment_method**
> delete_payment_method(contact_id, payment_method_id)

Delete a Contact Payment Method

Deletes the specified payment method

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
    api_instance = keap_core_v2_client.PaymentMethodsApi(api_client)
    contact_id = 'contact_id_example' # str | ID of the contact to which the payment method belongs.
    payment_method_id = 'payment_method_id_example' # str | ID of the payment method to be deleted.

    try:
        # Delete a Contact Payment Method
        api_instance.delete_payment_method(contact_id, payment_method_id)
    except Exception as e:
        print("Exception when calling PaymentMethodsApi->delete_payment_method: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| ID of the contact to which the payment method belongs. | 
 **payment_method_id** | **str**| ID of the payment method to be deleted. | 

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

# **list_payment_methods**
> ListPaymentMethodsResponse list_payment_methods(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List of Payment Methods

Retrieves a list of Payment Methods

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_payment_methods_response import ListPaymentMethodsResponse
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
    api_instance = keap_core_v2_client.PaymentMethodsApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `payment_method_id` - (String) `credit_card_id` - (String) `contact_id` - (String) `merchant_account_id` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=payment_method_id%3D%3D123` - `filter=contact_id%3D%3D123%3Bmerchant_account_id%3D%3D567`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `payment_method_id` - `created_time` - `contact_id` - `merchant_account_id`  One of the following directions: - `desc` - `asc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List of Payment Methods
        api_response = api_instance.list_payment_methods(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PaymentMethodsApi->list_payment_methods:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodsApi->list_payment_methods: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;payment_method_id&#x60; - (String) &#x60;credit_card_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;payment_method_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bmerchant_account_id%3D%3D567&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;payment_method_id&#x60; - &#x60;created_time&#x60; - &#x60;contact_id&#x60; - &#x60;merchant_account_id&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_payment_methods_0**
> ListContactPaymentMethodsResponse list_payment_methods_0(contact_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List of Contact Payment Methods

Retrieves a list of Contact Payment Methods

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_contact_payment_methods_response import ListContactPaymentMethodsResponse
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
    api_instance = keap_core_v2_client.PaymentMethodsApi(api_client)
    contact_id = 'contact_id_example' # str | ID of the contact to which the payment method belongs.
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `merchant_account_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=merchant_account_id%3D%3D123`   (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `created_time`  One of the following directions: - `desc` - `asc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List of Contact Payment Methods
        api_response = api_instance.list_payment_methods_0(contact_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PaymentMethodsApi->list_payment_methods_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodsApi->list_payment_methods_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| ID of the contact to which the payment method belongs. | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;   | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListContactPaymentMethodsResponse**](ListContactPaymentMethodsResponse.md)

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

