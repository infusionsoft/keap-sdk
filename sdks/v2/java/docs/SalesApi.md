# SalesApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listPayments**](SalesApi.md#listPayments) | **GET** /rest/v2/sales/payments | List Payments |
| [**listPaymentsWithHttpInfo**](SalesApi.md#listPaymentsWithHttpInfo) | **GET** /rest/v2/sales/payments | List Payments |
| [**listTransactions**](SalesApi.md#listTransactions) | **GET** /rest/v2/sales/transactions | List Transactions |
| [**listTransactionsWithHttpInfo**](SalesApi.md#listTransactionsWithHttpInfo) | **GET** /rest/v2/sales/transactions | List Transactions |
| [**setMerchantGatewayAsDefault**](SalesApi.md#setMerchantGatewayAsDefault) | **POST** /rest/v2/sales/merchants/{id}:setDefault | Set default Merchant Account |
| [**setMerchantGatewayAsDefaultWithHttpInfo**](SalesApi.md#setMerchantGatewayAsDefaultWithHttpInfo) | **POST** /rest/v2/sales/merchants/{id}:setDefault | Set default Merchant Account |



## listPayments

> ListPayments listPayments(filter, pageToken, orderBy, pageSize)

List Payments

Retrieves a list of payments

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SalesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        SalesApi apiInstance = new SalesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `id` - (String) `amount` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `order_id` - (String) `contact_id` - (String) `since_time` - (String) `until_time` - (String) `merchant_account_id` - (String) `merchant_account_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=order_id%3D%3D123%3Bcontact_id%3D%3D567`
        String pageToken = "pageToken_example"; // String | Page token
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `amount` - `payment_time` - `contact_id`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        try {
            ListPayments result = apiInstance.listPayments(filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SalesApi#listPayments");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;amount&#x60; - &#x60;payment_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |

### Return type

[**ListPayments**](ListPayments.md)


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listPaymentsWithHttpInfo

> ApiResponse<ListPayments> listPayments listPaymentsWithHttpInfo(filter, pageToken, orderBy, pageSize)

List Payments

Retrieves a list of payments

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SalesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        SalesApi apiInstance = new SalesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `id` - (String) `amount` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `order_id` - (String) `contact_id` - (String) `since_time` - (String) `until_time` - (String) `merchant_account_id` - (String) `merchant_account_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=order_id%3D%3D123%3Bcontact_id%3D%3D567`
        String pageToken = "pageToken_example"; // String | Page token
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `amount` - `payment_time` - `contact_id`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        try {
            ApiResponse<ListPayments> response = apiInstance.listPaymentsWithHttpInfo(filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SalesApi#listPayments");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;amount&#x60; - &#x60;payment_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |

### Return type

ApiResponse<[**ListPayments**](ListPayments.md)>


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listTransactions

> ListTransactions listTransactions(filter, pageToken, orderBy, pageSize)

List Transactions

Retrieves a list of sales transactions

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SalesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        SalesApi apiInstance = new SalesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `amount` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `order_id` - (String) `contact_id` - (String) `since_time` - (String) `until_time` - (String) `merchant_account_id` - (String) `merchant_account_type` - (String) `status` - (String) `transaction_method` - (String) `is_successful`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=order_id%3D%3D123` - `filter=order_id%3D%3D123%3Bcontact_id%3D%3D567`
        String pageToken = "pageToken_example"; // String | Page token
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `amount` - `transaction_time` - `contact_id`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        try {
            ListTransactions result = apiInstance.listTransactions(filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SalesApi#listTransactions");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60; - (String) &#x60;status&#x60; - (String) &#x60;transaction_method&#x60; - (String) &#x60;is_successful&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;order_id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;amount&#x60; - &#x60;transaction_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |

### Return type

[**ListTransactions**](ListTransactions.md)


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listTransactionsWithHttpInfo

> ApiResponse<ListTransactions> listTransactions listTransactionsWithHttpInfo(filter, pageToken, orderBy, pageSize)

List Transactions

Retrieves a list of sales transactions

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SalesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        SalesApi apiInstance = new SalesApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `amount` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `order_id` - (String) `contact_id` - (String) `since_time` - (String) `until_time` - (String) `merchant_account_id` - (String) `merchant_account_type` - (String) `status` - (String) `transaction_method` - (String) `is_successful`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=order_id%3D%3D123` - `filter=order_id%3D%3D123%3Bcontact_id%3D%3D567`
        String pageToken = "pageToken_example"; // String | Page token
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `amount` - `transaction_time` - `contact_id`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        try {
            ApiResponse<ListTransactions> response = apiInstance.listTransactionsWithHttpInfo(filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SalesApi#listTransactions");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60; - (String) &#x60;status&#x60; - (String) &#x60;transaction_method&#x60; - (String) &#x60;is_successful&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;order_id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;amount&#x60; - &#x60;transaction_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |

### Return type

ApiResponse<[**ListTransactions**](ListTransactions.md)>


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
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SalesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        SalesApi apiInstance = new SalesApi(defaultClient);
        String id = "id_example"; // String | 
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
| **id** | **String**|  | |

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
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SalesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        SalesApi apiInstance = new SalesApi(defaultClient);
        String id = "id_example"; // String | 
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
| **id** | **String**|  | |

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
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

