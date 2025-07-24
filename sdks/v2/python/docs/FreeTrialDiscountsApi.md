# keap_core_v2_client.FreeTrialDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_free_trial_discount**](FreeTrialDiscountsApi.md#create_free_trial_discount) | **POST** /v2/discounts/freeTrials | Create a Subscription Free Trial Discount
[**delete_free_trial_discount**](FreeTrialDiscountsApi.md#delete_free_trial_discount) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Subscription Free Trial Discount
[**get_free_trial_discount**](FreeTrialDiscountsApi.md#get_free_trial_discount) | **GET** /v2/discounts/freeTrials/{discount_id} | Retrieve a Subscription Free Trial Discount
[**list_free_trial_discounts**](FreeTrialDiscountsApi.md#list_free_trial_discounts) | **GET** /v2/discounts/freeTrials | List all Subscription Free Trial Discounts
[**update_free_trial_discount**](FreeTrialDiscountsApi.md#update_free_trial_discount) | **PATCH** /v2/discounts/freeTrials/{discount_id} | Update a Subscription Free Trial Discount


# **create_free_trial_discount**
> FreeTrialDiscount create_free_trial_discount(create_free_trial_discount_request)

Create a Subscription Free Trial Discount

Creates a Subscription Free Trial Discount

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_free_trial_discount_request import CreateFreeTrialDiscountRequest
from keap_core_v2_client.models.free_trial_discount import FreeTrialDiscount
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
    api_instance = keap_core_v2_client.FreeTrialDiscountsApi(api_client)
    create_free_trial_discount_request = keap_core_v2_client.CreateFreeTrialDiscountRequest() # CreateFreeTrialDiscountRequest | createFreeTrialDiscountRequest

    try:
        # Create a Subscription Free Trial Discount
        api_response = api_instance.create_free_trial_discount(create_free_trial_discount_request)
        print("The response of FreeTrialDiscountsApi->create_free_trial_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FreeTrialDiscountsApi->create_free_trial_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_free_trial_discount_request** | [**CreateFreeTrialDiscountRequest**](CreateFreeTrialDiscountRequest.md)| createFreeTrialDiscountRequest | 

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

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

# **delete_free_trial_discount**
> delete_free_trial_discount(discount_id)

Delete a Subscription Free Trial Discount

Deletes a specified Subscription Free Trial Discount

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
    api_instance = keap_core_v2_client.FreeTrialDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Delete a Subscription Free Trial Discount
        api_instance.delete_free_trial_discount(discount_id)
    except Exception as e:
        print("Exception when calling FreeTrialDiscountsApi->delete_free_trial_discount: %s\n" % e)
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

# **get_free_trial_discount**
> FreeTrialDiscount get_free_trial_discount(discount_id)

Retrieve a Subscription Free Trial Discount

Retrieves a Subscription Free Trial Discount

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.free_trial_discount import FreeTrialDiscount
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
    api_instance = keap_core_v2_client.FreeTrialDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Retrieve a Subscription Free Trial Discount
        api_response = api_instance.get_free_trial_discount(discount_id)
        print("The response of FreeTrialDiscountsApi->get_free_trial_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FreeTrialDiscountsApi->get_free_trial_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

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

# **list_free_trial_discounts**
> ListFreeTrialDiscountsResponse list_free_trial_discounts(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List all Subscription Free Trial Discounts

Retrieves a list of Subscription Free Trial Discounts

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_free_trial_discounts_response import ListFreeTrialDiscountsResponse
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
    api_instance = keap_core_v2_client.FreeTrialDiscountsApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (Integer) `free_trial_days` - (Boolean) `hide_price` - (String) `subscription_plan_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=free_trial_days%3D%3D14` - `filter=hide_price%3D%3DTrue` - `filter=subscription_plan_id%3D%3DmySubscriptionPlanId` - `filter=free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `free_trial_days` - `hide_price` - `id` - `name` - `subscription_plan_id`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List all Subscription Free Trial Discounts
        api_response = api_instance.list_free_trial_discounts(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of FreeTrialDiscountsApi->list_free_trial_discounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FreeTrialDiscountsApi->list_free_trial_discounts: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListFreeTrialDiscountsResponse**](ListFreeTrialDiscountsResponse.md)

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

# **update_free_trial_discount**
> FreeTrialDiscount update_free_trial_discount(discount_id, update_free_trial_discount_request, update_mask=update_mask)

Update a Subscription Free Trial Discount

Updates a Subscription Free Trial Discount

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.free_trial_discount import FreeTrialDiscount
from keap_core_v2_client.models.update_free_trial_discount_request import UpdateFreeTrialDiscountRequest
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
    api_instance = keap_core_v2_client.FreeTrialDiscountsApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id
    update_free_trial_discount_request = keap_core_v2_client.UpdateFreeTrialDiscountRequest() # UpdateFreeTrialDiscountRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Subscription Free Trial Discount
        api_response = api_instance.update_free_trial_discount(discount_id, update_free_trial_discount_request, update_mask=update_mask)
        print("The response of FreeTrialDiscountsApi->update_free_trial_discount:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FreeTrialDiscountsApi->update_free_trial_discount: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 
 **update_free_trial_discount_request** | [**UpdateFreeTrialDiscountRequest**](UpdateFreeTrialDiscountRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

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

