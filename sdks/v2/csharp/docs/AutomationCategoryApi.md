# Keap.Core.V2.Api.AutomationCategoryApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateCategory**](AutomationCategoryApi.md#createcategory) | **POST** /v2/automationCategory | Create automation category |
| [**DeleteCategories**](AutomationCategoryApi.md#deletecategories) | **DELETE** /v2/automationCategory | Delete automation category |
| [**ListCategories**](AutomationCategoryApi.md#listcategories) | **GET** /v2/automationCategory | List automation categories |
| [**PatchCategory**](AutomationCategoryApi.md#patchcategory) | **PATCH** /v2/automationCategory/{id} | Update automation category |

<a id="createcategory"></a>
# **CreateCategory**
> AutomationCategory CreateCategory (CreateAutomationCategoryRequest createAutomationCategoryRequest)

Create automation category

Creates a single automation category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateCategoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AutomationCategoryApi(config);
            var createAutomationCategoryRequest = new CreateAutomationCategoryRequest(); // CreateAutomationCategoryRequest | createAutomationCategoryRequest

            try
            {
                // Create automation category
                AutomationCategory result = apiInstance.CreateCategory(createAutomationCategoryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationCategoryApi.CreateCategory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateCategoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create automation category
    ApiResponse<AutomationCategory> response = apiInstance.CreateCategoryWithHttpInfo(createAutomationCategoryRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationCategoryApi.CreateCategoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createAutomationCategoryRequest** | [**CreateAutomationCategoryRequest**](CreateAutomationCategoryRequest.md) | createAutomationCategoryRequest |  |

### Return type

[**AutomationCategory**](AutomationCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletecategories"></a>
# **DeleteCategories**
> void DeleteCategories (List<long> ids)

Delete automation category

Deletes one or more automation categories based on the request parameters

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteCategoriesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AutomationCategoryApi(config);
            var ids = new List<long>(); // List<long> | ids

            try
            {
                // Delete automation category
                apiInstance.DeleteCategories(ids);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationCategoryApi.DeleteCategories: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteCategoriesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete automation category
    apiInstance.DeleteCategoriesWithHttpInfo(ids);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationCategoryApi.DeleteCategoriesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **ids** | [**List&lt;long&gt;**](long.md) | ids |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listcategories"></a>
# **ListCategories**
> ListAutomationCategoryResponse ListCategories ()

List automation categories

Retrieves a list of automation categories

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListCategoriesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AutomationCategoryApi(config);

            try
            {
                // List automation categories
                ListAutomationCategoryResponse result = apiInstance.ListCategories();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationCategoryApi.ListCategories: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListCategoriesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List automation categories
    ApiResponse<ListAutomationCategoryResponse> response = apiInstance.ListCategoriesWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationCategoryApi.ListCategoriesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ListAutomationCategoryResponse**](ListAutomationCategoryResponse.md)

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

<a id="patchcategory"></a>
# **PatchCategory**
> AutomationCategory PatchCategory (string id, PatchAutomationCategoryRequest patchAutomationCategoryRequest)

Update automation category

Updates part of a single automation category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class PatchCategoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AutomationCategoryApi(config);
            var id = "id_example";  // string | id
            var patchAutomationCategoryRequest = new PatchAutomationCategoryRequest(); // PatchAutomationCategoryRequest | patchAutomationCategoryRequest

            try
            {
                // Update automation category
                AutomationCategory result = apiInstance.PatchCategory(id, patchAutomationCategoryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationCategoryApi.PatchCategory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchCategoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update automation category
    ApiResponse<AutomationCategory> response = apiInstance.PatchCategoryWithHttpInfo(id, patchAutomationCategoryRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationCategoryApi.PatchCategoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **patchAutomationCategoryRequest** | [**PatchAutomationCategoryRequest**](PatchAutomationCategoryRequest.md) | patchAutomationCategoryRequest |  |

### Return type

[**AutomationCategory**](AutomationCategory.md)

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

