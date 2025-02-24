# KeapCoreServiceV2Sdk.NoteApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNoteUsingPOST1**](NoteApi.md#createNoteUsingPOST1) | **POST** /v2/contacts/{contact_id}/notes | Create a Note
[**deleteNoteUsingDELETE1**](NoteApi.md#deleteNoteUsingDELETE1) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note
[**getNoteUsingGET1**](NoteApi.md#getNoteUsingGET1) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note
[**listNotesUsingGET1**](NoteApi.md#listNotesUsingGET1) | **GET** /v2/contacts/{contact_id}/notes | List Notes
[**updateNoteUsingPATCH**](NoteApi.md#updateNoteUsingPATCH) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note



## createNoteUsingPOST1

> Note createNoteUsingPOST1(contactId, createNoteRequest)

Create a Note

Creates a new Note.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let createNoteRequest = new KeapCoreServiceV2Sdk.CreateNoteRequest(); // CreateNoteRequest | request
apiInstance.createNoteUsingPOST1(contactId, createNoteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **createNoteRequest** | [**CreateNoteRequest**](CreateNoteRequest.md)| request | 

### Return type

[**Note**](Note.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNoteUsingDELETE1

> deleteNoteUsingDELETE1(contactId, noteId)

Delete a Note

Deletes the specified Note

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let noteId = "noteId_example"; // String | note_id
apiInstance.deleteNoteUsingDELETE1(contactId, noteId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **noteId** | **String**| note_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNoteUsingGET1

> GetNoteResponse getNoteUsingGET1(contactId, noteId)

Retrieve a Note

Retrieves the specified Note

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let noteId = "noteId_example"; // String | note_id
apiInstance.getNoteUsingGET1(contactId, noteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **noteId** | **String**| note_id | 

### Return type

[**GetNoteResponse**](GetNoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listNotesUsingGET1

> ListNotesResponse listNotesUsingGET1(contactId, opts)

List Notes

Retrieves a list of Notes

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listNotesUsingGET1(contactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateNoteUsingPATCH

> UpdateNoteResponse updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, opts)

Update a Note

Updates a Note for a Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let noteId = "noteId_example"; // String | note_id
let updateNoteRequest = new KeapCoreServiceV2Sdk.UpdateNoteRequest(); // UpdateNoteRequest | updateNoteRequest
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **noteId** | **String**| note_id | 
 **updateNoteRequest** | [**UpdateNoteRequest**](UpdateNoteRequest.md)| updateNoteRequest | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**UpdateNoteResponse**](UpdateNoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

