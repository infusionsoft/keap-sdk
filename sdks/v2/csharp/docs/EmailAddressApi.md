# Keap.Core.V2.Api.EmailAddressApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetEmailAddressStatus**](EmailAddressApi.md#getemailaddressstatus) | **GET** /rest/v2/emailAddresses/{email}/status | Retrieve an Email Address status |
| [**ListEmailAddressStatuses**](EmailAddressApi.md#listemailaddressstatuses) | **GET** /rest/v2/emailAddresses | List Email Address Statuses |
| [**UpdateEmailAddressOptStatus**](EmailAddressApi.md#updateemailaddressoptstatus) | **PATCH** /rest/v2/emailAddresses/{email}/status | Update an Email Address opt-in status |

<a id="getemailaddressstatus"></a>
# **GetEmailAddressStatus**
> RestEmailAddressStatus GetEmailAddressStatus (string email)

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
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new EmailAddressApi(config);
            var email = "email_example";  // string | 

            try
            {
                // Retrieve an Email Address status
                RestEmailAddressStatus result = apiInstance.GetEmailAddressStatus(email);
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
    ApiResponse<RestEmailAddressStatus> response = apiInstance.GetEmailAddressStatusWithHttpInfo(email);
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
| **email** | **string** |  |  |

### Return type

[**RestEmailAddressStatus**](RestEmailAddressStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listemailaddressstatuses"></a>
# **ListEmailAddressStatuses**
> ListEmailAddressStatusResponse ListEmailAddressStatuses (string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

List Email Address Statuses

Retrieve a list of the Status of Email Addresses

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListEmailAddressStatusesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new EmailAddressApi(config);
            var filter = filter=opted_in%3D%3Dtrue;  // string? | Filter to apply, allowed fields are: - (Set[String]) `emails` - (Set[EmailOptStatus]) `statuses` - (Boolean) `opted_in`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=opted_in%3D%3Dtrue` - `filter=emails%3D%3Dexample%40test.com` - `filter=emails%3D%3Dexample%40test.com%2Csecond%40test.com`  (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 
            var orderBy = order_by=last_sent_time desc;  // string? | Attribute and direction to order items. One of the following fields: - `email` - `status` - `create_time` - `last_click_time` - `last_open_time` - `last_sent_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 

            try
            {
                // List Email Address Statuses
                ListEmailAddressStatusResponse result = apiInstance.ListEmailAddressStatuses(filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailAddressApi.ListEmailAddressStatuses: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListEmailAddressStatusesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Email Address Statuses
    ApiResponse<ListEmailAddressStatusResponse> response = apiInstance.ListEmailAddressStatusesWithHttpInfo(filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailAddressApi.ListEmailAddressStatusesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (Set[String]) &#x60;emails&#x60; - (Set[EmailOptStatus]) &#x60;statuses&#x60; - (Boolean) &#x60;opted_in&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;opted_in%3D%3Dtrue&#x60; - &#x60;filter&#x3D;emails%3D%3Dexample%40test.com&#x60; - &#x60;filter&#x3D;emails%3D%3Dexample%40test.com%2Csecond%40test.com&#x60;  | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;email&#x60; - &#x60;status&#x60; - &#x60;create_time&#x60; - &#x60;last_click_time&#x60; - &#x60;last_open_time&#x60; - &#x60;last_sent_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |

### Return type

[**ListEmailAddressStatusResponse**](ListEmailAddressStatusResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateemailaddressoptstatus"></a>
# **UpdateEmailAddressOptStatus**
> RestEmailAddressStatus UpdateEmailAddressOptStatus (string email, UpdateEmailAddress updateEmailAddress)

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
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new EmailAddressApi(config);
            var email = "email_example";  // string | 
            var updateEmailAddress = new UpdateEmailAddress(); // UpdateEmailAddress | 

            try
            {
                // Update an Email Address opt-in status
                RestEmailAddressStatus result = apiInstance.UpdateEmailAddressOptStatus(email, updateEmailAddress);
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
    ApiResponse<RestEmailAddressStatus> response = apiInstance.UpdateEmailAddressOptStatusWithHttpInfo(email, updateEmailAddress);
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
| **email** | **string** |  |  |
| **updateEmailAddress** | [**UpdateEmailAddress**](UpdateEmailAddress.md) |  |  |

### Return type

[**RestEmailAddressStatus**](RestEmailAddressStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

