# .NoteApi

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


# **createNote**
> Note createNote(createNoteRequest)

Creates a new Note.

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiCreateNoteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiCreateNoteRequest = {
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

const data = await apiInstance.createNote(request);
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

# **createNoteCustomField**
> CustomFieldMetaData createNoteCustomField(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiCreateNoteCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiCreateNoteCustomFieldRequest = {
    // customField
  createCustomFieldRequest: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createNoteCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

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

# **deleteNote**
> void deleteNote()

Deletes the specified Note

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiDeleteNoteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiDeleteNoteRequest = {
    // contact_id
  contactId: "contact_id_example",
    // note_id
  noteId: "note_id_example",
};

const data = await apiInstance.deleteNote(request);
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

# **getNote**
> GetNoteResponse getNote()

Retrieves the specified Note

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiGetNoteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiGetNoteRequest = {
    // contact_id
  contactId: "contact_id_example",
    // note_id
  noteId: "note_id_example",
};

const data = await apiInstance.getNote(request);
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

# **listNoteTemplates**
> ListNoteTemplateResponse listNoteTemplates()

Retrieves a list of Note Templates

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiListNoteTemplatesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiListNoteTemplatesRequest = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listNoteTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListNoteTemplateResponse**

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

# **listNotes**
> ListNotesResponse listNotes()

Retrieves a list of Notes

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiListNotesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiListNotesRequest = {
    // contact_id
  contactId: "contact_id_example",
    // Filter to apply, allowed fields are: - (String) `assigned_to_user_id` - (String) `title` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=assigned_to_user_id%3D%3DUserId` - `filter=title%3D%3DexpectedTitle` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `create_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listNotes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | contact_id | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;title&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;assigned_to_user_id%3D%3DUserId&#x60; - &#x60;filter&#x3D;title%3D%3DexpectedTitle&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
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

# **retrieveNoteModel**
> ObjectModel retrieveNoteModel()

Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, NoteApi } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request = {};

const data = await apiInstance.retrieveNoteModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

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

# **updateNote**
> UpdateNoteResponse updateNote(updateNoteRequest)

Updates a Note for a Contact

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiUpdateNoteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiUpdateNoteRequest = {
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

const data = await apiInstance.updateNote(request);
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

# **updateNotesCustomField**
> CustomFieldMetaData updateNotesCustomField(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiUpdateNotesCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiUpdateNotesCustomFieldRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  updateCustomFieldMetaDataRequest: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateNotesCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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


