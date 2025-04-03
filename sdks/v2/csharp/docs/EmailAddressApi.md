# Keap.Core.V2.Api.EmailAddressApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetEmailAddressStatusUsingGET**](EmailAddressApi.md#getemailaddressstatususingget) | **GET** /v2/emailAddresses/{email} | Retrieve an Email Address status |
| [**UpdateEmailAddressOptStatusUsingPUT**](EmailAddressApi.md#updateemailaddressoptstatususingput) | **PUT** /v2/emailAddresses/{email} | Update an Email Address opt-in status |

<a id="getemailaddressstatususingget"></a>
# **GetEmailAddressStatusUsingGET**
> RestEmailAddress GetEmailAddressStatusUsingGET (string email)

Retrieve an Email Address status

Retrieves the opt-in status for given Email Address

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetEmailAddressStatusUsingGETExample
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
                RestEmailAddress result = apiInstance.GetEmailAddressStatusUsingGET(email);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailAddressApi.GetEmailAddressStatusUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetEmailAddressStatusUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Email Address status
    ApiResponse<RestEmailAddress> response = apiInstance.GetEmailAddressStatusUsingGETWithHttpInfo(email);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailAddressApi.GetEmailAddressStatusUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **email** | **string** | email |  |

### Return type

[**RestEmailAddress**](RestEmailAddress.md)

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

<a id="updateemailaddressoptstatususingput"></a>
# **UpdateEmailAddressOptStatusUsingPUT**
> RestEmailAddress UpdateEmailAddressOptStatusUsingPUT (string email, UpdateEmailAddress updateEmailAddress)

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
    public class UpdateEmailAddressOptStatusUsingPUTExample
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
                RestEmailAddress result = apiInstance.UpdateEmailAddressOptStatusUsingPUT(email, updateEmailAddress);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailAddressApi.UpdateEmailAddressOptStatusUsingPUT: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateEmailAddressOptStatusUsingPUTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Email Address opt-in status
    ApiResponse<RestEmailAddress> response = apiInstance.UpdateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailAddressApi.UpdateEmailAddressOptStatusUsingPUTWithHttpInfo: " + e.Message);
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

[**RestEmailAddress**](RestEmailAddress.md)

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

