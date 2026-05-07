# .OpportunityApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOpportunity**](OpportunityApi.md#createOpportunity) | **POST** /rest/v2/opportunities | Create an Opportunity
[**createOpportunityCustomFields**](OpportunityApi.md#createOpportunityCustomFields) | **POST** /rest/v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**createOpportunityStage**](OpportunityApi.md#createOpportunityStage) | **POST** /rest/v2/opportunities/stages | Create an Opportunity Stage
[**deleteOpportunity**](OpportunityApi.md#deleteOpportunity) | **DELETE** /rest/v2/opportunities/{opportunity_id} | Delete an Opportunity
[**deleteOpportunityStage**](OpportunityApi.md#deleteOpportunityStage) | **DELETE** /rest/v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**getOpportunity**](OpportunityApi.md#getOpportunity) | **GET** /rest/v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**getOpportunityStage**](OpportunityApi.md#getOpportunityStage) | **GET** /rest/v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**listOpportunities**](OpportunityApi.md#listOpportunities) | **GET** /rest/v2/opportunities | List Opportunities
[**listOpportunityStages**](OpportunityApi.md#listOpportunityStages) | **GET** /rest/v2/opportunities/stages | List of Opportunity Stages
[**updateOpportunity**](OpportunityApi.md#updateOpportunity) | **PATCH** /rest/v2/opportunities/{opportunity_id} | Update an opportunity
[**updateOpportunityCustomField**](OpportunityApi.md#updateOpportunityCustomField) | **PATCH** /rest/v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity\&#39;s Custom Field
[**updateOpportunityStage**](OpportunityApi.md#updateOpportunityStage) | **PATCH** /rest/v2/opportunities/stages/{stage_id} | Update an Opportunity Stage


# **createOpportunity**
> RestV2Opportunity createOpportunity(createOpportunityRequest)

Creates a new opportunity as the authenticated user.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityRequest = {
  
  createOpportunityRequest: {
    opportunityTitle: "New Business Deal",
    nextActionTime: "2024-03-20T10:00:00Z",
    nextActionNotes: "Schedule demo call",
    opportunityNotes: "Prospect from website inquiry",
    estimatedCloseTime: "2024-04-15T00:00:00Z",
    includeInForecast: true,
    projectedRevenueLow: 5000,
    projectedRevenueHigh: 10000,
    contactId: "1001",
    stageId: "2",
    userId: "456",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
    affiliateId: "789",
  },
};

const data = await apiInstance.createOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityRequest** | **CreateOpportunityRequest**|  |


### Return type

**RestV2Opportunity**

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

# **createOpportunityCustomFields**
> CustomFieldMetaData createOpportunityCustomFields(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Opportunity object

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityCustomFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityCustomFieldsRequest = {
  
  createCustomFieldRequest: {
    label: "label_example",
    options: [
      {
        label: "label_example",
      },
    ],
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createOpportunityCustomFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**|  |


### Return type

**CustomFieldMetaData**

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

# **createOpportunityStage**
> RestOpportunityStage createOpportunityStage(createOpportunityStageRequest)

Creates a new Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityStageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityStageRequest = {
  
  createOpportunityStageRequest: {
    name: "Won",
    order: 5,
    targetNumberDays: 10,
    probability: 42,
    checklistItems: [
      {
        description: "description_example",
        required: true,
        order: 1,
      },
    ],
  },
};

const data = await apiInstance.createOpportunityStage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityStageRequest** | **CreateOpportunityStageRequest**|  |


### Return type

**RestOpportunityStage**

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

# **deleteOpportunity**
> void deleteOpportunity()

Deletes the specified Opportunity

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiDeleteOpportunityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiDeleteOpportunityRequest = {
  
  opportunityId: "opportunity_id_example",
};

const data = await apiInstance.deleteOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | [**string**] |  | defaults to undefined


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

# **deleteOpportunityStage**
> void deleteOpportunityStage()

Deletes the specified Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiDeleteOpportunityStageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiDeleteOpportunityStageRequest = {
  
  stageId: "stage_id_example",
};

const data = await apiInstance.deleteOpportunityStage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | [**string**] |  | defaults to undefined


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

# **getOpportunity**
> RestV2Opportunity getOpportunity()

Retrieves the specified Opportunity

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiGetOpportunityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiGetOpportunityRequest = {
  
  opportunityId: "opportunity_id_example",
};

const data = await apiInstance.getOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | [**string**] |  | defaults to undefined


### Return type

**RestV2Opportunity**

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

# **getOpportunityStage**
> RestOpportunityStage getOpportunityStage()

Retrieves the specified Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiGetOpportunityStageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiGetOpportunityStageRequest = {
  
  stageId: "stage_id_example",
};

const data = await apiInstance.getOpportunityStage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | [**string**] |  | defaults to undefined


### Return type

**RestOpportunityStage**

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

# **listOpportunities**
> ListOpportunitiesResponse listOpportunities()

Retrieves a list of all Opportunities.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiListOpportunitiesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiListOpportunitiesRequest = {
  
  fields: [
    "fields_example",
  ],
    // Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` - (String) `contact_id` - (String) `opportunity_title` — supports wildcard prefix search (e.g. `opportunity_title==Deal*`) - (String) `lead_source_name` — supports wildcard prefix search (e.g. `lead_source_name==Web*`) - (String) `affiliate_id` — exact match only (e.g. `affiliate_id==123`) - (String) `opportunity_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` - (String) `ids` — comma-separated list of opportunity IDs (e.g. `ids==1,2,3`), maximum 100 IDs Note: `opportunity_id` and `ids` cannot be used together in the same request.  (optional)
  filter: "filter_example",
    // Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_title` - `created_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOpportunities(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Set&lt;string&gt;** |  | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;opportunity_title&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_title&#x3D;&#x3D;Deal*&#x60;) - (String) &#x60;lead_source_name&#x60; — supports wildcard prefix search (e.g. &#x60;lead_source_name&#x3D;&#x3D;Web*&#x60;) - (String) &#x60;affiliate_id&#x60; — exact match only (e.g. &#x60;affiliate_id&#x3D;&#x3D;123&#x60;) - (String) &#x60;opportunity_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;ids&#x60; — comma-separated list of opportunity IDs (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;), maximum 100 IDs Note: &#x60;opportunity_id&#x60; and &#x60;ids&#x60; cannot be used together in the same request.  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_title&#x60; - &#x60;created_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOpportunitiesResponse**

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

# **listOpportunityStages**
> ListOpportunityStagesResponse listOpportunityStages()

Retrieves a list of Opportunity Stages.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiListOpportunityStagesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiListOpportunityStagesRequest = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order stage items. One of the following fields: - `stage_order`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOpportunityStages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOpportunityStagesResponse**

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

# **updateOpportunity**
> RestV2Opportunity updateOpportunity(updateOpportunityRequestV2)

Updates specified values of a given opportunity

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiUpdateOpportunityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiUpdateOpportunityRequest = {
  
  opportunityId: "opportunity_id_example",
  
  updateOpportunityRequestV2: {
    opportunityTitle: "New Business Deal",
    nextActionTime: "2024-03-20T10:00:00Z",
    nextActionNotes: "Schedule demo call",
    opportunityNotes: "Prospect from website inquiry",
    estimatedCloseTime: "2024-04-15T00:00:00Z",
    includeInForecast: true,
    projectedRevenueLow: 5000,
    projectedRevenueHigh: 10000,
    contactId: "1001",
    stageId: "2",
    userId: "456",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
    affiliateId: "789",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOpportunityRequestV2** | **UpdateOpportunityRequestV2**|  |
 **opportunityId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestV2Opportunity**

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

# **updateOpportunityCustomField**
> CustomFieldMetaData updateOpportunityCustomField(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Opportunity object.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiUpdateOpportunityCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiUpdateOpportunityCustomFieldRequest = {
  
  customFieldId: "custom_field_id_example",
  
  updateCustomFieldMetaDataRequest: {
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
      },
    ],
    groupId: "groupId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateOpportunityCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**|  |
 **customFieldId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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

# **updateOpportunityStage**
> RestOpportunityStage updateOpportunityStage(updateOpportunityStageRequest)

Updates specified values of a given Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiUpdateOpportunityStageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiUpdateOpportunityStageRequest = {
  
  stageId: "stage_id_example",
  
  updateOpportunityStageRequest: {
    name: "Qualified",
    order: 1,
    probability: 2,
    targetNumberDays: 1,
    checklistItems: [
      {
        id: "101",
        description: "Review contract terms",
        required: true,
        order: 1,
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateOpportunityStage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOpportunityStageRequest** | **UpdateOpportunityStageRequest**|  |
 **stageId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestOpportunityStage**

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


