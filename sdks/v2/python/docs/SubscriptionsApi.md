# keap_core_v2_client.SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_subscription_custom_field_using_post**](SubscriptionsApi.md#create_subscription_custom_field_using_post) | **POST** /v2/subscriptions/model/customFields | Create a Subscription Custom Field
[**create_subscription_v2_using_post**](SubscriptionsApi.md#create_subscription_v2_using_post) | **POST** /v2/subscriptions | Create Subscription
[**delete_subscription_custom_field_using_delete**](SubscriptionsApi.md#delete_subscription_custom_field_using_delete) | **DELETE** /v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field
[**retrieve_subscription_custom_field_model_using_get**](SubscriptionsApi.md#retrieve_subscription_custom_field_model_using_get) | **GET** /v2/subscriptions/model | Retrieve Subscription Custom Field Model
[**update_subscription_custom_field_using_patch**](SubscriptionsApi.md#update_subscription_custom_field_using_patch) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field


# **create_subscription_custom_field_using_post**
> CustomFieldMetaData create_subscription_custom_field_using_post(create_custom_field_request)

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
        api_response = api_instance.create_subscription_custom_field_using_post(create_custom_field_request)
        print("The response of SubscriptionsApi->create_subscription_custom_field_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->create_subscription_custom_field_using_post: %s\n" % e)
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

# **create_subscription_v2_using_post**
> RestSubscriptionV2 create_subscription_v2_using_post(create_subscription_v2)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_subscription_v2 import CreateSubscriptionV2
from keap_core_v2_client.models.rest_subscription_v2 import RestSubscriptionV2
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
    create_subscription_v2 = keap_core_v2_client.CreateSubscriptionV2() # CreateSubscriptionV2 | createSubscriptionV2

    try:
        # Create Subscription
        api_response = api_instance.create_subscription_v2_using_post(create_subscription_v2)
        print("The response of SubscriptionsApi->create_subscription_v2_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->create_subscription_v2_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_subscription_v2** | [**CreateSubscriptionV2**](CreateSubscriptionV2.md)| createSubscriptionV2 | 

### Return type

[**RestSubscriptionV2**](RestSubscriptionV2.md)

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

# **delete_subscription_custom_field_using_delete**
> delete_subscription_custom_field_using_delete(custom_field_id)

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
        api_instance.delete_subscription_custom_field_using_delete(custom_field_id)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->delete_subscription_custom_field_using_delete: %s\n" % e)
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

# **retrieve_subscription_custom_field_model_using_get**
> ObjectModel retrieve_subscription_custom_field_model_using_get()

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
        api_response = api_instance.retrieve_subscription_custom_field_model_using_get()
        print("The response of SubscriptionsApi->retrieve_subscription_custom_field_model_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->retrieve_subscription_custom_field_model_using_get: %s\n" % e)
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

# **update_subscription_custom_field_using_patch**
> CustomFieldMetaData update_subscription_custom_field_using_patch(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

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
        api_response = api_instance.update_subscription_custom_field_using_patch(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)
        print("The response of SubscriptionsApi->update_subscription_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->update_subscription_custom_field_using_patch: %s\n" % e)
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

