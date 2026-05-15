# .LeadSourcesApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSource**](LeadSourcesApi.md#createLeadSource) | **POST** /rest/v2/leadSources | Create a Lead Source
[**deleteLeadSource**](LeadSourcesApi.md#deleteLeadSource) | **DELETE** /rest/v2/leadSources/{lead_source_id} | Delete a Lead Source
[**getLeadSource**](LeadSourcesApi.md#getLeadSource) | **GET** /rest/v2/leadSources/{lead_source_id} | Retrieve a Lead Source
[**listLeadSources**](LeadSourcesApi.md#listLeadSources) | **GET** /rest/v2/leadSources | List Lead Sources
[**updateLeadSource**](LeadSourcesApi.md#updateLeadSource) | **PATCH** /rest/v2/leadSources/{lead_source_id} | Update a Lead Source


# **createLeadSource**
> LeadSource createLeadSource(createLeadSourceRequest)

Creates a new Lead Source

### Example


```typescript
import { createConfiguration, LeadSourcesApi } from '';
import type { LeadSourcesApiCreateLeadSourceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourcesApi(configuration);

const request: LeadSourcesApiCreateLeadSourceRequest = {
  
  createLeadSourceRequest: {
    name: "Google Ads",
    description: "Paid search advertising",
    vendor: "Google",
    medium: "cpc",
    message: "Spring promotion",
    status: "ACTIVE",
    leadSourceCategoryId: "456",
    startTime: new Date('2024-01-01T00:00:00Z'),
    endTime: new Date('2024-12-31T23:59:59Z'),
  },
};

const data = await apiInstance.createLeadSource(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLeadSourceRequest** | **CreateLeadSourceRequest**|  |


### Return type

**LeadSource**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteLeadSource**
> void deleteLeadSource()

Deletes a Lead Source by ID

### Example


```typescript
import { createConfiguration, LeadSourcesApi } from '';
import type { LeadSourcesApiDeleteLeadSourceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourcesApi(configuration);

const request: LeadSourcesApiDeleteLeadSourceRequest = {
    // The ID of a lead source
  leadSourceId: "lead_source_id_example",
};

const data = await apiInstance.deleteLeadSource(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | [**string**] | The ID of a lead source | defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLeadSource**
> LeadSource getLeadSource()

Retrieves a Lead Source by ID

### Example


```typescript
import { createConfiguration, LeadSourcesApi } from '';
import type { LeadSourcesApiGetLeadSourceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourcesApi(configuration);

const request: LeadSourcesApiGetLeadSourceRequest = {
    // The ID of a lead source
  leadSourceId: "lead_source_id_example",
};

const data = await apiInstance.getLeadSource(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | [**string**] | The ID of a lead source | defaults to undefined


### Return type

**LeadSource**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLeadSources**
> ListLeadSourcesResponse listLeadSources()

Retrieves a list of Lead Sources

### Example


```typescript
import { createConfiguration, LeadSourcesApi } from '';
import type { LeadSourcesApiListLeadSourcesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourcesApi(configuration);

const request: LeadSourcesApiListLeadSourcesRequest = {
    // Filter to apply, allowed fields are:  - (String) `name` - (String) `status` - (String) `lead_source_category_id` - (String) `vendor` - (String) `medium` - (String) `start_time` - (String) `end_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=name%3D%3Dexample` - `filter=start_time%3D%3D2024-12-22T01:00:00.000Z` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields:  - `name` - `status` - `vendor` - `medium` - `start_time` - `end_time` - `create_time` - `update_time`  One of the following directions:  - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listLeadSources(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListLeadSourcesResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLeadSource**
> LeadSource updateLeadSource(createLeadSourceRequest)

Updates a Lead Source with only the values provided in the request

### Example


```typescript
import { createConfiguration, LeadSourcesApi } from '';
import type { LeadSourcesApiUpdateLeadSourceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourcesApi(configuration);

const request: LeadSourcesApiUpdateLeadSourceRequest = {
    // The ID of a lead source
  leadSourceId: "lead_source_id_example",
  
  createLeadSourceRequest: {
    name: "Google Ads",
    description: "Paid search advertising",
    vendor: "Google",
    medium: "cpc",
    message: "Spring promotion",
    status: "ACTIVE",
    leadSourceCategoryId: "456",
    startTime: new Date('2024-01-01T00:00:00Z'),
    endTime: new Date('2024-12-31T23:59:59Z'),
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateLeadSource(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLeadSourceRequest** | **CreateLeadSourceRequest**|  |
 **leadSourceId** | [**string**] | The ID of a lead source | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**LeadSource**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


