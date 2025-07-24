# keap_core_v2_client.ShippingApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_shipping_methods**](ShippingApi.md#list_shipping_methods) | **GET** /v2/shipping | List Shipping methods


# **list_shipping_methods**
> ListRestShippingMethodsResponse list_shipping_methods()

List Shipping methods

Retrieves a list of Shipping methods

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_rest_shipping_methods_response import ListRestShippingMethodsResponse
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
    api_instance = keap_core_v2_client.ShippingApi(api_client)

    try:
        # List Shipping methods
        api_response = api_instance.list_shipping_methods()
        print("The response of ShippingApi->list_shipping_methods:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingApi->list_shipping_methods: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ListRestShippingMethodsResponse**](ListRestShippingMethodsResponse.md)

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

