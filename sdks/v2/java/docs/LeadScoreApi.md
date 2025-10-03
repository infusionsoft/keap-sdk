# LeadScoreApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getLeadScoreDetails**](LeadScoreApi.md#getLeadScoreDetails) | **GET** /v2/contacts/{contact_id}/leadScore | Retrieve Lead Score of a Contact |
| [**getLeadScoreDetailsWithHttpInfo**](LeadScoreApi.md#getLeadScoreDetailsWithHttpInfo) | **GET** /v2/contacts/{contact_id}/leadScore | Retrieve Lead Score of a Contact |



## getLeadScoreDetails

> LeadScore getLeadScoreDetails(contactId)

Retrieve Lead Score of a Contact

Retrieves information about the Lead Score of a Contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadScoreApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadScoreApi apiInstance = new LeadScoreApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        try {
            LeadScore result = apiInstance.getLeadScoreDetails(contactId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadScoreApi#getLeadScoreDetails");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **contactId** | **String**| contact_id | |

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

## getLeadScoreDetailsWithHttpInfo

> ApiResponse<LeadScore> getLeadScoreDetails getLeadScoreDetailsWithHttpInfo(contactId)

Retrieve Lead Score of a Contact

Retrieves information about the Lead Score of a Contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LeadScoreApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LeadScoreApi apiInstance = new LeadScoreApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        try {
            ApiResponse<LeadScore> response = apiInstance.getLeadScoreDetailsWithHttpInfo(contactId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadScoreApi#getLeadScoreDetails");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **contactId** | **String**| contact_id | |

### Return type

ApiResponse<[**LeadScore**](LeadScore.md)>


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

