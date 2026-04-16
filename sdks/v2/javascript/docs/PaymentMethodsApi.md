# KeapCoreServiceV2Sdk.PaymentMethodsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deactivatePaymentMethod**](PaymentMethodsApi.md#deactivatePaymentMethod) | **POST** /rest/v2/contacts/{contact_id}/paymentMethods/{payment_method_id}:deactivate | Deactivate a Contact Payment Method
[**deletePaymentMethod**](PaymentMethodsApi.md#deletePaymentMethod) | **DELETE** /rest/v2/contacts/{contact_id}/paymentMethods/{payment_method_id} | Delete a Contact Payment Method
[**listPaymentMethods**](PaymentMethodsApi.md#listPaymentMethods) | **GET** /rest/v2/paymentMethods | List of Payment Methods
[**listPaymentMethods_0**](PaymentMethodsApi.md#listPaymentMethods_0) | **GET** /rest/v2/contacts/{contact_id}/paymentMethods | List of Contact Payment Methods



## deactivatePaymentMethod

> deactivatePaymentMethod(contactId, paymentMethodId)

Deactivate a Contact Payment Method

Deactivate the specified payment method

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.PaymentMethodsApi();
let contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
let paymentMethodId = "paymentMethodId_example"; // String | ID of the payment method to be deactivated.
apiInstance.deactivatePaymentMethod(contactId, paymentMethodId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| ID of the contact to which the payment method belongs. | 
 **paymentMethodId** | **String**| ID of the payment method to be deactivated. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePaymentMethod

> deletePaymentMethod(contactId, paymentMethodId)

Delete a Contact Payment Method

Deletes the specified payment method

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.PaymentMethodsApi();
let contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
let paymentMethodId = "paymentMethodId_example"; // String | ID of the payment method to be deleted.
apiInstance.deletePaymentMethod(contactId, paymentMethodId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| ID of the contact to which the payment method belongs. | 
 **paymentMethodId** | **String**| ID of the payment method to be deleted. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentMethods

> ListPaymentMethodsResponse listPaymentMethods(opts)

List of Payment Methods

Retrieves a list of Payment Methods

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.PaymentMethodsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `payment_method_id` - (String) `credit_card_id` - (String) `contact_id` - (String) `merchant_account_id` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=payment_method_id%3D%3D123` - `filter=contact_id%3D%3D123%3Bmerchant_account_id%3D%3D567` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `payment_method_id` - `created_time` - `contact_id` - `merchant_account_id`  One of the following directions: - `desc` - `asc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listPaymentMethods(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;payment_method_id&#x60; - (String) &#x60;credit_card_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;payment_method_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bmerchant_account_id%3D%3D567&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;payment_method_id&#x60; - &#x60;created_time&#x60; - &#x60;contact_id&#x60; - &#x60;merchant_account_id&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentMethods_0

> ListContactPaymentMethodsResponse listPaymentMethods_0(contactId, opts)

List of Contact Payment Methods

Retrieves a list of Contact Payment Methods

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.PaymentMethodsApi();
let contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `merchant_account_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=merchant_account_id%3D%3D123`  
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `created_time`  One of the following directions: - `desc` - `asc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listPaymentMethods_0(contactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| ID of the contact to which the payment method belongs. | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;   | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListContactPaymentMethodsResponse**](ListContactPaymentMethodsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

