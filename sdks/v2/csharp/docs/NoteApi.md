# Keap.Core.V2.Api.NoteApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateNote**](NoteApi.md#createnote) | **POST** /rest/v2/contacts/{contact_id}/notes | Create a Note |
| [**CreateNoteCustomField**](NoteApi.md#createnotecustomfield) | **POST** /rest/v2/notes/model/customFields | Create a Custom Field |
| [**DeleteNote**](NoteApi.md#deletenote) | **DELETE** /rest/v2/contacts/{contact_id}/notes/{note_id} | Delete a Note |
| [**DeleteNotesCustomField**](NoteApi.md#deletenotescustomfield) | **DELETE** /rest/v2/notes/model/customFields/{custom_field_id} | Delete a Note Custom Field |
| [**GetNote**](NoteApi.md#getnote) | **GET** /rest/v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note |
| [**ListAllNotes**](NoteApi.md#listallnotes) | **GET** /rest/v2/notes | List All Notes |
| [**ListNoteTemplates**](NoteApi.md#listnotetemplates) | **GET** /rest/v2/notes/templates | Retrieve Note Templates |
| [**ListNotes**](NoteApi.md#listnotes) | **GET** /rest/v2/contacts/{contact_id}/notes | List Notes |
| [**RetrieveNoteModel**](NoteApi.md#retrievenotemodel) | **GET** /rest/v2/notes/model | Retrieve Note Model |
| [**UpdateNote**](NoteApi.md#updatenote) | **PATCH** /rest/v2/contacts/{contact_id}/notes/{note_id} | Update a Note |
| [**UpdateNotesCustomField**](NoteApi.md#updatenotescustomfield) | **PATCH** /rest/v2/notes/model/customFields/{custom_field_id} | Update a Custom Field |

<a id="createnote"></a>
# **CreateNote**
> Note CreateNote (string contactId, CreateNoteRequest createNoteRequest, List<string>? fields = null)

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
    public class CreateNoteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);
            var contactId = "contactId_example";  // string | 
            var createNoteRequest = new CreateNoteRequest(); // CreateNoteRequest | 
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields (optional) 

            try
            {
                // Create a Note
                Note result = apiInstance.CreateNote(contactId, createNoteRequest, fields);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.CreateNote: " + e.Message);
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
    // Create a Note
    ApiResponse<Note> response = apiInstance.CreateNoteWithHttpInfo(contactId, createNoteRequest, fields);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.CreateNoteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** |  |  |
| **createNoteRequest** | [**CreateNoteRequest**](CreateNoteRequest.md) |  |  |
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional]  |

### Return type

[**Note**](Note.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createnotecustomfield"></a>
# **CreateNoteCustomField**
> CustomFieldMetaData CreateNoteCustomField (CreateCustomFieldRequest createCustomFieldRequest)

Create a Custom Field

Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateNoteCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 

            try
            {
                // Create a Custom Field
                CustomFieldMetaData result = apiInstance.CreateNoteCustomField(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.CreateNoteCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateNoteCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateNoteCustomFieldWithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.CreateNoteCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) |  |  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletenote"></a>
# **DeleteNote**
> void DeleteNote (string contactId, string noteId)

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
    public class DeleteNoteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);
            var contactId = "contactId_example";  // string | 
            var noteId = "noteId_example";  // string | 

            try
            {
                // Delete a Note
                apiInstance.DeleteNote(contactId, noteId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.DeleteNote: " + e.Message);
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
    // Delete a Note
    apiInstance.DeleteNoteWithHttpInfo(contactId, noteId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.DeleteNoteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** |  |  |
| **noteId** | **string** |  |  |

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletenotescustomfield"></a>
# **DeleteNotesCustomField**
> void DeleteNotesCustomField (string customFieldId)

Delete a Note Custom Field

Deletes a Custom Field from the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteNotesCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);
            var customFieldId = "customFieldId_example";  // string | 

            try
            {
                // Delete a Note Custom Field
                apiInstance.DeleteNotesCustomField(customFieldId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.DeleteNotesCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteNotesCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Note Custom Field
    apiInstance.DeleteNotesCustomFieldWithHttpInfo(customFieldId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.DeleteNotesCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** |  |  |

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getnote"></a>
# **GetNote**
> GetNoteResponse GetNote (string contactId, string noteId, List<string>? fields = null)

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
    public class GetNoteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);
            var contactId = "contactId_example";  // string | 
            var noteId = "noteId_example";  // string | 
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields (optional) 

            try
            {
                // Retrieve a Note
                GetNoteResponse result = apiInstance.GetNote(contactId, noteId, fields);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.GetNote: " + e.Message);
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
    // Retrieve a Note
    ApiResponse<GetNoteResponse> response = apiInstance.GetNoteWithHttpInfo(contactId, noteId, fields);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.GetNoteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** |  |  |
| **noteId** | **string** |  |  |
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional]  |

### Return type

[**GetNoteResponse**](GetNoteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listallnotes"></a>
# **ListAllNotes**
> ListNotesResponse ListAllNotes (string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null, List<string>? fields = null)

List All Notes

Retrieves a list of all notes

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListAllNotesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);
            var filter = "filter_example";  // string? | Filter to apply. Allowed fields and operators: - (String) `id` — supports `==`, `!=`, `>`, `<`, `>=`, `<=` - (String list) `ids` — comma-separated note ids, supports `==` only (e.g. `ids==1,2,3`) - (String) `title` — supports `==`. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. `title==Follow*`) - (String) `contact_id` - (String) `assigned_to_user_id` - (String) `since_time` — ISO-8601 date/time - (String) `until_time` — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: `==` → `%3D%3D`, `!=` → `!%3D`, `>` → `%3E`, `<` → `%3C`, `>=` → `%3E%3D`, `<=` → `%3C%3D`, `*` → `%2A`.  Multiple filters are combined with AND using `;`.  Examples: - `filter=contact_id%3D%3D1001` - `filter=id%3E5` - `filter=ids%3D%3D1,2,3` - `filter=title%3D%3DFollow%2A` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  Notes: - `id` and `ids` cannot be combined in the same request. - Wildcard `*` may only appear at the end of the value (prefix match).    Leading wildcards (`*foo`, `*foo*`) are rejected for performance reasons.  (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields (optional) 

            try
            {
                // List All Notes
                ListNotesResponse result = apiInstance.ListAllNotes(filter, pageToken, orderBy, pageSize, fields);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.ListAllNotes: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAllNotesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List All Notes
    ApiResponse<ListNotesResponse> response = apiInstance.ListAllNotesWithHttpInfo(filter, pageToken, orderBy, pageSize, fields);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.ListAllNotesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply. Allowed fields and operators: - (String) &#x60;id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String list) &#x60;ids&#x60; — comma-separated note ids, supports &#x60;&#x3D;&#x3D;&#x60; only (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;title&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. &#x60;title&#x3D;&#x3D;Follow*&#x60;) - (String) &#x60;contact_id&#x60; - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;since_time&#x60; — ISO-8601 date/time - (String) &#x60;until_time&#x60; — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: &#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;!&#x3D;&#x60; → &#x60;!%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;, &#x60;&gt;&#x3D;&#x60; → &#x60;%3E%3D&#x60;, &#x60;&lt;&#x3D;&#x60; → &#x60;%3C%3D&#x60;, &#x60;*&#x60; → &#x60;%2A&#x60;.  Multiple filters are combined with AND using &#x60;;&#x60;.  Examples: - &#x60;filter&#x3D;contact_id%3D%3D1001&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  Notes: - &#x60;id&#x60; and &#x60;ids&#x60; cannot be combined in the same request. - Wildcard &#x60;*&#x60; may only appear at the end of the value (prefix match).    Leading wildcards (&#x60;*foo&#x60;, &#x60;*foo*&#x60;) are rejected for performance reasons.  | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional]  |

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listnotetemplates"></a>
# **ListNoteTemplates**
> ListNoteTemplateResponse ListNoteTemplates (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

Retrieve Note Templates

Retrieves a list of Note Templates

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListNoteTemplatesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // Retrieve Note Templates
                ListNoteTemplateResponse result = apiInstance.ListNoteTemplates(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.ListNoteTemplates: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListNoteTemplatesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Note Templates
    ApiResponse<ListNoteTemplateResponse> response = apiInstance.ListNoteTemplatesWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.ListNoteTemplatesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListNoteTemplateResponse**](ListNoteTemplateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listnotes"></a>
# **ListNotes**
> ListNotesResponse ListNotes (string contactId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null, List<string>? fields = null)

List Notes

Retrieves a list of Notes for a given contact

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
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);
            var contactId = "contactId_example";  // string | 
            var filter = "filter_example";  // string? | Filter to apply. Allowed fields and operators: - (String) `id` — supports `==`, `!=`, `>`, `<`, `>=`, `<=` - (String list) `ids` — comma-separated note ids, supports `==` only (e.g. `ids==1,2,3`) - (String) `title` — supports `==`. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. `title==Follow*`) - (String) `contact_id` - (String) `assigned_to_user_id` - (String) `since_time` — ISO-8601 date/time - (String) `until_time` — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: `==` → `%3D%3D`, `!=` → `!%3D`, `>` → `%3E`, `<` → `%3C`, `>=` → `%3E%3D`, `<=` → `%3C%3D`, `*` → `%2A`.  Multiple filters are combined with AND using `;`.  Examples: - `filter=contact_id%3D%3D1001` - `filter=id%3E5` - `filter=ids%3D%3D1,2,3` - `filter=title%3D%3DFollow%2A` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  Notes: - `id` and `ids` cannot be combined in the same request. - Wildcard `*` may only appear at the end of the value (prefix match).    Leading wildcards (`*foo`, `*foo*`) are rejected for performance reasons.  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields (optional) 

            try
            {
                // List Notes
                ListNotesResponse result = apiInstance.ListNotes(contactId, filter, orderBy, pageSize, pageToken, fields);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.ListNotes: " + e.Message);
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
    // List Notes
    ApiResponse<ListNotesResponse> response = apiInstance.ListNotesWithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, fields);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.ListNotesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** |  |  |
| **filter** | **string?** | Filter to apply. Allowed fields and operators: - (String) &#x60;id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String list) &#x60;ids&#x60; — comma-separated note ids, supports &#x60;&#x3D;&#x3D;&#x60; only (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;title&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;. Bare value matches anywhere in the title (contains).    Wildcard prefix match also supported (e.g. &#x60;title&#x3D;&#x3D;Follow*&#x60;) - (String) &#x60;contact_id&#x60; - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;since_time&#x60; — ISO-8601 date/time - (String) &#x60;until_time&#x60; — ISO-8601 date/time  Operators must be URL-encoded. Common encodings: &#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;!&#x3D;&#x60; → &#x60;!%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;, &#x60;&gt;&#x3D;&#x60; → &#x60;%3E%3D&#x60;, &#x60;&lt;&#x3D;&#x60; → &#x60;%3C%3D&#x60;, &#x60;*&#x60; → &#x60;%2A&#x60;.  Multiple filters are combined with AND using &#x60;;&#x60;.  Examples: - &#x60;filter&#x3D;contact_id%3D%3D1001&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;title%3D%3DFollow%2A&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  Notes: - &#x60;id&#x60; and &#x60;ids&#x60; cannot be combined in the same request. - Wildcard &#x60;*&#x60; may only appear at the end of the value (prefix match).    Leading wildcards (&#x60;*foo&#x60;, &#x60;*foo*&#x60;) are rejected for performance reasons.  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional]  |

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="retrievenotemodel"></a>
# **RetrieveNoteModel**
> ObjectModel RetrieveNoteModel ()

Retrieve Note Model

Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RetrieveNoteModelExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);

            try
            {
                // Retrieve Note Model
                ObjectModel result = apiInstance.RetrieveNoteModel();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.RetrieveNoteModel: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveNoteModelWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Note Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveNoteModelWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.RetrieveNoteModelWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
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


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatenote"></a>
# **UpdateNote**
> UpdateNoteResponse UpdateNote (string contactId, string noteId, UpdateNoteRequest updateNoteRequest, Object? updateMask = null, List<string>? fields = null)

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
    public class UpdateNoteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);
            var contactId = "contactId_example";  // string | 
            var noteId = "noteId_example";  // string | 
            var updateNoteRequest = new UpdateNoteRequest(); // UpdateNoteRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields (optional) 

            try
            {
                // Update a Note
                UpdateNoteResponse result = apiInstance.UpdateNote(contactId, noteId, updateNoteRequest, updateMask, fields);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.UpdateNote: " + e.Message);
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
    // Update a Note
    ApiResponse<UpdateNoteResponse> response = apiInstance.UpdateNoteWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, fields);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.UpdateNoteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** |  |  |
| **noteId** | **string** |  |  |
| **updateNoteRequest** | [**UpdateNoteRequest**](UpdateNoteRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of optional Note properties to include in the response. Allowed values: custom_fields | [optional]  |

### Return type

[**UpdateNoteResponse**](UpdateNoteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatenotescustomfield"></a>
# **UpdateNotesCustomField**
> CustomFieldMetaData UpdateNotesCustomField (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, Object? updateMask = null)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateNotesCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new NoteApi(config);
            var customFieldId = "customFieldId_example";  // string | 
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Custom Field
                CustomFieldMetaData result = apiInstance.UpdateNotesCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling NoteApi.UpdateNotesCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateNotesCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateNotesCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling NoteApi.UpdateNotesCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** |  |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

