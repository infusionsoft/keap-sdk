# ReportingApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**runReportUsingPOST**](ReportingApi.md#runReportUsingPOST) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report |
| [**runReportUsingPOSTWithHttpInfo**](ReportingApi.md#runReportUsingPOSTWithHttpInfo) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report |



## runReportUsingPOST

> ReportExecutionResult runReportUsingPOST(reportId, fields, orderBy, pageSize, pageToken)

Run a Report

Runs a report as defined in the application (identified as Saved Search)&lt;br/&gt;&lt;span style&#x3D;&#39;color:red&#39;&gt;Deprecated as of v2&lt;/span&gt;

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ReportingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ReportingApi apiInstance = new ReportingApi(defaultClient);
        String reportId = "reportId_example"; // String | The unique identifier of the report (Saved Search) to execute
        String fields = "fields_example"; // String | Comma-separated list of fields to return (or do not supply a value to return all)
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 1000; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
        try {
            ReportExecutionResult result = apiInstance.runReportUsingPOST(reportId, fields, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportingApi#runReportUsingPOST");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **reportId** | **String**| The unique identifier of the report (Saved Search) to execute | |
| **fields** | **String**| Comma-separated list of fields to return (or do not supply a value to return all) | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] [default to 1000] |
| **pageToken** | **String**| Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. | [optional] |

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

## runReportUsingPOSTWithHttpInfo

> ApiResponse<ReportExecutionResult> runReportUsingPOST runReportUsingPOSTWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken)

Run a Report

Runs a report as defined in the application (identified as Saved Search)&lt;br/&gt;&lt;span style&#x3D;&#39;color:red&#39;&gt;Deprecated as of v2&lt;/span&gt;

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ReportingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ReportingApi apiInstance = new ReportingApi(defaultClient);
        String reportId = "reportId_example"; // String | The unique identifier of the report (Saved Search) to execute
        String fields = "fields_example"; // String | Comma-separated list of fields to return (or do not supply a value to return all)
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 1000; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
        try {
            ApiResponse<ReportExecutionResult> response = apiInstance.runReportUsingPOSTWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportingApi#runReportUsingPOST");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **reportId** | **String**| The unique identifier of the report (Saved Search) to execute | |
| **fields** | **String**| Comma-separated list of fields to return (or do not supply a value to return all) | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] [default to 1000] |
| **pageToken** | **String**| Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. | [optional] |

### Return type

ApiResponse<[**ReportExecutionResult**](ReportExecutionResult.md)>


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

