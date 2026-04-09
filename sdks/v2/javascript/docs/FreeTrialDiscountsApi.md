# KeapCoreServiceV2Sdk.FreeTrialDiscountsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFreeTrialDiscount**](FreeTrialDiscountsApi.md#createFreeTrialDiscount) | **POST** /rest/v2/discounts/freeTrials | Create a Subscription Free Trial Discount
[**deleteFreeTrialDiscount**](FreeTrialDiscountsApi.md#deleteFreeTrialDiscount) | **DELETE** /rest/v2/discounts/freeTrials/{discount_id} | Delete a Subscription Free Trial Discount
[**getFreeTrialDiscount**](FreeTrialDiscountsApi.md#getFreeTrialDiscount) | **GET** /rest/v2/discounts/freeTrials/{discount_id} | Retrieve a Subscription Free Trial Discount
[**listFreeTrialDiscounts**](FreeTrialDiscountsApi.md#listFreeTrialDiscounts) | **GET** /rest/v2/discounts/freeTrials | List all Subscription Free Trial Discounts
[**updateFreeTrialDiscount**](FreeTrialDiscountsApi.md#updateFreeTrialDiscount) | **PATCH** /rest/v2/discounts/freeTrials/{discount_id} | Update a Subscription Free Trial Discount



## createFreeTrialDiscount

> FreeTrialDiscount createFreeTrialDiscount(createFreeTrialDiscountRequest)

Create a Subscription Free Trial Discount

Creates a Subscription Free Trial Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FreeTrialDiscountsApi();
let createFreeTrialDiscountRequest = new KeapCoreServiceV2Sdk.CreateFreeTrialDiscountRequest(); // CreateFreeTrialDiscountRequest | 
apiInstance.createFreeTrialDiscount(createFreeTrialDiscountRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFreeTrialDiscountRequest** | [**CreateFreeTrialDiscountRequest**](CreateFreeTrialDiscountRequest.md)|  | 

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFreeTrialDiscount

> deleteFreeTrialDiscount(discountId)

Delete a Subscription Free Trial Discount

Deletes a specified Subscription Free Trial Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FreeTrialDiscountsApi();
let discountId = "discountId_example"; // String | 
apiInstance.deleteFreeTrialDiscount(discountId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFreeTrialDiscount

> FreeTrialDiscount getFreeTrialDiscount(discountId)

Retrieve a Subscription Free Trial Discount

Retrieves a Subscription Free Trial Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FreeTrialDiscountsApi();
let discountId = "discountId_example"; // String | 
apiInstance.getFreeTrialDiscount(discountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**|  | 

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFreeTrialDiscounts

> ListFreeTrialDiscountsResponse listFreeTrialDiscounts(opts)

List all Subscription Free Trial Discounts

Retrieves a list of Subscription Free Trial Discounts

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FreeTrialDiscountsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (Integer) `free_trial_days` - (Boolean) `hide_price` - (String) `subscription_plan_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=free_trial_days%3D%3D14` - `filter=hide_price%3D%3DTrue` - `filter=subscription_plan_id%3D%3DmySubscriptionPlanId` - `filter=free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `free_trial_days` - `hide_price` - `id` - `name` - `subscription_plan_id`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listFreeTrialDiscounts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListFreeTrialDiscountsResponse**](ListFreeTrialDiscountsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFreeTrialDiscount

> FreeTrialDiscount updateFreeTrialDiscount(discountId, updateFreeTrialDiscountRequest, opts)

Update a Subscription Free Trial Discount

Updates a Subscription Free Trial Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.FreeTrialDiscountsApi();
let discountId = "discountId_example"; // String | 
let updateFreeTrialDiscountRequest = new KeapCoreServiceV2Sdk.UpdateFreeTrialDiscountRequest(); // UpdateFreeTrialDiscountRequest | 
let opts = {
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateFreeTrialDiscount(discountId, updateFreeTrialDiscountRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**|  | 
 **updateFreeTrialDiscountRequest** | [**UpdateFreeTrialDiscountRequest**](UpdateFreeTrialDiscountRequest.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

