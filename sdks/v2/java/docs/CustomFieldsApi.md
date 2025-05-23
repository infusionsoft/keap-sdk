# CustomFieldsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCustomFields**](CustomFieldsApi.md#getCustomFields) | **GET** /v2/customFields | Retrieves a list of custom fields in a tenant. |
| [**getCustomFieldsWithHttpInfo**](CustomFieldsApi.md#getCustomFieldsWithHttpInfo) | **GET** /v2/customFields | Retrieves a list of custom fields in a tenant. |
| [**updateCustomField**](CustomFieldsApi.md#updateCustomField) | **PATCH** /v2/customFields/{custom_field_id} | Updates a custom field |
| [**updateCustomFieldWithHttpInfo**](CustomFieldsApi.md#updateCustomFieldWithHttpInfo) | **PATCH** /v2/customFields/{custom_field_id} | Updates a custom field |



## getCustomFields

> PipelineCustomFields getCustomFields()

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
        try {
            PipelineCustomFields result = apiInstance.getCustomFields();
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

This endpoint does not need any parameter.

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

> ApiResponse<PipelineCustomFields> getCustomFields getCustomFieldsWithHttpInfo()

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
        try {
            ApiResponse<PipelineCustomFields> response = apiInstance.getCustomFieldsWithHttpInfo();
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

This endpoint does not need any parameter.

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

> PipelineCustomField updateCustomField(customFieldId, updateCustomFieldRequest)

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
        String customFieldId = "customFieldId_example"; // String | the identifier of the custom field to update
        UpdateCustomFieldRequest updateCustomFieldRequest = new UpdateCustomFieldRequest(); // UpdateCustomFieldRequest | the request body containing updated custom field details
        try {
            PipelineCustomField result = apiInstance.updateCustomField(customFieldId, updateCustomFieldRequest);
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
| **customFieldId** | **String**| the identifier of the custom field to update | |
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

> ApiResponse<PipelineCustomField> updateCustomField updateCustomFieldWithHttpInfo(customFieldId, updateCustomFieldRequest)

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
        String customFieldId = "customFieldId_example"; // String | the identifier of the custom field to update
        UpdateCustomFieldRequest updateCustomFieldRequest = new UpdateCustomFieldRequest(); // UpdateCustomFieldRequest | the request body containing updated custom field details
        try {
            ApiResponse<PipelineCustomField> response = apiInstance.updateCustomFieldWithHttpInfo(customFieldId, updateCustomFieldRequest);
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
| **customFieldId** | **String**| the identifier of the custom field to update | |
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

