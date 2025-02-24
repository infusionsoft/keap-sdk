# Keap\Core\V2\AutomationCategoryApi

All URIs are relative to https://api.keap.com/crm/rest, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createCategoryUsingPOST()**](AutomationCategoryApi.md#createCategoryUsingPOST) | **POST** /v2/automationCategory | Create automation category |
| [**deleteCategoriesUsingDELETE()**](AutomationCategoryApi.md#deleteCategoriesUsingDELETE) | **DELETE** /v2/automationCategory | Delete automation category |
| [**listCategoriesUsingGET()**](AutomationCategoryApi.md#listCategoriesUsingGET) | **GET** /v2/automationCategory | List automation categories |
| [**saveCategoryUsingPUT()**](AutomationCategoryApi.md#saveCategoryUsingPUT) | **PUT** /v2/automationCategory | Save automation category |


## `createCategoryUsingPOST()`

```php
createCategoryUsingPOST($create_automation_category_request): \Keap\Core\V2\Model\AutomationCategory
```

Create automation category

Creates a single automation category

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\AutomationCategoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_automation_category_request = new \Keap\Core\V2\Model\CreateAutomationCategoryRequest(); // \Keap\Core\V2\Model\CreateAutomationCategoryRequest | createAutomationCategoryRequest

try {
    $result = $apiInstance->createCategoryUsingPOST($create_automation_category_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AutomationCategoryApi->createCategoryUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_automation_category_request** | [**\Keap\Core\V2\Model\CreateAutomationCategoryRequest**](../Model/CreateAutomationCategoryRequest.md)| createAutomationCategoryRequest | |

### Return type

[**\Keap\Core\V2\Model\AutomationCategory**](../Model/AutomationCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteCategoriesUsingDELETE()`

```php
deleteCategoriesUsingDELETE($ids)
```

Delete automation category

Deletes one or more automation categories based on the request parameters

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\AutomationCategoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$ids = array(56); // int[] | ids

try {
    $apiInstance->deleteCategoriesUsingDELETE($ids);
} catch (Exception $e) {
    echo 'Exception when calling AutomationCategoryApi->deleteCategoriesUsingDELETE: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ids** | [**int[]**](../Model/int.md)| ids | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listCategoriesUsingGET()`

```php
listCategoriesUsingGET(): \Keap\Core\V2\Model\ListAutomationCategoryResponse
```

List automation categories

Retrieves a list of automation categories

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\AutomationCategoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listCategoriesUsingGET();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AutomationCategoryApi->listCategoriesUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Keap\Core\V2\Model\ListAutomationCategoryResponse**](../Model/ListAutomationCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `saveCategoryUsingPUT()`

```php
saveCategoryUsingPUT($save_automation_category_request): \Keap\Core\V2\Model\AutomationCategory
```

Save automation category

Creates or updates a single automation category

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\AutomationCategoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$save_automation_category_request = new \Keap\Core\V2\Model\SaveAutomationCategoryRequest(); // \Keap\Core\V2\Model\SaveAutomationCategoryRequest | saveAutomationCategoryRequest

try {
    $result = $apiInstance->saveCategoryUsingPUT($save_automation_category_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AutomationCategoryApi->saveCategoryUsingPUT: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **save_automation_category_request** | [**\Keap\Core\V2\Model\SaveAutomationCategoryRequest**](../Model/SaveAutomationCategoryRequest.md)| saveAutomationCategoryRequest | |

### Return type

[**\Keap\Core\V2\Model\AutomationCategory**](../Model/AutomationCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
