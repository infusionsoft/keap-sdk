# Keap.Core.V2.Api.ReportingApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ListReports**](ReportingApi.md#listreports) | **GET** /v2/reporting/reports | List Reports |
| [**RetrieveReport**](ReportingApi.md#retrievereport) | **GET** /v2/reporting/reports/{report_id} | Retrieve Report |
| [**RunReport**](ReportingApi.md#runreport) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report |

<a id="listreports"></a>
# **ListReports**
> ListReportsResponse ListReports (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Reports

Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListReportsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ReportingApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `name` - (DateTime) `since_created_time` - (DateTime) `until_created_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=given_name%3D%3DMary` - `filter=company_id%3D%3D123` - `filter=company_id%3D%3D123%3Bfamily_name%3D%3DSmith`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `name` - `created_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Reports
                ListReportsResponse result = apiInstance.ListReports(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReportingApi.ListReports: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListReportsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Reports
    ApiResponse<ListReportsResponse> response = apiInstance.ListReportsWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReportingApi.ListReportsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="retrievereport"></a>
# **RetrieveReport**
> Report RetrieveReport (string reportId)

Retrieve Report

Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RetrieveReportExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new ReportingApi(config);
            var reportId = "reportId_example";  // string | report_id

            try
            {
                // Retrieve Report
                Report result = apiInstance.RetrieveReport(reportId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReportingApi.RetrieveReport: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveReportWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Report
    ApiResponse<Report> response = apiInstance.RetrieveReportWithHttpInfo(reportId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReportingApi.RetrieveReportWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reportId** | **string** | report_id |  |

### Return type

[**Report**](Report.md)

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
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="runreport"></a>
# **RunReport**
> ReportExecutionResult RunReport (string reportId, string? fields = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

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
    public class RunReportExample
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
                ReportExecutionResult result = apiInstance.RunReport(reportId, fields, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReportingApi.RunReport: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RunReportWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Run a Report
    ApiResponse<ReportExecutionResult> response = apiInstance.RunReportWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReportingApi.RunReportWithHttpInfo: " + e.Message);
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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

