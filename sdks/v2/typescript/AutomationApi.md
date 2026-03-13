# .AutomationApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**achieveGoal**](AutomationApi.md#achieveGoal) | **POST** /rest/v2/automations/goals/achieve | Achieve an Automation Goal
[**addContactsToAutomationSequence**](AutomationApi.md#addContactsToAutomationSequence) | **POST** /rest/v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence
[**bulkAssignmentAutomationsCategories**](AutomationApi.md#bulkAssignmentAutomationsCategories) | **POST** /rest/v2/automations/categories/batchAssign | Bulk update for Automations Categories
[**bulkUnpublishAutomations**](AutomationApi.md#bulkUnpublishAutomations) | **POST** /rest/v2/automations/batch-unpublish | Bulk unpublish Automations
[**deleteAutomation**](AutomationApi.md#deleteAutomation) | **DELETE** /rest/v2/automations | Delete an Automation
[**getAutomation**](AutomationApi.md#getAutomation) | **GET** /rest/v2/automations/{automation_id} | Retrieve an Automation
[**listAllAutomationIds**](AutomationApi.md#listAllAutomationIds) | **GET** /rest/v2/automations/ids | List Automations Ids
[**listAutomations**](AutomationApi.md#listAutomations) | **GET** /rest/v2/automations | List Automations
[**unpublishAutomation**](AutomationApi.md#unpublishAutomation) | **PUT** /rest/v2/automations/{automation_id}/unpublish | Unpublish an Automation


# **achieveGoal**
> AchieveGoalResponse achieveGoal(achieveGoalRequest)

Achieves a goal in an automation for a contact

### Example


```typescript
import { createConfiguration, AutomationApi } from '';
import type { AutomationApiAchieveGoalRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationApi(configuration);

const request: AutomationApiAchieveGoalRequest = {
  
  achieveGoalRequest: {
    integration: "my_integration",
    callName: "goal_achieved",
    automationId: 123,
    goalId: 456,
    contactId: 789,
  },
};

const data = await apiInstance.achieveGoal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **achieveGoalRequest** | **AchieveGoalRequest**|  |


### Return type

**AchieveGoalResponse**

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

# **addContactsToAutomationSequence**
> AddToAutomationSequenceResponse addContactsToAutomationSequence(addToAutomationSequenceRequest)

Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.

### Example


```typescript
import { createConfiguration, AutomationApi } from '';
import type { AutomationApiAddContactsToAutomationSequenceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationApi(configuration);

const request: AutomationApiAddContactsToAutomationSequenceRequest = {
  
  automationId: "automation_id_example",
  
  sequenceId: "sequence_id_example",
  
  addToAutomationSequenceRequest: {
    contactIds: [123, 456, 789],
  },
};

const data = await apiInstance.addContactsToAutomationSequence(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addToAutomationSequenceRequest** | **AddToAutomationSequenceRequest**|  |
 **automationId** | [**string**] |  | defaults to undefined
 **sequenceId** | [**string**] |  | defaults to undefined


### Return type

**AddToAutomationSequenceResponse**

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

# **bulkAssignmentAutomationsCategories**
> void bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest)

Bulk updates the categories of one or more automations

### Example


```typescript
import { createConfiguration, AutomationApi } from '';
import type { AutomationApiBulkAssignmentAutomationsCategoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationApi(configuration);

const request: AutomationApiBulkAssignmentAutomationsCategoriesRequest = {
  
  assignAutomationCategoryRequest: {
    categoryIds: [1, 2, 3],
    automationIds: [100, 200, 300],
    applyCategory: true,
  },
};

const data = await apiInstance.bulkAssignmentAutomationsCategories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignAutomationCategoryRequest** | **AssignAutomationCategoryRequest**|  |


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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bulkUnpublishAutomations**
> void bulkUnpublishAutomations(batchUnpublishAutomationRequest)

Bulk unpublish one or more automations

### Example


```typescript
import { createConfiguration, AutomationApi } from '';
import type { AutomationApiBulkUnpublishAutomationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationApi(configuration);

const request: AutomationApiBulkUnpublishAutomationsRequest = {
  
  batchUnpublishAutomationRequest: {
    automationIds: [123, 456, 789],
    unpublishedFormMessage: "This form is currently unavailable",
  },
};

const data = await apiInstance.bulkUnpublishAutomations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchUnpublishAutomationRequest** | **BatchUnpublishAutomationRequest**|  |


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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAutomation**
> void deleteAutomation()

Deletes a single automation

### Example


```typescript
import { createConfiguration, AutomationApi } from '';
import type { AutomationApiDeleteAutomationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationApi(configuration);

const request: AutomationApiDeleteAutomationRequest = {
  
  automationIds: [
    1,
  ],
};

const data = await apiInstance.deleteAutomation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationIds** | **Array&lt;number&gt;** |  | defaults to undefined


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

# **getAutomation**
> Automation getAutomation()

Retrieves a single automation

### Example


```typescript
import { createConfiguration, AutomationApi } from '';
import type { AutomationApiGetAutomationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationApi(configuration);

const request: AutomationApiGetAutomationRequest = {
  
  automationId: "automation_id_example",
};

const data = await apiInstance.getAutomation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | [**string**] |  | defaults to undefined


### Return type

**Automation**

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

# **listAllAutomationIds**
> ListAutomationIdsResponse listAllAutomationIds()

Retrieves a list of automations IDs

### Example


```typescript
import { createConfiguration, AutomationApi } from '';
import type { AutomationApiListAllAutomationIdsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationApi(configuration);

const request: AutomationApiListAllAutomationIdsRequest = {
    // Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAllAutomationIds(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAutomationIdsResponse**

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

# **listAutomations**
> ListAutomationResponse listAutomations()

Retrieves a list of automations

### Example


```typescript
import { createConfiguration, AutomationApi } from '';
import type { AutomationApiListAutomationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationApi(configuration);

const request: AutomationApiListAutomationsRequest = {
    // Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAutomations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAutomationResponse**

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

# **unpublishAutomation**
> void unpublishAutomation(unpublishAutomationRequest)

Unpublishes a single automation

### Example


```typescript
import { createConfiguration, AutomationApi } from '';
import type { AutomationApiUnpublishAutomationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutomationApi(configuration);

const request: AutomationApiUnpublishAutomationRequest = {
  
  automationId: "automation_id_example",
  
  unpublishAutomationRequest: {
    unpublishedFormMessage: "This form is currently unavailable",
  },
};

const data = await apiInstance.unpublishAutomation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unpublishAutomationRequest** | **UnpublishAutomationRequest**|  |
 **automationId** | [**string**] |  | defaults to undefined


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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


