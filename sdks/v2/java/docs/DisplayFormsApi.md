# DisplayFormsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDisplayForm**](DisplayFormsApi.md#getDisplayForm) | **GET** /v2/pipelines/{id}/form | Retrieves a specific display form by a pipeline ID. |
| [**getDisplayFormWithHttpInfo**](DisplayFormsApi.md#getDisplayFormWithHttpInfo) | **GET** /v2/pipelines/{id}/form | Retrieves a specific display form by a pipeline ID. |
| [**updateDisplayForm**](DisplayFormsApi.md#updateDisplayForm) | **PATCH** /v2/pipelines/{id}/form | Updates a display form |
| [**updateDisplayFormWithHttpInfo**](DisplayFormsApi.md#updateDisplayFormWithHttpInfo) | **PATCH** /v2/pipelines/{id}/form | Updates a display form |



## getDisplayForm

> DisplayForm getDisplayForm(id)

Retrieves a specific display form by a pipeline ID.

Retrieves a specific display form by a pipeline ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DisplayFormsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DisplayFormsApi apiInstance = new DisplayFormsApi(defaultClient);
        String id = "id_example"; // String | the ID of the pipeline containing the form
        try {
            DisplayForm result = apiInstance.getDisplayForm(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisplayFormsApi#getDisplayForm");
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
| **id** | **String**| the ID of the pipeline containing the form | |

### Return type

[**DisplayForm**](DisplayForm.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the requested Deal |  -  |

## getDisplayFormWithHttpInfo

> ApiResponse<DisplayForm> getDisplayForm getDisplayFormWithHttpInfo(id)

Retrieves a specific display form by a pipeline ID.

Retrieves a specific display form by a pipeline ID.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DisplayFormsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DisplayFormsApi apiInstance = new DisplayFormsApi(defaultClient);
        String id = "id_example"; // String | the ID of the pipeline containing the form
        try {
            ApiResponse<DisplayForm> response = apiInstance.getDisplayFormWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DisplayFormsApi#getDisplayForm");
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
| **id** | **String**| the ID of the pipeline containing the form | |

### Return type

ApiResponse<[**DisplayForm**](DisplayForm.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the requested Deal |  -  |


## updateDisplayForm

> DisplayForm updateDisplayForm(id, updateDisplayFormRequest)

Updates a display form

Updates a display form

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DisplayFormsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DisplayFormsApi apiInstance = new DisplayFormsApi(defaultClient);
        String id = "id_example"; // String | the ID of the pipeline containing the form
        UpdateDisplayFormRequest updateDisplayFormRequest = new UpdateDisplayFormRequest(); // UpdateDisplayFormRequest | the request body containing updated display form details
        try {
            DisplayForm result = apiInstance.updateDisplayForm(id, updateDisplayFormRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DisplayFormsApi#updateDisplayForm");
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
| **id** | **String**| the ID of the pipeline containing the form | |
| **updateDisplayFormRequest** | [**UpdateDisplayFormRequest**](UpdateDisplayFormRequest.md)| the request body containing updated display form details | |

### Return type

[**DisplayForm**](DisplayForm.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated DisplayForm |  -  |

## updateDisplayFormWithHttpInfo

> ApiResponse<DisplayForm> updateDisplayForm updateDisplayFormWithHttpInfo(id, updateDisplayFormRequest)

Updates a display form

Updates a display form

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.DisplayFormsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        DisplayFormsApi apiInstance = new DisplayFormsApi(defaultClient);
        String id = "id_example"; // String | the ID of the pipeline containing the form
        UpdateDisplayFormRequest updateDisplayFormRequest = new UpdateDisplayFormRequest(); // UpdateDisplayFormRequest | the request body containing updated display form details
        try {
            ApiResponse<DisplayForm> response = apiInstance.updateDisplayFormWithHttpInfo(id, updateDisplayFormRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DisplayFormsApi#updateDisplayForm");
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
| **id** | **String**| the ID of the pipeline containing the form | |
| **updateDisplayFormRequest** | [**UpdateDisplayFormRequest**](UpdateDisplayFormRequest.md)| the request body containing updated display form details | |

### Return type

ApiResponse<[**DisplayForm**](DisplayForm.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated DisplayForm |  -  |

