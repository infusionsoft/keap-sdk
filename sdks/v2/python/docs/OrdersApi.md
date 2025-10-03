# keap_core_v2_client.OrdersApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apply_commission_on_order_items**](OrdersApi.md#apply_commission_on_order_items) | **POST** /v2/orders/{order_id}/items/{order_item_id}:applyCommission | Apply Commission to an Order Item
[**apply_tax**](OrdersApi.md#apply_tax) | **POST** /v2/orders/{order_id}:applyTax | Apply Taxes on an Order
[**attach_file_to_order**](OrdersApi.md#attach_file_to_order) | **POST** /v2/orders/{order_id}:attachFile | Attach a File to an Order Invoice
[**create_order**](OrdersApi.md#create_order) | **POST** /v2/orders | Create an Order
[**create_order_custom_field**](OrdersApi.md#create_order_custom_field) | **POST** /v2/orders/model/customFields | Create an Order Custom Field
[**create_order_item**](OrdersApi.md#create_order_item) | **POST** /v2/orders/{order_id}/items | Create an Order Item
[**create_payment_for_an_order**](OrdersApi.md#create_payment_for_an_order) | **POST** /v2/orders/{order_id}/payments | Create a Payment
[**delete_order**](OrdersApi.md#delete_order) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**delete_order_custom_field**](OrdersApi.md#delete_order_custom_field) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order Custom Field
[**delete_order_item**](OrdersApi.md#delete_order_item) | **DELETE** /v2/orders/{order_id}/items/{order_item_id} | Delete an Order Item
[**detach_file_from_order**](OrdersApi.md#detach_file_from_order) | **POST** /v2/orders/{order_id}:detachFile | Detach a File from an Order Invoice
[**get_order**](OrdersApi.md#get_order) | **GET** /v2/orders/{order_id} | Retrieve an Order
[**list_order_payments**](OrdersApi.md#list_order_payments) | **GET** /v2/orders/{order_id}/payments | Retrieve Order Payments
[**list_orders**](OrdersApi.md#list_orders) | **GET** /v2/orders | List orders
[**retrieve_order_custom_field_model**](OrdersApi.md#retrieve_order_custom_field_model) | **GET** /v2/orders/model | Retrieve Order Custom Field Model
[**update_order**](OrdersApi.md#update_order) | **PATCH** /v2/orders/{order_id} | Update an Order
[**update_order_custom_field**](OrdersApi.md#update_order_custom_field) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order Custom Field
[**update_order_item**](OrdersApi.md#update_order_item) | **PATCH** /v2/orders/{order_id}/items/{order_item_id} | Update an Order Item


# **apply_commission_on_order_items**
> OrderItem apply_commission_on_order_items(order_id, order_item_id, rest_apply_commission_request)

Apply Commission to an Order Item

Applies commission to an order item on an existing order.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.order_item import OrderItem
from keap_core_v2_client.models.rest_apply_commission_request import RestApplyCommissionRequest
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    order_item_id = 'order_item_id_example' # str | order_item_id
    rest_apply_commission_request = keap_core_v2_client.RestApplyCommissionRequest() # RestApplyCommissionRequest | request

    try:
        # Apply Commission to an Order Item
        api_response = api_instance.apply_commission_on_order_items(order_id, order_item_id, rest_apply_commission_request)
        print("The response of OrdersApi->apply_commission_on_order_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->apply_commission_on_order_items: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **order_item_id** | **str**| order_item_id | 
 **rest_apply_commission_request** | [**RestApplyCommissionRequest**](RestApplyCommissionRequest.md)| request | 

### Return type

[**OrderItem**](OrderItem.md)

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apply_tax**
> Order apply_tax(order_id)

Apply Taxes on an Order

Calculate taxes for a single Order for a given order id

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.order import Order
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id

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
 **order_id** | **str**| order_id | 

### Return type

[**Order**](Order.md)

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attach_file_to_order**
> Order attach_file_to_order(order_id, file_operation_request)

Attach a File to an Order Invoice

Attaches an uploaded File to an Order Invoice

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.file_operation_request import FileOperationRequest
from keap_core_v2_client.models.order import Order
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    file_operation_request = keap_core_v2_client.FileOperationRequest() # FileOperationRequest | File name

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
 **order_id** | **str**| order_id | 
 **file_operation_request** | [**FileOperationRequest**](FileOperationRequest.md)| File name | 

### Return type

[**Order**](Order.md)

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_order**
> Order create_order(rest_create_order_request)

Create an Order

Creates a one time Order with Order items

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.order import Order
from keap_core_v2_client.models.rest_create_order_request import RestCreateOrderRequest
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    rest_create_order_request = keap_core_v2_client.RestCreateOrderRequest() # RestCreateOrderRequest | request

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
 **rest_create_order_request** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md)| request | 

### Return type

[**Order**](Order.md)

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

# **create_order_custom_field**
> CustomFieldMetaData create_order_custom_field(create_custom_field_request)

Create an Order Custom Field

Creates a custom field of the specified type and options to the Order object

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    create_custom_field_request = keap_core_v2_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

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
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

# **create_order_item**
> OrderItem create_order_item(order_id, create_order_item_request)

Create an Order Item

Creates an order item on an existing order

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_order_item_request import CreateOrderItemRequest
from keap_core_v2_client.models.order_item import OrderItem
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    create_order_item_request = keap_core_v2_client.CreateOrderItemRequest() # CreateOrderItemRequest | request

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
 **order_id** | **str**| order_id | 
 **create_order_item_request** | [**CreateOrderItemRequest**](CreateOrderItemRequest.md)| request | 

### Return type

[**OrderItem**](OrderItem.md)

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

# **create_payment_for_an_order**
> PaymentResult create_payment_for_an_order(order_id, create_payment_request)

Create a Payment

Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_payment_request import CreatePaymentRequest
from keap_core_v2_client.models.payment_result import PaymentResult
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    create_payment_request = keap_core_v2_client.CreatePaymentRequest() # CreatePaymentRequest | request

    try:
        # Create a Payment
        api_response = api_instance.create_payment_for_an_order(order_id, create_payment_request)
        print("The response of OrdersApi->create_payment_for_an_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_payment_for_an_order: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **create_payment_request** | [**CreatePaymentRequest**](CreatePaymentRequest.md)| request | 

### Return type

[**PaymentResult**](PaymentResult.md)

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

# **delete_order**
> delete_order(order_id)

Delete an Order

Deletes an Order<br/>
Note: The Order must not have any transactions recorded to be available for deletion.


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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id

    try:
        # Delete an Order
        api_instance.delete_order(order_id)
    except Exception as e:
        print("Exception when calling OrdersApi->delete_order: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 

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

# **delete_order_custom_field**
> delete_order_custom_field(custom_field_id)

Delete an Order Custom Field

Deletes a Custom Field from the Order object

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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id

    try:
        # Delete an Order Custom Field
        api_instance.delete_order_custom_field(custom_field_id)
    except Exception as e:
        print("Exception when calling OrdersApi->delete_order_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 

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

# **delete_order_item**
> delete_order_item(order_id, order_item_id)

Delete an Order Item

Deletes an order item on an existing order

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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    order_item_id = 'order_item_id_example' # str | order_item_id

    try:
        # Delete an Order Item
        api_instance.delete_order_item(order_id, order_item_id)
    except Exception as e:
        print("Exception when calling OrdersApi->delete_order_item: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **order_item_id** | **str**| order_item_id | 

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

# **detach_file_from_order**
> Order detach_file_from_order(order_id, file_operation_request)

Detach a File from an Order Invoice

Detaches a File from an Order Invoice

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.file_operation_request import FileOperationRequest
from keap_core_v2_client.models.order import Order
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    file_operation_request = keap_core_v2_client.FileOperationRequest() # FileOperationRequest | request

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
 **order_id** | **str**| order_id | 
 **file_operation_request** | [**FileOperationRequest**](FileOperationRequest.md)| request | 

### Return type

[**Order**](Order.md)

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_order**
> Order get_order(order_id)

Retrieve an Order

Retrieves a single Order for a given order id

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.order import Order
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id

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
 **order_id** | **str**| order_id | 

### Return type

[**Order**](Order.md)

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

# **list_order_payments**
> ListOrderPaymentsResponse list_order_payments(order_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieve Order Payments

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_order_payments_response import ListOrderPaymentsResponse
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
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
 **order_id** | **str**| order_id | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;invoice_id&#x60; - (String) &#x60;payment_id&#x60; - (String) &#x60;amount&#x60; - (String) &#x60;pay_status&#x60; - (Boolean) &#x60;skip_commission&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;payment_id&#x60; - &#x60;amount&#x60; - &#x60;pay_time&#x60; - &#x60;pay_status&#x60; - &#x60;skip_commission&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOrderPaymentsResponse**](ListOrderPaymentsResponse.md)

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

# **list_orders**
> ListOrders list_orders(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List orders

Retrieves a list of orders

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_orders import ListOrders
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `product_id` - (String) `contact_id` - (Boolean) `paid` - (String) `created_since_time` - (String) `created_until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567` (optional)
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
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOrders**](ListOrders.md)

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

# **retrieve_order_custom_field_model**
> ObjectModel retrieve_order_custom_field_model()

Retrieve Order Custom Field Model

Gets the custom fields for the Order object

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.object_model import ObjectModel
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

# **update_order**
> Order update_order(order_id, update_mask=update_mask, update_order_request=update_order_request)

Update an Order

Updates an Order

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.order import Order
from keap_core_v2_client.models.update_order_request import UpdateOrderRequest
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    update_order_request = keap_core_v2_client.UpdateOrderRequest() # UpdateOrderRequest | order (optional)

    try:
        # Update an Order
        api_response = api_instance.update_order(order_id, update_mask=update_mask, update_order_request=update_order_request)
        print("The response of OrdersApi->update_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->update_order: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **update_order_request** | [**UpdateOrderRequest**](UpdateOrderRequest.md)| order | [optional] 

### Return type

[**Order**](Order.md)

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

# **update_order_custom_field**
> CustomFieldMetaData update_order_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update an Order Custom Field

Updates a custom field of the specified type and options to the Order object

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_core_v2_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    update_custom_field_meta_data_request = keap_core_v2_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

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
 **custom_field_id** | **str**| custom_field_id | 
 **update_custom_field_meta_data_request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

# **update_order_item**
> OrderItem update_order_item(order_id, order_item_id, update_mask=update_mask, update_order_item_request=update_order_item_request)

Update an Order Item

Updates an Order Item

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.order_item import OrderItem
from keap_core_v2_client.models.update_order_item_request import UpdateOrderItemRequest
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
    api_instance = keap_core_v2_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    order_item_id = 'order_item_id_example' # str | order_item_id
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    update_order_item_request = keap_core_v2_client.UpdateOrderItemRequest() # UpdateOrderItemRequest | order (optional)

    try:
        # Update an Order Item
        api_response = api_instance.update_order_item(order_id, order_item_id, update_mask=update_mask, update_order_item_request=update_order_item_request)
        print("The response of OrdersApi->update_order_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->update_order_item: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **order_item_id** | **str**| order_item_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **update_order_item_request** | [**UpdateOrderItemRequest**](UpdateOrderItemRequest.md)| order | [optional] 

### Return type

[**OrderItem**](OrderItem.md)

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

