# .LeadSourceRecurringExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceRecurringExpenseUsingPOST**](LeadSourceRecurringExpensesApi.md#createLeadSourceRecurringExpenseUsingPOST) | **POST** /v2/leadSources/{lead_source_id}/recurringExpenses | Create a Lead Source Recurring Expense
[**deleteLeadSourceRecurringExpenseUsingDELETE**](LeadSourceRecurringExpensesApi.md#deleteLeadSourceRecurringExpenseUsingDELETE) | **DELETE** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Delete a Lead Source Recurring Expense
[**getLeadSourceRecurringExpenseUsingGET**](LeadSourceRecurringExpensesApi.md#getLeadSourceRecurringExpenseUsingGET) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Retrieve a Lead Source Recurring Expense
[**listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET**](LeadSourceRecurringExpensesApi.md#listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}/expenses | Retrieves a list of expenses incurred from a recurring expense
[**listLeadSourceRecurringExpensesUsingGET**](LeadSourceRecurringExpensesApi.md#listLeadSourceRecurringExpensesUsingGET) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses | Retrieves a list of lead source recurring expenses
[**updateLeadSourceRecurringExpenseUsingPATCH**](LeadSourceRecurringExpensesApi.md#updateLeadSourceRecurringExpenseUsingPATCH) | **PATCH** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Update a Lead Source Recurring Expense


# **createLeadSourceRecurringExpenseUsingPOST**
> LeadSourceRecurringExpense createLeadSourceRecurringExpenseUsingPOST(createLeadSourceRecurringExpenseRequest)

Creates a new Lead Source Recurring Expense

### Example


```typescript
import { createConfiguration, LeadSourceRecurringExpensesApi } from '';
import type { LeadSourceRecurringExpensesApiCreateLeadSourceRecurringExpenseUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceRecurringExpensesApi(configuration);

const request: LeadSourceRecurringExpensesApiCreateLeadSourceRecurringExpenseUsingPOSTRequest = {
    // The ID of the lead source this recurring expense belongs to
  leadSourceId: "lead_source_id_example",
    // The request object to create a new lead source recurring expense
  createLeadSourceRecurringExpenseRequest: {
    amount: 1,
    endTime: "endTime_example",
    notes: "notes_example",
    startTime: "startTime_example",
    title: "title_example",
  },
};

const data = await apiInstance.createLeadSourceRecurringExpenseUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLeadSourceRecurringExpenseRequest** | **CreateLeadSourceRecurringExpenseRequest**| The request object to create a new lead source recurring expense |
 **leadSourceId** | [**string**] | The ID of the lead source this recurring expense belongs to | defaults to undefined


### Return type

**LeadSourceRecurringExpense**

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

# **deleteLeadSourceRecurringExpenseUsingDELETE**
> void deleteLeadSourceRecurringExpenseUsingDELETE()

Deletes a new Lead Source Recurring Expense that belongs to a Lead Source

### Example


```typescript
import { createConfiguration, LeadSourceRecurringExpensesApi } from '';
import type { LeadSourceRecurringExpensesApiDeleteLeadSourceRecurringExpenseUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceRecurringExpensesApi(configuration);

const request: LeadSourceRecurringExpensesApiDeleteLeadSourceRecurringExpenseUsingDELETERequest = {
    // The ID of the lead source this recurring expense belongs to
  leadSourceId: "lead_source_id_example",
    // The ID of a lead source recurring expense
  leadSourceRecurringExpenseId: "lead_source_recurring_expense_id_example",
};

const data = await apiInstance.deleteLeadSourceRecurringExpenseUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | [**string**] | The ID of the lead source this recurring expense belongs to | defaults to undefined
 **leadSourceRecurringExpenseId** | [**string**] | The ID of a lead source recurring expense | defaults to undefined


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

# **getLeadSourceRecurringExpenseUsingGET**
> LeadSourceRecurringExpense getLeadSourceRecurringExpenseUsingGET()

Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId

### Example


```typescript
import { createConfiguration, LeadSourceRecurringExpensesApi } from '';
import type { LeadSourceRecurringExpensesApiGetLeadSourceRecurringExpenseUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceRecurringExpensesApi(configuration);

const request: LeadSourceRecurringExpensesApiGetLeadSourceRecurringExpenseUsingGETRequest = {
    // The ID of the lead source this recurring expense belongs to
  leadSourceId: "lead_source_id_example",
    // The ID of a lead source recurring expense
  leadSourceRecurringExpenseId: "lead_source_recurring_expense_id_example",
};

const data = await apiInstance.getLeadSourceRecurringExpenseUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | [**string**] | The ID of the lead source this recurring expense belongs to | defaults to undefined
 **leadSourceRecurringExpenseId** | [**string**] | The ID of a lead source recurring expense | defaults to undefined


### Return type

**LeadSourceRecurringExpense**

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

# **listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET**
> ListLeadSourceExpensesResponse listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET()

Retrieves a list of expenses incurred from a recurring expense

### Example


```typescript
import { createConfiguration, LeadSourceRecurringExpensesApi } from '';
import type { LeadSourceRecurringExpensesApiListExpensesIncurredFromLeadSourceRecurringExpenseUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceRecurringExpensesApi(configuration);

const request: LeadSourceRecurringExpensesApiListExpensesIncurredFromLeadSourceRecurringExpenseUsingGETRequest = {
    // The ID of the lead source this recurring expense belongs to
  leadSourceId: "lead_source_id_example",
    // The ID of a lead source recurring expense
  leadSourceRecurringExpenseId: "lead_source_recurring_expense_id_example",
    // Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | [**string**] | The ID of the lead source this recurring expense belongs to | defaults to undefined
 **leadSourceRecurringExpenseId** | [**string**] | The ID of a lead source recurring expense | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListLeadSourceExpensesResponse**

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

# **listLeadSourceRecurringExpensesUsingGET**
> ListLeadSourceRecurringExpensesResponse listLeadSourceRecurringExpensesUsingGET()

Retrieves a list of recurring expenses with lead_source_id and optional \'filter\' query param

### Example


```typescript
import { createConfiguration, LeadSourceRecurringExpensesApi } from '';
import type { LeadSourceRecurringExpensesApiListLeadSourceRecurringExpensesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceRecurringExpensesApi(configuration);

const request: LeadSourceRecurringExpensesApiListLeadSourceRecurringExpensesUsingGETRequest = {
    // The ID of the lead source this recurring expense belongs to
  leadSourceId: "lead_source_id_example",
    // Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `start_time` - (String) `end_time` - (String) `next_expense_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=next_expense_time%3D%3D2024-12-22T01:00:00.000Z` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `title` - `amount` - `start_time` - `end_time` - `next_expense_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listLeadSourceRecurringExpensesUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | [**string**] | The ID of the lead source this recurring expense belongs to | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListLeadSourceRecurringExpensesResponse**

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

# **updateLeadSourceRecurringExpenseUsingPATCH**
> LeadSourceRecurringExpense updateLeadSourceRecurringExpenseUsingPATCH(leadSourceRecurringExpenseUpdateRequest)

Updates a Lead Source Recurring Expense

### Example


```typescript
import { createConfiguration, LeadSourceRecurringExpensesApi } from '';
import type { LeadSourceRecurringExpensesApiUpdateLeadSourceRecurringExpenseUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceRecurringExpensesApi(configuration);

const request: LeadSourceRecurringExpensesApiUpdateLeadSourceRecurringExpenseUsingPATCHRequest = {
    // The ID of the lead source this recurring expense belongs to
  leadSourceId: "lead_source_id_example",
    // The ID of a lead source recurring expense
  leadSourceRecurringExpenseId: "lead_source_recurring_expense_id_example",
    // The request object to update a lead source recurring expense
  leadSourceRecurringExpenseUpdateRequest: {
    amount: 1,
    endTime: "endTime_example",
    notes: "notes_example",
    startTime: "startTime_example",
    title: "title_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "title",
  ],
};

const data = await apiInstance.updateLeadSourceRecurringExpenseUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceRecurringExpenseUpdateRequest** | **LeadSourceRecurringExpenseUpdateRequest**| The request object to update a lead source recurring expense |
 **leadSourceId** | [**string**] | The ID of the lead source this recurring expense belongs to | defaults to undefined
 **leadSourceRecurringExpenseId** | [**string**] | The ID of a lead source recurring expense | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**LeadSourceRecurringExpense**

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


