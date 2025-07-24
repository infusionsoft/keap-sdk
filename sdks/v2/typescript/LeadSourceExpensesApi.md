# .LeadSourceExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceExpense**](LeadSourceExpensesApi.md#createLeadSourceExpense) | **POST** /v2/leadSources/{lead_source_id}/expenses | Create a Lead Source Expense
[**deleteLeadSourceExpense**](LeadSourceExpensesApi.md#deleteLeadSourceExpense) | **DELETE** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Delete a lead source expense
[**getLeadSourceExpense**](LeadSourceExpensesApi.md#getLeadSourceExpense) | **GET** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Retrieve a Lead Source Expense
[**listLeadSourceExpenses**](LeadSourceExpensesApi.md#listLeadSourceExpenses) | **GET** /v2/leadSources/{lead_source_id}/expenses | List Lead Source Expenses
[**updateLeadSourceExpense**](LeadSourceExpensesApi.md#updateLeadSourceExpense) | **PATCH** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Update a Lead Source Expense


# **createLeadSourceExpense**
> LeadSourceExpense createLeadSourceExpense(createLeadSourceExpenseRequest)

Creates a new Lead Source Expense

### Example


```typescript
import { createConfiguration, LeadSourceExpensesApi } from '';
import type { LeadSourceExpensesApiCreateLeadSourceExpenseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceExpensesApi(configuration);

const request: LeadSourceExpensesApiCreateLeadSourceExpenseRequest = {
    // The ID of the lead source this expense belongs to
  leadSourceId: "lead_source_id_example",
    // The request object to create a new lead source expense
  createLeadSourceExpenseRequest: {
    amount: 1,
    incurredTime: "incurredTime_example",
    notes: "notes_example",
    title: "title_example",
  },
};

const data = await apiInstance.createLeadSourceExpense(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLeadSourceExpenseRequest** | **CreateLeadSourceExpenseRequest**| The request object to create a new lead source expense |
 **leadSourceId** | [**string**] | The ID of the lead source this expense belongs to | defaults to undefined


### Return type

**LeadSourceExpense**

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
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteLeadSourceExpense**
> void deleteLeadSourceExpense()

Deletes a lead source expense by ID

### Example


```typescript
import { createConfiguration, LeadSourceExpensesApi } from '';
import type { LeadSourceExpensesApiDeleteLeadSourceExpenseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceExpensesApi(configuration);

const request: LeadSourceExpensesApiDeleteLeadSourceExpenseRequest = {
    // The ID of a lead source expense
  leadSourceExpenseId: "lead_source_expense_id_example",
    // The ID of the lead source this expense belongs to
  leadSourceId: "lead_source_id_example",
};

const data = await apiInstance.deleteLeadSourceExpense(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceExpenseId** | [**string**] | The ID of a lead source expense | defaults to undefined
 **leadSourceId** | [**string**] | The ID of the lead source this expense belongs to | defaults to undefined


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

# **getLeadSourceExpense**
> LeadSourceExpense getLeadSourceExpense()

Retrieves a single Lead Source Expense for a given ID

### Example


```typescript
import { createConfiguration, LeadSourceExpensesApi } from '';
import type { LeadSourceExpensesApiGetLeadSourceExpenseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceExpensesApi(configuration);

const request: LeadSourceExpensesApiGetLeadSourceExpenseRequest = {
    // The ID of a lead source expense
  leadSourceExpenseId: "lead_source_expense_id_example",
    // The ID of the lead source this expense belongs to
  leadSourceId: "lead_source_id_example",
};

const data = await apiInstance.getLeadSourceExpense(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceExpenseId** | [**string**] | The ID of a lead source expense | defaults to undefined
 **leadSourceId** | [**string**] | The ID of the lead source this expense belongs to | defaults to undefined


### Return type

**LeadSourceExpense**

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

# **listLeadSourceExpenses**
> ListLeadSourceExpensesResponse listLeadSourceExpenses()

Retrieves a list of lead source expenses

### Example


```typescript
import { createConfiguration, LeadSourceExpensesApi } from '';
import type { LeadSourceExpensesApiListLeadSourceExpensesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceExpensesApi(configuration);

const request: LeadSourceExpensesApiListLeadSourceExpensesRequest = {
    // The ID of the lead source this expense belongs to
  leadSourceId: "lead_source_id_example",
    // Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listLeadSourceExpenses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | [**string**] | The ID of the lead source this expense belongs to | defaults to undefined
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

# **updateLeadSourceExpense**
> LeadSourceExpense updateLeadSourceExpense(updateLeadSourceExpenseRequest)

Updates a new Lead Source Expense

### Example


```typescript
import { createConfiguration, LeadSourceExpensesApi } from '';
import type { LeadSourceExpensesApiUpdateLeadSourceExpenseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceExpensesApi(configuration);

const request: LeadSourceExpensesApiUpdateLeadSourceExpenseRequest = {
    // The ID of a lead source expense
  leadSourceExpenseId: "lead_source_expense_id_example",
    // The ID of the lead source this expense belongs to
  leadSourceId: "lead_source_id_example",
    // The request object to update a lead source expense
  updateLeadSourceExpenseRequest: {
    amount: 1,
    incurredTime: "incurredTime_example",
    notes: "notes_example",
    title: "title_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "title",
  ],
};

const data = await apiInstance.updateLeadSourceExpense(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateLeadSourceExpenseRequest** | **UpdateLeadSourceExpenseRequest**| The request object to update a lead source expense |
 **leadSourceExpenseId** | [**string**] | The ID of a lead source expense | defaults to undefined
 **leadSourceId** | [**string**] | The ID of the lead source this expense belongs to | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**LeadSourceExpense**

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


