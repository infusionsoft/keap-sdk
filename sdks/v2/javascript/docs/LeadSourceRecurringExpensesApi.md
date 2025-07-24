# KeapCoreServiceV2Sdk.LeadSourceRecurringExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#createLeadSourceRecurringExpense) | **POST** /v2/leadSources/{lead_source_id}/recurringExpenses | Create a Lead Source Recurring Expense
[**deleteLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#deleteLeadSourceRecurringExpense) | **DELETE** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Delete a Lead Source Recurring Expense
[**getLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#getLeadSourceRecurringExpense) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Retrieve a Lead Source Recurring Expense
[**listExpensesIncurredFromLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#listExpensesIncurredFromLeadSourceRecurringExpense) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}/expenses | Retrieves a list of expenses incurred from a recurring expense
[**listLeadSourceRecurringExpenses**](LeadSourceRecurringExpensesApi.md#listLeadSourceRecurringExpenses) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses | Retrieves a list of lead source recurring expenses
[**updateLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#updateLeadSourceRecurringExpense) | **PATCH** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Update a Lead Source Recurring Expense



## createLeadSourceRecurringExpense

> LeadSourceRecurringExpense createLeadSourceRecurringExpense(leadSourceId, createLeadSourceRecurringExpenseRequest)

Create a Lead Source Recurring Expense

Creates a new Lead Source Recurring Expense

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceRecurringExpensesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
let createLeadSourceRecurringExpenseRequest = new KeapCoreServiceV2Sdk.CreateLeadSourceRecurringExpenseRequest(); // CreateLeadSourceRecurringExpenseRequest | The request object to create a new lead source recurring expense
apiInstance.createLeadSourceRecurringExpense(leadSourceId, createLeadSourceRecurringExpenseRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | 
 **createLeadSourceRecurringExpenseRequest** | [**CreateLeadSourceRecurringExpenseRequest**](CreateLeadSourceRecurringExpenseRequest.md)| The request object to create a new lead source recurring expense | 

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLeadSourceRecurringExpense

> deleteLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId)

Delete a Lead Source Recurring Expense

Deletes a new Lead Source Recurring Expense that belongs to a Lead Source

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceRecurringExpensesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
let leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
apiInstance.deleteLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | 
 **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadSourceRecurringExpense

> LeadSourceRecurringExpense getLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId)

Retrieve a Lead Source Recurring Expense

Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceRecurringExpensesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
let leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
apiInstance.getLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | 
 **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | 

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listExpensesIncurredFromLeadSourceRecurringExpense

> ListLeadSourceExpensesResponse listExpensesIncurredFromLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, opts)

Retrieves a list of expenses incurred from a recurring expense

Retrieves a list of expenses incurred from a recurring expense

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceRecurringExpensesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
let leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listExpensesIncurredFromLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | 
 **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | 
 **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListLeadSourceExpensesResponse**](ListLeadSourceExpensesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLeadSourceRecurringExpenses

> ListLeadSourceRecurringExpensesResponse listLeadSourceRecurringExpenses(leadSourceId, opts)

Retrieves a list of lead source recurring expenses

Retrieves a list of recurring expenses with lead_source_id and optional &#39;filter&#39; query param

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceRecurringExpensesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `start_time` - (String) `end_time` - (String) `next_expense_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=next_expense_time%3D%3D2024-12-22T01:00:00.000Z`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `title` - `amount` - `start_time` - `end_time` - `next_expense_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listLeadSourceRecurringExpenses(leadSourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | 
 **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListLeadSourceRecurringExpensesResponse**](ListLeadSourceRecurringExpensesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLeadSourceRecurringExpense

> LeadSourceRecurringExpense updateLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, opts)

Update a Lead Source Recurring Expense

Updates a Lead Source Recurring Expense

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceRecurringExpensesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this recurring expense belongs to
let leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example"; // String | The ID of a lead source recurring expense
let leadSourceRecurringExpenseUpdateRequest = new KeapCoreServiceV2Sdk.LeadSourceRecurringExpenseUpdateRequest(); // LeadSourceRecurringExpenseUpdateRequest | The request object to update a lead source recurring expense
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of the lead source this recurring expense belongs to | 
 **leadSourceRecurringExpenseId** | **String**| The ID of a lead source recurring expense | 
 **leadSourceRecurringExpenseUpdateRequest** | [**LeadSourceRecurringExpenseUpdateRequest**](LeadSourceRecurringExpenseUpdateRequest.md)| The request object to update a lead source recurring expense | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

