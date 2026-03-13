# KeapCoreServiceV2Sdk.ReportingApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listReports**](ReportingApi.md#listReports) | **GET** /rest/v2/reporting/reports | List Reports
[**retrieveReport**](ReportingApi.md#retrieveReport) | **GET** /rest/v2/reporting/reports/{report_id} | Retrieve Report
[**runReport**](ReportingApi.md#runReport) | **POST** /rest/v2/reporting/reports/{report_id}:run | Run a Report



## listReports

> ListReportsResponse listReports(opts)

List Reports

Retrieves a list of Reports as defined in the application (identified as Saved Search)&lt;br/&gt;&lt;span style&#x3D;&#39;color:red&#39;&gt;Deprecated as of v2&lt;/span&gt;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ReportingApi();
let opts = {
  'filter': "name%3D%3DMonthly%20Sales", // String | Filter to apply, allowed fields are: - (String) `name` - (DateTime) `since_created_time` - (DateTime) `until_created_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMonthly%20Sales` - `filter=since_created_time%3D%3D2024-01-01` 
  'orderBy': "name asc", // String | Attribute and direction to order items. One of the following fields: - `name` - `created_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listReports(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMonthly%20Sales&#x60; - &#x60;filter&#x3D;since_created_time%3D%3D2024-01-01&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListReportsResponse**](ListReportsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveReport

> Report retrieveReport(reportId)

Retrieve Report

Retrieves information about a Report as defined in the application (identified as Saved Search)&lt;br/&gt;&lt;span style&#x3D;&#39;color:red&#39;&gt;Deprecated as of v2&lt;/span&gt;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ReportingApi();
let reportId = "123"; // String | The unique identifier of the report (Saved Search)
apiInstance.retrieveReport(reportId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| The unique identifier of the report (Saved Search) | 

### Return type

[**Report**](Report.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## runReport

> ReportExecutionResult runReport(reportId, runReportRequest)

Run a Report

Runs a report as defined in the application (identified as Saved Search)&lt;br/&gt;&lt;span style&#x3D;&#39;color:red&#39;&gt;Deprecated as of v2&lt;/span&gt;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ReportingApi();
let reportId = "123"; // String | The unique identifier of the report (Saved Search) to execute
let runReportRequest = new KeapCoreServiceV2Sdk.RunReportRequest(); // RunReportRequest | 
apiInstance.runReport(reportId, runReportRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| The unique identifier of the report (Saved Search) to execute | 
 **runReportRequest** | [**RunReportRequest**](.md)|  | 

### Return type

[**ReportExecutionResult**](ReportExecutionResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

