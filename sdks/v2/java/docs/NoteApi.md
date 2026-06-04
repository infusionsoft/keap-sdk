# NoteApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createNote**](NoteApi.md#createNote) | **POST** /rest/v2/contacts/{contact_id}/notes | Create a Note |
| [**createNoteWithHttpInfo**](NoteApi.md#createNoteWithHttpInfo) | **POST** /rest/v2/contacts/{contact_id}/notes | Create a Note |
| [**createNoteCustomField**](NoteApi.md#createNoteCustomField) | **POST** /rest/v2/notes/model/customFields | Create a Custom Field |
| [**createNoteCustomFieldWithHttpInfo**](NoteApi.md#createNoteCustomFieldWithHttpInfo) | **POST** /rest/v2/notes/model/customFields | Create a Custom Field |
| [**deleteNote**](NoteApi.md#deleteNote) | **DELETE** /rest/v2/contacts/{contact_id}/notes/{note_id} | Delete a Note |
| [**deleteNoteWithHttpInfo**](NoteApi.md#deleteNoteWithHttpInfo) | **DELETE** /rest/v2/contacts/{contact_id}/notes/{note_id} | Delete a Note |
| [**deleteNotesCustomField**](NoteApi.md#deleteNotesCustomField) | **DELETE** /rest/v2/notes/model/customFields/{custom_field_id} | Delete a Note Custom Field |
| [**deleteNotesCustomFieldWithHttpInfo**](NoteApi.md#deleteNotesCustomFieldWithHttpInfo) | **DELETE** /rest/v2/notes/model/customFields/{custom_field_id} | Delete a Note Custom Field |
| [**getNote**](NoteApi.md#getNote) | **GET** /rest/v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note |
| [**getNoteWithHttpInfo**](NoteApi.md#getNoteWithHttpInfo) | **GET** /rest/v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note |
| [**listAllNotes**](NoteApi.md#listAllNotes) | **GET** /rest/v2/notes | List All Notes |
| [**listAllNotesWithHttpInfo**](NoteApi.md#listAllNotesWithHttpInfo) | **GET** /rest/v2/notes | List All Notes |
| [**listNoteTemplates**](NoteApi.md#listNoteTemplates) | **GET** /rest/v2/notes/templates | Retrieve Note Templates |
| [**listNoteTemplatesWithHttpInfo**](NoteApi.md#listNoteTemplatesWithHttpInfo) | **GET** /rest/v2/notes/templates | Retrieve Note Templates |
| [**listNotes**](NoteApi.md#listNotes) | **GET** /rest/v2/contacts/{contact_id}/notes | List Notes |
| [**listNotesWithHttpInfo**](NoteApi.md#listNotesWithHttpInfo) | **GET** /rest/v2/contacts/{contact_id}/notes | List Notes |
| [**retrieveNoteModel**](NoteApi.md#retrieveNoteModel) | **GET** /rest/v2/notes/model | Retrieve Note Model |
| [**retrieveNoteModelWithHttpInfo**](NoteApi.md#retrieveNoteModelWithHttpInfo) | **GET** /rest/v2/notes/model | Retrieve Note Model |
| [**updateNote**](NoteApi.md#updateNote) | **PATCH** /rest/v2/contacts/{contact_id}/notes/{note_id} | Update a Note |
| [**updateNoteWithHttpInfo**](NoteApi.md#updateNoteWithHttpInfo) | **PATCH** /rest/v2/contacts/{contact_id}/notes/{note_id} | Update a Note |
| [**updateNotesCustomField**](NoteApi.md#updateNotesCustomField) | **PATCH** /rest/v2/notes/model/customFields/{custom_field_id} | Update a Custom Field |
| [**updateNotesCustomFieldWithHttpInfo**](NoteApi.md#updateNotesCustomFieldWithHttpInfo) | **PATCH** /rest/v2/notes/model/customFields/{custom_field_id} | Update a Custom Field |



## createNote

> Note createNote(contactId, createNoteRequest, fields)

Create a Note

Creates a new Note.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | 
        CreateNoteRequest createNoteRequest = new CreateNoteRequest(); // CreateNoteRequest | 
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
        try {
            Note result = apiInstance.createNote(contactId, createNoteRequest, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#createNote");
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
| **contactId** | **String**|  | |
| **createNoteRequest** | [**CreateNoteRequest**](CreateNoteRequest.md)|  | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

[**Note**](Note.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createNoteWithHttpInfo

> ApiResponse<Note> createNote createNoteWithHttpInfo(contactId, createNoteRequest, fields)

Create a Note

Creates a new Note.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | 
        CreateNoteRequest createNoteRequest = new CreateNoteRequest(); // CreateNoteRequest | 
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
        try {
            ApiResponse<Note> response = apiInstance.createNoteWithHttpInfo(contactId, createNoteRequest, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#createNote");
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
| **contactId** | **String**|  | |
| **createNoteRequest** | [**CreateNoteRequest**](CreateNoteRequest.md)|  | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

ApiResponse<[**Note**](Note.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## createNoteCustomField

> CustomFieldMetaData createNoteCustomField(createCustomFieldRequest)

Create a Custom Field

Creates a custom field of the specified type and options to the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
        try {
            CustomFieldMetaData result = apiInstance.createNoteCustomField(createCustomFieldRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#createNoteCustomField");
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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createNoteCustomFieldWithHttpInfo

> ApiResponse<CustomFieldMetaData> createNoteCustomField createNoteCustomFieldWithHttpInfo(createCustomFieldRequest)

Create a Custom Field

Creates a custom field of the specified type and options to the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.createNoteCustomFieldWithHttpInfo(createCustomFieldRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#createNoteCustomField");
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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteNote

> void deleteNote(contactId, noteId)

Delete a Note

Deletes the specified Note

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | 
        String noteId = "noteId_example"; // String | 
        try {
            apiInstance.deleteNote(contactId, noteId);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#deleteNote");
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
| **contactId** | **String**|  | |
| **noteId** | **String**|  | |

### Return type


null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteNoteWithHttpInfo

> ApiResponse<Void> deleteNote deleteNoteWithHttpInfo(contactId, noteId)

Delete a Note

Deletes the specified Note

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | 
        String noteId = "noteId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteNoteWithHttpInfo(contactId, noteId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#deleteNote");
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
| **contactId** | **String**|  | |
| **noteId** | **String**|  | |

### Return type


ApiResponse<Void>

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteNotesCustomField

> void deleteNotesCustomField(customFieldId)

Delete a Note Custom Field

Deletes a Custom Field from the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        try {
            apiInstance.deleteNotesCustomField(customFieldId);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#deleteNotesCustomField");
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
| **customFieldId** | **String**|  | |

### Return type


null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteNotesCustomFieldWithHttpInfo

> ApiResponse<Void> deleteNotesCustomField deleteNotesCustomFieldWithHttpInfo(customFieldId)

Delete a Note Custom Field

Deletes a Custom Field from the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteNotesCustomFieldWithHttpInfo(customFieldId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#deleteNotesCustomField");
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
| **customFieldId** | **String**|  | |

### Return type


ApiResponse<Void>

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getNote

> GetNoteResponse getNote(contactId, noteId, fields)

Retrieve a Note

Retrieves the specified Note

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | 
        String noteId = "noteId_example"; // String | 
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
        try {
            GetNoteResponse result = apiInstance.getNote(contactId, noteId, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#getNote");
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
| **contactId** | **String**|  | |
| **noteId** | **String**|  | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

[**GetNoteResponse**](GetNoteResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getNoteWithHttpInfo

> ApiResponse<GetNoteResponse> getNote getNoteWithHttpInfo(contactId, noteId, fields)

Retrieve a Note

Retrieves the specified Note

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | 
        String noteId = "noteId_example"; // String | 
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
        try {
            ApiResponse<GetNoteResponse> response = apiInstance.getNoteWithHttpInfo(contactId, noteId, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#getNote");
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
| **contactId** | **String**|  | |
| **noteId** | **String**|  | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

ApiResponse<[**GetNoteResponse**](GetNoteResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listAllNotes

> ListNotesResponse listAllNotes(filter, pageToken, orderBy, pageSize, fields)

List All Notes

Retrieves a list of all notes

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply. Allowed fields and operators: - (String) `id` — supports `==`, `!=`, `>`, `<`, `>=`, `<=` - (String list) `ids` — comma-separated note ids, supports `==` only (e.g. `ids==1,2,3`) - (String) `title` — supports `==`. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. `title==Follow*`) - (String) `contact_id` - (String) `assigned_to_user_id` - (String) `since_time` — ISO-8601 date/time - (String) `until_time` — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: `==` → `%3D%3D`, `!=` → `!%3D`, `>` → `%3E`, `<` → `%3C`, `>=` → `%3E%3D`, `<=` → `%3C%3D`, `*` → `%2A`.  Multiple filters are combined with AND using `;`.  Examples: - `filter=contact_id%3D%3D1001` - `filter=id%3E5` - `filter=ids%3D%3D1,2,3` - `filter=title%3D%3DFollow%2A` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  Notes: - `id` and `ids` cannot be combined in the same request. - Wildcard `*` may only appear at the end of the value (prefix match).    Leading wildcards (`*foo`, `*foo*`) are rejected for performance reasons. 
        String pageToken = "pageToken_example"; // String | Page token
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
        try {
            ListNotesResponse result = apiInstance.listAllNotes(filter, pageToken, orderBy, pageSize, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#listAllNotes");
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
| **filter** | **String**| Filter to apply. Allowed fields and operators: - (String) &#x60;id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String list) &#x60;ids&#x60; — comma-separated note ids, supports &#x60;&#x3D;&#x3D;&#x60; only (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;title&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. &#x60;title&#x3D;&#x3D;Follow*&#x60;) - (String) &#x60;contact_id&#x60; - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;since_time&#x60; — ISO-8601 date/time - (String) &#x60;until_time&#x60; — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: &#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;!&#x3D;&#x60; → &#x60;!%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;, &#x60;&gt;&#x3D;&#x60; → &#x60;%3E%3D&#x60;, &#x60;&lt;&#x3D;&#x60; → &#x60;%3C%3D&#x60;, &#x60;*&#x60; → &#x60;%2A&#x60;.  Multiple filters are combined with AND using &#x60;;&#x60;.  Examples: - &#x60;filter&#x3D;contact_id%3D%3D1001&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  Notes: - &#x60;id&#x60; and &#x60;ids&#x60; cannot be combined in the same request. - Wildcard &#x60;*&#x60; may only appear at the end of the value (prefix match).    Leading wildcards (&#x60;*foo&#x60;, &#x60;*foo*&#x60;) are rejected for performance reasons.  | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

[**ListNotesResponse**](ListNotesResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listAllNotesWithHttpInfo

> ApiResponse<ListNotesResponse> listAllNotes listAllNotesWithHttpInfo(filter, pageToken, orderBy, pageSize, fields)

List All Notes

Retrieves a list of all notes

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply. Allowed fields and operators: - (String) `id` — supports `==`, `!=`, `>`, `<`, `>=`, `<=` - (String list) `ids` — comma-separated note ids, supports `==` only (e.g. `ids==1,2,3`) - (String) `title` — supports `==`. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. `title==Follow*`) - (String) `contact_id` - (String) `assigned_to_user_id` - (String) `since_time` — ISO-8601 date/time - (String) `until_time` — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: `==` → `%3D%3D`, `!=` → `!%3D`, `>` → `%3E`, `<` → `%3C`, `>=` → `%3E%3D`, `<=` → `%3C%3D`, `*` → `%2A`.  Multiple filters are combined with AND using `;`.  Examples: - `filter=contact_id%3D%3D1001` - `filter=id%3E5` - `filter=ids%3D%3D1,2,3` - `filter=title%3D%3DFollow%2A` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  Notes: - `id` and `ids` cannot be combined in the same request. - Wildcard `*` may only appear at the end of the value (prefix match).    Leading wildcards (`*foo`, `*foo*`) are rejected for performance reasons. 
        String pageToken = "pageToken_example"; // String | Page token
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
        try {
            ApiResponse<ListNotesResponse> response = apiInstance.listAllNotesWithHttpInfo(filter, pageToken, orderBy, pageSize, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#listAllNotes");
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
| **filter** | **String**| Filter to apply. Allowed fields and operators: - (String) &#x60;id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String list) &#x60;ids&#x60; — comma-separated note ids, supports &#x60;&#x3D;&#x3D;&#x60; only (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;title&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. &#x60;title&#x3D;&#x3D;Follow*&#x60;) - (String) &#x60;contact_id&#x60; - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;since_time&#x60; — ISO-8601 date/time - (String) &#x60;until_time&#x60; — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: &#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;!&#x3D;&#x60; → &#x60;!%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;, &#x60;&gt;&#x3D;&#x60; → &#x60;%3E%3D&#x60;, &#x60;&lt;&#x3D;&#x60; → &#x60;%3C%3D&#x60;, &#x60;*&#x60; → &#x60;%2A&#x60;.  Multiple filters are combined with AND using &#x60;;&#x60;.  Examples: - &#x60;filter&#x3D;contact_id%3D%3D1001&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  Notes: - &#x60;id&#x60; and &#x60;ids&#x60; cannot be combined in the same request. - Wildcard &#x60;*&#x60; may only appear at the end of the value (prefix match).    Leading wildcards (&#x60;*foo&#x60;, &#x60;*foo*&#x60;) are rejected for performance reasons.  | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

ApiResponse<[**ListNotesResponse**](ListNotesResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listNoteTemplates

> ListNoteTemplateResponse listNoteTemplates(filter, orderBy, pageSize, pageToken)

Retrieve Note Templates

Retrieves a list of Note Templates

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListNoteTemplateResponse result = apiInstance.listNoteTemplates(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#listNoteTemplates");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListNoteTemplateResponse**](ListNoteTemplateResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listNoteTemplatesWithHttpInfo

> ApiResponse<ListNoteTemplateResponse> listNoteTemplates listNoteTemplatesWithHttpInfo(filter, orderBy, pageSize, pageToken)

Retrieve Note Templates

Retrieves a list of Note Templates

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListNoteTemplateResponse> response = apiInstance.listNoteTemplatesWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#listNoteTemplates");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListNoteTemplateResponse**](ListNoteTemplateResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listNotes

> ListNotesResponse listNotes(contactId, filter, orderBy, pageSize, pageToken, fields)

List Notes

Retrieves a list of Notes for a given contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | 
        String filter = "filter_example"; // String | Filter to apply. Allowed fields and operators: - (String) `id` — supports `==`, `!=`, `>`, `<`, `>=`, `<=` - (String list) `ids` — comma-separated note ids, supports `==` only (e.g. `ids==1,2,3`) - (String) `title` — supports `==`. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. `title==Follow*`) - (String) `contact_id` - (String) `assigned_to_user_id` - (String) `since_time` — ISO-8601 date/time - (String) `until_time` — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: `==` → `%3D%3D`, `!=` → `!%3D`, `>` → `%3E`, `<` → `%3C`, `>=` → `%3E%3D`, `<=` → `%3C%3D`, `*` → `%2A`.  Multiple filters are combined with AND using `;`.  Examples: - `filter=contact_id%3D%3D1001` - `filter=id%3E5` - `filter=ids%3D%3D1,2,3` - `filter=title%3D%3DFollow%2A` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  Notes: - `id` and `ids` cannot be combined in the same request. - Wildcard `*` may only appear at the end of the value (prefix match).    Leading wildcards (`*foo`, `*foo*`) are rejected for performance reasons. 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
        try {
            ListNotesResponse result = apiInstance.listNotes(contactId, filter, orderBy, pageSize, pageToken, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#listNotes");
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
| **contactId** | **String**|  | |
| **filter** | **String**| Filter to apply. Allowed fields and operators: - (String) &#x60;id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String list) &#x60;ids&#x60; — comma-separated note ids, supports &#x60;&#x3D;&#x3D;&#x60; only (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;title&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. &#x60;title&#x3D;&#x3D;Follow*&#x60;) - (String) &#x60;contact_id&#x60; - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;since_time&#x60; — ISO-8601 date/time - (String) &#x60;until_time&#x60; — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: &#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;!&#x3D;&#x60; → &#x60;!%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;, &#x60;&gt;&#x3D;&#x60; → &#x60;%3E%3D&#x60;, &#x60;&lt;&#x3D;&#x60; → &#x60;%3C%3D&#x60;, &#x60;*&#x60; → &#x60;%2A&#x60;.  Multiple filters are combined with AND using &#x60;;&#x60;.  Examples: - &#x60;filter&#x3D;contact_id%3D%3D1001&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  Notes: - &#x60;id&#x60; and &#x60;ids&#x60; cannot be combined in the same request. - Wildcard &#x60;*&#x60; may only appear at the end of the value (prefix match).    Leading wildcards (&#x60;*foo&#x60;, &#x60;*foo*&#x60;) are rejected for performance reasons.  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

[**ListNotesResponse**](ListNotesResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listNotesWithHttpInfo

> ApiResponse<ListNotesResponse> listNotes listNotesWithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, fields)

List Notes

Retrieves a list of Notes for a given contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | 
        String filter = "filter_example"; // String | Filter to apply. Allowed fields and operators: - (String) `id` — supports `==`, `!=`, `>`, `<`, `>=`, `<=` - (String list) `ids` — comma-separated note ids, supports `==` only (e.g. `ids==1,2,3`) - (String) `title` — supports `==`. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. `title==Follow*`) - (String) `contact_id` - (String) `assigned_to_user_id` - (String) `since_time` — ISO-8601 date/time - (String) `until_time` — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: `==` → `%3D%3D`, `!=` → `!%3D`, `>` → `%3E`, `<` → `%3C`, `>=` → `%3E%3D`, `<=` → `%3C%3D`, `*` → `%2A`.  Multiple filters are combined with AND using `;`.  Examples: - `filter=contact_id%3D%3D1001` - `filter=id%3E5` - `filter=ids%3D%3D1,2,3` - `filter=title%3D%3DFollow%2A` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  Notes: - `id` and `ids` cannot be combined in the same request. - Wildcard `*` may only appear at the end of the value (prefix match).    Leading wildcards (`*foo`, `*foo*`) are rejected for performance reasons. 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
        try {
            ApiResponse<ListNotesResponse> response = apiInstance.listNotesWithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#listNotes");
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
| **contactId** | **String**|  | |
| **filter** | **String**| Filter to apply. Allowed fields and operators: - (String) &#x60;id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String list) &#x60;ids&#x60; — comma-separated note ids, supports &#x60;&#x3D;&#x3D;&#x60; only (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;title&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. &#x60;title&#x3D;&#x3D;Follow*&#x60;) - (String) &#x60;contact_id&#x60; - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;since_time&#x60; — ISO-8601 date/time - (String) &#x60;until_time&#x60; — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: &#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;!&#x3D;&#x60; → &#x60;!%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;, &#x60;&gt;&#x3D;&#x60; → &#x60;%3E%3D&#x60;, &#x60;&lt;&#x3D;&#x60; → &#x60;%3C%3D&#x60;, &#x60;*&#x60; → &#x60;%2A&#x60;.  Multiple filters are combined with AND using &#x60;;&#x60;.  Examples: - &#x60;filter&#x3D;contact_id%3D%3D1001&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  Notes: - &#x60;id&#x60; and &#x60;ids&#x60; cannot be combined in the same request. - Wildcard &#x60;*&#x60; may only appear at the end of the value (prefix match).    Leading wildcards (&#x60;*foo&#x60;, &#x60;*foo*&#x60;) are rejected for performance reasons.  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

ApiResponse<[**ListNotesResponse**](ListNotesResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## retrieveNoteModel

> ObjectModel retrieveNoteModel()

Retrieve Note Model

Gets the custom fields for the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        try {
            ObjectModel result = apiInstance.retrieveNoteModel();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#retrieveNoteModel");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## retrieveNoteModelWithHttpInfo

> ApiResponse<ObjectModel> retrieveNoteModel retrieveNoteModelWithHttpInfo()

Retrieve Note Model

Gets the custom fields for the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        try {
            ApiResponse<ObjectModel> response = apiInstance.retrieveNoteModelWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#retrieveNoteModel");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ObjectModel**](ObjectModel.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateNote

> UpdateNoteResponse updateNote(contactId, noteId, updateNoteRequest, updateMask, fields)

Update a Note

Updates a Note for a Contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | 
        String noteId = "noteId_example"; // String | 
        UpdateNoteRequest updateNoteRequest = new UpdateNoteRequest(); // UpdateNoteRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
        try {
            UpdateNoteResponse result = apiInstance.updateNote(contactId, noteId, updateNoteRequest, updateMask, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#updateNote");
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
| **contactId** | **String**|  | |
| **noteId** | **String**|  | |
| **updateNoteRequest** | [**UpdateNoteRequest**](UpdateNoteRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: contact_id, title, text, type, user_id, is_pinned, custom_fields] |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

[**UpdateNoteResponse**](UpdateNoteResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateNoteWithHttpInfo

> ApiResponse<UpdateNoteResponse> updateNote updateNoteWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, fields)

Update a Note

Updates a Note for a Contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String contactId = "contactId_example"; // String | 
        String noteId = "noteId_example"; // String | 
        UpdateNoteRequest updateNoteRequest = new UpdateNoteRequest(); // UpdateNoteRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
        try {
            ApiResponse<UpdateNoteResponse> response = apiInstance.updateNoteWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#updateNote");
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
| **contactId** | **String**|  | |
| **noteId** | **String**|  | |
| **updateNoteRequest** | [**UpdateNoteRequest**](UpdateNoteRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: contact_id, title, text, type, user_id, is_pinned, custom_fields] |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] |

### Return type

ApiResponse<[**UpdateNoteResponse**](UpdateNoteResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateNotesCustomField

> CustomFieldMetaData updateNotesCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CustomFieldMetaData result = apiInstance.updateNotesCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#updateNotesCustomField");
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
| **customFieldId** | **String**|  | |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateNotesCustomFieldWithHttpInfo

> ApiResponse<CustomFieldMetaData> updateNotesCustomField updateNotesCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.NoteApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        NoteApi apiInstance = new NoteApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.updateNotesCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling NoteApi#updateNotesCustomField");
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
| **customFieldId** | **String**|  | |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

