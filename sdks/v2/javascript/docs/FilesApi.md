# KeapCoreServiceV2Sdk.FilesApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFile**](FilesApi.md#createFile) | **POST** /rest/v2/files | Create a file
[**deleteFile**](FilesApi.md#deleteFile) | **DELETE** /rest/v2/files/{file_id} | Delete a file
[**getFile**](FilesApi.md#getFile) | **GET** /rest/v2/files/{file_id} | Retrieve a file
[**getFileData1**](FilesApi.md#getFileData1) | **GET** /rest/v2/files/{file_id}:data | Retrieve a file&#39;s data
[**listFiles**](FilesApi.md#listFiles) | **GET** /rest/v2/files | List all files
[**updateFile**](FilesApi.md#updateFile) | **POST** /rest/v2/files/{file_id} | Update a file



## createFile

> FileMetadata createFile(file, fileName, fileAssociation, opts)

Create a file

Uploads a file using multipart/form-data. The &#x60;file&#x60; part contains the binary file content; &#x60;file_name&#x60;, &#x60;is_public&#x60;, &#x60;file_association&#x60;, and optionally &#x60;contact_id&#x60; are additional text parts in the same multipart request. Sending these as URL query parameters is not supported.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let file = "/path/to/file"; // File | File to upload
let fileName = "fileName_example"; // String | File name
let fileAssociation = "fileAssociation_example"; // String | File association
let opts = {
  'contactId': "contactId_example", // String | Contact ID. Required if the `file_association` is CONTACT
  'isPublic': "isPublic_example" // String | Is public
};
apiInstance.createFile(file, fileName, fileAssociation, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| File to upload | 
 **fileName** | **String**| File name | 
 **fileAssociation** | **String**| File association | 
 **contactId** | **String**| Contact ID. Required if the &#x60;file_association&#x60; is CONTACT | [optional] 
 **isPublic** | **String**| Is public | [optional] 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let fileId = "fileId_example"; // String | 
apiInstance.deleteFile(fileId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let fileId = "fileId_example"; // String | 
apiInstance.getFile(fileId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFileData1

> Blob getFileData1(fileId)

Retrieve a file&#39;s data

Retrieves a file&#39;s data

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let fileId = "fileId_example"; // String | 
apiInstance.getFileData1(fileId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 

### Return type

**Blob**

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (Boolean) `is_public` — `true` (public) or `false` (private) - (String) `contact_id` - (String) `user_id` - (FileBoxCategory) `category` — one of: `ATTACHMENTS`, `CART`, `DOCUMENTS`, `HIDDEN`, `INVOICE`, `LOGO`, `TICKETS`, `WEB_FORM`, `FUNNEL` - (FileBoxType) `file_box_type` — one of: `APPLICATION`, `IMAGE`, `FAX`, `ATTACHMENT`, `TICKET`, `CONTACT`, `DIGITAL_PRODUCT`, `IMPORT`, `HIDDEN`, `WEB_FORM`, `STYLED_CART`, `RESAMPLED_IMAGE`, `TEMPLATE_THUMBNAIL`, `FUNNEL`, `LOGO_THUMBNAIL`, `UNLAYER`, `BRANDING_CENTER_LOGO` - (String) `file_name` - (String) `created_time` - (String) `updated_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. Multiple filters are combined with a semicolon (`;`, encoded `%3B`) and are ANDed together. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=is_public%3D%3Dfalse` - `filter=category%3D%3DDOCUMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DCONTACT%3Bis_public%3D%3Dfalse` 
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
 **filter** | **String**| Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; — &#x60;true&#x60; (public) or &#x60;false&#x60; (private) - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; — one of: &#x60;ATTACHMENTS&#x60;, &#x60;CART&#x60;, &#x60;DOCUMENTS&#x60;, &#x60;HIDDEN&#x60;, &#x60;INVOICE&#x60;, &#x60;LOGO&#x60;, &#x60;TICKETS&#x60;, &#x60;WEB_FORM&#x60;, &#x60;FUNNEL&#x60; - (FileBoxType) &#x60;file_box_type&#x60; — one of: &#x60;APPLICATION&#x60;, &#x60;IMAGE&#x60;, &#x60;FAX&#x60;, &#x60;ATTACHMENT&#x60;, &#x60;TICKET&#x60;, &#x60;CONTACT&#x60;, &#x60;DIGITAL_PRODUCT&#x60;, &#x60;IMPORT&#x60;, &#x60;HIDDEN&#x60;, &#x60;WEB_FORM&#x60;, &#x60;STYLED_CART&#x60;, &#x60;RESAMPLED_IMAGE&#x60;, &#x60;TEMPLATE_THUMBNAIL&#x60;, &#x60;FUNNEL&#x60;, &#x60;LOGO_THUMBNAIL&#x60;, &#x60;UNLAYER&#x60;, &#x60;BRANDING_CENTER_LOGO&#x60; - (String) &#x60;file_name&#x60; - (String) &#x60;created_time&#x60; - (String) &#x60;updated_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. Multiple filters are combined with a semicolon (&#x60;;&#x60;, encoded &#x60;%3B&#x60;) and are ANDed together. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;is_public%3D%3Dfalse&#x60; - &#x60;filter&#x3D;category%3D%3DDOCUMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DCONTACT%3Bis_public%3D%3Dfalse&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListFilesResponse**](ListFilesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFile

> FileMetadata updateFile(fileId, opts)

Update a file

Updates a file using multipart/form-data. Note that this endpoint uses POST instead of PATCH.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FilesApi();
let fileId = "fileId_example"; // String | 
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'file': "/path/to/file", // File | File to upload
  'fileName': "fileName_example", // String | File name
  'isPublic': true // Boolean | Is public
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
 **fileId** | **String**|  | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **file** | **File**| File to upload | [optional] 
 **fileName** | **String**| File name | [optional] 
 **isPublic** | **Boolean**| Is public | [optional] 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

