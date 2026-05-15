# keap_core_v2_client.OrderTotalDiscountsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_order_total_discount**](OrderTotalDiscountsApi.md#create_order_total_discount) | **POST** /rest/v2/discounts/orderTotals | Create an Order Total Discount
[**delete_order_total_discount**](OrderTotalDiscountsApi.md#delete_order_total_discount) | **DELETE** /rest/v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount
[**get_order_total_discount**](OrderTotalDiscountsApi.md#get_order_total_discount) | **GET** /rest/v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount
[**list_order_total_discounts**](OrderTotalDiscountsApi.md#list_order_total_discounts) | **GET** /rest/v2/discounts/orderTotals | List all Order Total Discounts
[**update_order_total_discount**](OrderTotalDiscountsApi.md#update_order_total_discount) | **PATCH** /rest/v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount


# **create_order_total_discount**
> OrderTotalDiscount create_order_total_discount(create_order_total_discount_request)

Create an Order Total Discount

Creates an Order Total Discount

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_order_total_discount_request import CreateOrderTotalDiscountRequest
from keap_core_v2_client.models.order_total_discount import OrderTotalDiscount
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
    api_instance = keap_core_v2_client.OrderTotalDiscountsApi(api_client)
    create_order_total_discount_request = keap_core_v2_client.CreateOrderTotalDiscountRequest() # CreateOrderTotalDiscountRequest | 

    try:
        # Create an Order Total Discount
        api_response = api_instance.create_order_total_discount(create_order_total_discount_request)
        print("The response of OrderTotalDiscountsApi->create_order_total_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderTotalDiscountsApi->create_order_total_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_order_total_discount_request** | [**CreateOrderTotalDiscountRequest**](CreateOrderTotalDiscountRequest.md)|  | 

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

# **delete_order_total_discount**
> delete_order_total_discount(discount_id)

Delete an Order Total Discount

Deletes a specified Order Total Discount

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
    api_instance = keap_core_v2_client.OrderTotalDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | 

    try:
        # Delete an Order Total Discount
        api_instance.delete_order_total_discount(discount_id)
    except Exception as e:
        print("Exception when calling OrderTotalDiscountsApi->delete_order_total_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**|  | 

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

# **get_order_total_discount**
> OrderTotalDiscount get_order_total_discount(discount_id)

Retrieve an Order Total Discount

Retrieves an Order Total Discount

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.order_total_discount import OrderTotalDiscount
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
    api_instance = keap_core_v2_client.OrderTotalDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | 

    try:
        # Retrieve an Order Total Discount
        api_response = api_instance.get_order_total_discount(discount_id)
        print("The response of OrderTotalDiscountsApi->get_order_total_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderTotalDiscountsApi->get_order_total_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**|  | 

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

# **list_order_total_discounts**
> ListOrderTotalDiscountsResponse list_order_total_discounts(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List all Order Total Discounts

Retrieves a list of Order Total Discounts

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_order_total_discounts_response import ListOrderTotalDiscountsResponse
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
    api_instance = keap_core_v2_client.OrderTotalDiscountsApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (Boolean) `apply_to_commissions` - (DiscountStrategy) `discount_strategy`: GROSS or NET - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=apply_to_commissions%3D%3Dtrue` - `filter=discount_strategy%3D%3DGROSS` - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D10.0` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `apply_to_commissions` - `discount_strategy` - `discount_type` - `discount_value` - `id` - `name`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List all Order Total Discounts
        api_response = api_instance.list_order_total_discounts(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OrderTotalDiscountsApi->list_order_total_discounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderTotalDiscountsApi->list_order_total_discounts: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOrderTotalDiscountsResponse**](ListOrderTotalDiscountsResponse.md)

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

# **update_order_total_discount**
> OrderTotalDiscount update_order_total_discount(discount_id, update_order_total_discount_request, update_mask=update_mask)

Update an Order Total Discount

Updates an Order Total Discount

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.order_total_discount import OrderTotalDiscount
from keap_core_v2_client.models.update_order_total_discount_request import UpdateOrderTotalDiscountRequest
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
    api_instance = keap_core_v2_client.OrderTotalDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | 
    update_order_total_discount_request = keap_core_v2_client.UpdateOrderTotalDiscountRequest() # UpdateOrderTotalDiscountRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Order Total Discount
        api_response = api_instance.update_order_total_discount(discount_id, update_order_total_discount_request, update_mask=update_mask)
        print("The response of OrderTotalDiscountsApi->update_order_total_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderTotalDiscountsApi->update_order_total_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**|  | 
 **update_order_total_discount_request** | [**UpdateOrderTotalDiscountRequest**](UpdateOrderTotalDiscountRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

