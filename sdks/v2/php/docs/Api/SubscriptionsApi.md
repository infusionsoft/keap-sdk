# Keap\Core\V2\SubscriptionsApi

All URIs are relative to https://api.keap.com/crm/rest, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createSubscriptionV2UsingPOST()**](SubscriptionsApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription |


## `createSubscriptionV2UsingPOST()`

```php
createSubscriptionV2UsingPOST($create_subscription_v2): \Keap\Core\V2\Model\RestSubscriptionV2
```

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_subscription_v2 = new \Keap\Core\V2\Model\CreateSubscriptionV2(); // \Keap\Core\V2\Model\CreateSubscriptionV2 | createSubscriptionV2

try {
    $result = $apiInstance->createSubscriptionV2UsingPOST($create_subscription_v2);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->createSubscriptionV2UsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_subscription_v2** | [**\Keap\Core\V2\Model\CreateSubscriptionV2**](../Model/CreateSubscriptionV2.md)| createSubscriptionV2 | |

### Return type

[**\Keap\Core\V2\Model\RestSubscriptionV2**](../Model/RestSubscriptionV2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
