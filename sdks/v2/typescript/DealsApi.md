# .DealsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](DealsApi.md#_delete) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID.
[**createNote**](DealsApi.md#createNote) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal.
[**getNote**](DealsApi.md#getNote) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID.
[**listNotes**](DealsApi.md#listNotes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal.
[**update**](DealsApi.md#update) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID.


# **_delete**
> void _delete()

Deletes a specific deal note by its ID.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiDeleteRequest = {
    // the ID of the note to delete
  noteId: "note_id_example",
};

const data = await apiInstance._delete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | [**string**] | the ID of the note to delete | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | a HttpResponse indicating the result of the delete operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNote**
> DealNote createNote(createDealNoteRequest)

Creates a new note for a specific deal.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiCreateNoteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiCreateNoteRequest = {
    // the deal ID to associate the new note with
  id: "id_example",
    // the request body containing note details
  createDealNoteRequest: {
    body: "body_example",
    createdBy: "createdBy_example",
  },
};

const data = await apiInstance.createNote(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDealNoteRequest** | **CreateDealNoteRequest**| the request body containing note details |
 **id** | [**string**] | the deal ID to associate the new note with | defaults to undefined


### Return type

**DealNote**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the created DealNote |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNote**
> DealNote getNote()

Retrieves a specific deal note by its ID.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiGetNoteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiGetNoteRequest = {
    // the ID of the note to retrieve
  noteId: "note_id_example",
};

const data = await apiInstance.getNote(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | [**string**] | the ID of the note to retrieve | defaults to undefined


### Return type

**DealNote**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the requested DealNote |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNotes**
> DealNoteListResponse listNotes()

Lists all notes associated with a specific deal.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiListNotesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiListNotesRequest = {
    // the deal ID to list notes for
  id: "id_example",
  
  filter: "filter_example",
  
  pageToken: "page_token_example",
  
  orderBy: "order_by_example",
  
  pageSize: 100,
};

const data = await apiInstance.listNotes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the deal ID to list notes for | defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **pageToken** | [**string**] |  | (optional) defaults to undefined
 **orderBy** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 1000


### Return type

**DealNoteListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of deal notes wrapped in a DealNoteListResponse |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update**
> DealNote update(updateDealNoteRequest)

Updates a specific deal note by its ID.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiUpdateRequest = {
    // the ID of the note to update
  noteId: "note_id_example",
    // the request body containing updated note details
  updateDealNoteRequest: {
    body: "body_example",
  },
};

const data = await apiInstance.update(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDealNoteRequest** | **UpdateDealNoteRequest**| the request body containing updated note details |
 **noteId** | [**string**] | the ID of the note to update | defaults to undefined


### Return type

**DealNote**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the updated DealNote |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


