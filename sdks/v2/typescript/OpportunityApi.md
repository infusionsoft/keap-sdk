# .OpportunityApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOpportunity**](OpportunityApi.md#createOpportunity) | **POST** /rest/v2/opportunities | Create an Opportunity
[**createOpportunityCustomFieldGroup**](OpportunityApi.md#createOpportunityCustomFieldGroup) | **POST** /rest/v2/opportunities/model/customFields/groups | Create an Opportunity Custom Field Group
[**createOpportunityCustomFieldTab**](OpportunityApi.md#createOpportunityCustomFieldTab) | **POST** /rest/v2/opportunities/model/customFields/tabs | Create an Opportunity Custom Field Tab
[**createOpportunityCustomFields**](OpportunityApi.md#createOpportunityCustomFields) | **POST** /rest/v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**createOpportunityStage**](OpportunityApi.md#createOpportunityStage) | **POST** /rest/v2/opportunities/stages | Create an Opportunity Stage
[**deleteOpportunitiesCustomField**](OpportunityApi.md#deleteOpportunitiesCustomField) | **DELETE** /rest/v2/opportunities/model/customFields/{custom_field_id} | Delete an Opportunity Custom Field
[**deleteOpportunity**](OpportunityApi.md#deleteOpportunity) | **DELETE** /rest/v2/opportunities/{opportunity_id} | Delete an Opportunity
[**deleteOpportunityCustomFieldGroup**](OpportunityApi.md#deleteOpportunityCustomFieldGroup) | **DELETE** /rest/v2/opportunities/model/customFields/groups/{group_id} | Delete an Opportunity Custom Field Group
[**deleteOpportunityCustomFieldTab**](OpportunityApi.md#deleteOpportunityCustomFieldTab) | **DELETE** /rest/v2/opportunities/model/customFields/tabs/{tab_id} | Delete an Opportunity Custom Field Tab
[**deleteOpportunityStage**](OpportunityApi.md#deleteOpportunityStage) | **DELETE** /rest/v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**getOpportunity**](OpportunityApi.md#getOpportunity) | **GET** /rest/v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**getOpportunityCustomFieldGroup**](OpportunityApi.md#getOpportunityCustomFieldGroup) | **GET** /rest/v2/opportunities/model/customFields/groups/{group_id} | Retrieve an Opportunity Custom Field Group
[**getOpportunityCustomFieldTab**](OpportunityApi.md#getOpportunityCustomFieldTab) | **GET** /rest/v2/opportunities/model/customFields/tabs/{tab_id} | Retrieve an Opportunity Custom Field Tab
[**getOpportunityStage**](OpportunityApi.md#getOpportunityStage) | **GET** /rest/v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**getOpportunityStageMove**](OpportunityApi.md#getOpportunityStageMove) | **GET** /rest/v2/opportunities/stageMoves/{stage_move_id} | Retrieve an Opportunity Stage Move
[**listOpportunities**](OpportunityApi.md#listOpportunities) | **GET** /rest/v2/opportunities | List Opportunities
[**listOpportunityCustomFieldGroups**](OpportunityApi.md#listOpportunityCustomFieldGroups) | **GET** /rest/v2/opportunities/model/customFields/groups | List Opportunity Custom Field Groups
[**listOpportunityCustomFieldTabs**](OpportunityApi.md#listOpportunityCustomFieldTabs) | **GET** /rest/v2/opportunities/model/customFields/tabs | List Opportunity Custom Field Tabs
[**listOpportunityStageMoves**](OpportunityApi.md#listOpportunityStageMoves) | **GET** /rest/v2/opportunities/stageMoves | List Opportunity Stage Moves
[**listOpportunityStages**](OpportunityApi.md#listOpportunityStages) | **GET** /rest/v2/opportunities/stages | List of Opportunity Stages
[**retrieveOpportunityCustomFieldModel**](OpportunityApi.md#retrieveOpportunityCustomFieldModel) | **GET** /rest/v2/opportunities/model | Retrieve Opportunity Custom Field Model
[**updateOpportunity**](OpportunityApi.md#updateOpportunity) | **PATCH** /rest/v2/opportunities/{opportunity_id} | Update an opportunity
[**updateOpportunityCustomField**](OpportunityApi.md#updateOpportunityCustomField) | **PATCH** /rest/v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity\&#39;s Custom Field
[**updateOpportunityCustomFieldGroup**](OpportunityApi.md#updateOpportunityCustomFieldGroup) | **PATCH** /rest/v2/opportunities/model/customFields/groups/{group_id} | Update an Opportunity Custom Field Group
[**updateOpportunityCustomFieldTab**](OpportunityApi.md#updateOpportunityCustomFieldTab) | **PATCH** /rest/v2/opportunities/model/customFields/tabs/{tab_id} | Update an Opportunity Custom Field Tab
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
        content: null,
        id: "id_example",
      },
    ],
    affiliateId: "789",
  },
    // Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time (optional)
  fields: [
    "custom_fields",
  ],
};

const data = await apiInstance.createOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityRequest** | **CreateOpportunityRequest**|  |
 **fields** | **Array<&#39;custom_fields&#39; &#124; &#39;created_by&#39; &#124; &#39;last_updated_by&#39; &#124; &#39;status_id&#39; &#124; &#39;monthly_revenue&#39; &#124; &#39;order_revenue&#39; &#124; &#39;objection&#39; &#124; &#39;status&#39; &#124; &#39;stage_entrance_time&#39;>** | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | (optional) defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOpportunityCustomFieldGroup**
> CustomFieldGroup createOpportunityCustomFieldGroup(createCustomFieldGroupRequest)

Creates a new custom field group for the Opportunity record type. If `tab_id` is omitted, the group is added to the default \'Custom Fields\' tab.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityCustomFieldGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityCustomFieldGroupRequest = {
  
  createCustomFieldGroupRequest: {
    name: "name_example",
    tabId: "tabId_example",
  },
};

const data = await apiInstance.createOpportunityCustomFieldGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldGroupRequest** | **CreateCustomFieldGroupRequest**|  |


### Return type

**CustomFieldGroup**

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

# **createOpportunityCustomFieldTab**
> CustomFieldTab createOpportunityCustomFieldTab(createCustomFieldTabRequest)

Creates a new custom field tab for the Opportunity record type.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityCustomFieldTabRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityCustomFieldTabRequest = {
  
  createCustomFieldTabRequest: {
    name: "name_example",
  },
};

const data = await apiInstance.createOpportunityCustomFieldTab(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldTabRequest** | **CreateCustomFieldTabRequest**|  |


### Return type

**CustomFieldTab**

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
**405** | Method Not Allowed |  -  |
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOpportunitiesCustomField**
> void deleteOpportunitiesCustomField()

Deletes a Custom Field from Opportunity.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiDeleteOpportunitiesCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiDeleteOpportunitiesCustomFieldRequest = {
  
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteOpportunitiesCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOpportunityCustomFieldGroup**
> void deleteOpportunityCustomFieldGroup()

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiDeleteOpportunityCustomFieldGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiDeleteOpportunityCustomFieldGroupRequest = {
  
  groupId: "group_id_example",
};

const data = await apiInstance.deleteOpportunityCustomFieldGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined


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

# **deleteOpportunityCustomFieldTab**
> void deleteOpportunityCustomFieldTab()

Deletes a custom field tab. Returns 409 Conflict if the tab still contains groups.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiDeleteOpportunityCustomFieldTabRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiDeleteOpportunityCustomFieldTabRequest = {
  
  tabId: "tab_id_example",
};

const data = await apiInstance.deleteOpportunityCustomFieldTab(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | [**string**] |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
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
    // Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time (optional)
  fields: [
    "custom_fields",
  ],
};

const data = await apiInstance.getOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | [**string**] |  | defaults to undefined
 **fields** | **Array<&#39;custom_fields&#39; &#124; &#39;created_by&#39; &#124; &#39;last_updated_by&#39; &#124; &#39;status_id&#39; &#124; &#39;monthly_revenue&#39; &#124; &#39;order_revenue&#39; &#124; &#39;objection&#39; &#124; &#39;status&#39; &#124; &#39;stage_entrance_time&#39;>** | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | (optional) defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOpportunityCustomFieldGroup**
> CustomFieldGroup getOpportunityCustomFieldGroup()

Retrieves a single custom field group by id for the Opportunity record type.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiGetOpportunityCustomFieldGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiGetOpportunityCustomFieldGroupRequest = {
  
  groupId: "group_id_example",
};

const data = await apiInstance.getOpportunityCustomFieldGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined


### Return type

**CustomFieldGroup**

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

# **getOpportunityCustomFieldTab**
> CustomFieldTab getOpportunityCustomFieldTab()

Retrieves a single custom field tab by id for the Opportunity record type.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiGetOpportunityCustomFieldTabRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiGetOpportunityCustomFieldTabRequest = {
  
  tabId: "tab_id_example",
};

const data = await apiInstance.getOpportunityCustomFieldTab(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | [**string**] |  | defaults to undefined


### Return type

**CustomFieldTab**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOpportunityStageMove**
> OpportunityStageMove getOpportunityStageMove()

Retrieves a single historical record of an opportunity being moved from one pipeline stage to another.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiGetOpportunityStageMoveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiGetOpportunityStageMoveRequest = {
  
  stageMoveId: "stage_move_id_example",
};

const data = await apiInstance.getOpportunityStageMove(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageMoveId** | [**string**] |  | defaults to undefined


### Return type

**OpportunityStageMove**

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
    // Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time (optional)
  fields: [
    "custom_fields",
  ],
    // Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` - (String) `contact_id` - (String) `opportunity_title` — supports wildcard prefix search (e.g. `opportunity_title==Deal*`) - (String) `lead_source_name` — supports wildcard prefix search (e.g. `lead_source_name==Web*`) - (String) `affiliate_id` — exact match only (e.g. `affiliate_id==123`) - (String) `opportunity_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` - (String) `ids` — comma-separated list of opportunity IDs (e.g. `ids==1,2,3`), maximum 100 IDs - (String) `contact_phone` — matches the contact\'s phone. By default it is an exact match against the stored value, including any formatting characters (e.g. `contact_phone==(480) 123-4567`); it does not normalize or search across an unformatted number. Supports wildcard prefix search for partial matches (e.g. `contact_phone==480*`) - (String) `contact_city` — matches the contact\'s city; supports wildcard prefix search (e.g. `contact_city==Chand*`) - (String) `contact_state` — matches the contact\'s state; supports wildcard prefix search (e.g. `contact_state==AZ*`) - (String) `projected_revenue_high` — projected revenue high; supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `projected_revenue_high>=1000`) - (String) `projected_revenue_low` — projected revenue low; supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `projected_revenue_low<=500`) Note: `opportunity_id` and `ids` cannot be used together in the same request.  **Custom fields:** opportunities may also be filtered by any custom field defined on the Opportunity record, referenced by its field name (e.g. `cf_priority==10`). Both indexed and non-indexed custom fields are filterable. The supported operator and value depend on the field\'s data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (`==`) and prefix wildcard (e.g. `cf_company==Acme*`) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (`==`, `>`, `<`, `>=`, `<=`) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. `cf_renewDate<=2026-01-01T00:00:00.000Z`). Date-only values such as `2026-01-01` are rejected - Yes/No fields — equals only, value `0` (No) or `1` (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. `cf_tags==red`) A custom field that does not exist, an operator unsupported for the field\'s type, or a value that does not match the field\'s type returns `400 Bad Request`.  (optional)
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
 **fields** | **Array<&#39;custom_fields&#39; &#124; &#39;created_by&#39; &#124; &#39;last_updated_by&#39; &#124; &#39;status_id&#39; &#124; &#39;monthly_revenue&#39; &#124; &#39;order_revenue&#39; &#124; &#39;objection&#39; &#124; &#39;status&#39; &#124; &#39;stage_entrance_time&#39;>** | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;opportunity_title&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_title&#x3D;&#x3D;Deal*&#x60;) - (String) &#x60;lead_source_name&#x60; — supports wildcard prefix search (e.g. &#x60;lead_source_name&#x3D;&#x3D;Web*&#x60;) - (String) &#x60;affiliate_id&#x60; — exact match only (e.g. &#x60;affiliate_id&#x3D;&#x3D;123&#x60;) - (String) &#x60;opportunity_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;ids&#x60; — comma-separated list of opportunity IDs (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;), maximum 100 IDs - (String) &#x60;contact_phone&#x60; — matches the contact\&#39;s phone. By default it is an exact match against the stored value, including any formatting characters (e.g. &#x60;contact_phone&#x3D;&#x3D;(480) 123-4567&#x60;); it does not normalize or search across an unformatted number. Supports wildcard prefix search for partial matches (e.g. &#x60;contact_phone&#x3D;&#x3D;480*&#x60;) - (String) &#x60;contact_city&#x60; — matches the contact\&#39;s city; supports wildcard prefix search (e.g. &#x60;contact_city&#x3D;&#x3D;Chand*&#x60;) - (String) &#x60;contact_state&#x60; — matches the contact\&#39;s state; supports wildcard prefix search (e.g. &#x60;contact_state&#x3D;&#x3D;AZ*&#x60;) - (String) &#x60;projected_revenue_high&#x60; — projected revenue high; supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;projected_revenue_high&gt;&#x3D;1000&#x60;) - (String) &#x60;projected_revenue_low&#x60; — projected revenue low; supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;projected_revenue_low&lt;&#x3D;500&#x60;) Note: &#x60;opportunity_id&#x60; and &#x60;ids&#x60; cannot be used together in the same request.  **Custom fields:** opportunities may also be filtered by any custom field defined on the Opportunity record, referenced by its field name (e.g. &#x60;cf_priority&#x3D;&#x3D;10&#x60;). Both indexed and non-indexed custom fields are filterable. The supported operator and value depend on the field\&#39;s data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (&#x60;&#x3D;&#x3D;&#x60;) and prefix wildcard (e.g. &#x60;cf_company&#x3D;&#x3D;Acme*&#x60;) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (&#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60;) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. &#x60;cf_renewDate&lt;&#x3D;2026-01-01T00:00:00.000Z&#x60;). Date-only values such as &#x60;2026-01-01&#x60; are rejected - Yes/No fields — equals only, value &#x60;0&#x60; (No) or &#x60;1&#x60; (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. &#x60;cf_tags&#x3D;&#x3D;red&#x60;) A custom field that does not exist, an operator unsupported for the field\&#39;s type, or a value that does not match the field\&#39;s type returns &#x60;400 Bad Request&#x60;.  | (optional) defaults to undefined
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOpportunityCustomFieldGroups**
> ListCustomFieldGroupsResponse listOpportunityCustomFieldGroups()

Retrieves a list of custom field groups for the Opportunity record type. Optionally filter by tab_id to scope to a specific tab.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiListOpportunityCustomFieldGroupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiListOpportunityCustomFieldGroupsRequest = {
    // Optional tab id to scope groups to a single tab (optional)
  tabId: "tab_id_example",
};

const data = await apiInstance.listOpportunityCustomFieldGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | [**string**] | Optional tab id to scope groups to a single tab | (optional) defaults to undefined


### Return type

**ListCustomFieldGroupsResponse**

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

# **listOpportunityCustomFieldTabs**
> ListCustomFieldTabsResponse listOpportunityCustomFieldTabs()

Retrieves a list of custom field tabs for the Opportunity record type.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request = {};

const data = await apiInstance.listOpportunityCustomFieldTabs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListCustomFieldTabsResponse**

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

# **listOpportunityStageMoves**
> ListOpportunityStageMoveResponse listOpportunityStageMoves()

Returns a paginated list of historical stage-move records.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiListOpportunityStageMovesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiListOpportunityStageMovesRequest = {
    // Filter to apply. Allowed fields: - (Id) `opportunity_id` — supports `==` - (Id) `user_id` — supports `==`  Separate multiple filters with semicolons: `opportunity_id==7;user_id==1`  (optional)
  filter: "filter_example",
    // Page token (optional)
  pageToken: "page_token_example",
    // Field and direction to order results. Supported fields: `move_date`, `id` Directions: `asc` | `desc` Example: `move_date desc`  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
};

const data = await apiInstance.listOpportunityStageMoves(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply. Allowed fields: - (Id) &#x60;opportunity_id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60; - (Id) &#x60;user_id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;  Separate multiple filters with semicolons: &#x60;opportunity_id&#x3D;&#x3D;7;user_id&#x3D;&#x3D;1&#x60;  | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **orderBy** | [**string**] | Field and direction to order results. Supported fields: &#x60;move_date&#x60;, &#x60;id&#x60; Directions: &#x60;asc&#x60; | &#x60;desc&#x60; Example: &#x60;move_date desc&#x60;  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined


### Return type

**ListOpportunityStageMoveResponse**

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
    // Filter to apply, allowed fields are: - (String) `opportunity_stage_name` — supports wildcard prefix search (e.g. `opportunity_stage_name==Qualified*`) - (String) `opportunity_stage_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `opportunity_stage_id>5`)  (optional)
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
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;opportunity_stage_name&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_stage_name&#x3D;&#x3D;Qualified*&#x60;) - (String) &#x60;opportunity_stage_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;opportunity_stage_id&gt;5&#x60;)  | (optional) defaults to undefined
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveOpportunityCustomFieldModel**
> ObjectModel retrieveOpportunityCustomFieldModel()

Get the custom fields for the Opportunity object

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request = {};

const data = await apiInstance.retrieveOpportunityCustomFieldModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

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
        content: null,
        id: "id_example",
      },
    ],
    affiliateId: "789",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "opportunity_title",
  ],
    // Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time (optional)
  fields: [
    "custom_fields",
  ],
};

const data = await apiInstance.updateOpportunity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOpportunityRequestV2** | **UpdateOpportunityRequestV2**|  |
 **opportunityId** | [**string**] |  | defaults to undefined
 **updateMask** | **Array<&#39;opportunity_title&#39; &#124; &#39;next_action_time&#39; &#124; &#39;next_action_notes&#39; &#124; &#39;opportunity_notes&#39; &#124; &#39;estimated_close_time&#39; &#124; &#39;include_in_forecast&#39; &#124; &#39;projected_revenue_low&#39; &#124; &#39;projected_revenue_high&#39; &#124; &#39;contact_id&#39; &#124; &#39;stage_id&#39; &#124; &#39;user_id&#39; &#124; &#39;custom_fields&#39; &#124; &#39;affiliate_id&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined
 **fields** | **Array<&#39;custom_fields&#39; &#124; &#39;created_by&#39; &#124; &#39;last_updated_by&#39; &#124; &#39;status_id&#39; &#124; &#39;monthly_revenue&#39; &#124; &#39;order_revenue&#39; &#124; &#39;objection&#39; &#124; &#39;status&#39; &#124; &#39;stage_entrance_time&#39;>** | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | (optional) defaults to undefined


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
**405** | Method Not Allowed |  -  |
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
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**|  |
 **customFieldId** | [**string**] |  | defaults to undefined
 **updateMask** | **Array<&#39;group_id&#39; &#124; &#39;label&#39; &#124; &#39;options&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOpportunityCustomFieldGroup**
> CustomFieldGroup updateOpportunityCustomFieldGroup(updateCustomFieldGroupRequest)

Updates an existing custom field group. Only fields listed in `update_mask` are applied.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiUpdateOpportunityCustomFieldGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiUpdateOpportunityCustomFieldGroupRequest = {
  
  groupId: "group_id_example",
    // Comma-separated list of fields to update
  updateMask: [
    "name",
  ],
  
  updateCustomFieldGroupRequest: {
    name: "name_example",
    order: 1,
    tabId: "tabId_example",
  },
};

const data = await apiInstance.updateOpportunityCustomFieldGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldGroupRequest** | **UpdateCustomFieldGroupRequest**|  |
 **groupId** | [**string**] |  | defaults to undefined
 **updateMask** | **Array<&#39;name&#39; &#124; &#39;tab_id&#39; &#124; &#39;order&#39;>** | Comma-separated list of fields to update | defaults to undefined


### Return type

**CustomFieldGroup**

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

# **updateOpportunityCustomFieldTab**
> CustomFieldTab updateOpportunityCustomFieldTab(updateCustomFieldTabRequest)

Updates an existing custom field tab. Only fields listed in `update_mask` are applied.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiUpdateOpportunityCustomFieldTabRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiUpdateOpportunityCustomFieldTabRequest = {
  
  tabId: "tab_id_example",
    // Comma-separated list of fields to update
  updateMask: [
    "name",
  ],
  
  updateCustomFieldTabRequest: {
    name: "name_example",
    order: 1,
  },
};

const data = await apiInstance.updateOpportunityCustomFieldTab(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldTabRequest** | **UpdateCustomFieldTabRequest**|  |
 **tabId** | [**string**] |  | defaults to undefined
 **updateMask** | **Array<&#39;name&#39; &#124; &#39;order&#39;>** | Comma-separated list of fields to update | defaults to undefined


### Return type

**CustomFieldTab**

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
 **updateOpportunityStageRequest** | **UpdateOpportunityStageRequest**|  |
 **stageId** | [**string**] |  | defaults to undefined
 **updateMask** | **Array<&#39;name&#39; &#124; &#39;order&#39; &#124; &#39;target_number_days&#39; &#124; &#39;probability&#39; &#124; &#39;checklist_items&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


