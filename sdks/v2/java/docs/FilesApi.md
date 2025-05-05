# FilesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFileUsingPOST1**](FilesApi.md#createFileUsingPOST1) | **POST** /v2/files | Create a file |
| [**createFileUsingPOST1WithHttpInfo**](FilesApi.md#createFileUsingPOST1WithHttpInfo) | **POST** /v2/files | Create a file |
| [**deleteFileUsingDELETE1**](FilesApi.md#deleteFileUsingDELETE1) | **DELETE** /v2/files/{file_id} | Delete a file |
| [**deleteFileUsingDELETE1WithHttpInfo**](FilesApi.md#deleteFileUsingDELETE1WithHttpInfo) | **DELETE** /v2/files/{file_id} | Delete a file |
| [**getFileDataUsingGET**](FilesApi.md#getFileDataUsingGET) | **GET** /v2/files/{file_id}:data | Retrieve a file&#39;s data |
| [**getFileDataUsingGETWithHttpInfo**](FilesApi.md#getFileDataUsingGETWithHttpInfo) | **GET** /v2/files/{file_id}:data | Retrieve a file&#39;s data |
| [**getFileUsingGET1**](FilesApi.md#getFileUsingGET1) | **GET** /v2/files/{file_id} | Retrieve a file |
| [**getFileUsingGET1WithHttpInfo**](FilesApi.md#getFileUsingGET1WithHttpInfo) | **GET** /v2/files/{file_id} | Retrieve a file |
| [**listFilesUsingGET1**](FilesApi.md#listFilesUsingGET1) | **GET** /v2/files | List all files |
| [**listFilesUsingGET1WithHttpInfo**](FilesApi.md#listFilesUsingGET1WithHttpInfo) | **GET** /v2/files | List all files |
| [**updateFileUsingPOST**](FilesApi.md#updateFileUsingPOST) | **POST** /v2/files/{file_id} | Update a file |
| [**updateFileUsingPOSTWithHttpInfo**](FilesApi.md#updateFileUsingPOSTWithHttpInfo) | **POST** /v2/files/{file_id} | Update a file |



## createFileUsingPOST1

> FileMetadata createFileUsingPOST1(_file, fileAssociation, fileName, isPublic, contactId)

Create a file

Creates a file and uploads it

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String _file = "_file_example"; // String | File to upload. This is a file sent as multi-part (not a string)
        String fileAssociation = "CONTACT"; // String | File association
        String fileName = "fileName_example"; // String | File name
        Boolean isPublic = true; // Boolean | Is public
        String contactId = "contactId_example"; // String | Contact ID
        try {
            FileMetadata result = apiInstance.createFileUsingPOST1(_file, fileAssociation, fileName, isPublic, contactId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#createFileUsingPOST1");
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
| **_file** | **String**| File to upload. This is a file sent as multi-part (not a string) | |
| **fileAssociation** | **String**| File association | [enum: CONTACT, USER, COMPANY] |
| **fileName** | **String**| File name | |
| **isPublic** | **Boolean**| Is public | |
| **contactId** | **String**| Contact ID | [optional] |

### Return type

[**FileMetadata**](FileMetadata.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## createFileUsingPOST1WithHttpInfo

> ApiResponse<FileMetadata> createFileUsingPOST1 createFileUsingPOST1WithHttpInfo(_file, fileAssociation, fileName, isPublic, contactId)

Create a file

Creates a file and uploads it

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String _file = "_file_example"; // String | File to upload. This is a file sent as multi-part (not a string)
        String fileAssociation = "CONTACT"; // String | File association
        String fileName = "fileName_example"; // String | File name
        Boolean isPublic = true; // Boolean | Is public
        String contactId = "contactId_example"; // String | Contact ID
        try {
            ApiResponse<FileMetadata> response = apiInstance.createFileUsingPOST1WithHttpInfo(_file, fileAssociation, fileName, isPublic, contactId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#createFileUsingPOST1");
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
| **_file** | **String**| File to upload. This is a file sent as multi-part (not a string) | |
| **fileAssociation** | **String**| File association | [enum: CONTACT, USER, COMPANY] |
| **fileName** | **String**| File name | |
| **isPublic** | **Boolean**| Is public | |
| **contactId** | **String**| Contact ID | [optional] |

### Return type

ApiResponse<[**FileMetadata**](FileMetadata.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |


## deleteFileUsingDELETE1

> void deleteFileUsingDELETE1(fileId)

Delete a file

Deletes a specified file

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | file_id
        try {
            apiInstance.deleteFileUsingDELETE1(fileId);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#deleteFileUsingDELETE1");
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
| **fileId** | **String**| file_id | |

### Return type


null (empty response body)

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
| **500** | Internal Server Error |  -  |

## deleteFileUsingDELETE1WithHttpInfo

> ApiResponse<Void> deleteFileUsingDELETE1 deleteFileUsingDELETE1WithHttpInfo(fileId)

Delete a file

Deletes a specified file

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | file_id
        try {
            ApiResponse<Void> response = apiInstance.deleteFileUsingDELETE1WithHttpInfo(fileId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#deleteFileUsingDELETE1");
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
| **fileId** | **String**| file_id | |

### Return type


ApiResponse<Void>

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
| **500** | Internal Server Error |  -  |


## getFileDataUsingGET

> byte[] getFileDataUsingGET(fileId)

Retrieve a file&#39;s data

Retrieves a file&#39;s data

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | file_id
        try {
            byte[] result = apiInstance.getFileDataUsingGET(fileId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#getFileDataUsingGET");
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
| **fileId** | **String**| file_id | |

### Return type

**byte[]**


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
| **500** | Internal Server Error |  -  |

## getFileDataUsingGETWithHttpInfo

> ApiResponse<byte[]> getFileDataUsingGET getFileDataUsingGETWithHttpInfo(fileId)

Retrieve a file&#39;s data

Retrieves a file&#39;s data

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | file_id
        try {
            ApiResponse<byte[]> response = apiInstance.getFileDataUsingGETWithHttpInfo(fileId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#getFileDataUsingGET");
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
| **fileId** | **String**| file_id | |

### Return type

ApiResponse<**byte[]**>


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
| **500** | Internal Server Error |  -  |


## getFileUsingGET1

> FileMetadata getFileUsingGET1(fileId)

Retrieve a file

Retrieves a file

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | file_id
        try {
            FileMetadata result = apiInstance.getFileUsingGET1(fileId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#getFileUsingGET1");
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
| **fileId** | **String**| file_id | |

### Return type

[**FileMetadata**](FileMetadata.md)


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
| **500** | Internal Server Error |  -  |

## getFileUsingGET1WithHttpInfo

> ApiResponse<FileMetadata> getFileUsingGET1 getFileUsingGET1WithHttpInfo(fileId)

Retrieve a file

Retrieves a file

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | file_id
        try {
            ApiResponse<FileMetadata> response = apiInstance.getFileUsingGET1WithHttpInfo(fileId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#getFileUsingGET1");
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
| **fileId** | **String**| file_id | |

### Return type

ApiResponse<[**FileMetadata**](FileMetadata.md)>


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
| **500** | Internal Server Error |  -  |


## listFilesUsingGET1

> ListFilesResponse listFilesUsingGET1(filter, orderBy, pageSize, pageToken)

List all files

Retrieves a list of files

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (Boolean) `is_public` - (String) `contact_id` - (String) `user_id` - (FileBoxCategory) `category` - (FileBoxType) `file_box_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `file_name` - `updated_time` - ...  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListFilesResponse result = apiInstance.listFilesUsingGET1(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#listFilesUsingGET1");
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
| **500** | Internal Server Error |  -  |

## listFilesUsingGET1WithHttpInfo

> ApiResponse<ListFilesResponse> listFilesUsingGET1 listFilesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken)

List all files

Retrieves a list of files

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (Boolean) `is_public` - (String) `contact_id` - (String) `user_id` - (FileBoxCategory) `category` - (FileBoxType) `file_box_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `file_name` - `updated_time` - ...  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListFilesResponse> response = apiInstance.listFilesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#listFilesUsingGET1");
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
| **500** | Internal Server Error |  -  |


## updateFileUsingPOST

> FileMetadata updateFileUsingPOST(fileId, _file, fileName, isPublic, updateMask)

Update a file

Updates a file. Note that this endpoint is using a POST method instead of PATCH.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | file_id
        String _file = "_file_example"; // String | File to upload. This is a file sent as multi-part (not a string)
        String fileName = "fileName_example"; // String | File name
        Boolean isPublic = true; // Boolean | Is public
        String updateMask = "file"; // String | Update Mask
        try {
            FileMetadata result = apiInstance.updateFileUsingPOST(fileId, _file, fileName, isPublic, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#updateFileUsingPOST");
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
| **fileId** | **String**| file_id | |
| **_file** | **String**| File to upload. This is a file sent as multi-part (not a string) | [optional] |
| **fileName** | **String**| File name | [optional] |
| **isPublic** | **Boolean**| Is public | [optional] |
| **updateMask** | **String**| Update Mask | [optional] [enum: file, file_name, is_public] |

### Return type

[**FileMetadata**](FileMetadata.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## updateFileUsingPOSTWithHttpInfo

> ApiResponse<FileMetadata> updateFileUsingPOST updateFileUsingPOSTWithHttpInfo(fileId, _file, fileName, isPublic, updateMask)

Update a file

Updates a file. Note that this endpoint is using a POST method instead of PATCH.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.FilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        FilesApi apiInstance = new FilesApi(defaultClient);
        String fileId = "fileId_example"; // String | file_id
        String _file = "_file_example"; // String | File to upload. This is a file sent as multi-part (not a string)
        String fileName = "fileName_example"; // String | File name
        Boolean isPublic = true; // Boolean | Is public
        String updateMask = "file"; // String | Update Mask
        try {
            ApiResponse<FileMetadata> response = apiInstance.updateFileUsingPOSTWithHttpInfo(fileId, _file, fileName, isPublic, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FilesApi#updateFileUsingPOST");
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
| **fileId** | **String**| file_id | |
| **_file** | **String**| File to upload. This is a file sent as multi-part (not a string) | [optional] |
| **fileName** | **String**| File name | [optional] |
| **isPublic** | **Boolean**| Is public | [optional] |
| **updateMask** | **String**| Update Mask | [optional] [enum: file, file_name, is_public] |

### Return type

ApiResponse<[**FileMetadata**](FileMetadata.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

