# keap_core_v2_client.CategoryDiscountsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_category_discount**](CategoryDiscountsApi.md#create_category_discount) | **POST** /rest/v2/discounts/productCategories | Create a Category Discount
[**delete_category_discount**](CategoryDiscountsApi.md#delete_category_discount) | **DELETE** /rest/v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**get_category_discount**](CategoryDiscountsApi.md#get_category_discount) | **GET** /rest/v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount
[**list_category_discounts**](CategoryDiscountsApi.md#list_category_discounts) | **GET** /rest/v2/discounts/productCategories | List Category Discounts
[**update_category_discount**](CategoryDiscountsApi.md#update_category_discount) | **PATCH** /rest/v2/discounts/productCategories/{discount_id} | Update a Category Discount


# **create_category_discount**
> CategoryDiscount create_category_discount(create_category_discount_request)

Create a Category Discount

Creates a Category Discount

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.category_discount import CategoryDiscount
from keap_core_v2_client.models.create_category_discount_request import CreateCategoryDiscountRequest
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
    api_instance = keap_core_v2_client.CategoryDiscountsApi(api_client)
    create_category_discount_request = keap_core_v2_client.CreateCategoryDiscountRequest() # CreateCategoryDiscountRequest | 

    try:
        # Create a Category Discount
        api_response = api_instance.create_category_discount(create_category_discount_request)
        print("The response of CategoryDiscountsApi->create_category_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryDiscountsApi->create_category_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_category_discount_request** | [**CreateCategoryDiscountRequest**](CreateCategoryDiscountRequest.md)|  | 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

# **delete_category_discount**
> delete_category_discount(discount_id)

Delete a Category Discount

Deletes a specified Category Discount

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
    api_instance = keap_core_v2_client.CategoryDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | 

    try:
        # Delete a Category Discount
        api_instance.delete_category_discount(discount_id)
    except Exception as e:
        print("Exception when calling CategoryDiscountsApi->delete_category_discount: %s\n" % e)
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

# **get_category_discount**
> CategoryDiscount get_category_discount(discount_id)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.category_discount import CategoryDiscount
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
    api_instance = keap_core_v2_client.CategoryDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | 

    try:
        # Retrieve a Category Discount
        api_response = api_instance.get_category_discount(discount_id)
        print("The response of CategoryDiscountsApi->get_category_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryDiscountsApi->get_category_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**|  | 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

# **list_category_discounts**
> ListCategoryDiscountsResponse list_category_discounts(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Category Discounts

Retrieves a list of Category Discounts

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_category_discounts_response import ListCategoryDiscountsResponse
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
    api_instance = keap_core_v2_client.CategoryDiscountsApi(api_client)
    filter = 'filter_example' # str | Filter to apply, the allowed field is: - (String) `id` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (List[String]) `ids` - (String) `name` - Wildcard matching allowed - (String) `description` - Wildcard matching allowed - (String) `product_category_id`  You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4` - `filter=ids%3D%3D1,10,4,24` - `filter=id%3E5`  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `description==foo*` finds anything in `description` that begins with `foo`   (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id` - `name`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Category Discounts
        api_response = api_instance.list_category_discounts(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of CategoryDiscountsApi->list_category_discounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryDiscountsApi->list_category_discounts: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, the allowed field is: - (String) &#x60;id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (List[String]) &#x60;ids&#x60; - (String) &#x60;name&#x60; - Wildcard matching allowed - (String) &#x60;description&#x60; - Wildcard matching allowed - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; - &#x60;filter&#x3D;ids%3D%3D1,10,4,24&#x60; - &#x60;filter&#x3D;id%3E5&#x60;  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;description&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;description&#x60; that begins with &#x60;foo&#x60;   | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListCategoryDiscountsResponse**](ListCategoryDiscountsResponse.md)

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

# **update_category_discount**
> CategoryDiscount update_category_discount(discount_id, update_category_discount_request, update_mask=update_mask)

Update a Category Discount

Updates a Category Discount

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.category_discount import CategoryDiscount
from keap_core_v2_client.models.update_category_discount_request import UpdateCategoryDiscountRequest
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
    api_instance = keap_core_v2_client.CategoryDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | 
    update_category_discount_request = keap_core_v2_client.UpdateCategoryDiscountRequest() # UpdateCategoryDiscountRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Category Discount
        api_response = api_instance.update_category_discount(discount_id, update_category_discount_request, update_mask=update_mask)
        print("The response of CategoryDiscountsApi->update_category_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryDiscountsApi->update_category_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**|  | 
 **update_category_discount_request** | [**UpdateCategoryDiscountRequest**](UpdateCategoryDiscountRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

