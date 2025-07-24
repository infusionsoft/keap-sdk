# SalesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**setMerchantGatewayAsDefault**](SalesApi.md#setMerchantGatewayAsDefault) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account |
| [**setMerchantGatewayAsDefaultWithHttpInfo**](SalesApi.md#setMerchantGatewayAsDefaultWithHttpInfo) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account |



## setMerchantGatewayAsDefault

> void setMerchantGatewayAsDefault(id)

Set default Merchant Account

Sets the specified Merchant Account as the default Merchant Account.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SalesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SalesApi apiInstance = new SalesApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            apiInstance.setMerchantGatewayAsDefault(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling SalesApi#setMerchantGatewayAsDefault");
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
| **id** | **String**| id | |

### Return type


null (empty response body)

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
| **500** | Internal Server Error |  -  |

## setMerchantGatewayAsDefaultWithHttpInfo

> ApiResponse<Void> setMerchantGatewayAsDefault setMerchantGatewayAsDefaultWithHttpInfo(id)

Set default Merchant Account

Sets the specified Merchant Account as the default Merchant Account.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SalesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SalesApi apiInstance = new SalesApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<Void> response = apiInstance.setMerchantGatewayAsDefaultWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SalesApi#setMerchantGatewayAsDefault");
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
| **id** | **String**| id | |

### Return type


ApiResponse<Void>

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
| **500** | Internal Server Error |  -  |

