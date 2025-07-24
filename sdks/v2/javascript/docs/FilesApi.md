# KeapCoreServiceV2Sdk.FilesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFile**](FilesApi.md#createFile) | **POST** /v2/files | Create a file
[**deleteFile**](FilesApi.md#deleteFile) | **DELETE** /v2/files/{file_id} | Delete a file
[**getFile**](FilesApi.md#getFile) | **GET** /v2/files/{file_id} | Retrieve a file
[**getFileData**](FilesApi.md#getFileData) | **GET** /v2/files/{file_id}:data | Retrieve a file&#39;s data
[**listFiles**](FilesApi.md#listFiles) | **GET** /v2/files | List all files
[**updateFile**](FilesApi.md#updateFile) | **POST** /v2/files/{file_id} | Update a file



## createFile

> FileMetadata createFile(file, fileAssociation, fileName, isPublic, opts)

Create a file

Creates a file and uploads it

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let file = "file_example"; // String | File to upload. This is a file sent as multi-part (not a string)
let fileAssociation = "fileAssociation_example"; // String | File association
let fileName = "fileName_example"; // String | File name
let isPublic = true; // Boolean | Is public
let opts = {
  'contactId': "contactId_example" // String | Contact ID
};
apiInstance.createFile(file, fileAssociation, fileName, isPublic, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **String**| File to upload. This is a file sent as multi-part (not a string) | 
 **fileAssociation** | **String**| File association | 
 **fileName** | **String**| File name | 
 **isPublic** | **Boolean**| Is public | 
 **contactId** | **String**| Contact ID | [optional] 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## deleteFile

> deleteFile(fileId)

Delete a file

Deletes a specified file

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let fileId = "fileId_example"; // String | file_id
apiInstance.deleteFile(fileId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| file_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFile

> FileMetadata getFile(fileId)

Retrieve a file

Retrieves a file

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let fileId = "fileId_example"; // String | file_id
apiInstance.getFile(fileId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| file_id | 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFileData

> Blob getFileData(fileId)

Retrieve a file&#39;s data

Retrieves a file&#39;s data

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let fileId = "fileId_example"; // String | file_id
apiInstance.getFileData(fileId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| file_id | 

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFiles

> ListFilesResponse listFiles(opts)

List all files

Retrieves a list of files

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (Boolean) `is_public` - (String) `contact_id` - (String) `user_id` - (FileBoxCategory) `category` - (FileBoxType) `file_box_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `file_name` - `updated_time` - ...  One of the following directions: - `asc` - `desc` 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listFiles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListFilesResponse**](ListFilesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFile

> FileMetadata updateFile(fileId, opts)

Update a file

Updates a file. Note that this endpoint is using a POST method instead of PATCH.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let fileId = "fileId_example"; // String | file_id
let opts = {
  'file': "file_example", // String | File to upload. This is a file sent as multi-part (not a string)
  'fileName': "fileName_example", // String | File name
  'isPublic': true, // Boolean | Is public
  'updateMask': "updateMask_example" // String | Update Mask
};
apiInstance.updateFile(fileId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| file_id | 
 **file** | **String**| File to upload. This is a file sent as multi-part (not a string) | [optional] 
 **fileName** | **String**| File name | [optional] 
 **isPublic** | **Boolean**| Is public | [optional] 
 **updateMask** | **String**| Update Mask | [optional] 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

