# Keap.Core.V2.Api.EmailAddressApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetEmailAddressStatus**](EmailAddressApi.md#getemailaddressstatus) | **GET** /v2/emailAddresses/{email}/status | Retrieve an Email Address status |
| [**UpdateEmailAddressOptStatus**](EmailAddressApi.md#updateemailaddressoptstatus) | **PATCH** /v2/emailAddresses/{email}/status | Update an Email Address opt-in status |

<a id="getemailaddressstatus"></a>
# **GetEmailAddressStatus**
> EmailAddressStatus GetEmailAddressStatus (string email)

Retrieve an Email Address status

Retrieves the opt-in status for a given Email Address

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetEmailAddressStatusExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new EmailAddressApi(config);
            var email = "email_example";  // string | email

            try
            {
                // Retrieve an Email Address status
                EmailAddressStatus result = apiInstance.GetEmailAddressStatus(email);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailAddressApi.GetEmailAddressStatus: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetEmailAddressStatusWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Email Address status
    ApiResponse<EmailAddressStatus> response = apiInstance.GetEmailAddressStatusWithHttpInfo(email);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailAddressApi.GetEmailAddressStatusWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **email** | **string** | email |  |

### Return type

[**EmailAddressStatus**](EmailAddressStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateemailaddressoptstatus"></a>
# **UpdateEmailAddressOptStatus**
> EmailAddressStatus UpdateEmailAddressOptStatus (string email, UpdateEmailAddress updateEmailAddress)

Update an Email Address opt-in status

Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateEmailAddressOptStatusExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new EmailAddressApi(config);
            var email = "email_example";  // string | email
            var updateEmailAddress = new UpdateEmailAddress(); // UpdateEmailAddress | updateEmailAddress

            try
            {
                // Update an Email Address opt-in status
                EmailAddressStatus result = apiInstance.UpdateEmailAddressOptStatus(email, updateEmailAddress);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailAddressApi.UpdateEmailAddressOptStatus: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateEmailAddressOptStatusWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Email Address opt-in status
    ApiResponse<EmailAddressStatus> response = apiInstance.UpdateEmailAddressOptStatusWithHttpInfo(email, updateEmailAddress);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailAddressApi.UpdateEmailAddressOptStatusWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **email** | **string** | email |  |
| **updateEmailAddress** | [**UpdateEmailAddress**](UpdateEmailAddress.md) | updateEmailAddress |  |

### Return type

[**EmailAddressStatus**](EmailAddressStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

