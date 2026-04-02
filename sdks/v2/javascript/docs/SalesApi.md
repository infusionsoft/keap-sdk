# KeapCoreServiceV2Sdk.SalesApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPayments**](SalesApi.md#listPayments) | **GET** /rest/v2/sales/payments | List Payments
[**listTransactions**](SalesApi.md#listTransactions) | **GET** /rest/v2/sales/transactions | List Transactions
[**setMerchantGatewayAsDefault**](SalesApi.md#setMerchantGatewayAsDefault) | **POST** /rest/v2/sales/merchants/{id}:setDefault | Set default Merchant Account



## listPayments

> ListPayments listPayments(opts)

List Payments

Retrieves a list of payments

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SalesApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `id` - (String) `amount` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `order_id` - (String) `contact_id` - (String) `since_time` - (String) `until_time` - (String) `merchant_account_id` - (String) `merchant_account_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=order_id%3D%3D123%3Bcontact_id%3D%3D567`
  'pageToken': "pageToken_example", // String | Page token
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `amount` - `payment_time` - `contact_id`  One of the following directions: - `asc` - `desc`
  'pageSize': 0 // Number | Total number of items to return per page
};
apiInstance.listPayments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;amount&#x60; - &#x60;payment_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 

### Return type

[**ListPayments**](ListPayments.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTransactions

> ListTransactions listTransactions(opts)

List Transactions

Retrieves a list of sales transactions

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SalesApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `amount` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `order_id` - (String) `contact_id` - (String) `since_time` - (String) `until_time` - (String) `merchant_account_id` - (String) `merchant_account_type` - (String) `status` - (String) `transaction_method` - (String) `is_successful`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=order_id%3D%3D123` - `filter=order_id%3D%3D123%3Bcontact_id%3D%3D567`
  'pageToken': "pageToken_example", // String | Page token
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `amount` - `transaction_time` - `contact_id`  One of the following directions: - `asc` - `desc`
  'pageSize': 0 // Number | Total number of items to return per page
};
apiInstance.listTransactions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60; - (String) &#x60;status&#x60; - (String) &#x60;transaction_method&#x60; - (String) &#x60;is_successful&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;order_id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;amount&#x60; - &#x60;transaction_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 

### Return type

[**ListTransactions**](ListTransactions.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setMerchantGatewayAsDefault

> setMerchantGatewayAsDefault(id)

Set default Merchant Account

Sets the specified Merchant Account as the default Merchant Account.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SalesApi();
let id = "id_example"; // String | 
apiInstance.setMerchantGatewayAsDefault(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

