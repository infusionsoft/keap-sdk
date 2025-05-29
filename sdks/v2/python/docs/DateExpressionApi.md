# keap_core_v2_client.DateExpressionApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**query_date_expressions**](DateExpressionApi.md#query_date_expressions) | **GET** /v2/dateExpressions | 


# **query_date_expressions**
> DateExpressionResponse query_date_expressions(time_zone=time_zone, query=query)

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.date_expression_response import DateExpressionResponse
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
    api_instance = keap_core_v2_client.DateExpressionApi(api_client)
    time_zone = 'time_zone_example' # str |  (optional)
    query = 'query_example' # str |  (optional)

    try:
        api_response = api_instance.query_date_expressions(time_zone=time_zone, query=query)
        print("The response of DateExpressionApi->query_date_expressions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DateExpressionApi->query_date_expressions: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time_zone** | **str**|  | [optional] 
 **query** | **str**|  | [optional] 

### Return type

[**DateExpressionResponse**](DateExpressionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | queryDateExpressions 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

