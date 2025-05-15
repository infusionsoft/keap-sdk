# .NoteApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNoteCustomFieldUsingPOST1**](NoteApi.md#createNoteCustomFieldUsingPOST1) | **POST** /v2/notes/model/customFields | Create a Custom Field
[**createNoteUsingPOST1**](NoteApi.md#createNoteUsingPOST1) | **POST** /v2/contacts/{contact_id}/notes | Create a Note
[**deleteNoteUsingDELETE1**](NoteApi.md#deleteNoteUsingDELETE1) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note
[**getNoteUsingGET1**](NoteApi.md#getNoteUsingGET1) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note
[**listNoteTemplatesUsingGET**](NoteApi.md#listNoteTemplatesUsingGET) | **GET** /v2/notes/templates | Retrieve Note Templates
[**listNotesUsingGET1**](NoteApi.md#listNotesUsingGET1) | **GET** /v2/contacts/{contact_id}/notes | List Notes
[**retrieveNoteModelUsingGET1**](NoteApi.md#retrieveNoteModelUsingGET1) | **GET** /v2/notes/model | Retrieve Note Model
[**updateNoteUsingPATCH**](NoteApi.md#updateNoteUsingPATCH) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note
[**updateNotesCustomFieldUsingPATCH**](NoteApi.md#updateNotesCustomFieldUsingPATCH) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field


# **createNoteCustomFieldUsingPOST1**
> CustomFieldMetaData createNoteCustomFieldUsingPOST1(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiCreateNoteCustomFieldUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiCreateNoteCustomFieldUsingPOST1Request = {
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

const data = await apiInstance.createNoteCustomFieldUsingPOST1(request);
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

# **listNoteTemplatesUsingGET**
> ListNoteTemplateResponse listNoteTemplatesUsingGET()

Retrieves a list of Note Templates

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiListNoteTemplatesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiListNoteTemplatesUsingGETRequest = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listNoteTemplatesUsingGET(request);
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

# **retrieveNoteModelUsingGET1**
> ObjectModel retrieveNoteModelUsingGET1()

Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, NoteApi } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request = {};

const data = await apiInstance.retrieveNoteModelUsingGET1(request);
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

# **updateNotesCustomFieldUsingPATCH**
> CustomFieldMetaData updateNotesCustomFieldUsingPATCH(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example


```typescript
import { createConfiguration, NoteApi } from '';
import type { NoteApiUpdateNotesCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NoteApi(configuration);

const request: NoteApiUpdateNotesCustomFieldUsingPATCHRequest = {
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

const data = await apiInstance.updateNotesCustomFieldUsingPATCH(request);
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


