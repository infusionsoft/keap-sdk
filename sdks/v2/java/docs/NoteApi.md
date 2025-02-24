# NoteApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createNoteUsingPOST1**](NoteApi.md#createNoteUsingPOST1) | **POST** /v2/contacts/{contact_id}/notes | Create a Note |
| [**createNoteUsingPOST1WithHttpInfo**](NoteApi.md#createNoteUsingPOST1WithHttpInfo) | **POST** /v2/contacts/{contact_id}/notes | Create a Note |
| [**deleteNoteUsingDELETE1**](NoteApi.md#deleteNoteUsingDELETE1) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note |
| [**deleteNoteUsingDELETE1WithHttpInfo**](NoteApi.md#deleteNoteUsingDELETE1WithHttpInfo) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note |
| [**getNoteUsingGET1**](NoteApi.md#getNoteUsingGET1) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note |
| [**getNoteUsingGET1WithHttpInfo**](NoteApi.md#getNoteUsingGET1WithHttpInfo) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note |
| [**listNotesUsingGET1**](NoteApi.md#listNotesUsingGET1) | **GET** /v2/contacts/{contact_id}/notes | List Notes |
| [**listNotesUsingGET1WithHttpInfo**](NoteApi.md#listNotesUsingGET1WithHttpInfo) | **GET** /v2/contacts/{contact_id}/notes | List Notes |
| [**updateNoteUsingPATCH**](NoteApi.md#updateNoteUsingPATCH) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note |
| [**updateNoteUsingPATCHWithHttpInfo**](NoteApi.md#updateNoteUsingPATCHWithHttpInfo) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note |



## createNoteUsingPOST1

> Note createNoteUsingPOST1(contactId, createNoteRequest)

Create a Note

Creates a new Note.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        CreateNoteRequest createNoteRequest = new CreateNoteRequest(); // CreateNoteRequest | request
        try {
            Note result = apiInstance.createNoteUsingPOST1(contactId, createNoteRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#createNoteUsingPOST1");
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
| **contactId** | **String**| contact_id | |
| **createNoteRequest** | [**CreateNoteRequest**](CreateNoteRequest.md)| request | |

### Return type

[**Note**](Note.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

## createNoteUsingPOST1WithHttpInfo

> ApiResponse<Note> createNoteUsingPOST1 createNoteUsingPOST1WithHttpInfo(contactId, createNoteRequest)

Create a Note

Creates a new Note.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        CreateNoteRequest createNoteRequest = new CreateNoteRequest(); // CreateNoteRequest | request
        try {
            ApiResponse<Note> response = apiInstance.createNoteUsingPOST1WithHttpInfo(contactId, createNoteRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#createNoteUsingPOST1");
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
| **contactId** | **String**| contact_id | |
| **createNoteRequest** | [**CreateNoteRequest**](CreateNoteRequest.md)| request | |

### Return type

ApiResponse<[**Note**](Note.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |


## deleteNoteUsingDELETE1

> void deleteNoteUsingDELETE1(contactId, noteId)

Delete a Note

Deletes the specified Note

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        String noteId = "noteId_example"; // String | note_id
        try {
            apiInstance.deleteNoteUsingDELETE1(contactId, noteId);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#deleteNoteUsingDELETE1");
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
| **contactId** | **String**| contact_id | |
| **noteId** | **String**| note_id | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## deleteNoteUsingDELETE1WithHttpInfo

> ApiResponse<Void> deleteNoteUsingDELETE1 deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId)

Delete a Note

Deletes the specified Note

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        String noteId = "noteId_example"; // String | note_id
        try {
            ApiResponse<Void> response = apiInstance.deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#deleteNoteUsingDELETE1");
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
| **contactId** | **String**| contact_id | |
| **noteId** | **String**| note_id | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## getNoteUsingGET1

> GetNoteResponse getNoteUsingGET1(contactId, noteId)

Retrieve a Note

Retrieves the specified Note

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        String noteId = "noteId_example"; // String | note_id
        try {
            GetNoteResponse result = apiInstance.getNoteUsingGET1(contactId, noteId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#getNoteUsingGET1");
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
| **contactId** | **String**| contact_id | |
| **noteId** | **String**| note_id | |

### Return type

[**GetNoteResponse**](GetNoteResponse.md)


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

## getNoteUsingGET1WithHttpInfo

> ApiResponse<GetNoteResponse> getNoteUsingGET1 getNoteUsingGET1WithHttpInfo(contactId, noteId)

Retrieve a Note

Retrieves the specified Note

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        String noteId = "noteId_example"; // String | note_id
        try {
            ApiResponse<GetNoteResponse> response = apiInstance.getNoteUsingGET1WithHttpInfo(contactId, noteId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#getNoteUsingGET1");
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
| **contactId** | **String**| contact_id | |
| **noteId** | **String**| note_id | |

### Return type

ApiResponse<[**GetNoteResponse**](GetNoteResponse.md)>


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


## listNotesUsingGET1

> ListNotesResponse listNotesUsingGET1(contactId, filter, orderBy, pageSize, pageToken)

List Notes

Retrieves a list of Notes

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListNotesResponse result = apiInstance.listNotesUsingGET1(contactId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#listNotesUsingGET1");
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
| **contactId** | **String**| contact_id | |
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListNotesResponse**](ListNotesResponse.md)


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

## listNotesUsingGET1WithHttpInfo

> ApiResponse<ListNotesResponse> listNotesUsingGET1 listNotesUsingGET1WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken)

List Notes

Retrieves a list of Notes

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListNotesResponse> response = apiInstance.listNotesUsingGET1WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#listNotesUsingGET1");
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
| **contactId** | **String**| contact_id | |
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListNotesResponse**](ListNotesResponse.md)>


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


## updateNoteUsingPATCH

> UpdateNoteResponse updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, updateMask)

Update a Note

Updates a Note for a Contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        String noteId = "noteId_example"; // String | note_id
        UpdateNoteRequest updateNoteRequest = new UpdateNoteRequest(); // UpdateNoteRequest | updateNoteRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            UpdateNoteResponse result = apiInstance.updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#updateNoteUsingPATCH");
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
| **contactId** | **String**| contact_id | |
| **noteId** | **String**| note_id | |
| **updateNoteRequest** | [**UpdateNoteRequest**](UpdateNoteRequest.md)| updateNoteRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: contact_id, text, title, type, user_id] |

### Return type

[**UpdateNoteResponse**](UpdateNoteResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## updateNoteUsingPATCHWithHttpInfo

> ApiResponse<UpdateNoteResponse> updateNoteUsingPATCH updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask)

Update a Note

Updates a Note for a Contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        String noteId = "noteId_example"; // String | note_id
        UpdateNoteRequest updateNoteRequest = new UpdateNoteRequest(); // UpdateNoteRequest | updateNoteRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<UpdateNoteResponse> response = apiInstance.updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#updateNoteUsingPATCH");
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
| **contactId** | **String**| contact_id | |
| **noteId** | **String**| note_id | |
| **updateNoteRequest** | [**UpdateNoteRequest**](UpdateNoteRequest.md)| updateNoteRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: contact_id, text, title, type, user_id] |

### Return type

ApiResponse<[**UpdateNoteResponse**](UpdateNoteResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

