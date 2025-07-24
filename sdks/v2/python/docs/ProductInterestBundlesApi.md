# keap_core_v2_client.ProductInterestBundlesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_product_interest**](ProductInterestBundlesApi.md#add_product_interest) | **POST** /v2/productInterestBundles/{id}/interests | Create a Product Interest in an existing Bundle
[**create_product_interest_bundle**](ProductInterestBundlesApi.md#create_product_interest_bundle) | **POST** /v2/productInterestBundles | Create a Product Interest Bundle
[**delete_product_interest_bundle**](ProductInterestBundlesApi.md#delete_product_interest_bundle) | **DELETE** /v2/productInterestBundles/{id} | Delete a Product Interest Bundle
[**get_product_interest_bundle**](ProductInterestBundlesApi.md#get_product_interest_bundle) | **GET** /v2/productInterestBundles/{id} | Get a Product Interest Bundle
[**list_product_interest_bundles**](ProductInterestBundlesApi.md#list_product_interest_bundles) | **GET** /v2/productInterestBundles | List Product Interest Bundles
[**remove_product_interest**](ProductInterestBundlesApi.md#remove_product_interest) | **DELETE** /v2/productInterestBundles/{id}/interests/{interest_id} | Delete a Product Interest from an existing Bundle
[**update_product_interest**](ProductInterestBundlesApi.md#update_product_interest) | **PATCH** /v2/productInterestBundles/{id}/interests/{interest_id} | Update a Product Interest in an existing Bundle
[**update_product_interest_bundle**](ProductInterestBundlesApi.md#update_product_interest_bundle) | **PATCH** /v2/productInterestBundles/{id} | Update a Product Interest Bundle


# **add_product_interest**
> ProductInterest add_product_interest(id, add_product_interest_request)

Create a Product Interest in an existing Bundle

Creates a new Product Interest in an existing Bundle.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.add_product_interest_request import AddProductInterestRequest
from keap_core_v2_client.models.product_interest import ProductInterest
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
    api_instance = keap_core_v2_client.ProductInterestBundlesApi(api_client)
    id = 'id_example' # str | id
    add_product_interest_request = keap_core_v2_client.AddProductInterestRequest() # AddProductInterestRequest | request

    try:
        # Create a Product Interest in an existing Bundle
        api_response = api_instance.add_product_interest(id, add_product_interest_request)
        print("The response of ProductInterestBundlesApi->add_product_interest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductInterestBundlesApi->add_product_interest: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **add_product_interest_request** | [**AddProductInterestRequest**](AddProductInterestRequest.md)| request | 

### Return type

[**ProductInterest**](ProductInterest.md)

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

# **create_product_interest_bundle**
> ProductInterestBundle create_product_interest_bundle(create_product_interest_bundle_request)

Create a Product Interest Bundle

Creates a new Product Interest Bundle.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_product_interest_bundle_request import CreateProductInterestBundleRequest
from keap_core_v2_client.models.product_interest_bundle import ProductInterestBundle
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
    api_instance = keap_core_v2_client.ProductInterestBundlesApi(api_client)
    create_product_interest_bundle_request = keap_core_v2_client.CreateProductInterestBundleRequest() # CreateProductInterestBundleRequest | createProductInterestBundleRequest

    try:
        # Create a Product Interest Bundle
        api_response = api_instance.create_product_interest_bundle(create_product_interest_bundle_request)
        print("The response of ProductInterestBundlesApi->create_product_interest_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductInterestBundlesApi->create_product_interest_bundle: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_product_interest_bundle_request** | [**CreateProductInterestBundleRequest**](CreateProductInterestBundleRequest.md)| createProductInterestBundleRequest | 

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)

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

# **delete_product_interest_bundle**
> delete_product_interest_bundle(id)

Delete a Product Interest Bundle

Deletes an existing Product Interest Bundle.

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
    api_instance = keap_core_v2_client.ProductInterestBundlesApi(api_client)
    id = 'id_example' # str | id

    try:
        # Delete a Product Interest Bundle
        api_instance.delete_product_interest_bundle(id)
    except Exception as e:
        print("Exception when calling ProductInterestBundlesApi->delete_product_interest_bundle: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 

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

# **get_product_interest_bundle**
> ProductInterestBundle get_product_interest_bundle(id)

Get a Product Interest Bundle

Gets a single Product Interest Bundle.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.product_interest_bundle import ProductInterestBundle
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
    api_instance = keap_core_v2_client.ProductInterestBundlesApi(api_client)
    id = 'id_example' # str | id

    try:
        # Get a Product Interest Bundle
        api_response = api_instance.get_product_interest_bundle(id)
        print("The response of ProductInterestBundlesApi->get_product_interest_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductInterestBundlesApi->get_product_interest_bundle: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)

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

# **list_product_interest_bundles**
> ListProductInterestBundleResponse list_product_interest_bundles(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Product Interest Bundles

Retrieves a list of Product Interest Bundles

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_product_interest_bundle_response import ListProductInterestBundleResponse
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
    api_instance = keap_core_v2_client.ProductInterestBundlesApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc`  (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Product Interest Bundles
        api_response = api_instance.list_product_interest_bundles(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ProductInterestBundlesApi->list_product_interest_bundles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductInterestBundlesApi->list_product_interest_bundles: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListProductInterestBundleResponse**](ListProductInterestBundleResponse.md)

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

# **remove_product_interest**
> remove_product_interest(id, interest_id)

Delete a Product Interest from an existing Bundle

Deletes an existing Product Interest from an existing Bundle.

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
    api_instance = keap_core_v2_client.ProductInterestBundlesApi(api_client)
    id = 'id_example' # str | id
    interest_id = 'interest_id_example' # str | interest_id

    try:
        # Delete a Product Interest from an existing Bundle
        api_instance.remove_product_interest(id, interest_id)
    except Exception as e:
        print("Exception when calling ProductInterestBundlesApi->remove_product_interest: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **interest_id** | **str**| interest_id | 

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

# **update_product_interest**
> ProductInterest update_product_interest(id, interest_id, update_product_interest_request, update_mask=update_mask)

Update a Product Interest in an existing Bundle

Updates an existing Product Interest in an existing Bundle.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.product_interest import ProductInterest
from keap_core_v2_client.models.update_product_interest_request import UpdateProductInterestRequest
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
    api_instance = keap_core_v2_client.ProductInterestBundlesApi(api_client)
    id = 'id_example' # str | id
    interest_id = 'interest_id_example' # str | interest_id
    update_product_interest_request = keap_core_v2_client.UpdateProductInterestRequest() # UpdateProductInterestRequest | updateProductInterestRequest
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Product Interest in an existing Bundle
        api_response = api_instance.update_product_interest(id, interest_id, update_product_interest_request, update_mask=update_mask)
        print("The response of ProductInterestBundlesApi->update_product_interest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductInterestBundlesApi->update_product_interest: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **interest_id** | **str**| interest_id | 
 **update_product_interest_request** | [**UpdateProductInterestRequest**](UpdateProductInterestRequest.md)| updateProductInterestRequest | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductInterest**](ProductInterest.md)

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

# **update_product_interest_bundle**
> ProductInterestBundle update_product_interest_bundle(id, update_product_interest_bundle_request, update_mask=update_mask)

Update a Product Interest Bundle

Updates an existing Product Interest Bundle.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.product_interest_bundle import ProductInterestBundle
from keap_core_v2_client.models.update_product_interest_bundle_request import UpdateProductInterestBundleRequest
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
    api_instance = keap_core_v2_client.ProductInterestBundlesApi(api_client)
    id = 'id_example' # str | id
    update_product_interest_bundle_request = keap_core_v2_client.UpdateProductInterestBundleRequest() # UpdateProductInterestBundleRequest | updateProductInterestBundleRequest
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Product Interest Bundle
        api_response = api_instance.update_product_interest_bundle(id, update_product_interest_bundle_request, update_mask=update_mask)
        print("The response of ProductInterestBundlesApi->update_product_interest_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductInterestBundlesApi->update_product_interest_bundle: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **update_product_interest_bundle_request** | [**UpdateProductInterestBundleRequest**](UpdateProductInterestBundleRequest.md)| updateProductInterestBundleRequest | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)

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

