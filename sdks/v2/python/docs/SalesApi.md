# keap_core_v2_client.SalesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**set_merchant_gateway_as_default_using_post**](SalesApi.md#set_merchant_gateway_as_default_using_post) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account


# **set_merchant_gateway_as_default_using_post**
> set_merchant_gateway_as_default_using_post(id)

Set default Merchant Account

Sets the specified Merchant Account as the default Merchant Account.

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
    api_instance = keap_core_v2_client.SalesApi(api_client)
    id = 'id_example' # str | id

    try:
        # Set default Merchant Account
        api_instance.set_merchant_gateway_as_default_using_post(id)
    except Exception as e:
        print("Exception when calling SalesApi->set_merchant_gateway_as_default_using_post: %s\n" % e)
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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

