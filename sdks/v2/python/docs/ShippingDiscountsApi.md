# keap_core_v2_client.ShippingDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_shipping_discount**](ShippingDiscountsApi.md#create_shipping_discount) | **POST** /v2/discounts/shipping | Create a Shipping Discount
[**delete_shipping_discount**](ShippingDiscountsApi.md#delete_shipping_discount) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount
[**get_shipping_discount**](ShippingDiscountsApi.md#get_shipping_discount) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount
[**list_shipping_discounts**](ShippingDiscountsApi.md#list_shipping_discounts) | **GET** /v2/discounts/shipping | List all Shipping Discounts
[**update_shipping_discount**](ShippingDiscountsApi.md#update_shipping_discount) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount


# **create_shipping_discount**
> ShippingDiscount create_shipping_discount(create_shipping_discount_request)

Create a Shipping Discount

Creates a Shipping Discount

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_shipping_discount_request import CreateShippingDiscountRequest
from keap_core_v2_client.models.shipping_discount import ShippingDiscount
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
    api_instance = keap_core_v2_client.ShippingDiscountsApi(api_client)
    create_shipping_discount_request = keap_core_v2_client.CreateShippingDiscountRequest() # CreateShippingDiscountRequest | request

    try:
        # Create a Shipping Discount
        api_response = api_instance.create_shipping_discount(create_shipping_discount_request)
        print("The response of ShippingDiscountsApi->create_shipping_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingDiscountsApi->create_shipping_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_shipping_discount_request** | [**CreateShippingDiscountRequest**](CreateShippingDiscountRequest.md)| request | 

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

# **delete_shipping_discount**
> delete_shipping_discount(discount_id)

Delete a Shipping Discount

Deletes a specified Shipping Discount

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
    api_instance = keap_core_v2_client.ShippingDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Delete a Shipping Discount
        api_instance.delete_shipping_discount(discount_id)
    except Exception as e:
        print("Exception when calling ShippingDiscountsApi->delete_shipping_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

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

# **get_shipping_discount**
> ShippingDiscount get_shipping_discount(discount_id)

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.shipping_discount import ShippingDiscount
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
    api_instance = keap_core_v2_client.ShippingDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Retrieve a Shipping Discount
        api_response = api_instance.get_shipping_discount(discount_id)
        print("The response of ShippingDiscountsApi->get_shipping_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingDiscountsApi->get_shipping_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

# **list_shipping_discounts**
> ListShippingDiscountsResponse list_shipping_discounts(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List all Shipping Discounts

Retrieves a list of Shipping Discounts

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_shipping_discounts_response import ListShippingDiscountsResponse
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
    api_instance = keap_core_v2_client.ShippingDiscountsApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D4.5` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `discount_type` - `discount_value` - `id` - `name`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List all Shipping Discounts
        api_response = api_instance.list_shipping_discounts(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ShippingDiscountsApi->list_shipping_discounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingDiscountsApi->list_shipping_discounts: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListShippingDiscountsResponse**](ListShippingDiscountsResponse.md)

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

# **update_shipping_discount**
> ShippingDiscount update_shipping_discount(discount_id, update_shipping_discount_request, update_mask=update_mask)

Update a Shipping Discount

Updates a Shipping Discount

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.shipping_discount import ShippingDiscount
from keap_core_v2_client.models.update_shipping_discount_request import UpdateShippingDiscountRequest
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
    api_instance = keap_core_v2_client.ShippingDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id
    update_shipping_discount_request = keap_core_v2_client.UpdateShippingDiscountRequest() # UpdateShippingDiscountRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Shipping Discount
        api_response = api_instance.update_shipping_discount(discount_id, update_shipping_discount_request, update_mask=update_mask)
        print("The response of ShippingDiscountsApi->update_shipping_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingDiscountsApi->update_shipping_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 
 **update_shipping_discount_request** | [**UpdateShippingDiscountRequest**](UpdateShippingDiscountRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

