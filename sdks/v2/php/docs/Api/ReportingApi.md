# Keap\Core\V2\ReportingApi

All URIs are relative to https://api.keap.com/crm/rest, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**runReportUsingPOST()**](ReportingApi.md#runReportUsingPOST) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report |


## `runReportUsingPOST()`

```php
runReportUsingPOST($report_id, $fields, $order_by, $page_size, $page_token): \Keap\Core\V2\Model\ReportExecutionResult
```

Run a Report

Runs a report as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\ReportingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$report_id = 'report_id_example'; // string | The unique identifier of the report (Saved Search) to execute
$fields = 'fields_example'; // string | Comma-separated list of fields to return (or do not supply a value to return all)
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. `given_name desc`
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.

try {
    $result = $apiInstance->runReportUsingPOST($report_id, $fields, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportingApi->runReportUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **report_id** | **string**| The unique identifier of the report (Saved Search) to execute | |
| **fields** | **string**| Comma-separated list of fields to return (or do not supply a value to return all) | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] [default to 1000] |
| **page_token** | **string**| Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. | [optional] |

### Return type

[**\Keap\Core\V2\Model\ReportExecutionResult**](../Model/ReportExecutionResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
