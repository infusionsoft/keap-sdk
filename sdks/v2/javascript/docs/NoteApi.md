# KeapCoreServiceV2Sdk.NoteApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNote**](NoteApi.md#createNote) | **POST** /v2/contacts/{contact_id}/notes | Create a Note
[**createNoteCustomField**](NoteApi.md#createNoteCustomField) | **POST** /v2/notes/model/customFields | Create a Custom Field
[**deleteNote**](NoteApi.md#deleteNote) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note
[**getNote**](NoteApi.md#getNote) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note
[**listNoteTemplates**](NoteApi.md#listNoteTemplates) | **GET** /v2/notes/templates | Retrieve Note Templates
[**listNotes**](NoteApi.md#listNotes) | **GET** /v2/contacts/{contact_id}/notes | List Notes
[**retrieveNoteModel**](NoteApi.md#retrieveNoteModel) | **GET** /v2/notes/model | Retrieve Note Model
[**updateNote**](NoteApi.md#updateNote) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note
[**updateNotesCustomField**](NoteApi.md#updateNotesCustomField) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field



## createNote

> Note createNote(contactId, createNoteRequest)

Create a Note

Creates a new Note.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let createNoteRequest = new KeapCoreServiceV2Sdk.CreateNoteRequest(); // CreateNoteRequest | request
apiInstance.createNote(contactId, createNoteRequest).then((data) => {
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


## createNoteCustomField

> CustomFieldMetaData createNoteCustomField(createCustomFieldRequest)

Create a Custom Field

Creates a custom field of the specified type and options to the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let createCustomFieldRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createNoteCustomField(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNote

> deleteNote(contactId, noteId)

Delete a Note

Deletes the specified Note

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let noteId = "noteId_example"; // String | note_id
apiInstance.deleteNote(contactId, noteId).then(() => {
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


## getNote

> GetNoteResponse getNote(contactId, noteId)

Retrieve a Note

Retrieves the specified Note

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let noteId = "noteId_example"; // String | note_id
apiInstance.getNote(contactId, noteId).then((data) => {
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


## listNoteTemplates

> ListNoteTemplateResponse listNoteTemplates(opts)

Retrieve Note Templates

Retrieves a list of Note Templates

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listNoteTemplates(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListNoteTemplateResponse**](ListNoteTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listNotes

> ListNotesResponse listNotes(contactId, opts)

List Notes

Retrieves a list of Notes

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `assigned_to_user_id` - (String) `title` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=assigned_to_user_id%3D%3DUserId` - `filter=title%3D%3DexpectedTitle` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listNotes(contactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;title&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;assigned_to_user_id%3D%3DUserId&#x60; - &#x60;filter&#x3D;title%3D%3DexpectedTitle&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveNoteModel

> ObjectModel retrieveNoteModel()

Retrieve Note Model

Gets the custom fields for the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
apiInstance.retrieveNoteModel().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateNote

> UpdateNoteResponse updateNote(contactId, noteId, updateNoteRequest, opts)

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
apiInstance.updateNote(contactId, noteId, updateNoteRequest, opts).then((data) => {
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


## updateNotesCustomField

> CustomFieldMetaData updateNotesCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateNotesCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

