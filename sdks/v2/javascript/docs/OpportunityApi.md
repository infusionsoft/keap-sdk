# KeapCoreServiceV2Sdk.OpportunityApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOpportunity**](OpportunityApi.md#createOpportunity) | **POST** /v2/opportunities | Create an Opportunity
[**createOpportunityCustomFields**](OpportunityApi.md#createOpportunityCustomFields) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**createOpportunityStage**](OpportunityApi.md#createOpportunityStage) | **POST** /v2/opportunities/stages | Create an Opportunity Stage
[**deleteOpportunity**](OpportunityApi.md#deleteOpportunity) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity
[**deleteOpportunityStage**](OpportunityApi.md#deleteOpportunityStage) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**getOpportunity**](OpportunityApi.md#getOpportunity) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**getOpportunityStage**](OpportunityApi.md#getOpportunityStage) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**listOpportunities**](OpportunityApi.md#listOpportunities) | **GET** /v2/opportunities | List Opportunities
[**listOpportunityStages**](OpportunityApi.md#listOpportunityStages) | **GET** /v2/opportunities/stages | List of Opportunity Stages
[**updateOpportunity**](OpportunityApi.md#updateOpportunity) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity
[**updateOpportunityCustomField**](OpportunityApi.md#updateOpportunityCustomField) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field
[**updateOpportunityStage**](OpportunityApi.md#updateOpportunityStage) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage



## createOpportunity

> RestV2Opportunity createOpportunity(opts)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opts = {
  'createOpportunityRequest': new KeapCoreServiceV2Sdk.CreateOpportunityRequest() // CreateOpportunityRequest | opportunity
};
apiInstance.createOpportunity(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| opportunity | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOpportunityCustomFields

> CustomFieldMetaData createOpportunityCustomFields(createCustomFieldRequest)

Create an Opportunity Custom Field

Creates a custom field of the specified type and options to the Opportunity object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let createCustomFieldRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createOpportunityCustomFields(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOpportunityStage

> RestOpportunityStage createOpportunityStage(opts)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opts = {
  'createOpportunityStageRequest': new KeapCoreServiceV2Sdk.CreateOpportunityStageRequest() // CreateOpportunityStageRequest | opportunity
};
apiInstance.createOpportunityStage(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityStageRequest** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)| opportunity | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOpportunity

> deleteOpportunity(opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
apiInstance.deleteOpportunity(opportunityId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**| opportunity_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOpportunityStage

> deleteOpportunityStage(stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let stageId = "stageId_example"; // String | stage_id
apiInstance.deleteOpportunityStage(stageId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**| stage_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunity

> RestV2Opportunity getOpportunity(opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
apiInstance.getOpportunity(opportunityId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**| opportunity_id | 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunityStage

> RestOpportunityStage getOpportunityStage(stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let stageId = "stageId_example"; // String | stage_id
apiInstance.getOpportunityStage(stageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**| stage_id | 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunities

> ListOpportunitiesResponse listOpportunities(opts)

List Opportunities

Retrieves a list of all Opportunities.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opts = {
  'fields': ["null"], // [String] | fields
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` 
  'orderBy': "orderBy_example", // String | Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_name` - `created_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOpportunities(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| fields | [optional] 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunityStages

> ListOpportunityStagesResponse listOpportunityStages(opts)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order stage items. One of the following fields: - `stage_order`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOpportunityStages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOpportunity

> RestV2Opportunity updateOpportunity(opportunityId, updateOpportunityRequestV2, opts)

Update an opportunity

Updates specified values of a given opportunity

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
let updateOpportunityRequestV2 = new KeapCoreServiceV2Sdk.UpdateOpportunityRequestV2(); // UpdateOpportunityRequestV2 | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunity(opportunityId, updateOpportunityRequestV2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**| opportunity_id | 
 **updateOpportunityRequestV2** | [**UpdateOpportunityRequestV2**](UpdateOpportunityRequestV2.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityCustomField

> CustomFieldMetaData updateOpportunityCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Opportunity&#39;s Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityStage

> RestOpportunityStage updateOpportunityStage(stageId, updateOpportunityStageRequest, opts)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let stageId = "stageId_example"; // String | stage_id
let updateOpportunityStageRequest = new KeapCoreServiceV2Sdk.UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityStage(stageId, updateOpportunityStageRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**| stage_id | 
 **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

