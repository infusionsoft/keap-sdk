# Keap.Core.V2.Api.DisplayFormsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetDisplayForm**](DisplayFormsApi.md#getdisplayform) | **GET** /v2/pipelines/{id}/form | Retrieves a specific display form by a pipeline ID. |
| [**UpdateDisplayForm**](DisplayFormsApi.md#updatedisplayform) | **PATCH** /v2/pipelines/{id}/form | Updates a display form |

<a id="getdisplayform"></a>
# **GetDisplayForm**
> DisplayForm GetDisplayForm (string id)

Retrieves a specific display form by a pipeline ID.

Retrieves a specific display form by a pipeline ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetDisplayFormExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DisplayFormsApi(config);
            var id = "id_example";  // string | the ID of the pipeline containing the form

            try
            {
                // Retrieves a specific display form by a pipeline ID.
                DisplayForm result = apiInstance.GetDisplayForm(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DisplayFormsApi.GetDisplayForm: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDisplayFormWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a specific display form by a pipeline ID.
    ApiResponse<DisplayForm> response = apiInstance.GetDisplayFormWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DisplayFormsApi.GetDisplayFormWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the ID of the pipeline containing the form |  |

### Return type

[**DisplayForm**](DisplayForm.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the requested Deal |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatedisplayform"></a>
# **UpdateDisplayForm**
> DisplayForm UpdateDisplayForm (string id, UpdateDisplayFormRequest updateDisplayFormRequest)

Updates a display form

Updates a display form

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateDisplayFormExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DisplayFormsApi(config);
            var id = "id_example";  // string | the ID of the pipeline containing the form
            var updateDisplayFormRequest = new UpdateDisplayFormRequest(); // UpdateDisplayFormRequest | the request body containing updated display form details

            try
            {
                // Updates a display form
                DisplayForm result = apiInstance.UpdateDisplayForm(id, updateDisplayFormRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DisplayFormsApi.UpdateDisplayForm: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateDisplayFormWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Updates a display form
    ApiResponse<DisplayForm> response = apiInstance.UpdateDisplayFormWithHttpInfo(id, updateDisplayFormRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DisplayFormsApi.UpdateDisplayFormWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the ID of the pipeline containing the form |  |
| **updateDisplayFormRequest** | [**UpdateDisplayFormRequest**](UpdateDisplayFormRequest.md) | the request body containing updated display form details |  |

### Return type

[**DisplayForm**](DisplayForm.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated DisplayForm |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

