# Keap.Core.V2.Api.OpportunityApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateOpportunity**](OpportunityApi.md#createopportunity) | **POST** /rest/v2/opportunities | Create an Opportunity |
| [**CreateOpportunityCustomFields**](OpportunityApi.md#createopportunitycustomfields) | **POST** /rest/v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**CreateOpportunityStage**](OpportunityApi.md#createopportunitystage) | **POST** /rest/v2/opportunities/stages | Create an Opportunity Stage |
| [**DeleteOpportunity**](OpportunityApi.md#deleteopportunity) | **DELETE** /rest/v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**DeleteOpportunityStage**](OpportunityApi.md#deleteopportunitystage) | **DELETE** /rest/v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**GetOpportunity**](OpportunityApi.md#getopportunity) | **GET** /rest/v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**GetOpportunityStage**](OpportunityApi.md#getopportunitystage) | **GET** /rest/v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**ListOpportunities**](OpportunityApi.md#listopportunities) | **GET** /rest/v2/opportunities | List Opportunities |
| [**ListOpportunityStages**](OpportunityApi.md#listopportunitystages) | **GET** /rest/v2/opportunities/stages | List of Opportunity Stages |
| [**UpdateOpportunity**](OpportunityApi.md#updateopportunity) | **PATCH** /rest/v2/opportunities/{opportunity_id} | Update an opportunity |
| [**UpdateOpportunityCustomField**](OpportunityApi.md#updateopportunitycustomfield) | **PATCH** /rest/v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**UpdateOpportunityStage**](OpportunityApi.md#updateopportunitystage) | **PATCH** /rest/v2/opportunities/stages/{stage_id} | Update an Opportunity Stage |

<a id="createopportunity"></a>
# **CreateOpportunity**
> RestV2Opportunity CreateOpportunity (CreateOpportunityRequest createOpportunityRequest)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateOpportunityExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var createOpportunityRequest = new CreateOpportunityRequest(); // CreateOpportunityRequest | 

            try
            {
                // Create an Opportunity
                RestV2Opportunity result = apiInstance.CreateOpportunity(createOpportunityRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.CreateOpportunity: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity
    ApiResponse<RestV2Opportunity> response = apiInstance.CreateOpportunityWithHttpInfo(createOpportunityRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.CreateOpportunityWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md) |  |  |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createopportunitycustomfields"></a>
# **CreateOpportunityCustomFields**
> CustomFieldMetaData CreateOpportunityCustomFields (CreateCustomFieldRequest createCustomFieldRequest)

Create an Opportunity Custom Field

Creates a custom field of the specified type and options to the Opportunity object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateOpportunityCustomFieldsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 

            try
            {
                // Create an Opportunity Custom Field
                CustomFieldMetaData result = apiInstance.CreateOpportunityCustomFields(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.CreateOpportunityCustomFields: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityCustomFieldsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateOpportunityCustomFieldsWithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.CreateOpportunityCustomFieldsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) |  |  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createopportunitystage"></a>
# **CreateOpportunityStage**
> RestOpportunityStage CreateOpportunityStage (CreateOpportunityStageRequest createOpportunityStageRequest)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateOpportunityStageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var createOpportunityStageRequest = new CreateOpportunityStageRequest(); // CreateOpportunityStageRequest | 

            try
            {
                // Create an Opportunity Stage
                RestOpportunityStage result = apiInstance.CreateOpportunityStage(createOpportunityStageRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.CreateOpportunityStage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityStageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity Stage
    ApiResponse<RestOpportunityStage> response = apiInstance.CreateOpportunityStageWithHttpInfo(createOpportunityStageRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.CreateOpportunityStageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createOpportunityStageRequest** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md) |  |  |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

[oauth2](../README.md#oauth2)

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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteopportunity"></a>
# **DeleteOpportunity**
> void DeleteOpportunity (string opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteOpportunityExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var opportunityId = "opportunityId_example";  // string | 

            try
            {
                // Delete an Opportunity
                apiInstance.DeleteOpportunity(opportunityId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.DeleteOpportunity: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOpportunityWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Opportunity
    apiInstance.DeleteOpportunityWithHttpInfo(opportunityId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunityId** | **string** |  |  |

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

<a id="deleteopportunitystage"></a>
# **DeleteOpportunityStage**
> void DeleteOpportunityStage (string stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteOpportunityStageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var stageId = "stageId_example";  // string | 

            try
            {
                // Delete an Opportunity Stage
                apiInstance.DeleteOpportunityStage(stageId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityStage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOpportunityStageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Opportunity Stage
    apiInstance.DeleteOpportunityStageWithHttpInfo(stageId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityStageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stageId** | **string** |  |  |

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

<a id="getopportunity"></a>
# **GetOpportunity**
> RestV2Opportunity GetOpportunity (string opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetOpportunityExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var opportunityId = "opportunityId_example";  // string | 

            try
            {
                // Retrieve a Opportunity
                RestV2Opportunity result = apiInstance.GetOpportunity(opportunityId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.GetOpportunity: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOpportunityWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Opportunity
    ApiResponse<RestV2Opportunity> response = apiInstance.GetOpportunityWithHttpInfo(opportunityId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.GetOpportunityWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunityId** | **string** |  |  |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

<a id="getopportunitystage"></a>
# **GetOpportunityStage**
> RestOpportunityStage GetOpportunityStage (string stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetOpportunityStageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var stageId = "stageId_example";  // string | 

            try
            {
                // Retrieve an Opportunity Stage
                RestOpportunityStage result = apiInstance.GetOpportunityStage(stageId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.GetOpportunityStage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOpportunityStageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Opportunity Stage
    ApiResponse<RestOpportunityStage> response = apiInstance.GetOpportunityStageWithHttpInfo(stageId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.GetOpportunityStageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stageId** | **string** |  |  |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

<a id="listopportunities"></a>
# **ListOpportunities**
> ListOpportunitiesResponse ListOpportunities (List<string>? fields = null, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Opportunities

Retrieves a list of all Opportunities.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListOpportunitiesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var fields = new List<string>?(); // List<string>? |  (optional) 
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` - (String) `contact_id` - (String) `opportunity_title` — supports wildcard prefix search (e.g. `opportunity_title==Deal*`) - (String) `lead_source_name` — supports wildcard prefix search (e.g. `lead_source_name==Web*`) - (String) `affiliate_id` — exact match only (e.g. `affiliate_id==123`) - (String) `opportunity_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` - (String) `ids` — comma-separated list of opportunity IDs (e.g. `ids==1,2,3`), maximum 100 IDs Note: `opportunity_id` and `ids` cannot be used together in the same request.  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_title` - `created_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Opportunities
                ListOpportunitiesResponse result = apiInstance.ListOpportunities(fields, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.ListOpportunities: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOpportunitiesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Opportunities
    ApiResponse<ListOpportunitiesResponse> response = apiInstance.ListOpportunitiesWithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.ListOpportunitiesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fields** | [**List&lt;string&gt;?**](string.md) |  | [optional]  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;opportunity_title&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_title&#x3D;&#x3D;Deal*&#x60;) - (String) &#x60;lead_source_name&#x60; — supports wildcard prefix search (e.g. &#x60;lead_source_name&#x3D;&#x3D;Web*&#x60;) - (String) &#x60;affiliate_id&#x60; — exact match only (e.g. &#x60;affiliate_id&#x3D;&#x3D;123&#x60;) - (String) &#x60;opportunity_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;ids&#x60; — comma-separated list of opportunity IDs (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;), maximum 100 IDs Note: &#x60;opportunity_id&#x60; and &#x60;ids&#x60; cannot be used together in the same request.  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_title&#x60; - &#x60;created_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)

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

<a id="listopportunitystages"></a>
# **ListOpportunityStages**
> ListOpportunityStagesResponse ListOpportunityStages (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListOpportunityStagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order stage items. One of the following fields: - `stage_order`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List of Opportunity Stages
                ListOpportunityStagesResponse result = apiInstance.ListOpportunityStages(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.ListOpportunityStages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOpportunityStagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List of Opportunity Stages
    ApiResponse<ListOpportunityStagesResponse> response = apiInstance.ListOpportunityStagesWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.ListOpportunityStagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)

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

<a id="updateopportunity"></a>
# **UpdateOpportunity**
> RestV2Opportunity UpdateOpportunity (string opportunityId, UpdateOpportunityRequestV2 updateOpportunityRequestV2, Object? updateMask = null)

Update an opportunity

Updates specified values of a given opportunity

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateOpportunityExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var opportunityId = "opportunityId_example";  // string | 
            var updateOpportunityRequestV2 = new UpdateOpportunityRequestV2(); // UpdateOpportunityRequestV2 | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an opportunity
                RestV2Opportunity result = apiInstance.UpdateOpportunity(opportunityId, updateOpportunityRequestV2, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.UpdateOpportunity: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOpportunityWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an opportunity
    ApiResponse<RestV2Opportunity> response = apiInstance.UpdateOpportunityWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunityId** | **string** |  |  |
| **updateOpportunityRequestV2** | [**UpdateOpportunityRequestV2**](UpdateOpportunityRequestV2.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

<a id="updateopportunitycustomfield"></a>
# **UpdateOpportunityCustomField**
> CustomFieldMetaData UpdateOpportunityCustomField (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, Object? updateMask = null)

Update a Opportunity's Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateOpportunityCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var customFieldId = "customFieldId_example";  // string | 
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Opportunity's Custom Field
                CustomFieldMetaData result = apiInstance.UpdateOpportunityCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOpportunityCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Opportunity's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateOpportunityCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** |  |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

<a id="updateopportunitystage"></a>
# **UpdateOpportunityStage**
> RestOpportunityStage UpdateOpportunityStage (string stageId, UpdateOpportunityStageRequest updateOpportunityStageRequest, Object? updateMask = null)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateOpportunityStageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var stageId = "stageId_example";  // string | 
            var updateOpportunityStageRequest = new UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Opportunity Stage
                RestOpportunityStage result = apiInstance.UpdateOpportunityStage(stageId, updateOpportunityStageRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityStage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOpportunityStageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Opportunity Stage
    ApiResponse<RestOpportunityStage> response = apiInstance.UpdateOpportunityStageWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityStageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stageId** | **string** |  |  |
| **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

