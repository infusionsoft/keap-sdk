# KeapCoreServiceV2Sdk.AutomationApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactsToAutomationSequenceUsingPOST**](AutomationApi.md#addContactsToAutomationSequenceUsingPOST) | **POST** /v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence
[**deleteAutomationUsingDELETE**](AutomationApi.md#deleteAutomationUsingDELETE) | **DELETE** /v2/automations | Delete an Automation
[**getAutomationUsingGET**](AutomationApi.md#getAutomationUsingGET) | **GET** /v2/automations/{automation_id} | Retrieve an Automation
[**listAllAutomationIdsUsingGET**](AutomationApi.md#listAllAutomationIdsUsingGET) | **GET** /v2/automations/ids | List Automations Ids
[**listAutomationsUsingGET**](AutomationApi.md#listAutomationsUsingGET) | **GET** /v2/automations | List Automations
[**updateAutomationCategoryUsingPUT**](AutomationApi.md#updateAutomationCategoryUsingPUT) | **PUT** /v2/automations/category | Update an Automation&#39;s Category



## addContactsToAutomationSequenceUsingPOST

> AddToAutomationSequenceResponse addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest)

Add Contacts to an Automation Sequence

Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let automationId = "automationId_example"; // String | automation_id
let sequenceId = "sequenceId_example"; // String | sequence_id
let addToAutomationSequenceRequest = new KeapCoreServiceV2Sdk.AddToAutomationSequenceRequest(); // AddToAutomationSequenceRequest | addToAutomationSequenceRequest
apiInstance.addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | **String**| automation_id | 
 **sequenceId** | **String**| sequence_id | 
 **addToAutomationSequenceRequest** | [**AddToAutomationSequenceRequest**](AddToAutomationSequenceRequest.md)| addToAutomationSequenceRequest | 

### Return type

[**AddToAutomationSequenceResponse**](AddToAutomationSequenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAutomationUsingDELETE

> deleteAutomationUsingDELETE(automationIds)

Delete an Automation

Deletes a single automation

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let automationIds = [null]; // [Number] | automation_ids
apiInstance.deleteAutomationUsingDELETE(automationIds).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationIds** | [**[Number]**](Number.md)| automation_ids | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutomationUsingGET

> Automation getAutomationUsingGET(automationId)

Retrieve an Automation

Retrieves a single automation

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let automationId = "automationId_example"; // String | automation_id
apiInstance.getAutomationUsingGET(automationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | **String**| automation_id | 

### Return type

[**Automation**](Automation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllAutomationIdsUsingGET

> ListAutomationIdsResponse listAllAutomationIdsUsingGET(opts)

List Automations Ids

Retrieves a list of automations IDs

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example", // String | Page token
  'stats': true // Boolean | 
};
apiInstance.listAllAutomationIdsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **stats** | **Boolean**|  | [optional] 

### Return type

[**ListAutomationIdsResponse**](ListAutomationIdsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAutomationsUsingGET

> ListAutomationResponse listAutomationsUsingGET(opts)

List Automations

Retrieves a list of automations

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example", // String | Page token
  'stats': true // Boolean | 
};
apiInstance.listAutomationsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **stats** | **Boolean**|  | [optional] 

### Return type

[**ListAutomationResponse**](ListAutomationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAutomationCategoryUsingPUT

> updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest)

Update an Automation&#39;s Category

Updates the category of one or more automations

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let updateAutomationCategoryRequest = new KeapCoreServiceV2Sdk.UpdateAutomationCategoryRequest(); // UpdateAutomationCategoryRequest | updateAutomationCategoryRequest
apiInstance.updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAutomationCategoryRequest** | [**UpdateAutomationCategoryRequest**](UpdateAutomationCategoryRequest.md)| updateAutomationCategoryRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

