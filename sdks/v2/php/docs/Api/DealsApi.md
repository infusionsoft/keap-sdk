# Keap\Core\V2\DealsApi

All URIs are relative to https://api.keap.com/crm/rest, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createNote()**](DealsApi.md#createNote) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal. |
| [**deleteNote()**](DealsApi.md#deleteNote) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID. |
| [**getNote()**](DealsApi.md#getNote) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID. |
| [**listNotes()**](DealsApi.md#listNotes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal. |
| [**updateNote()**](DealsApi.md#updateNote) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID. |


## `createNote()`

```php
createNote($id, $create_deal_note_request): \Keap\Core\V2\Model\DealNote
```

Creates a new note for a specific deal.

Creates a new note for a specific deal.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\DealsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | the deal ID to associate the new note with
$create_deal_note_request = new \Keap\Core\V2\Model\CreateDealNoteRequest(); // \Keap\Core\V2\Model\CreateDealNoteRequest | the request body containing note details

try {
    $result = $apiInstance->createNote($id, $create_deal_note_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DealsApi->createNote: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| the deal ID to associate the new note with | |
| **create_deal_note_request** | [**\Keap\Core\V2\Model\CreateDealNoteRequest**](../Model/CreateDealNoteRequest.md)| the request body containing note details | |

### Return type

[**\Keap\Core\V2\Model\DealNote**](../Model/DealNote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteNote()`

```php
deleteNote($note_id)
```

Deletes a specific deal note by its ID.

Deletes a specific deal note by its ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\DealsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$note_id = 'note_id_example'; // string | the ID of the note to delete

try {
    $apiInstance->deleteNote($note_id);
} catch (Exception $e) {
    echo 'Exception when calling DealsApi->deleteNote: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **note_id** | **string**| the ID of the note to delete | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getNote()`

```php
getNote($note_id): \Keap\Core\V2\Model\DealNote
```

Retrieves a specific deal note by its ID.

Retrieves a specific deal note by its ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\DealsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$note_id = 'note_id_example'; // string | the ID of the note to retrieve

try {
    $result = $apiInstance->getNote($note_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DealsApi->getNote: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **note_id** | **string**| the ID of the note to retrieve | |

### Return type

[**\Keap\Core\V2\Model\DealNote**](../Model/DealNote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listNotes()`

```php
listNotes($id, $filter, $page_token, $order_by, $page_size): \Keap\Core\V2\Model\DealNoteListResponse
```

Lists all notes associated with a specific deal.

Lists all notes associated with a specific deal.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\DealsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | the deal ID to list notes for
$filter = 'filter_example'; // string
$page_token = 'page_token_example'; // string
$order_by = 'order_by_example'; // string
$page_size = 100; // int

try {
    $result = $apiInstance->listNotes($id, $filter, $page_token, $order_by, $page_size);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DealsApi->listNotes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| the deal ID to list notes for | |
| **filter** | **string**|  | [optional] |
| **page_token** | **string**|  | [optional] |
| **order_by** | **string**|  | [optional] |
| **page_size** | **int**|  | [optional] [default to 1000] |

### Return type

[**\Keap\Core\V2\Model\DealNoteListResponse**](../Model/DealNoteListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateNote()`

```php
updateNote($note_id, $update_deal_note_request): \Keap\Core\V2\Model\DealNote
```

Updates a specific deal note by its ID.

Updates a specific deal note by its ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\DealsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$note_id = 'note_id_example'; // string | the ID of the note to update
$update_deal_note_request = new \Keap\Core\V2\Model\UpdateDealNoteRequest(); // \Keap\Core\V2\Model\UpdateDealNoteRequest | the request body containing updated note details

try {
    $result = $apiInstance->updateNote($note_id, $update_deal_note_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DealsApi->updateNote: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **note_id** | **string**| the ID of the note to update | |
| **update_deal_note_request** | [**\Keap\Core\V2\Model\UpdateDealNoteRequest**](../Model/UpdateDealNoteRequest.md)| the request body containing updated note details | |

### Return type

[**\Keap\Core\V2\Model\DealNote**](../Model/DealNote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
