# Keap.Core.V2.Api.SettingsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetApplicationConfigurationsUsingGET**](SettingsApi.md#getapplicationconfigurationsusingget) | **GET** /v2/settings/applications:getConfiguration | Get Application Configuration |
| [**GetContactOptionTypesUsingGET1**](SettingsApi.md#getcontactoptiontypesusingget1) | **GET** /v2/settings/contactOptionTypes | Get Contact Option types |
| [**IsApplicationEnabledUsingGET**](SettingsApi.md#isapplicationenabledusingget) | **GET** /v2/settings/applications:isEnabled | Get Application Status |

<a id="getapplicationconfigurationsusingget"></a>
# **GetApplicationConfigurationsUsingGET**
> GetSettingsResponse GetApplicationConfigurationsUsingGET (List<string>? fields = null)

Get Application Configuration

Get configuration values for the application instance.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetApplicationConfigurationsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SettingsApi(config);
            var fields = new List<string>?(); // List<string>? | By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional) 

            try
            {
                // Get Application Configuration
                GetSettingsResponse result = apiInstance.GetApplicationConfigurationsUsingGET(fields);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SettingsApi.GetApplicationConfigurationsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetApplicationConfigurationsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Application Configuration
    ApiResponse<GetSettingsResponse> response = apiInstance.GetApplicationConfigurationsUsingGETWithHttpInfo(fields);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SettingsApi.GetApplicationConfigurationsUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fields** | [**List&lt;string&gt;?**](string.md) | By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. | [optional]  |

### Return type

[**GetSettingsResponse**](GetSettingsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcontactoptiontypesusingget1"></a>
# **GetContactOptionTypesUsingGET1**
> GetContactOptionTypesResponse GetContactOptionTypesUsingGET1 ()

Get Contact Option types

Gets a list of Contact Option types.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetContactOptionTypesUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SettingsApi(config);

            try
            {
                // Get Contact Option types
                GetContactOptionTypesResponse result = apiInstance.GetContactOptionTypesUsingGET1();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SettingsApi.GetContactOptionTypesUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetContactOptionTypesUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Contact Option types
    ApiResponse<GetContactOptionTypesResponse> response = apiInstance.GetContactOptionTypesUsingGET1WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SettingsApi.GetContactOptionTypesUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**GetContactOptionTypesResponse**](GetContactOptionTypesResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="isapplicationenabledusingget"></a>
# **IsApplicationEnabledUsingGET**
> GetApplicationEnabledStatusResponse IsApplicationEnabledUsingGET ()

Get Application Status

Check if the application is enabled or not

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class IsApplicationEnabledUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SettingsApi(config);

            try
            {
                // Get Application Status
                GetApplicationEnabledStatusResponse result = apiInstance.IsApplicationEnabledUsingGET();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SettingsApi.IsApplicationEnabledUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the IsApplicationEnabledUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Application Status
    ApiResponse<GetApplicationEnabledStatusResponse> response = apiInstance.IsApplicationEnabledUsingGETWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SettingsApi.IsApplicationEnabledUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**GetApplicationEnabledStatusResponse**](GetApplicationEnabledStatusResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

