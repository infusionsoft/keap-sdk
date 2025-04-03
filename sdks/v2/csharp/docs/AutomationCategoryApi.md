# Keap.Core.V2.Api.AutomationCategoryApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateCategoryUsingPOST**](AutomationCategoryApi.md#createcategoryusingpost) | **POST** /v2/automationCategory | Create automation category |
| [**DeleteCategoriesUsingDELETE**](AutomationCategoryApi.md#deletecategoriesusingdelete) | **DELETE** /v2/automationCategory | Delete automation category |
| [**ListCategoriesUsingGET**](AutomationCategoryApi.md#listcategoriesusingget) | **GET** /v2/automationCategory | List automation categories |
| [**SaveCategoryUsingPUT**](AutomationCategoryApi.md#savecategoryusingput) | **PUT** /v2/automationCategory | Save automation category |

<a id="createcategoryusingpost"></a>
# **CreateCategoryUsingPOST**
> AutomationCategory CreateCategoryUsingPOST (CreateAutomationCategoryRequest createAutomationCategoryRequest)

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
    public class CreateCategoryUsingPOSTExample
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
                AutomationCategory result = apiInstance.CreateCategoryUsingPOST(createAutomationCategoryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationCategoryApi.CreateCategoryUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateCategoryUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create automation category
    ApiResponse<AutomationCategory> response = apiInstance.CreateCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationCategoryApi.CreateCategoryUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="deletecategoriesusingdelete"></a>
# **DeleteCategoriesUsingDELETE**
> void DeleteCategoriesUsingDELETE (List<long> ids)

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
    public class DeleteCategoriesUsingDELETEExample
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
                apiInstance.DeleteCategoriesUsingDELETE(ids);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationCategoryApi.DeleteCategoriesUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteCategoriesUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete automation category
    apiInstance.DeleteCategoriesUsingDELETEWithHttpInfo(ids);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationCategoryApi.DeleteCategoriesUsingDELETEWithHttpInfo: " + e.Message);
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

<a id="listcategoriesusingget"></a>
# **ListCategoriesUsingGET**
> ListAutomationCategoryResponse ListCategoriesUsingGET ()

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
    public class ListCategoriesUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AutomationCategoryApi(config);

            try
            {
                // List automation categories
                ListAutomationCategoryResponse result = apiInstance.ListCategoriesUsingGET();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationCategoryApi.ListCategoriesUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListCategoriesUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List automation categories
    ApiResponse<ListAutomationCategoryResponse> response = apiInstance.ListCategoriesUsingGETWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationCategoryApi.ListCategoriesUsingGETWithHttpInfo: " + e.Message);
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

<a id="savecategoryusingput"></a>
# **SaveCategoryUsingPUT**
> AutomationCategory SaveCategoryUsingPUT (SaveAutomationCategoryRequest saveAutomationCategoryRequest)

Save automation category

Creates or updates a single automation category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class SaveCategoryUsingPUTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AutomationCategoryApi(config);
            var saveAutomationCategoryRequest = new SaveAutomationCategoryRequest(); // SaveAutomationCategoryRequest | saveAutomationCategoryRequest

            try
            {
                // Save automation category
                AutomationCategory result = apiInstance.SaveCategoryUsingPUT(saveAutomationCategoryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationCategoryApi.SaveCategoryUsingPUT: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SaveCategoryUsingPUTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Save automation category
    ApiResponse<AutomationCategory> response = apiInstance.SaveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationCategoryApi.SaveCategoryUsingPUTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **saveAutomationCategoryRequest** | [**SaveAutomationCategoryRequest**](SaveAutomationCategoryRequest.md) | saveAutomationCategoryRequest |  |

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

