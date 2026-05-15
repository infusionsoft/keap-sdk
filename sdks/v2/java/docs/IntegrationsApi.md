# IntegrationsApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addIntegrationsWordPressOptIn**](IntegrationsApi.md#addIntegrationsWordPressOptIn) | **POST** /rest/v2/integrations/wordpress/options | Add a WordPress Opt-In Option |
| [**addIntegrationsWordPressOptInWithHttpInfo**](IntegrationsApi.md#addIntegrationsWordPressOptInWithHttpInfo) | **POST** /rest/v2/integrations/wordpress/options | Add a WordPress Opt-In Option |
| [**deleteIntegrationsWordPressOptIn**](IntegrationsApi.md#deleteIntegrationsWordPressOptIn) | **DELETE** /rest/v2/integrations/wordpress/options/{option_key} | Delete a WordPress Opt-In Option |
| [**deleteIntegrationsWordPressOptInWithHttpInfo**](IntegrationsApi.md#deleteIntegrationsWordPressOptInWithHttpInfo) | **DELETE** /rest/v2/integrations/wordpress/options/{option_key} | Delete a WordPress Opt-In Option |



## addIntegrationsWordPressOptIn

> WordPressOptInOption addIntegrationsWordPressOptIn(createIntegrationsWordPressOptInOption)

Add a WordPress Opt-In Option

Adds a value to the list of WordPress Opt-In Options Available

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.IntegrationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        IntegrationsApi apiInstance = new IntegrationsApi(defaultClient);
        CreateIntegrationsWordPressOptInOption createIntegrationsWordPressOptInOption = new CreateIntegrationsWordPressOptInOption(); // CreateIntegrationsWordPressOptInOption | 
        try {
            WordPressOptInOption result = apiInstance.addIntegrationsWordPressOptIn(createIntegrationsWordPressOptInOption);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling IntegrationsApi#addIntegrationsWordPressOptIn");
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
| **createIntegrationsWordPressOptInOption** | [**CreateIntegrationsWordPressOptInOption**](CreateIntegrationsWordPressOptInOption.md)|  | |

### Return type

[**WordPressOptInOption**](WordPressOptInOption.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## addIntegrationsWordPressOptInWithHttpInfo

> ApiResponse<WordPressOptInOption> addIntegrationsWordPressOptIn addIntegrationsWordPressOptInWithHttpInfo(createIntegrationsWordPressOptInOption)

Add a WordPress Opt-In Option

Adds a value to the list of WordPress Opt-In Options Available

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.IntegrationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        IntegrationsApi apiInstance = new IntegrationsApi(defaultClient);
        CreateIntegrationsWordPressOptInOption createIntegrationsWordPressOptInOption = new CreateIntegrationsWordPressOptInOption(); // CreateIntegrationsWordPressOptInOption | 
        try {
            ApiResponse<WordPressOptInOption> response = apiInstance.addIntegrationsWordPressOptInWithHttpInfo(createIntegrationsWordPressOptInOption);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling IntegrationsApi#addIntegrationsWordPressOptIn");
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
| **createIntegrationsWordPressOptInOption** | [**CreateIntegrationsWordPressOptInOption**](CreateIntegrationsWordPressOptInOption.md)|  | |

### Return type

ApiResponse<[**WordPressOptInOption**](WordPressOptInOption.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteIntegrationsWordPressOptIn

> void deleteIntegrationsWordPressOptIn(optionKey)

Delete a WordPress Opt-In Option

Deletes a value from the list of WordPress Opt-In Options Available

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.IntegrationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        IntegrationsApi apiInstance = new IntegrationsApi(defaultClient);
        String optionKey = "optionKey_example"; // String | 
        try {
            apiInstance.deleteIntegrationsWordPressOptIn(optionKey);
        } catch (ApiException e) {
            System.err.println("Exception when calling IntegrationsApi#deleteIntegrationsWordPressOptIn");
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
| **optionKey** | **String**|  | |

### Return type


null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteIntegrationsWordPressOptInWithHttpInfo

> ApiResponse<Void> deleteIntegrationsWordPressOptIn deleteIntegrationsWordPressOptInWithHttpInfo(optionKey)

Delete a WordPress Opt-In Option

Deletes a value from the list of WordPress Opt-In Options Available

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.IntegrationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        IntegrationsApi apiInstance = new IntegrationsApi(defaultClient);
        String optionKey = "optionKey_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteIntegrationsWordPressOptInWithHttpInfo(optionKey);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling IntegrationsApi#deleteIntegrationsWordPressOptIn");
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
| **optionKey** | **String**|  | |

### Return type


ApiResponse<Void>

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

