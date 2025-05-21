# KeapCoreServiceV2Sdk.DealsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeal**](DealsApi.md#createDeal) | **POST** /v2/deals | Creates a new deal.
[**createNote**](DealsApi.md#createNote) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal.
[**createNotesBulk**](DealsApi.md#createNotesBulk) | **POST** /v2/deals/-/notes | Creates new notes in bulk.
[**deleteNote**](DealsApi.md#deleteNote) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID.
[**getDeal**](DealsApi.md#getDeal) | **GET** /v2/deals/{deal_id} | Retrieves a specific deal by its ID.
[**getNote**](DealsApi.md#getNote) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID.
[**listDeals**](DealsApi.md#listDeals) | **GET** /v2/deals/-/contacts/{contact_id} | Lists all deals associated with a specific contact.
[**listNotes**](DealsApi.md#listNotes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal.
[**updateNote**](DealsApi.md#updateNote) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID.



## createDeal

> Deal createDeal(createDealRequest)

Creates a new deal.

Creates a new deal.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DealsApi();
let createDealRequest = new KeapCoreServiceV2Sdk.CreateDealRequest(); // CreateDealRequest | the request body containing deal details
apiInstance.createDeal(createDealRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDealRequest** | [**CreateDealRequest**](CreateDealRequest.md)| the request body containing deal details | 

### Return type

[**Deal**](Deal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


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


## createNotesBulk

> BulkCreateDealNotesResponse createNotesBulk(bulkCreateDealNotesRequest)

Creates new notes in bulk.

Creates new notes in bulk.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DealsApi();
let bulkCreateDealNotesRequest = new KeapCoreServiceV2Sdk.BulkCreateDealNotesRequest(); // BulkCreateDealNotesRequest | the request body containing note details
apiInstance.createNotesBulk(bulkCreateDealNotesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkCreateDealNotesRequest** | [**BulkCreateDealNotesRequest**](BulkCreateDealNotesRequest.md)| the request body containing note details | 

### Return type

[**BulkCreateDealNotesResponse**](BulkCreateDealNotesResponse.md)

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


## getDeal

> Deal getDeal(dealId)

Retrieves a specific deal by its ID.

Retrieves a specific deal by its ID.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DealsApi();
let dealId = "dealId_example"; // String | the ID of the deal to retrieve
apiInstance.getDeal(dealId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealId** | **String**| the ID of the deal to retrieve | 

### Return type

[**Deal**](Deal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


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


## listDeals

> DealListResponse listDeals(contactId, opts)

Lists all deals associated with a specific contact.

Lists all deals associated with a specific contact.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DealsApi();
let contactId = "contactId_example"; // String | the contact ID to list deals for
let opts = {
  'filter': "filter_example", // String | 
  'pageToken': "pageToken_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'pageSize': 100 // Number | 
};
apiInstance.listDeals(contactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| the contact ID to list deals for | 
 **filter** | **String**|  | [optional] 
 **pageToken** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] [default to 1000]

### Return type

[**DealListResponse**](DealListResponse.md)

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

