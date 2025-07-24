# .AutomationApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactsToAutomationSequence**](AutomationApi.md#addContactsToAutomationSequence) | **POST** /v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence
[**bulkAssignmentAutomationsCategories**](AutomationApi.md#bulkAssignmentAutomationsCategories) | **POST** /v2/automations/categories/batchAssign | Bulk update for Automations Categories
[**deleteAutomation**](AutomationApi.md#deleteAutomation) | **DELETE** /v2/automations | Delete an Automation
[**getAutomation**](AutomationApi.md#getAutomation) | **GET** /v2/automations/{automation_id} | Retrieve an Automation
[**listAllAutomationIds**](AutomationApi.md#listAllAutomationIds) | **GET** /v2/automations/ids | List Automations Ids
[**listAutomations**](AutomationApi.md#listAutomations) | **GET** /v2/automations | List Automations


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
    // automation_id
  automationId: "automation_id_example",
    // sequence_id
  sequenceId: "sequence_id_example",
    // addToAutomationSequenceRequest
  addToAutomationSequenceRequest: {
    contactIds: [
      "contactIds_example",
    ],
  },
};

const data = await apiInstance.addContactsToAutomationSequence(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addToAutomationSequenceRequest** | **AddToAutomationSequenceRequest**| addToAutomationSequenceRequest |
 **automationId** | [**string**] | automation_id | defaults to undefined
 **sequenceId** | [**string**] | sequence_id | defaults to undefined


### Return type

**AddToAutomationSequenceResponse**

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
    // assignAutomationCategoryRequest
  assignAutomationCategoryRequest: {
    applyCategory: true,
    automationIds: [
      "automationIds_example",
    ],
    categoryIds: [
      "categoryIds_example",
    ],
  },
};

const data = await apiInstance.bulkAssignmentAutomationsCategories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignAutomationCategoryRequest** | **AssignAutomationCategoryRequest**| assignAutomationCategoryRequest |


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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

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
    // automation_ids
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
 **automationIds** | **Array&lt;number&gt;** | automation_ids | defaults to undefined


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
    // automation_id
  automationId: "automation_id_example",
};

const data = await apiInstance.getAutomation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | [**string**] | automation_id | defaults to undefined


### Return type

**Automation**

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
  
  stats: true,
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
 **stats** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ListAutomationIdsResponse**

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
  
  stats: true,
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
 **stats** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ListAutomationResponse**

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


