# Keap.Core.V2.Api.ReportingApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**RunReportUsingPOST**](ReportingApi.md#runreportusingpost) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report |

<a id="runreportusingpost"></a>
# **RunReportUsingPOST**
> ReportExecutionResult RunReportUsingPOST (string reportId, string? fields = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

Run a Report

Runs a report as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RunReportUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ReportingApi(config);
            var reportId = "reportId_example";  // string | The unique identifier of the report (Saved Search) to execute
            var fields = "fields_example";  // string? | Comma-separated list of fields to return (or do not supply a value to return all) (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional)  (default to 1000)
            var pageToken = "pageToken_example";  // string? | Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. (optional) 

            try
            {
                // Run a Report
                ReportExecutionResult result = apiInstance.RunReportUsingPOST(reportId, fields, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReportingApi.RunReportUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RunReportUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Run a Report
    ApiResponse<ReportExecutionResult> response = apiInstance.RunReportUsingPOSTWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReportingApi.RunReportUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reportId** | **string** | The unique identifier of the report (Saved Search) to execute |  |
| **fields** | **string?** | Comma-separated list of fields to return (or do not supply a value to return all) | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional] [default to 1000] |
| **pageToken** | **string?** | Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. | [optional]  |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

