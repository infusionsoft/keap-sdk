# PaymentMethodsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deactivatePaymentMethod**](PaymentMethodsApi.md#deactivatePaymentMethod) | **POST** /v2/contacts/{contact_id}/paymentMethods/{payment_method_id}:deactivate | Deactivate a Payment Method |
| [**deactivatePaymentMethodWithHttpInfo**](PaymentMethodsApi.md#deactivatePaymentMethodWithHttpInfo) | **POST** /v2/contacts/{contact_id}/paymentMethods/{payment_method_id}:deactivate | Deactivate a Payment Method |
| [**deletePaymentMethod**](PaymentMethodsApi.md#deletePaymentMethod) | **DELETE** /v2/contacts/{contact_id}/paymentMethods/{payment_method_id} | Delete a Payment Method |
| [**deletePaymentMethodWithHttpInfo**](PaymentMethodsApi.md#deletePaymentMethodWithHttpInfo) | **DELETE** /v2/contacts/{contact_id}/paymentMethods/{payment_method_id} | Delete a Payment Method |
| [**listPaymentMethods**](PaymentMethodsApi.md#listPaymentMethods) | **GET** /v2/contacts/{contact_id}/paymentMethods | List of Payment Methods |
| [**listPaymentMethodsWithHttpInfo**](PaymentMethodsApi.md#listPaymentMethodsWithHttpInfo) | **GET** /v2/contacts/{contact_id}/paymentMethods | List of Payment Methods |



## deactivatePaymentMethod

> void deactivatePaymentMethod(contactId, paymentMethodId)

Deactivate a Payment Method

Deactivate the specified payment method

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## deactivatePaymentMethodWithHttpInfo

> ApiResponse<Void> deactivatePaymentMethod deactivatePaymentMethodWithHttpInfo(contactId, paymentMethodId)

Deactivate a Payment Method

Deactivate the specified payment method

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |


## deletePaymentMethod

> void deletePaymentMethod(contactId, paymentMethodId)

Delete a Payment Method

Deletes the specified payment method

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## deletePaymentMethodWithHttpInfo

> ApiResponse<Void> deletePaymentMethod deletePaymentMethodWithHttpInfo(contactId, paymentMethodId)

Delete a Payment Method

Deletes the specified payment method

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |


## listPaymentMethods

> ListPaymentMethodsResponse listPaymentMethods(contactId, filter, orderBy, pageSize, pageToken)

List of Payment Methods

Retrieves a list of Payment Methods

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PaymentMethodsApi apiInstance = new PaymentMethodsApi(defaultClient);
        String contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `merchant_account_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=merchant_account_id%3D%3D123`  You can filter across all contacts by using the `-` for the `contact_id` field. 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `date_created`  One of the following directions: - `desc` - `asc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListPaymentMethodsResponse result = apiInstance.listPaymentMethods(contactId, filter, orderBy, pageSize, pageToken);
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
| **contactId** | **String**| ID of the contact to which the payment method belongs. | |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;  You can filter across all contacts by using the &#x60;-&#x60; for the &#x60;contact_id&#x60; field.  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)


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

## listPaymentMethodsWithHttpInfo

> ApiResponse<ListPaymentMethodsResponse> listPaymentMethods listPaymentMethodsWithHttpInfo(contactId, filter, orderBy, pageSize, pageToken)

List of Payment Methods

Retrieves a list of Payment Methods

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.PaymentMethodsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PaymentMethodsApi apiInstance = new PaymentMethodsApi(defaultClient);
        String contactId = "contactId_example"; // String | ID of the contact to which the payment method belongs.
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `merchant_account_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=merchant_account_id%3D%3D123`  You can filter across all contacts by using the `-` for the `contact_id` field. 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `date_created`  One of the following directions: - `desc` - `asc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListPaymentMethodsResponse> response = apiInstance.listPaymentMethodsWithHttpInfo(contactId, filter, orderBy, pageSize, pageToken);
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
| **contactId** | **String**| ID of the contact to which the payment method belongs. | |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;  You can filter across all contacts by using the &#x60;-&#x60; for the &#x60;contact_id&#x60; field.  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListPaymentMethodsResponse**](ListPaymentMethodsResponse.md)>


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

