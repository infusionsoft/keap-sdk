# KeapCoreServiceV2Sdk.NoteApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNote**](NoteApi.md#createNote) | **POST** /rest/v2/contacts/{contact_id}/notes | Create a Note
[**createNoteCustomField**](NoteApi.md#createNoteCustomField) | **POST** /rest/v2/notes/model/customFields | Create a Custom Field
[**createNoteCustomFieldGroup**](NoteApi.md#createNoteCustomFieldGroup) | **POST** /rest/v2/notes/model/customFields/groups | Create a Note Custom Field Group
[**createNoteCustomFieldTab**](NoteApi.md#createNoteCustomFieldTab) | **POST** /rest/v2/notes/model/customFields/tabs | Create a Note Custom Field Tab
[**deleteNote**](NoteApi.md#deleteNote) | **DELETE** /rest/v2/contacts/{contact_id}/notes/{note_id} | Delete a Note
[**deleteNoteCustomFieldGroup**](NoteApi.md#deleteNoteCustomFieldGroup) | **DELETE** /rest/v2/notes/model/customFields/groups/{group_id} | Delete a Note Custom Field Group
[**deleteNoteCustomFieldTab**](NoteApi.md#deleteNoteCustomFieldTab) | **DELETE** /rest/v2/notes/model/customFields/tabs/{tab_id} | Delete a Note Custom Field Tab
[**deleteNotesCustomField**](NoteApi.md#deleteNotesCustomField) | **DELETE** /rest/v2/notes/model/customFields/{custom_field_id} | Delete a Note Custom Field
[**getNote**](NoteApi.md#getNote) | **GET** /rest/v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note
[**getNoteCustomFieldGroup**](NoteApi.md#getNoteCustomFieldGroup) | **GET** /rest/v2/notes/model/customFields/groups/{group_id} | Retrieve a Note Custom Field Group
[**getNoteCustomFieldTab**](NoteApi.md#getNoteCustomFieldTab) | **GET** /rest/v2/notes/model/customFields/tabs/{tab_id} | Retrieve a Note Custom Field Tab
[**listAllNotes**](NoteApi.md#listAllNotes) | **GET** /rest/v2/notes | List All Notes
[**listNoteCustomFieldGroups**](NoteApi.md#listNoteCustomFieldGroups) | **GET** /rest/v2/notes/model/customFields/groups | List Note Custom Field Groups
[**listNoteCustomFieldTabs**](NoteApi.md#listNoteCustomFieldTabs) | **GET** /rest/v2/notes/model/customFields/tabs | List Note Custom Field Tabs
[**listNoteTemplates**](NoteApi.md#listNoteTemplates) | **GET** /rest/v2/notes/templates | Retrieve Note Templates
[**listNotes**](NoteApi.md#listNotes) | **GET** /rest/v2/contacts/{contact_id}/notes | List Notes
[**retrieveNoteModel**](NoteApi.md#retrieveNoteModel) | **GET** /rest/v2/notes/model | Retrieve Note Model
[**updateNote**](NoteApi.md#updateNote) | **PATCH** /rest/v2/contacts/{contact_id}/notes/{note_id} | Update a Note
[**updateNoteCustomFieldGroup**](NoteApi.md#updateNoteCustomFieldGroup) | **PATCH** /rest/v2/notes/model/customFields/groups/{group_id} | Update a Note Custom Field Group
[**updateNoteCustomFieldTab**](NoteApi.md#updateNoteCustomFieldTab) | **PATCH** /rest/v2/notes/model/customFields/tabs/{tab_id} | Update a Note Custom Field Tab
[**updateNotesCustomField**](NoteApi.md#updateNotesCustomField) | **PATCH** /rest/v2/notes/model/customFields/{custom_field_id} | Update a Custom Field



## createNote

> Note createNote(contactId, createNoteRequest, opts)

Create a Note

Creates a new Note.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | 
let createNoteRequest = new KeapCoreServiceV2Sdk.CreateNoteRequest(); // CreateNoteRequest | 
let opts = {
  'fields': ["null"] // [String] | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
};
apiInstance.createNote(contactId, createNoteRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**|  | 
 **createNoteRequest** | [**CreateNoteRequest**](CreateNoteRequest.md)|  | 
 **fields** | [**[String]**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let createCustomFieldRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
apiInstance.createNoteCustomField(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createNoteCustomFieldGroup

> CustomFieldGroup createNoteCustomFieldGroup(createCustomFieldGroupRequest)

Create a Note Custom Field Group

Creates a new custom field group for the Note record type. If &#x60;tab_id&#x60; is omitted, the group is added to the default &#39;Custom Fields&#39; tab.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let createCustomFieldGroupRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldGroupRequest(); // CreateCustomFieldGroupRequest | 
apiInstance.createNoteCustomFieldGroup(createCustomFieldGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldGroupRequest** | [**CreateCustomFieldGroupRequest**](CreateCustomFieldGroupRequest.md)|  | 

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createNoteCustomFieldTab

> CustomFieldTab createNoteCustomFieldTab(createCustomFieldTabRequest)

Create a Note Custom Field Tab

Creates a new custom field tab for the Note record type.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let createCustomFieldTabRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldTabRequest(); // CreateCustomFieldTabRequest | 
apiInstance.createNoteCustomFieldTab(createCustomFieldTabRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldTabRequest** | [**CreateCustomFieldTabRequest**](CreateCustomFieldTabRequest.md)|  | 

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | 
let noteId = "noteId_example"; // String | 
apiInstance.deleteNote(contactId, noteId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**|  | 
 **noteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteNoteCustomFieldGroup

> deleteNoteCustomFieldGroup(groupId)

Delete a Note Custom Field Group

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let groupId = "groupId_example"; // String | 
apiInstance.deleteNoteCustomFieldGroup(groupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteNoteCustomFieldTab

> deleteNoteCustomFieldTab(tabId)

Delete a Note Custom Field Tab

Deletes a custom field tab. Returns 409 Conflict if the tab still contains groups.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let tabId = "tabId_example"; // String | 
apiInstance.deleteNoteCustomFieldTab(tabId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteNotesCustomField

> deleteNotesCustomField(customFieldId)

Delete a Note Custom Field

Deletes a Custom Field from the Note object&lt;br/&gt;Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let customFieldId = "customFieldId_example"; // String | 
apiInstance.deleteNotesCustomField(customFieldId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNote

> GetNoteResponse getNote(contactId, noteId, opts)

Retrieve a Note

Retrieves the specified Note

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | 
let noteId = "noteId_example"; // String | 
let opts = {
  'fields': ["null"] // [String] | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
};
apiInstance.getNote(contactId, noteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**|  | 
 **noteId** | **String**|  | 
 **fields** | [**[String]**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] 

### Return type

[**GetNoteResponse**](GetNoteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNoteCustomFieldGroup

> CustomFieldGroup getNoteCustomFieldGroup(groupId)

Retrieve a Note Custom Field Group

Retrieves a single custom field group by id for the Note record type.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let groupId = "groupId_example"; // String | 
apiInstance.getNoteCustomFieldGroup(groupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**|  | 

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNoteCustomFieldTab

> CustomFieldTab getNoteCustomFieldTab(tabId)

Retrieve a Note Custom Field Tab

Retrieves a single custom field tab by id for the Note record type.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let tabId = "tabId_example"; // String | 
apiInstance.getNoteCustomFieldTab(tabId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | **String**|  | 

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllNotes

> ListNotesResponse listAllNotes(opts)

List All Notes

Retrieves a list of all notes

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply. Allowed fields and operators: - (String) `id` — supports `==`, `!=`, `>`, `<`, `>=`, `<=` - (String list) `ids` — comma-separated note ids, supports `==` only (e.g. `ids==1,2,3`) - (String) `title` — supports `==`. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. `title==Follow*`) - (String) `contact_id` - (String) `assigned_to_user_id` - (String) `since_time` — ISO-8601 date/time - (String) `until_time` — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: `==` → `%3D%3D`, `!=` → `!%3D`, `>` → `%3E`, `<` → `%3C`, `>=` → `%3E%3D`, `<=` → `%3C%3D`, `*` → `%2A`.  Multiple filters are combined with AND using `;`.  Examples: - `filter=contact_id%3D%3D1001` - `filter=id%3E5` - `filter=ids%3D%3D1,2,3` - `filter=title%3D%3DFollow%2A` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  Custom fields (when enabled) can be filtered by their field name (case-insensitive). A standard field above takes precedence over a custom field with the same name. Supported operators depend on the custom field's type: - Text-like fields and single-value choice fields with text options (dropdown, radio, state): `==` only, with optional trailing wildcard (e.g. `Priority%3D%3DHigh%2A`) - Yes/No and drilldown fields: `==` only - Numeric fields (including user, month, day of week): `==`, `>`, `<`, `>=`, `<=` - Date fields: `==`, `>`, `<`, `>=`, `<=` using full ISO 8601 - Multi-select fields: `==` matches records that contain the given option Example (for a custom field named `Priority`): `filter=Priority%3D%3DHigh`  Notes: - `id` and `ids` cannot be combined in the same request. - Wildcard `*` may only appear at the end of the value (prefix match).    Leading wildcards (`*foo`, `*foo*`) are rejected for performance reasons. 
  'pageToken': "pageToken_example", // String | Page token
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'fields': ["null"] // [String] | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
};
apiInstance.listAllNotes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply. Allowed fields and operators: - (String) &#x60;id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String list) &#x60;ids&#x60; — comma-separated note ids, supports &#x60;&#x3D;&#x3D;&#x60; only (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;title&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. &#x60;title&#x3D;&#x3D;Follow*&#x60;) - (String) &#x60;contact_id&#x60; - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;since_time&#x60; — ISO-8601 date/time - (String) &#x60;until_time&#x60; — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: &#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;!&#x3D;&#x60; → &#x60;!%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;, &#x60;&gt;&#x3D;&#x60; → &#x60;%3E%3D&#x60;, &#x60;&lt;&#x3D;&#x60; → &#x60;%3C%3D&#x60;, &#x60;*&#x60; → &#x60;%2A&#x60;.  Multiple filters are combined with AND using &#x60;;&#x60;.  Examples: - &#x60;filter&#x3D;contact_id%3D%3D1001&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  Custom fields (when enabled) can be filtered by their field name (case-insensitive). A standard field above takes precedence over a custom field with the same name. Supported operators depend on the custom field&#39;s type: - Text-like fields and single-value choice fields with text options (dropdown, radio, state): &#x60;&#x3D;&#x3D;&#x60; only, with optional trailing wildcard (e.g. &#x60;Priority%3D%3DHigh%2A&#x60;) - Yes/No and drilldown fields: &#x60;&#x3D;&#x3D;&#x60; only - Numeric fields (including user, month, day of week): &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - Date fields: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; using full ISO 8601 - Multi-select fields: &#x60;&#x3D;&#x3D;&#x60; matches records that contain the given option Example (for a custom field named &#x60;Priority&#x60;): &#x60;filter&#x3D;Priority%3D%3DHigh&#x60;  Notes: - &#x60;id&#x60; and &#x60;ids&#x60; cannot be combined in the same request. - Wildcard &#x60;*&#x60; may only appear at the end of the value (prefix match).    Leading wildcards (&#x60;*foo&#x60;, &#x60;*foo*&#x60;) are rejected for performance reasons.  | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **fields** | [**[String]**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] 

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listNoteCustomFieldGroups

> ListCustomFieldGroupsResponse listNoteCustomFieldGroups(opts)

List Note Custom Field Groups

Retrieves a list of custom field groups for the Note record type. Optionally filter by tab_id to scope to a specific tab.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let opts = {
  'tabId': "tabId_example" // String | Optional tab id to scope groups to a single tab
};
apiInstance.listNoteCustomFieldGroups(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | **String**| Optional tab id to scope groups to a single tab | [optional] 

### Return type

[**ListCustomFieldGroupsResponse**](ListCustomFieldGroupsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listNoteCustomFieldTabs

> ListCustomFieldTabsResponse listNoteCustomFieldTabs()

List Note Custom Field Tabs

Retrieves a list of custom field tabs for the Note record type.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
apiInstance.listNoteCustomFieldTabs().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListCustomFieldTabsResponse**](ListCustomFieldTabsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

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

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listNotes

> ListNotesResponse listNotes(contactId, opts)

List Notes

Retrieves a list of Notes for a given contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | 
let opts = {
  'filter': "filter_example", // String | Filter to apply. Allowed fields and operators: - (String) `id` — supports `==`, `!=`, `>`, `<`, `>=`, `<=` - (String list) `ids` — comma-separated note ids, supports `==` only (e.g. `ids==1,2,3`) - (String) `title` — supports `==`. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. `title==Follow*`) - (String) `contact_id` - (String) `assigned_to_user_id` - (String) `since_time` — ISO-8601 date/time - (String) `until_time` — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: `==` → `%3D%3D`, `!=` → `!%3D`, `>` → `%3E`, `<` → `%3C`, `>=` → `%3E%3D`, `<=` → `%3C%3D`, `*` → `%2A`.  Multiple filters are combined with AND using `;`.  Examples: - `filter=contact_id%3D%3D1001` - `filter=id%3E5` - `filter=ids%3D%3D1,2,3` - `filter=title%3D%3DFollow%2A` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  Custom fields (when enabled) can be filtered by their field name (case-insensitive). A standard field above takes precedence over a custom field with the same name. Supported operators depend on the custom field's type: - Text-like fields and single-value choice fields with text options (dropdown, radio, state): `==` only, with optional trailing wildcard (e.g. `Priority%3D%3DHigh%2A`) - Yes/No and drilldown fields: `==` only - Numeric fields (including user, month, day of week): `==`, `>`, `<`, `>=`, `<=` - Date fields: `==`, `>`, `<`, `>=`, `<=` using full ISO 8601 - Multi-select fields: `==` matches records that contain the given option Example (for a custom field named `Priority`): `filter=Priority%3D%3DHigh`  Notes: - `id` and `ids` cannot be combined in the same request. - Wildcard `*` may only appear at the end of the value (prefix match).    Leading wildcards (`*foo`, `*foo*`) are rejected for performance reasons. 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example", // String | Page token
  'fields': ["null"] // [String] | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
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
 **contactId** | **String**|  | 
 **filter** | **String**| Filter to apply. Allowed fields and operators: - (String) &#x60;id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String list) &#x60;ids&#x60; — comma-separated note ids, supports &#x60;&#x3D;&#x3D;&#x60; only (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;title&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. &#x60;title&#x3D;&#x3D;Follow*&#x60;) - (String) &#x60;contact_id&#x60; - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;since_time&#x60; — ISO-8601 date/time - (String) &#x60;until_time&#x60; — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: &#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;!&#x3D;&#x60; → &#x60;!%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;, &#x60;&gt;&#x3D;&#x60; → &#x60;%3E%3D&#x60;, &#x60;&lt;&#x3D;&#x60; → &#x60;%3C%3D&#x60;, &#x60;*&#x60; → &#x60;%2A&#x60;.  Multiple filters are combined with AND using &#x60;;&#x60;.  Examples: - &#x60;filter&#x3D;contact_id%3D%3D1001&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  Custom fields (when enabled) can be filtered by their field name (case-insensitive). A standard field above takes precedence over a custom field with the same name. Supported operators depend on the custom field&#39;s type: - Text-like fields and single-value choice fields with text options (dropdown, radio, state): &#x60;&#x3D;&#x3D;&#x60; only, with optional trailing wildcard (e.g. &#x60;Priority%3D%3DHigh%2A&#x60;) - Yes/No and drilldown fields: &#x60;&#x3D;&#x3D;&#x60; only - Numeric fields (including user, month, day of week): &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - Date fields: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; using full ISO 8601 - Multi-select fields: &#x60;&#x3D;&#x3D;&#x60; matches records that contain the given option Example (for a custom field named &#x60;Priority&#x60;): &#x60;filter&#x3D;Priority%3D%3DHigh&#x60;  Notes: - &#x60;id&#x60; and &#x60;ids&#x60; cannot be combined in the same request. - Wildcard &#x60;*&#x60; may only appear at the end of the value (prefix match).    Leading wildcards (&#x60;*foo&#x60;, &#x60;*foo*&#x60;) are rejected for performance reasons.  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **fields** | [**[String]**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] 

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

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

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let contactId = "contactId_example"; // String | 
let noteId = "noteId_example"; // String | 
let updateNoteRequest = new KeapCoreServiceV2Sdk.UpdateNoteRequest(); // UpdateNoteRequest | 
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'fields': ["null"] // [String] | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields
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
 **contactId** | **String**|  | 
 **noteId** | **String**|  | 
 **updateNoteRequest** | [**UpdateNoteRequest**](UpdateNoteRequest.md)|  | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **fields** | [**[String]**](String.md)| Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional] 

### Return type

[**UpdateNoteResponse**](UpdateNoteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateNoteCustomFieldGroup

> CustomFieldGroup updateNoteCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest)

Update a Note Custom Field Group

Updates an existing custom field group. Only fields listed in &#x60;update_mask&#x60; are applied.&lt;br/&gt;Note: Custom Field Groups for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let groupId = "groupId_example"; // String | 
let updateMask = ["null"]; // [String] | Comma-separated list of fields to update
let updateCustomFieldGroupRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldGroupRequest(); // UpdateCustomFieldGroupRequest | 
apiInstance.updateNoteCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**|  | 
 **updateMask** | [**[String]**](String.md)| Comma-separated list of fields to update | 
 **updateCustomFieldGroupRequest** | [**UpdateCustomFieldGroupRequest**](UpdateCustomFieldGroupRequest.md)|  | 

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateNoteCustomFieldTab

> CustomFieldTab updateNoteCustomFieldTab(tabId, updateMask, updateCustomFieldTabRequest)

Update a Note Custom Field Tab

Updates an existing custom field tab. Only fields listed in &#x60;update_mask&#x60; are applied.&lt;br/&gt;Note: Custom Field Tabs for Tasks, Classic Appointments and Notes are combined.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let tabId = "tabId_example"; // String | 
let updateMask = ["null"]; // [String] | Comma-separated list of fields to update
let updateCustomFieldTabRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldTabRequest(); // UpdateCustomFieldTabRequest | 
apiInstance.updateNoteCustomFieldTab(tabId, updateMask, updateCustomFieldTabRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | **String**|  | 
 **updateMask** | [**[String]**](String.md)| Comma-separated list of fields to update | 
 **updateCustomFieldTabRequest** | [**UpdateCustomFieldTabRequest**](UpdateCustomFieldTabRequest.md)|  | 

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.NoteApi();
let customFieldId = "customFieldId_example"; // String | 
let updateCustomFieldMetaDataRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
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
 **customFieldId** | **String**|  | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

