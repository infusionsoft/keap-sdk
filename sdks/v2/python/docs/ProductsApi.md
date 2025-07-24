# keap_core_v2_client.ProductsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjust_inventory**](ProductsApi.md#adjust_inventory) | **POST** /v2/products/{product_id}:adjustInventory | Adjust Inventory of a Product
[**create_product**](ProductsApi.md#create_product) | **POST** /v2/products | Create a Product
[**create_product_image**](ProductsApi.md#create_product_image) | **POST** /v2/products/{product_id}/images | Create the Product Image
[**delete_product**](ProductsApi.md#delete_product) | **DELETE** /v2/products/{product_id} | Delete a Product
[**delete_product_image**](ProductsApi.md#delete_product_image) | **DELETE** /v2/products/{product_id}/images | Delete the Product Image
[**get_product**](ProductsApi.md#get_product) | **GET** /v2/products/{product_id} | Get a Product
[**list_products**](ProductsApi.md#list_products) | **GET** /v2/products | List Products
[**update_product**](ProductsApi.md#update_product) | **PATCH** /v2/products/{product_id} | Update a Product


# **adjust_inventory**
> RestV2Product adjust_inventory(product_id, update_product_inventory_request)

Adjust Inventory of a Product

Increase or decrease the quantity of the Product

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_v2_product import RestV2Product
from keap_core_v2_client.models.update_product_inventory_request import UpdateProductInventoryRequest
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    update_product_inventory_request = keap_core_v2_client.UpdateProductInventoryRequest() # UpdateProductInventoryRequest | updateProductInventoryRequest

    try:
        # Adjust Inventory of a Product
        api_response = api_instance.adjust_inventory(product_id, update_product_inventory_request)
        print("The response of ProductsApi->adjust_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->adjust_inventory: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **update_product_inventory_request** | [**UpdateProductInventoryRequest**](UpdateProductInventoryRequest.md)| updateProductInventoryRequest | 

### Return type

[**RestV2Product**](RestV2Product.md)

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

# **create_product**
> RestV2Product create_product(create_product_request)

Create a Product

Creates a new product

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_product_request import CreateProductRequest
from keap_core_v2_client.models.rest_v2_product import RestV2Product
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    create_product_request = keap_core_v2_client.CreateProductRequest() # CreateProductRequest | createProductRequest

    try:
        # Create a Product
        api_response = api_instance.create_product(create_product_request)
        print("The response of ProductsApi->create_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->create_product: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_product_request** | [**CreateProductRequest**](CreateProductRequest.md)| createProductRequest | 

### Return type

[**RestV2Product**](RestV2Product.md)

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

# **create_product_image**
> create_product_image(product_id, file)

Create the Product Image

Creates the Product Image file and uploads it to the specified Product

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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    file = None # bytearray | File to upload

    try:
        # Create the Product Image
        api_instance.create_product_image(product_id, file)
    except Exception as e:
        print("Exception when calling ProductsApi->create_product_image: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **file** | **bytearray**| File to upload | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_product**
> delete_product(product_id)

Delete a Product

Deletes a single product

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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id

    try:
        # Delete a Product
        api_instance.delete_product(product_id)
    except Exception as e:
        print("Exception when calling ProductsApi->delete_product: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 

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

# **delete_product_image**
> delete_product_image(product_id)

Delete the Product Image

Deletes the Product Image from the specified Product

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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id

    try:
        # Delete the Product Image
        api_instance.delete_product_image(product_id)
    except Exception as e:
        print("Exception when calling ProductsApi->delete_product_image: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 

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

# **get_product**
> RestV2Product get_product(product_id)

Get a Product

Gets a single Product

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_v2_product import RestV2Product
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id

    try:
        # Get a Product
        api_response = api_instance.get_product(product_id)
        print("The response of ProductsApi->get_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_product: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 

### Return type

[**RestV2Product**](RestV2Product.md)

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

# **list_products**
> ListProductsResponse list_products(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Products

Retrieves a list of Products

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_products_response import ListProductsResponse
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Products
        api_response = api_instance.list_products(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ProductsApi->list_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->list_products: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListProductsResponse**](ListProductsResponse.md)

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

# **update_product**
> RestV2Product update_product(product_id, update_product_request, update_mask=update_mask)

Update a Product

Updates a product

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_v2_product import RestV2Product
from keap_core_v2_client.models.update_product_request import UpdateProductRequest
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    update_product_request = keap_core_v2_client.UpdateProductRequest() # UpdateProductRequest | updateProductRequest
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Product
        api_response = api_instance.update_product(product_id, update_product_request, update_mask=update_mask)
        print("The response of ProductsApi->update_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->update_product: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **update_product_request** | [**UpdateProductRequest**](UpdateProductRequest.md)| updateProductRequest | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestV2Product**](RestV2Product.md)

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

