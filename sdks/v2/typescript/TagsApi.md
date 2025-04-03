# .TagsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyTagsUsingPOST**](TagsApi.md#applyTagsUsingPOST) | **POST** /v2/tags/{tag_id}/contacts:applyTags | Apply Tag
[**createTagCategoryUsingPOST1**](TagsApi.md#createTagCategoryUsingPOST1) | **POST** /v2/tags/categories | Create Tag Category
[**createTagUsingPOST1**](TagsApi.md#createTagUsingPOST1) | **POST** /v2/tags | Create Tag
[**deleteTagCategoryUsingDELETE**](TagsApi.md#deleteTagCategoryUsingDELETE) | **DELETE** /v2/tags/categories/{tag_category_id} | Delete Tag Category
[**deleteTagUsingDELETE**](TagsApi.md#deleteTagUsingDELETE) | **DELETE** /v2/tags/{tag_id} | Delete Tag
[**getCategoryUsingGET**](TagsApi.md#getCategoryUsingGET) | **GET** /v2/tags/categories/{tag_category_id} | Retrieve a Tag Category
[**getTagUsingGET1**](TagsApi.md#getTagUsingGET1) | **GET** /v2/tags/{tag_id} | Retrieve a Tag
[**listCompaniesForTagIdUsingGET1**](TagsApi.md#listCompaniesForTagIdUsingGET1) | **GET** /v2/tags/{tag_id}/companies | List Tagged Companies
[**listContactsWithTagIdUsingGET**](TagsApi.md#listContactsWithTagIdUsingGET) | **GET** /v2/tags/{tag_id}/contacts | List Tagged Contacts
[**listTagCategoriesUsingGET**](TagsApi.md#listTagCategoriesUsingGET) | **GET** /v2/tags/categories | List Tag Categories
[**listTagsUsingGET1**](TagsApi.md#listTagsUsingGET1) | **GET** /v2/tags | List Tags
[**removeTagsUsingPOST**](TagsApi.md#removeTagsUsingPOST) | **POST** /v2/tags/{tag_id}/contacts:removeTags | Remove Tags
[**updateTagCategoryUsingPATCH**](TagsApi.md#updateTagCategoryUsingPATCH) | **PATCH** /v2/tags/categories/{tag_category_id} | Update a Tag Category
[**updateTagUsingPATCH**](TagsApi.md#updateTagUsingPATCH) | **PATCH** /v2/tags/{tag_id} | Update a Tag


# **applyTagsUsingPOST**
> ApplyTagsResponse applyTagsUsingPOST(applyRemoveTagRequest)

Applies a Tag to a list of Contacts.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiApplyTagsUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiApplyTagsUsingPOSTRequest = {
    // tag_id
  tagId: "tag_id_example",
    // applyRemoveTagRequest
  applyRemoveTagRequest: {
    contactIds: [
      "contactIds_example",
    ],
  },
};

const data = await apiInstance.applyTagsUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applyRemoveTagRequest** | **ApplyRemoveTagRequest**| applyRemoveTagRequest |
 **tagId** | [**string**] | tag_id | defaults to undefined


### Return type

**ApplyTagsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTagCategoryUsingPOST1**
> Tag createTagCategoryUsingPOST1(createUpdateTagCategoryRequest)

Creates a new Tag Category.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiCreateTagCategoryUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiCreateTagCategoryUsingPOST1Request = {
    // request
  createUpdateTagCategoryRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createTagCategoryUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTagCategoryRequest** | **CreateUpdateTagCategoryRequest**| request |


### Return type

**Tag**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTagUsingPOST1**
> Tag createTagUsingPOST1(createUpdateTagRequest)

Creates a new Tag

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiCreateTagUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiCreateTagUsingPOST1Request = {
    // tag
  createUpdateTagRequest: {
    category: {
      id: "id_example",
    },
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createTagUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTagRequest** | **CreateUpdateTagRequest**| tag |


### Return type

**Tag**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTagCategoryUsingDELETE**
> void deleteTagCategoryUsingDELETE()

Deletes the specified Tag Category

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiDeleteTagCategoryUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiDeleteTagCategoryUsingDELETERequest = {
    // tag_category_id
  tagCategoryId: "tag_category_id_example",
};

const data = await apiInstance.deleteTagCategoryUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagCategoryId** | [**string**] | tag_category_id | defaults to undefined


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

# **deleteTagUsingDELETE**
> void deleteTagUsingDELETE()

Deletes a Tag.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiDeleteTagUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiDeleteTagUsingDELETERequest = {
    // tag_id
  tagId: "tag_id_example",
};

const data = await apiInstance.deleteTagUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] | tag_id | defaults to undefined


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

# **getCategoryUsingGET**
> GetTagCategoryResponse getCategoryUsingGET()

Returns information about the specified Tag Category

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiGetCategoryUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiGetCategoryUsingGETRequest = {
    // tag_category_id
  tagCategoryId: "tag_category_id_example",
};

const data = await apiInstance.getCategoryUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagCategoryId** | [**string**] | tag_category_id | defaults to undefined


### Return type

**GetTagCategoryResponse**

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

# **getTagUsingGET1**
> Tag getTagUsingGET1()

Retrieves information about the specified Tag

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiGetTagUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiGetTagUsingGET1Request = {
    // tag_id
  tagId: "tag_id_example",
};

const data = await apiInstance.getTagUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] | tag_id | defaults to undefined


### Return type

**Tag**

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

# **listCompaniesForTagIdUsingGET1**
> ListTaggedCompaniesResponse listCompaniesForTagIdUsingGET1()

Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiListCompaniesForTagIdUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiListCompaniesForTagIdUsingGET1Request = {
    // tag_id
  tagId: "tag_id_example",
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listCompaniesForTagIdUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] | tag_id | defaults to undefined
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListTaggedCompaniesResponse**

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

# **listContactsWithTagIdUsingGET**
> ListTaggedContactsResponse listContactsWithTagIdUsingGET()

Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiListContactsWithTagIdUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiListContactsWithTagIdUsingGETRequest = {
    // tag_id
  tagId: "tag_id_example",
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listContactsWithTagIdUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] | tag_id | defaults to undefined
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListTaggedContactsResponse**

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

# **listTagCategoriesUsingGET**
> ListTagCategoriesResponse listTagCategoriesUsingGET()

Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiListTagCategoriesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiListTagCategoriesUsingGETRequest = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listTagCategoriesUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListTagCategoriesResponse**

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

# **listTagsUsingGET1**
> ListTagsResponse listTagsUsingGET1()

Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiListTagsUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiListTagsUsingGET1Request = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listTagsUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListTagsResponse**

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

# **removeTagsUsingPOST**
> void removeTagsUsingPOST(applyRemoveTagRequest)

Removes a Tag from a list of Contacts.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiRemoveTagsUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiRemoveTagsUsingPOSTRequest = {
    // tag_id
  tagId: "tag_id_example",
    // applyRemoveTagRequest
  applyRemoveTagRequest: {
    contactIds: [
      "contactIds_example",
    ],
  },
};

const data = await apiInstance.removeTagsUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applyRemoveTagRequest** | **ApplyRemoveTagRequest**| applyRemoveTagRequest |
 **tagId** | [**string**] | tag_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTagCategoryUsingPATCH**
> UpdateTagCategoryResponse updateTagCategoryUsingPATCH()

Updates a Tag Category with only the values provided in the request

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiUpdateTagCategoryUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiUpdateTagCategoryUsingPATCHRequest = {
    // tag_category_id
  tagCategoryId: "tag_category_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
    // tagCategory (optional)
  createUpdateTagCategoryRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.updateTagCategoryUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTagCategoryRequest** | **CreateUpdateTagCategoryRequest**| tagCategory |
 **tagCategoryId** | [**string**] | tag_category_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**UpdateTagCategoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
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

# **updateTagUsingPATCH**
> UpdateTagResponse updateTagUsingPATCH()

Updates a Tag with only the values provided in the request

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiUpdateTagUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiUpdateTagUsingPATCHRequest = {
    // tag_id
  tagId: "tag_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
    // tag (optional)
  createUpdateTagRequest: {
    category: {
      id: "id_example",
    },
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.updateTagUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTagRequest** | **CreateUpdateTagRequest**| tag |
 **tagId** | [**string**] | tag_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**UpdateTagResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
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


