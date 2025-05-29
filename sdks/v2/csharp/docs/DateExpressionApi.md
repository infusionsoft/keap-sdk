# Keap.Core.V2.Api.DateExpressionApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**QueryDateExpressions**](DateExpressionApi.md#querydateexpressions) | **GET** /v2/dateExpressions |  |

<a id="querydateexpressions"></a>
# **QueryDateExpressions**
> DateExpressionResponse QueryDateExpressions (string? timeZone = null, string? query = null)



### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class QueryDateExpressionsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new DateExpressionApi(config);
            var timeZone = "timeZone_example";  // string? |  (optional) 
            var query = "query_example";  // string? |  (optional) 

            try
            {
                DateExpressionResponse result = apiInstance.QueryDateExpressions(timeZone, query);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DateExpressionApi.QueryDateExpressions: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the QueryDateExpressionsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<DateExpressionResponse> response = apiInstance.QueryDateExpressionsWithHttpInfo(timeZone, query);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DateExpressionApi.QueryDateExpressionsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **timeZone** | **string?** |  | [optional]  |
| **query** | **string?** |  | [optional]  |

### Return type

[**DateExpressionResponse**](DateExpressionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | queryDateExpressions 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

