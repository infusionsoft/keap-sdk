# keap_core_v2_client.PaymentMethodsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deactivate_payment_method**](PaymentMethodsApi.md#deactivate_payment_method) | **POST** /v2/contacts/{contact_id}/paymentMethods/{payment_method_id}:deactivate | Deactivate a Payment Method
[**delete_payment_method**](PaymentMethodsApi.md#delete_payment_method) | **DELETE** /v2/contacts/{contact_id}/paymentMethods/{payment_method_id} | Delete a Payment Method
[**list_payment_methods**](PaymentMethodsApi.md#list_payment_methods) | **GET** /v2/contacts/{contact_id}/paymentMethods | List of Payment Methods


# **deactivate_payment_method**
> deactivate_payment_method(contact_id, payment_method_id)

Deactivate a Payment Method

Deactivate the specified payment method

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
    api_instance = keap_core_v2_client.PaymentMethodsApi(api_client)
    contact_id = 'contact_id_example' # str | ID of the contact to which the payment method belongs.
    payment_method_id = 'payment_method_id_example' # str | ID of the payment method to be deactivated.

    try:
        # Deactivate a Payment Method
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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_payment_method**
> delete_payment_method(contact_id, payment_method_id)

Delete a Payment Method

Deletes the specified payment method

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
    api_instance = keap_core_v2_client.PaymentMethodsApi(api_client)
    contact_id = 'contact_id_example' # str | ID of the contact to which the payment method belongs.
    payment_method_id = 'payment_method_id_example' # str | ID of the payment method to be deleted.

    try:
        # Delete a Payment Method
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

# **list_payment_methods**
> ListPaymentMethodsResponse list_payment_methods(contact_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List of Payment Methods

Retrieves a list of Payment Methods

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_payment_methods_response import ListPaymentMethodsResponse
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
    api_instance = keap_core_v2_client.PaymentMethodsApi(api_client)
    contact_id = 'contact_id_example' # str | ID of the contact to which the payment method belongs.
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `merchant_account_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=merchant_account_id%3D%3D123`  You can filter across all contacts by using the `-` for the `contact_id` field.  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `date_created`  One of the following directions: - `desc` - `asc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List of Payment Methods
        api_response = api_instance.list_payment_methods(contact_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PaymentMethodsApi->list_payment_methods:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodsApi->list_payment_methods: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| ID of the contact to which the payment method belongs. | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;  You can filter across all contacts by using the &#x60;-&#x60; for the &#x60;contact_id&#x60; field.  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)

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

