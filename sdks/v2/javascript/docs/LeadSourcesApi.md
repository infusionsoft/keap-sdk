# KeapCoreServiceV2Sdk.LeadSourcesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceUsingPOST**](LeadSourcesApi.md#createLeadSourceUsingPOST) | **POST** /v2/leadSources | Create a Lead Source
[**deleteLeadSourceUsingDELETE**](LeadSourcesApi.md#deleteLeadSourceUsingDELETE) | **DELETE** /v2/leadSources/{lead_source_id} | Delete a Lead Source
[**getLeadSourceUsingGET**](LeadSourcesApi.md#getLeadSourceUsingGET) | **GET** /v2/leadSources/{lead_source_id} | Retrieve a Lead Source
[**listLeadSourcesUsingGET**](LeadSourcesApi.md#listLeadSourcesUsingGET) | **GET** /v2/leadSources | List Lead Sources
[**updateLeadSourceUsingPATCH**](LeadSourcesApi.md#updateLeadSourceUsingPATCH) | **PATCH** /v2/leadSources/{lead_source_id} | Update a Lead Source



## createLeadSourceUsingPOST

> LeadSource createLeadSourceUsingPOST(createLeadSourceRequest)

Create a Lead Source

Creates a new Lead Source

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourcesApi();
let createLeadSourceRequest = new KeapCoreServiceV2Sdk.CreateLeadSourceRequest(); // CreateLeadSourceRequest | The request object to create a new lead source
apiInstance.createLeadSourceUsingPOST(createLeadSourceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| The request object to create a new lead source | 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLeadSourceUsingDELETE

> deleteLeadSourceUsingDELETE(leadSourceId)

Delete a Lead Source

Deletes a Lead Source by ID

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourcesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
apiInstance.deleteLeadSourceUsingDELETE(leadSourceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of a lead source | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadSourceUsingGET

> LeadSource getLeadSourceUsingGET(leadSourceId)

Retrieve a Lead Source

Retrieves a Lead Source by ID

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourcesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
apiInstance.getLeadSourceUsingGET(leadSourceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of a lead source | 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLeadSourcesUsingGET

> ListLeadSourcesResponse listLeadSourcesUsingGET(opts)

List Lead Sources

Retrieves a list of Lead Sources

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourcesApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:  - (String) `name` - (String) `status` - (String) `lead_source_category_id` - (String) `vendor` - (String) `medium` - (String) `start_time` - (String) `end_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=name%3D%3Dexample` - `filter=start_time%3D%3D2024-12-22T01:00:00.000Z`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields:  - `name` - `status` - `vendor` - `medium` - `start_time` - `end_time` - `create_time` - `update_time`  One of the following directions:  - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listLeadSourcesUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLeadSourceUsingPATCH

> LeadSource updateLeadSourceUsingPATCH(leadSourceId, createLeadSourceRequest, opts)

Update a Lead Source

Updates a Lead Source with only the values provided in the request

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourcesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
let createLeadSourceRequest = new KeapCoreServiceV2Sdk.CreateLeadSourceRequest(); // CreateLeadSourceRequest | The request object to update a lead source
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateLeadSourceUsingPATCH(leadSourceId, createLeadSourceRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of a lead source | 
 **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| The request object to update a lead source | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

