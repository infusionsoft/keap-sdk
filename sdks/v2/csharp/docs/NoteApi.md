# Keap.Core.V2.Api.NoteApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateNoteUsingPOST1**](NoteApi.md#createnoteusingpost1) | **POST** /v2/contacts/{contact_id}/notes | Create a Note |
| [**DeleteNoteUsingDELETE1**](NoteApi.md#deletenoteusingdelete1) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note |
| [**GetNoteUsingGET1**](NoteApi.md#getnoteusingget1) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note |
| [**ListNotesUsingGET1**](NoteApi.md#listnotesusingget1) | **GET** /v2/contacts/{contact_id}/notes | List Notes |
| [**UpdateNoteUsingPATCH**](NoteApi.md#updatenoteusingpatch) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note |

<a id="createnoteusingpost1"></a>
# **CreateNoteUsingPOST1**
> Note CreateNoteUsingPOST1 (string contactId, CreateNoteRequest createNoteRequest)

Create a Note

Creates a new Note.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateNoteUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new NoteApi(config);
            var contactId = "contactId_example";  // string | contact_id
            var createNoteRequest = new CreateNoteRequest(); // CreateNoteRequest | request

            try
            {
                // Create a Note
                Note result = apiInstance.CreateNoteUsingPOST1(contactId, createNoteRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.CreateNoteUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateNoteUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Note
    ApiResponse<Note> response = apiInstance.CreateNoteUsingPOST1WithHttpInfo(contactId, createNoteRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.CreateNoteUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | contact_id |  |
| **createNoteRequest** | [**CreateNoteRequest**](CreateNoteRequest.md) | request |  |

### Return type

[**Note**](Note.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletenoteusingdelete1"></a>
# **DeleteNoteUsingDELETE1**
> void DeleteNoteUsingDELETE1 (string contactId, string noteId)

Delete a Note

Deletes the specified Note

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteNoteUsingDELETE1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new NoteApi(config);
            var contactId = "contactId_example";  // string | contact_id
            var noteId = "noteId_example";  // string | note_id

            try
            {
                // Delete a Note
                apiInstance.DeleteNoteUsingDELETE1(contactId, noteId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.DeleteNoteUsingDELETE1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteNoteUsingDELETE1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Note
    apiInstance.DeleteNoteUsingDELETE1WithHttpInfo(contactId, noteId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.DeleteNoteUsingDELETE1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | contact_id |  |
| **noteId** | **string** | note_id |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getnoteusingget1"></a>
# **GetNoteUsingGET1**
> GetNoteResponse GetNoteUsingGET1 (string contactId, string noteId)

Retrieve a Note

Retrieves the specified Note

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetNoteUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new NoteApi(config);
            var contactId = "contactId_example";  // string | contact_id
            var noteId = "noteId_example";  // string | note_id

            try
            {
                // Retrieve a Note
                GetNoteResponse result = apiInstance.GetNoteUsingGET1(contactId, noteId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.GetNoteUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetNoteUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Note
    ApiResponse<GetNoteResponse> response = apiInstance.GetNoteUsingGET1WithHttpInfo(contactId, noteId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.GetNoteUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | contact_id |  |
| **noteId** | **string** | note_id |  |

### Return type

[**GetNoteResponse**](GetNoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listnotesusingget1"></a>
# **ListNotesUsingGET1**
> ListNotesResponse ListNotesUsingGET1 (string contactId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Notes

Retrieves a list of Notes

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListNotesUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new NoteApi(config);
            var contactId = "contactId_example";  // string | contact_id
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Notes
                ListNotesResponse result = apiInstance.ListNotesUsingGET1(contactId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.ListNotesUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListNotesUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Notes
    ApiResponse<ListNotesResponse> response = apiInstance.ListNotesUsingGET1WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.ListNotesUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | contact_id |  |
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatenoteusingpatch"></a>
# **UpdateNoteUsingPATCH**
> UpdateNoteResponse UpdateNoteUsingPATCH (string contactId, string noteId, UpdateNoteRequest updateNoteRequest, List<string>? updateMask = null)

Update a Note

Updates a Note for a Contact

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateNoteUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new NoteApi(config);
            var contactId = "contactId_example";  // string | contact_id
            var noteId = "noteId_example";  // string | note_id
            var updateNoteRequest = new UpdateNoteRequest(); // UpdateNoteRequest | updateNoteRequest
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Note
                UpdateNoteResponse result = apiInstance.UpdateNoteUsingPATCH(contactId, noteId, updateNoteRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.UpdateNoteUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateNoteUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Note
    ApiResponse<UpdateNoteResponse> response = apiInstance.UpdateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.UpdateNoteUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | contact_id |  |
| **noteId** | **string** | note_id |  |
| **updateNoteRequest** | [**UpdateNoteRequest**](UpdateNoteRequest.md) | updateNoteRequest |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**UpdateNoteResponse**](UpdateNoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

