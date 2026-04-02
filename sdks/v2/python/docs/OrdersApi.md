# keap_core_v2_client.OrdersApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apply_commission_on_order_items**](OrdersApi.md#apply_commission_on_order_items) | **POST** /rest/v2/orders/{order_id}/items/{order_item_id}:applyCommission | Apply Commission to an Order Item
[**apply_tax**](OrdersApi.md#apply_tax) | **POST** /rest/v2/orders/{order_id}:applyTax | Apply Taxes on an Order
[**attach_file_to_order**](OrdersApi.md#attach_file_to_order) | **POST** /rest/v2/orders/{order_id}:attachFile | Attach a File to an Order Invoice
[**create_order**](OrdersApi.md#create_order) | **POST** /rest/v2/orders | Create an Order
[**create_order_custom_field**](OrdersApi.md#create_order_custom_field) | **POST** /rest/v2/orders/model/customFields | Create an Order Custom Field
[**create_order_item**](OrdersApi.md#create_order_item) | **POST** /rest/v2/orders/{order_id}/items | Create an Order Item
[**create_payment_for_an_order**](OrdersApi.md#create_payment_for_an_order) | **POST** /rest/v2/orders/{order_id}/payments | Create a Payment
[**delete_order**](OrdersApi.md#delete_order) | **DELETE** /rest/v2/orders/{order_id} | Delete an Order
[**delete_order_custom_field**](OrdersApi.md#delete_order_custom_field) | **DELETE** /rest/v2/orders/model/customFields/{custom_field_id} | Delete an Order Custom Field
[**delete_order_item**](OrdersApi.md#delete_order_item) | **DELETE** /rest/v2/orders/{order_id}/items/{order_item_id} | Delete an Order Item
[**detach_file_from_order**](OrdersApi.md#detach_file_from_order) | **POST** /rest/v2/orders/{order_id}:detachFile | Detach a File from an Order Invoice
[**get_order**](OrdersApi.md#get_order) | **GET** /rest/v2/orders/{order_id} | Retrieve an Order
[**list_order_payments**](OrdersApi.md#list_order_payments) | **GET** /rest/v2/orders/{order_id}/payments | Retrieve Order Payments
[**list_orders**](OrdersApi.md#list_orders) | **GET** /rest/v2/orders | List orders
[**retrieve_order_custom_field_model**](OrdersApi.md#retrieve_order_custom_field_model) | **GET** /rest/v2/orders/model | Retrieve Order Custom Field Model
[**update_order**](OrdersApi.md#update_order) | **PATCH** /rest/v2/orders/{order_id} | Update an Order
[**update_order_custom_field**](OrdersApi.md#update_order_custom_field) | **PATCH** /rest/v2/orders/model/customFields/{custom_field_id} | Update an Order Custom Field
[**update_order_item**](OrdersApi.md#update_order_item) | **PATCH** /rest/v2/orders/{order_id}/items/{order_item_id} | Update an Order Item


# **apply_commission_on_order_items**
> OrderItem apply_commission_on_order_items(order_id, order_item_id, apply_commission_request)

Apply Commission to an Order Item

Applies commission to an order item on an existing order.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.apply_commission_request import ApplyCommissionRequest
from keap_core_v2_client.models.order_item import OrderItem
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 
    order_item_id = 'order_item_id_example' # str | 
    apply_commission_request = keap_core_v2_client.ApplyCommissionRequest() # ApplyCommissionRequest | 

    try:
        # Apply Commission to an Order Item
        api_response = api_instance.apply_commission_on_order_items(order_id, order_item_id, apply_commission_request)
        print("The response of OrdersApi->apply_commission_on_order_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->apply_commission_on_order_items: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 
 **order_item_id** | **str**|  | 
 **apply_commission_request** | [**ApplyCommissionRequest**](ApplyCommissionRequest.md)|  | 

### Return type

[**OrderItem**](OrderItem.md)

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apply_tax**
> OrderV2 apply_tax(order_id)

Apply Taxes on an Order

Calculate taxes for a single Order for a given order id

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.order_v2 import OrderV2
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 

    try:
        # Apply Taxes on an Order
        api_response = api_instance.apply_tax(order_id)
        print("The response of OrdersApi->apply_tax:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->apply_tax: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 

### Return type

[**OrderV2**](OrderV2.md)

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

# **attach_file_to_order**
> OrderV2 attach_file_to_order(order_id, file_operation_request)

Attach a File to an Order Invoice

Attaches an uploaded File to an Order Invoice

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.file_operation_request import FileOperationRequest
from keap_core_v2_client.models.order_v2 import OrderV2
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 
    file_operation_request = keap_core_v2_client.FileOperationRequest() # FileOperationRequest | 

    try:
        # Attach a File to an Order Invoice
        api_response = api_instance.attach_file_to_order(order_id, file_operation_request)
        print("The response of OrdersApi->attach_file_to_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->attach_file_to_order: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 
 **file_operation_request** | [**FileOperationRequest**](FileOperationRequest.md)|  | 

### Return type

[**OrderV2**](OrderV2.md)

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_order**
> OrderV2 create_order(rest_create_order_request)

Create an Order

Creates a one time Order with Order items

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.order_v2 import OrderV2
from keap_core_v2_client.models.rest_create_order_request import RestCreateOrderRequest
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    rest_create_order_request = keap_core_v2_client.RestCreateOrderRequest() # RestCreateOrderRequest | 

    try:
        # Create an Order
        api_response = api_instance.create_order(rest_create_order_request)
        print("The response of OrdersApi->create_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rest_create_order_request** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md)|  | 

### Return type

[**OrderV2**](OrderV2.md)

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

# **create_order_custom_field**
> CustomFieldMetaData create_order_custom_field(create_custom_field_request)

Create an Order Custom Field

Creates a custom field of the specified type and options to the Order object

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    create_custom_field_request = keap_core_v2_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | 

    try:
        # Create an Order Custom Field
        api_response = api_instance.create_order_custom_field(create_custom_field_request)
        print("The response of OrdersApi->create_order_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

# **create_order_item**
> OrderItem create_order_item(order_id, create_order_item_request)

Create an Order Item

Creates an order item on an existing order

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_order_item_request import CreateOrderItemRequest
from keap_core_v2_client.models.order_item import OrderItem
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 
    create_order_item_request = keap_core_v2_client.CreateOrderItemRequest() # CreateOrderItemRequest | 

    try:
        # Create an Order Item
        api_response = api_instance.create_order_item(order_id, create_order_item_request)
        print("The response of OrdersApi->create_order_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order_item: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 
 **create_order_item_request** | [**CreateOrderItemRequest**](CreateOrderItemRequest.md)|  | 

### Return type

[**OrderItem**](OrderItem.md)

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

# **create_payment_for_an_order**
> PaymentResult create_payment_for_an_order(order_id, rest_create_payment_request)

Create a Payment

Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.payment_result import PaymentResult
from keap_core_v2_client.models.rest_create_payment_request import RestCreatePaymentRequest
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 
    rest_create_payment_request = keap_core_v2_client.RestCreatePaymentRequest() # RestCreatePaymentRequest | 

    try:
        # Create a Payment
        api_response = api_instance.create_payment_for_an_order(order_id, rest_create_payment_request)
        print("The response of OrdersApi->create_payment_for_an_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_payment_for_an_order: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 
 **rest_create_payment_request** | [**RestCreatePaymentRequest**](RestCreatePaymentRequest.md)|  | 

### Return type

[**PaymentResult**](PaymentResult.md)

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

# **delete_order**
> delete_order(order_id)

Delete an Order

Deletes an Order<br/>
Note: The Order must not have any transactions recorded to be available for deletion.


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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 

    try:
        # Delete an Order
        api_instance.delete_order(order_id)
    except Exception as e:
        print("Exception when calling OrdersApi->delete_order: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 

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

# **delete_order_custom_field**
> delete_order_custom_field(custom_field_id)

Delete an Order Custom Field

Deletes a Custom Field from the Order object

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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | 

    try:
        # Delete an Order Custom Field
        api_instance.delete_order_custom_field(custom_field_id)
    except Exception as e:
        print("Exception when calling OrdersApi->delete_order_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**|  | 

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

# **delete_order_item**
> delete_order_item(order_id, order_item_id)

Delete an Order Item

Deletes an order item on an existing order

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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 
    order_item_id = 'order_item_id_example' # str | 

    try:
        # Delete an Order Item
        api_instance.delete_order_item(order_id, order_item_id)
    except Exception as e:
        print("Exception when calling OrdersApi->delete_order_item: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 
 **order_item_id** | **str**|  | 

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

# **detach_file_from_order**
> OrderV2 detach_file_from_order(order_id, file_operation_request)

Detach a File from an Order Invoice

Detaches a File from an Order Invoice

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.file_operation_request import FileOperationRequest
from keap_core_v2_client.models.order_v2 import OrderV2
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 
    file_operation_request = keap_core_v2_client.FileOperationRequest() # FileOperationRequest | 

    try:
        # Detach a File from an Order Invoice
        api_response = api_instance.detach_file_from_order(order_id, file_operation_request)
        print("The response of OrdersApi->detach_file_from_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->detach_file_from_order: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 
 **file_operation_request** | [**FileOperationRequest**](FileOperationRequest.md)|  | 

### Return type

[**OrderV2**](OrderV2.md)

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_order**
> OrderV2 get_order(order_id)

Retrieve an Order

Retrieves a single Order for a given order id

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.order_v2 import OrderV2
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 

    try:
        # Retrieve an Order
        api_response = api_instance.get_order(order_id)
        print("The response of OrdersApi->get_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->get_order: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 

### Return type

[**OrderV2**](OrderV2.md)

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

# **list_order_payments**
> ListOrderPaymentsResponse list_order_payments(order_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieve Order Payments

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_order_payments_response import ListOrderPaymentsResponse
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `invoice_id` - (String) `payment_id` - (String) `amount` - (String) `pay_status` - (Boolean) `skip_commission`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=payment_id%3D%3D123` - `filter=pay_status%3D%3DAPPROVED` - `filter=invoice_id%3D%3D456%3Bskip_commission=true`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `invoice_id` - `payment_id` - `amount` - `pay_time` - `pay_status` - `skip_commission` - `last_updated_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # Retrieve Order Payments
        api_response = api_instance.list_order_payments(order_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OrdersApi->list_order_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->list_order_payments: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;invoice_id&#x60; - (String) &#x60;payment_id&#x60; - (String) &#x60;amount&#x60; - (String) &#x60;pay_status&#x60; - (Boolean) &#x60;skip_commission&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;payment_id&#x60; - &#x60;amount&#x60; - &#x60;pay_time&#x60; - &#x60;pay_status&#x60; - &#x60;skip_commission&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOrderPaymentsResponse**](ListOrderPaymentsResponse.md)

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

# **list_orders**
> ListOrders list_orders(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List orders

Retrieves a list of orders

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_orders import ListOrders
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `product_id` - (String) `contact_id` - (String) `invoice_xid` - (Boolean) `paid` - (String) `created_since_time` - (String) `created_until_time` - (String) `title` - (String) `order_type` (Allowed values: `ONLINE`, `OFFLINE`) - (String) `shipping_city` - (String) `shipping_region` - (String) `shipping_postal_code` - (String) `shipping_country_code`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=invoice_xid%3D%3Df411a79c-9a92-4960-91d9-656f910a25e8` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567` - `filter=title%3D%3DOrder` - `filter=order_type%3D%3DONLINE` - `filter=shipping_city%3D%3DPhoenix` - `filter=shipping_region%3D%3DAZ` - `filter=shipping_postal_code%3D%3D85001` - `filter=shipping_country_code%3D%3DUS` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id` - `order_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List orders
        api_response = api_instance.list_orders(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OrdersApi->list_orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->list_orders: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;invoice_xid&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; - (String) &#x60;title&#x60; - (String) &#x60;order_type&#x60; (Allowed values: &#x60;ONLINE&#x60;, &#x60;OFFLINE&#x60;) - (String) &#x60;shipping_city&#x60; - (String) &#x60;shipping_region&#x60; - (String) &#x60;shipping_postal_code&#x60; - (String) &#x60;shipping_country_code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;invoice_xid%3D%3Df411a79c-9a92-4960-91d9-656f910a25e8&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; - &#x60;filter&#x3D;title%3D%3DOrder&#x60; - &#x60;filter&#x3D;order_type%3D%3DONLINE&#x60; - &#x60;filter&#x3D;shipping_city%3D%3DPhoenix&#x60; - &#x60;filter&#x3D;shipping_region%3D%3DAZ&#x60; - &#x60;filter&#x3D;shipping_postal_code%3D%3D85001&#x60; - &#x60;filter&#x3D;shipping_country_code%3D%3DUS&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOrders**](ListOrders.md)

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

# **retrieve_order_custom_field_model**
> ObjectModel retrieve_order_custom_field_model()

Retrieve Order Custom Field Model

Gets the custom fields for the Order object

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.object_model import ObjectModel
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)

    try:
        # Retrieve Order Custom Field Model
        api_response = api_instance.retrieve_order_custom_field_model()
        print("The response of OrdersApi->retrieve_order_custom_field_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->retrieve_order_custom_field_model: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

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

# **update_order**
> OrderV2 update_order(order_id, update_order_request, update_mask=update_mask)

Update an Order

Updates an Order

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.order_v2 import OrderV2
from keap_core_v2_client.models.update_order_request import UpdateOrderRequest
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 
    update_order_request = keap_core_v2_client.UpdateOrderRequest() # UpdateOrderRequest | 
    update_mask = 'update_mask_example' # str | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Order
        api_response = api_instance.update_order(order_id, update_order_request, update_mask=update_mask)
        print("The response of OrdersApi->update_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->update_order: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 
 **update_order_request** | [**UpdateOrderRequest**](UpdateOrderRequest.md)|  | 
 **update_mask** | **str**| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**OrderV2**](OrderV2.md)

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_order_custom_field**
> CustomFieldMetaData update_order_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update an Order Custom Field

Updates a custom field of the specified type and options to the Order object

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_core_v2_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | 
    update_custom_field_meta_data_request = keap_core_v2_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | 
    update_mask = 'update_mask_example' # str | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Order Custom Field
        api_response = api_instance.update_order_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)
        print("The response of OrdersApi->update_order_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->update_order_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**|  | 
 **update_custom_field_meta_data_request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | 
 **update_mask** | **str**| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_order_item**
> OrderItem update_order_item(order_id, order_item_id, update_order_item_request, update_mask=update_mask)

Update an Order Item

Updates an Order Item

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.order_item import OrderItem
from keap_core_v2_client.models.update_order_item_request import UpdateOrderItemRequest
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | 
    order_item_id = 'order_item_id_example' # str | 
    update_order_item_request = keap_core_v2_client.UpdateOrderItemRequest() # UpdateOrderItemRequest | 
    update_mask = 'update_mask_example' # str | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Order Item
        api_response = api_instance.update_order_item(order_id, order_item_id, update_order_item_request, update_mask=update_mask)
        print("The response of OrdersApi->update_order_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->update_order_item: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 
 **order_item_id** | **str**|  | 
 **update_order_item_request** | [**UpdateOrderItemRequest**](UpdateOrderItemRequest.md)|  | 
 **update_mask** | **str**| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**OrderItem**](OrderItem.md)

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

