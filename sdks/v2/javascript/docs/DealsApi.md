# KeapCoreServiceV2Sdk.DealsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNote**](DealsApi.md#createNote) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal.
[**deleteNote**](DealsApi.md#deleteNote) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID.
[**getNote**](DealsApi.md#getNote) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID.
[**listNotes**](DealsApi.md#listNotes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal.
[**updateNote**](DealsApi.md#updateNote) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID.



## createNote

> DealNote createNote(id, createDealNoteRequest)

Creates a new note for a specific deal.

Creates a new note for a specific deal.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DealsApi();
let id = "id_example"; // String | the deal ID to associate the new note with
let createDealNoteRequest = new KeapCoreServiceV2Sdk.CreateDealNoteRequest(); // CreateDealNoteRequest | the request body containing note details
apiInstance.createNote(id, createDealNoteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the deal ID to associate the new note with | 
 **createDealNoteRequest** | [**CreateDealNoteRequest**](CreateDealNoteRequest.md)| the request body containing note details | 

### Return type

[**DealNote**](DealNote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNote

> deleteNote(noteId)

Deletes a specific deal note by its ID.

Deletes a specific deal note by its ID.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DealsApi();
let noteId = "noteId_example"; // String | the ID of the note to delete
apiInstance.deleteNote(noteId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| the ID of the note to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getNote

> DealNote getNote(noteId)

Retrieves a specific deal note by its ID.

Retrieves a specific deal note by its ID.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DealsApi();
let noteId = "noteId_example"; // String | the ID of the note to retrieve
apiInstance.getNote(noteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| the ID of the note to retrieve | 

### Return type

[**DealNote**](DealNote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listNotes

> DealNoteListResponse listNotes(id, opts)

Lists all notes associated with a specific deal.

Lists all notes associated with a specific deal.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DealsApi();
let id = "id_example"; // String | the deal ID to list notes for
let opts = {
  'filter': "filter_example", // String | 
  'pageToken': "pageToken_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'pageSize': 100 // Number | 
};
apiInstance.listNotes(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the deal ID to list notes for | 
 **filter** | **String**|  | [optional] 
 **pageToken** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] [default to 1000]

### Return type

[**DealNoteListResponse**](DealNoteListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateNote

> DealNote updateNote(noteId, updateDealNoteRequest)

Updates a specific deal note by its ID.

Updates a specific deal note by its ID.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DealsApi();
let noteId = "noteId_example"; // String | the ID of the note to update
let updateDealNoteRequest = new KeapCoreServiceV2Sdk.UpdateDealNoteRequest(); // UpdateDealNoteRequest | the request body containing updated note details
apiInstance.updateNote(noteId, updateDealNoteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| the ID of the note to update | 
 **updateDealNoteRequest** | [**UpdateDealNoteRequest**](UpdateDealNoteRequest.md)| the request body containing updated note details | 

### Return type

[**DealNote**](DealNote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

