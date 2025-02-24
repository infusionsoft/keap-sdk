# .ReportingApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runReportUsingPOST**](ReportingApi.md#runReportUsingPOST) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report


# **runReportUsingPOST**
> ReportExecutionResult runReportUsingPOST()

Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiRunReportUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiRunReportUsingPOSTRequest = {
    // The unique identifier of the report (Saved Search) to execute
  reportId: "report_id_example",
    // Comma-separated list of fields to return (or do not supply a value to return all) (optional)
  fields: "fields_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.runReportUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | [**string**] | The unique identifier of the report (Saved Search) to execute | defaults to undefined
 **fields** | [**string**] | Comma-separated list of fields to return (or do not supply a value to return all) | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to 1000
 **pageToken** | [**string**] | Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. | (optional) defaults to undefined


### Return type

**ReportExecutionResult**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


