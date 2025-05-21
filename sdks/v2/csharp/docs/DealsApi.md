# Keap.Core.V2.Api.DealsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateDeal**](DealsApi.md#createdeal) | **POST** /v2/deals | Creates a new deal. |
| [**CreateNote**](DealsApi.md#createnote) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal. |
| [**CreateNotesBulk**](DealsApi.md#createnotesbulk) | **POST** /v2/deals/-/notes | Creates new notes in bulk. |
| [**DeleteNote**](DealsApi.md#deletenote) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID. |
| [**GetDeal**](DealsApi.md#getdeal) | **GET** /v2/deals/{deal_id} | Retrieves a specific deal by its ID. |
| [**GetNote**](DealsApi.md#getnote) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID. |
| [**ListDeals**](DealsApi.md#listdeals) | **GET** /v2/deals/-/contacts/{contact_id} | Lists all deals associated with a specific contact. |
| [**ListNotes**](DealsApi.md#listnotes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal. |
| [**UpdateNote**](DealsApi.md#updatenote) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID. |

<a id="createdeal"></a>
# **CreateDeal**
> Deal CreateDeal (CreateDealRequest createDealRequest)

Creates a new deal.

Creates a new deal.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateDealExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DealsApi(config);
            var createDealRequest = new CreateDealRequest(); // CreateDealRequest | the request body containing deal details

            try
            {
                // Creates a new deal.
                Deal result = apiInstance.CreateDeal(createDealRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.CreateDeal: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDealWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Creates a new deal.
    ApiResponse<Deal> response = apiInstance.CreateDealWithHttpInfo(createDealRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.CreateDealWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createDealRequest** | [**CreateDealRequest**](CreateDealRequest.md) | the request body containing deal details |  |

### Return type

[**Deal**](Deal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | the created Deal |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createnote"></a>
# **CreateNote**
> DealNote CreateNote (string id, CreateDealNoteRequest createDealNoteRequest)

Creates a new note for a specific deal.

Creates a new note for a specific deal.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateNoteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DealsApi(config);
            var id = "id_example";  // string | the deal ID to associate the new note with
            var createDealNoteRequest = new CreateDealNoteRequest(); // CreateDealNoteRequest | the request body containing note details

            try
            {
                // Creates a new note for a specific deal.
                DealNote result = apiInstance.CreateNote(id, createDealNoteRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.CreateNote: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateNoteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Creates a new note for a specific deal.
    ApiResponse<DealNote> response = apiInstance.CreateNoteWithHttpInfo(id, createDealNoteRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.CreateNoteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the deal ID to associate the new note with |  |
| **createDealNoteRequest** | [**CreateDealNoteRequest**](CreateDealNoteRequest.md) | the request body containing note details |  |

### Return type

[**DealNote**](DealNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | the created DealNote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createnotesbulk"></a>
# **CreateNotesBulk**
> BulkCreateDealNotesResponse CreateNotesBulk (BulkCreateDealNotesRequest bulkCreateDealNotesRequest)

Creates new notes in bulk.

Creates new notes in bulk.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateNotesBulkExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DealsApi(config);
            var bulkCreateDealNotesRequest = new BulkCreateDealNotesRequest(); // BulkCreateDealNotesRequest | the request body containing note details

            try
            {
                // Creates new notes in bulk.
                BulkCreateDealNotesResponse result = apiInstance.CreateNotesBulk(bulkCreateDealNotesRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.CreateNotesBulk: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateNotesBulkWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Creates new notes in bulk.
    ApiResponse<BulkCreateDealNotesResponse> response = apiInstance.CreateNotesBulkWithHttpInfo(bulkCreateDealNotesRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.CreateNotesBulkWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **bulkCreateDealNotesRequest** | [**BulkCreateDealNotesRequest**](BulkCreateDealNotesRequest.md) | the request body containing note details |  |

### Return type

[**BulkCreateDealNotesResponse**](BulkCreateDealNotesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | the created DealNote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletenote"></a>
# **DeleteNote**
> void DeleteNote (string noteId)

Deletes a specific deal note by its ID.

Deletes a specific deal note by its ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteNoteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DealsApi(config);
            var noteId = "noteId_example";  // string | the ID of the note to delete

            try
            {
                // Deletes a specific deal note by its ID.
                apiInstance.DeleteNote(noteId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.DeleteNote: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteNoteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Deletes a specific deal note by its ID.
    apiInstance.DeleteNoteWithHttpInfo(noteId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.DeleteNoteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **noteId** | **string** | the ID of the note to delete |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | a HttpResponse indicating the result of the delete operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getdeal"></a>
# **GetDeal**
> Deal GetDeal (string dealId)

Retrieves a specific deal by its ID.

Retrieves a specific deal by its ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetDealExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DealsApi(config);
            var dealId = "dealId_example";  // string | the ID of the deal to retrieve

            try
            {
                // Retrieves a specific deal by its ID.
                Deal result = apiInstance.GetDeal(dealId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.GetDeal: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDealWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a specific deal by its ID.
    ApiResponse<Deal> response = apiInstance.GetDealWithHttpInfo(dealId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.GetDealWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **dealId** | **string** | the ID of the deal to retrieve |  |

### Return type

[**Deal**](Deal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the requested Deal |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getnote"></a>
# **GetNote**
> DealNote GetNote (string noteId)

Retrieves a specific deal note by its ID.

Retrieves a specific deal note by its ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetNoteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DealsApi(config);
            var noteId = "noteId_example";  // string | the ID of the note to retrieve

            try
            {
                // Retrieves a specific deal note by its ID.
                DealNote result = apiInstance.GetNote(noteId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.GetNote: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetNoteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a specific deal note by its ID.
    ApiResponse<DealNote> response = apiInstance.GetNoteWithHttpInfo(noteId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.GetNoteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **noteId** | **string** | the ID of the note to retrieve |  |

### Return type

[**DealNote**](DealNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the requested DealNote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listdeals"></a>
# **ListDeals**
> DealListResponse ListDeals (string contactId, string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

Lists all deals associated with a specific contact.

Lists all deals associated with a specific contact.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListDealsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DealsApi(config);
            var contactId = "contactId_example";  // string | the contact ID to list deals for
            var filter = "filter_example";  // string? |  (optional) 
            var pageToken = "pageToken_example";  // string? |  (optional) 
            var orderBy = "orderBy_example";  // string? |  (optional) 
            var pageSize = 100;  // int? |  (optional)  (default to 1000)

            try
            {
                // Lists all deals associated with a specific contact.
                DealListResponse result = apiInstance.ListDeals(contactId, filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.ListDeals: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListDealsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Lists all deals associated with a specific contact.
    ApiResponse<DealListResponse> response = apiInstance.ListDealsWithHttpInfo(contactId, filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.ListDealsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | the contact ID to list deals for |  |
| **filter** | **string?** |  | [optional]  |
| **pageToken** | **string?** |  | [optional]  |
| **orderBy** | **string?** |  | [optional]  |
| **pageSize** | **int?** |  | [optional] [default to 1000] |

### Return type

[**DealListResponse**](DealListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a list of deals wrapped in a DealListResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listnotes"></a>
# **ListNotes**
> DealNoteListResponse ListNotes (string id, string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

Lists all notes associated with a specific deal.

Lists all notes associated with a specific deal.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListNotesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DealsApi(config);
            var id = "id_example";  // string | the deal ID to list notes for
            var filter = "filter_example";  // string? |  (optional) 
            var pageToken = "pageToken_example";  // string? |  (optional) 
            var orderBy = "orderBy_example";  // string? |  (optional) 
            var pageSize = 100;  // int? |  (optional)  (default to 1000)

            try
            {
                // Lists all notes associated with a specific deal.
                DealNoteListResponse result = apiInstance.ListNotes(id, filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.ListNotes: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListNotesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Lists all notes associated with a specific deal.
    ApiResponse<DealNoteListResponse> response = apiInstance.ListNotesWithHttpInfo(id, filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.ListNotesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the deal ID to list notes for |  |
| **filter** | **string?** |  | [optional]  |
| **pageToken** | **string?** |  | [optional]  |
| **orderBy** | **string?** |  | [optional]  |
| **pageSize** | **int?** |  | [optional] [default to 1000] |

### Return type

[**DealNoteListResponse**](DealNoteListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a list of deal notes wrapped in a DealNoteListResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatenote"></a>
# **UpdateNote**
> DealNote UpdateNote (string noteId, UpdateDealNoteRequest updateDealNoteRequest)

Updates a specific deal note by its ID.

Updates a specific deal note by its ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateNoteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DealsApi(config);
            var noteId = "noteId_example";  // string | the ID of the note to update
            var updateDealNoteRequest = new UpdateDealNoteRequest(); // UpdateDealNoteRequest | the request body containing updated note details

            try
            {
                // Updates a specific deal note by its ID.
                DealNote result = apiInstance.UpdateNote(noteId, updateDealNoteRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.UpdateNote: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateNoteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Updates a specific deal note by its ID.
    ApiResponse<DealNote> response = apiInstance.UpdateNoteWithHttpInfo(noteId, updateDealNoteRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.UpdateNoteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **noteId** | **string** | the ID of the note to update |  |
| **updateDealNoteRequest** | [**UpdateDealNoteRequest**](UpdateDealNoteRequest.md) | the request body containing updated note details |  |

### Return type

[**DealNote**](DealNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated DealNote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

