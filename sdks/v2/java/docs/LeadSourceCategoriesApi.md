# LeadSourceCategoriesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLeadSourceCategory**](LeadSourceCategoriesApi.md#createLeadSourceCategory) | **POST** /v2/leadSourceCategories | Create a Lead Source Category |
| [**createLeadSourceCategoryWithHttpInfo**](LeadSourceCategoriesApi.md#createLeadSourceCategoryWithHttpInfo) | **POST** /v2/leadSourceCategories | Create a Lead Source Category |
| [**deleteLeadSourceCategory**](LeadSourceCategoriesApi.md#deleteLeadSourceCategory) | **DELETE** /v2/leadSourceCategories/{lead_source_category_id} | Delete a Lead Source Category |
| [**deleteLeadSourceCategoryWithHttpInfo**](LeadSourceCategoriesApi.md#deleteLeadSourceCategoryWithHttpInfo) | **DELETE** /v2/leadSourceCategories/{lead_source_category_id} | Delete a Lead Source Category |
| [**getLeadSourceCategory**](LeadSourceCategoriesApi.md#getLeadSourceCategory) | **GET** /v2/leadSourceCategories/{lead_source_category_id} | Retrieve a Lead Source Category |
| [**getLeadSourceCategoryWithHttpInfo**](LeadSourceCategoriesApi.md#getLeadSourceCategoryWithHttpInfo) | **GET** /v2/leadSourceCategories/{lead_source_category_id} | Retrieve a Lead Source Category |
| [**listLeadSourceCategories**](LeadSourceCategoriesApi.md#listLeadSourceCategories) | **GET** /v2/leadSourceCategories | List Lead Source Categories |
| [**listLeadSourceCategoriesWithHttpInfo**](LeadSourceCategoriesApi.md#listLeadSourceCategoriesWithHttpInfo) | **GET** /v2/leadSourceCategories | List Lead Source Categories |
| [**updateLeadSourceCategory**](LeadSourceCategoriesApi.md#updateLeadSourceCategory) | **PATCH** /v2/leadSourceCategories/{lead_source_category_id} | Update a Lead Source Category |
| [**updateLeadSourceCategoryWithHttpInfo**](LeadSourceCategoriesApi.md#updateLeadSourceCategoryWithHttpInfo) | **PATCH** /v2/leadSourceCategories/{lead_source_category_id} | Update a Lead Source Category |



## createLeadSourceCategory

> LeadSourceCategory createLeadSourceCategory(createUpdateLeadSourceCategoryRequest)

Create a Lead Source Category

Creates a new Lead Source Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        CreateUpdateLeadSourceCategoryRequest createUpdateLeadSourceCategoryRequest = new CreateUpdateLeadSourceCategoryRequest(); // CreateUpdateLeadSourceCategoryRequest | The request object to create a new lead source category
        try {
            LeadSourceCategory result = apiInstance.createLeadSourceCategory(createUpdateLeadSourceCategoryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#createLeadSourceCategory");
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
| **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| The request object to create a new lead source category | |

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

## createLeadSourceCategoryWithHttpInfo

> ApiResponse<LeadSourceCategory> createLeadSourceCategory createLeadSourceCategoryWithHttpInfo(createUpdateLeadSourceCategoryRequest)

Create a Lead Source Category

Creates a new Lead Source Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        CreateUpdateLeadSourceCategoryRequest createUpdateLeadSourceCategoryRequest = new CreateUpdateLeadSourceCategoryRequest(); // CreateUpdateLeadSourceCategoryRequest | The request object to create a new lead source category
        try {
            ApiResponse<LeadSourceCategory> response = apiInstance.createLeadSourceCategoryWithHttpInfo(createUpdateLeadSourceCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#createLeadSourceCategory");
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
| **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| The request object to create a new lead source category | |

### Return type

ApiResponse<[**LeadSourceCategory**](LeadSourceCategory.md)>


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |


## deleteLeadSourceCategory

> void deleteLeadSourceCategory(leadSourceCategoryId)

Delete a Lead Source Category

Deletes the specified Lead Source Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String leadSourceCategoryId = "leadSourceCategoryId_example"; // String | The ID of a lead source category
        try {
            apiInstance.deleteLeadSourceCategory(leadSourceCategoryId);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#deleteLeadSourceCategory");
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
| **leadSourceCategoryId** | **String**| The ID of a lead source category | |

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

## deleteLeadSourceCategoryWithHttpInfo

> ApiResponse<Void> deleteLeadSourceCategory deleteLeadSourceCategoryWithHttpInfo(leadSourceCategoryId)

Delete a Lead Source Category

Deletes the specified Lead Source Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String leadSourceCategoryId = "leadSourceCategoryId_example"; // String | The ID of a lead source category
        try {
            ApiResponse<Void> response = apiInstance.deleteLeadSourceCategoryWithHttpInfo(leadSourceCategoryId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#deleteLeadSourceCategory");
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
| **leadSourceCategoryId** | **String**| The ID of a lead source category | |

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


## getLeadSourceCategory

> LeadSourceCategory getLeadSourceCategory(leadSourceCategoryId)

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String leadSourceCategoryId = "leadSourceCategoryId_example"; // String | The ID of a lead source category
        try {
            LeadSourceCategory result = apiInstance.getLeadSourceCategory(leadSourceCategoryId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#getLeadSourceCategory");
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
| **leadSourceCategoryId** | **String**| The ID of a lead source category | |

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)


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

## getLeadSourceCategoryWithHttpInfo

> ApiResponse<LeadSourceCategory> getLeadSourceCategory getLeadSourceCategoryWithHttpInfo(leadSourceCategoryId)

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given ID

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String leadSourceCategoryId = "leadSourceCategoryId_example"; // String | The ID of a lead source category
        try {
            ApiResponse<LeadSourceCategory> response = apiInstance.getLeadSourceCategoryWithHttpInfo(leadSourceCategoryId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#getLeadSourceCategory");
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
| **leadSourceCategoryId** | **String**| The ID of a lead source category | |

### Return type

ApiResponse<[**LeadSourceCategory**](LeadSourceCategory.md)>


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


## listLeadSourceCategories

> ListLeadSourceCategoriesResponse listLeadSourceCategories(filter, orderBy, pageSize, pageToken)

List Lead Source Categories

Retrieves a list of Lead Source Categories

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `name`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here is an example:  - `filter=name%3D%3Dexample`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListLeadSourceCategoriesResponse result = apiInstance.listLeadSourceCategories(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#listLeadSourceCategories");
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
| **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListLeadSourceCategoriesResponse**](ListLeadSourceCategoriesResponse.md)


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

## listLeadSourceCategoriesWithHttpInfo

> ApiResponse<ListLeadSourceCategoriesResponse> listLeadSourceCategories listLeadSourceCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Lead Source Categories

Retrieves a list of Lead Source Categories

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:  - (String) `name`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here is an example:  - `filter=name%3D%3Dexample`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListLeadSourceCategoriesResponse> response = apiInstance.listLeadSourceCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#listLeadSourceCategories");
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
| **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListLeadSourceCategoriesResponse**](ListLeadSourceCategoriesResponse.md)>


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |


## updateLeadSourceCategory

> LeadSourceCategory updateLeadSourceCategory(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask)

Update a Lead Source Category

Updates a Lead Source Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String leadSourceCategoryId = "leadSourceCategoryId_example"; // String | The ID of a lead source category
        CreateUpdateLeadSourceCategoryRequest createUpdateLeadSourceCategoryRequest = new CreateUpdateLeadSourceCategoryRequest(); // CreateUpdateLeadSourceCategoryRequest | The request object to update a lead source category
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            LeadSourceCategory result = apiInstance.updateLeadSourceCategory(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#updateLeadSourceCategory");
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
| **leadSourceCategoryId** | **String**| The ID of a lead source category | |
| **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| The request object to update a lead source category | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description] |

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

## updateLeadSourceCategoryWithHttpInfo

> ApiResponse<LeadSourceCategory> updateLeadSourceCategory updateLeadSourceCategoryWithHttpInfo(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask)

Update a Lead Source Category

Updates a Lead Source Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String leadSourceCategoryId = "leadSourceCategoryId_example"; // String | The ID of a lead source category
        CreateUpdateLeadSourceCategoryRequest createUpdateLeadSourceCategoryRequest = new CreateUpdateLeadSourceCategoryRequest(); // CreateUpdateLeadSourceCategoryRequest | The request object to update a lead source category
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<LeadSourceCategory> response = apiInstance.updateLeadSourceCategoryWithHttpInfo(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#updateLeadSourceCategory");
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
| **leadSourceCategoryId** | **String**| The ID of a lead source category | |
| **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| The request object to update a lead source category | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description] |

### Return type

ApiResponse<[**LeadSourceCategory**](LeadSourceCategory.md)>


### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

