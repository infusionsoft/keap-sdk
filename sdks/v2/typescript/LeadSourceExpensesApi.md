# .LeadSourceExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceExpenseUsingPOST**](LeadSourceExpensesApi.md#createLeadSourceExpenseUsingPOST) | **POST** /v2/leadSources/{lead_source_id}/expenses | Create a Lead Source Expense
[**deleteLeadSourceUsingDELETE1**](LeadSourceExpensesApi.md#deleteLeadSourceUsingDELETE1) | **DELETE** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Delete a lead source expense
[**getLeadSourceExpenseUsingGET**](LeadSourceExpensesApi.md#getLeadSourceExpenseUsingGET) | **GET** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Retrieve a Lead Source Expense
[**listLeadSourceExpensesUsingGET**](LeadSourceExpensesApi.md#listLeadSourceExpensesUsingGET) | **GET** /v2/leadSources/{lead_source_id}/expenses | List Lead Source Expenses
[**updateLeadSourceExpenseUsingPATCH**](LeadSourceExpensesApi.md#updateLeadSourceExpenseUsingPATCH) | **PATCH** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Update a Lead Source Expense


# **createLeadSourceExpenseUsingPOST**
> LeadSourceExpense createLeadSourceExpenseUsingPOST(createLeadSourceExpenseRequest)

Creates a new Lead Source Expense

### Example


```typescript
import { createConfiguration, LeadSourceExpensesApi } from '';
import type { LeadSourceExpensesApiCreateLeadSourceExpenseUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceExpensesApi(configuration);

const request: LeadSourceExpensesApiCreateLeadSourceExpenseUsingPOSTRequest = {
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

const data = await apiInstance.createLeadSourceExpenseUsingPOST(request);
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

# **deleteLeadSourceUsingDELETE1**
> void deleteLeadSourceUsingDELETE1()

Deletes a lead source expense by ID

### Example


```typescript
import { createConfiguration, LeadSourceExpensesApi } from '';
import type { LeadSourceExpensesApiDeleteLeadSourceUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceExpensesApi(configuration);

const request: LeadSourceExpensesApiDeleteLeadSourceUsingDELETE1Request = {
    // The ID of a lead source expense
  leadSourceExpenseId: "lead_source_expense_id_example",
    // The ID of the lead source this expense belongs to
  leadSourceId: "lead_source_id_example",
};

const data = await apiInstance.deleteLeadSourceUsingDELETE1(request);
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

# **getLeadSourceExpenseUsingGET**
> LeadSourceExpense getLeadSourceExpenseUsingGET()

Retrieves a single Lead Source Expense for a given ID

### Example


```typescript
import { createConfiguration, LeadSourceExpensesApi } from '';
import type { LeadSourceExpensesApiGetLeadSourceExpenseUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceExpensesApi(configuration);

const request: LeadSourceExpensesApiGetLeadSourceExpenseUsingGETRequest = {
    // The ID of a lead source expense
  leadSourceExpenseId: "lead_source_expense_id_example",
    // The ID of the lead source this expense belongs to
  leadSourceId: "lead_source_id_example",
};

const data = await apiInstance.getLeadSourceExpenseUsingGET(request);
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

# **listLeadSourceExpensesUsingGET**
> ListLeadSourceExpensesResponse listLeadSourceExpensesUsingGET()

Retrieves a list of lead source expenses

### Example


```typescript
import { createConfiguration, LeadSourceExpensesApi } from '';
import type { LeadSourceExpensesApiListLeadSourceExpensesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceExpensesApi(configuration);

const request: LeadSourceExpensesApiListLeadSourceExpensesUsingGETRequest = {
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

const data = await apiInstance.listLeadSourceExpensesUsingGET(request);
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

# **updateLeadSourceExpenseUsingPATCH**
> LeadSourceExpense updateLeadSourceExpenseUsingPATCH(updateLeadSourceExpenseRequest)

Updates a new Lead Source Expense

### Example


```typescript
import { createConfiguration, LeadSourceExpensesApi } from '';
import type { LeadSourceExpensesApiUpdateLeadSourceExpenseUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceExpensesApi(configuration);

const request: LeadSourceExpensesApiUpdateLeadSourceExpenseUsingPATCHRequest = {
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

const data = await apiInstance.updateLeadSourceExpenseUsingPATCH(request);
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


