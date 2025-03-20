# Keap.Core.V2.Api.DealsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateNote**](DealsApi.md#createnote) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal. |
| [**Delete**](DealsApi.md#delete) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID. |
| [**GetNote**](DealsApi.md#getnote) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID. |
| [**ListNotes**](DealsApi.md#listnotes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal. |
| [**Update**](DealsApi.md#update) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID. |

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
| **200** | the created DealNote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="delete"></a>
# **Delete**
> void Delete (string noteId)

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
    public class DeleteExample
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
                apiInstance.Delete(noteId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.Delete: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Deletes a specific deal note by its ID.
    apiInstance.DeleteWithHttpInfo(noteId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.DeleteWithHttpInfo: " + e.Message);
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

<a id="update"></a>
# **Update**
> DealNote Update (string noteId, UpdateDealNoteRequest updateDealNoteRequest)

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
    public class UpdateExample
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
                DealNote result = apiInstance.Update(noteId, updateDealNoteRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DealsApi.Update: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Updates a specific deal note by its ID.
    ApiResponse<DealNote> response = apiInstance.UpdateWithHttpInfo(noteId, updateDealNoteRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DealsApi.UpdateWithHttpInfo: " + e.Message);
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

