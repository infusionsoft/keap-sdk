# LeadSourcesApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLeadSource**](LeadSourcesApi.md#createLeadSource) | **POST** /rest/v2/leadSources | Create a Lead Source |
| [**createLeadSourceWithHttpInfo**](LeadSourcesApi.md#createLeadSourceWithHttpInfo) | **POST** /rest/v2/leadSources | Create a Lead Source |
| [**deleteLeadSource**](LeadSourcesApi.md#deleteLeadSource) | **DELETE** /rest/v2/leadSources/{lead_source_id} | Delete a Lead Source |
| [**deleteLeadSourceWithHttpInfo**](LeadSourcesApi.md#deleteLeadSourceWithHttpInfo) | **DELETE** /rest/v2/leadSources/{lead_source_id} | Delete a Lead Source |
| [**getLeadSource**](LeadSourcesApi.md#getLeadSource) | **GET** /rest/v2/leadSources/{lead_source_id} | Retrieve a Lead Source |
| [**getLeadSourceWithHttpInfo**](LeadSourcesApi.md#getLeadSourceWithHttpInfo) | **GET** /rest/v2/leadSources/{lead_source_id} | Retrieve a Lead Source |
| [**listLeadSources**](LeadSourcesApi.md#listLeadSources) | **GET** /rest/v2/leadSources | List Lead Sources |
| [**listLeadSourcesWithHttpInfo**](LeadSourcesApi.md#listLeadSourcesWithHttpInfo) | **GET** /rest/v2/leadSources | List Lead Sources |
| [**updateLeadSource**](LeadSourcesApi.md#updateLeadSource) | **PATCH** /rest/v2/leadSources/{lead_source_id} | Update a Lead Source |
| [**updateLeadSourceWithHttpInfo**](LeadSourcesApi.md#updateLeadSourceWithHttpInfo) | **PATCH** /rest/v2/leadSources/{lead_source_id} | Update a Lead Source |



## createLeadSource

> LeadSource createLeadSource(createLeadSourceRequest)

Create a Lead Source

Creates a new Lead Source

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        CreateLeadSourceRequest createLeadSourceRequest = new CreateLeadSourceRequest(); // CreateLeadSourceRequest | 
        try {
            LeadSource result = apiInstance.createLeadSource(createLeadSourceRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#createLeadSource");
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
| **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)|  | |

### Return type

[**LeadSource**](LeadSource.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createLeadSourceWithHttpInfo

> ApiResponse<LeadSource> createLeadSource createLeadSourceWithHttpInfo(createLeadSourceRequest)

Create a Lead Source

Creates a new Lead Source

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        CreateLeadSourceRequest createLeadSourceRequest = new CreateLeadSourceRequest(); // CreateLeadSourceRequest | 
        try {
            ApiResponse<LeadSource> response = apiInstance.createLeadSourceWithHttpInfo(createLeadSourceRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#createLeadSource");
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
| **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)|  | |

### Return type

ApiResponse<[**LeadSource**](LeadSource.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteLeadSource

> void deleteLeadSource(leadSourceId)

Delete a Lead Source

Deletes a Lead Source by ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
        try {
            apiInstance.deleteLeadSource(leadSourceId);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#deleteLeadSource");
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
| **leadSourceId** | **String**| The ID of a lead source | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteLeadSourceWithHttpInfo

> ApiResponse<Void> deleteLeadSource deleteLeadSourceWithHttpInfo(leadSourceId)

Delete a Lead Source

Deletes a Lead Source by ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
        try {
            ApiResponse<Void> response = apiInstance.deleteLeadSourceWithHttpInfo(leadSourceId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#deleteLeadSource");
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
| **leadSourceId** | **String**| The ID of a lead source | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getLeadSource

> LeadSource getLeadSource(leadSourceId)

Retrieve a Lead Source

Retrieves a Lead Source by ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
        try {
            LeadSource result = apiInstance.getLeadSource(leadSourceId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#getLeadSource");
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
| **leadSourceId** | **String**| The ID of a lead source | |

### Return type

[**LeadSource**](LeadSource.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getLeadSourceWithHttpInfo

> ApiResponse<LeadSource> getLeadSource getLeadSourceWithHttpInfo(leadSourceId)

Retrieve a Lead Source

Retrieves a Lead Source by ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
        try {
            ApiResponse<LeadSource> response = apiInstance.getLeadSourceWithHttpInfo(leadSourceId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#getLeadSource");
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
| **leadSourceId** | **String**| The ID of a lead source | |

### Return type

ApiResponse<[**LeadSource**](LeadSource.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listLeadSources

> ListLeadSourcesResponse listLeadSources(filter, orderBy, pageSize, pageToken)

List Lead Sources

Retrieves a list of Lead Sources

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `name` - (String) `status` - (String) `lead_source_category_id` - (String) `vendor` - (String) `medium` - (String) `start_time` - (String) `end_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=name%3D%3Dexample` - `filter=start_time%3D%3D2024-12-22T01:00:00.000Z`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields:  - `name` - `status` - `vendor` - `medium` - `start_time` - `end_time` - `create_time` - `update_time`  One of the following directions:  - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListLeadSourcesResponse result = apiInstance.listLeadSources(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#listLeadSources");
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
| **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listLeadSourcesWithHttpInfo

> ApiResponse<ListLeadSourcesResponse> listLeadSources listLeadSourcesWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Lead Sources

Retrieves a list of Lead Sources

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `name` - (String) `status` - (String) `lead_source_category_id` - (String) `vendor` - (String) `medium` - (String) `start_time` - (String) `end_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=name%3D%3Dexample` - `filter=start_time%3D%3D2024-12-22T01:00:00.000Z`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields:  - `name` - `status` - `vendor` - `medium` - `start_time` - `end_time` - `create_time` - `update_time`  One of the following directions:  - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListLeadSourcesResponse> response = apiInstance.listLeadSourcesWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#listLeadSources");
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
| **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateLeadSource

> LeadSource updateLeadSource(leadSourceId, createLeadSourceRequest, updateMask)

Update a Lead Source

Updates a Lead Source with only the values provided in the request

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
        CreateLeadSourceRequest createLeadSourceRequest = new CreateLeadSourceRequest(); // CreateLeadSourceRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            LeadSource result = apiInstance.updateLeadSource(leadSourceId, createLeadSourceRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#updateLeadSource");
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
| **leadSourceId** | **String**| The ID of a lead source | |
| **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**LeadSource**](LeadSource.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateLeadSourceWithHttpInfo

> ApiResponse<LeadSource> updateLeadSource updateLeadSourceWithHttpInfo(leadSourceId, createLeadSourceRequest, updateMask)

Update a Lead Source

Updates a Lead Source with only the values provided in the request

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        String leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
        CreateLeadSourceRequest createLeadSourceRequest = new CreateLeadSourceRequest(); // CreateLeadSourceRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<LeadSource> response = apiInstance.updateLeadSourceWithHttpInfo(leadSourceId, createLeadSourceRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#updateLeadSource");
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
| **leadSourceId** | **String**| The ID of a lead source | |
| **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

ApiResponse<[**LeadSource**](LeadSource.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

