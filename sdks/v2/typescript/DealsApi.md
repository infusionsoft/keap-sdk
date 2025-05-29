# .DealsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeal**](DealsApi.md#createDeal) | **POST** /v2/deals | Creates a new deal.
[**createNote**](DealsApi.md#createNote) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal.
[**createNotesBulk**](DealsApi.md#createNotesBulk) | **POST** /v2/deals/-/notes | Creates new notes in bulk.
[**deleteDeal**](DealsApi.md#deleteDeal) | **DELETE** /v2/deals/{id} | Deletes a specific deal by its ID.
[**deleteNote**](DealsApi.md#deleteNote) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID.
[**getDeal**](DealsApi.md#getDeal) | **GET** /v2/deals/{id} | Retrieves a specific deal by its ID.
[**getNote**](DealsApi.md#getNote) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID.
[**listDeals**](DealsApi.md#listDeals) | **GET** /v2/deals/-/contacts/{contact_id} | Lists all deals associated with a specific contact.
[**listNotes**](DealsApi.md#listNotes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal.
[**moveDealsForContacts**](DealsApi.md#moveDealsForContacts) | **POST** /v2/deals/moveByContactIds | Moves the active deals of specified contacts from one stage to another, in bulk.
[**updateNote**](DealsApi.md#updateNote) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID.


# **createDeal**
> Deal createDeal(createDealRequest)

Creates a new deal.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiCreateDealRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiCreateDealRequest = {
    // the request body containing deal details
  createDealRequest: {
    name: "name_example",
    value: null,
    contacts: [
      {
        id: "id_example",
        primaryContact: true,
      },
    ],
    stage: null,
    owners: [
      {
        id: "id_example",
      },
    ],
    ownerId: "ownerId_example",
    taskIds: [
      "taskIds_example",
    ],
    status: "status_example",
    estimatedCloseTime: new Date('1970-01-01T00:00:00.00Z'),
    customFields: {},
  },
};

const data = await apiInstance.createDeal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDealRequest** | **CreateDealRequest**| the request body containing deal details |


### Return type

**Deal**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | the created Deal |  -  |

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
**201** | the created DealNote |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNotesBulk**
> BulkCreateDealNotesResponse createNotesBulk(bulkCreateDealNotesRequest)

Creates new notes in bulk.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiCreateNotesBulkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiCreateNotesBulkRequest = {
    // the request body containing note details
  bulkCreateDealNotesRequest: {
    createNoteRequests: [
      {
        body: "body_example",
        createdBy: "createdBy_example",
        dealId: "dealId_example",
      },
    ],
  },
};

const data = await apiInstance.createNotesBulk(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkCreateDealNotesRequest** | **BulkCreateDealNotesRequest**| the request body containing note details |


### Return type

**BulkCreateDealNotesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | the created DealNote |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDeal**
> void deleteDeal()

Deletes a specific deal by its ID.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiDeleteDealRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiDeleteDealRequest = {
    // the ID of the deal to delete
  id: "id_example",
};

const data = await apiInstance.deleteDeal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the ID of the deal to delete | defaults to undefined


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
**204** | deleteDeal 204 response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNote**
> void deleteNote()

Deletes a specific deal note by its ID.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiDeleteNoteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiDeleteNoteRequest = {
    // the ID of the note to delete
  noteId: "note_id_example",
};

const data = await apiInstance.deleteNote(request);
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

# **getDeal**
> Deal getDeal()

Retrieves a specific deal by its ID.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiGetDealRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiGetDealRequest = {
    // the ID of the deal to retrieve
  id: "id_example",
};

const data = await apiInstance.getDeal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the ID of the deal to retrieve | defaults to undefined


### Return type

**Deal**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the requested Deal |  -  |

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

# **listDeals**
> DealListResponse listDeals()

Lists all deals associated with a specific contact.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiListDealsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiListDealsRequest = {
    // the contact ID to list deals for
  contactId: "contact_id_example",
  
  filter: "filter_example",
  
  pageToken: "page_token_example",
  
  orderBy: "order_by_example",
  
  pageSize: 100,
};

const data = await apiInstance.listDeals(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | the contact ID to list deals for | defaults to undefined
 **filter** | [**string**] |  | (optional) defaults to undefined
 **pageToken** | [**string**] |  | (optional) defaults to undefined
 **orderBy** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 1000


### Return type

**DealListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of deals wrapped in a DealListResponse |  -  |

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

# **moveDealsForContacts**
> MoveDealsForContactsResponse moveDealsForContacts(moveDealsForContactsRequest)

Moves the active deals of specified contacts from one stage to another, in bulk.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiMoveDealsForContactsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiMoveDealsForContactsRequest = {
    // the request body containing move details
  moveDealsForContactsRequest: {
    contactIds: [
      "contactIds_example",
    ],
    fromStage: "fromStage_example",
    toStage: "toStage_example",
  },
};

const data = await apiInstance.moveDealsForContacts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moveDealsForContactsRequest** | **MoveDealsForContactsRequest**| the request body containing move details |


### Return type

**MoveDealsForContactsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the IDs of the Deals moved |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateNote**
> DealNote updateNote(updateDealNoteRequest)

Updates a specific deal note by its ID.

### Example


```typescript
import { createConfiguration, DealsApi } from '';
import type { DealsApiUpdateNoteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DealsApi(configuration);

const request: DealsApiUpdateNoteRequest = {
    // the ID of the note to update
  noteId: "note_id_example",
    // the request body containing updated note details
  updateDealNoteRequest: {
    body: "body_example",
  },
};

const data = await apiInstance.updateNote(request);
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


