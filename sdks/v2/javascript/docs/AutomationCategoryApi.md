# KeapCoreServiceV2Sdk.AutomationCategoryApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](AutomationCategoryApi.md#createCategory) | **POST** /v2/automationCategory | Create automation category
[**deleteCategories**](AutomationCategoryApi.md#deleteCategories) | **DELETE** /v2/automationCategory | Delete automation category
[**listCategories**](AutomationCategoryApi.md#listCategories) | **GET** /v2/automationCategory | List automation categories
[**patchCategory**](AutomationCategoryApi.md#patchCategory) | **PATCH** /v2/automationCategory/{id} | Update automation category



## createCategory

> AutomationCategory createCategory(createAutomationCategoryRequest)

Create automation category

Creates a single automation category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationCategoryApi();
let createAutomationCategoryRequest = new KeapCoreServiceV2Sdk.CreateAutomationCategoryRequest(); // CreateAutomationCategoryRequest | createAutomationCategoryRequest
apiInstance.createCategory(createAutomationCategoryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAutomationCategoryRequest** | [**CreateAutomationCategoryRequest**](CreateAutomationCategoryRequest.md)| createAutomationCategoryRequest | 

### Return type

[**AutomationCategory**](AutomationCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCategories

> deleteCategories(ids)

Delete automation category

Deletes one or more automation categories based on the request parameters

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationCategoryApi();
let ids = [null]; // [Number] | ids
apiInstance.deleteCategories(ids).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| ids | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCategories

> ListAutomationCategoryResponse listCategories()

List automation categories

Retrieves a list of automation categories

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationCategoryApi();
apiInstance.listCategories().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAutomationCategoryResponse**](ListAutomationCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchCategory

> AutomationCategory patchCategory(id, patchAutomationCategoryRequest)

Update automation category

Updates part of a single automation category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationCategoryApi();
let id = "id_example"; // String | id
let patchAutomationCategoryRequest = new KeapCoreServiceV2Sdk.PatchAutomationCategoryRequest(); // PatchAutomationCategoryRequest | patchAutomationCategoryRequest
apiInstance.patchCategory(id, patchAutomationCategoryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **patchAutomationCategoryRequest** | [**PatchAutomationCategoryRequest**](PatchAutomationCategoryRequest.md)| patchAutomationCategoryRequest | 

### Return type

[**AutomationCategory**](AutomationCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

