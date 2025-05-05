# .LeadSourceCategoriesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceCategoryUsingPOST**](LeadSourceCategoriesApi.md#createLeadSourceCategoryUsingPOST) | **POST** /v2/leadSourceCategories | Create a Lead Source Category
[**deleteLeadSourceCategoryUsingDELETE**](LeadSourceCategoriesApi.md#deleteLeadSourceCategoryUsingDELETE) | **DELETE** /v2/leadSourceCategories/{lead_source_category_id} | Delete a Lead Source Category
[**getLeadSourceCategoryUsingGET**](LeadSourceCategoriesApi.md#getLeadSourceCategoryUsingGET) | **GET** /v2/leadSourceCategories/{lead_source_category_id} | Retrieve a Lead Source Category
[**listCategoriesUsingGET1**](LeadSourceCategoriesApi.md#listCategoriesUsingGET1) | **GET** /v2/leadSourceCategories | List Lead Source Categories
[**updateLeadSourceCategoryUsingPATCH**](LeadSourceCategoriesApi.md#updateLeadSourceCategoryUsingPATCH) | **PATCH** /v2/leadSourceCategories/{lead_source_category_id} | Update a Lead Source Category


# **createLeadSourceCategoryUsingPOST**
> LeadSourceCategory createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest)

Creates a new Lead Source Category

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiCreateLeadSourceCategoryUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiCreateLeadSourceCategoryUsingPOSTRequest = {
    // The request object to create a new lead source category
  createUpdateLeadSourceCategoryRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createLeadSourceCategoryUsingPOST(request);
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

# **deleteLeadSourceCategoryUsingDELETE**
> void deleteLeadSourceCategoryUsingDELETE()

Deletes the specified Lead Source Category

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiDeleteLeadSourceCategoryUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiDeleteLeadSourceCategoryUsingDELETERequest = {
    // The ID of a lead source category
  leadSourceCategoryId: "lead_source_category_id_example",
};

const data = await apiInstance.deleteLeadSourceCategoryUsingDELETE(request);
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

# **getLeadSourceCategoryUsingGET**
> LeadSourceCategory getLeadSourceCategoryUsingGET()

Retrieves a single Lead Source Category for a given ID

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiGetLeadSourceCategoryUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiGetLeadSourceCategoryUsingGETRequest = {
    // The ID of a lead source category
  leadSourceCategoryId: "lead_source_category_id_example",
};

const data = await apiInstance.getLeadSourceCategoryUsingGET(request);
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

# **listCategoriesUsingGET1**
> ListLeadSourceCategoriesResponse listCategoriesUsingGET1()

Retrieves a list of Lead Source Categories

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiListCategoriesUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiListCategoriesUsingGET1Request = {
    // Filter to apply, allowed fields are:  - (String) `name`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here is an example:  - `filter=name%3D%3Dexample` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listCategoriesUsingGET1(request);
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

# **updateLeadSourceCategoryUsingPATCH**
> LeadSourceCategory updateLeadSourceCategoryUsingPATCH(createUpdateLeadSourceCategoryRequest)

Updates a Lead Source Category

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiUpdateLeadSourceCategoryUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiUpdateLeadSourceCategoryUsingPATCHRequest = {
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

const data = await apiInstance.updateLeadSourceCategoryUsingPATCH(request);
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


