# Keap.Core.V2.Api.LeadSourcesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateLeadSourceUsingPOST**](LeadSourcesApi.md#createleadsourceusingpost) | **POST** /v2/leadSources | Create a Lead Source |
| [**DeleteLeadSourceUsingDELETE**](LeadSourcesApi.md#deleteleadsourceusingdelete) | **DELETE** /v2/leadSources/{lead_source_id} | Delete a Lead Source |
| [**GetLeadSourceUsingGET**](LeadSourcesApi.md#getleadsourceusingget) | **GET** /v2/leadSources/{lead_source_id} | Retrieve a Lead Source |
| [**ListLeadSourcesUsingGET**](LeadSourcesApi.md#listleadsourcesusingget) | **GET** /v2/leadSources | List Lead Sources |
| [**UpdateLeadSourceUsingPATCH**](LeadSourcesApi.md#updateleadsourceusingpatch) | **PATCH** /v2/leadSources/{lead_source_id} | Update a Lead Source |

<a id="createleadsourceusingpost"></a>
# **CreateLeadSourceUsingPOST**
> LeadSource CreateLeadSourceUsingPOST (CreateLeadSourceRequest createLeadSourceRequest)

Create a Lead Source

Creates a new Lead Source

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateLeadSourceUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourcesApi(config);
            var createLeadSourceRequest = new CreateLeadSourceRequest(); // CreateLeadSourceRequest | The request object to create a new lead source

            try
            {
                // Create a Lead Source
                LeadSource result = apiInstance.CreateLeadSourceUsingPOST(createLeadSourceRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourcesApi.CreateLeadSourceUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateLeadSourceUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Lead Source
    ApiResponse<LeadSource> response = apiInstance.CreateLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourcesApi.CreateLeadSourceUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md) | The request object to create a new lead source |  |

### Return type

[**LeadSource**](LeadSource.md)

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

<a id="deleteleadsourceusingdelete"></a>
# **DeleteLeadSourceUsingDELETE**
> void DeleteLeadSourceUsingDELETE (string leadSourceId)

Delete a Lead Source

Deletes a Lead Source by ID

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteLeadSourceUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourcesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of a lead source

            try
            {
                // Delete a Lead Source
                apiInstance.DeleteLeadSourceUsingDELETE(leadSourceId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourcesApi.DeleteLeadSourceUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteLeadSourceUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Lead Source
    apiInstance.DeleteLeadSourceUsingDELETEWithHttpInfo(leadSourceId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourcesApi.DeleteLeadSourceUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of a lead source |  |

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

<a id="getleadsourceusingget"></a>
# **GetLeadSourceUsingGET**
> LeadSource GetLeadSourceUsingGET (string leadSourceId)

Retrieve a Lead Source

Retrieves a Lead Source by ID

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetLeadSourceUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourcesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of a lead source

            try
            {
                // Retrieve a Lead Source
                LeadSource result = apiInstance.GetLeadSourceUsingGET(leadSourceId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourcesApi.GetLeadSourceUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetLeadSourceUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Lead Source
    ApiResponse<LeadSource> response = apiInstance.GetLeadSourceUsingGETWithHttpInfo(leadSourceId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourcesApi.GetLeadSourceUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of a lead source |  |

### Return type

[**LeadSource**](LeadSource.md)

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

<a id="listleadsourcesusingget"></a>
# **ListLeadSourcesUsingGET**
> ListLeadSourcesResponse ListLeadSourcesUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Lead Sources

Retrieves a list of Lead Sources

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListLeadSourcesUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourcesApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:  - (String) `name` - (String) `status` - (String) `lead_source_category_id` - (String) `vendor` - (String) `medium` - (String) `start_time` - (String) `end_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=name%3D%3Dexample` - `filter=start_time%3D%3D2024-12-22T01:00:00.000Z` (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields:  - `name` - `status` - `vendor` - `medium` - `start_time` - `end_time` - `create_time` - `update_time`  One of the following directions:  - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Lead Sources
                ListLeadSourcesResponse result = apiInstance.ListLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourcesApi.ListLeadSourcesUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListLeadSourcesUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Lead Sources
    ApiResponse<ListLeadSourcesResponse> response = apiInstance.ListLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourcesApi.ListLeadSourcesUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)

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

<a id="updateleadsourceusingpatch"></a>
# **UpdateLeadSourceUsingPATCH**
> LeadSource UpdateLeadSourceUsingPATCH (string leadSourceId, CreateLeadSourceRequest createLeadSourceRequest, List<string>? updateMask = null)

Update a Lead Source

Updates a Lead Source with only the values provided in the request

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateLeadSourceUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadSourcesApi(config);
            var leadSourceId = "leadSourceId_example";  // string | The ID of a lead source
            var createLeadSourceRequest = new CreateLeadSourceRequest(); // CreateLeadSourceRequest | The request object to update a lead source
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Lead Source
                LeadSource result = apiInstance.UpdateLeadSourceUsingPATCH(leadSourceId, createLeadSourceRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourcesApi.UpdateLeadSourceUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateLeadSourceUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Lead Source
    ApiResponse<LeadSource> response = apiInstance.UpdateLeadSourceUsingPATCHWithHttpInfo(leadSourceId, createLeadSourceRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourcesApi.UpdateLeadSourceUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **leadSourceId** | **string** | The ID of a lead source |  |
| **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md) | The request object to update a lead source |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**LeadSource**](LeadSource.md)

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

