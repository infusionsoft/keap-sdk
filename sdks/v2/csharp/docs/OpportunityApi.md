# Keap.Core.V2.Api.OpportunityApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateOpportunity**](OpportunityApi.md#createopportunity) | **POST** /rest/v2/opportunities | Create an Opportunity |
| [**CreateOpportunityCustomFieldGroup**](OpportunityApi.md#createopportunitycustomfieldgroup) | **POST** /rest/v2/opportunities/model/customFields/groups | Create an Opportunity Custom Field Group |
| [**CreateOpportunityCustomFieldTab**](OpportunityApi.md#createopportunitycustomfieldtab) | **POST** /rest/v2/opportunities/model/customFields/tabs | Create an Opportunity Custom Field Tab |
| [**CreateOpportunityCustomFields**](OpportunityApi.md#createopportunitycustomfields) | **POST** /rest/v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**CreateOpportunityStage**](OpportunityApi.md#createopportunitystage) | **POST** /rest/v2/opportunities/stages | Create an Opportunity Stage |
| [**DeleteOpportunitiesCustomField**](OpportunityApi.md#deleteopportunitiescustomfield) | **DELETE** /rest/v2/opportunities/model/customFields/{custom_field_id} | Delete an Opportunity Custom Field |
| [**DeleteOpportunity**](OpportunityApi.md#deleteopportunity) | **DELETE** /rest/v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**DeleteOpportunityCustomFieldGroup**](OpportunityApi.md#deleteopportunitycustomfieldgroup) | **DELETE** /rest/v2/opportunities/model/customFields/groups/{group_id} | Delete an Opportunity Custom Field Group |
| [**DeleteOpportunityCustomFieldTab**](OpportunityApi.md#deleteopportunitycustomfieldtab) | **DELETE** /rest/v2/opportunities/model/customFields/tabs/{tab_id} | Delete an Opportunity Custom Field Tab |
| [**DeleteOpportunityStage**](OpportunityApi.md#deleteopportunitystage) | **DELETE** /rest/v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**GetOpportunity**](OpportunityApi.md#getopportunity) | **GET** /rest/v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**GetOpportunityCustomFieldGroup**](OpportunityApi.md#getopportunitycustomfieldgroup) | **GET** /rest/v2/opportunities/model/customFields/groups/{group_id} | Retrieve an Opportunity Custom Field Group |
| [**GetOpportunityCustomFieldTab**](OpportunityApi.md#getopportunitycustomfieldtab) | **GET** /rest/v2/opportunities/model/customFields/tabs/{tab_id} | Retrieve an Opportunity Custom Field Tab |
| [**GetOpportunityStage**](OpportunityApi.md#getopportunitystage) | **GET** /rest/v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**GetOpportunityStageMove**](OpportunityApi.md#getopportunitystagemove) | **GET** /rest/v2/opportunities/stageMoves/{stage_move_id} | Retrieve an Opportunity Stage Move |
| [**ListOpportunities**](OpportunityApi.md#listopportunities) | **GET** /rest/v2/opportunities | List Opportunities |
| [**ListOpportunityCustomFieldGroups**](OpportunityApi.md#listopportunitycustomfieldgroups) | **GET** /rest/v2/opportunities/model/customFields/groups | List Opportunity Custom Field Groups |
| [**ListOpportunityCustomFieldTabs**](OpportunityApi.md#listopportunitycustomfieldtabs) | **GET** /rest/v2/opportunities/model/customFields/tabs | List Opportunity Custom Field Tabs |
| [**ListOpportunityStageMoves**](OpportunityApi.md#listopportunitystagemoves) | **GET** /rest/v2/opportunities/stageMoves | List Opportunity Stage Moves |
| [**ListOpportunityStages**](OpportunityApi.md#listopportunitystages) | **GET** /rest/v2/opportunities/stages | List of Opportunity Stages |
| [**RetrieveOpportunityCustomFieldModel**](OpportunityApi.md#retrieveopportunitycustomfieldmodel) | **GET** /rest/v2/opportunities/model | Retrieve Opportunity Custom Field Model |
| [**UpdateOpportunity**](OpportunityApi.md#updateopportunity) | **PATCH** /rest/v2/opportunities/{opportunity_id} | Update an opportunity |
| [**UpdateOpportunityCustomField**](OpportunityApi.md#updateopportunitycustomfield) | **PATCH** /rest/v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**UpdateOpportunityCustomFieldGroup**](OpportunityApi.md#updateopportunitycustomfieldgroup) | **PATCH** /rest/v2/opportunities/model/customFields/groups/{group_id} | Update an Opportunity Custom Field Group |
| [**UpdateOpportunityCustomFieldTab**](OpportunityApi.md#updateopportunitycustomfieldtab) | **PATCH** /rest/v2/opportunities/model/customFields/tabs/{tab_id} | Update an Opportunity Custom Field Tab |
| [**UpdateOpportunityStage**](OpportunityApi.md#updateopportunitystage) | **PATCH** /rest/v2/opportunities/stages/{stage_id} | Update an Opportunity Stage |

<a id="createopportunity"></a>
# **CreateOpportunity**
> RestV2Opportunity CreateOpportunity (CreateOpportunityRequest createOpportunityRequest, List<string>? fields = null)

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
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time (optional) 

            try
            {
                // Create an Opportunity
                RestV2Opportunity result = apiInstance.CreateOpportunity(createOpportunityRequest, fields);
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
    ApiResponse<RestV2Opportunity> response = apiInstance.CreateOpportunityWithHttpInfo(createOpportunityRequest, fields);
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
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional]  |

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

<a id="createopportunitycustomfieldgroup"></a>
# **CreateOpportunityCustomFieldGroup**
> CustomFieldGroup CreateOpportunityCustomFieldGroup (CreateCustomFieldGroupRequest createCustomFieldGroupRequest)

Create an Opportunity Custom Field Group

Creates a new custom field group for the Opportunity record type. If `tab_id` is omitted, the group is added to the default 'Custom Fields' tab.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateOpportunityCustomFieldGroupExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var createCustomFieldGroupRequest = new CreateCustomFieldGroupRequest(); // CreateCustomFieldGroupRequest | 

            try
            {
                // Create an Opportunity Custom Field Group
                CustomFieldGroup result = apiInstance.CreateOpportunityCustomFieldGroup(createCustomFieldGroupRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.CreateOpportunityCustomFieldGroup: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityCustomFieldGroupWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity Custom Field Group
    ApiResponse<CustomFieldGroup> response = apiInstance.CreateOpportunityCustomFieldGroupWithHttpInfo(createCustomFieldGroupRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.CreateOpportunityCustomFieldGroupWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldGroupRequest** | [**CreateCustomFieldGroupRequest**](CreateCustomFieldGroupRequest.md) |  |  |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

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

<a id="createopportunitycustomfieldtab"></a>
# **CreateOpportunityCustomFieldTab**
> CustomFieldTab CreateOpportunityCustomFieldTab (CreateCustomFieldTabRequest createCustomFieldTabRequest)

Create an Opportunity Custom Field Tab

Creates a new custom field tab for the Opportunity record type.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateOpportunityCustomFieldTabExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var createCustomFieldTabRequest = new CreateCustomFieldTabRequest(); // CreateCustomFieldTabRequest | 

            try
            {
                // Create an Opportunity Custom Field Tab
                CustomFieldTab result = apiInstance.CreateOpportunityCustomFieldTab(createCustomFieldTabRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.CreateOpportunityCustomFieldTab: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityCustomFieldTabWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity Custom Field Tab
    ApiResponse<CustomFieldTab> response = apiInstance.CreateOpportunityCustomFieldTabWithHttpInfo(createCustomFieldTabRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.CreateOpportunityCustomFieldTabWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldTabRequest** | [**CreateCustomFieldTabRequest**](CreateCustomFieldTabRequest.md) |  |  |

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

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

<a id="deleteopportunitiescustomfield"></a>
# **DeleteOpportunitiesCustomField**
> void DeleteOpportunitiesCustomField (string customFieldId)

Delete an Opportunity Custom Field

Deletes a Custom Field from Opportunity.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteOpportunitiesCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var customFieldId = "customFieldId_example";  // string | 

            try
            {
                // Delete an Opportunity Custom Field
                apiInstance.DeleteOpportunitiesCustomField(customFieldId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.DeleteOpportunitiesCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOpportunitiesCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Opportunity Custom Field
    apiInstance.DeleteOpportunitiesCustomFieldWithHttpInfo(customFieldId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.DeleteOpportunitiesCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** |  |  |

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

<a id="deleteopportunitycustomfieldgroup"></a>
# **DeleteOpportunityCustomFieldGroup**
> void DeleteOpportunityCustomFieldGroup (string groupId)

Delete an Opportunity Custom Field Group

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteOpportunityCustomFieldGroupExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var groupId = "groupId_example";  // string | 

            try
            {
                // Delete an Opportunity Custom Field Group
                apiInstance.DeleteOpportunityCustomFieldGroup(groupId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityCustomFieldGroup: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOpportunityCustomFieldGroupWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Opportunity Custom Field Group
    apiInstance.DeleteOpportunityCustomFieldGroupWithHttpInfo(groupId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityCustomFieldGroupWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |

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

<a id="deleteopportunitycustomfieldtab"></a>
# **DeleteOpportunityCustomFieldTab**
> void DeleteOpportunityCustomFieldTab (string tabId)

Delete an Opportunity Custom Field Tab

Deletes a custom field tab. Returns 409 Conflict if the tab still contains groups.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteOpportunityCustomFieldTabExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var tabId = "tabId_example";  // string | 

            try
            {
                // Delete an Opportunity Custom Field Tab
                apiInstance.DeleteOpportunityCustomFieldTab(tabId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityCustomFieldTab: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOpportunityCustomFieldTabWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Opportunity Custom Field Tab
    apiInstance.DeleteOpportunityCustomFieldTabWithHttpInfo(tabId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityCustomFieldTabWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tabId** | **string** |  |  |

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
> RestV2Opportunity GetOpportunity (string opportunityId, List<string>? fields = null)

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
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time (optional) 

            try
            {
                // Retrieve a Opportunity
                RestV2Opportunity result = apiInstance.GetOpportunity(opportunityId, fields);
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
    ApiResponse<RestV2Opportunity> response = apiInstance.GetOpportunityWithHttpInfo(opportunityId, fields);
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
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional]  |

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

<a id="getopportunitycustomfieldgroup"></a>
# **GetOpportunityCustomFieldGroup**
> CustomFieldGroup GetOpportunityCustomFieldGroup (string groupId)

Retrieve an Opportunity Custom Field Group

Retrieves a single custom field group by id for the Opportunity record type.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetOpportunityCustomFieldGroupExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var groupId = "groupId_example";  // string | 

            try
            {
                // Retrieve an Opportunity Custom Field Group
                CustomFieldGroup result = apiInstance.GetOpportunityCustomFieldGroup(groupId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.GetOpportunityCustomFieldGroup: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOpportunityCustomFieldGroupWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Opportunity Custom Field Group
    ApiResponse<CustomFieldGroup> response = apiInstance.GetOpportunityCustomFieldGroupWithHttpInfo(groupId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.GetOpportunityCustomFieldGroupWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

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

<a id="getopportunitycustomfieldtab"></a>
# **GetOpportunityCustomFieldTab**
> CustomFieldTab GetOpportunityCustomFieldTab (string tabId)

Retrieve an Opportunity Custom Field Tab

Retrieves a single custom field tab by id for the Opportunity record type.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetOpportunityCustomFieldTabExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var tabId = "tabId_example";  // string | 

            try
            {
                // Retrieve an Opportunity Custom Field Tab
                CustomFieldTab result = apiInstance.GetOpportunityCustomFieldTab(tabId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.GetOpportunityCustomFieldTab: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOpportunityCustomFieldTabWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Opportunity Custom Field Tab
    ApiResponse<CustomFieldTab> response = apiInstance.GetOpportunityCustomFieldTabWithHttpInfo(tabId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.GetOpportunityCustomFieldTabWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tabId** | **string** |  |  |

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

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

<a id="getopportunitystagemove"></a>
# **GetOpportunityStageMove**
> OpportunityStageMove GetOpportunityStageMove (string stageMoveId)

Retrieve an Opportunity Stage Move

Retrieves a single historical record of an opportunity being moved from one pipeline stage to another.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetOpportunityStageMoveExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var stageMoveId = "stageMoveId_example";  // string | 

            try
            {
                // Retrieve an Opportunity Stage Move
                OpportunityStageMove result = apiInstance.GetOpportunityStageMove(stageMoveId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.GetOpportunityStageMove: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOpportunityStageMoveWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Opportunity Stage Move
    ApiResponse<OpportunityStageMove> response = apiInstance.GetOpportunityStageMoveWithHttpInfo(stageMoveId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.GetOpportunityStageMoveWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stageMoveId** | **string** |  |  |

### Return type

[**OpportunityStageMove**](OpportunityStageMove.md)

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
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time (optional) 
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` - (String) `contact_id` - (String) `opportunity_title` — supports wildcard prefix search (e.g. `opportunity_title==Deal*`) - (String) `lead_source_name` — supports wildcard prefix search (e.g. `lead_source_name==Web*`) - (String) `affiliate_id` — exact match only (e.g. `affiliate_id==123`) - (String) `opportunity_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` - (String) `ids` — comma-separated list of opportunity IDs (e.g. `ids==1,2,3`), maximum 100 IDs - (String) `contact_phone` — matches the contact's phone. By default it is an exact match against the stored value, including any formatting characters (e.g. `contact_phone==(480) 123-4567`); it does not normalize or search across an unformatted number. Supports wildcard prefix search for partial matches (e.g. `contact_phone==480*`) - (String) `contact_city` — matches the contact's city; supports wildcard prefix search (e.g. `contact_city==Chand*`) - (String) `contact_state` — matches the contact's state; supports wildcard prefix search (e.g. `contact_state==AZ*`) - (String) `projected_revenue_high` — projected revenue high; supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `projected_revenue_high>=1000`) - (String) `projected_revenue_low` — projected revenue low; supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `projected_revenue_low<=500`) Note: `opportunity_id` and `ids` cannot be used together in the same request.  **Custom fields:** opportunities may also be filtered by any custom field defined on the Opportunity record, referenced by its field name (e.g. `cf_priority==10`). Both indexed and non-indexed custom fields are filterable. The supported operator and value depend on the field's data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (`==`) and prefix wildcard (e.g. `cf_company==Acme*`) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (`==`, `>`, `<`, `>=`, `<=`) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. `cf_renewDate<=2026-01-01T00:00:00.000Z`). Date-only values such as `2026-01-01` are rejected - Yes/No fields — equals only, value `0` (No) or `1` (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. `cf_tags==red`) A custom field that does not exist, an operator unsupported for the field's type, or a value that does not match the field's type returns `400 Bad Request`.  (optional) 
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
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional]  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;opportunity_title&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_title&#x3D;&#x3D;Deal*&#x60;) - (String) &#x60;lead_source_name&#x60; — supports wildcard prefix search (e.g. &#x60;lead_source_name&#x3D;&#x3D;Web*&#x60;) - (String) &#x60;affiliate_id&#x60; — exact match only (e.g. &#x60;affiliate_id&#x3D;&#x3D;123&#x60;) - (String) &#x60;opportunity_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;ids&#x60; — comma-separated list of opportunity IDs (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;), maximum 100 IDs - (String) &#x60;contact_phone&#x60; — matches the contact&#39;s phone. By default it is an exact match against the stored value, including any formatting characters (e.g. &#x60;contact_phone&#x3D;&#x3D;(480) 123-4567&#x60;); it does not normalize or search across an unformatted number. Supports wildcard prefix search for partial matches (e.g. &#x60;contact_phone&#x3D;&#x3D;480*&#x60;) - (String) &#x60;contact_city&#x60; — matches the contact&#39;s city; supports wildcard prefix search (e.g. &#x60;contact_city&#x3D;&#x3D;Chand*&#x60;) - (String) &#x60;contact_state&#x60; — matches the contact&#39;s state; supports wildcard prefix search (e.g. &#x60;contact_state&#x3D;&#x3D;AZ*&#x60;) - (String) &#x60;projected_revenue_high&#x60; — projected revenue high; supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;projected_revenue_high&gt;&#x3D;1000&#x60;) - (String) &#x60;projected_revenue_low&#x60; — projected revenue low; supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;projected_revenue_low&lt;&#x3D;500&#x60;) Note: &#x60;opportunity_id&#x60; and &#x60;ids&#x60; cannot be used together in the same request.  **Custom fields:** opportunities may also be filtered by any custom field defined on the Opportunity record, referenced by its field name (e.g. &#x60;cf_priority&#x3D;&#x3D;10&#x60;). Both indexed and non-indexed custom fields are filterable. The supported operator and value depend on the field&#39;s data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (&#x60;&#x3D;&#x3D;&#x60;) and prefix wildcard (e.g. &#x60;cf_company&#x3D;&#x3D;Acme*&#x60;) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (&#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60;) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. &#x60;cf_renewDate&lt;&#x3D;2026-01-01T00:00:00.000Z&#x60;). Date-only values such as &#x60;2026-01-01&#x60; are rejected - Yes/No fields — equals only, value &#x60;0&#x60; (No) or &#x60;1&#x60; (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. &#x60;cf_tags&#x3D;&#x3D;red&#x60;) A custom field that does not exist, an operator unsupported for the field&#39;s type, or a value that does not match the field&#39;s type returns &#x60;400 Bad Request&#x60;.  | [optional]  |
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

<a id="listopportunitycustomfieldgroups"></a>
# **ListOpportunityCustomFieldGroups**
> ListCustomFieldGroupsResponse ListOpportunityCustomFieldGroups (string? tabId = null)

List Opportunity Custom Field Groups

Retrieves a list of custom field groups for the Opportunity record type. Optionally filter by tab_id to scope to a specific tab.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListOpportunityCustomFieldGroupsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var tabId = "tabId_example";  // string? | Optional tab id to scope groups to a single tab (optional) 

            try
            {
                // List Opportunity Custom Field Groups
                ListCustomFieldGroupsResponse result = apiInstance.ListOpportunityCustomFieldGroups(tabId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.ListOpportunityCustomFieldGroups: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOpportunityCustomFieldGroupsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Opportunity Custom Field Groups
    ApiResponse<ListCustomFieldGroupsResponse> response = apiInstance.ListOpportunityCustomFieldGroupsWithHttpInfo(tabId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.ListOpportunityCustomFieldGroupsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tabId** | **string?** | Optional tab id to scope groups to a single tab | [optional]  |

### Return type

[**ListCustomFieldGroupsResponse**](ListCustomFieldGroupsResponse.md)

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

<a id="listopportunitycustomfieldtabs"></a>
# **ListOpportunityCustomFieldTabs**
> ListCustomFieldTabsResponse ListOpportunityCustomFieldTabs ()

List Opportunity Custom Field Tabs

Retrieves a list of custom field tabs for the Opportunity record type.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListOpportunityCustomFieldTabsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);

            try
            {
                // List Opportunity Custom Field Tabs
                ListCustomFieldTabsResponse result = apiInstance.ListOpportunityCustomFieldTabs();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.ListOpportunityCustomFieldTabs: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOpportunityCustomFieldTabsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Opportunity Custom Field Tabs
    ApiResponse<ListCustomFieldTabsResponse> response = apiInstance.ListOpportunityCustomFieldTabsWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.ListOpportunityCustomFieldTabsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ListCustomFieldTabsResponse**](ListCustomFieldTabsResponse.md)

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

<a id="listopportunitystagemoves"></a>
# **ListOpportunityStageMoves**
> ListOpportunityStageMoveResponse ListOpportunityStageMoves (string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

List Opportunity Stage Moves

Returns a paginated list of historical stage-move records.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListOpportunityStageMovesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var filter = "filter_example";  // string? | Filter to apply. Allowed fields: - (Id) `opportunity_id` — supports `==` - (Id) `user_id` — supports `==`  Separate multiple filters with semicolons: `opportunity_id==7;user_id==1`  (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 
            var orderBy = "orderBy_example";  // string? | Field and direction to order results. Supported fields: `move_date`, `id` Directions: `asc` | `desc` Example: `move_date desc`  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 

            try
            {
                // List Opportunity Stage Moves
                ListOpportunityStageMoveResponse result = apiInstance.ListOpportunityStageMoves(filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.ListOpportunityStageMoves: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOpportunityStageMovesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Opportunity Stage Moves
    ApiResponse<ListOpportunityStageMoveResponse> response = apiInstance.ListOpportunityStageMovesWithHttpInfo(filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.ListOpportunityStageMovesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply. Allowed fields: - (Id) &#x60;opportunity_id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60; - (Id) &#x60;user_id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;  Separate multiple filters with semicolons: &#x60;opportunity_id&#x3D;&#x3D;7;user_id&#x3D;&#x3D;1&#x60;  | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |
| **orderBy** | **string?** | Field and direction to order results. Supported fields: &#x60;move_date&#x60;, &#x60;id&#x60; Directions: &#x60;asc&#x60; | &#x60;desc&#x60; Example: &#x60;move_date desc&#x60;  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |

### Return type

[**ListOpportunityStageMoveResponse**](ListOpportunityStageMoveResponse.md)

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
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `opportunity_stage_name` — supports wildcard prefix search (e.g. `opportunity_stage_name==Qualified*`) - (String) `opportunity_stage_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `opportunity_stage_id>5`)  (optional) 
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
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;opportunity_stage_name&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_stage_name&#x3D;&#x3D;Qualified*&#x60;) - (String) &#x60;opportunity_stage_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;opportunity_stage_id&gt;5&#x60;)  | [optional]  |
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

<a id="retrieveopportunitycustomfieldmodel"></a>
# **RetrieveOpportunityCustomFieldModel**
> ObjectModel RetrieveOpportunityCustomFieldModel ()

Retrieve Opportunity Custom Field Model

Get the custom fields for the Opportunity object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RetrieveOpportunityCustomFieldModelExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);

            try
            {
                // Retrieve Opportunity Custom Field Model
                ObjectModel result = apiInstance.RetrieveOpportunityCustomFieldModel();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.RetrieveOpportunityCustomFieldModel: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveOpportunityCustomFieldModelWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Opportunity Custom Field Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveOpportunityCustomFieldModelWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.RetrieveOpportunityCustomFieldModelWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ObjectModel**](ObjectModel.md)

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
> RestV2Opportunity UpdateOpportunity (string opportunityId, UpdateOpportunityRequestV2 updateOpportunityRequestV2, List<string>? updateMask = null, List<string>? fields = null)

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
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time (optional) 

            try
            {
                // Update an opportunity
                RestV2Opportunity result = apiInstance.UpdateOpportunity(opportunityId, updateOpportunityRequestV2, updateMask, fields);
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
    ApiResponse<RestV2Opportunity> response = apiInstance.UpdateOpportunityWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask, fields);
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
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional]  |

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
> CustomFieldMetaData UpdateOpportunityCustomField (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, List<string>? updateMask = null)

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
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

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
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

<a id="updateopportunitycustomfieldgroup"></a>
# **UpdateOpportunityCustomFieldGroup**
> CustomFieldGroup UpdateOpportunityCustomFieldGroup (string groupId, List<string> updateMask, UpdateCustomFieldGroupRequest updateCustomFieldGroupRequest)

Update an Opportunity Custom Field Group

Updates an existing custom field group. Only fields listed in `update_mask` are applied.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateOpportunityCustomFieldGroupExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var groupId = "groupId_example";  // string | 
            var updateMask = new List<string>(); // List<string> | Comma-separated list of fields to update
            var updateCustomFieldGroupRequest = new UpdateCustomFieldGroupRequest(); // UpdateCustomFieldGroupRequest | 

            try
            {
                // Update an Opportunity Custom Field Group
                CustomFieldGroup result = apiInstance.UpdateOpportunityCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityCustomFieldGroup: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOpportunityCustomFieldGroupWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Opportunity Custom Field Group
    ApiResponse<CustomFieldGroup> response = apiInstance.UpdateOpportunityCustomFieldGroupWithHttpInfo(groupId, updateMask, updateCustomFieldGroupRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityCustomFieldGroupWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |
| **updateMask** | [**List&lt;string&gt;**](string.md) | Comma-separated list of fields to update |  |
| **updateCustomFieldGroupRequest** | [**UpdateCustomFieldGroupRequest**](UpdateCustomFieldGroupRequest.md) |  |  |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

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

<a id="updateopportunitycustomfieldtab"></a>
# **UpdateOpportunityCustomFieldTab**
> CustomFieldTab UpdateOpportunityCustomFieldTab (string tabId, List<string> updateMask, UpdateCustomFieldTabRequest updateCustomFieldTabRequest)

Update an Opportunity Custom Field Tab

Updates an existing custom field tab. Only fields listed in `update_mask` are applied.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateOpportunityCustomFieldTabExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new OpportunityApi(config);
            var tabId = "tabId_example";  // string | 
            var updateMask = new List<string>(); // List<string> | Comma-separated list of fields to update
            var updateCustomFieldTabRequest = new UpdateCustomFieldTabRequest(); // UpdateCustomFieldTabRequest | 

            try
            {
                // Update an Opportunity Custom Field Tab
                CustomFieldTab result = apiInstance.UpdateOpportunityCustomFieldTab(tabId, updateMask, updateCustomFieldTabRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityCustomFieldTab: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOpportunityCustomFieldTabWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Opportunity Custom Field Tab
    ApiResponse<CustomFieldTab> response = apiInstance.UpdateOpportunityCustomFieldTabWithHttpInfo(tabId, updateMask, updateCustomFieldTabRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityCustomFieldTabWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tabId** | **string** |  |  |
| **updateMask** | [**List&lt;string&gt;**](string.md) | Comma-separated list of fields to update |  |
| **updateCustomFieldTabRequest** | [**UpdateCustomFieldTabRequest**](UpdateCustomFieldTabRequest.md) |  |  |

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

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
> RestOpportunityStage UpdateOpportunityStage (string stageId, UpdateOpportunityStageRequest updateOpportunityStageRequest, List<string>? updateMask = null)

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
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

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
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

