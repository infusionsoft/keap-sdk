# keap_core_v2_client.ReportingApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_reports_using_get**](ReportingApi.md#list_reports_using_get) | **GET** /v2/reporting/reports | List Reports
[**run_report_using_post**](ReportingApi.md#run_report_using_post) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report


# **list_reports_using_get**
> ListReportsResponse list_reports_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Reports

Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_reports_response import ListReportsResponse
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
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name` - (DateTime) `since_created_time` - (DateTime) `until_created_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=given_name%3D%3DMary` - `filter=company_id%3D%3D123` - `filter=company_id%3D%3D123%3Bfamily_name%3D%3DSmith`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name` - `created_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Reports
        api_response = api_instance.list_reports_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ReportingApi->list_reports_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->list_reports_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListReportsResponse**](ListReportsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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

