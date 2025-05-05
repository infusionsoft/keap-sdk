# Keap.Core.V2.Api.LeadSourceRecurringExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateLeadSourceRecurringExpenseUsingPOST**](LeadSourceRecurringExpensesApi.md#createleadsourcerecurringexpenseusingpost) | **POST** /v2/leadSources/{lead_source_id}/recurringExpenses | Create a Lead Source Recurring Expense |
| [**DeleteLeadSourceRecurringExpenseUsingDELETE**](LeadSourceRecurringExpensesApi.md#deleteleadsourcerecurringexpenseusingdelete) | **DELETE** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Delete a Lead Source Recurring Expense |
| [**GetLeadSourceRecurringExpenseUsingGET**](LeadSourceRecurringExpensesApi.md#getleadsourcerecurringexpenseusingget) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Retrieve a Lead Source Recurring Expense |
| [**ListExpensesIncurredFromLeadSourceRecurringExpenseUsingGET**](LeadSourceRecurringExpensesApi.md#listexpensesincurredfromleadsourcerecurringexpenseusingget) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}/expenses | Retrieves a list of expenses incurred from a recurring expense |
| [**ListLeadSourceRecurringExpensesUsingGET**](LeadSourceRecurringExpensesApi.md#listleadsourcerecurringexpensesusingget) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses | Retrieves a list of lead source recurring expenses |
| [**UpdateLeadSourceRecurringExpenseUsingPATCH**](LeadSourceRecurringExpensesApi.md#updateleadsourcerecurringexpenseusingpatch) | **PATCH** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Update a Lead Source Recurring Expense |

<a id="createleadsourcerecurringexpenseusingpost"></a>
# **CreateLeadSourceRecurringExpenseUsingPOST**
> LeadSourceRecurringExpense CreateLeadSourceRecurringExpenseUsingPOST (string leadSourceId, CreateLeadSourceRecurringExpenseRequest createLeadSourceRecurringExpenseRequest)

Create a Lead Source Recurring Expense

Creates a new Lead Source Recurring Expense

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateLeadSourceRecurringExpenseUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceRecurringExpensesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this recurring expense belongs to
            var createLeadSourceRecurringExpenseRequest = new CreateLeadSourceRecurringExpenseRequest(); // CreateLeadSourceRecurringExpenseRequest | The request object to create a new lead source recurring expense

            try
            {
                // Create a Lead Source Recurring Expense
                LeadSourceRecurringExpense result = apiInstance.CreateLeadSourceRecurringExpenseUsingPOST(leadSourceId, createLeadSourceRecurringExpenseRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.CreateLeadSourceRecurringExpenseUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateLeadSourceRecurringExpenseUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Lead Source Recurring Expense
    ApiResponse<LeadSourceRecurringExpense> response = apiInstance.CreateLeadSourceRecurringExpenseUsingPOSTWithHttpInfo(leadSourceId, createLeadSourceRecurringExpenseRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.CreateLeadSourceRecurringExpenseUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of the lead source this recurring expense belongs to |  |
| **createLeadSourceRecurringExpenseRequest** | [**CreateLeadSourceRecurringExpenseRequest**](CreateLeadSourceRecurringExpenseRequest.md) | The request object to create a new lead source recurring expense |  |

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)

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

<a id="deleteleadsourcerecurringexpenseusingdelete"></a>
# **DeleteLeadSourceRecurringExpenseUsingDELETE**
> void DeleteLeadSourceRecurringExpenseUsingDELETE (string leadSourceId, string leadSourceRecurringExpenseId)

Delete a Lead Source Recurring Expense

Deletes a new Lead Source Recurring Expense that belongs to a Lead Source

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteLeadSourceRecurringExpenseUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceRecurringExpensesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this recurring expense belongs to
            var leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example";  // string | The ID of a lead source recurring expense

            try
            {
                // Delete a Lead Source Recurring Expense
                apiInstance.DeleteLeadSourceRecurringExpenseUsingDELETE(leadSourceId, leadSourceRecurringExpenseId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.DeleteLeadSourceRecurringExpenseUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Lead Source Recurring Expense
    apiInstance.DeleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.DeleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of the lead source this recurring expense belongs to |  |
| **leadSourceRecurringExpenseId** | **string** | The ID of a lead source recurring expense |  |

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

<a id="getleadsourcerecurringexpenseusingget"></a>
# **GetLeadSourceRecurringExpenseUsingGET**
> LeadSourceRecurringExpense GetLeadSourceRecurringExpenseUsingGET (string leadSourceId, string leadSourceRecurringExpenseId)

Retrieve a Lead Source Recurring Expense

Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetLeadSourceRecurringExpenseUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceRecurringExpensesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this recurring expense belongs to
            var leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example";  // string | The ID of a lead source recurring expense

            try
            {
                // Retrieve a Lead Source Recurring Expense
                LeadSourceRecurringExpense result = apiInstance.GetLeadSourceRecurringExpenseUsingGET(leadSourceId, leadSourceRecurringExpenseId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.GetLeadSourceRecurringExpenseUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetLeadSourceRecurringExpenseUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Lead Source Recurring Expense
    ApiResponse<LeadSourceRecurringExpense> response = apiInstance.GetLeadSourceRecurringExpenseUsingGETWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.GetLeadSourceRecurringExpenseUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of the lead source this recurring expense belongs to |  |
| **leadSourceRecurringExpenseId** | **string** | The ID of a lead source recurring expense |  |

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)

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

<a id="listexpensesincurredfromleadsourcerecurringexpenseusingget"></a>
# **ListExpensesIncurredFromLeadSourceRecurringExpenseUsingGET**
> ListLeadSourceExpensesResponse ListExpensesIncurredFromLeadSourceRecurringExpenseUsingGET (string leadSourceId, string leadSourceRecurringExpenseId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

Retrieves a list of expenses incurred from a recurring expense

Retrieves a list of expenses incurred from a recurring expense

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListExpensesIncurredFromLeadSourceRecurringExpenseUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceRecurringExpensesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this recurring expense belongs to
            var leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example";  // string | The ID of a lead source recurring expense
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z` (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // Retrieves a list of expenses incurred from a recurring expense
                ListLeadSourceExpensesResponse result = apiInstance.ListExpensesIncurredFromLeadSourceRecurringExpenseUsingGET(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.ListExpensesIncurredFromLeadSourceRecurringExpenseUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a list of expenses incurred from a recurring expense
    ApiResponse<ListLeadSourceExpensesResponse> response = apiInstance.ListExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.ListExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of the lead source this recurring expense belongs to |  |
| **leadSourceRecurringExpenseId** | **string** | The ID of a lead source recurring expense |  |
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

<a id="listleadsourcerecurringexpensesusingget"></a>
# **ListLeadSourceRecurringExpensesUsingGET**
> ListLeadSourceRecurringExpensesResponse ListLeadSourceRecurringExpensesUsingGET (string leadSourceId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

Retrieves a list of lead source recurring expenses

Retrieves a list of recurring expenses with lead_source_id and optional 'filter' query param

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListLeadSourceRecurringExpensesUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceRecurringExpensesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this recurring expense belongs to
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `start_time` - (String) `end_time` - (String) `next_expense_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=next_expense_time%3D%3D2024-12-22T01:00:00.000Z` (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `title` - `amount` - `start_time` - `end_time` - `next_expense_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // Retrieves a list of lead source recurring expenses
                ListLeadSourceRecurringExpensesResponse result = apiInstance.ListLeadSourceRecurringExpensesUsingGET(leadSourceId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.ListLeadSourceRecurringExpensesUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListLeadSourceRecurringExpensesUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a list of lead source recurring expenses
    ApiResponse<ListLeadSourceRecurringExpensesResponse> response = apiInstance.ListLeadSourceRecurringExpensesUsingGETWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.ListLeadSourceRecurringExpensesUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of the lead source this recurring expense belongs to |  |
| **filter** | **string?** | Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListLeadSourceRecurringExpensesResponse**](ListLeadSourceRecurringExpensesResponse.md)

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

<a id="updateleadsourcerecurringexpenseusingpatch"></a>
# **UpdateLeadSourceRecurringExpenseUsingPATCH**
> LeadSourceRecurringExpense UpdateLeadSourceRecurringExpenseUsingPATCH (string leadSourceId, string leadSourceRecurringExpenseId, LeadSourceRecurringExpenseUpdateRequest leadSourceRecurringExpenseUpdateRequest, List<string>? updateMask = null)

Update a Lead Source Recurring Expense

Updates a Lead Source Recurring Expense

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateLeadSourceRecurringExpenseUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourceRecurringExpensesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of the lead source this recurring expense belongs to
            var leadSourceRecurringExpenseId = "leadSourceRecurringExpenseId_example";  // string | The ID of a lead source recurring expense
            var leadSourceRecurringExpenseUpdateRequest = new LeadSourceRecurringExpenseUpdateRequest(); // LeadSourceRecurringExpenseUpdateRequest | The request object to update a lead source recurring expense
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Lead Source Recurring Expense
                LeadSourceRecurringExpense result = apiInstance.UpdateLeadSourceRecurringExpenseUsingPATCH(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.UpdateLeadSourceRecurringExpenseUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Lead Source Recurring Expense
    ApiResponse<LeadSourceRecurringExpense> response = apiInstance.UpdateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.UpdateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of the lead source this recurring expense belongs to |  |
| **leadSourceRecurringExpenseId** | **string** | The ID of a lead source recurring expense |  |
| **leadSourceRecurringExpenseUpdateRequest** | [**LeadSourceRecurringExpenseUpdateRequest**](LeadSourceRecurringExpenseUpdateRequest.md) | The request object to update a lead source recurring expense |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)

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

