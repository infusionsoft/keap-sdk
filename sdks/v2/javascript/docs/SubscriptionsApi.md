# KeapCoreServiceV2Sdk.SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscription**](SubscriptionsApi.md#cancelSubscription) | **POST** /rest/v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /rest/v2/subscriptions | Create Subscription
[**createSubscriptionCustomField**](SubscriptionsApi.md#createSubscriptionCustomField) | **POST** /rest/v2/subscriptions/model/customFields | Create a Subscription Custom Field
[**deleteSubscriptionCustomField**](SubscriptionsApi.md#deleteSubscriptionCustomField) | **DELETE** /rest/v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field
[**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /rest/v2/subscriptions/{subscription_id} | Retrieve a Subscription
[**listSubscriptions**](SubscriptionsApi.md#listSubscriptions) | **GET** /rest/v2/subscriptions | List Subscriptions
[**retrieveSubscriptionCustomFieldModel**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModel) | **GET** /rest/v2/subscriptions/model | Retrieve Subscription Custom Field Model
[**updateSubscription**](SubscriptionsApi.md#updateSubscription) | **PATCH** /rest/v2/subscriptions/{subscription_id} | Update a Subscription
[**updateSubscriptionCustomField**](SubscriptionsApi.md#updateSubscriptionCustomField) | **PATCH** /rest/v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field



## cancelSubscription

> cancelSubscription(subscriptionId, cancelSubscriptionRequest)

Cancel Subscription

Cancels the specified subscription

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | 
let cancelSubscriptionRequest = new KeapCoreServiceV2Sdk.CancelSubscriptionRequest(); // CancelSubscriptionRequest | 
apiInstance.cancelSubscription(subscriptionId, cancelSubscriptionRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**|  | 
 **cancelSubscriptionRequest** | [**CancelSubscriptionRequest**](CancelSubscriptionRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSubscription

> SubscriptionDetail createSubscription(createSubscriptionRequestDetail)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let createSubscriptionRequestDetail = new KeapCoreServiceV2Sdk.CreateSubscriptionRequestDetail(); // CreateSubscriptionRequestDetail | 
apiInstance.createSubscription(createSubscriptionRequestDetail).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionRequestDetail** | [**CreateSubscriptionRequestDetail**](CreateSubscriptionRequestDetail.md)|  | 

### Return type

[**SubscriptionDetail**](SubscriptionDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSubscriptionCustomField

> CustomFieldMetaData createSubscriptionCustomField(createCustomFieldRequest)

Create a Subscription Custom Field

Creates a custom field of the specified type and options to the Subscription object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let createCustomFieldRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
apiInstance.createSubscriptionCustomField(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSubscriptionCustomField

> deleteSubscriptionCustomField(customFieldId)

Delete a Subscription Custom Field

Deletes a custom field from the Subscription object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let customFieldId = "customFieldId_example"; // String | 
apiInstance.deleteSubscriptionCustomField(customFieldId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubscription

> SubscriptionDetail getSubscription(subscriptionId)

Retrieve a Subscription

Retrieves a single subscription

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | 
apiInstance.getSubscription(subscriptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**|  | 

### Return type

[**SubscriptionDetail**](SubscriptionDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSubscriptions

> ListSubscriptionsResponseList listSubscriptions(opts)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `contact_id` - (String) `subscription_plan_id` - (String) `status` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `contact_id` - `subscription_plan_id`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listSubscriptions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60; - (String) &#x60;status&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListSubscriptionsResponseList**](ListSubscriptionsResponseList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveSubscriptionCustomFieldModel

> ObjectModel retrieveSubscriptionCustomFieldModel()

Retrieve Subscription Custom Field Model

Get the custom fields for the Subscription object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
apiInstance.retrieveSubscriptionCustomFieldModel().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSubscription

> SubscriptionDetail updateSubscription(subscriptionId, updateSubscriptionRequestDetail, opts)

Update a Subscription

Updates a Subscription

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | 
let updateSubscriptionRequestDetail = new KeapCoreServiceV2Sdk.UpdateSubscriptionRequestDetail(); // UpdateSubscriptionRequestDetail | 
let opts = {
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateSubscription(subscriptionId, updateSubscriptionRequestDetail, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**|  | 
 **updateSubscriptionRequestDetail** | [**UpdateSubscriptionRequestDetail**](UpdateSubscriptionRequestDetail.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**SubscriptionDetail**](SubscriptionDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSubscriptionCustomField

> CustomFieldMetaData updateSubscriptionCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Subscription Custom Field

Updates a custom field of the specified type and options to the Subscription object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let customFieldId = "customFieldId_example"; // String | 
let updateCustomFieldMetaDataRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
let opts = {
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateSubscriptionCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**|  | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

