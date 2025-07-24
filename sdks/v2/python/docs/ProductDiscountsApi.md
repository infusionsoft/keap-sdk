# keap_core_v2_client.ProductDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_product_discount**](ProductDiscountsApi.md#create_product_discount) | **POST** /v2/discounts/products | Create a Product Discount
[**delete_product_discount**](ProductDiscountsApi.md#delete_product_discount) | **DELETE** /v2/discounts/products/{discount_id} | Delete a Product Discount
[**get_product_discount**](ProductDiscountsApi.md#get_product_discount) | **GET** /v2/discounts/products/{discount_id} | Retrieve a Product Discount
[**list_product_discounts**](ProductDiscountsApi.md#list_product_discounts) | **GET** /v2/discounts/products | List all Product Discounts
[**update_product_discount**](ProductDiscountsApi.md#update_product_discount) | **PATCH** /v2/discounts/products/{discount_id} | Update a Product Discount


# **create_product_discount**
> ProductDiscount create_product_discount(create_product_discount_request)

Create a Product Discount

Creates a Product Discount

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_product_discount_request import CreateProductDiscountRequest
from keap_core_v2_client.models.product_discount import ProductDiscount
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
    api_instance = keap_core_v2_client.ProductDiscountsApi(api_client)
    create_product_discount_request = keap_core_v2_client.CreateProductDiscountRequest() # CreateProductDiscountRequest | request

    try:
        # Create a Product Discount
        api_response = api_instance.create_product_discount(create_product_discount_request)
        print("The response of ProductDiscountsApi->create_product_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDiscountsApi->create_product_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_product_discount_request** | [**CreateProductDiscountRequest**](CreateProductDiscountRequest.md)| request | 

### Return type

[**ProductDiscount**](ProductDiscount.md)

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

# **delete_product_discount**
> delete_product_discount(discount_id)

Delete a Product Discount

Deletes a specified Product Discount

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
    api_instance = keap_core_v2_client.ProductDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Delete a Product Discount
        api_instance.delete_product_discount(discount_id)
    except Exception as e:
        print("Exception when calling ProductDiscountsApi->delete_product_discount: %s\n" % e)
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

# **get_product_discount**
> ProductDiscount get_product_discount(discount_id)

Retrieve a Product Discount

Retrieves a Product Discount

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.product_discount import ProductDiscount
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
    api_instance = keap_core_v2_client.ProductDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Retrieve a Product Discount
        api_response = api_instance.get_product_discount(discount_id)
        print("The response of ProductDiscountsApi->get_product_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDiscountsApi->get_product_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

### Return type

[**ProductDiscount**](ProductDiscount.md)

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

# **list_product_discounts**
> ListProductDiscountsResponse list_product_discounts(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List all Product Discounts

Retrieves a list of Product Discounts

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_product_discounts_response import ListProductDiscountsResponse
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
    api_instance = keap_core_v2_client.ProductDiscountsApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (Boolean) `apply_to_commissions` - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value` - (String) `product_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=apply_to_commissions%3D%3Dtrue` - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D10.0` - `filter=product_id%3D%3D2` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `apply_to_commissions` - `discount_type` - `discount_value` - `id` - `name` - `product_id`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List all Product Discounts
        api_response = api_instance.list_product_discounts(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ProductDiscountsApi->list_product_discounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDiscountsApi->list_product_discounts: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListProductDiscountsResponse**](ListProductDiscountsResponse.md)

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

# **update_product_discount**
> ProductDiscount update_product_discount(discount_id, update_product_discount_request, update_mask=update_mask)

Update a Product Discount

Updates a Product Discount

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.product_discount import ProductDiscount
from keap_core_v2_client.models.update_product_discount_request import UpdateProductDiscountRequest
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
    api_instance = keap_core_v2_client.ProductDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id
    update_product_discount_request = keap_core_v2_client.UpdateProductDiscountRequest() # UpdateProductDiscountRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Product Discount
        api_response = api_instance.update_product_discount(discount_id, update_product_discount_request, update_mask=update_mask)
        print("The response of ProductDiscountsApi->update_product_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDiscountsApi->update_product_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 
 **update_product_discount_request** | [**UpdateProductDiscountRequest**](UpdateProductDiscountRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductDiscount**](ProductDiscount.md)

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

