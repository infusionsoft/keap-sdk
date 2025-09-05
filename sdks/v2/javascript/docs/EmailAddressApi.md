# KeapCoreServiceV2Sdk.EmailAddressApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmailAddressStatus**](EmailAddressApi.md#getEmailAddressStatus) | **GET** /v2/emailAddresses/{email}/status | Retrieve an Email Address status
[**updateEmailAddressOptStatus**](EmailAddressApi.md#updateEmailAddressOptStatus) | **PATCH** /v2/emailAddresses/{email}/status | Update an Email Address opt-in status



## getEmailAddressStatus

> EmailAddressStatus getEmailAddressStatus(email)

Retrieve an Email Address status

Retrieves the opt-in status for a given Email Address

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailAddressApi();
let email = "email_example"; // String | email
apiInstance.getEmailAddressStatus(email).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| email | 

### Return type

[**EmailAddressStatus**](EmailAddressStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEmailAddressOptStatus

> EmailAddressStatus updateEmailAddressOptStatus(email, updateEmailAddress)

Update an Email Address opt-in status

Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailAddressApi();
let email = "email_example"; // String | email
let updateEmailAddress = new KeapCoreServiceV2Sdk.UpdateEmailAddress(); // UpdateEmailAddress | updateEmailAddress
apiInstance.updateEmailAddressOptStatus(email, updateEmailAddress).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| email | 
 **updateEmailAddress** | [**UpdateEmailAddress**](UpdateEmailAddress.md)| updateEmailAddress | 

### Return type

[**EmailAddressStatus**](EmailAddressStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

