# Keap.Core.V2.Api.LeadSourceCategoriesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateLeadSourceCategoryUsingPOST**](LeadSourceCategoriesApi.md#createleadsourcecategoryusingpost) | **POST** /v2/leadSourceCategories | Create a Lead Source Category |
| [**DeleteLeadSourceCategoryUsingDELETE**](LeadSourceCategoriesApi.md#deleteleadsourcecategoryusingdelete) | **DELETE** /v2/leadSourceCategories/{lead_source_category_id} | Delete a Lead Source Category |
| [**GetLeadSourceCategoryUsingGET**](LeadSourceCategoriesApi.md#getleadsourcecategoryusingget) | **GET** /v2/leadSourceCategories/{lead_source_category_id} | Retrieve a Lead Source Category |
| [**ListCategoriesUsingGET1**](LeadSourceCategoriesApi.md#listcategoriesusingget1) | **GET** /v2/leadSourceCategories | List Lead Source Categories |
| [**UpdateLeadSourceCategoryUsingPATCH**](LeadSourceCategoriesApi.md#updateleadsourcecategoryusingpatch) | **PATCH** /v2/leadSourceCategories/{lead_source_category_id} | Update a Lead Source Category |

<a id="createleadsourcecategoryusingpost"></a>
# **CreateLeadSourceCategoryUsingPOST**
> LeadSourceCategory CreateLeadSourceCategoryUsingPOST (CreateUpdateLeadSourceCategoryRequest createUpdateLeadSourceCategoryRequest)

Create a Lead Source Category

Creates a new Lead Source Category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateLeadSourceCategoryUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceCategoriesApi(config);
            var createUpdateLeadSourceCategoryRequest = new CreateUpdateLeadSourceCategoryRequest(); // CreateUpdateLeadSourceCategoryRequest | The request object to create a new lead source category

            try
            {
                // Create a Lead Source Category
                LeadSourceCategory result = apiInstance.CreateLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceCategoriesApi.CreateLeadSourceCategoryUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateLeadSourceCategoryUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Lead Source Category
    ApiResponse<LeadSourceCategory> response = apiInstance.CreateLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceCategoriesApi.CreateLeadSourceCategoryUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md) | The request object to create a new lead source category |  |

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteleadsourcecategoryusingdelete"></a>
# **DeleteLeadSourceCategoryUsingDELETE**
> void DeleteLeadSourceCategoryUsingDELETE (string leadSourceCategoryId)

Delete a Lead Source Category

Deletes the specified Lead Source Category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteLeadSourceCategoryUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceCategoriesApi(config);
            var leadSourceCategoryId = "leadSourceCategoryId_example";  // string | The ID of a lead source category

            try
            {
                // Delete a Lead Source Category
                apiInstance.DeleteLeadSourceCategoryUsingDELETE(leadSourceCategoryId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceCategoriesApi.DeleteLeadSourceCategoryUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteLeadSourceCategoryUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Lead Source Category
    apiInstance.DeleteLeadSourceCategoryUsingDELETEWithHttpInfo(leadSourceCategoryId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceCategoriesApi.DeleteLeadSourceCategoryUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceCategoryId** | **string** | The ID of a lead source category |  |

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

<a id="getleadsourcecategoryusingget"></a>
# **GetLeadSourceCategoryUsingGET**
> LeadSourceCategory GetLeadSourceCategoryUsingGET (string leadSourceCategoryId)

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given ID

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetLeadSourceCategoryUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceCategoriesApi(config);
            var leadSourceCategoryId = "leadSourceCategoryId_example";  // string | The ID of a lead source category

            try
            {
                // Retrieve a Lead Source Category
                LeadSourceCategory result = apiInstance.GetLeadSourceCategoryUsingGET(leadSourceCategoryId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceCategoriesApi.GetLeadSourceCategoryUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetLeadSourceCategoryUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Lead Source Category
    ApiResponse<LeadSourceCategory> response = apiInstance.GetLeadSourceCategoryUsingGETWithHttpInfo(leadSourceCategoryId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceCategoriesApi.GetLeadSourceCategoryUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceCategoryId** | **string** | The ID of a lead source category |  |

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

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

<a id="listcategoriesusingget1"></a>
# **ListCategoriesUsingGET1**
> ListLeadSourceCategoriesResponse ListCategoriesUsingGET1 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Lead Source Categories

Retrieves a list of Lead Source Categories

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListCategoriesUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceCategoriesApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:  - (String) `name`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here is an example:  - `filter=name%3D%3Dexample` (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Lead Source Categories
                ListLeadSourceCategoriesResponse result = apiInstance.ListCategoriesUsingGET1(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceCategoriesApi.ListCategoriesUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListCategoriesUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Lead Source Categories
    ApiResponse<ListLeadSourceCategoriesResponse> response = apiInstance.ListCategoriesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceCategoriesApi.ListCategoriesUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListLeadSourceCategoriesResponse**](ListLeadSourceCategoriesResponse.md)

### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateleadsourcecategoryusingpatch"></a>
# **UpdateLeadSourceCategoryUsingPATCH**
> LeadSourceCategory UpdateLeadSourceCategoryUsingPATCH (string leadSourceCategoryId, CreateUpdateLeadSourceCategoryRequest createUpdateLeadSourceCategoryRequest, List<string>? updateMask = null)

Update a Lead Source Category

Updates a Lead Source Category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateLeadSourceCategoryUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceCategoriesApi(config);
            var leadSourceCategoryId = "leadSourceCategoryId_example";  // string | The ID of a lead source category
            var createUpdateLeadSourceCategoryRequest = new CreateUpdateLeadSourceCategoryRequest(); // CreateUpdateLeadSourceCategoryRequest | The request object to update a lead source category
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Lead Source Category
                LeadSourceCategory result = apiInstance.UpdateLeadSourceCategoryUsingPATCH(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceCategoriesApi.UpdateLeadSourceCategoryUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateLeadSourceCategoryUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Lead Source Category
    ApiResponse<LeadSourceCategory> response = apiInstance.UpdateLeadSourceCategoryUsingPATCHWithHttpInfo(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceCategoriesApi.UpdateLeadSourceCategoryUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceCategoryId** | **string** | The ID of a lead source category |  |
| **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md) | The request object to update a lead source category |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

### Authorization

No authorization required

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

