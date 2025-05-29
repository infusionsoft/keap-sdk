# CustomFieldsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCustomFields**](CustomFieldsApi.md#getCustomFields) | **GET** /v2/customFields | Retrieves a list of custom fields in a tenant. |
| [**getCustomFieldsWithHttpInfo**](CustomFieldsApi.md#getCustomFieldsWithHttpInfo) | **GET** /v2/customFields | Retrieves a list of custom fields in a tenant. |
| [**updateCustomField**](CustomFieldsApi.md#updateCustomField) | **PATCH** /v2/customFields/{id} | Updates a custom field |
| [**updateCustomFieldWithHttpInfo**](CustomFieldsApi.md#updateCustomFieldWithHttpInfo) | **PATCH** /v2/customFields/{id} | Updates a custom field |



## getCustomFields

> PipelineCustomFields getCustomFields(filter, pageToken, orderBy, pageSize)

Retrieves a list of custom fields in a tenant.

Retrieves a list of custom fields in a tenant.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CustomFieldsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CustomFieldsApi apiInstance = new CustomFieldsApi(defaultClient);
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            PipelineCustomFields result = apiInstance.getCustomFields(filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomFieldsApi#getCustomFields");
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
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

[**PipelineCustomFields**](PipelineCustomFields.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a list of PipelineCustomFields |  -  |

## getCustomFieldsWithHttpInfo

> ApiResponse<PipelineCustomFields> getCustomFields getCustomFieldsWithHttpInfo(filter, pageToken, orderBy, pageSize)

Retrieves a list of custom fields in a tenant.

Retrieves a list of custom fields in a tenant.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CustomFieldsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CustomFieldsApi apiInstance = new CustomFieldsApi(defaultClient);
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<PipelineCustomFields> response = apiInstance.getCustomFieldsWithHttpInfo(filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomFieldsApi#getCustomFields");
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
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

ApiResponse<[**PipelineCustomFields**](PipelineCustomFields.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a list of PipelineCustomFields |  -  |


## updateCustomField

> PipelineCustomField updateCustomField(id, updateCustomFieldRequest)

Updates a custom field

Updates a custom field

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CustomFieldsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CustomFieldsApi apiInstance = new CustomFieldsApi(defaultClient);
        String id = "id_example"; // String | the identifier of the custom field to update
        UpdateCustomFieldRequest updateCustomFieldRequest = new UpdateCustomFieldRequest(); // UpdateCustomFieldRequest | the request body containing updated custom field details
        try {
            PipelineCustomField result = apiInstance.updateCustomField(id, updateCustomFieldRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomFieldsApi#updateCustomField");
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
| **id** | **String**| the identifier of the custom field to update | |
| **updateCustomFieldRequest** | [**UpdateCustomFieldRequest**](UpdateCustomFieldRequest.md)| the request body containing updated custom field details | |

### Return type

[**PipelineCustomField**](PipelineCustomField.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated PipelineCustomField |  -  |

## updateCustomFieldWithHttpInfo

> ApiResponse<PipelineCustomField> updateCustomField updateCustomFieldWithHttpInfo(id, updateCustomFieldRequest)

Updates a custom field

Updates a custom field

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CustomFieldsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CustomFieldsApi apiInstance = new CustomFieldsApi(defaultClient);
        String id = "id_example"; // String | the identifier of the custom field to update
        UpdateCustomFieldRequest updateCustomFieldRequest = new UpdateCustomFieldRequest(); // UpdateCustomFieldRequest | the request body containing updated custom field details
        try {
            ApiResponse<PipelineCustomField> response = apiInstance.updateCustomFieldWithHttpInfo(id, updateCustomFieldRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomFieldsApi#updateCustomField");
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
| **id** | **String**| the identifier of the custom field to update | |
| **updateCustomFieldRequest** | [**UpdateCustomFieldRequest**](UpdateCustomFieldRequest.md)| the request body containing updated custom field details | |

### Return type

ApiResponse<[**PipelineCustomField**](PipelineCustomField.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated PipelineCustomField |  -  |

