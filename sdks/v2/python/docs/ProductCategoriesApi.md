# keap_core_v2_client.ProductCategoriesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assign_products_to_category**](ProductCategoriesApi.md#assign_products_to_category) | **POST** /v2/productCategories/{category_id}:assignProducts | Assign Products to a Product Category
[**create_image_file**](ProductCategoriesApi.md#create_image_file) | **POST** /v2/productCategories/{category_id}/images | Create the product category image file
[**create_product_category**](ProductCategoriesApi.md#create_product_category) | **POST** /v2/productCategories | Create a Product Category
[**delete_image_file**](ProductCategoriesApi.md#delete_image_file) | **DELETE** /v2/productCategories/{category_id}/images | Delete the image from a product category
[**delete_product_category**](ProductCategoriesApi.md#delete_product_category) | **DELETE** /v2/productCategories/{category_id} | Delete a Product Category
[**get_product_category**](ProductCategoriesApi.md#get_product_category) | **GET** /v2/productCategories/{category_id} | Get a Product Category
[**list_product_categories**](ProductCategoriesApi.md#list_product_categories) | **GET** /v2/productCategories | List all Product Categories
[**update_product_category**](ProductCategoriesApi.md#update_product_category) | **PATCH** /v2/productCategories/{category_id} | Update a Product Category


# **assign_products_to_category**
> assign_products_to_category(category_id, assign_products_request)

Assign Products to a Product Category

Assigns products to a Product Category

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.assign_products_request import AssignProductsRequest
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
    api_instance = keap_core_v2_client.ProductCategoriesApi(api_client)
    category_id = 'category_id_example' # str | category_id
    assign_products_request = keap_core_v2_client.AssignProductsRequest() # AssignProductsRequest | request

    try:
        # Assign Products to a Product Category
        api_instance.assign_products_to_category(category_id, assign_products_request)
    except Exception as e:
        print("Exception when calling ProductCategoriesApi->assign_products_to_category: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| category_id | 
 **assign_products_request** | [**AssignProductsRequest**](AssignProductsRequest.md)| request | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_image_file**
> create_image_file(category_id, file)

Create the product category image file

Creates the product category image file and uploads it to the specified product category

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
    api_instance = keap_core_v2_client.ProductCategoriesApi(api_client)
    category_id = 'category_id_example' # str | category_id
    file = None # bytearray | File to upload

    try:
        # Create the product category image file
        api_instance.create_image_file(category_id, file)
    except Exception as e:
        print("Exception when calling ProductCategoriesApi->create_image_file: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| category_id | 
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

# **create_product_category**
> ProductCategory create_product_category(create_product_category_request=create_product_category_request)

Create a Product Category

Creates a new Product Category

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_product_category_request import CreateProductCategoryRequest
from keap_core_v2_client.models.product_category import ProductCategory
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
    api_instance = keap_core_v2_client.ProductCategoriesApi(api_client)
    create_product_category_request = keap_core_v2_client.CreateProductCategoryRequest() # CreateProductCategoryRequest | productCategory (optional)

    try:
        # Create a Product Category
        api_response = api_instance.create_product_category(create_product_category_request=create_product_category_request)
        print("The response of ProductCategoriesApi->create_product_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductCategoriesApi->create_product_category: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_product_category_request** | [**CreateProductCategoryRequest**](CreateProductCategoryRequest.md)| productCategory | [optional] 

### Return type

[**ProductCategory**](ProductCategory.md)

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

# **delete_image_file**
> delete_image_file(category_id)

Delete the image from a product category

Deletes the image from the specified product category

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
    api_instance = keap_core_v2_client.ProductCategoriesApi(api_client)
    category_id = 'category_id_example' # str | category_id

    try:
        # Delete the image from a product category
        api_instance.delete_image_file(category_id)
    except Exception as e:
        print("Exception when calling ProductCategoriesApi->delete_image_file: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| category_id | 

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

# **delete_product_category**
> delete_product_category(category_id)

Delete a Product Category

Deletes the specified Product Category, its sub-categories, and removes products from it

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
    api_instance = keap_core_v2_client.ProductCategoriesApi(api_client)
    category_id = 'category_id_example' # str | category_id

    try:
        # Delete a Product Category
        api_instance.delete_product_category(category_id)
    except Exception as e:
        print("Exception when calling ProductCategoriesApi->delete_product_category: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| category_id | 

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

# **get_product_category**
> ProductCategory get_product_category(category_id)

Get a Product Category

Gets a single Product Category

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.product_category import ProductCategory
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
    api_instance = keap_core_v2_client.ProductCategoriesApi(api_client)
    category_id = 'category_id_example' # str | category_id

    try:
        # Get a Product Category
        api_response = api_instance.get_product_category(category_id)
        print("The response of ProductCategoriesApi->get_product_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductCategoriesApi->get_product_category: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| category_id | 

### Return type

[**ProductCategory**](ProductCategory.md)

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

# **list_product_categories**
> ListProductCategoriesResponse list_product_categories(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List all Product Categories

Retrieves a list of Product Categories

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_product_categories_response import ListProductCategoriesResponse
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
    api_instance = keap_core_v2_client.ProductCategoriesApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `product_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D29`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List all Product Categories
        api_response = api_instance.list_product_categories(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ProductCategoriesApi->list_product_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductCategoriesApi->list_product_categories: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListProductCategoriesResponse**](ListProductCategoriesResponse.md)

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

# **update_product_category**
> ProductCategory update_product_category(category_id, update_product_category_request, update_mask=update_mask)

Update a Product Category

Updates a single Product Category

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.product_category import ProductCategory
from keap_core_v2_client.models.update_product_category_request import UpdateProductCategoryRequest
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
    api_instance = keap_core_v2_client.ProductCategoriesApi(api_client)
    category_id = 'category_id_example' # str | category_id
    update_product_category_request = keap_core_v2_client.UpdateProductCategoryRequest() # UpdateProductCategoryRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Product Category
        api_response = api_instance.update_product_category(category_id, update_product_category_request, update_mask=update_mask)
        print("The response of ProductCategoriesApi->update_product_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductCategoriesApi->update_product_category: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| category_id | 
 **update_product_category_request** | [**UpdateProductCategoryRequest**](UpdateProductCategoryRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductCategory**](ProductCategory.md)

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

