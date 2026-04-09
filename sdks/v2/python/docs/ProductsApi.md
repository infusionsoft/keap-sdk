# keap_core_v2_client.ProductsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_product_option_list_option_value**](ProductsApi.md#add_product_option_list_option_value) | **POST** /rest/v2/products/{product_id}/options/{product_option_id}/listItems | Add a Product Option List Option Value
[**adjust_inventory**](ProductsApi.md#adjust_inventory) | **POST** /rest/v2/products/{product_id}:adjustInventory | Adjust Inventory of a Product
[**create_product**](ProductsApi.md#create_product) | **POST** /rest/v2/products | Create a Product
[**create_product_image**](ProductsApi.md#create_product_image) | **POST** /rest/v2/products/{product_id}/images | Create the Product Image
[**create_product_option**](ProductsApi.md#create_product_option) | **POST** /rest/v2/products/{product_id}/options | Create a Product Option
[**delete_product**](ProductsApi.md#delete_product) | **DELETE** /rest/v2/products/{product_id} | Delete a Product
[**delete_product_image**](ProductsApi.md#delete_product_image) | **DELETE** /rest/v2/products/{product_id}/images | Delete the Product Image
[**delete_product_option**](ProductsApi.md#delete_product_option) | **DELETE** /rest/v2/products/{product_id}/options/{product_option_id} | Delete a Product Option
[**delete_product_option_list_option_value**](ProductsApi.md#delete_product_option_list_option_value) | **DELETE** /rest/v2/products/{product_id}/options/{product_option_id}/listItems/{item_id} | Delete a Product Option List Item
[**get_file_data**](ProductsApi.md#get_file_data) | **GET** /rest/v2/products/{product_id}/images/legacyImageData | Retrieve Product Legacy Image Data
[**get_product**](ProductsApi.md#get_product) | **GET** /rest/v2/products/{product_id} | Get a Product
[**get_product_option**](ProductsApi.md#get_product_option) | **GET** /rest/v2/products/{product_id}/options/{product_option_id} | Get Product Option
[**list_product_options**](ProductsApi.md#list_product_options) | **GET** /rest/v2/products/{product_id}/options | List Product Options
[**list_products**](ProductsApi.md#list_products) | **GET** /rest/v2/products | List Products
[**update_product**](ProductsApi.md#update_product) | **PATCH** /rest/v2/products/{product_id} | Update a Product
[**update_product_option**](ProductsApi.md#update_product_option) | **PATCH** /rest/v2/products/{product_id}/options/{product_option_id} | Updates a Product Option
[**update_product_option_list_option_value**](ProductsApi.md#update_product_option_list_option_value) | **PATCH** /rest/v2/products/{product_id}/options/{product_option_id}/listItems/{item_id} | Updates a Product Option List Option Value


# **add_product_option_list_option_value**
> ProductOption add_product_option_list_option_value(product_id, product_option_id, create_product_option_list_option)

Add a Product Option List Option Value

Adds product option values to a product option of type LIST

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_product_option_list_option import CreateProductOptionListOption
from keap_core_v2_client.models.product_option import ProductOption
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    product_option_id = 'product_option_id_example' # str | product_option_id
    create_product_option_list_option = [keap_core_v2_client.CreateProductOptionListOption()] # List[CreateProductOptionListOption] | 

    try:
        # Add a Product Option List Option Value
        api_response = api_instance.add_product_option_list_option_value(product_id, product_option_id, create_product_option_list_option)
        print("The response of ProductsApi->add_product_option_list_option_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->add_product_option_list_option_value: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **product_option_id** | **str**| product_option_id | 
 **create_product_option_list_option** | [**List[CreateProductOptionListOption]**](CreateProductOptionListOption.md)|  | 

### Return type

[**ProductOption**](ProductOption.md)

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

# **adjust_inventory**
> RestV2ProductDetail adjust_inventory(product_id, update_product_inventory_request_detail)

Adjust Inventory of a Product

Increase or decrease the quantity of the Product

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_v2_product_detail import RestV2ProductDetail
from keap_core_v2_client.models.update_product_inventory_request_detail import UpdateProductInventoryRequestDetail
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    update_product_inventory_request_detail = keap_core_v2_client.UpdateProductInventoryRequestDetail() # UpdateProductInventoryRequestDetail | 

    try:
        # Adjust Inventory of a Product
        api_response = api_instance.adjust_inventory(product_id, update_product_inventory_request_detail)
        print("The response of ProductsApi->adjust_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->adjust_inventory: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **update_product_inventory_request_detail** | [**UpdateProductInventoryRequestDetail**](UpdateProductInventoryRequestDetail.md)|  | 

### Return type

[**RestV2ProductDetail**](RestV2ProductDetail.md)

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

# **create_product**
> RestV2ProductDetail create_product(create_product_request_detail)

Create a Product

Creates a new product

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_product_request_detail import CreateProductRequestDetail
from keap_core_v2_client.models.rest_v2_product_detail import RestV2ProductDetail
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    create_product_request_detail = keap_core_v2_client.CreateProductRequestDetail() # CreateProductRequestDetail | 

    try:
        # Create a Product
        api_response = api_instance.create_product(create_product_request_detail)
        print("The response of ProductsApi->create_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->create_product: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_product_request_detail** | [**CreateProductRequestDetail**](CreateProductRequestDetail.md)|  | 

### Return type

[**RestV2ProductDetail**](RestV2ProductDetail.md)

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

# **create_product_image**
> create_product_image(product_id, file, legacy=legacy)

Create the Product Image

Creates the Product Image file and uploads it to the specified Product

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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | The product ID
    file = None # bytearray | The image file to upload
    legacy = True # bool | Set to 'true' if the product image should also be used in legacy cart features. Only one image is allowed. If an image already exists, it will be replaced by the current image. (optional)

    try:
        # Create the Product Image
        api_instance.create_product_image(product_id, file, legacy=legacy)
    except Exception as e:
        print("Exception when calling ProductsApi->create_product_image: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| The product ID | 
 **file** | **bytearray**| The image file to upload | 
 **legacy** | **bool**| Set to &#39;true&#39; if the product image should also be used in legacy cart features. Only one image is allowed. If an image already exists, it will be replaced by the current image. | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

# **create_product_option**
> ProductOption create_product_option(product_id, create_product_option_request)

Create a Product Option

Creates a new product option

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_product_option_request import CreateProductOptionRequest
from keap_core_v2_client.models.product_option import ProductOption
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    create_product_option_request = keap_core_v2_client.CreateProductOptionRequest() # CreateProductOptionRequest | 

    try:
        # Create a Product Option
        api_response = api_instance.create_product_option(product_id, create_product_option_request)
        print("The response of ProductsApi->create_product_option:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->create_product_option: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **create_product_option_request** | [**CreateProductOptionRequest**](CreateProductOptionRequest.md)|  | 

### Return type

[**ProductOption**](ProductOption.md)

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

# **delete_product**
> delete_product(product_id)

Delete a Product

Deletes a single product

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

# **delete_product_image**
> delete_product_image(product_id)

Delete the Product Image

Deletes the Product Image from the specified Product

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

# **delete_product_option**
> delete_product_option(product_id, product_option_id)

Delete a Product Option

Deletes a single product option

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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    product_option_id = 'product_option_id_example' # str | product_option_id

    try:
        # Delete a Product Option
        api_instance.delete_product_option(product_id, product_option_id)
    except Exception as e:
        print("Exception when calling ProductsApi->delete_product_option: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **product_option_id** | **str**| product_option_id | 

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

# **delete_product_option_list_option_value**
> delete_product_option_list_option_value(product_id, product_option_id, item_id)

Delete a Product Option List Item

Deletes a single option value in a Product Option of type LIST

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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    product_option_id = 'product_option_id_example' # str | product_option_id
    item_id = 'item_id_example' # str | item_id

    try:
        # Delete a Product Option List Item
        api_instance.delete_product_option_list_option_value(product_id, product_option_id, item_id)
    except Exception as e:
        print("Exception when calling ProductsApi->delete_product_option_list_option_value: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **product_option_id** | **str**| product_option_id | 
 **item_id** | **str**| item_id | 

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

# **get_file_data**
> bytearray get_file_data(product_id)

Retrieve Product Legacy Image Data

Retrieves the product's legacy image

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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id

    try:
        # Retrieve Product Legacy Image Data
        api_response = api_instance.get_file_data(product_id)
        print("The response of ProductsApi->get_file_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_file_data: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 

### Return type

**bytearray**

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

# **get_product**
> RestV2ProductDetail get_product(product_id)

Get a Product

Gets a single Product

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_v2_product_detail import RestV2ProductDetail
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

[**RestV2ProductDetail**](RestV2ProductDetail.md)

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

# **get_product_option**
> ProductOption get_product_option(product_id, product_option_id)

Get Product Option

Retrieves a Product Option

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.product_option import ProductOption
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    product_option_id = 'product_option_id_example' # str | product_option_id

    try:
        # Get Product Option
        api_response = api_instance.get_product_option(product_id, product_option_id)
        print("The response of ProductsApi->get_product_option:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_product_option: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **product_option_id** | **str**| product_option_id | 

### Return type

[**ProductOption**](ProductOption.md)

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

# **list_product_options**
> ListProductOptionsResponse list_product_options(product_id)

List Product Options

Retrieves all options of a Product

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_product_options_response import ListProductOptionsResponse
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id

    try:
        # List Product Options
        api_response = api_instance.list_product_options(product_id)
        print("The response of ProductsApi->list_product_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->list_product_options: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 

### Return type

[**ListProductOptionsResponse**](ListProductOptionsResponse.md)

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

# **list_products**
> ListProductsResponseList list_products(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Products

Retrieves a list of Products

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_products_response_list import ListProductsResponseList
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name` - (String) `sku`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3Dtestsearch` - `filter=sku%3D%3Dtestsearch` - `filter=name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch`  (optional)
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
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;sku&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;sku%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListProductsResponseList**](ListProductsResponseList.md)

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

# **update_product**
> RestV2ProductDetail update_product(product_id, update_product_request_detail, update_mask=update_mask)

Update a Product

Updates a product

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_v2_product_detail import RestV2ProductDetail
from keap_core_v2_client.models.update_product_request_detail import UpdateProductRequestDetail
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    update_product_request_detail = keap_core_v2_client.UpdateProductRequestDetail() # UpdateProductRequestDetail | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Product
        api_response = api_instance.update_product(product_id, update_product_request_detail, update_mask=update_mask)
        print("The response of ProductsApi->update_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->update_product: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **update_product_request_detail** | [**UpdateProductRequestDetail**](UpdateProductRequestDetail.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestV2ProductDetail**](RestV2ProductDetail.md)

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

# **update_product_option**
> ProductOption update_product_option(product_id, product_option_id, update_product_option_request, update_mask=update_mask)

Updates a Product Option

Updates a product option

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.product_option import ProductOption
from keap_core_v2_client.models.update_product_option_request import UpdateProductOptionRequest
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    product_option_id = 'product_option_id_example' # str | product_option_id
    update_product_option_request = keap_core_v2_client.UpdateProductOptionRequest() # UpdateProductOptionRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Updates a Product Option
        api_response = api_instance.update_product_option(product_id, product_option_id, update_product_option_request, update_mask=update_mask)
        print("The response of ProductsApi->update_product_option:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->update_product_option: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **product_option_id** | **str**| product_option_id | 
 **update_product_option_request** | [**UpdateProductOptionRequest**](UpdateProductOptionRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductOption**](ProductOption.md)

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

# **update_product_option_list_option_value**
> ProductOption update_product_option_list_option_value(product_id, product_option_id, item_id, update_product_option_list_option, update_mask=update_mask)

Updates a Product Option List Option Value

Updates a single product option value

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.product_option import ProductOption
from keap_core_v2_client.models.update_product_option_list_option import UpdateProductOptionListOption
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
    api_instance = keap_core_v2_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | product_id
    product_option_id = 'product_option_id_example' # str | product_option_id
    item_id = 'item_id_example' # str | item_id
    update_product_option_list_option = keap_core_v2_client.UpdateProductOptionListOption() # UpdateProductOptionListOption | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Updates a Product Option List Option Value
        api_response = api_instance.update_product_option_list_option_value(product_id, product_option_id, item_id, update_product_option_list_option, update_mask=update_mask)
        print("The response of ProductsApi->update_product_option_list_option_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->update_product_option_list_option_value: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **product_option_id** | **str**| product_option_id | 
 **item_id** | **str**| item_id | 
 **update_product_option_list_option** | [**UpdateProductOptionListOption**](UpdateProductOptionListOption.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductOption**](ProductOption.md)

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

