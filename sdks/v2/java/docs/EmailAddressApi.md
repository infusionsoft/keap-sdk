# EmailAddressApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getEmailAddressStatusUsingGET**](EmailAddressApi.md#getEmailAddressStatusUsingGET) | **GET** /v2/emailAddresses/{email} | Retrieve an Email Address status |
| [**getEmailAddressStatusUsingGETWithHttpInfo**](EmailAddressApi.md#getEmailAddressStatusUsingGETWithHttpInfo) | **GET** /v2/emailAddresses/{email} | Retrieve an Email Address status |
| [**updateEmailAddressOptStatusUsingPUT**](EmailAddressApi.md#updateEmailAddressOptStatusUsingPUT) | **PUT** /v2/emailAddresses/{email} | Update an Email Address opt-in status |
| [**updateEmailAddressOptStatusUsingPUTWithHttpInfo**](EmailAddressApi.md#updateEmailAddressOptStatusUsingPUTWithHttpInfo) | **PUT** /v2/emailAddresses/{email} | Update an Email Address opt-in status |



## getEmailAddressStatusUsingGET

> RestEmailAddress getEmailAddressStatusUsingGET(email)

Retrieve an Email Address status

Retrieves the opt-in status for given Email Address

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailAddressApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailAddressApi apiInstance = new EmailAddressApi(defaultClient);
        String email = "email_example"; // String | email
        try {
            RestEmailAddress result = apiInstance.getEmailAddressStatusUsingGET(email);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailAddressApi#getEmailAddressStatusUsingGET");
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
| **email** | **String**| email | |

### Return type

[**RestEmailAddress**](RestEmailAddress.md)


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

## getEmailAddressStatusUsingGETWithHttpInfo

> ApiResponse<RestEmailAddress> getEmailAddressStatusUsingGET getEmailAddressStatusUsingGETWithHttpInfo(email)

Retrieve an Email Address status

Retrieves the opt-in status for given Email Address

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailAddressApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailAddressApi apiInstance = new EmailAddressApi(defaultClient);
        String email = "email_example"; // String | email
        try {
            ApiResponse<RestEmailAddress> response = apiInstance.getEmailAddressStatusUsingGETWithHttpInfo(email);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailAddressApi#getEmailAddressStatusUsingGET");
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
| **email** | **String**| email | |

### Return type

ApiResponse<[**RestEmailAddress**](RestEmailAddress.md)>


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


## updateEmailAddressOptStatusUsingPUT

> RestEmailAddress updateEmailAddressOptStatusUsingPUT(email, updateEmailAddress)

Update an Email Address opt-in status

Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailAddressApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailAddressApi apiInstance = new EmailAddressApi(defaultClient);
        String email = "email_example"; // String | email
        UpdateEmailAddress updateEmailAddress = new UpdateEmailAddress(); // UpdateEmailAddress | updateEmailAddress
        try {
            RestEmailAddress result = apiInstance.updateEmailAddressOptStatusUsingPUT(email, updateEmailAddress);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailAddressApi#updateEmailAddressOptStatusUsingPUT");
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
| **email** | **String**| email | |
| **updateEmailAddress** | [**UpdateEmailAddress**](UpdateEmailAddress.md)| updateEmailAddress | |

### Return type

[**RestEmailAddress**](RestEmailAddress.md)


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

## updateEmailAddressOptStatusUsingPUTWithHttpInfo

> ApiResponse<RestEmailAddress> updateEmailAddressOptStatusUsingPUT updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress)

Update an Email Address opt-in status

Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailAddressApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailAddressApi apiInstance = new EmailAddressApi(defaultClient);
        String email = "email_example"; // String | email
        UpdateEmailAddress updateEmailAddress = new UpdateEmailAddress(); // UpdateEmailAddress | updateEmailAddress
        try {
            ApiResponse<RestEmailAddress> response = apiInstance.updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailAddressApi#updateEmailAddressOptStatusUsingPUT");
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
| **email** | **String**| email | |
| **updateEmailAddress** | [**UpdateEmailAddress**](UpdateEmailAddress.md)| updateEmailAddress | |

### Return type

ApiResponse<[**RestEmailAddress**](RestEmailAddress.md)>


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

