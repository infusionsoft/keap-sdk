# PaymentMethodConfigsApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPaymentMethodConfig**](PaymentMethodConfigsApi.md#createPaymentMethodConfig) | **POST** /rest/v2/paymentMethodConfigs | Create Payment Method Configuration |
| [**createPaymentMethodConfigWithHttpInfo**](PaymentMethodConfigsApi.md#createPaymentMethodConfigWithHttpInfo) | **POST** /rest/v2/paymentMethodConfigs | Create Payment Method Configuration |



## createPaymentMethodConfig

> PaymentMethodConfig createPaymentMethodConfig(createPaymentMethodConfigRequest)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodConfigsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        PaymentMethodConfigsApi apiInstance = new PaymentMethodConfigsApi(defaultClient);
        CreatePaymentMethodConfigRequest createPaymentMethodConfigRequest = new CreatePaymentMethodConfigRequest(); // CreatePaymentMethodConfigRequest | 
        try {
            PaymentMethodConfig result = apiInstance.createPaymentMethodConfig(createPaymentMethodConfigRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodConfigsApi#createPaymentMethodConfig");
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
| **createPaymentMethodConfigRequest** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md)|  | |

### Return type

[**PaymentMethodConfig**](PaymentMethodConfig.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createPaymentMethodConfigWithHttpInfo

> ApiResponse<PaymentMethodConfig> createPaymentMethodConfig createPaymentMethodConfigWithHttpInfo(createPaymentMethodConfigRequest)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodConfigsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        PaymentMethodConfigsApi apiInstance = new PaymentMethodConfigsApi(defaultClient);
        CreatePaymentMethodConfigRequest createPaymentMethodConfigRequest = new CreatePaymentMethodConfigRequest(); // CreatePaymentMethodConfigRequest | 
        try {
            ApiResponse<PaymentMethodConfig> response = apiInstance.createPaymentMethodConfigWithHttpInfo(createPaymentMethodConfigRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodConfigsApi#createPaymentMethodConfig");
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
| **createPaymentMethodConfigRequest** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md)|  | |

### Return type

ApiResponse<[**PaymentMethodConfig**](PaymentMethodConfig.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

