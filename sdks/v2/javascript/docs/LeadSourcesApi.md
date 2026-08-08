# KeapCoreServiceV2Sdk.LeadSourcesApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSource**](LeadSourcesApi.md#createLeadSource) | **POST** /rest/v2/leadSources | Create a Lead Source
[**deleteLeadSource**](LeadSourcesApi.md#deleteLeadSource) | **DELETE** /rest/v2/leadSources/{lead_source_id} | Delete a Lead Source
[**getLeadSource**](LeadSourcesApi.md#getLeadSource) | **GET** /rest/v2/leadSources/{lead_source_id} | Retrieve a Lead Source
[**listLeadSources**](LeadSourcesApi.md#listLeadSources) | **GET** /rest/v2/leadSources | List Lead Sources
[**updateLeadSource**](LeadSourcesApi.md#updateLeadSource) | **PATCH** /rest/v2/leadSources/{lead_source_id} | Update a Lead Source



## createLeadSource

> LeadSource createLeadSource(createLeadSourceRequest)

Create a Lead Source

Creates a new Lead Source

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourcesApi();
let createLeadSourceRequest = new KeapCoreServiceV2Sdk.CreateLeadSourceRequest(); // CreateLeadSourceRequest | 
apiInstance.createLeadSource(createLeadSourceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)|  | 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLeadSource

> deleteLeadSource(leadSourceId)

Delete a Lead Source

Deletes a Lead Source by ID

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourcesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
apiInstance.deleteLeadSource(leadSourceId).then(() => {
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

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadSource

> LeadSource getLeadSource(leadSourceId)

Retrieve a Lead Source

Retrieves a Lead Source by ID

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourcesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
apiInstance.getLeadSource(leadSourceId).then((data) => {
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

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLeadSources

> ListLeadSourcesResponse listLeadSources(opts)

List Lead Sources

Retrieves a list of Lead Sources

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourcesApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:  - (String) `id` - Must be a positive integer. Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\". Values that are zero, negative, or non-integer return a 400. - (String) `name` - Wildcard matching allowed - (String) `status` - (String) `lead_source_category_id` - (String) `vendor` - Wildcard matching allowed - (String) `medium` - Wildcard matching allowed - (String) `message` - Wildcard matching allowed - (String) `description` - Wildcard matching allowed - (String) `start_time` - (String) `end_time`  You will need to apply the `==` operator (or another supported operator) to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=name%3D%3Dexample` - `filter=name%3D%3DGoogle%2A` (name starts with \"Google\") - `filter=id%3E1000` (id > 1000) - `filter=id%3E%3D1000` (id >= 1000) - `filter=start_time%3D%3D2024-12-22T01:00:00.000Z`  For fields which allow wildcard matching, you may use the `*` wildcard character (or its encoded form `%2A`) for case-insensitive prefix matching on text fields. Example of a valid wildcard pattern:  - `field==foo*` finds anything in `field` that begins with `foo`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields:  - `name` - `status` - `vendor` - `medium` - `start_time` - `end_time` - `create_time` - `update_time`  One of the following directions:  - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listLeadSources(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;id&#x60; - Must be a positive integer. Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot;. Values that are zero, negative, or non-integer return a 400. - (String) &#x60;name&#x60; - Wildcard matching allowed - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - Wildcard matching allowed - (String) &#x60;medium&#x60; - Wildcard matching allowed - (String) &#x60;message&#x60; - Wildcard matching allowed - (String) &#x60;description&#x60; - Wildcard matching allowed - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator (or another supported operator) to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;name%3D%3DGoogle%2A&#x60; (name starts with \&quot;Google\&quot;) - &#x60;filter&#x3D;id%3E1000&#x60; (id &gt; 1000) - &#x60;filter&#x3D;id%3E%3D1000&#x60; (id &gt;&#x3D; 1000) - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60;  For fields which allow wildcard matching, you may use the &#x60;*&#x60; wildcard character (or its encoded form &#x60;%2A&#x60;) for case-insensitive prefix matching on text fields. Example of a valid wildcard pattern:  - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLeadSource

> LeadSource updateLeadSource(leadSourceId, createLeadSourceRequest, opts)

Update a Lead Source

Updates a Lead Source with only the values provided in the request

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.LeadSourcesApi();
let leadSourceId = "leadSourceId_example"; // String | The ID of a lead source
let createLeadSourceRequest = new KeapCoreServiceV2Sdk.CreateLeadSourceRequest(); // CreateLeadSourceRequest | 
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateLeadSource(leadSourceId, createLeadSourceRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadSourceId** | **String**| The ID of a lead source | 
 **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)|  | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

