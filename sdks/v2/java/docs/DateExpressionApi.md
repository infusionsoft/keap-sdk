# DateExpressionApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**queryDateExpressions**](DateExpressionApi.md#queryDateExpressions) | **GET** /v2/dateExpressions |  |
| [**queryDateExpressionsWithHttpInfo**](DateExpressionApi.md#queryDateExpressionsWithHttpInfo) | **GET** /v2/dateExpressions |  |



## queryDateExpressions

> DateExpressionResponse queryDateExpressions(timeZone, query)



### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DateExpressionApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DateExpressionApi apiInstance = new DateExpressionApi(defaultClient);
        String timeZone = "timeZone_example"; // String | 
        String query = "query_example"; // String | 
        try {
            DateExpressionResponse result = apiInstance.queryDateExpressions(timeZone, query);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DateExpressionApi#queryDateExpressions");
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
| **timeZone** | **String**|  | [optional] |
| **query** | **String**|  | [optional] |

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

## queryDateExpressionsWithHttpInfo

> ApiResponse<DateExpressionResponse> queryDateExpressions queryDateExpressionsWithHttpInfo(timeZone, query)



### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DateExpressionApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DateExpressionApi apiInstance = new DateExpressionApi(defaultClient);
        String timeZone = "timeZone_example"; // String | 
        String query = "query_example"; // String | 
        try {
            ApiResponse<DateExpressionResponse> response = apiInstance.queryDateExpressionsWithHttpInfo(timeZone, query);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DateExpressionApi#queryDateExpressions");
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
| **timeZone** | **String**|  | [optional] |
| **query** | **String**|  | [optional] |

### Return type

ApiResponse<[**DateExpressionResponse**](DateExpressionResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | queryDateExpressions 200 response |  -  |

