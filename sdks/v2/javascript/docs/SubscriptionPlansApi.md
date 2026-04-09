# KeapCoreServiceV2Sdk.SubscriptionPlansApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriptionPlans**](SubscriptionPlansApi.md#createSubscriptionPlans) | **POST** /rest/v2/products/{product_id}/subscriptions | Create Subscription Plan
[**deleteSubscriptionPlan**](SubscriptionPlansApi.md#deleteSubscriptionPlan) | **DELETE** /rest/v2/products/{product_id}/subscriptions/{subscription_plan_id} | Delete Subscription Plan
[**fetchSubscriptionPlan**](SubscriptionPlansApi.md#fetchSubscriptionPlan) | **GET** /rest/v2/products/{product_id}/subscriptions/{subscription_plan_id} | Get Subscription Plan
[**listSubscriptionPlans**](SubscriptionPlansApi.md#listSubscriptionPlans) | **GET** /rest/v2/products/{product_id}/subscriptions | List Subscription Plans
[**updateSubscriptionPlan**](SubscriptionPlansApi.md#updateSubscriptionPlan) | **PATCH** /rest/v2/products/{product_id}/subscriptions/{subscription_plan_id} | Update Subscription Plan



## createSubscriptionPlans

> SubscriptionPlan createSubscriptionPlans(productId, createSubscriptionPlanRequest)

Create Subscription Plan

Creates a Subscription Plan

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionPlansApi();
let productId = "productId_example"; // String | 
let createSubscriptionPlanRequest = new KeapCoreServiceV2Sdk.CreateSubscriptionPlanRequest(); // CreateSubscriptionPlanRequest | 
apiInstance.createSubscriptionPlans(productId, createSubscriptionPlanRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | 
 **createSubscriptionPlanRequest** | [**CreateSubscriptionPlanRequest**](CreateSubscriptionPlanRequest.md)|  | 

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSubscriptionPlan

> deleteSubscriptionPlan(productId, subscriptionPlanId)

Delete Subscription Plan

Deletes a Subscription Plan

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionPlansApi();
let productId = "productId_example"; // String | product_id
let subscriptionPlanId = "subscriptionPlanId_example"; // String | subscription_plan_id
apiInstance.deleteSubscriptionPlan(productId, subscriptionPlanId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **subscriptionPlanId** | **String**| subscription_plan_id | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchSubscriptionPlan

> SubscriptionPlan fetchSubscriptionPlan(productId, subscriptionPlanId)

Get Subscription Plan

Retrieves a Subscription Plan

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionPlansApi();
let productId = "productId_example"; // String | product_id
let subscriptionPlanId = "subscriptionPlanId_example"; // String | subscription_plan_id
apiInstance.fetchSubscriptionPlan(productId, subscriptionPlanId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **subscriptionPlanId** | **String**| subscription_plan_id | 

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSubscriptionPlans

> ListSubscriptionPlansResponse listSubscriptionPlans(productId, opts)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionPlansApi();
let productId = "'-' can be used for a wildcard (/v2/products/-/subscriptions"; // String | product_id
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (Boolean) `active`: true or false - (BillingCycle) `cycle_type`: DAILY, WEEKLY, MONTHLY, YEARLY  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=active%3D%3Dtrue` - `filter=cycle_type%3D%3DDAILY` - `filter=active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `product_id`  One of the following directions: - `asc` - `desc` 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listSubscriptionPlans(productId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **filter** | **String**| Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSubscriptionPlan

> SubscriptionPlan updateSubscriptionPlan(productId, subscriptionPlanId, updateSubscriptionPlanRequest, opts)

Update Subscription Plan

Updates a Subscription Plan

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionPlansApi();
let productId = "productId_example"; // String | product_id
let subscriptionPlanId = "subscriptionPlanId_example"; // String | subscription_plan_id
let updateSubscriptionPlanRequest = new KeapCoreServiceV2Sdk.UpdateSubscriptionPlanRequest(); // UpdateSubscriptionPlanRequest | 
let opts = {
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateSubscriptionPlan(productId, subscriptionPlanId, updateSubscriptionPlanRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **subscriptionPlanId** | **String**| subscription_plan_id | 
 **updateSubscriptionPlanRequest** | [**UpdateSubscriptionPlanRequest**](UpdateSubscriptionPlanRequest.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

