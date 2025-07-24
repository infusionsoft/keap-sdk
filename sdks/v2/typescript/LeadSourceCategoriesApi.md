# .LeadSourceCategoriesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceCategory**](LeadSourceCategoriesApi.md#createLeadSourceCategory) | **POST** /v2/leadSourceCategories | Create a Lead Source Category
[**deleteLeadSourceCategory**](LeadSourceCategoriesApi.md#deleteLeadSourceCategory) | **DELETE** /v2/leadSourceCategories/{lead_source_category_id} | Delete a Lead Source Category
[**getLeadSourceCategory**](LeadSourceCategoriesApi.md#getLeadSourceCategory) | **GET** /v2/leadSourceCategories/{lead_source_category_id} | Retrieve a Lead Source Category
[**listLeadSourceCategories**](LeadSourceCategoriesApi.md#listLeadSourceCategories) | **GET** /v2/leadSourceCategories | List Lead Source Categories
[**updateLeadSourceCategory**](LeadSourceCategoriesApi.md#updateLeadSourceCategory) | **PATCH** /v2/leadSourceCategories/{lead_source_category_id} | Update a Lead Source Category


# **createLeadSourceCategory**
> LeadSourceCategory createLeadSourceCategory(createUpdateLeadSourceCategoryRequest)

Creates a new Lead Source Category

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiCreateLeadSourceCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiCreateLeadSourceCategoryRequest = {
    // The request object to create a new lead source category
  createUpdateLeadSourceCategoryRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createLeadSourceCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateLeadSourceCategoryRequest** | **CreateUpdateLeadSourceCategoryRequest**| The request object to create a new lead source category |


### Return type

**LeadSourceCategory**

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteLeadSourceCategory**
> void deleteLeadSourceCategory()

Deletes the specified Lead Source Category

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiDeleteLeadSourceCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiDeleteLeadSourceCategoryRequest = {
    // The ID of a lead source category
  leadSourceCategoryId: "lead_source_category_id_example",
};

const data = await apiInstance.deleteLeadSourceCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceCategoryId** | [**string**] | The ID of a lead source category | defaults to undefined


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

# **getLeadSourceCategory**
> LeadSourceCategory getLeadSourceCategory()

Retrieves a single Lead Source Category for a given ID

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiGetLeadSourceCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiGetLeadSourceCategoryRequest = {
    // The ID of a lead source category
  leadSourceCategoryId: "lead_source_category_id_example",
};

const data = await apiInstance.getLeadSourceCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceCategoryId** | [**string**] | The ID of a lead source category | defaults to undefined


### Return type

**LeadSourceCategory**

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

# **listLeadSourceCategories**
> ListLeadSourceCategoriesResponse listLeadSourceCategories()

Retrieves a list of Lead Source Categories

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiListLeadSourceCategoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiListLeadSourceCategoriesRequest = {
    // Filter to apply, allowed fields are:  - (String) `name`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here is an example:  - `filter=name%3D%3Dexample` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listLeadSourceCategories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListLeadSourceCategoriesResponse**

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLeadSourceCategory**
> LeadSourceCategory updateLeadSourceCategory(createUpdateLeadSourceCategoryRequest)

Updates a Lead Source Category

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiUpdateLeadSourceCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiUpdateLeadSourceCategoryRequest = {
    // The ID of a lead source category
  leadSourceCategoryId: "lead_source_category_id_example",
    // The request object to update a lead source category
  createUpdateLeadSourceCategoryRequest: {
    description: "description_example",
    name: "name_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateLeadSourceCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateLeadSourceCategoryRequest** | **CreateUpdateLeadSourceCategoryRequest**| The request object to update a lead source category |
 **leadSourceCategoryId** | [**string**] | The ID of a lead source category | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**LeadSourceCategory**

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


