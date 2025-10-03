# SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelSubscription**](SubscriptionsApi.md#cancelSubscription) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription |
| [**cancelSubscriptionWithHttpInfo**](SubscriptionsApi.md#cancelSubscriptionWithHttpInfo) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription |
| [**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /v2/subscriptions | Create Subscription |
| [**createSubscriptionWithHttpInfo**](SubscriptionsApi.md#createSubscriptionWithHttpInfo) | **POST** /v2/subscriptions | Create Subscription |
| [**createSubscriptionCustomField**](SubscriptionsApi.md#createSubscriptionCustomField) | **POST** /v2/subscriptions/model/customFields | Create a Subscription Custom Field |
| [**createSubscriptionCustomFieldWithHttpInfo**](SubscriptionsApi.md#createSubscriptionCustomFieldWithHttpInfo) | **POST** /v2/subscriptions/model/customFields | Create a Subscription Custom Field |
| [**deleteSubscriptionCustomField**](SubscriptionsApi.md#deleteSubscriptionCustomField) | **DELETE** /v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field |
| [**deleteSubscriptionCustomFieldWithHttpInfo**](SubscriptionsApi.md#deleteSubscriptionCustomFieldWithHttpInfo) | **DELETE** /v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field |
| [**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /v2/subscriptions/{subscription_id} | Retrieve a Subscription |
| [**getSubscriptionWithHttpInfo**](SubscriptionsApi.md#getSubscriptionWithHttpInfo) | **GET** /v2/subscriptions/{subscription_id} | Retrieve a Subscription |
| [**listSubscriptions**](SubscriptionsApi.md#listSubscriptions) | **GET** /v2/subscriptions | List Subscriptions |
| [**listSubscriptionsWithHttpInfo**](SubscriptionsApi.md#listSubscriptionsWithHttpInfo) | **GET** /v2/subscriptions | List Subscriptions |
| [**retrieveSubscriptionCustomFieldModel**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModel) | **GET** /v2/subscriptions/model | Retrieve Subscription Custom Field Model |
| [**retrieveSubscriptionCustomFieldModelWithHttpInfo**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModelWithHttpInfo) | **GET** /v2/subscriptions/model | Retrieve Subscription Custom Field Model |
| [**updateSubscription**](SubscriptionsApi.md#updateSubscription) | **PATCH** /v2/subscriptions/{subscription_id} | Update a Subscription |
| [**updateSubscriptionWithHttpInfo**](SubscriptionsApi.md#updateSubscriptionWithHttpInfo) | **PATCH** /v2/subscriptions/{subscription_id} | Update a Subscription |
| [**updateSubscriptionCustomField**](SubscriptionsApi.md#updateSubscriptionCustomField) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field |
| [**updateSubscriptionCustomFieldWithHttpInfo**](SubscriptionsApi.md#updateSubscriptionCustomFieldWithHttpInfo) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field |



## cancelSubscription

> void cancelSubscription(subscriptionId, cancelSubscriptionRequest)

Cancel Subscription

Cancels the specified subscription

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String subscriptionId = "subscriptionId_example"; // String | subscription_id
        CancelSubscriptionRequest cancelSubscriptionRequest = new CancelSubscriptionRequest(); // CancelSubscriptionRequest | request
        try {
            apiInstance.cancelSubscription(subscriptionId, cancelSubscriptionRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#cancelSubscription");
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
| **subscriptionId** | **String**| subscription_id | |
| **cancelSubscriptionRequest** | [**CancelSubscriptionRequest**](CancelSubscriptionRequest.md)| request | |

### Return type


null (empty response body)

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
| **500** | Internal Server Error |  -  |

## cancelSubscriptionWithHttpInfo

> ApiResponse<Void> cancelSubscription cancelSubscriptionWithHttpInfo(subscriptionId, cancelSubscriptionRequest)

Cancel Subscription

Cancels the specified subscription

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String subscriptionId = "subscriptionId_example"; // String | subscription_id
        CancelSubscriptionRequest cancelSubscriptionRequest = new CancelSubscriptionRequest(); // CancelSubscriptionRequest | request
        try {
            ApiResponse<Void> response = apiInstance.cancelSubscriptionWithHttpInfo(subscriptionId, cancelSubscriptionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#cancelSubscription");
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
| **subscriptionId** | **String**| subscription_id | |
| **cancelSubscriptionRequest** | [**CancelSubscriptionRequest**](CancelSubscriptionRequest.md)| request | |

### Return type


ApiResponse<Void>

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
| **500** | Internal Server Error |  -  |


## createSubscription

> Subscription createSubscription(createSubscriptionRequest)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        CreateSubscriptionRequest createSubscriptionRequest = new CreateSubscriptionRequest(); // CreateSubscriptionRequest | request
        try {
            Subscription result = apiInstance.createSubscription(createSubscriptionRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#createSubscription");
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
| **createSubscriptionRequest** | [**CreateSubscriptionRequest**](CreateSubscriptionRequest.md)| request | |

### Return type

[**Subscription**](Subscription.md)


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

## createSubscriptionWithHttpInfo

> ApiResponse<Subscription> createSubscription createSubscriptionWithHttpInfo(createSubscriptionRequest)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        CreateSubscriptionRequest createSubscriptionRequest = new CreateSubscriptionRequest(); // CreateSubscriptionRequest | request
        try {
            ApiResponse<Subscription> response = apiInstance.createSubscriptionWithHttpInfo(createSubscriptionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#createSubscription");
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
| **createSubscriptionRequest** | [**CreateSubscriptionRequest**](CreateSubscriptionRequest.md)| request | |

### Return type

ApiResponse<[**Subscription**](Subscription.md)>


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


## createSubscriptionCustomField

> CustomFieldMetaData createSubscriptionCustomField(createCustomFieldRequest)

Create a Subscription Custom Field

Creates a custom field of the specified type and options to the Subscription object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            CustomFieldMetaData result = apiInstance.createSubscriptionCustomField(createCustomFieldRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#createSubscriptionCustomField");
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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)


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

## createSubscriptionCustomFieldWithHttpInfo

> ApiResponse<CustomFieldMetaData> createSubscriptionCustomField createSubscriptionCustomFieldWithHttpInfo(createCustomFieldRequest)

Create a Subscription Custom Field

Creates a custom field of the specified type and options to the Subscription object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.createSubscriptionCustomFieldWithHttpInfo(createCustomFieldRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#createSubscriptionCustomField");
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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


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


## deleteSubscriptionCustomField

> void deleteSubscriptionCustomField(customFieldId)

Delete a Subscription Custom Field

Deletes a custom field from the Subscription object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        try {
            apiInstance.deleteSubscriptionCustomField(customFieldId);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#deleteSubscriptionCustomField");
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
| **customFieldId** | **String**| custom_field_id | |

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

## deleteSubscriptionCustomFieldWithHttpInfo

> ApiResponse<Void> deleteSubscriptionCustomField deleteSubscriptionCustomFieldWithHttpInfo(customFieldId)

Delete a Subscription Custom Field

Deletes a custom field from the Subscription object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        try {
            ApiResponse<Void> response = apiInstance.deleteSubscriptionCustomFieldWithHttpInfo(customFieldId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#deleteSubscriptionCustomField");
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
| **customFieldId** | **String**| custom_field_id | |

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


## getSubscription

> Subscription getSubscription(subscriptionId)

Retrieve a Subscription

Retrieves a single subscription

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String subscriptionId = "subscriptionId_example"; // String | subscription_id
        try {
            Subscription result = apiInstance.getSubscription(subscriptionId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#getSubscription");
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
| **subscriptionId** | **String**| subscription_id | |

### Return type

[**Subscription**](Subscription.md)


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

## getSubscriptionWithHttpInfo

> ApiResponse<Subscription> getSubscription getSubscriptionWithHttpInfo(subscriptionId)

Retrieve a Subscription

Retrieves a single subscription

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String subscriptionId = "subscriptionId_example"; // String | subscription_id
        try {
            ApiResponse<Subscription> response = apiInstance.getSubscriptionWithHttpInfo(subscriptionId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#getSubscription");
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
| **subscriptionId** | **String**| subscription_id | |

### Return type

ApiResponse<[**Subscription**](Subscription.md)>


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


## listSubscriptions

> ListSubscriptionsResponse listSubscriptions(filter, orderBy, pageSize, pageToken)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `contact_id` - (String) `subscription_plan_id` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `contact_id` - `subscription_plan_id`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListSubscriptionsResponse result = apiInstance.listSubscriptions(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#listSubscriptions");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListSubscriptionsResponse**](ListSubscriptionsResponse.md)


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

## listSubscriptionsWithHttpInfo

> ApiResponse<ListSubscriptionsResponse> listSubscriptions listSubscriptionsWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `contact_id` - (String) `subscription_plan_id` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `contact_id` - `subscription_plan_id`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListSubscriptionsResponse> response = apiInstance.listSubscriptionsWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#listSubscriptions");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListSubscriptionsResponse**](ListSubscriptionsResponse.md)>


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


## retrieveSubscriptionCustomFieldModel

> ObjectModel retrieveSubscriptionCustomFieldModel()

Retrieve Subscription Custom Field Model

Get the custom fields for the Subscription object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        try {
            ObjectModel result = apiInstance.retrieveSubscriptionCustomFieldModel();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#retrieveSubscriptionCustomFieldModel");
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

[**ObjectModel**](ObjectModel.md)


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

## retrieveSubscriptionCustomFieldModelWithHttpInfo

> ApiResponse<ObjectModel> retrieveSubscriptionCustomFieldModel retrieveSubscriptionCustomFieldModelWithHttpInfo()

Retrieve Subscription Custom Field Model

Get the custom fields for the Subscription object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        try {
            ApiResponse<ObjectModel> response = apiInstance.retrieveSubscriptionCustomFieldModelWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#retrieveSubscriptionCustomFieldModel");
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

ApiResponse<[**ObjectModel**](ObjectModel.md)>


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


## updateSubscription

> Subscription updateSubscription(subscriptionId, updateSubscriptionRequest, updateMask)

Update a Subscription

Updates a Subscription

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String subscriptionId = "subscriptionId_example"; // String | subscription_id
        UpdateSubscriptionRequest updateSubscriptionRequest = new UpdateSubscriptionRequest(); // UpdateSubscriptionRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            Subscription result = apiInstance.updateSubscription(subscriptionId, updateSubscriptionRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#updateSubscription");
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
| **subscriptionId** | **String**| subscription_id | |
| **updateSubscriptionRequest** | [**UpdateSubscriptionRequest**](UpdateSubscriptionRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: contact_id, subscription_plan_id, quantity, billing_amount, auto_charge, max_charge_attempts, days_between_retries, active, billing_frequency, billing_cycle, next_bill_date, end_date, payment_method_id, allow_tax, lead_affiliate_id, sale_affiliate_id, shipping_address] |

### Return type

[**Subscription**](Subscription.md)


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

## updateSubscriptionWithHttpInfo

> ApiResponse<Subscription> updateSubscription updateSubscriptionWithHttpInfo(subscriptionId, updateSubscriptionRequest, updateMask)

Update a Subscription

Updates a Subscription

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String subscriptionId = "subscriptionId_example"; // String | subscription_id
        UpdateSubscriptionRequest updateSubscriptionRequest = new UpdateSubscriptionRequest(); // UpdateSubscriptionRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<Subscription> response = apiInstance.updateSubscriptionWithHttpInfo(subscriptionId, updateSubscriptionRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#updateSubscription");
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
| **subscriptionId** | **String**| subscription_id | |
| **updateSubscriptionRequest** | [**UpdateSubscriptionRequest**](UpdateSubscriptionRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: contact_id, subscription_plan_id, quantity, billing_amount, auto_charge, max_charge_attempts, days_between_retries, active, billing_frequency, billing_cycle, next_bill_date, end_date, payment_method_id, allow_tax, lead_affiliate_id, sale_affiliate_id, shipping_address] |

### Return type

ApiResponse<[**Subscription**](Subscription.md)>


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


## updateSubscriptionCustomField

> CustomFieldMetaData updateSubscriptionCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Subscription Custom Field

Updates a custom field of the specified type and options to the Subscription object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CustomFieldMetaData result = apiInstance.updateSubscriptionCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#updateSubscriptionCustomField");
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
| **customFieldId** | **String**| custom_field_id | |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)


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

## updateSubscriptionCustomFieldWithHttpInfo

> ApiResponse<CustomFieldMetaData> updateSubscriptionCustomField updateSubscriptionCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Subscription Custom Field

Updates a custom field of the specified type and options to the Subscription object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.updateSubscriptionCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#updateSubscriptionCustomField");
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
| **customFieldId** | **String**| custom_field_id | |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


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

