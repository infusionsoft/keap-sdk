# Keap.Core.V2.Api.LeadSourceRecurringExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#createleadsourcerecurringexpense) | **POST** /v2/leadSources/{lead_source_id}/recurringExpenses | Create a Lead Source Recurring Expense |
| [**DeleteLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#deleteleadsourcerecurringexpense) | **DELETE** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Delete a Lead Source Recurring Expense |
| [**GetLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#getleadsourcerecurringexpense) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Retrieve a Lead Source Recurring Expense |
| [**ListExpensesIncurredFromLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#listexpensesincurredfromleadsourcerecurringexpense) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}/expenses | Retrieves a list of expenses incurred from a recurring expense |
| [**ListLeadSourceRecurringExpenses**](LeadSourceRecurringExpensesApi.md#listleadsourcerecurringexpenses) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses | Retrieves a list of lead source recurring expenses |
| [**UpdateLeadSourceRecurringExpense**](LeadSourceRecurringExpensesApi.md#updateleadsourcerecurringexpense) | **PATCH** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Update a Lead Source Recurring Expense |

<a id="createleadsourcerecurringexpense"></a>
# **CreateLeadSourceRecurringExpense**
> LeadSourceRecurringExpense CreateLeadSourceRecurringExpense (string leadSourceId, CreateLeadSourceRecurringExpenseRequest createLeadSourceRecurringExpenseRequest)

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
    public class CreateLeadSourceRecurringExpenseExample
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
                LeadSourceRecurringExpense result = apiInstance.CreateLeadSourceRecurringExpense(leadSourceId, createLeadSourceRecurringExpenseRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.CreateLeadSourceRecurringExpense: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateLeadSourceRecurringExpenseWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Lead Source Recurring Expense
    ApiResponse<LeadSourceRecurringExpense> response = apiInstance.CreateLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, createLeadSourceRecurringExpenseRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.CreateLeadSourceRecurringExpenseWithHttpInfo: " + e.Message);
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

<a id="deleteleadsourcerecurringexpense"></a>
# **DeleteLeadSourceRecurringExpense**
> void DeleteLeadSourceRecurringExpense (string leadSourceId, string leadSourceRecurringExpenseId)

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
    public class DeleteLeadSourceRecurringExpenseExample
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
                apiInstance.DeleteLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.DeleteLeadSourceRecurringExpense: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteLeadSourceRecurringExpenseWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Lead Source Recurring Expense
    apiInstance.DeleteLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.DeleteLeadSourceRecurringExpenseWithHttpInfo: " + e.Message);
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

<a id="getleadsourcerecurringexpense"></a>
# **GetLeadSourceRecurringExpense**
> LeadSourceRecurringExpense GetLeadSourceRecurringExpense (string leadSourceId, string leadSourceRecurringExpenseId)

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
    public class GetLeadSourceRecurringExpenseExample
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
                LeadSourceRecurringExpense result = apiInstance.GetLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.GetLeadSourceRecurringExpense: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetLeadSourceRecurringExpenseWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Lead Source Recurring Expense
    ApiResponse<LeadSourceRecurringExpense> response = apiInstance.GetLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.GetLeadSourceRecurringExpenseWithHttpInfo: " + e.Message);
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

<a id="listexpensesincurredfromleadsourcerecurringexpense"></a>
# **ListExpensesIncurredFromLeadSourceRecurringExpense**
> ListLeadSourceExpensesResponse ListExpensesIncurredFromLeadSourceRecurringExpense (string leadSourceId, string leadSourceRecurringExpenseId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

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
    public class ListExpensesIncurredFromLeadSourceRecurringExpenseExample
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
                ListLeadSourceExpensesResponse result = apiInstance.ListExpensesIncurredFromLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.ListExpensesIncurredFromLeadSourceRecurringExpense: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a list of expenses incurred from a recurring expense
    ApiResponse<ListLeadSourceExpensesResponse> response = apiInstance.ListExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.ListExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo: " + e.Message);
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

<a id="listleadsourcerecurringexpenses"></a>
# **ListLeadSourceRecurringExpenses**
> ListLeadSourceRecurringExpensesResponse ListLeadSourceRecurringExpenses (string leadSourceId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

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
    public class ListLeadSourceRecurringExpensesExample
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
                ListLeadSourceRecurringExpensesResponse result = apiInstance.ListLeadSourceRecurringExpenses(leadSourceId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.ListLeadSourceRecurringExpenses: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListLeadSourceRecurringExpensesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a list of lead source recurring expenses
    ApiResponse<ListLeadSourceRecurringExpensesResponse> response = apiInstance.ListLeadSourceRecurringExpensesWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.ListLeadSourceRecurringExpensesWithHttpInfo: " + e.Message);
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

<a id="updateleadsourcerecurringexpense"></a>
# **UpdateLeadSourceRecurringExpense**
> LeadSourceRecurringExpense UpdateLeadSourceRecurringExpense (string leadSourceId, string leadSourceRecurringExpenseId, LeadSourceRecurringExpenseUpdateRequest leadSourceRecurringExpenseUpdateRequest, List<string>? updateMask = null)

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
    public class UpdateLeadSourceRecurringExpenseExample
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
                LeadSourceRecurringExpense result = apiInstance.UpdateLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.UpdateLeadSourceRecurringExpense: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateLeadSourceRecurringExpenseWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Lead Source Recurring Expense
    ApiResponse<LeadSourceRecurringExpense> response = apiInstance.UpdateLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceRecurringExpensesApi.UpdateLeadSourceRecurringExpenseWithHttpInfo: " + e.Message);
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

