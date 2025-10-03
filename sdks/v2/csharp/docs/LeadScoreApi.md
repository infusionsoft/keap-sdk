# Keap.Core.V2.Api.LeadScoreApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetLeadScoreDetails**](LeadScoreApi.md#getleadscoredetails) | **GET** /v2/contacts/{contact_id}/leadScore | Retrieve Lead Score of a Contact |

<a id="getleadscoredetails"></a>
# **GetLeadScoreDetails**
> LeadScore GetLeadScoreDetails (string contactId)

Retrieve Lead Score of a Contact

Retrieves information about the Lead Score of a Contact

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetLeadScoreDetailsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new LeadScoreApi(config);
            var contactId = "contactId_example";  // string | contact_id

            try
            {
                // Retrieve Lead Score of a Contact
                LeadScore result = apiInstance.GetLeadScoreDetails(contactId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadScoreApi.GetLeadScoreDetails: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetLeadScoreDetailsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Lead Score of a Contact
    ApiResponse<LeadScore> response = apiInstance.GetLeadScoreDetailsWithHttpInfo(contactId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadScoreApi.GetLeadScoreDetailsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | contact_id |  |

### Return type

[**LeadScore**](LeadScore.md)

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

