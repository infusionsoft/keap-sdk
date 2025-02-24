# TagsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applyTagsUsingPOST**](TagsApi.md#applyTagsUsingPOST) | **POST** /v2/tags/{tag_id}/contacts:applyTags | Apply Tag |
| [**applyTagsUsingPOSTWithHttpInfo**](TagsApi.md#applyTagsUsingPOSTWithHttpInfo) | **POST** /v2/tags/{tag_id}/contacts:applyTags | Apply Tag |
| [**createTagCategoryUsingPOST1**](TagsApi.md#createTagCategoryUsingPOST1) | **POST** /v2/tags/categories | Create Tag Category |
| [**createTagCategoryUsingPOST1WithHttpInfo**](TagsApi.md#createTagCategoryUsingPOST1WithHttpInfo) | **POST** /v2/tags/categories | Create Tag Category |
| [**createTagUsingPOST1**](TagsApi.md#createTagUsingPOST1) | **POST** /v2/tags | Create Tag |
| [**createTagUsingPOST1WithHttpInfo**](TagsApi.md#createTagUsingPOST1WithHttpInfo) | **POST** /v2/tags | Create Tag |
| [**deleteTagCategoryUsingDELETE**](TagsApi.md#deleteTagCategoryUsingDELETE) | **DELETE** /v2/tags/categories/{tag_category_id} | Delete Tag Category |
| [**deleteTagCategoryUsingDELETEWithHttpInfo**](TagsApi.md#deleteTagCategoryUsingDELETEWithHttpInfo) | **DELETE** /v2/tags/categories/{tag_category_id} | Delete Tag Category |
| [**deleteTagUsingDELETE**](TagsApi.md#deleteTagUsingDELETE) | **DELETE** /v2/tags/{tag_id} | Delete Tag |
| [**deleteTagUsingDELETEWithHttpInfo**](TagsApi.md#deleteTagUsingDELETEWithHttpInfo) | **DELETE** /v2/tags/{tag_id} | Delete Tag |
| [**getCategoryUsingGET**](TagsApi.md#getCategoryUsingGET) | **GET** /v2/tags/categories/{tag_category_id} | Retrieve a Tag Category |
| [**getCategoryUsingGETWithHttpInfo**](TagsApi.md#getCategoryUsingGETWithHttpInfo) | **GET** /v2/tags/categories/{tag_category_id} | Retrieve a Tag Category |
| [**getTagUsingGET1**](TagsApi.md#getTagUsingGET1) | **GET** /v2/tags/{tag_id} | Retrieve a Tag |
| [**getTagUsingGET1WithHttpInfo**](TagsApi.md#getTagUsingGET1WithHttpInfo) | **GET** /v2/tags/{tag_id} | Retrieve a Tag |
| [**listCompaniesForTagIdUsingGET1**](TagsApi.md#listCompaniesForTagIdUsingGET1) | **GET** /v2/tags/{tag_id}/companies | List Tagged Companies |
| [**listCompaniesForTagIdUsingGET1WithHttpInfo**](TagsApi.md#listCompaniesForTagIdUsingGET1WithHttpInfo) | **GET** /v2/tags/{tag_id}/companies | List Tagged Companies |
| [**listContactsWithTagIdUsingGET**](TagsApi.md#listContactsWithTagIdUsingGET) | **GET** /v2/tags/{tag_id}/contacts | List Tagged Contacts |
| [**listContactsWithTagIdUsingGETWithHttpInfo**](TagsApi.md#listContactsWithTagIdUsingGETWithHttpInfo) | **GET** /v2/tags/{tag_id}/contacts | List Tagged Contacts |
| [**listTagCategoriesUsingGET**](TagsApi.md#listTagCategoriesUsingGET) | **GET** /v2/tags/categories | List Tag Categories |
| [**listTagCategoriesUsingGETWithHttpInfo**](TagsApi.md#listTagCategoriesUsingGETWithHttpInfo) | **GET** /v2/tags/categories | List Tag Categories |
| [**listTagsUsingGET1**](TagsApi.md#listTagsUsingGET1) | **GET** /v2/tags | List Tags |
| [**listTagsUsingGET1WithHttpInfo**](TagsApi.md#listTagsUsingGET1WithHttpInfo) | **GET** /v2/tags | List Tags |
| [**removeTagsUsingPOST**](TagsApi.md#removeTagsUsingPOST) | **POST** /v2/tags/{tag_id}/contacts:removeTags | Remove Tags |
| [**removeTagsUsingPOSTWithHttpInfo**](TagsApi.md#removeTagsUsingPOSTWithHttpInfo) | **POST** /v2/tags/{tag_id}/contacts:removeTags | Remove Tags |
| [**updateTagCategoryUsingPATCH**](TagsApi.md#updateTagCategoryUsingPATCH) | **PATCH** /v2/tags/categories/{tag_category_id} | Update a Tag Category |
| [**updateTagCategoryUsingPATCHWithHttpInfo**](TagsApi.md#updateTagCategoryUsingPATCHWithHttpInfo) | **PATCH** /v2/tags/categories/{tag_category_id} | Update a Tag Category |
| [**updateTagUsingPATCH**](TagsApi.md#updateTagUsingPATCH) | **PATCH** /v2/tags/{tag_id} | Update a Tag |
| [**updateTagUsingPATCHWithHttpInfo**](TagsApi.md#updateTagUsingPATCHWithHttpInfo) | **PATCH** /v2/tags/{tag_id} | Update a Tag |



## applyTagsUsingPOST

> ApplyTagsResponse applyTagsUsingPOST(tagId, applyRemoveTagRequest)

Apply Tag

Applies a Tag to a list of Contacts.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        ApplyRemoveTagRequest applyRemoveTagRequest = new ApplyRemoveTagRequest(); // ApplyRemoveTagRequest | applyRemoveTagRequest
        try {
            ApplyTagsResponse result = apiInstance.applyTagsUsingPOST(tagId, applyRemoveTagRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#applyTagsUsingPOST");
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
| **tagId** | **String**| tag_id | |
| **applyRemoveTagRequest** | [**ApplyRemoveTagRequest**](ApplyRemoveTagRequest.md)| applyRemoveTagRequest | |

### Return type

[**ApplyTagsResponse**](ApplyTagsResponse.md)


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

## applyTagsUsingPOSTWithHttpInfo

> ApiResponse<ApplyTagsResponse> applyTagsUsingPOST applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest)

Apply Tag

Applies a Tag to a list of Contacts.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        ApplyRemoveTagRequest applyRemoveTagRequest = new ApplyRemoveTagRequest(); // ApplyRemoveTagRequest | applyRemoveTagRequest
        try {
            ApiResponse<ApplyTagsResponse> response = apiInstance.applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#applyTagsUsingPOST");
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
| **tagId** | **String**| tag_id | |
| **applyRemoveTagRequest** | [**ApplyRemoveTagRequest**](ApplyRemoveTagRequest.md)| applyRemoveTagRequest | |

### Return type

ApiResponse<[**ApplyTagsResponse**](ApplyTagsResponse.md)>


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


## createTagCategoryUsingPOST1

> Tag createTagCategoryUsingPOST1(createUpdateTagCategoryRequest)

Create Tag Category

Creates a new Tag Category.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        CreateUpdateTagCategoryRequest createUpdateTagCategoryRequest = new CreateUpdateTagCategoryRequest(); // CreateUpdateTagCategoryRequest | request
        try {
            Tag result = apiInstance.createTagCategoryUsingPOST1(createUpdateTagCategoryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#createTagCategoryUsingPOST1");
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
| **createUpdateTagCategoryRequest** | [**CreateUpdateTagCategoryRequest**](CreateUpdateTagCategoryRequest.md)| request | |

### Return type

[**Tag**](Tag.md)


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

## createTagCategoryUsingPOST1WithHttpInfo

> ApiResponse<Tag> createTagCategoryUsingPOST1 createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest)

Create Tag Category

Creates a new Tag Category.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        CreateUpdateTagCategoryRequest createUpdateTagCategoryRequest = new CreateUpdateTagCategoryRequest(); // CreateUpdateTagCategoryRequest | request
        try {
            ApiResponse<Tag> response = apiInstance.createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#createTagCategoryUsingPOST1");
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
| **createUpdateTagCategoryRequest** | [**CreateUpdateTagCategoryRequest**](CreateUpdateTagCategoryRequest.md)| request | |

### Return type

ApiResponse<[**Tag**](Tag.md)>


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


## createTagUsingPOST1

> Tag createTagUsingPOST1(createUpdateTagRequest)

Create Tag

Creates a new Tag

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        CreateUpdateTagRequest createUpdateTagRequest = new CreateUpdateTagRequest(); // CreateUpdateTagRequest | tag
        try {
            Tag result = apiInstance.createTagUsingPOST1(createUpdateTagRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#createTagUsingPOST1");
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
| **createUpdateTagRequest** | [**CreateUpdateTagRequest**](CreateUpdateTagRequest.md)| tag | |

### Return type

[**Tag**](Tag.md)


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

## createTagUsingPOST1WithHttpInfo

> ApiResponse<Tag> createTagUsingPOST1 createTagUsingPOST1WithHttpInfo(createUpdateTagRequest)

Create Tag

Creates a new Tag

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        CreateUpdateTagRequest createUpdateTagRequest = new CreateUpdateTagRequest(); // CreateUpdateTagRequest | tag
        try {
            ApiResponse<Tag> response = apiInstance.createTagUsingPOST1WithHttpInfo(createUpdateTagRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#createTagUsingPOST1");
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
| **createUpdateTagRequest** | [**CreateUpdateTagRequest**](CreateUpdateTagRequest.md)| tag | |

### Return type

ApiResponse<[**Tag**](Tag.md)>


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


## deleteTagCategoryUsingDELETE

> void deleteTagCategoryUsingDELETE(tagCategoryId)

Delete Tag Category

Deletes the specified Tag Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
        try {
            apiInstance.deleteTagCategoryUsingDELETE(tagCategoryId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#deleteTagCategoryUsingDELETE");
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
| **tagCategoryId** | **String**| tag_category_id | |

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

## deleteTagCategoryUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteTagCategoryUsingDELETE deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId)

Delete Tag Category

Deletes the specified Tag Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
        try {
            ApiResponse<Void> response = apiInstance.deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#deleteTagCategoryUsingDELETE");
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
| **tagCategoryId** | **String**| tag_category_id | |

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


## deleteTagUsingDELETE

> void deleteTagUsingDELETE(tagId)

Delete Tag

Deletes a Tag.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        try {
            apiInstance.deleteTagUsingDELETE(tagId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#deleteTagUsingDELETE");
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
| **tagId** | **String**| tag_id | |

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

## deleteTagUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteTagUsingDELETE deleteTagUsingDELETEWithHttpInfo(tagId)

Delete Tag

Deletes a Tag.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        try {
            ApiResponse<Void> response = apiInstance.deleteTagUsingDELETEWithHttpInfo(tagId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#deleteTagUsingDELETE");
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
| **tagId** | **String**| tag_id | |

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


## getCategoryUsingGET

> GetTagCategoryResponse getCategoryUsingGET(tagCategoryId)

Retrieve a Tag Category

Returns information about the specified Tag Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
        try {
            GetTagCategoryResponse result = apiInstance.getCategoryUsingGET(tagCategoryId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#getCategoryUsingGET");
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
| **tagCategoryId** | **String**| tag_category_id | |

### Return type

[**GetTagCategoryResponse**](GetTagCategoryResponse.md)


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

## getCategoryUsingGETWithHttpInfo

> ApiResponse<GetTagCategoryResponse> getCategoryUsingGET getCategoryUsingGETWithHttpInfo(tagCategoryId)

Retrieve a Tag Category

Returns information about the specified Tag Category

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
        try {
            ApiResponse<GetTagCategoryResponse> response = apiInstance.getCategoryUsingGETWithHttpInfo(tagCategoryId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#getCategoryUsingGET");
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
| **tagCategoryId** | **String**| tag_category_id | |

### Return type

ApiResponse<[**GetTagCategoryResponse**](GetTagCategoryResponse.md)>


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


## getTagUsingGET1

> Tag getTagUsingGET1(tagId)

Retrieve a Tag

Retrieves information about the specified Tag

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        try {
            Tag result = apiInstance.getTagUsingGET1(tagId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#getTagUsingGET1");
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
| **tagId** | **String**| tag_id | |

### Return type

[**Tag**](Tag.md)


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

## getTagUsingGET1WithHttpInfo

> ApiResponse<Tag> getTagUsingGET1 getTagUsingGET1WithHttpInfo(tagId)

Retrieve a Tag

Retrieves information about the specified Tag

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        try {
            ApiResponse<Tag> response = apiInstance.getTagUsingGET1WithHttpInfo(tagId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#getTagUsingGET1");
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
| **tagId** | **String**| tag_id | |

### Return type

ApiResponse<[**Tag**](Tag.md)>


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


## listCompaniesForTagIdUsingGET1

> ListTaggedCompaniesResponse listCompaniesForTagIdUsingGET1(tagId, filter, orderBy, pageSize, pageToken)

List Tagged Companies

Retrieves a list of Companies that have the given Tag applied. To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListTaggedCompaniesResponse result = apiInstance.listCompaniesForTagIdUsingGET1(tagId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#listCompaniesForTagIdUsingGET1");
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
| **tagId** | **String**| tag_id | |
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListTaggedCompaniesResponse**](ListTaggedCompaniesResponse.md)


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

## listCompaniesForTagIdUsingGET1WithHttpInfo

> ApiResponse<ListTaggedCompaniesResponse> listCompaniesForTagIdUsingGET1 listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, filter, orderBy, pageSize, pageToken)

List Tagged Companies

Retrieves a list of Companies that have the given Tag applied. To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListTaggedCompaniesResponse> response = apiInstance.listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#listCompaniesForTagIdUsingGET1");
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
| **tagId** | **String**| tag_id | |
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListTaggedCompaniesResponse**](ListTaggedCompaniesResponse.md)>


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


## listContactsWithTagIdUsingGET

> ListTaggedContactsResponse listContactsWithTagIdUsingGET(tagId, filter, orderBy, pageSize, pageToken)

List Tagged Contacts

Retrieves a list of Contacts with the specified Tag To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListTaggedContactsResponse result = apiInstance.listContactsWithTagIdUsingGET(tagId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#listContactsWithTagIdUsingGET");
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
| **tagId** | **String**| tag_id | |
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListTaggedContactsResponse**](ListTaggedContactsResponse.md)


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

## listContactsWithTagIdUsingGETWithHttpInfo

> ApiResponse<ListTaggedContactsResponse> listContactsWithTagIdUsingGET listContactsWithTagIdUsingGETWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken)

List Tagged Contacts

Retrieves a list of Contacts with the specified Tag To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListTaggedContactsResponse> response = apiInstance.listContactsWithTagIdUsingGETWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#listContactsWithTagIdUsingGET");
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
| **tagId** | **String**| tag_id | |
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListTaggedContactsResponse**](ListTaggedContactsResponse.md)>


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


## listTagCategoriesUsingGET

> ListTagCategoriesResponse listTagCategoriesUsingGET(filter, orderBy, pageSize, pageToken)

List Tag Categories

Retrieves a list of defined Tag Categories To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListTagCategoriesResponse result = apiInstance.listTagCategoriesUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#listTagCategoriesUsingGET");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListTagCategoriesResponse**](ListTagCategoriesResponse.md)


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

## listTagCategoriesUsingGETWithHttpInfo

> ApiResponse<ListTagCategoriesResponse> listTagCategoriesUsingGET listTagCategoriesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Tag Categories

Retrieves a list of defined Tag Categories To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListTagCategoriesResponse> response = apiInstance.listTagCategoriesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#listTagCategoriesUsingGET");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListTagCategoriesResponse**](ListTagCategoriesResponse.md)>


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


## listTagsUsingGET1

> ListTagsResponse listTagsUsingGET1(filter, orderBy, pageSize, pageToken)

List Tags

Retrieves a list of Tags defined in the application To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListTagsResponse result = apiInstance.listTagsUsingGET1(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#listTagsUsingGET1");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListTagsResponse**](ListTagsResponse.md)


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

## listTagsUsingGET1WithHttpInfo

> ApiResponse<ListTagsResponse> listTagsUsingGET1 listTagsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken)

List Tags

Retrieves a list of Tags defined in the application To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListTagsResponse> response = apiInstance.listTagsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#listTagsUsingGET1");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListTagsResponse**](ListTagsResponse.md)>


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


## removeTagsUsingPOST

> void removeTagsUsingPOST(tagId, applyRemoveTagRequest)

Remove Tags

Removes a Tag from a list of Contacts.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        ApplyRemoveTagRequest applyRemoveTagRequest = new ApplyRemoveTagRequest(); // ApplyRemoveTagRequest | applyRemoveTagRequest
        try {
            apiInstance.removeTagsUsingPOST(tagId, applyRemoveTagRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#removeTagsUsingPOST");
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
| **tagId** | **String**| tag_id | |
| **applyRemoveTagRequest** | [**ApplyRemoveTagRequest**](ApplyRemoveTagRequest.md)| applyRemoveTagRequest | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

## removeTagsUsingPOSTWithHttpInfo

> ApiResponse<Void> removeTagsUsingPOST removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest)

Remove Tags

Removes a Tag from a list of Contacts.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        ApplyRemoveTagRequest applyRemoveTagRequest = new ApplyRemoveTagRequest(); // ApplyRemoveTagRequest | applyRemoveTagRequest
        try {
            ApiResponse<Void> response = apiInstance.removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#removeTagsUsingPOST");
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
| **tagId** | **String**| tag_id | |
| **applyRemoveTagRequest** | [**ApplyRemoveTagRequest**](ApplyRemoveTagRequest.md)| applyRemoveTagRequest | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |


## updateTagCategoryUsingPATCH

> UpdateTagCategoryResponse updateTagCategoryUsingPATCH(tagCategoryId, updateMask, createUpdateTagCategoryRequest)

Update a Tag Category

Updates a Tag Category with only the values provided in the request

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        CreateUpdateTagCategoryRequest createUpdateTagCategoryRequest = new CreateUpdateTagCategoryRequest(); // CreateUpdateTagCategoryRequest | tagCategory
        try {
            UpdateTagCategoryResponse result = apiInstance.updateTagCategoryUsingPATCH(tagCategoryId, updateMask, createUpdateTagCategoryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#updateTagCategoryUsingPATCH");
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
| **tagCategoryId** | **String**| tag_category_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description] |
| **createUpdateTagCategoryRequest** | [**CreateUpdateTagCategoryRequest**](CreateUpdateTagCategoryRequest.md)| tagCategory | [optional] |

### Return type

[**UpdateTagCategoryResponse**](UpdateTagCategoryResponse.md)


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

## updateTagCategoryUsingPATCHWithHttpInfo

> ApiResponse<UpdateTagCategoryResponse> updateTagCategoryUsingPATCH updateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, updateMask, createUpdateTagCategoryRequest)

Update a Tag Category

Updates a Tag Category with only the values provided in the request

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        CreateUpdateTagCategoryRequest createUpdateTagCategoryRequest = new CreateUpdateTagCategoryRequest(); // CreateUpdateTagCategoryRequest | tagCategory
        try {
            ApiResponse<UpdateTagCategoryResponse> response = apiInstance.updateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, updateMask, createUpdateTagCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#updateTagCategoryUsingPATCH");
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
| **tagCategoryId** | **String**| tag_category_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description] |
| **createUpdateTagCategoryRequest** | [**CreateUpdateTagCategoryRequest**](CreateUpdateTagCategoryRequest.md)| tagCategory | [optional] |

### Return type

ApiResponse<[**UpdateTagCategoryResponse**](UpdateTagCategoryResponse.md)>


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


## updateTagUsingPATCH

> UpdateTagResponse updateTagUsingPATCH(tagId, updateMask, createUpdateTagRequest)

Update a Tag

Updates a Tag with only the values provided in the request

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        CreateUpdateTagRequest createUpdateTagRequest = new CreateUpdateTagRequest(); // CreateUpdateTagRequest | tag
        try {
            UpdateTagResponse result = apiInstance.updateTagUsingPATCH(tagId, updateMask, createUpdateTagRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#updateTagUsingPATCH");
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
| **tagId** | **String**| tag_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description, category] |
| **createUpdateTagRequest** | [**CreateUpdateTagRequest**](CreateUpdateTagRequest.md)| tag | [optional] |

### Return type

[**UpdateTagResponse**](UpdateTagResponse.md)


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

## updateTagUsingPATCHWithHttpInfo

> ApiResponse<UpdateTagResponse> updateTagUsingPATCH updateTagUsingPATCHWithHttpInfo(tagId, updateMask, createUpdateTagRequest)

Update a Tag

Updates a Tag with only the values provided in the request

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.TagsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        TagsApi apiInstance = new TagsApi(defaultClient);
        String tagId = "tagId_example"; // String | tag_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        CreateUpdateTagRequest createUpdateTagRequest = new CreateUpdateTagRequest(); // CreateUpdateTagRequest | tag
        try {
            ApiResponse<UpdateTagResponse> response = apiInstance.updateTagUsingPATCHWithHttpInfo(tagId, updateMask, createUpdateTagRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TagsApi#updateTagUsingPATCH");
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
| **tagId** | **String**| tag_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description, category] |
| **createUpdateTagRequest** | [**CreateUpdateTagRequest**](CreateUpdateTagRequest.md)| tag | [optional] |

### Return type

ApiResponse<[**UpdateTagResponse**](UpdateTagResponse.md)>


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

