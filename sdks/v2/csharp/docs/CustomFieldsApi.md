# Keap.Core.V2.Api.CustomFieldsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetCustomFields**](CustomFieldsApi.md#getcustomfields) | **GET** /v2/customFields | Retrieves a list of custom fields in a tenant. |
| [**UpdateCustomField**](CustomFieldsApi.md#updatecustomfield) | **PATCH** /v2/customFields/{custom_field_id} | Updates a custom field |

<a id="getcustomfields"></a>
# **GetCustomFields**
> PipelineCustomFields GetCustomFields ()

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

            try
            {
                // Retrieves a list of custom fields in a tenant.
                PipelineCustomFields result = apiInstance.GetCustomFields();
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
    ApiResponse<PipelineCustomFields> response = apiInstance.GetCustomFieldsWithHttpInfo();
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
This endpoint does not need any parameter.
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
> PipelineCustomField UpdateCustomField (string customFieldId, UpdateCustomFieldRequest updateCustomFieldRequest)

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
            var customFieldId = "customFieldId_example";  // string | the identifier of the custom field to update
            var updateCustomFieldRequest = new UpdateCustomFieldRequest(); // UpdateCustomFieldRequest | the request body containing updated custom field details

            try
            {
                // Updates a custom field
                PipelineCustomField result = apiInstance.UpdateCustomField(customFieldId, updateCustomFieldRequest);
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
    ApiResponse<PipelineCustomField> response = apiInstance.UpdateCustomFieldWithHttpInfo(customFieldId, updateCustomFieldRequest);
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
| **customFieldId** | **string** | the identifier of the custom field to update |  |
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

