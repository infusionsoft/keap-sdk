# Keap.Core.V2.Api.PipelinesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**Create**](PipelinesApi.md#create) | **POST** /v2/pipelines | Creates a new entity. |
| [**Delete**](PipelinesApi.md#delete) | **DELETE** /v2/pipelines/{id} | Deletes a pipeline. |
| [**Get**](PipelinesApi.md#get) | **GET** /v2/pipelines/{id} | Retrieves an entity by its identifier. |
| [**GetDealCount**](PipelinesApi.md#getdealcount) | **GET** /v2/pipelines/{id}:dealsCount | Retrieves the count of deals for a specific pipeline. |
| [**GetOutcomeLabels**](PipelinesApi.md#getoutcomelabels) | **GET** /v2/pipelines/{id}/outcomes | Gets the outcome labels for a pipeline. |
| [**List**](PipelinesApi.md#list) | **GET** /v2/pipelines | Lists entities based on the provided ListCommand. |
| [**ListStages**](PipelinesApi.md#liststages) | **GET** /v2/pipelines/{id}/stages | Retrieves a list of stages for a specific pipeline. |
| [**ListSummaries**](PipelinesApi.md#listsummaries) | **GET** /v2/pipelines/summaries | Retrieves a list of pipeline summaries. |
| [**SetOutcomeLabels**](PipelinesApi.md#setoutcomelabels) | **PATCH** /v2/pipelines/{id}/outcomes | Sets the outcome labels for a pipeline. |
| [**Update**](PipelinesApi.md#update) | **PATCH** /v2/pipelines/{id} | Updates an existing entity. |

<a id="create"></a>
# **Create**
> Pipeline Create (CreatePipelineRequest createPipelineRequest)

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
    public class CreateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PipelinesApi(config);
            var createPipelineRequest = new CreatePipelineRequest(); // CreatePipelineRequest | the create request

            try
            {
                // Creates a new entity.
                Pipeline result = apiInstance.Create(createPipelineRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PipelinesApi.Create: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Creates a new entity.
    ApiResponse<Pipeline> response = apiInstance.CreateWithHttpInfo(createPipelineRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PipelinesApi.CreateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createPipelineRequest** | [**CreatePipelineRequest**](CreatePipelineRequest.md) | the create request |  |

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="delete"></a>
# **Delete**
> void Delete (string id, bool? allowCleanup = null, string? newStageId = null)

Deletes a pipeline.

Deletes a pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PipelinesApi(config);
            var id = "id_example";  // string | the pipeline identifier
            var allowCleanup = true;  // bool? | flag indicating whether cleanup is allowed, can be null (optional) 
            var newStageId = "newStageId_example";  // string? | the new stage identifier, can be null (optional) 

            try
            {
                // Deletes a pipeline.
                apiInstance.Delete(id, allowCleanup, newStageId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PipelinesApi.Delete: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Deletes a pipeline.
    apiInstance.DeleteWithHttpInfo(id, allowCleanup, newStageId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PipelinesApi.DeleteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the pipeline identifier |  |
| **allowCleanup** | **bool?** | flag indicating whether cleanup is allowed, can be null | [optional]  |
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

<a id="get"></a>
# **Get**
> Pipeline Get (string id)

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
    public class GetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PipelinesApi(config);
            var id = "id_example";  // string | the entity identifier

            try
            {
                // Retrieves an entity by its identifier.
                Pipeline result = apiInstance.Get(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PipelinesApi.Get: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves an entity by its identifier.
    ApiResponse<Pipeline> response = apiInstance.GetWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PipelinesApi.GetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the entity identifier |  |

### Return type

[**Pipeline**](Pipeline.md)

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

<a id="getdealcount"></a>
# **GetDealCount**
> long GetDealCount (string id, string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

Retrieves the count of deals for a specific pipeline.

Retrieves the count of deals for a specific pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetDealCountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PipelinesApi(config);
            var id = "id_example";  // string | the pipeline identifier
            var filter = "filter_example";  // string? |  (optional) 
            var pageToken = "pageToken_example";  // string? |  (optional) 
            var orderBy = "orderBy_example";  // string? |  (optional) 
            var pageSize = 100;  // int? |  (optional)  (default to 1000)

            try
            {
                // Retrieves the count of deals for a specific pipeline.
                long result = apiInstance.GetDealCount(id, filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PipelinesApi.GetDealCount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDealCountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves the count of deals for a specific pipeline.
    ApiResponse<long> response = apiInstance.GetDealCountWithHttpInfo(id, filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PipelinesApi.GetDealCountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the pipeline identifier |  |
| **filter** | **string?** |  | [optional]  |
| **pageToken** | **string?** |  | [optional]  |
| **orderBy** | **string?** |  | [optional]  |
| **pageSize** | **int?** |  | [optional] [default to 1000] |

### Return type

**long**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a Mono emitting the count of deals |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getoutcomelabels"></a>
# **GetOutcomeLabels**
> PipelineOutcomeLabelListResponse GetOutcomeLabels (string id, string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

Gets the outcome labels for a pipeline.

Gets the outcome labels for a pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetOutcomeLabelsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PipelinesApi(config);
            var id = "id_example";  // string | the pipeline identifier
            var filter = "filter_example";  // string? |  (optional) 
            var pageToken = "pageToken_example";  // string? |  (optional) 
            var orderBy = "orderBy_example";  // string? |  (optional) 
            var pageSize = 100;  // int? |  (optional)  (default to 1000)

            try
            {
                // Gets the outcome labels for a pipeline.
                PipelineOutcomeLabelListResponse result = apiInstance.GetOutcomeLabels(id, filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PipelinesApi.GetOutcomeLabels: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOutcomeLabelsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Gets the outcome labels for a pipeline.
    ApiResponse<PipelineOutcomeLabelListResponse> response = apiInstance.GetOutcomeLabelsWithHttpInfo(id, filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PipelinesApi.GetOutcomeLabelsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the pipeline identifier |  |
| **filter** | **string?** |  | [optional]  |
| **pageToken** | **string?** |  | [optional]  |
| **orderBy** | **string?** |  | [optional]  |
| **pageSize** | **int?** |  | [optional] [default to 1000] |

### Return type

[**PipelineOutcomeLabelListResponse**](PipelineOutcomeLabelListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated list of the pipeline&#39;s outcome labels |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="list"></a>
# **List**
> PipelineListResponse List (string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

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
    public class ListExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PipelinesApi(config);
            var filter = "filter_example";  // string? |  (optional) 
            var pageToken = "pageToken_example";  // string? |  (optional) 
            var orderBy = "orderBy_example";  // string? |  (optional) 
            var pageSize = 100;  // int? |  (optional)  (default to 1000)

            try
            {
                // Lists entities based on the provided ListCommand.
                PipelineListResponse result = apiInstance.List(filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PipelinesApi.List: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Lists entities based on the provided ListCommand.
    ApiResponse<PipelineListResponse> response = apiInstance.ListWithHttpInfo(filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PipelinesApi.ListWithHttpInfo: " + e.Message);
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

[**PipelineListResponse**](PipelineListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a response containing the list of entities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="liststages"></a>
# **ListStages**
> PipelineStageListResponse ListStages (string id, string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

Retrieves a list of stages for a specific pipeline.

Retrieves a list of stages for a specific pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListStagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PipelinesApi(config);
            var id = "id_example";  // string | the pipeline identifier
            var filter = "filter_example";  // string? |  (optional) 
            var pageToken = "pageToken_example";  // string? |  (optional) 
            var orderBy = "orderBy_example";  // string? |  (optional) 
            var pageSize = 100;  // int? |  (optional)  (default to 1000)

            try
            {
                // Retrieves a list of stages for a specific pipeline.
                PipelineStageListResponse result = apiInstance.ListStages(id, filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PipelinesApi.ListStages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListStagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a list of stages for a specific pipeline.
    ApiResponse<PipelineStageListResponse> response = apiInstance.ListStagesWithHttpInfo(id, filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PipelinesApi.ListStagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the pipeline identifier |  |
| **filter** | **string?** |  | [optional]  |
| **pageToken** | **string?** |  | [optional]  |
| **orderBy** | **string?** |  | [optional]  |
| **pageSize** | **int?** |  | [optional] [default to 1000] |

### Return type

[**PipelineStageListResponse**](PipelineStageListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of pipeline stages and the next page token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listsummaries"></a>
# **ListSummaries**
> PipelineSummariesListResponse ListSummaries (string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

Retrieves a list of pipeline summaries.

Retrieves a list of pipeline summaries.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListSummariesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PipelinesApi(config);
            var filter = "filter_example";  // string? |  (optional) 
            var pageToken = "pageToken_example";  // string? |  (optional) 
            var orderBy = "orderBy_example";  // string? |  (optional) 
            var pageSize = 100;  // int? |  (optional)  (default to 1000)

            try
            {
                // Retrieves a list of pipeline summaries.
                PipelineSummariesListResponse result = apiInstance.ListSummaries(filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PipelinesApi.ListSummaries: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSummariesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves a list of pipeline summaries.
    ApiResponse<PipelineSummariesListResponse> response = apiInstance.ListSummariesWithHttpInfo(filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PipelinesApi.ListSummariesWithHttpInfo: " + e.Message);
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

[**PipelineSummariesListResponse**](PipelineSummariesListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of pipeline summaries and the next page token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="setoutcomelabels"></a>
# **SetOutcomeLabels**
> PipelineOutcomeLabelListResponse SetOutcomeLabels (string id, UpdateOutcomeLabelsRequest updateOutcomeLabelsRequest)

Sets the outcome labels for a pipeline.

Sets the outcome labels for a pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class SetOutcomeLabelsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PipelinesApi(config);
            var id = "id_example";  // string | the pipeline identifier
            var updateOutcomeLabelsRequest = new UpdateOutcomeLabelsRequest(); // UpdateOutcomeLabelsRequest | the request containing the new outcome labels

            try
            {
                // Sets the outcome labels for a pipeline.
                PipelineOutcomeLabelListResponse result = apiInstance.SetOutcomeLabels(id, updateOutcomeLabelsRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PipelinesApi.SetOutcomeLabels: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SetOutcomeLabelsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Sets the outcome labels for a pipeline.
    ApiResponse<PipelineOutcomeLabelListResponse> response = apiInstance.SetOutcomeLabelsWithHttpInfo(id, updateOutcomeLabelsRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PipelinesApi.SetOutcomeLabelsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the pipeline identifier |  |
| **updateOutcomeLabelsRequest** | [**UpdateOutcomeLabelsRequest**](UpdateOutcomeLabelsRequest.md) | the request containing the new outcome labels |  |

### Return type

[**PipelineOutcomeLabelListResponse**](PipelineOutcomeLabelListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated list of the pipeline&#39;s outcome labels |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="update"></a>
# **Update**
> Pipeline Update (string id, List<string> updateMask, UpdatePipelineRequest updatePipelineRequest)

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
    public class UpdateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new PipelinesApi(config);
            var id = "id_example";  // string | the entity identifier
            var updateMask = new List<string>(); // List<string> | the fields to update
            var updatePipelineRequest = new UpdatePipelineRequest(); // UpdatePipelineRequest | the update request

            try
            {
                // Updates an existing entity.
                Pipeline result = apiInstance.Update(id, updateMask, updatePipelineRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PipelinesApi.Update: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Updates an existing entity.
    ApiResponse<Pipeline> response = apiInstance.UpdateWithHttpInfo(id, updateMask, updatePipelineRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PipelinesApi.UpdateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | the entity identifier |  |
| **updateMask** | [**List&lt;string&gt;**](string.md) | the fields to update |  |
| **updatePipelineRequest** | [**UpdatePipelineRequest**](UpdatePipelineRequest.md) | the update request |  |

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

