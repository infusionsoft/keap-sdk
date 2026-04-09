# .TagsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyTags**](TagsApi.md#applyTags) | **POST** /rest/v2/tags/{tag_id}/contacts:applyTags | Apply Tag
[**createTag**](TagsApi.md#createTag) | **POST** /rest/v2/tags | Create Tag
[**createTagCategory**](TagsApi.md#createTagCategory) | **POST** /rest/v2/tags/categories | Create Tag Category
[**deleteTag**](TagsApi.md#deleteTag) | **DELETE** /rest/v2/tags/{tag_id} | Delete Tag
[**deleteTagCategory**](TagsApi.md#deleteTagCategory) | **DELETE** /rest/v2/tags/categories/{tag_category_id} | Delete Tag Category
[**getCategory**](TagsApi.md#getCategory) | **GET** /rest/v2/tags/categories/{tag_category_id} | Retrieve a Tag Category
[**getTag**](TagsApi.md#getTag) | **GET** /rest/v2/tags/{tag_id} | Retrieve a Tag
[**listCompaniesForTagId**](TagsApi.md#listCompaniesForTagId) | **GET** /rest/v2/tags/{tag_id}/companies | List Tagged Companies
[**listContactsWithTagId**](TagsApi.md#listContactsWithTagId) | **GET** /rest/v2/tags/{tag_id}/contacts | List Tagged Contacts
[**listTagCategories**](TagsApi.md#listTagCategories) | **GET** /rest/v2/tags/categories | List Tag Categories
[**listTags**](TagsApi.md#listTags) | **GET** /rest/v2/tags | List Tags
[**removeTags**](TagsApi.md#removeTags) | **POST** /rest/v2/tags/{tag_id}/contacts:removeTags | Remove Tags
[**updateTag**](TagsApi.md#updateTag) | **PATCH** /rest/v2/tags/{tag_id} | Update a Tag
[**updateTagCategory**](TagsApi.md#updateTagCategory) | **PATCH** /rest/v2/tags/categories/{tag_category_id} | Update a Tag Category


# **applyTags**
> ApplyTagsResponse applyTags(applyRemoveTagRequest)

Applies a Tag to a list of Contacts.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiApplyTagsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiApplyTagsRequest = {
  
  tagId: "tag_id_example",
  
  applyRemoveTagRequest: {
    contactIds: [123, 456],
  },
};

const data = await apiInstance.applyTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applyRemoveTagRequest** | **ApplyRemoveTagRequest**|  |
 **tagId** | [**string**] |  | defaults to undefined


### Return type

**ApplyTagsResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTag**
> Tag createTag(createUpdateTagRequest)

Creates a new Tag

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiCreateTagRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiCreateTagRequest = {
  
  createUpdateTagRequest: {
    name: "VIP Customer",
    description: "High-value customers",
    category: {
      id: "123",
    },
  },
};

const data = await apiInstance.createTag(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTagRequest** | **CreateUpdateTagRequest**|  |


### Return type

**Tag**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTagCategory**
> TagCategory createTagCategory(createUpdateTagCategoryRequest)

Creates a new Tag Category.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiCreateTagCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiCreateTagCategoryRequest = {
  
  createUpdateTagCategoryRequest: {
    name: "Customer Segments",
    description: "Tags for customer segmentation",
  },
};

const data = await apiInstance.createTagCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTagCategoryRequest** | **CreateUpdateTagCategoryRequest**|  |


### Return type

**TagCategory**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTag**
> void deleteTag()

Deletes a Tag.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiDeleteTagRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiDeleteTagRequest = {
  
  tagId: "tag_id_example",
};

const data = await apiInstance.deleteTag(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTagCategory**
> void deleteTagCategory()

Deletes the specified Tag Category

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiDeleteTagCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiDeleteTagCategoryRequest = {
  
  tagCategoryId: "tag_category_id_example",
};

const data = await apiInstance.deleteTagCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagCategoryId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategory**
> GetTagCategoryResponse getCategory()

Returns information about the specified Tag Category

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiGetCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiGetCategoryRequest = {
  
  tagCategoryId: "tag_category_id_example",
};

const data = await apiInstance.getCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagCategoryId** | [**string**] |  | defaults to undefined


### Return type

**GetTagCategoryResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTag**
> Tag getTag()

Retrieves information about the specified Tag

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiGetTagRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiGetTagRequest = {
  
  tagId: "tag_id_example",
};

const data = await apiInstance.getTag(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] |  | defaults to undefined


### Return type

**Tag**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCompaniesForTagId**
> ListTaggedCompaniesResponse listCompaniesForTagId()

Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiListCompaniesForTagIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiListCompaniesForTagIdRequest = {
  
  tagId: "tag_id_example",
    // Filter to apply, allowed fields are: - (String) `company_name` - (String) `email` - (String) `since_applied_time` - (String) `until_applied_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `email`, it will check for the non-existence of that field. For the filters listed above, here are some examples: - `filter=company_name%3D%3DCompany` - `filter=email%3D%3Dtest@gmail.com` - `filter=since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `company_name` - `email` - `applied_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listCompaniesForTagId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] |  | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;company_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListTaggedCompaniesResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listContactsWithTagId**
> ListTaggedContactsResponse listContactsWithTagId()

Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiListContactsWithTagIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiListContactsWithTagIdRequest = {
  
  tagId: "tag_id_example",
    // Filter to apply, allowed fields are: - (String) `given_name` - (String) `family_name` - (String) `email` - (String) `since_applied_time` - (String) `until_applied_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `email`, `given_name`, or `family_name`, it will check for the non-existence of that field. For the filters listed above, here are some examples: - `filter=given_name%3D%3DJohn` - `filter=family_name%3D%3DSmith` - `filter=email%3D%3DNONE` - `filter=since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `given_name` - `family_name` - `email` - `applied_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listContactsWithTagId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] |  | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, &#x60;given_name&#x60;, or &#x60;family_name&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DJohn&#x60; - &#x60;filter&#x3D;family_name%3D%3DSmith&#x60; - &#x60;filter&#x3D;email%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;given_name&#x60; - &#x60;family_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListTaggedContactsResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTagCategories**
> ListTagCategoriesResponse listTagCategories()

Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiListTagCategoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiListTagCategoriesRequest = {
    // Filter to apply, allowed fields are: - (String) `name` - (String) `description` - (String) `since_create_time` - (String) `until_create_time` - (String) `since_update_time` - (String) `until_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `name` or `description`, it will check for the non-existence of that field. For the filters listed above, here are some examples: - `filter=name%3D%3Dmy-tag-category` - `filter=description%3D%3DNONE` - `filter=since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listTagCategories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;name&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dmy-tag-category&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListTagCategoriesResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTags**
> ListTagsResponse listTags()

Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiListTagsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiListTagsRequest = {
    // Filter to apply, allowed fields are:  - (String) `name` - (String) `description` - (String) `category_id` - (String) `tag_ids` - (String) `since_create_time` - (String) `until_create_time` - (String) `since_update_time` - (String) `until_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `category_id` or `description`, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - `filter=name%3D%3Dmy-tag` - `filter=category_id%3D%3DNONE` - `filter=description%3D%3DNONE` - `filter=tag_ids%3D%3D1,2,3` - `filter=since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields:  - `name` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; - (String) &#x60;tag_ids&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;tag_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListTagsResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeTags**
> void removeTags(applyRemoveTagRequest)

Removes a Tag from a list of Contacts.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiRemoveTagsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiRemoveTagsRequest = {
  
  tagId: "tag_id_example",
  
  applyRemoveTagRequest: {
    contactIds: [123, 456],
  },
};

const data = await apiInstance.removeTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applyRemoveTagRequest** | **ApplyRemoveTagRequest**|  |
 **tagId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTag**
> UpdateTagResponse updateTag(createUpdateTagRequest)

Updates a Tag with only the values provided in the request

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiUpdateTagRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiUpdateTagRequest = {
  
  tagId: "tag_id_example",
  
  createUpdateTagRequest: {
    name: "VIP Customer",
    description: "High-value customers",
    category: {
      id: "123",
    },
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateTag(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTagRequest** | **CreateUpdateTagRequest**|  |
 **tagId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**UpdateTagResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTagCategory**
> UpdateTagCategoryResponse updateTagCategory(createUpdateTagCategoryRequest)

Updates a Tag Category with only the values provided in the request

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiUpdateTagCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiUpdateTagCategoryRequest = {
  
  tagCategoryId: "tag_category_id_example",
  
  createUpdateTagCategoryRequest: {
    name: "Customer Segments",
    description: "Tags for customer segmentation",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateTagCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTagCategoryRequest** | **CreateUpdateTagCategoryRequest**|  |
 **tagCategoryId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**UpdateTagCategoryResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


