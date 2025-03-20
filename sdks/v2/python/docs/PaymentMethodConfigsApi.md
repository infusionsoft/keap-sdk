# keap_core_v2_client.PaymentMethodConfigsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_payment_method_config_using_post**](PaymentMethodConfigsApi.md#create_payment_method_config_using_post) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration


# **create_payment_method_config_using_post**
> PaymentMethodConfig create_payment_method_config_using_post(create_payment_method_config_request)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_payment_method_config_request import CreatePaymentMethodConfigRequest
from keap_core_v2_client.models.payment_method_config import PaymentMethodConfig
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
    api_instance = keap_core_v2_client.PaymentMethodConfigsApi(api_client)
    create_payment_method_config_request = keap_core_v2_client.CreatePaymentMethodConfigRequest() # CreatePaymentMethodConfigRequest | request

    try:
        # Create Payment Method Configuration
        api_response = api_instance.create_payment_method_config_using_post(create_payment_method_config_request)
        print("The response of PaymentMethodConfigsApi->create_payment_method_config_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodConfigsApi->create_payment_method_config_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_payment_method_config_request** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md)| request | 

### Return type

[**PaymentMethodConfig**](PaymentMethodConfig.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

