# Keap.Core.V2.Api.IntegrationsApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddIntegrationsWordPressOptIn**](IntegrationsApi.md#addintegrationswordpressoptin) | **POST** /rest/v2/integrations/wordpress/options | Add a WordPress Opt-In Option |
| [**DeleteIntegrationsWordPressOptIn**](IntegrationsApi.md#deleteintegrationswordpressoptin) | **DELETE** /rest/v2/integrations/wordpress/options/{option_key} | Delete a WordPress Opt-In Option |

<a id="addintegrationswordpressoptin"></a>
# **AddIntegrationsWordPressOptIn**
> WordPressOptInOption AddIntegrationsWordPressOptIn (CreateIntegrationsWordPressOptInOption createIntegrationsWordPressOptInOption)

Add a WordPress Opt-In Option

Adds a value to the list of WordPress Opt-In Options Available

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AddIntegrationsWordPressOptInExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new IntegrationsApi(config);
            var createIntegrationsWordPressOptInOption = new CreateIntegrationsWordPressOptInOption(); // CreateIntegrationsWordPressOptInOption | 

            try
            {
                // Add a WordPress Opt-In Option
                WordPressOptInOption result = apiInstance.AddIntegrationsWordPressOptIn(createIntegrationsWordPressOptInOption);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IntegrationsApi.AddIntegrationsWordPressOptIn: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddIntegrationsWordPressOptInWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add a WordPress Opt-In Option
    ApiResponse<WordPressOptInOption> response = apiInstance.AddIntegrationsWordPressOptInWithHttpInfo(createIntegrationsWordPressOptInOption);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IntegrationsApi.AddIntegrationsWordPressOptInWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createIntegrationsWordPressOptInOption** | [**CreateIntegrationsWordPressOptInOption**](CreateIntegrationsWordPressOptInOption.md) |  |  |

### Return type

[**WordPressOptInOption**](WordPressOptInOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteintegrationswordpressoptin"></a>
# **DeleteIntegrationsWordPressOptIn**
> void DeleteIntegrationsWordPressOptIn (string optionKey)

Delete a WordPress Opt-In Option

Deletes a value from the list of WordPress Opt-In Options Available

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteIntegrationsWordPressOptInExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new IntegrationsApi(config);
            var optionKey = "optionKey_example";  // string | 

            try
            {
                // Delete a WordPress Opt-In Option
                apiInstance.DeleteIntegrationsWordPressOptIn(optionKey);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IntegrationsApi.DeleteIntegrationsWordPressOptIn: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteIntegrationsWordPressOptInWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a WordPress Opt-In Option
    apiInstance.DeleteIntegrationsWordPressOptInWithHttpInfo(optionKey);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IntegrationsApi.DeleteIntegrationsWordPressOptInWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **optionKey** | **string** |  |  |

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

