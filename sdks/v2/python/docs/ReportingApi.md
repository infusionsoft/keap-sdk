# keap_core_v2_client.ReportingApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_reports**](ReportingApi.md#list_reports) | **GET** /rest/v2/reporting/reports | List Reports
[**retrieve_report**](ReportingApi.md#retrieve_report) | **GET** /rest/v2/reporting/reports/{report_id} | Retrieve Report
[**run_report**](ReportingApi.md#run_report) | **POST** /rest/v2/reporting/reports/{report_id}:run | Run a Report


# **list_reports**
> ListReportsResponse list_reports(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Reports

Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_reports_response import ListReportsResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.ReportingApi(api_client)
    filter = 'name%3D%3DMonthly%20Sales' # str | Filter to apply, allowed fields are: - (String) `name` - (DateTime) `since_created_time` - (DateTime) `until_created_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMonthly%20Sales` - `filter=since_created_time%3D%3D2024-01-01`  (optional)
    order_by = 'name asc' # str | Attribute and direction to order items. One of the following fields: - `name` - `created_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Reports
        api_response = api_instance.list_reports(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ReportingApi->list_reports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->list_reports: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMonthly%20Sales&#x60; - &#x60;filter&#x3D;since_created_time%3D%3D2024-01-01&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListReportsResponse**](ListReportsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_report**
> Report retrieve_report(report_id)

Retrieve Report

Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.report import Report
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.ReportingApi(api_client)
    report_id = '123' # str | The unique identifier of the report (Saved Search)

    try:
        # Retrieve Report
        api_response = api_instance.retrieve_report(report_id)
        print("The response of ReportingApi->retrieve_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->retrieve_report: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_id** | **str**| The unique identifier of the report (Saved Search) | 

### Return type

[**Report**](Report.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_report**
> ReportExecutionResult run_report(report_id, run_report_request)

Run a Report

Runs a report as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.report_execution_result import ReportExecutionResult
from keap_core_v2_client.models.run_report_request import RunReportRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.ReportingApi(api_client)
    report_id = '123' # str | The unique identifier of the report (Saved Search) to execute
    run_report_request = keap_core_v2_client.RunReportRequest() # RunReportRequest | 

    try:
        # Run a Report
        api_response = api_instance.run_report(report_id, run_report_request)
        print("The response of ReportingApi->run_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->run_report: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_id** | **str**| The unique identifier of the report (Saved Search) to execute | 
 **run_report_request** | [**RunReportRequest**](.md)|  | 

### Return type

[**ReportExecutionResult**](ReportExecutionResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

