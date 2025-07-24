# BusinessProfileApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBusinessProfile**](BusinessProfileApi.md#getBusinessProfile) | **GET** /v2/businessProfile | Retrieve Business Profile |
| [**getBusinessProfileWithHttpInfo**](BusinessProfileApi.md#getBusinessProfileWithHttpInfo) | **GET** /v2/businessProfile | Retrieve Business Profile |
| [**updateBusinessProfile**](BusinessProfileApi.md#updateBusinessProfile) | **PATCH** /v2/businessProfile | Update Business Profile |
| [**updateBusinessProfileWithHttpInfo**](BusinessProfileApi.md#updateBusinessProfileWithHttpInfo) | **PATCH** /v2/businessProfile | Update Business Profile |



## getBusinessProfile

> GetBusinessProfileResponse getBusinessProfile()

Retrieve Business Profile

Retrieves Business Profile information.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.BusinessProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        BusinessProfileApi apiInstance = new BusinessProfileApi(defaultClient);
        try {
            GetBusinessProfileResponse result = apiInstance.getBusinessProfile();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling BusinessProfileApi#getBusinessProfile");
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

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)


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

## getBusinessProfileWithHttpInfo

> ApiResponse<GetBusinessProfileResponse> getBusinessProfile getBusinessProfileWithHttpInfo()

Retrieve Business Profile

Retrieves Business Profile information.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.BusinessProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        BusinessProfileApi apiInstance = new BusinessProfileApi(defaultClient);
        try {
            ApiResponse<GetBusinessProfileResponse> response = apiInstance.getBusinessProfileWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling BusinessProfileApi#getBusinessProfile");
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

ApiResponse<[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)>


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


## updateBusinessProfile

> GetBusinessProfileResponse updateBusinessProfile(updateMask, updateBusinessProfileRequest)

Update Business Profile

Updates Business Profile information.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.BusinessProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        BusinessProfileApi apiInstance = new BusinessProfileApi(defaultClient);
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        UpdateBusinessProfileRequest updateBusinessProfileRequest = new UpdateBusinessProfileRequest(); // UpdateBusinessProfileRequest | businessProfile
        try {
            GetBusinessProfileResponse result = apiInstance.updateBusinessProfile(updateMask, updateBusinessProfileRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling BusinessProfileApi#updateBusinessProfile");
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
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, email, website, phone, address, currency_code, business_goals, business_primary_color, business_secondary_color] |
| **updateBusinessProfileRequest** | [**UpdateBusinessProfileRequest**](UpdateBusinessProfileRequest.md)| businessProfile | [optional] |

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## updateBusinessProfileWithHttpInfo

> ApiResponse<GetBusinessProfileResponse> updateBusinessProfile updateBusinessProfileWithHttpInfo(updateMask, updateBusinessProfileRequest)

Update Business Profile

Updates Business Profile information.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.BusinessProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        BusinessProfileApi apiInstance = new BusinessProfileApi(defaultClient);
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        UpdateBusinessProfileRequest updateBusinessProfileRequest = new UpdateBusinessProfileRequest(); // UpdateBusinessProfileRequest | businessProfile
        try {
            ApiResponse<GetBusinessProfileResponse> response = apiInstance.updateBusinessProfileWithHttpInfo(updateMask, updateBusinessProfileRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling BusinessProfileApi#updateBusinessProfile");
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
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, email, website, phone, address, currency_code, business_goals, business_primary_color, business_secondary_color] |
| **updateBusinessProfileRequest** | [**UpdateBusinessProfileRequest**](UpdateBusinessProfileRequest.md)| businessProfile | [optional] |

### Return type

ApiResponse<[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

