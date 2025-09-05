# .EmailAddressApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmailAddressStatus**](EmailAddressApi.md#getEmailAddressStatus) | **GET** /v2/emailAddresses/{email}/status | Retrieve an Email Address status
[**updateEmailAddressOptStatus**](EmailAddressApi.md#updateEmailAddressOptStatus) | **PATCH** /v2/emailAddresses/{email}/status | Update an Email Address opt-in status


# **getEmailAddressStatus**
> EmailAddressStatus getEmailAddressStatus()

Retrieves the opt-in status for a given Email Address

### Example


```typescript
import { createConfiguration, EmailAddressApi } from '';
import type { EmailAddressApiGetEmailAddressStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailAddressApi(configuration);

const request: EmailAddressApiGetEmailAddressStatusRequest = {
    // email
  email: "email_example",
};

const data = await apiInstance.getEmailAddressStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] | email | defaults to undefined


### Return type

**EmailAddressStatus**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEmailAddressOptStatus**
> EmailAddressStatus updateEmailAddressOptStatus(updateEmailAddress)

Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.

### Example


```typescript
import { createConfiguration, EmailAddressApi } from '';
import type { EmailAddressApiUpdateEmailAddressOptStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailAddressApi(configuration);

const request: EmailAddressApiUpdateEmailAddressOptStatusRequest = {
    // email
  email: "email_example",
    // updateEmailAddress
  updateEmailAddress: {
    optedIn: true,
    reason: "reason_example",
  },
};

const data = await apiInstance.updateEmailAddressOptStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEmailAddress** | **UpdateEmailAddress**| updateEmailAddress |
 **email** | [**string**] | email | defaults to undefined


### Return type

**EmailAddressStatus**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


