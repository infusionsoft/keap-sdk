# ShippingApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listShippingMethods**](ShippingApi.md#listShippingMethods) | **GET** /v2/shipping | List Shipping methods |
| [**listShippingMethodsWithHttpInfo**](ShippingApi.md#listShippingMethodsWithHttpInfo) | **GET** /v2/shipping | List Shipping methods |



## listShippingMethods

> ListRestShippingMethodsResponse listShippingMethods()

List Shipping methods

Retrieves a list of Shipping methods

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingApi apiInstance = new ShippingApi(defaultClient);
        try {
            ListRestShippingMethodsResponse result = apiInstance.listShippingMethods();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingApi#listShippingMethods");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListRestShippingMethodsResponse**](ListRestShippingMethodsResponse.md)


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

## listShippingMethodsWithHttpInfo

> ApiResponse<ListRestShippingMethodsResponse> listShippingMethods listShippingMethodsWithHttpInfo()

List Shipping methods

Retrieves a list of Shipping methods

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ShippingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ShippingApi apiInstance = new ShippingApi(defaultClient);
        try {
            ApiResponse<ListRestShippingMethodsResponse> response = apiInstance.listShippingMethodsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingApi#listShippingMethods");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ListRestShippingMethodsResponse**](ListRestShippingMethodsResponse.md)>


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

