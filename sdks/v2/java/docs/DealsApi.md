# DealsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDeal**](DealsApi.md#createDeal) | **POST** /v2/deals | Creates a new deal. |
| [**createDealWithHttpInfo**](DealsApi.md#createDealWithHttpInfo) | **POST** /v2/deals | Creates a new deal. |
| [**createNote**](DealsApi.md#createNote) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal. |
| [**createNoteWithHttpInfo**](DealsApi.md#createNoteWithHttpInfo) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal. |
| [**createNotesBulk**](DealsApi.md#createNotesBulk) | **POST** /v2/deals/-/notes | Creates new notes in bulk. |
| [**createNotesBulkWithHttpInfo**](DealsApi.md#createNotesBulkWithHttpInfo) | **POST** /v2/deals/-/notes | Creates new notes in bulk. |
| [**deleteDeal**](DealsApi.md#deleteDeal) | **DELETE** /v2/deals/{id} | Deletes a specific deal by its ID. |
| [**deleteDealWithHttpInfo**](DealsApi.md#deleteDealWithHttpInfo) | **DELETE** /v2/deals/{id} | Deletes a specific deal by its ID. |
| [**deleteNote**](DealsApi.md#deleteNote) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID. |
| [**deleteNoteWithHttpInfo**](DealsApi.md#deleteNoteWithHttpInfo) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID. |
| [**getDeal**](DealsApi.md#getDeal) | **GET** /v2/deals/{deal_id} | Retrieves a specific deal by its ID. |
| [**getDealWithHttpInfo**](DealsApi.md#getDealWithHttpInfo) | **GET** /v2/deals/{deal_id} | Retrieves a specific deal by its ID. |
| [**getNote**](DealsApi.md#getNote) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID. |
| [**getNoteWithHttpInfo**](DealsApi.md#getNoteWithHttpInfo) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID. |
| [**listDeals**](DealsApi.md#listDeals) | **GET** /v2/deals/-/contacts/{contact_id} | Lists all deals associated with a specific contact. |
| [**listDealsWithHttpInfo**](DealsApi.md#listDealsWithHttpInfo) | **GET** /v2/deals/-/contacts/{contact_id} | Lists all deals associated with a specific contact. |
| [**listNotes**](DealsApi.md#listNotes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal. |
| [**listNotesWithHttpInfo**](DealsApi.md#listNotesWithHttpInfo) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal. |
| [**updateNote**](DealsApi.md#updateNote) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID. |
| [**updateNoteWithHttpInfo**](DealsApi.md#updateNoteWithHttpInfo) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID. |



## createDeal

> Deal createDeal(createDealRequest)

Creates a new deal.

Creates a new deal.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        CreateDealRequest createDealRequest = new CreateDealRequest(); // CreateDealRequest | the request body containing deal details
        try {
            Deal result = apiInstance.createDeal(createDealRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#createDeal");
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
| **createDealRequest** | [**CreateDealRequest**](CreateDealRequest.md)| the request body containing deal details | |

### Return type

[**Deal**](Deal.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | the created Deal |  -  |

## createDealWithHttpInfo

> ApiResponse<Deal> createDeal createDealWithHttpInfo(createDealRequest)

Creates a new deal.

Creates a new deal.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        CreateDealRequest createDealRequest = new CreateDealRequest(); // CreateDealRequest | the request body containing deal details
        try {
            ApiResponse<Deal> response = apiInstance.createDealWithHttpInfo(createDealRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#createDeal");
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
| **createDealRequest** | [**CreateDealRequest**](CreateDealRequest.md)| the request body containing deal details | |

### Return type

ApiResponse<[**Deal**](Deal.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | the created Deal |  -  |


## createNote

> DealNote createNote(id, createDealNoteRequest)

Creates a new note for a specific deal.

Creates a new note for a specific deal.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String id = "id_example"; // String | the deal ID to associate the new note with
        CreateDealNoteRequest createDealNoteRequest = new CreateDealNoteRequest(); // CreateDealNoteRequest | the request body containing note details
        try {
            DealNote result = apiInstance.createNote(id, createDealNoteRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#createNote");
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
| **id** | **String**| the deal ID to associate the new note with | |
| **createDealNoteRequest** | [**CreateDealNoteRequest**](CreateDealNoteRequest.md)| the request body containing note details | |

### Return type

[**DealNote**](DealNote.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | the created DealNote |  -  |

## createNoteWithHttpInfo

> ApiResponse<DealNote> createNote createNoteWithHttpInfo(id, createDealNoteRequest)

Creates a new note for a specific deal.

Creates a new note for a specific deal.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String id = "id_example"; // String | the deal ID to associate the new note with
        CreateDealNoteRequest createDealNoteRequest = new CreateDealNoteRequest(); // CreateDealNoteRequest | the request body containing note details
        try {
            ApiResponse<DealNote> response = apiInstance.createNoteWithHttpInfo(id, createDealNoteRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#createNote");
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
| **id** | **String**| the deal ID to associate the new note with | |
| **createDealNoteRequest** | [**CreateDealNoteRequest**](CreateDealNoteRequest.md)| the request body containing note details | |

### Return type

ApiResponse<[**DealNote**](DealNote.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | the created DealNote |  -  |


## createNotesBulk

> BulkCreateDealNotesResponse createNotesBulk(bulkCreateDealNotesRequest)

Creates new notes in bulk.

Creates new notes in bulk.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        BulkCreateDealNotesRequest bulkCreateDealNotesRequest = new BulkCreateDealNotesRequest(); // BulkCreateDealNotesRequest | the request body containing note details
        try {
            BulkCreateDealNotesResponse result = apiInstance.createNotesBulk(bulkCreateDealNotesRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#createNotesBulk");
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
| **bulkCreateDealNotesRequest** | [**BulkCreateDealNotesRequest**](BulkCreateDealNotesRequest.md)| the request body containing note details | |

### Return type

[**BulkCreateDealNotesResponse**](BulkCreateDealNotesResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | the created DealNote |  -  |

## createNotesBulkWithHttpInfo

> ApiResponse<BulkCreateDealNotesResponse> createNotesBulk createNotesBulkWithHttpInfo(bulkCreateDealNotesRequest)

Creates new notes in bulk.

Creates new notes in bulk.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        BulkCreateDealNotesRequest bulkCreateDealNotesRequest = new BulkCreateDealNotesRequest(); // BulkCreateDealNotesRequest | the request body containing note details
        try {
            ApiResponse<BulkCreateDealNotesResponse> response = apiInstance.createNotesBulkWithHttpInfo(bulkCreateDealNotesRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#createNotesBulk");
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
| **bulkCreateDealNotesRequest** | [**BulkCreateDealNotesRequest**](BulkCreateDealNotesRequest.md)| the request body containing note details | |

### Return type

ApiResponse<[**BulkCreateDealNotesResponse**](BulkCreateDealNotesResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | the created DealNote |  -  |


## deleteDeal

> void deleteDeal(id)

Deletes a specific deal by its ID.

Deletes a specific deal by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String id = "id_example"; // String | the ID of the deal to delete
        try {
            apiInstance.deleteDeal(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#deleteDeal");
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
| **id** | **String**| the ID of the deal to delete | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | deleteDeal 204 response |  -  |

## deleteDealWithHttpInfo

> ApiResponse<Void> deleteDeal deleteDealWithHttpInfo(id)

Deletes a specific deal by its ID.

Deletes a specific deal by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String id = "id_example"; // String | the ID of the deal to delete
        try {
            ApiResponse<Void> response = apiInstance.deleteDealWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#deleteDeal");
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
| **id** | **String**| the ID of the deal to delete | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | deleteDeal 204 response |  -  |


## deleteNote

> void deleteNote(noteId)

Deletes a specific deal note by its ID.

Deletes a specific deal note by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String noteId = "noteId_example"; // String | the ID of the note to delete
        try {
            apiInstance.deleteNote(noteId);
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#deleteNote");
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
| **noteId** | **String**| the ID of the note to delete | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | a HttpResponse indicating the result of the delete operation |  -  |

## deleteNoteWithHttpInfo

> ApiResponse<Void> deleteNote deleteNoteWithHttpInfo(noteId)

Deletes a specific deal note by its ID.

Deletes a specific deal note by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String noteId = "noteId_example"; // String | the ID of the note to delete
        try {
            ApiResponse<Void> response = apiInstance.deleteNoteWithHttpInfo(noteId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#deleteNote");
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
| **noteId** | **String**| the ID of the note to delete | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | a HttpResponse indicating the result of the delete operation |  -  |


## getDeal

> Deal getDeal(dealId)

Retrieves a specific deal by its ID.

Retrieves a specific deal by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String dealId = "dealId_example"; // String | the ID of the deal to retrieve
        try {
            Deal result = apiInstance.getDeal(dealId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#getDeal");
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
| **dealId** | **String**| the ID of the deal to retrieve | |

### Return type

[**Deal**](Deal.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the requested Deal |  -  |

## getDealWithHttpInfo

> ApiResponse<Deal> getDeal getDealWithHttpInfo(dealId)

Retrieves a specific deal by its ID.

Retrieves a specific deal by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String dealId = "dealId_example"; // String | the ID of the deal to retrieve
        try {
            ApiResponse<Deal> response = apiInstance.getDealWithHttpInfo(dealId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#getDeal");
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
| **dealId** | **String**| the ID of the deal to retrieve | |

### Return type

ApiResponse<[**Deal**](Deal.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the requested Deal |  -  |


## getNote

> DealNote getNote(noteId)

Retrieves a specific deal note by its ID.

Retrieves a specific deal note by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String noteId = "noteId_example"; // String | the ID of the note to retrieve
        try {
            DealNote result = apiInstance.getNote(noteId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#getNote");
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
| **noteId** | **String**| the ID of the note to retrieve | |

### Return type

[**DealNote**](DealNote.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the requested DealNote |  -  |

## getNoteWithHttpInfo

> ApiResponse<DealNote> getNote getNoteWithHttpInfo(noteId)

Retrieves a specific deal note by its ID.

Retrieves a specific deal note by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String noteId = "noteId_example"; // String | the ID of the note to retrieve
        try {
            ApiResponse<DealNote> response = apiInstance.getNoteWithHttpInfo(noteId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#getNote");
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
| **noteId** | **String**| the ID of the note to retrieve | |

### Return type

ApiResponse<[**DealNote**](DealNote.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the requested DealNote |  -  |


## listDeals

> DealListResponse listDeals(contactId, filter, pageToken, orderBy, pageSize)

Lists all deals associated with a specific contact.

Lists all deals associated with a specific contact.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String contactId = "contactId_example"; // String | the contact ID to list deals for
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            DealListResponse result = apiInstance.listDeals(contactId, filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#listDeals");
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
| **contactId** | **String**| the contact ID to list deals for | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

[**DealListResponse**](DealListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a list of deals wrapped in a DealListResponse |  -  |

## listDealsWithHttpInfo

> ApiResponse<DealListResponse> listDeals listDealsWithHttpInfo(contactId, filter, pageToken, orderBy, pageSize)

Lists all deals associated with a specific contact.

Lists all deals associated with a specific contact.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String contactId = "contactId_example"; // String | the contact ID to list deals for
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<DealListResponse> response = apiInstance.listDealsWithHttpInfo(contactId, filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#listDeals");
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
| **contactId** | **String**| the contact ID to list deals for | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

ApiResponse<[**DealListResponse**](DealListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a list of deals wrapped in a DealListResponse |  -  |


## listNotes

> DealNoteListResponse listNotes(id, filter, pageToken, orderBy, pageSize)

Lists all notes associated with a specific deal.

Lists all notes associated with a specific deal.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String id = "id_example"; // String | the deal ID to list notes for
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            DealNoteListResponse result = apiInstance.listNotes(id, filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#listNotes");
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
| **id** | **String**| the deal ID to list notes for | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

[**DealNoteListResponse**](DealNoteListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a list of deal notes wrapped in a DealNoteListResponse |  -  |

## listNotesWithHttpInfo

> ApiResponse<DealNoteListResponse> listNotes listNotesWithHttpInfo(id, filter, pageToken, orderBy, pageSize)

Lists all notes associated with a specific deal.

Lists all notes associated with a specific deal.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String id = "id_example"; // String | the deal ID to list notes for
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<DealNoteListResponse> response = apiInstance.listNotesWithHttpInfo(id, filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#listNotes");
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
| **id** | **String**| the deal ID to list notes for | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

ApiResponse<[**DealNoteListResponse**](DealNoteListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a list of deal notes wrapped in a DealNoteListResponse |  -  |


## updateNote

> DealNote updateNote(noteId, updateDealNoteRequest)

Updates a specific deal note by its ID.

Updates a specific deal note by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String noteId = "noteId_example"; // String | the ID of the note to update
        UpdateDealNoteRequest updateDealNoteRequest = new UpdateDealNoteRequest(); // UpdateDealNoteRequest | the request body containing updated note details
        try {
            DealNote result = apiInstance.updateNote(noteId, updateDealNoteRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#updateNote");
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
| **noteId** | **String**| the ID of the note to update | |
| **updateDealNoteRequest** | [**UpdateDealNoteRequest**](UpdateDealNoteRequest.md)| the request body containing updated note details | |

### Return type

[**DealNote**](DealNote.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated DealNote |  -  |

## updateNoteWithHttpInfo

> ApiResponse<DealNote> updateNote updateNoteWithHttpInfo(noteId, updateDealNoteRequest)

Updates a specific deal note by its ID.

Updates a specific deal note by its ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DealsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DealsApi apiInstance = new DealsApi(defaultClient);
        String noteId = "noteId_example"; // String | the ID of the note to update
        UpdateDealNoteRequest updateDealNoteRequest = new UpdateDealNoteRequest(); // UpdateDealNoteRequest | the request body containing updated note details
        try {
            ApiResponse<DealNote> response = apiInstance.updateNoteWithHttpInfo(noteId, updateDealNoteRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DealsApi#updateNote");
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
| **noteId** | **String**| the ID of the note to update | |
| **updateDealNoteRequest** | [**UpdateDealNoteRequest**](UpdateDealNoteRequest.md)| the request body containing updated note details | |

### Return type

ApiResponse<[**DealNote**](DealNote.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated DealNote |  -  |

