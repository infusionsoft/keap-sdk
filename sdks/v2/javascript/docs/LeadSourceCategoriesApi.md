# KeapCoreServiceV2Sdk.LeadSourceCategoriesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceCategoryUsingPOST**](LeadSourceCategoriesApi.md#createLeadSourceCategoryUsingPOST) | **POST** /v2/leadSourceCategories | Create a Lead Source Category
[**deleteLeadSourceCategoryUsingDELETE**](LeadSourceCategoriesApi.md#deleteLeadSourceCategoryUsingDELETE) | **DELETE** /v2/leadSourceCategories/{lead_source_category_id} | Delete a Lead Source Category
[**getLeadSourceCategoryUsingGET**](LeadSourceCategoriesApi.md#getLeadSourceCategoryUsingGET) | **GET** /v2/leadSourceCategories/{lead_source_category_id} | Retrieve a Lead Source Category
[**listCategoriesUsingGET1**](LeadSourceCategoriesApi.md#listCategoriesUsingGET1) | **GET** /v2/leadSourceCategories | List Lead Source Categories
[**updateLeadSourceCategoryUsingPATCH**](LeadSourceCategoriesApi.md#updateLeadSourceCategoryUsingPATCH) | **PATCH** /v2/leadSourceCategories/{lead_source_category_id} | Update a Lead Source Category



## createLeadSourceCategoryUsingPOST

> LeadSourceCategory createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest)

Create a Lead Source Category

Creates a new Lead Source Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceCategoriesApi();
let createUpdateLeadSourceCategoryRequest = new KeapCoreServiceV2Sdk.CreateUpdateLeadSourceCategoryRequest(); // CreateUpdateLeadSourceCategoryRequest | The request object to create a new lead source category
apiInstance.createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| The request object to create a new lead source category | 

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLeadSourceCategoryUsingDELETE

> deleteLeadSourceCategoryUsingDELETE(leadSourceCategoryId)

Delete a Lead Source Category

Deletes the specified Lead Source Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceCategoriesApi();
let leadSourceCategoryId = "leadSourceCategoryId_example"; // String | The ID of a lead source category
apiInstance.deleteLeadSourceCategoryUsingDELETE(leadSourceCategoryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceCategoryId** | **String**| The ID of a lead source category | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadSourceCategoryUsingGET

> LeadSourceCategory getLeadSourceCategoryUsingGET(leadSourceCategoryId)

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given ID

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceCategoriesApi();
let leadSourceCategoryId = "leadSourceCategoryId_example"; // String | The ID of a lead source category
apiInstance.getLeadSourceCategoryUsingGET(leadSourceCategoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceCategoryId** | **String**| The ID of a lead source category | 

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCategoriesUsingGET1

> ListLeadSourceCategoriesResponse listCategoriesUsingGET1(opts)

List Lead Source Categories

Retrieves a list of Lead Source Categories

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceCategoriesApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:  - (String) `name`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here is an example:  - `filter=name%3D%3Dexample`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listCategoriesUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListLeadSourceCategoriesResponse**](ListLeadSourceCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLeadSourceCategoryUsingPATCH

> LeadSourceCategory updateLeadSourceCategoryUsingPATCH(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, opts)

Update a Lead Source Category

Updates a Lead Source Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourceCategoriesApi();
let leadSourceCategoryId = "leadSourceCategoryId_example"; // String | The ID of a lead source category
let createUpdateLeadSourceCategoryRequest = new KeapCoreServiceV2Sdk.CreateUpdateLeadSourceCategoryRequest(); // CreateUpdateLeadSourceCategoryRequest | The request object to update a lead source category
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateLeadSourceCategoryUsingPATCH(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceCategoryId** | **String**| The ID of a lead source category | 
 **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| The request object to update a lead source category | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

