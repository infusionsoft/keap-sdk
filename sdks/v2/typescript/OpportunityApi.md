# .OpportunityApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOpportunityCustomFieldsUsingPOST**](OpportunityApi.md#createOpportunityCustomFieldsUsingPOST) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**createOpportunityStageUsingPOST**](OpportunityApi.md#createOpportunityStageUsingPOST) | **POST** /v2/opportunities/stages | Create an Opportunity Stage
[**createOpportunityUsingPOST1**](OpportunityApi.md#createOpportunityUsingPOST1) | **POST** /v2/opportunities | Create an Opportunity
[**deleteOpportunityStageUsingDELETE**](OpportunityApi.md#deleteOpportunityStageUsingDELETE) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**deleteOpportunityUsingDELETE**](OpportunityApi.md#deleteOpportunityUsingDELETE) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity
[**getOpportunityStageUsingGET**](OpportunityApi.md#getOpportunityStageUsingGET) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**getOpportunityUsingGET1**](OpportunityApi.md#getOpportunityUsingGET1) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**listOpportunitiesUsingGET1**](OpportunityApi.md#listOpportunitiesUsingGET1) | **GET** /v2/opportunities | List Opportunities
[**listOpportunityStagesUsingGET**](OpportunityApi.md#listOpportunityStagesUsingGET) | **GET** /v2/opportunities/stages | List of Opportunity Stages
[**updateOpportunityCustomFieldUsingPATCH**](OpportunityApi.md#updateOpportunityCustomFieldUsingPATCH) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity\&#39;s Custom Field
[**updateOpportunityStageUsingPATCH**](OpportunityApi.md#updateOpportunityStageUsingPATCH) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage
[**updateOpportunityUsingPATCH**](OpportunityApi.md#updateOpportunityUsingPATCH) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity


# **createOpportunityCustomFieldsUsingPOST**
> CustomFieldMetaData createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Opportunity object

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityCustomFieldsUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityCustomFieldsUsingPOSTRequest = {
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

const data = await apiInstance.createOpportunityCustomFieldsUsingPOST(request);
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

# **createOpportunityStageUsingPOST**
> RestOpportunityStage createOpportunityStageUsingPOST()

Creates a new Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityStageUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityStageUsingPOSTRequest = {
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

const data = await apiInstance.createOpportunityStageUsingPOST(request);
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

# **createOpportunityUsingPOST1**
> RestV2Opportunity createOpportunityUsingPOST1()

Creates a new opportunity as the authenticated user.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityUsingPOST1Request = {
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

const data = await apiInstance.createOpportunityUsingPOST1(request);
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

# **deleteOpportunityStageUsingDELETE**
> void deleteOpportunityStageUsingDELETE()

Deletes the specified Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiDeleteOpportunityStageUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiDeleteOpportunityStageUsingDELETERequest = {
    // stage_id
  stageId: "stage_id_example",
};

const data = await apiInstance.deleteOpportunityStageUsingDELETE(request);
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

# **deleteOpportunityUsingDELETE**
> void deleteOpportunityUsingDELETE()

Deletes the specified Opportunity

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiDeleteOpportunityUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiDeleteOpportunityUsingDELETERequest = {
    // opportunity_id
  opportunityId: "opportunity_id_example",
};

const data = await apiInstance.deleteOpportunityUsingDELETE(request);
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

# **getOpportunityStageUsingGET**
> RestOpportunityStage getOpportunityStageUsingGET()

Retrieves the specified Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiGetOpportunityStageUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiGetOpportunityStageUsingGETRequest = {
    // stage_id
  stageId: "stage_id_example",
};

const data = await apiInstance.getOpportunityStageUsingGET(request);
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

# **getOpportunityUsingGET1**
> RestV2Opportunity getOpportunityUsingGET1()

Retrieves the specified Opportunity

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiGetOpportunityUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiGetOpportunityUsingGET1Request = {
    // opportunity_id
  opportunityId: "opportunity_id_example",
};

const data = await apiInstance.getOpportunityUsingGET1(request);
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

# **listOpportunitiesUsingGET1**
> ListOpportunitiesResponse listOpportunitiesUsingGET1()

Retrieves a list of all Opportunities.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiListOpportunitiesUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiListOpportunitiesUsingGET1Request = {
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

const data = await apiInstance.listOpportunitiesUsingGET1(request);
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

# **listOpportunityStagesUsingGET**
> ListOpportunityStagesResponse listOpportunityStagesUsingGET()

Retrieves a list of Opportunity Stages.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiListOpportunityStagesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiListOpportunityStagesUsingGETRequest = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order stage items. One of the following fields: - `stage_order`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOpportunityStagesUsingGET(request);
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

# **updateOpportunityCustomFieldUsingPATCH**
> CustomFieldMetaData updateOpportunityCustomFieldUsingPATCH(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Opportunity object.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiUpdateOpportunityCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiUpdateOpportunityCustomFieldUsingPATCHRequest = {
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

const data = await apiInstance.updateOpportunityCustomFieldUsingPATCH(request);
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

# **updateOpportunityStageUsingPATCH**
> RestOpportunityStage updateOpportunityStageUsingPATCH(updateOpportunityStageRequest)

Updates specified values of a given Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiUpdateOpportunityStageUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiUpdateOpportunityStageUsingPATCHRequest = {
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

const data = await apiInstance.updateOpportunityStageUsingPATCH(request);
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

# **updateOpportunityUsingPATCH**
> RestV2Opportunity updateOpportunityUsingPATCH(updateOpportunityRequestV2)

Updates specified values of a given opportunity

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiUpdateOpportunityUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiUpdateOpportunityUsingPATCHRequest = {
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

const data = await apiInstance.updateOpportunityUsingPATCH(request);
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


