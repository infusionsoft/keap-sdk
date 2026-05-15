# Keap.Core.V2.Api.FilesApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateFile**](FilesApi.md#createfile) | **POST** /rest/v2/files | Create a file |
| [**DeleteFile**](FilesApi.md#deletefile) | **DELETE** /rest/v2/files/{file_id} | Delete a file |
| [**GetFile**](FilesApi.md#getfile) | **GET** /rest/v2/files/{file_id} | Retrieve a file |
| [**GetFileData**](FilesApi.md#getfiledata) | **GET** /rest/v2/files/{file_id}:data | Retrieve a file&#39;s data |
| [**ListFiles**](FilesApi.md#listfiles) | **GET** /rest/v2/files | List all files |
| [**UpdateFile**](FilesApi.md#updatefile) | **POST** /rest/v2/files/{file_id} | Update a file |

<a id="createfile"></a>
# **CreateFile**
> FileMetadata CreateFile (System.IO.Stream file, string fileName, bool isPublic, string fileAssociation, System.IO.Stream file2, string fileName2, string isPublic2, string fileAssociation2, string? contactId = null, string? contactId2 = null)

Create a file

Creates a file and uploads it

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateFileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FilesApi(config);
            var file = new System.IO.MemoryStream(System.IO.File.ReadAllBytes("/path/to/file.txt"));  // System.IO.Stream | File to upload. This is a file sent as multi-part (not a string)
            var fileName = "fileName_example";  // string | File name
            var isPublic = true;  // bool | Is public
            var fileAssociation = "fileAssociation_example";  // string | File association
            var file2 = new System.IO.MemoryStream(System.IO.File.ReadAllBytes("/path/to/file.txt"));  // System.IO.Stream | File to upload
            var fileName2 = "fileName_example";  // string | File name
            var isPublic2 = "isPublic_example";  // string | Is public
            var fileAssociation2 = "fileAssociation_example";  // string | File association
            var contactId = "contactId_example";  // string? | Contact ID (optional) 
            var contactId2 = "contactId_example";  // string? | Contact ID. Required if the `file_association` is CONTACT (optional) 

            try
            {
                // Create a file
                FileMetadata result = apiInstance.CreateFile(file, fileName, isPublic, fileAssociation, file2, fileName2, isPublic2, fileAssociation2, contactId, contactId2);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FilesApi.CreateFile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateFileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a file
    ApiResponse<FileMetadata> response = apiInstance.CreateFileWithHttpInfo(file, fileName, isPublic, fileAssociation, file2, fileName2, isPublic2, fileAssociation2, contactId, contactId2);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FilesApi.CreateFileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **file** | **System.IO.Stream****System.IO.Stream** | File to upload. This is a file sent as multi-part (not a string) |  |
| **fileName** | **string** | File name |  |
| **isPublic** | **bool** | Is public |  |
| **fileAssociation** | **string** | File association |  |
| **file2** | **System.IO.Stream****System.IO.Stream** | File to upload |  |
| **fileName2** | **string** | File name |  |
| **isPublic2** | **string** | Is public |  |
| **fileAssociation2** | **string** | File association |  |
| **contactId** | **string?** | Contact ID | [optional]  |
| **contactId2** | **string?** | Contact ID. Required if the &#x60;file_association&#x60; is CONTACT | [optional]  |

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

<a id="deletefile"></a>
# **DeleteFile**
> void DeleteFile (string fileId)

Delete a file

Deletes a specified file

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteFileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FilesApi(config);
            var fileId = "fileId_example";  // string | 

            try
            {
                // Delete a file
                apiInstance.DeleteFile(fileId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FilesApi.DeleteFile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteFileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a file
    apiInstance.DeleteFileWithHttpInfo(fileId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FilesApi.DeleteFileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fileId** | **string** |  |  |

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

<a id="getfile"></a>
# **GetFile**
> FileMetadata GetFile (string fileId)

Retrieve a file

Retrieves a file

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetFileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FilesApi(config);
            var fileId = "fileId_example";  // string | 

            try
            {
                // Retrieve a file
                FileMetadata result = apiInstance.GetFile(fileId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FilesApi.GetFile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetFileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a file
    ApiResponse<FileMetadata> response = apiInstance.GetFileWithHttpInfo(fileId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FilesApi.GetFileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fileId** | **string** |  |  |

### Return type

[**FileMetadata**](FileMetadata.md)

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

<a id="getfiledata"></a>
# **GetFileData**
> byte[] GetFileData (string fileId)

Retrieve a file's data

Retrieves a file's data

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetFileDataExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FilesApi(config);
            var fileId = "fileId_example";  // string | 

            try
            {
                // Retrieve a file's data
                byte[] result = apiInstance.GetFileData(fileId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FilesApi.GetFileData: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetFileDataWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a file's data
    ApiResponse<byte[]> response = apiInstance.GetFileDataWithHttpInfo(fileId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FilesApi.GetFileDataWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fileId** | **string** |  |  |

### Return type

**byte[]**

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

<a id="listfiles"></a>
# **ListFiles**
> ListFilesResponse ListFiles (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List all files

Retrieves a list of files

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListFilesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FilesApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (Boolean) `is_public` - (String) `contact_id` - (String) `user_id` - (FileBoxCategory) `category` - (FileBoxType) `file_box_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `file_name` - `updated_time` - ...  One of the following directions: - `asc` - `desc`  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List all files
                ListFilesResponse result = apiInstance.ListFiles(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FilesApi.ListFiles: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListFilesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all files
    ApiResponse<ListFilesResponse> response = apiInstance.ListFilesWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FilesApi.ListFilesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListFilesResponse**](ListFilesResponse.md)

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

<a id="updatefile"></a>
# **UpdateFile**
> FileMetadata UpdateFile (string fileId, Object? updateMask = null, System.IO.Stream? file = null, string? fileName = null, bool? isPublic = null, System.IO.Stream? file2 = null, string? fileName2 = null, bool? isPublic2 = null)

Update a file

Updates a file. Note that this endpoint is using a POST method instead of PATCH.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateFileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FilesApi(config);
            var fileId = "fileId_example";  // string | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var file = new System.IO.MemoryStream(System.IO.File.ReadAllBytes("/path/to/file.txt"));  // System.IO.Stream? | File to upload. This is a file sent as multi-part (not a string) (optional) 
            var fileName = "fileName_example";  // string? | File name (optional) 
            var isPublic = true;  // bool? | Is public (optional) 
            var file2 = new System.IO.MemoryStream(System.IO.File.ReadAllBytes("/path/to/file.txt"));  // System.IO.Stream? | File to upload (optional) 
            var fileName2 = "fileName_example";  // string? | File name (optional) 
            var isPublic2 = true;  // bool? | Is public (optional) 

            try
            {
                // Update a file
                FileMetadata result = apiInstance.UpdateFile(fileId, updateMask, file, fileName, isPublic, file2, fileName2, isPublic2);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FilesApi.UpdateFile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateFileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a file
    ApiResponse<FileMetadata> response = apiInstance.UpdateFileWithHttpInfo(fileId, updateMask, file, fileName, isPublic, file2, fileName2, isPublic2);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FilesApi.UpdateFileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fileId** | **string** |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **file** | **System.IO.Stream?****System.IO.Stream?** | File to upload. This is a file sent as multi-part (not a string) | [optional]  |
| **fileName** | **string?** | File name | [optional]  |
| **isPublic** | **bool?** | Is public | [optional]  |
| **file2** | **System.IO.Stream?****System.IO.Stream?** | File to upload | [optional]  |
| **fileName2** | **string?** | File name | [optional]  |
| **isPublic2** | **bool?** | Is public | [optional]  |

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

