# .EmailAddressApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmailAddressStatusUsingGET**](EmailAddressApi.md#getEmailAddressStatusUsingGET) | **GET** /v2/emailAddresses/{email} | Retrieve an Email Address status
[**updateEmailAddressOptStatusUsingPUT**](EmailAddressApi.md#updateEmailAddressOptStatusUsingPUT) | **PUT** /v2/emailAddresses/{email} | Update an Email Address opt-in status


# **getEmailAddressStatusUsingGET**
> RestEmailAddress getEmailAddressStatusUsingGET()

Retrieves the opt-in status for given Email Address

### Example


```typescript
import { createConfiguration, EmailAddressApi } from '';
import type { EmailAddressApiGetEmailAddressStatusUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailAddressApi(configuration);

const request: EmailAddressApiGetEmailAddressStatusUsingGETRequest = {
    // email
  email: "email_example",
};

const data = await apiInstance.getEmailAddressStatusUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] | email | defaults to undefined


### Return type

**RestEmailAddress**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEmailAddressOptStatusUsingPUT**
> RestEmailAddress updateEmailAddressOptStatusUsingPUT(updateEmailAddress)

Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.

### Example


```typescript
import { createConfiguration, EmailAddressApi } from '';
import type { EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailAddressApi(configuration);

const request: EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest = {
    // email
  email: "email_example",
    // updateEmailAddress
  updateEmailAddress: {
    optedIn: true,
    reason: "reason_example",
  },
};

const data = await apiInstance.updateEmailAddressOptStatusUsingPUT(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEmailAddress** | **UpdateEmailAddress**| updateEmailAddress |
 **email** | [**string**] | email | defaults to undefined


### Return type

**RestEmailAddress**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


