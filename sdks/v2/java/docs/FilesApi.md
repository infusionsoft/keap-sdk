# FilesApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFile**](FilesApi.md#createFile) | **POST** /rest/v2/files | Create a file |
| [**createFileWithHttpInfo**](FilesApi.md#createFileWithHttpInfo) | **POST** /rest/v2/files | Create a file |
| [**deleteFile**](FilesApi.md#deleteFile) | **DELETE** /rest/v2/files/{file_id} | Delete a file |
| [**deleteFileWithHttpInfo**](FilesApi.md#deleteFileWithHttpInfo) | **DELETE** /rest/v2/files/{file_id} | Delete a file |
| [**getFile**](FilesApi.md#getFile) | **GET** /rest/v2/files/{file_id} | Retrieve a file |
| [**getFileWithHttpInfo**](FilesApi.md#getFileWithHttpInfo) | **GET** /rest/v2/files/{file_id} | Retrieve a file |
| [**getFileData**](FilesApi.md#getFileData) | **GET** /rest/v2/files/{file_id}:data | Retrieve a file&#39;s data |
| [**getFileDataWithHttpInfo**](FilesApi.md#getFileDataWithHttpInfo) | **GET** /rest/v2/files/{file_id}:data | Retrieve a file&#39;s data |
| [**listFiles**](FilesApi.md#listFiles) | **GET** /rest/v2/files | List all files |
| [**listFilesWithHttpInfo**](FilesApi.md#listFilesWithHttpInfo) | **GET** /rest/v2/files | List all files |
| [**updateFile**](FilesApi.md#updateFile) | **POST** /rest/v2/files/{file_id} | Update a file |
| [**updateFileWithHttpInfo**](FilesApi.md#updateFileWithHttpInfo) | **POST** /rest/v2/files/{file_id} | Update a file |



## createFile

> FileMetadata createFile(_file, fileName, isPublic, fileAssociation, _file2, fileName2, isPublic2, fileAssociation2, contactId, contactId2)

Create a file

Creates a file and uploads it

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        File _file = new File("/path/to/file"); // File | File to upload. This is a file sent as multi-part (not a string)
        String fileName = "fileName_example"; // String | File name
        Boolean isPublic = true; // Boolean | Is public
        String fileAssociation = "fileAssociation_example"; // String | File association
        File _file2 = new File("/path/to/file"); // File | File to upload
        String fileName2 = "fileName_example"; // String | File name
        String isPublic2 = "isPublic_example"; // String | Is public
        String fileAssociation2 = "fileAssociation_example"; // String | File association
        String contactId = "contactId_example"; // String | Contact ID
        String contactId2 = "contactId_example"; // String | Contact ID. Required if the `file_association` is CONTACT
        try {
            FileMetadata result = apiInstance.createFile(_file, fileName, isPublic, fileAssociation, _file2, fileName2, isPublic2, fileAssociation2, contactId, contactId2);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#createFile");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **_file** | **File**| File to upload. This is a file sent as multi-part (not a string) | |
| **fileName** | **String**| File name | |
| **isPublic** | **Boolean**| Is public | |
| **fileAssociation** | **String**| File association | |
| **_file2** | **File**| File to upload | |
| **fileName2** | **String**| File name | |
| **isPublic2** | **String**| Is public | |
| **fileAssociation2** | **String**| File association | |
| **contactId** | **String**| Contact ID | [optional] |
| **contactId2** | **String**| Contact ID. Required if the &#x60;file_association&#x60; is CONTACT | [optional] |

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

## createFileWithHttpInfo

> ApiResponse<FileMetadata> createFile createFileWithHttpInfo(_file, fileName, isPublic, fileAssociation, _file2, fileName2, isPublic2, fileAssociation2, contactId, contactId2)

Create a file

Creates a file and uploads it

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        File _file = new File("/path/to/file"); // File | File to upload. This is a file sent as multi-part (not a string)
        String fileName = "fileName_example"; // String | File name
        Boolean isPublic = true; // Boolean | Is public
        String fileAssociation = "fileAssociation_example"; // String | File association
        File _file2 = new File("/path/to/file"); // File | File to upload
        String fileName2 = "fileName_example"; // String | File name
        String isPublic2 = "isPublic_example"; // String | Is public
        String fileAssociation2 = "fileAssociation_example"; // String | File association
        String contactId = "contactId_example"; // String | Contact ID
        String contactId2 = "contactId_example"; // String | Contact ID. Required if the `file_association` is CONTACT
        try {
            ApiResponse<FileMetadata> response = apiInstance.createFileWithHttpInfo(_file, fileName, isPublic, fileAssociation, _file2, fileName2, isPublic2, fileAssociation2, contactId, contactId2);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#createFile");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **_file** | **File**| File to upload. This is a file sent as multi-part (not a string) | |
| **fileName** | **String**| File name | |
| **isPublic** | **Boolean**| Is public | |
| **fileAssociation** | **String**| File association | |
| **_file2** | **File**| File to upload | |
| **fileName2** | **String**| File name | |
| **isPublic2** | **String**| Is public | |
| **fileAssociation2** | **String**| File association | |
| **contactId** | **String**| Contact ID | [optional] |
| **contactId2** | **String**| Contact ID. Required if the &#x60;file_association&#x60; is CONTACT | [optional] |

### Return type

ApiResponse<[**FileMetadata**](FileMetadata.md)>


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


## deleteFile

> void deleteFile(fileId)

Delete a file

Deletes a specified file

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | 
        try {
            apiInstance.deleteFile(fileId);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#deleteFile");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileId** | **String**|  | |

### Return type


null (empty response body)

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

## deleteFileWithHttpInfo

> ApiResponse<Void> deleteFile deleteFileWithHttpInfo(fileId)

Delete a file

Deletes a specified file

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteFileWithHttpInfo(fileId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#deleteFile");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileId** | **String**|  | |

### Return type


ApiResponse<Void>

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


## getFile

> FileMetadata getFile(fileId)

Retrieve a file

Retrieves a file

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | 
        try {
            FileMetadata result = apiInstance.getFile(fileId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#getFile");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileId** | **String**|  | |

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

## getFileWithHttpInfo

> ApiResponse<FileMetadata> getFile getFileWithHttpInfo(fileId)

Retrieve a file

Retrieves a file

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | 
        try {
            ApiResponse<FileMetadata> response = apiInstance.getFileWithHttpInfo(fileId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#getFile");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileId** | **String**|  | |

### Return type

ApiResponse<[**FileMetadata**](FileMetadata.md)>


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


## getFileData

> byte[] getFileData(fileId)

Retrieve a file&#39;s data

Retrieves a file&#39;s data

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | 
        try {
            byte[] result = apiInstance.getFileData(fileId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#getFileData");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileId** | **String**|  | |

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

## getFileDataWithHttpInfo

> ApiResponse<byte[]> getFileData getFileDataWithHttpInfo(fileId)

Retrieve a file&#39;s data

Retrieves a file&#39;s data

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | 
        try {
            ApiResponse<byte[]> response = apiInstance.getFileDataWithHttpInfo(fileId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#getFileData");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileId** | **String**|  | |

### Return type

ApiResponse<**byte[]**>


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


## listFiles

> ListFilesResponse listFiles(filter, orderBy, pageSize, pageToken)

List all files

Retrieves a list of files

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (Boolean) `is_public` - (String) `contact_id` - (String) `user_id` - (FileBoxCategory) `category` - (FileBoxType) `file_box_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `file_name` - `updated_time` - ...  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListFilesResponse result = apiInstance.listFiles(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#listFiles");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filter** | **String**| Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

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

## listFilesWithHttpInfo

> ApiResponse<ListFilesResponse> listFiles listFilesWithHttpInfo(filter, orderBy, pageSize, pageToken)

List all files

Retrieves a list of files

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (Boolean) `is_public` - (String) `contact_id` - (String) `user_id` - (FileBoxCategory) `category` - (FileBoxType) `file_box_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `file_name` - `updated_time` - ...  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListFilesResponse> response = apiInstance.listFilesWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#listFiles");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filter** | **String**| Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListFilesResponse**](ListFilesResponse.md)>


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


## updateFile

> FileMetadata updateFile(fileId, updateMask, _file, fileName, isPublic, _file2, fileName2, isPublic2)

Update a file

Updates a file. Note that this endpoint is using a POST method instead of PATCH.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        File _file = new File("/path/to/file"); // File | File to upload. This is a file sent as multi-part (not a string)
        String fileName = "fileName_example"; // String | File name
        Boolean isPublic = true; // Boolean | Is public
        File _file2 = new File("/path/to/file"); // File | File to upload
        String fileName2 = "fileName_example"; // String | File name
        Boolean isPublic2 = true; // Boolean | Is public
        try {
            FileMetadata result = apiInstance.updateFile(fileId, updateMask, _file, fileName, isPublic, _file2, fileName2, isPublic2);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#updateFile");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileId** | **String**|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |
| **_file** | **File**| File to upload. This is a file sent as multi-part (not a string) | [optional] |
| **fileName** | **String**| File name | [optional] |
| **isPublic** | **Boolean**| Is public | [optional] |
| **_file2** | **File**| File to upload | [optional] |
| **fileName2** | **String**| File name | [optional] |
| **isPublic2** | **Boolean**| Is public | [optional] |

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

## updateFileWithHttpInfo

> ApiResponse<FileMetadata> updateFile updateFileWithHttpInfo(fileId, updateMask, _file, fileName, isPublic, _file2, fileName2, isPublic2)

Update a file

Updates a file. Note that this endpoint is using a POST method instead of PATCH.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        File _file = new File("/path/to/file"); // File | File to upload. This is a file sent as multi-part (not a string)
        String fileName = "fileName_example"; // String | File name
        Boolean isPublic = true; // Boolean | Is public
        File _file2 = new File("/path/to/file"); // File | File to upload
        String fileName2 = "fileName_example"; // String | File name
        Boolean isPublic2 = true; // Boolean | Is public
        try {
            ApiResponse<FileMetadata> response = apiInstance.updateFileWithHttpInfo(fileId, updateMask, _file, fileName, isPublic, _file2, fileName2, isPublic2);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#updateFile");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fileId** | **String**|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |
| **_file** | **File**| File to upload. This is a file sent as multi-part (not a string) | [optional] |
| **fileName** | **String**| File name | [optional] |
| **isPublic** | **Boolean**| Is public | [optional] |
| **_file2** | **File**| File to upload | [optional] |
| **fileName2** | **String**| File name | [optional] |
| **isPublic2** | **Boolean**| Is public | [optional] |

### Return type

ApiResponse<[**FileMetadata**](FileMetadata.md)>


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

