# .FilesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFile**](FilesApi.md#createFile) | **POST** /v2/files | Create a file
[**deleteFile**](FilesApi.md#deleteFile) | **DELETE** /v2/files/{file_id} | Delete a file
[**getFile**](FilesApi.md#getFile) | **GET** /v2/files/{file_id} | Retrieve a file
[**getFileData**](FilesApi.md#getFileData) | **GET** /v2/files/{file_id}:data | Retrieve a file\&#39;s data
[**listFiles**](FilesApi.md#listFiles) | **GET** /v2/files | List all files
[**updateFile**](FilesApi.md#updateFile) | **POST** /v2/files/{file_id} | Update a file


# **createFile**
> FileMetadata createFile()

Creates a file and uploads it

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiCreateFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiCreateFileRequest = {
    // File to upload. This is a file sent as multi-part (not a string)
  file: "file_example",
    // File association
  fileAssociation: "CONTACT",
    // File name
  fileName: "fileName_example",
    // Is public
  isPublic: true,
    // Contact ID (optional)
  contactId: "contactId_example",
};

const data = await apiInstance.createFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**string**] | File to upload. This is a file sent as multi-part (not a string) | defaults to undefined
 **fileAssociation** | [**string**]**Array<&#39;CONTACT&#39; &#124; &#39;USER&#39; &#124; &#39;COMPANY&#39;>** | File association | defaults to undefined
 **fileName** | [**string**] | File name | defaults to undefined
 **isPublic** | [**boolean**] | Is public | defaults to undefined
 **contactId** | [**string**] | Contact ID | (optional) defaults to undefined


### Return type

**FileMetadata**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFile**
> void deleteFile()

Deletes a specified file

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiDeleteFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiDeleteFileRequest = {
    // file_id
  fileId: "file_id_example",
};

const data = await apiInstance.deleteFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] | file_id | defaults to undefined


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

# **getFile**
> FileMetadata getFile()

Retrieves a file

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiGetFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiGetFileRequest = {
    // file_id
  fileId: "file_id_example",
};

const data = await apiInstance.getFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] | file_id | defaults to undefined


### Return type

**FileMetadata**

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

# **getFileData**
> string getFileData()

Retrieves a file\'s data

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiGetFileDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiGetFileDataRequest = {
    // file_id
  fileId: "file_id_example",
};

const data = await apiInstance.getFileData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] | file_id | defaults to undefined


### Return type

**string**

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

# **listFiles**
> ListFilesResponse listFiles()

Retrieves a list of files

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiListFilesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiListFilesRequest = {
    // Filter to apply, allowed fields are: - (Boolean) `is_public` - (String) `contact_id` - (String) `user_id` - (FileBoxCategory) `category` - (FileBoxType) `file_box_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `file_name` - `updated_time` - ...  One of the following directions: - `asc` - `desc`  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listFiles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListFilesResponse**

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

# **updateFile**
> FileMetadata updateFile()

Updates a file. Note that this endpoint is using a POST method instead of PATCH.

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiUpdateFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiUpdateFileRequest = {
    // file_id
  fileId: "file_id_example",
    // File to upload. This is a file sent as multi-part (not a string) (optional)
  file: "file_example",
    // File name (optional)
  fileName: "fileName_example",
    // Is public (optional)
  isPublic: true,
    // Update Mask (optional)
  updateMask: "file",
};

const data = await apiInstance.updateFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] | file_id | defaults to undefined
 **file** | [**string**] | File to upload. This is a file sent as multi-part (not a string) | (optional) defaults to undefined
 **fileName** | [**string**] | File name | (optional) defaults to undefined
 **isPublic** | [**boolean**] | Is public | (optional) defaults to undefined
 **updateMask** | [**string**]**Array<&#39;file&#39; &#124; &#39;file_name&#39; &#124; &#39;is_public&#39;>** | Update Mask | (optional) defaults to undefined


### Return type

**FileMetadata**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


