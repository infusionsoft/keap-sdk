# Keap.Core.V2.Api.AutomationApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AchieveGoal**](AutomationApi.md#achievegoal) | **POST** /rest/v2/automations/goals/achieve | Achieve an Automation Goal |
| [**AddContactsToAutomationSequence**](AutomationApi.md#addcontactstoautomationsequence) | **POST** /rest/v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence |
| [**BulkAssignmentAutomationsCategories**](AutomationApi.md#bulkassignmentautomationscategories) | **POST** /rest/v2/automations/categories/batchAssign | Bulk update for Automations Categories |
| [**BulkUnpublishAutomations**](AutomationApi.md#bulkunpublishautomations) | **POST** /rest/v2/automations/batch-unpublish | Bulk unpublish Automations |
| [**DeleteAutomation**](AutomationApi.md#deleteautomation) | **DELETE** /rest/v2/automations | Delete an Automation |
| [**GetAutomation**](AutomationApi.md#getautomation) | **GET** /rest/v2/automations/{automation_id} | Retrieve an Automation |
| [**ListAllAutomationIds**](AutomationApi.md#listallautomationids) | **GET** /rest/v2/automations/ids | List Automations Ids |
| [**ListAutomations**](AutomationApi.md#listautomations) | **GET** /rest/v2/automations | List Automations |
| [**RenameAutomationV2**](AutomationApi.md#renameautomationv2) | **PATCH** /rest/v2/easy-automations/{automation_id} | Renames an Easy Automation. |
| [**UnpublishAutomation**](AutomationApi.md#unpublishautomation) | **PUT** /rest/v2/automations/{automation_id}/unpublish | Unpublish an Automation |

<a id="achievegoal"></a>
# **AchieveGoal**
> AchieveGoalResponse AchieveGoal (AchieveGoalRequest achieveGoalRequest)

Achieve an Automation Goal

Achieves a goal in an automation for a contact

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AchieveGoalExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AutomationApi(config);
            var achieveGoalRequest = new AchieveGoalRequest(); // AchieveGoalRequest | 

            try
            {
                // Achieve an Automation Goal
                AchieveGoalResponse result = apiInstance.AchieveGoal(achieveGoalRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationApi.AchieveGoal: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AchieveGoalWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Achieve an Automation Goal
    ApiResponse<AchieveGoalResponse> response = apiInstance.AchieveGoalWithHttpInfo(achieveGoalRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationApi.AchieveGoalWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **achieveGoalRequest** | [**AchieveGoalRequest**](AchieveGoalRequest.md) |  |  |

### Return type

[**AchieveGoalResponse**](AchieveGoalResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="addcontactstoautomationsequence"></a>
# **AddContactsToAutomationSequence**
> AddToAutomationSequenceResponse AddContactsToAutomationSequence (string automationId, string sequenceId, AddToAutomationSequenceRequest addToAutomationSequenceRequest)

Add Contacts to an Automation Sequence

Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AddContactsToAutomationSequenceExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AutomationApi(config);
            var automationId = "automationId_example";  // string | 
            var sequenceId = "sequenceId_example";  // string | 
            var addToAutomationSequenceRequest = new AddToAutomationSequenceRequest(); // AddToAutomationSequenceRequest | 

            try
            {
                // Add Contacts to an Automation Sequence
                AddToAutomationSequenceResponse result = apiInstance.AddContactsToAutomationSequence(automationId, sequenceId, addToAutomationSequenceRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationApi.AddContactsToAutomationSequence: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddContactsToAutomationSequenceWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add Contacts to an Automation Sequence
    ApiResponse<AddToAutomationSequenceResponse> response = apiInstance.AddContactsToAutomationSequenceWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationApi.AddContactsToAutomationSequenceWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **automationId** | **string** |  |  |
| **sequenceId** | **string** |  |  |
| **addToAutomationSequenceRequest** | [**AddToAutomationSequenceRequest**](AddToAutomationSequenceRequest.md) |  |  |

### Return type

[**AddToAutomationSequenceResponse**](AddToAutomationSequenceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="bulkassignmentautomationscategories"></a>
# **BulkAssignmentAutomationsCategories**
> void BulkAssignmentAutomationsCategories (AssignAutomationCategoryRequest assignAutomationCategoryRequest)

Bulk update for Automations Categories

Bulk updates the categories of one or more automations

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class BulkAssignmentAutomationsCategoriesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AutomationApi(config);
            var assignAutomationCategoryRequest = new AssignAutomationCategoryRequest(); // AssignAutomationCategoryRequest | 

            try
            {
                // Bulk update for Automations Categories
                apiInstance.BulkAssignmentAutomationsCategories(assignAutomationCategoryRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationApi.BulkAssignmentAutomationsCategories: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the BulkAssignmentAutomationsCategoriesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Bulk update for Automations Categories
    apiInstance.BulkAssignmentAutomationsCategoriesWithHttpInfo(assignAutomationCategoryRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationApi.BulkAssignmentAutomationsCategoriesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **assignAutomationCategoryRequest** | [**AssignAutomationCategoryRequest**](AssignAutomationCategoryRequest.md) |  |  |

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="bulkunpublishautomations"></a>
# **BulkUnpublishAutomations**
> void BulkUnpublishAutomations (BatchUnpublishAutomationRequest batchUnpublishAutomationRequest)

Bulk unpublish Automations

Bulk unpublish one or more automations

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class BulkUnpublishAutomationsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AutomationApi(config);
            var batchUnpublishAutomationRequest = new BatchUnpublishAutomationRequest(); // BatchUnpublishAutomationRequest | 

            try
            {
                // Bulk unpublish Automations
                apiInstance.BulkUnpublishAutomations(batchUnpublishAutomationRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationApi.BulkUnpublishAutomations: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the BulkUnpublishAutomationsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Bulk unpublish Automations
    apiInstance.BulkUnpublishAutomationsWithHttpInfo(batchUnpublishAutomationRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationApi.BulkUnpublishAutomationsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **batchUnpublishAutomationRequest** | [**BatchUnpublishAutomationRequest**](BatchUnpublishAutomationRequest.md) |  |  |

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteautomation"></a>
# **DeleteAutomation**
> void DeleteAutomation (List<long> automationIds)

Delete an Automation

Deletes a single automation

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteAutomationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AutomationApi(config);
            var automationIds = new List<long>(); // List<long> | 

            try
            {
                // Delete an Automation
                apiInstance.DeleteAutomation(automationIds);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationApi.DeleteAutomation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteAutomationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Automation
    apiInstance.DeleteAutomationWithHttpInfo(automationIds);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationApi.DeleteAutomationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **automationIds** | [**List&lt;long&gt;**](long.md) |  |  |

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getautomation"></a>
# **GetAutomation**
> Automation GetAutomation (string automationId)

Retrieve an Automation

Retrieves a single automation

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetAutomationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AutomationApi(config);
            var automationId = "automationId_example";  // string | 

            try
            {
                // Retrieve an Automation
                Automation result = apiInstance.GetAutomation(automationId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationApi.GetAutomation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAutomationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Automation
    ApiResponse<Automation> response = apiInstance.GetAutomationWithHttpInfo(automationId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationApi.GetAutomationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **automationId** | **string** |  |  |

### Return type

[**Automation**](Automation.md)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listallautomationids"></a>
# **ListAllAutomationIds**
> ListAutomationIdsResponse ListAllAutomationIds (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Automations Ids

Retrieves a list of automations IDs

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListAllAutomationIdsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AutomationApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:  - `name` (String): Filter by automation name. Supports the `==` operator with optional prefix wildcard (`foo*`).   Without a wildcard, the search matches automations whose name contains the given text.   With a prefix wildcard, it matches automations whose name starts with the given text.   - `filter=name%3D%3DSpring Automation` — names containing \"Spring Automation\"   - `filter=name%3D%3DSpring*` — names starting with \"Spring\"  - `id` (Long): Filter by automation ID. Supports comparison operators:   `==` `!=` `>` `<` `>=` `<=`   - `filter=id%3E5` — id > 5   - `filter=id%3E%3D10` — id >= 10  - `status` (String): Filter by automation status. Accepted values: `published`, `draft`.   - `filter=status%3D%3Dpublished` — published automations only   - `filter=status%3D%3Ddraft` — draft automations only  - `categories` (String): Filter by category ID (comma-separated list of IDs).   - `filter=categories%3D%3D1` — automations in category 1   - `filter=categories%3D%3D1,2,3` — automations in categories 1, 2, or 3  Multiple filters can be combined with `;` (AND logic): - `filter=name%3D%3DSpring*%3Bautomation_id%3E5`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Automations Ids
                ListAutomationIdsResponse result = apiInstance.ListAllAutomationIds(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationApi.ListAllAutomationIds: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAllAutomationIdsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Automations Ids
    ApiResponse<ListAutomationIdsResponse> response = apiInstance.ListAllAutomationIdsWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationApi.ListAllAutomationIdsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:  - &#x60;name&#x60; (String): Filter by automation name. Supports the &#x60;&#x3D;&#x3D;&#x60; operator with optional prefix wildcard (&#x60;foo*&#x60;).   Without a wildcard, the search matches automations whose name contains the given text.   With a prefix wildcard, it matches automations whose name starts with the given text.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; — names containing \&quot;Spring Automation\&quot;   - &#x60;filter&#x3D;name%3D%3DSpring*&#x60; — names starting with \&quot;Spring\&quot;  - &#x60;id&#x60; (Long): Filter by automation ID. Supports comparison operators:   &#x60;&#x3D;&#x3D;&#x60; &#x60;!&#x3D;&#x60; &#x60;&gt;&#x60; &#x60;&lt;&#x60; &#x60;&gt;&#x3D;&#x60; &#x60;&lt;&#x3D;&#x60;   - &#x60;filter&#x3D;id%3E5&#x60; — id &gt; 5   - &#x60;filter&#x3D;id%3E%3D10&#x60; — id &gt;&#x3D; 10  - &#x60;status&#x60; (String): Filter by automation status. Accepted values: &#x60;published&#x60;, &#x60;draft&#x60;.   - &#x60;filter&#x3D;status%3D%3Dpublished&#x60; — published automations only   - &#x60;filter&#x3D;status%3D%3Ddraft&#x60; — draft automations only  - &#x60;categories&#x60; (String): Filter by category ID (comma-separated list of IDs).   - &#x60;filter&#x3D;categories%3D%3D1&#x60; — automations in category 1   - &#x60;filter&#x3D;categories%3D%3D1,2,3&#x60; — automations in categories 1, 2, or 3  Multiple filters can be combined with &#x60;;&#x60; (AND logic): - &#x60;filter&#x3D;name%3D%3DSpring*%3Bautomation_id%3E5&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListAutomationIdsResponse**](ListAutomationIdsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listautomations"></a>
# **ListAutomations**
> ListAutomationResponse ListAutomations (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Automations

Retrieves a list of automations

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListAutomationsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AutomationApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:  - `name` (String): Filter by automation name. Supports the `==` operator with optional prefix wildcard (`foo*`).   Without a wildcard, the search matches automations whose name contains the given text.   With a prefix wildcard, it matches automations whose name starts with the given text.   - `filter=name%3D%3DSpring Automation` — names containing \"Spring Automation\"   - `filter=name%3D%3DSpring*` — names starting with \"Spring\"  - `id` (Long): Filter by automation ID. Supports comparison operators:   `==` `!=` `>` `<` `>=` `<=`   - `filter=id%3E5` — id > 5   - `filter=id%3E%3D10` — id >= 10  - `status` (String): Filter by automation status. Accepted values: `published`, `draft`.   - `filter=status%3D%3Dpublished` — published automations only   - `filter=status%3D%3Ddraft` — draft automations only  - `categories` (String): Filter by category ID (comma-separated list of IDs).   - `filter=categories%3D%3D1` — automations in category 1   - `filter=categories%3D%3D1,2,3` — automations in categories 1, 2, or 3  Multiple filters can be combined with `;` (AND logic): - `filter=name%3D%3DSpring*%3Bautomation_id%3E5`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Automations
                ListAutomationResponse result = apiInstance.ListAutomations(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationApi.ListAutomations: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAutomationsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Automations
    ApiResponse<ListAutomationResponse> response = apiInstance.ListAutomationsWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationApi.ListAutomationsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:  - &#x60;name&#x60; (String): Filter by automation name. Supports the &#x60;&#x3D;&#x3D;&#x60; operator with optional prefix wildcard (&#x60;foo*&#x60;).   Without a wildcard, the search matches automations whose name contains the given text.   With a prefix wildcard, it matches automations whose name starts with the given text.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; — names containing \&quot;Spring Automation\&quot;   - &#x60;filter&#x3D;name%3D%3DSpring*&#x60; — names starting with \&quot;Spring\&quot;  - &#x60;id&#x60; (Long): Filter by automation ID. Supports comparison operators:   &#x60;&#x3D;&#x3D;&#x60; &#x60;!&#x3D;&#x60; &#x60;&gt;&#x60; &#x60;&lt;&#x60; &#x60;&gt;&#x3D;&#x60; &#x60;&lt;&#x3D;&#x60;   - &#x60;filter&#x3D;id%3E5&#x60; — id &gt; 5   - &#x60;filter&#x3D;id%3E%3D10&#x60; — id &gt;&#x3D; 10  - &#x60;status&#x60; (String): Filter by automation status. Accepted values: &#x60;published&#x60;, &#x60;draft&#x60;.   - &#x60;filter&#x3D;status%3D%3Dpublished&#x60; — published automations only   - &#x60;filter&#x3D;status%3D%3Ddraft&#x60; — draft automations only  - &#x60;categories&#x60; (String): Filter by category ID (comma-separated list of IDs).   - &#x60;filter&#x3D;categories%3D%3D1&#x60; — automations in category 1   - &#x60;filter&#x3D;categories%3D%3D1,2,3&#x60; — automations in categories 1, 2, or 3  Multiple filters can be combined with &#x60;;&#x60; (AND logic): - &#x60;filter&#x3D;name%3D%3DSpring*%3Bautomation_id%3E5&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListAutomationResponse**](ListAutomationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="renameautomationv2"></a>
# **RenameAutomationV2**
> void RenameAutomationV2 (string automationId, RenameEasyAutomationCommand renameEasyAutomationCommand)

Renames an Easy Automation.

Updates the name of a single easy automation.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RenameAutomationV2Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AutomationApi(config);
            var automationId = HWv0fbDNDbWg6cFKY027;  // string | automation_id
            var renameEasyAutomationCommand = new RenameEasyAutomationCommand(); // RenameEasyAutomationCommand | 

            try
            {
                // Renames an Easy Automation.
                apiInstance.RenameAutomationV2(automationId, renameEasyAutomationCommand);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationApi.RenameAutomationV2: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RenameAutomationV2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Renames an Easy Automation.
    apiInstance.RenameAutomationV2WithHttpInfo(automationId, renameEasyAutomationCommand);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationApi.RenameAutomationV2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **automationId** | **string** | automation_id |  |
| **renameEasyAutomationCommand** | [**RenameEasyAutomationCommand**](RenameEasyAutomationCommand.md) |  |  |

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="unpublishautomation"></a>
# **UnpublishAutomation**
> void UnpublishAutomation (string automationId, UnpublishAutomationRequest unpublishAutomationRequest)

Unpublish an Automation

Unpublishes a single automation

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UnpublishAutomationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AutomationApi(config);
            var automationId = "automationId_example";  // string | 
            var unpublishAutomationRequest = new UnpublishAutomationRequest(); // UnpublishAutomationRequest | 

            try
            {
                // Unpublish an Automation
                apiInstance.UnpublishAutomation(automationId, unpublishAutomationRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AutomationApi.UnpublishAutomation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UnpublishAutomationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Unpublish an Automation
    apiInstance.UnpublishAutomationWithHttpInfo(automationId, unpublishAutomationRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AutomationApi.UnpublishAutomationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **automationId** | **string** |  |  |
| **unpublishAutomationRequest** | [**UnpublishAutomationRequest**](UnpublishAutomationRequest.md) |  |  |

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

