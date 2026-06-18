# .EmailAddressApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmailAddressStatus**](EmailAddressApi.md#getEmailAddressStatus) | **GET** /rest/v2/emailAddresses/{email}/status | Retrieve an Email Address status
[**listEmailAddressStatuses**](EmailAddressApi.md#listEmailAddressStatuses) | **GET** /rest/v2/emailAddresses | List Email Address Statuses
[**updateEmailAddressOptStatus**](EmailAddressApi.md#updateEmailAddressOptStatus) | **PATCH** /rest/v2/emailAddresses/{email}/status | Update an Email Address opt-in status


# **getEmailAddressStatus**
> RestEmailAddressStatus getEmailAddressStatus()

Retrieves the opt-in status for a given Email Address

### Example


```typescript
import { createConfiguration, EmailAddressApi } from '';
import type { EmailAddressApiGetEmailAddressStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailAddressApi(configuration);

const request: EmailAddressApiGetEmailAddressStatusRequest = {
  
  email: "email_example",
};

const data = await apiInstance.getEmailAddressStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined


### Return type

**RestEmailAddressStatus**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEmailAddressStatuses**
> ListEmailAddressStatusResponse listEmailAddressStatuses()

Retrieve a list of the Status of Email Addresses

### Example


```typescript
import { createConfiguration, EmailAddressApi } from '';
import type { EmailAddressApiListEmailAddressStatusesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailAddressApi(configuration);

const request: EmailAddressApiListEmailAddressStatusesRequest = {
    // Filter to apply, allowed fields are: - (Set[String]) `emails` - (Set[EmailOptStatus]) `statuses` - (Boolean) `opted_in`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=opted_in%3D%3Dtrue` - `filter=emails%3D%3Dexample%40test.com` - `filter=emails%3D%3Dexample%40test.com%2Csecond%40test.com`  (optional)
  filter: "filter=opted_in%3D%3Dtrue",
    // Page token (optional)
  pageToken: "page_token_example",
    // Attribute and direction to order items. One of the following fields: - `email` - `status` - `create_time` - `last_click_time` - `last_open_time` - `last_sent_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by=last_sent_time desc",
    // Total number of items to return per page (optional)
  pageSize: 0,
};

const data = await apiInstance.listEmailAddressStatuses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (Set[String]) &#x60;emails&#x60; - (Set[EmailOptStatus]) &#x60;statuses&#x60; - (Boolean) &#x60;opted_in&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;opted_in%3D%3Dtrue&#x60; - &#x60;filter&#x3D;emails%3D%3Dexample%40test.com&#x60; - &#x60;filter&#x3D;emails%3D%3Dexample%40test.com%2Csecond%40test.com&#x60;  | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;email&#x60; - &#x60;status&#x60; - &#x60;create_time&#x60; - &#x60;last_click_time&#x60; - &#x60;last_open_time&#x60; - &#x60;last_sent_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined


### Return type

**ListEmailAddressStatusResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEmailAddressOptStatus**
> RestEmailAddressStatus updateEmailAddressOptStatus(updateEmailAddress)

Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.

### Example


```typescript
import { createConfiguration, EmailAddressApi } from '';
import type { EmailAddressApiUpdateEmailAddressOptStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailAddressApi(configuration);

const request: EmailAddressApiUpdateEmailAddressOptStatusRequest = {
  
  email: "email_example",
  
  updateEmailAddress: {
    reason: "Customer requested to receive marketing emails",
    optedIn: true,
  },
};

const data = await apiInstance.updateEmailAddressOptStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEmailAddress** | **UpdateEmailAddress**|  |
 **email** | [**string**] |  | defaults to undefined


### Return type

**RestEmailAddressStatus**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


