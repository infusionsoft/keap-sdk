# ReferralApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createReferral**](ReferralApi.md#createReferral) | **POST** /v2/referrals | Create a Referral |
| [**createReferralWithHttpInfo**](ReferralApi.md#createReferralWithHttpInfo) | **POST** /v2/referrals | Create a Referral |



## createReferral

> Referral createReferral(createReferralRequest)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ReferralApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ReferralApi apiInstance = new ReferralApi(defaultClient);
        CreateReferralRequest createReferralRequest = new CreateReferralRequest(); // CreateReferralRequest | request
        try {
            Referral result = apiInstance.createReferral(createReferralRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReferralApi#createReferral");
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
| **createReferralRequest** | [**CreateReferralRequest**](CreateReferralRequest.md)| request | |

### Return type

[**Referral**](Referral.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## createReferralWithHttpInfo

> ApiResponse<Referral> createReferral createReferralWithHttpInfo(createReferralRequest)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ReferralApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        ReferralApi apiInstance = new ReferralApi(defaultClient);
        CreateReferralRequest createReferralRequest = new CreateReferralRequest(); // CreateReferralRequest | request
        try {
            ApiResponse<Referral> response = apiInstance.createReferralWithHttpInfo(createReferralRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReferralApi#createReferral");
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
| **createReferralRequest** | [**CreateReferralRequest**](CreateReferralRequest.md)| request | |

### Return type

ApiResponse<[**Referral**](Referral.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

