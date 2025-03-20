# Keap.Core.V2.Api.StagesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**Create1**](StagesApi.md#create1) | **POST** /v2/stages | Creates a new entity. |
| [**Delete1**](StagesApi.md#delete1) | **DELETE** /v2/stages/{id} | Deletes a stage by its identifier for a given tenant. |
| [**Get1**](StagesApi.md#get1) | **GET** /v2/stages/{id} | Retrieves an entity by its identifier. |
| [**List1**](StagesApi.md#list1) | **GET** /v2/stages | Lists entities based on the provided ListCommand. |
| [**ListStages1**](StagesApi.md#liststages1) | **GET** /v2/stages/{id}/deals | Retrieves a list of deals for a specific stage. |
| [**Update1**](StagesApi.md#update1) | **PATCH** /v2/stages/{id} | Updates an existing entity. |

<a id="create1"></a>
# **Create1**
> Stage Create1 (CreateStageRequest createStageRequest)

Creates a new entity.

Creates a new entity.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class Create1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new StagesApi(config);
            var createStageRequest = new CreateStageRequest(); // CreateStageRequest | the create request

            try
            {
                // Creates a new entity.
                Stage result = apiInstance.Create1(createStageRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling StagesApi.Create1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the Create1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Creates a new entity.
    ApiResponse<Stage> response = apiInstance.Create1WithHttpInfo(createStageRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling StagesApi.Create1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createStageRequest** | [**CreateStageRequest**](CreateStageRequest.md) | the create request |  |

### Return type

[**Stage**](Stage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The create_1d entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="delete1"></a>
# **Delete1**
> void Delete1 (string id, string? newStageId = null)

Deletes a stage by its identifier for a given tenant.

Deletes a stage by its identifier for a given tenant.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class Delete1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new StagesApi(config);
            var id = "id_example";  // string | the stage identifier
            var newStageId = "newStageId_example";  // string? | the new stage identifier, can be null (optional) 

            try
            {
                // Deletes a stage by its identifier for a given tenant.
                apiInstance.Delete1(id, newStageId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling StagesApi.Delete1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the Delete1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Deletes a stage by its identifier for a given tenant.
    apiInstance.Delete1WithHttpInfo(id, newStageId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling StagesApi.Delete1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the stage identifier |  |
| **newStageId** | **string?** | the new stage identifier, can be null | [optional]  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | A response indicating no content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="get1"></a>
# **Get1**
> Stage Get1 (string id)

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class Get1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new StagesApi(config);
            var id = "id_example";  // string | the entity identifier

            try
            {
                // Retrieves an entity by its identifier.
                Stage result = apiInstance.Get1(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling StagesApi.Get1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the Get1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves an entity by its identifier.
    ApiResponse<Stage> response = apiInstance.Get1WithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling StagesApi.Get1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the entity identifier |  |

### Return type

[**Stage**](Stage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The retrieved entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="list1"></a>
# **List1**
> StageListResponse List1 (string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class List1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new StagesApi(config);
            var filter = "filter_example";  // string? |  (optional) 
            var pageToken = "pageToken_example";  // string? |  (optional) 
            var orderBy = "orderBy_example";  // string? |  (optional) 
            var pageSize = 100;  // int? |  (optional)  (default to 1000)

            try
            {
                // Lists entities based on the provided ListCommand.
                StageListResponse result = apiInstance.List1(filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling StagesApi.List1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the List1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Lists entities based on the provided ListCommand.
    ApiResponse<StageListResponse> response = apiInstance.List1WithHttpInfo(filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling StagesApi.List1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** |  | [optional]  |
| **pageToken** | **string?** |  | [optional]  |
| **orderBy** | **string?** |  | [optional]  |
| **pageSize** | **int?** |  | [optional] [default to 1000] |

### Return type

[**StageListResponse**](StageListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a response containing the list_1 of entities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="liststages1"></a>
# **ListStages1**
> StageDealListResponse ListStages1 (string id, string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

Retrieves a list of deals for a specific stage.

Retrieves a list of deals for a specific stage.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListStages1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new StagesApi(config);
            var id = "id_example";  // string | the stage identifier
            var filter = "filter_example";  // string? |  (optional) 
            var pageToken = "pageToken_example";  // string? |  (optional) 
            var orderBy = "orderBy_example";  // string? |  (optional) 
            var pageSize = 100;  // int? |  (optional)  (default to 1000)

            try
            {
                // Retrieves a list of deals for a specific stage.
                StageDealListResponse result = apiInstance.ListStages1(id, filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling StagesApi.ListStages1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListStages1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a list of deals for a specific stage.
    ApiResponse<StageDealListResponse> response = apiInstance.ListStages1WithHttpInfo(id, filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling StagesApi.ListStages1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the stage identifier |  |
| **filter** | **string?** |  | [optional]  |
| **pageToken** | **string?** |  | [optional]  |
| **orderBy** | **string?** |  | [optional]  |
| **pageSize** | **int?** |  | [optional] [default to 1000] |

### Return type

[**StageDealListResponse**](StageDealListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of deals and the next page token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="update1"></a>
# **Update1**
> Stage Update1 (string id, List<string> updateMask, UpdateStageRequest updateStageRequest)

Updates an existing entity.

Updates an existing entity.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class Update1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new StagesApi(config);
            var id = "id_example";  // string | the entity identifier
            var updateMask = new List<string>(); // List<string> | the fields to update
            var updateStageRequest = new UpdateStageRequest(); // UpdateStageRequest | the update request

            try
            {
                // Updates an existing entity.
                Stage result = apiInstance.Update1(id, updateMask, updateStageRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling StagesApi.Update1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the Update1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Updates an existing entity.
    ApiResponse<Stage> response = apiInstance.Update1WithHttpInfo(id, updateMask, updateStageRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling StagesApi.Update1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the entity identifier |  |
| **updateMask** | [**List&lt;string&gt;**](string.md) | the fields to update |  |
| **updateStageRequest** | [**UpdateStageRequest**](UpdateStageRequest.md) | the update request |  |

### Return type

[**Stage**](Stage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The update_1d entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

