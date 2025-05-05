# Keap.Core.V2.Api.LeadSourceExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateLeadSourceExpenseUsingPOST**](LeadSourceExpensesApi.md#createleadsourceexpenseusingpost) | **POST** /v2/leadSources/{lead_source_id}/expenses | Create a Lead Source Expense |
| [**DeleteLeadSourceUsingDELETE1**](LeadSourceExpensesApi.md#deleteleadsourceusingdelete1) | **DELETE** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Delete a lead source expense |
| [**GetLeadSourceExpenseUsingGET**](LeadSourceExpensesApi.md#getleadsourceexpenseusingget) | **GET** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Retrieve a Lead Source Expense |
| [**ListLeadSourceExpensesUsingGET**](LeadSourceExpensesApi.md#listleadsourceexpensesusingget) | **GET** /v2/leadSources/{lead_source_id}/expenses | List Lead Source Expenses |
| [**UpdateLeadSourceExpenseUsingPATCH**](LeadSourceExpensesApi.md#updateleadsourceexpenseusingpatch) | **PATCH** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Update a Lead Source Expense |

<a id="createleadsourceexpenseusingpost"></a>
# **CreateLeadSourceExpenseUsingPOST**
> LeadSourceExpense CreateLeadSourceExpenseUsingPOST (string leadSourceId, CreateLeadSourceExpenseRequest createLeadSourceExpenseRequest)

Create a Lead Source Expense

Creates a new Lead Source Expense

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateLeadSourceExpenseUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceExpensesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this expense belongs to
            var createLeadSourceExpenseRequest = new CreateLeadSourceExpenseRequest(); // CreateLeadSourceExpenseRequest | The request object to create a new lead source expense

            try
            {
                // Create a Lead Source Expense
                LeadSourceExpense result = apiInstance.CreateLeadSourceExpenseUsingPOST(leadSourceId, createLeadSourceExpenseRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceExpensesApi.CreateLeadSourceExpenseUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateLeadSourceExpenseUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Lead Source Expense
    ApiResponse<LeadSourceExpense> response = apiInstance.CreateLeadSourceExpenseUsingPOSTWithHttpInfo(leadSourceId, createLeadSourceExpenseRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceExpensesApi.CreateLeadSourceExpenseUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of the lead source this expense belongs to |  |
| **createLeadSourceExpenseRequest** | [**CreateLeadSourceExpenseRequest**](CreateLeadSourceExpenseRequest.md) | The request object to create a new lead source expense |  |

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)

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
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteleadsourceusingdelete1"></a>
# **DeleteLeadSourceUsingDELETE1**
> void DeleteLeadSourceUsingDELETE1 (string leadSourceExpenseId, string leadSourceId)

Delete a lead source expense

Deletes a lead source expense by ID

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteLeadSourceUsingDELETE1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceExpensesApi(config);
            var leadSourceExpenseId = "leadSourceExpenseId_example";  // string | The ID of a lead source expense
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this expense belongs to

            try
            {
                // Delete a lead source expense
                apiInstance.DeleteLeadSourceUsingDELETE1(leadSourceExpenseId, leadSourceId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceExpensesApi.DeleteLeadSourceUsingDELETE1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteLeadSourceUsingDELETE1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a lead source expense
    apiInstance.DeleteLeadSourceUsingDELETE1WithHttpInfo(leadSourceExpenseId, leadSourceId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceExpensesApi.DeleteLeadSourceUsingDELETE1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceExpenseId** | **string** | The ID of a lead source expense |  |
| **leadSourceId** | **string** | The ID of the lead source this expense belongs to |  |

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

<a id="getleadsourceexpenseusingget"></a>
# **GetLeadSourceExpenseUsingGET**
> LeadSourceExpense GetLeadSourceExpenseUsingGET (string leadSourceExpenseId, string leadSourceId)

Retrieve a Lead Source Expense

Retrieves a single Lead Source Expense for a given ID

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetLeadSourceExpenseUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceExpensesApi(config);
            var leadSourceExpenseId = "leadSourceExpenseId_example";  // string | The ID of a lead source expense
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this expense belongs to

            try
            {
                // Retrieve a Lead Source Expense
                LeadSourceExpense result = apiInstance.GetLeadSourceExpenseUsingGET(leadSourceExpenseId, leadSourceId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceExpensesApi.GetLeadSourceExpenseUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetLeadSourceExpenseUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Lead Source Expense
    ApiResponse<LeadSourceExpense> response = apiInstance.GetLeadSourceExpenseUsingGETWithHttpInfo(leadSourceExpenseId, leadSourceId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceExpensesApi.GetLeadSourceExpenseUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceExpenseId** | **string** | The ID of a lead source expense |  |
| **leadSourceId** | **string** | The ID of the lead source this expense belongs to |  |

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)

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

<a id="listleadsourceexpensesusingget"></a>
# **ListLeadSourceExpensesUsingGET**
> ListLeadSourceExpensesResponse ListLeadSourceExpensesUsingGET (string leadSourceId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Lead Source Expenses

Retrieves a list of lead source expenses

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListLeadSourceExpensesUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceExpensesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this expense belongs to
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z` (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Lead Source Expenses
                ListLeadSourceExpensesResponse result = apiInstance.ListLeadSourceExpensesUsingGET(leadSourceId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceExpensesApi.ListLeadSourceExpensesUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListLeadSourceExpensesUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Lead Source Expenses
    ApiResponse<ListLeadSourceExpensesResponse> response = apiInstance.ListLeadSourceExpensesUsingGETWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceExpensesApi.ListLeadSourceExpensesUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of the lead source this expense belongs to |  |
| **filter** | **string?** | Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListLeadSourceExpensesResponse**](ListLeadSourceExpensesResponse.md)

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

<a id="updateleadsourceexpenseusingpatch"></a>
# **UpdateLeadSourceExpenseUsingPATCH**
> LeadSourceExpense UpdateLeadSourceExpenseUsingPATCH (string leadSourceExpenseId, string leadSourceId, UpdateLeadSourceExpenseRequest updateLeadSourceExpenseRequest, List<string>? updateMask = null)

Update a Lead Source Expense

Updates a new Lead Source Expense

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateLeadSourceExpenseUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceExpensesApi(config);
            var leadSourceExpenseId = "leadSourceExpenseId_example";  // string | The ID of a lead source expense
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this expense belongs to
            var updateLeadSourceExpenseRequest = new UpdateLeadSourceExpenseRequest(); // UpdateLeadSourceExpenseRequest | The request object to update a lead source expense
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Lead Source Expense
                LeadSourceExpense result = apiInstance.UpdateLeadSourceExpenseUsingPATCH(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceExpensesApi.UpdateLeadSourceExpenseUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateLeadSourceExpenseUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Lead Source Expense
    ApiResponse<LeadSourceExpense> response = apiInstance.UpdateLeadSourceExpenseUsingPATCHWithHttpInfo(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceExpensesApi.UpdateLeadSourceExpenseUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceExpenseId** | **string** | The ID of a lead source expense |  |
| **leadSourceId** | **string** | The ID of the lead source this expense belongs to |  |
| **updateLeadSourceExpenseRequest** | [**UpdateLeadSourceExpenseRequest**](UpdateLeadSourceExpenseRequest.md) | The request object to update a lead source expense |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)

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

