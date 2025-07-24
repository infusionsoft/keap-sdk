# SettingsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getApplicationConfigurations**](SettingsApi.md#getApplicationConfigurations) | **GET** /v2/settings/applications:getConfiguration | Get Application Configuration |
| [**getApplicationConfigurationsWithHttpInfo**](SettingsApi.md#getApplicationConfigurationsWithHttpInfo) | **GET** /v2/settings/applications:getConfiguration | Get Application Configuration |
| [**getContactOptionTypes**](SettingsApi.md#getContactOptionTypes) | **GET** /v2/settings/contactOptionTypes | Get Contact Option types |
| [**getContactOptionTypesWithHttpInfo**](SettingsApi.md#getContactOptionTypesWithHttpInfo) | **GET** /v2/settings/contactOptionTypes | Get Contact Option types |
| [**isApplicationEnabled**](SettingsApi.md#isApplicationEnabled) | **GET** /v2/settings/applications:isEnabled | Get Application Status |
| [**isApplicationEnabledWithHttpInfo**](SettingsApi.md#isApplicationEnabledWithHttpInfo) | **GET** /v2/settings/applications:isEnabled | Get Application Status |



## getApplicationConfigurations

> GetSettingsResponse getApplicationConfigurations(fields)

Get Application Configuration

Get configuration values for the application instance.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
        try {
            GetSettingsResponse result = apiInstance.getApplicationConfigurations(fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#getApplicationConfigurations");
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
| **fields** | [**List&lt;String&gt;**](String.md)| By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. | [optional] [enum: AFFILIATE, APPOINTMENT, CONTACT, ECOMMERCE, EMAIL, FORMS, FULFILLMENT, INVOICE, NOTE, OPPORTUNITY, TASK, TEMPLATE] |

### Return type

[**GetSettingsResponse**](GetSettingsResponse.md)


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

## getApplicationConfigurationsWithHttpInfo

> ApiResponse<GetSettingsResponse> getApplicationConfigurations getApplicationConfigurationsWithHttpInfo(fields)

Get Application Configuration

Get configuration values for the application instance.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
        try {
            ApiResponse<GetSettingsResponse> response = apiInstance.getApplicationConfigurationsWithHttpInfo(fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#getApplicationConfigurations");
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
| **fields** | [**List&lt;String&gt;**](String.md)| By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. | [optional] [enum: AFFILIATE, APPOINTMENT, CONTACT, ECOMMERCE, EMAIL, FORMS, FULFILLMENT, INVOICE, NOTE, OPPORTUNITY, TASK, TEMPLATE] |

### Return type

ApiResponse<[**GetSettingsResponse**](GetSettingsResponse.md)>


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


## getContactOptionTypes

> GetContactOptionTypesResponse getContactOptionTypes()

Get Contact Option types

Gets a list of Contact Option types.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        try {
            GetContactOptionTypesResponse result = apiInstance.getContactOptionTypes();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#getContactOptionTypes");
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

[**GetContactOptionTypesResponse**](GetContactOptionTypesResponse.md)


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

## getContactOptionTypesWithHttpInfo

> ApiResponse<GetContactOptionTypesResponse> getContactOptionTypes getContactOptionTypesWithHttpInfo()

Get Contact Option types

Gets a list of Contact Option types.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        try {
            ApiResponse<GetContactOptionTypesResponse> response = apiInstance.getContactOptionTypesWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#getContactOptionTypes");
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

ApiResponse<[**GetContactOptionTypesResponse**](GetContactOptionTypesResponse.md)>


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


## isApplicationEnabled

> GetApplicationEnabledStatusResponse isApplicationEnabled()

Get Application Status

Check if the application is enabled or not

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        try {
            GetApplicationEnabledStatusResponse result = apiInstance.isApplicationEnabled();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#isApplicationEnabled");
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

[**GetApplicationEnabledStatusResponse**](GetApplicationEnabledStatusResponse.md)


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

## isApplicationEnabledWithHttpInfo

> ApiResponse<GetApplicationEnabledStatusResponse> isApplicationEnabled isApplicationEnabledWithHttpInfo()

Get Application Status

Check if the application is enabled or not

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SettingsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SettingsApi apiInstance = new SettingsApi(defaultClient);
        try {
            ApiResponse<GetApplicationEnabledStatusResponse> response = apiInstance.isApplicationEnabledWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SettingsApi#isApplicationEnabled");
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

ApiResponse<[**GetApplicationEnabledStatusResponse**](GetApplicationEnabledStatusResponse.md)>


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

