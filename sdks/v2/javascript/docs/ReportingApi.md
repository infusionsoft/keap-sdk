# KeapCoreServiceV2Sdk.ReportingApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runReportUsingPOST**](ReportingApi.md#runReportUsingPOST) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report



## runReportUsingPOST

> ReportExecutionResult runReportUsingPOST(reportId, opts)

Run a Report

Runs a report as defined in the application (identified as Saved Search)&lt;br/&gt;&lt;span style&#x3D;&#39;color:red&#39;&gt;Deprecated as of v2&lt;/span&gt;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ReportingApi();
let reportId = "reportId_example"; // String | The unique identifier of the report (Saved Search) to execute
let opts = {
  'fields': "fields_example", // String | Comma-separated list of fields to return (or do not supply a value to return all)
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
};
apiInstance.runReportUsingPOST(reportId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| The unique identifier of the report (Saved Search) to execute | 
 **fields** | **String**| Comma-separated list of fields to return (or do not supply a value to return all) | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] [default to 1000]
 **pageToken** | **String**| Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. | [optional] 

### Return type

[**ReportExecutionResult**](ReportExecutionResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

