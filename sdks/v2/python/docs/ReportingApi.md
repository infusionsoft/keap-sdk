# keap_core_v2_client.ReportingApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**run_report_using_post**](ReportingApi.md#run_report_using_post) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report


# **run_report_using_post**
> ReportExecutionResult run_report_using_post(report_id, fields=fields, order_by=order_by, page_size=page_size, page_token=page_token)

Run a Report

Runs a report as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.report_execution_result import ReportExecutionResult
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
    api_instance = keap_core_v2_client.ReportingApi(api_client)
    report_id = 'report_id_example' # str | The unique identifier of the report (Saved Search) to execute
    fields = 'fields_example' # str | Comma-separated list of fields to return (or do not supply a value to return all) (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 1000 # int | Total number of items to return per page (optional) (default to 1000)
    page_token = 'page_token_example' # str | Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. (optional)

    try:
        # Run a Report
        api_response = api_instance.run_report_using_post(report_id, fields=fields, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ReportingApi->run_report_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->run_report_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_id** | **str**| The unique identifier of the report (Saved Search) to execute | 
 **fields** | **str**| Comma-separated list of fields to return (or do not supply a value to return all) | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] [default to 1000]
 **page_token** | **str**| Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. | [optional] 

### Return type

[**ReportExecutionResult**](ReportExecutionResult.md)

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

