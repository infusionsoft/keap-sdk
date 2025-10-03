# keap_core_v2_client.SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_subscription**](SubscriptionsApi.md#cancel_subscription) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**create_subscription**](SubscriptionsApi.md#create_subscription) | **POST** /v2/subscriptions | Create Subscription
[**create_subscription_custom_field**](SubscriptionsApi.md#create_subscription_custom_field) | **POST** /v2/subscriptions/model/customFields | Create a Subscription Custom Field
[**delete_subscription_custom_field**](SubscriptionsApi.md#delete_subscription_custom_field) | **DELETE** /v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field
[**get_subscription**](SubscriptionsApi.md#get_subscription) | **GET** /v2/subscriptions/{subscription_id} | Retrieve a Subscription
[**list_subscriptions**](SubscriptionsApi.md#list_subscriptions) | **GET** /v2/subscriptions | List Subscriptions
[**retrieve_subscription_custom_field_model**](SubscriptionsApi.md#retrieve_subscription_custom_field_model) | **GET** /v2/subscriptions/model | Retrieve Subscription Custom Field Model
[**update_subscription**](SubscriptionsApi.md#update_subscription) | **PATCH** /v2/subscriptions/{subscription_id} | Update a Subscription
[**update_subscription_custom_field**](SubscriptionsApi.md#update_subscription_custom_field) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field


# **cancel_subscription**
> cancel_subscription(subscription_id, cancel_subscription_request)

Cancel Subscription

Cancels the specified subscription

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.cancel_subscription_request import CancelSubscriptionRequest
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
    api_instance = keap_core_v2_client.SubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | subscription_id
    cancel_subscription_request = keap_core_v2_client.CancelSubscriptionRequest() # CancelSubscriptionRequest | request

    try:
        # Cancel Subscription
        api_instance.cancel_subscription(subscription_id, cancel_subscription_request)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->cancel_subscription: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| subscription_id | 
 **cancel_subscription_request** | [**CancelSubscriptionRequest**](CancelSubscriptionRequest.md)| request | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_subscription**
> Subscription create_subscription(create_subscription_request)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_subscription_request import CreateSubscriptionRequest
from keap_core_v2_client.models.subscription import Subscription
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
    api_instance = keap_core_v2_client.SubscriptionsApi(api_client)
    create_subscription_request = keap_core_v2_client.CreateSubscriptionRequest() # CreateSubscriptionRequest | request

    try:
        # Create Subscription
        api_response = api_instance.create_subscription(create_subscription_request)
        print("The response of SubscriptionsApi->create_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->create_subscription: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_subscription_request** | [**CreateSubscriptionRequest**](CreateSubscriptionRequest.md)| request | 

### Return type

[**Subscription**](Subscription.md)

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

# **create_subscription_custom_field**
> CustomFieldMetaData create_subscription_custom_field(create_custom_field_request)

Create a Subscription Custom Field

Creates a custom field of the specified type and options to the Subscription object

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
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
    api_instance = keap_core_v2_client.SubscriptionsApi(api_client)
    create_custom_field_request = keap_core_v2_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create a Subscription Custom Field
        api_response = api_instance.create_subscription_custom_field(create_custom_field_request)
        print("The response of SubscriptionsApi->create_subscription_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->create_subscription_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

# **delete_subscription_custom_field**
> delete_subscription_custom_field(custom_field_id)

Delete a Subscription Custom Field

Deletes a custom field from the Subscription object

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
    api_instance = keap_core_v2_client.SubscriptionsApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id

    try:
        # Delete a Subscription Custom Field
        api_instance.delete_subscription_custom_field(custom_field_id)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->delete_subscription_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 

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

# **get_subscription**
> Subscription get_subscription(subscription_id)

Retrieve a Subscription

Retrieves a single subscription

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.subscription import Subscription
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
    api_instance = keap_core_v2_client.SubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | subscription_id

    try:
        # Retrieve a Subscription
        api_response = api_instance.get_subscription(subscription_id)
        print("The response of SubscriptionsApi->get_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->get_subscription: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| subscription_id | 

### Return type

[**Subscription**](Subscription.md)

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

# **list_subscriptions**
> ListSubscriptionsResponse list_subscriptions(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_subscriptions_response import ListSubscriptionsResponse
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
    api_instance = keap_core_v2_client.SubscriptionsApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `contact_id` - (String) `subscription_plan_id`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id` - `contact_id` - `subscription_plan_id`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Subscriptions
        api_response = api_instance.list_subscriptions(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of SubscriptionsApi->list_subscriptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->list_subscriptions: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListSubscriptionsResponse**](ListSubscriptionsResponse.md)

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

# **retrieve_subscription_custom_field_model**
> ObjectModel retrieve_subscription_custom_field_model()

Retrieve Subscription Custom Field Model

Get the custom fields for the Subscription object

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.object_model import ObjectModel
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
    api_instance = keap_core_v2_client.SubscriptionsApi(api_client)

    try:
        # Retrieve Subscription Custom Field Model
        api_response = api_instance.retrieve_subscription_custom_field_model()
        print("The response of SubscriptionsApi->retrieve_subscription_custom_field_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->retrieve_subscription_custom_field_model: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

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

# **update_subscription**
> Subscription update_subscription(subscription_id, update_subscription_request, update_mask=update_mask)

Update a Subscription

Updates a Subscription

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.subscription import Subscription
from keap_core_v2_client.models.update_subscription_request import UpdateSubscriptionRequest
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
    api_instance = keap_core_v2_client.SubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | subscription_id
    update_subscription_request = keap_core_v2_client.UpdateSubscriptionRequest() # UpdateSubscriptionRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Subscription
        api_response = api_instance.update_subscription(subscription_id, update_subscription_request, update_mask=update_mask)
        print("The response of SubscriptionsApi->update_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->update_subscription: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| subscription_id | 
 **update_subscription_request** | [**UpdateSubscriptionRequest**](UpdateSubscriptionRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**Subscription**](Subscription.md)

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

# **update_subscription_custom_field**
> CustomFieldMetaData update_subscription_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update a Subscription Custom Field

Updates a custom field of the specified type and options to the Subscription object

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_core_v2_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest
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
    api_instance = keap_core_v2_client.SubscriptionsApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    update_custom_field_meta_data_request = keap_core_v2_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Subscription Custom Field
        api_response = api_instance.update_subscription_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)
        print("The response of SubscriptionsApi->update_subscription_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->update_subscription_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 
 **update_custom_field_meta_data_request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

