# .NoteApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNoteUsingPOST1**](NoteApi.md#createNoteUsingPOST1) | **POST** /v2/contacts/{contact_id}/notes | Create a Note
[**deleteNoteUsingDELETE1**](NoteApi.md#deleteNoteUsingDELETE1) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note
[**getNoteUsingGET1**](NoteApi.md#getNoteUsingGET1) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note
[**listNotesUsingGET1**](NoteApi.md#listNotesUsingGET1) | **GET** /v2/contacts/{contact_id}/notes | List Notes
[**updateNoteUsingPATCH**](NoteApi.md#updateNoteUsingPATCH) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note


# **createNoteUsingPOST1**
> Note createNoteUsingPOST1(createNoteRequest)

Creates a new Note.

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiCreateNoteUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiCreateNoteUsingPOST1Request = {
    // contact_id
  contactId: "contact_id_example",
    // request
  createNoteRequest: {
    isPinned: true,
    text: "text_example",
    title: "title_example",
    type: "type_example",
    userId: "userId_example",
  },
};

const data = await apiInstance.createNoteUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNoteRequest** | **CreateNoteRequest**| request |
 **contactId** | [**string**] | contact_id | defaults to undefined


### Return type

**Note**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNoteUsingDELETE1**
> void deleteNoteUsingDELETE1()

Deletes the specified Note

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiDeleteNoteUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiDeleteNoteUsingDELETE1Request = {
    // contact_id
  contactId: "contact_id_example",
    // note_id
  noteId: "note_id_example",
};

const data = await apiInstance.deleteNoteUsingDELETE1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | contact_id | defaults to undefined
 **noteId** | [**string**] | note_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNoteUsingGET1**
> GetNoteResponse getNoteUsingGET1()

Retrieves the specified Note

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiGetNoteUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiGetNoteUsingGET1Request = {
    // contact_id
  contactId: "contact_id_example",
    // note_id
  noteId: "note_id_example",
};

const data = await apiInstance.getNoteUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | contact_id | defaults to undefined
 **noteId** | [**string**] | note_id | defaults to undefined


### Return type

**GetNoteResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNotesUsingGET1**
> ListNotesResponse listNotesUsingGET1()

Retrieves a list of Notes

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiListNotesUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiListNotesUsingGET1Request = {
    // contact_id
  contactId: "contact_id_example",
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listNotesUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | contact_id | defaults to undefined
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListNotesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateNoteUsingPATCH**
> UpdateNoteResponse updateNoteUsingPATCH(updateNoteRequest)

Updates a Note for a Contact

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiUpdateNoteUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiUpdateNoteUsingPATCHRequest = {
    // contact_id
  contactId: "contact_id_example",
    // note_id
  noteId: "note_id_example",
    // updateNoteRequest
  updateNoteRequest: {
    contactId: "contactId_example",
    isPinned: true,
    text: "text_example",
    title: "title_example",
    type: "type_example",
    userId: "userId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "contact_id",
  ],
};

const data = await apiInstance.updateNoteUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateNoteRequest** | **UpdateNoteRequest**| updateNoteRequest |
 **contactId** | [**string**] | contact_id | defaults to undefined
 **noteId** | [**string**] | note_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**UpdateNoteResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


