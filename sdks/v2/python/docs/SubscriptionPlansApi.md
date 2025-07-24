# keap_core_v2_client.SubscriptionPlansApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_subscription_plans**](SubscriptionPlansApi.md#create_subscription_plans) | **POST** /v2/products/{product_id}/subscriptions | Create Subscription Plan
[**delete_subscription_plan**](SubscriptionPlansApi.md#delete_subscription_plan) | **DELETE** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Delete Subscription Plan
[**fetch_subscription_plan**](SubscriptionPlansApi.md#fetch_subscription_plan) | **GET** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Get Subscription Plan
[**list_subscription_plans**](SubscriptionPlansApi.md#list_subscription_plans) | **GET** /v2/products/{product_id}/subscriptions | List Subscription Plans
[**update_subscription_plan**](SubscriptionPlansApi.md#update_subscription_plan) | **PATCH** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Update Subscription Plan


# **create_subscription_plans**
> SubscriptionPlan create_subscription_plans(product_id, create_subscription_plan_request)

Create Subscription Plan

Creates a Subscription Plan

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_subscription_plan_request import CreateSubscriptionPlanRequest
from keap_core_v2_client.models.subscription_plan import SubscriptionPlan
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
    api_instance = keap_core_v2_client.SubscriptionPlansApi(api_client)
    product_id = 'product_id_example' # str | product_id
    create_subscription_plan_request = keap_core_v2_client.CreateSubscriptionPlanRequest() # CreateSubscriptionPlanRequest | createSubscriptionPlanRequest

    try:
        # Create Subscription Plan
        api_response = api_instance.create_subscription_plans(product_id, create_subscription_plan_request)
        print("The response of SubscriptionPlansApi->create_subscription_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionPlansApi->create_subscription_plans: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **create_subscription_plan_request** | [**CreateSubscriptionPlanRequest**](CreateSubscriptionPlanRequest.md)| createSubscriptionPlanRequest | 

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)

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

# **delete_subscription_plan**
> delete_subscription_plan(product_id, subscription_plan_id)

Delete Subscription Plan

Deletes a Subscription Plan

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
    api_instance = keap_core_v2_client.SubscriptionPlansApi(api_client)
    product_id = 'product_id_example' # str | product_id
    subscription_plan_id = 'subscription_plan_id_example' # str | subscription_plan_id

    try:
        # Delete Subscription Plan
        api_instance.delete_subscription_plan(product_id, subscription_plan_id)
    except Exception as e:
        print("Exception when calling SubscriptionPlansApi->delete_subscription_plan: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **subscription_plan_id** | **str**| subscription_plan_id | 

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

# **fetch_subscription_plan**
> SubscriptionPlan fetch_subscription_plan(product_id, subscription_plan_id)

Get Subscription Plan

Retrieves a Subscription Plan

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.subscription_plan import SubscriptionPlan
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
    api_instance = keap_core_v2_client.SubscriptionPlansApi(api_client)
    product_id = 'product_id_example' # str | product_id
    subscription_plan_id = 'subscription_plan_id_example' # str | subscription_plan_id

    try:
        # Get Subscription Plan
        api_response = api_instance.fetch_subscription_plan(product_id, subscription_plan_id)
        print("The response of SubscriptionPlansApi->fetch_subscription_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionPlansApi->fetch_subscription_plan: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **subscription_plan_id** | **str**| subscription_plan_id | 

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)

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

# **list_subscription_plans**
> ListSubscriptionPlansResponse list_subscription_plans(product_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_subscription_plans_response import ListSubscriptionPlansResponse
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
    api_instance = keap_core_v2_client.SubscriptionPlansApi(api_client)
    product_id = '\'-\' can be used for a wildcard (/v2/products/-/subscriptions' # str | product_id
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (Boolean) `active`: true or false - (BillingCycle) `cycle_type`: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=active%3D%3Dtrue` - `filter=cycle_type%3D%3DDAILY` - `filter=active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id` - `product_id`  One of the following directions: - `asc` - `desc`  (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Subscription Plans
        api_response = api_instance.list_subscription_plans(product_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of SubscriptionPlansApi->list_subscription_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionPlansApi->list_subscription_plans: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **filter** | **str**| Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)

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

# **update_subscription_plan**
> SubscriptionPlan update_subscription_plan(product_id, subscription_plan_id, update_subscription_plan_request, update_mask=update_mask)

Update Subscription Plan

Updates a Subscription Plan

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.subscription_plan import SubscriptionPlan
from keap_core_v2_client.models.update_subscription_plan_request import UpdateSubscriptionPlanRequest
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
    api_instance = keap_core_v2_client.SubscriptionPlansApi(api_client)
    product_id = 'product_id_example' # str | product_id
    subscription_plan_id = 'subscription_plan_id_example' # str | subscription_plan_id
    update_subscription_plan_request = keap_core_v2_client.UpdateSubscriptionPlanRequest() # UpdateSubscriptionPlanRequest | updateSubscriptionPlanRequest
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update Subscription Plan
        api_response = api_instance.update_subscription_plan(product_id, subscription_plan_id, update_subscription_plan_request, update_mask=update_mask)
        print("The response of SubscriptionPlansApi->update_subscription_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionPlansApi->update_subscription_plan: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **subscription_plan_id** | **str**| subscription_plan_id | 
 **update_subscription_plan_request** | [**UpdateSubscriptionPlanRequest**](UpdateSubscriptionPlanRequest.md)| updateSubscriptionPlanRequest | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)

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

