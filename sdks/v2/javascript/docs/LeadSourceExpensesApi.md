# KeapCoreServiceV2Sdk.LeadSourceExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceExpenseUsingPOST**](LeadSourceExpensesApi.md#createLeadSourceExpenseUsingPOST) | **POST** /v2/leadSources/{lead_source_id}/expenses | Create a Lead Source Expense
[**deleteLeadSourceUsingDELETE1**](LeadSourceExpensesApi.md#deleteLeadSourceUsingDELETE1) | **DELETE** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Delete a lead source expense
[**getLeadSourceExpenseUsingGET**](LeadSourceExpensesApi.md#getLeadSourceExpenseUsingGET) | **GET** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Retrieve a Lead Source Expense
[**listLeadSourceExpensesUsingGET**](LeadSourceExpensesApi.md#listLeadSourceExpensesUsingGET) | **GET** /v2/leadSources/{lead_source_id}/expenses | List Lead Source Expenses
[**updateLeadSourceExpenseUsingPATCH**](LeadSourceExpensesApi.md#updateLeadSourceExpenseUsingPATCH) | **PATCH** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Update a Lead Source Expense



## createLeadSourceExpenseUsingPOST

> LeadSourceExpense createLeadSourceExpenseUsingPOST(leadSourceId, createLeadSourceExpenseRequest)

Create a Lead Source Expense

Creates a new Lead Source Expense

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceExpensesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
let createLeadSourceExpenseRequest = new KeapCoreServiceV2Sdk.CreateLeadSourceExpenseRequest(); // CreateLeadSourceExpenseRequest | The request object to create a new lead source expense
apiInstance.createLeadSourceExpenseUsingPOST(leadSourceId, createLeadSourceExpenseRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of the lead source this expense belongs to | 
 **createLeadSourceExpenseRequest** | [**CreateLeadSourceExpenseRequest**](CreateLeadSourceExpenseRequest.md)| The request object to create a new lead source expense | 

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLeadSourceUsingDELETE1

> deleteLeadSourceUsingDELETE1(leadSourceExpenseId, leadSourceId)

Delete a lead source expense

Deletes a lead source expense by ID

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceExpensesApi();
let leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
apiInstance.deleteLeadSourceUsingDELETE1(leadSourceExpenseId, leadSourceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceExpenseId** | **String**| The ID of a lead source expense | 
 **leadSourceId** | **String**| The ID of the lead source this expense belongs to | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadSourceExpenseUsingGET

> LeadSourceExpense getLeadSourceExpenseUsingGET(leadSourceExpenseId, leadSourceId)

Retrieve a Lead Source Expense

Retrieves a single Lead Source Expense for a given ID

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceExpensesApi();
let leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
apiInstance.getLeadSourceExpenseUsingGET(leadSourceExpenseId, leadSourceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceExpenseId** | **String**| The ID of a lead source expense | 
 **leadSourceId** | **String**| The ID of the lead source this expense belongs to | 

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLeadSourceExpensesUsingGET

> ListLeadSourceExpensesResponse listLeadSourceExpensesUsingGET(leadSourceId, opts)

List Lead Source Expenses

Retrieves a list of lead source expenses

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceExpensesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listLeadSourceExpensesUsingGET(leadSourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of the lead source this expense belongs to | 
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


## updateLeadSourceExpenseUsingPATCH

> LeadSourceExpense updateLeadSourceExpenseUsingPATCH(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, opts)

Update a Lead Source Expense

Updates a new Lead Source Expense

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceExpensesApi();
let leadSourceExpenseId = "leadSourceExpenseId_example"; // String | The ID of a lead source expense
let leadSourceId = "leadSourceId_example"; // String | The ID of the lead source this expense belongs to
let updateLeadSourceExpenseRequest = new KeapCoreServiceV2Sdk.UpdateLeadSourceExpenseRequest(); // UpdateLeadSourceExpenseRequest | The request object to update a lead source expense
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateLeadSourceExpenseUsingPATCH(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceExpenseId** | **String**| The ID of a lead source expense | 
 **leadSourceId** | **String**| The ID of the lead source this expense belongs to | 
 **updateLeadSourceExpenseRequest** | [**UpdateLeadSourceExpenseRequest**](UpdateLeadSourceExpenseRequest.md)| The request object to update a lead source expense | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

