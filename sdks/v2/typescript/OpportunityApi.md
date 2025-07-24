# .OpportunityApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOpportunity**](OpportunityApi.md#createOpportunity) | **POST** /v2/opportunities | Create an Opportunity
[**createOpportunityCustomFields**](OpportunityApi.md#createOpportunityCustomFields) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**createOpportunityStage**](OpportunityApi.md#createOpportunityStage) | **POST** /v2/opportunities/stages | Create an Opportunity Stage
[**deleteOpportunity**](OpportunityApi.md#deleteOpportunity) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity
[**deleteOpportunityStage**](OpportunityApi.md#deleteOpportunityStage) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**getOpportunity**](OpportunityApi.md#getOpportunity) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**getOpportunityStage**](OpportunityApi.md#getOpportunityStage) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**listOpportunities**](OpportunityApi.md#listOpportunities) | **GET** /v2/opportunities | List Opportunities
[**listOpportunityStages**](OpportunityApi.md#listOpportunityStages) | **GET** /v2/opportunities/stages | List of Opportunity Stages
[**updateOpportunity**](OpportunityApi.md#updateOpportunity) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity
[**updateOpportunityCustomField**](OpportunityApi.md#updateOpportunityCustomField) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity\&#39;s Custom Field
[**updateOpportunityStage**](OpportunityApi.md#updateOpportunityStage) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage


# **createOpportunity**
> RestV2Opportunity createOpportunity()

Creates a new opportunity as the authenticated user.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityRequest = {
    // opportunity (optional)
  createOpportunityRequest: {
    affiliateId: "affiliateId_example",
    contactId: "contactId_example",
    customFields: [
      {
        content: {},
        id: "id_example",
      },
    ],
    estimatedCloseTime: "estimatedCloseTime_example",
    includeInForecast: true,
    nextActionNotes: "nextActionNotes_example",
    nextActionTime: "nextActionTime_example",
    opportunityNotes: "opportunityNotes_example",
    opportunityTitle: "opportunityTitle_example",
    projectedRevenueHigh: 3.14,
    projectedRevenueLow: 3.14,
    stageId: "stageId_example",
    userId: "userId_example",
  },
};

const data = await apiInstance.createOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityRequest** | **CreateOpportunityRequest**| opportunity |


### Return type

**RestV2Opportunity**

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
    // customField
  createCustomFieldRequest: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createOpportunityCustomFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

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

# **createOpportunityStage**
> RestOpportunityStage createOpportunityStage()

Creates a new Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityStageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityStageRequest = {
    // opportunity (optional)
  createOpportunityStageRequest: {
    checklistItems: [
      {
        description: "description_example",
        order: 1,
        required: false,
      },
    ],
    name: "Won",
    order: 1,
    probability: 1,
    targetNumberDays: 1,
  },
};

const data = await apiInstance.createOpportunityStage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityStageRequest** | **CreateOpportunityStageRequest**| opportunity |


### Return type

**RestOpportunityStage**

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
    // opportunity_id
  opportunityId: "opportunity_id_example",
};

const data = await apiInstance.deleteOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | [**string**] | opportunity_id | defaults to undefined


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
    // stage_id
  stageId: "stage_id_example",
};

const data = await apiInstance.deleteOpportunityStage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | [**string**] | stage_id | defaults to undefined


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
    // opportunity_id
  opportunityId: "opportunity_id_example",
};

const data = await apiInstance.getOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | [**string**] | opportunity_id | defaults to undefined


### Return type

**RestV2Opportunity**

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
    // stage_id
  stageId: "stage_id_example",
};

const data = await apiInstance.getOpportunityStage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | [**string**] | stage_id | defaults to undefined


### Return type

**RestOpportunityStage**

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
    // fields (optional)
  fields: [
    "fields_example",
  ],
    // Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id`  (optional)
  filter: "filter_example",
    // Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_name` - `created_time`  One of the following directions: - `asc` - `desc` (optional)
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
 **fields** | **Array&lt;string&gt;** | fields | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOpportunitiesResponse**

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
    // opportunity_id
  opportunityId: "opportunity_id_example",
    // request
  updateOpportunityRequestV2: {
    affiliateId: "affiliateId_example",
    contactId: "contactId_example",
    customFields: [
      {
        content: {},
        id: "id_example",
      },
    ],
    estimatedCloseTime: "estimatedCloseTime_example",
    includeInForecast: true,
    nextActionNotes: "nextActionNotes_example",
    nextActionTime: "nextActionTime_example",
    opportunityNotes: "opportunityNotes_example",
    opportunityTitle: "opportunityTitle_example",
    projectedRevenueHigh: 3.14,
    projectedRevenueLow: 3.14,
    stageId: "stageId_example",
    userId: "userId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "opportunity_title",
  ],
};

const data = await apiInstance.updateOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOpportunityRequestV2** | **UpdateOpportunityRequestV2**| request |
 **opportunityId** | [**string**] | opportunity_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestV2Opportunity**

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
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  updateCustomFieldMetaDataRequest: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateOpportunityCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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
    // stage_id
  stageId: "stage_id_example",
    // request
  updateOpportunityStageRequest: {
    checklistItems: [
      {
        description: "description_example",
        id: "id_example",
        order: 1,
        required: true,
      },
    ],
    name: "Qualified",
    order: 1,
    probability: 2,
    targetNumberDays: 1,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateOpportunityStage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOpportunityStageRequest** | **UpdateOpportunityStageRequest**| request |
 **stageId** | [**string**] | stage_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestOpportunityStage**

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


