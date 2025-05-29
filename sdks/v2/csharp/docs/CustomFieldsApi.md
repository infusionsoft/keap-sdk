# Keap.Core.V2.Api.CustomFieldsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetCustomFields**](CustomFieldsApi.md#getcustomfields) | **GET** /v2/customFields | Retrieves a list of custom fields in a tenant. |
| [**UpdateCustomField**](CustomFieldsApi.md#updatecustomfield) | **PATCH** /v2/customFields/{id} | Updates a custom field |

<a id="getcustomfields"></a>
# **GetCustomFields**
> PipelineCustomFields GetCustomFields (string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

Retrieves a list of custom fields in a tenant.

Retrieves a list of custom fields in a tenant.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetCustomFieldsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new CustomFieldsApi(config);
            var filter = "filter_example";  // string? |  (optional) 
            var pageToken = "pageToken_example";  // string? |  (optional) 
            var orderBy = "orderBy_example";  // string? |  (optional) 
            var pageSize = 100;  // int? |  (optional)  (default to 1000)

            try
            {
                // Retrieves a list of custom fields in a tenant.
                PipelineCustomFields result = apiInstance.GetCustomFields(filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CustomFieldsApi.GetCustomFields: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCustomFieldsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a list of custom fields in a tenant.
    ApiResponse<PipelineCustomFields> response = apiInstance.GetCustomFieldsWithHttpInfo(filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CustomFieldsApi.GetCustomFieldsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** |  | [optional]  |
| **pageToken** | **string?** |  | [optional]  |
| **orderBy** | **string?** |  | [optional]  |
| **pageSize** | **int?** |  | [optional] [default to 1000] |

### Return type

[**PipelineCustomFields**](PipelineCustomFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a list of PipelineCustomFields |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatecustomfield"></a>
# **UpdateCustomField**
> PipelineCustomField UpdateCustomField (string id, UpdateCustomFieldRequest updateCustomFieldRequest)

Updates a custom field

Updates a custom field

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new CustomFieldsApi(config);
            var id = "id_example";  // string | the identifier of the custom field to update
            var updateCustomFieldRequest = new UpdateCustomFieldRequest(); // UpdateCustomFieldRequest | the request body containing updated custom field details

            try
            {
                // Updates a custom field
                PipelineCustomField result = apiInstance.UpdateCustomField(id, updateCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CustomFieldsApi.UpdateCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Updates a custom field
    ApiResponse<PipelineCustomField> response = apiInstance.UpdateCustomFieldWithHttpInfo(id, updateCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CustomFieldsApi.UpdateCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the identifier of the custom field to update |  |
| **updateCustomFieldRequest** | [**UpdateCustomFieldRequest**](UpdateCustomFieldRequest.md) | the request body containing updated custom field details |  |

### Return type

[**PipelineCustomField**](PipelineCustomField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated PipelineCustomField |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

