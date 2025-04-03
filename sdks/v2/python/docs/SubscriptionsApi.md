# keap_core_v2_client.SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_subscription_v2_using_post**](SubscriptionsApi.md#create_subscription_v2_using_post) | **POST** /v2/subscriptions | Create Subscription


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

