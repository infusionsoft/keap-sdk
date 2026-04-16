# PaymentMethodsApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deactivatePaymentMethod**](PaymentMethodsApi.md#deactivatePaymentMethod) | **POST** /rest/v2/contacts/{contact_id}/paymentMethods/{payment_method_id}:deactivate | Deactivate a Contact Payment Method |
| [**deactivatePaymentMethodWithHttpInfo**](PaymentMethodsApi.md#deactivatePaymentMethodWithHttpInfo) | **POST** /rest/v2/contacts/{contact_id}/paymentMethods/{payment_method_id}:deactivate | Deactivate a Contact Payment Method |
| [**deletePaymentMethod**](PaymentMethodsApi.md#deletePaymentMethod) | **DELETE** /rest/v2/contacts/{contact_id}/paymentMethods/{payment_method_id} | Delete a Contact Payment Method |
| [**deletePaymentMethodWithHttpInfo**](PaymentMethodsApi.md#deletePaymentMethodWithHttpInfo) | **DELETE** /rest/v2/contacts/{contact_id}/paymentMethods/{payment_method_id} | Delete a Contact Payment Method |
| [**listPaymentMethods**](PaymentMethodsApi.md#listPaymentMethods) | **GET** /rest/v2/paymentMethods | List of Payment Methods |
| [**listPaymentMethodsWithHttpInfo**](PaymentMethodsApi.md#listPaymentMethodsWithHttpInfo) | **GET** /rest/v2/paymentMethods | List of Payment Methods |
| [**listPaymentMethods_0**](PaymentMethodsApi.md#listPaymentMethods_0) | **GET** /rest/v2/contacts/{contact_id}/paymentMethods | List of Contact Payment Methods |
| [**listPaymentMethods_0WithHttpInfo**](PaymentMethodsApi.md#listPaymentMethods_0WithHttpInfo) | **GET** /rest/v2/contacts/{contact_id}/paymentMethods | List of Contact Payment Methods |



## deactivatePaymentMethod

> void deactivatePaymentMethod(contactId, paymentMethodId)

Deactivate a Contact Payment Method

Deactivate the specified payment method

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        PaymentMethodsApi apiInstance = new PaymentMethodsApi(defaultClient);
        String contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
        String paymentMethodId = "paymentMethodId_example"; // String | ID of the payment method to be deactivated.
        try {
            apiInstance.deactivatePaymentMethod(contactId, paymentMethodId);
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodsApi#deactivatePaymentMethod");
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
| **contactId** | **String**| ID of the contact to which the payment method belongs. | |
| **paymentMethodId** | **String**| ID of the payment method to be deactivated. | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deactivatePaymentMethodWithHttpInfo

> ApiResponse<Void> deactivatePaymentMethod deactivatePaymentMethodWithHttpInfo(contactId, paymentMethodId)

Deactivate a Contact Payment Method

Deactivate the specified payment method

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        PaymentMethodsApi apiInstance = new PaymentMethodsApi(defaultClient);
        String contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
        String paymentMethodId = "paymentMethodId_example"; // String | ID of the payment method to be deactivated.
        try {
            ApiResponse<Void> response = apiInstance.deactivatePaymentMethodWithHttpInfo(contactId, paymentMethodId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodsApi#deactivatePaymentMethod");
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
| **contactId** | **String**| ID of the contact to which the payment method belongs. | |
| **paymentMethodId** | **String**| ID of the payment method to be deactivated. | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deletePaymentMethod

> void deletePaymentMethod(contactId, paymentMethodId)

Delete a Contact Payment Method

Deletes the specified payment method

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        PaymentMethodsApi apiInstance = new PaymentMethodsApi(defaultClient);
        String contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
        String paymentMethodId = "paymentMethodId_example"; // String | ID of the payment method to be deleted.
        try {
            apiInstance.deletePaymentMethod(contactId, paymentMethodId);
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodsApi#deletePaymentMethod");
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
| **contactId** | **String**| ID of the contact to which the payment method belongs. | |
| **paymentMethodId** | **String**| ID of the payment method to be deleted. | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deletePaymentMethodWithHttpInfo

> ApiResponse<Void> deletePaymentMethod deletePaymentMethodWithHttpInfo(contactId, paymentMethodId)

Delete a Contact Payment Method

Deletes the specified payment method

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        PaymentMethodsApi apiInstance = new PaymentMethodsApi(defaultClient);
        String contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
        String paymentMethodId = "paymentMethodId_example"; // String | ID of the payment method to be deleted.
        try {
            ApiResponse<Void> response = apiInstance.deletePaymentMethodWithHttpInfo(contactId, paymentMethodId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodsApi#deletePaymentMethod");
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
| **contactId** | **String**| ID of the contact to which the payment method belongs. | |
| **paymentMethodId** | **String**| ID of the payment method to be deleted. | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listPaymentMethods

> ListPaymentMethodsResponse listPaymentMethods(filter, orderBy, pageSize, pageToken)

List of Payment Methods

Retrieves a list of Payment Methods

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        PaymentMethodsApi apiInstance = new PaymentMethodsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `payment_method_id` - (String) `credit_card_id` - (String) `contact_id` - (String) `merchant_account_id` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=payment_method_id%3D%3D123` - `filter=contact_id%3D%3D123%3Bmerchant_account_id%3D%3D567` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `payment_method_id` - `created_time` - `contact_id` - `merchant_account_id`  One of the following directions: - `desc` - `asc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListPaymentMethodsResponse result = apiInstance.listPaymentMethods(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodsApi#listPaymentMethods");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;payment_method_id&#x60; - (String) &#x60;credit_card_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;payment_method_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bmerchant_account_id%3D%3D567&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;payment_method_id&#x60; - &#x60;created_time&#x60; - &#x60;contact_id&#x60; - &#x60;merchant_account_id&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
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

## listPaymentMethodsWithHttpInfo

> ApiResponse<ListPaymentMethodsResponse> listPaymentMethods listPaymentMethodsWithHttpInfo(filter, orderBy, pageSize, pageToken)

List of Payment Methods

Retrieves a list of Payment Methods

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        PaymentMethodsApi apiInstance = new PaymentMethodsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `payment_method_id` - (String) `credit_card_id` - (String) `contact_id` - (String) `merchant_account_id` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=payment_method_id%3D%3D123` - `filter=contact_id%3D%3D123%3Bmerchant_account_id%3D%3D567` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `payment_method_id` - `created_time` - `contact_id` - `merchant_account_id`  One of the following directions: - `desc` - `asc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListPaymentMethodsResponse> response = apiInstance.listPaymentMethodsWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodsApi#listPaymentMethods");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;payment_method_id&#x60; - (String) &#x60;credit_card_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;payment_method_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bmerchant_account_id%3D%3D567&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;payment_method_id&#x60; - &#x60;created_time&#x60; - &#x60;contact_id&#x60; - &#x60;merchant_account_id&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
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


## listPaymentMethods_0

> ListContactPaymentMethodsResponse listPaymentMethods_0(contactId, filter, orderBy, pageSize, pageToken)

List of Contact Payment Methods

Retrieves a list of Contact Payment Methods

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        PaymentMethodsApi apiInstance = new PaymentMethodsApi(defaultClient);
        String contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `merchant_account_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=merchant_account_id%3D%3D123`  
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `created_time`  One of the following directions: - `desc` - `asc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListContactPaymentMethodsResponse result = apiInstance.listPaymentMethods_0(contactId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodsApi#listPaymentMethods_0");
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
| **contactId** | **String**| ID of the contact to which the payment method belongs. | |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;   | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListContactPaymentMethodsResponse**](ListContactPaymentMethodsResponse.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
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

## listPaymentMethods_0WithHttpInfo

> ApiResponse<ListContactPaymentMethodsResponse> listPaymentMethods_0 listPaymentMethods_0WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken)

List of Contact Payment Methods

Retrieves a list of Contact Payment Methods

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        PaymentMethodsApi apiInstance = new PaymentMethodsApi(defaultClient);
        String contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `merchant_account_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=merchant_account_id%3D%3D123`  
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `created_time`  One of the following directions: - `desc` - `asc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListContactPaymentMethodsResponse> response = apiInstance.listPaymentMethods_0WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodsApi#listPaymentMethods_0");
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
| **contactId** | **String**| ID of the contact to which the payment method belongs. | |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;   | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListContactPaymentMethodsResponse**](ListContactPaymentMethodsResponse.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
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

