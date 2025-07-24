# .ReportingApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listReports**](ReportingApi.md#listReports) | **GET** /v2/reporting/reports | List Reports
[**retrieveReport**](ReportingApi.md#retrieveReport) | **GET** /v2/reporting/reports/{report_id} | Retrieve Report
[**runReport**](ReportingApi.md#runReport) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report


# **listReports**
> ListReportsResponse listReports()

Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiListReportsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiListReportsRequest = {
    // Filter to apply, allowed fields are: - (String) `name` - (DateTime) `since_created_time` - (DateTime) `until_created_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=given_name%3D%3DMary` - `filter=company_id%3D%3D123` - `filter=company_id%3D%3D123%3Bfamily_name%3D%3DSmith`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `created_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listReports(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListReportsResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveReport**
> Report retrieveReport()

Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiRetrieveReportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiRetrieveReportRequest = {
    // report_id
  reportId: "report_id_example",
};

const data = await apiInstance.retrieveReport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | [**string**] | report_id | defaults to undefined


### Return type

**Report**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **runReport**
> ReportExecutionResult runReport()

Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>

### Example


```typescript
import { createConfiguration, ReportingApi } from '';
import type { ReportingApiRunReportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReportingApi(configuration);

const request: ReportingApiRunReportRequest = {
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

const data = await apiInstance.runReport(request);
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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


