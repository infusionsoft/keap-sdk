# KeapCoreServiceV2Sdk.EmailAddressApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmailAddressStatus**](EmailAddressApi.md#getEmailAddressStatus) | **GET** /rest/v2/emailAddresses/{email}/status | Retrieve an Email Address status
[**listEmailAddressStatuses**](EmailAddressApi.md#listEmailAddressStatuses) | **GET** /rest/v2/emailAddresses | List Email Address Statuses
[**updateEmailAddressOptStatus**](EmailAddressApi.md#updateEmailAddressOptStatus) | **PATCH** /rest/v2/emailAddresses/{email}/status | Update an Email Address opt-in status



## getEmailAddressStatus

> RestEmailAddressStatus getEmailAddressStatus(email)

Retrieve an Email Address status

Retrieves the opt-in status for a given Email Address

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.EmailAddressApi();
let email = "email_example"; // String | 
apiInstance.getEmailAddressStatus(email).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 

### Return type

[**RestEmailAddressStatus**](RestEmailAddressStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEmailAddressStatuses

> ListEmailAddressStatusResponse listEmailAddressStatuses(opts)

List Email Address Statuses

Retrieve a list of the Status of Email Addresses

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.EmailAddressApi();
let opts = {
  'filter': "filter=opted_in%3D%3Dtrue", // String | Filter to apply, allowed fields are: - (Set[String]) `emails` - (Set[EmailOptStatus]) `statuses` - (Boolean) `opted_in`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=opted_in%3D%3Dtrue` - `filter=emails%3D%3Dexample%40test.com` - `filter=emails%3D%3Dexample%40test.com%2Csecond%40test.com` 
  'pageToken': "pageToken_example", // String | Page token
  'orderBy': "order_by=last_sent_time desc", // String | Attribute and direction to order items. One of the following fields: - `email` - `status` - `create_time` - `last_click_time` - `last_open_time` - `last_sent_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0 // Number | Total number of items to return per page
};
apiInstance.listEmailAddressStatuses(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (Set[String]) &#x60;emails&#x60; - (Set[EmailOptStatus]) &#x60;statuses&#x60; - (Boolean) &#x60;opted_in&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;opted_in%3D%3Dtrue&#x60; - &#x60;filter&#x3D;emails%3D%3Dexample%40test.com&#x60; - &#x60;filter&#x3D;emails%3D%3Dexample%40test.com%2Csecond%40test.com&#x60;  | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;email&#x60; - &#x60;status&#x60; - &#x60;create_time&#x60; - &#x60;last_click_time&#x60; - &#x60;last_open_time&#x60; - &#x60;last_sent_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 

### Return type

[**ListEmailAddressStatusResponse**](ListEmailAddressStatusResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEmailAddressOptStatus

> RestEmailAddressStatus updateEmailAddressOptStatus(email, updateEmailAddress)

Update an Email Address opt-in status

Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.EmailAddressApi();
let email = "email_example"; // String | 
let updateEmailAddress = new KeapCoreServiceV2Sdk.UpdateEmailAddress(); // UpdateEmailAddress | 
apiInstance.updateEmailAddressOptStatus(email, updateEmailAddress).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 
 **updateEmailAddress** | [**UpdateEmailAddress**](UpdateEmailAddress.md)|  | 

### Return type

[**RestEmailAddressStatus**](RestEmailAddressStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

