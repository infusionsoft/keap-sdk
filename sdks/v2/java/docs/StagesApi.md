# StagesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**countDealsInStage**](StagesApi.md#countDealsInStage) | **GET** /v2/stages/{id}/dealCount | Counts the number of deals in a specific stage. |
| [**countDealsInStageWithHttpInfo**](StagesApi.md#countDealsInStageWithHttpInfo) | **GET** /v2/stages/{id}/dealCount | Counts the number of deals in a specific stage. |
| [**create1**](StagesApi.md#create1) | **POST** /v2/stages | Creates a new entity. |
| [**create1WithHttpInfo**](StagesApi.md#create1WithHttpInfo) | **POST** /v2/stages | Creates a new entity. |
| [**delete1**](StagesApi.md#delete1) | **DELETE** /v2/stages/{id} | Deletes a stage by its identifier for a given tenant. |
| [**delete1WithHttpInfo**](StagesApi.md#delete1WithHttpInfo) | **DELETE** /v2/stages/{id} | Deletes a stage by its identifier for a given tenant. |
| [**get1**](StagesApi.md#get1) | **GET** /v2/stages/{id} | Retrieves an entity by its identifier. |
| [**get1WithHttpInfo**](StagesApi.md#get1WithHttpInfo) | **GET** /v2/stages/{id} | Retrieves an entity by its identifier. |
| [**list1**](StagesApi.md#list1) | **GET** /v2/stages | Lists entities based on the provided ListCommand. |
| [**list1WithHttpInfo**](StagesApi.md#list1WithHttpInfo) | **GET** /v2/stages | Lists entities based on the provided ListCommand. |
| [**listStageDeals**](StagesApi.md#listStageDeals) | **GET** /v2/stages/{id}/deals | Retrieves a list of deals for a specific stage. |
| [**listStageDealsWithHttpInfo**](StagesApi.md#listStageDealsWithHttpInfo) | **GET** /v2/stages/{id}/deals | Retrieves a list of deals for a specific stage. |
| [**update1**](StagesApi.md#update1) | **PATCH** /v2/stages/{id} | Updates an existing entity. |
| [**update1WithHttpInfo**](StagesApi.md#update1WithHttpInfo) | **PATCH** /v2/stages/{id} | Updates an existing entity. |



## countDealsInStage

> Long countDealsInStage(id)

Counts the number of deals in a specific stage.

Counts the number of deals in a specific stage.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the stage identifier
        try {
            Long result = apiInstance.countDealsInStage(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#countDealsInStage");
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
| **id** | **String**| the stage identifier | |

### Return type

**Long**


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the count of deals in the stage |  -  |

## countDealsInStageWithHttpInfo

> ApiResponse<Long> countDealsInStage countDealsInStageWithHttpInfo(id)

Counts the number of deals in a specific stage.

Counts the number of deals in a specific stage.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the stage identifier
        try {
            ApiResponse<Long> response = apiInstance.countDealsInStageWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#countDealsInStage");
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
| **id** | **String**| the stage identifier | |

### Return type

ApiResponse<**Long**>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the count of deals in the stage |  -  |


## create1

> Stage create1(createStageRequest)

Creates a new entity.

Creates a new entity.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        CreateStageRequest createStageRequest = new CreateStageRequest(); // CreateStageRequest | the create request
        try {
            Stage result = apiInstance.create1(createStageRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#create1");
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
| **createStageRequest** | [**CreateStageRequest**](CreateStageRequest.md)| the create request | |

### Return type

[**Stage**](Stage.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The create_1d entity |  -  |

## create1WithHttpInfo

> ApiResponse<Stage> create1 create1WithHttpInfo(createStageRequest)

Creates a new entity.

Creates a new entity.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        CreateStageRequest createStageRequest = new CreateStageRequest(); // CreateStageRequest | the create request
        try {
            ApiResponse<Stage> response = apiInstance.create1WithHttpInfo(createStageRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#create1");
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
| **createStageRequest** | [**CreateStageRequest**](CreateStageRequest.md)| the create request | |

### Return type

ApiResponse<[**Stage**](Stage.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The create_1d entity |  -  |


## delete1

> void delete1(id, newStageId)

Deletes a stage by its identifier for a given tenant.

Deletes a stage by its identifier for a given tenant.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the stage identifier
        String newStageId = "newStageId_example"; // String | the new stage identifier, can be null
        try {
            apiInstance.delete1(id, newStageId);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#delete1");
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
| **id** | **String**| the stage identifier | |
| **newStageId** | **String**| the new stage identifier, can be null | [optional] |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | A response indicating no content |  -  |

## delete1WithHttpInfo

> ApiResponse<Void> delete1 delete1WithHttpInfo(id, newStageId)

Deletes a stage by its identifier for a given tenant.

Deletes a stage by its identifier for a given tenant.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the stage identifier
        String newStageId = "newStageId_example"; // String | the new stage identifier, can be null
        try {
            ApiResponse<Void> response = apiInstance.delete1WithHttpInfo(id, newStageId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#delete1");
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
| **id** | **String**| the stage identifier | |
| **newStageId** | **String**| the new stage identifier, can be null | [optional] |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | A response indicating no content |  -  |


## get1

> Stage get1(id)

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        try {
            Stage result = apiInstance.get1(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#get1");
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
| **id** | **String**| the entity identifier | |

### Return type

[**Stage**](Stage.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The retrieved entity |  -  |

## get1WithHttpInfo

> ApiResponse<Stage> get1 get1WithHttpInfo(id)

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        try {
            ApiResponse<Stage> response = apiInstance.get1WithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#get1");
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
| **id** | **String**| the entity identifier | |

### Return type

ApiResponse<[**Stage**](Stage.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The retrieved entity |  -  |


## list1

> StageListResponse list1(filter, pageToken, orderBy, pageSize)

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            StageListResponse result = apiInstance.list1(filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#list1");
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

[**StageListResponse**](StageListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a response containing the list_1 of entities |  -  |

## list1WithHttpInfo

> ApiResponse<StageListResponse> list1 list1WithHttpInfo(filter, pageToken, orderBy, pageSize)

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<StageListResponse> response = apiInstance.list1WithHttpInfo(filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#list1");
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

ApiResponse<[**StageListResponse**](StageListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a response containing the list_1 of entities |  -  |


## listStageDeals

> StageDealListResponse listStageDeals(id, filter, pageToken, orderBy, pageSize)

Retrieves a list of deals for a specific stage.

Retrieves a list of deals for a specific stage.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the stage identifier
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            StageDealListResponse result = apiInstance.listStageDeals(id, filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#listStageDeals");
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
| **id** | **String**| the stage identifier | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

[**StageDealListResponse**](StageDealListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of deals and the next page token |  -  |

## listStageDealsWithHttpInfo

> ApiResponse<StageDealListResponse> listStageDeals listStageDealsWithHttpInfo(id, filter, pageToken, orderBy, pageSize)

Retrieves a list of deals for a specific stage.

Retrieves a list of deals for a specific stage.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the stage identifier
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<StageDealListResponse> response = apiInstance.listStageDealsWithHttpInfo(id, filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#listStageDeals");
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
| **id** | **String**| the stage identifier | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

ApiResponse<[**StageDealListResponse**](StageDealListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of deals and the next page token |  -  |


## update1

> Stage update1(id, updateMask, updateStageRequest)

Updates an existing entity.

Updates an existing entity.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        List<String> updateMask = Arrays.asList(); // List<String> | the fields to update
        UpdateStageRequest updateStageRequest = new UpdateStageRequest(); // UpdateStageRequest | the update request
        try {
            Stage result = apiInstance.update1(id, updateMask, updateStageRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#update1");
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
| **id** | **String**| the entity identifier | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| the fields to update | |
| **updateStageRequest** | [**UpdateStageRequest**](UpdateStageRequest.md)| the update request | |

### Return type

[**Stage**](Stage.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The update_1d entity |  -  |

## update1WithHttpInfo

> ApiResponse<Stage> update1 update1WithHttpInfo(id, updateMask, updateStageRequest)

Updates an existing entity.

Updates an existing entity.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        List<String> updateMask = Arrays.asList(); // List<String> | the fields to update
        UpdateStageRequest updateStageRequest = new UpdateStageRequest(); // UpdateStageRequest | the update request
        try {
            ApiResponse<Stage> response = apiInstance.update1WithHttpInfo(id, updateMask, updateStageRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#update1");
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
| **id** | **String**| the entity identifier | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| the fields to update | |
| **updateStageRequest** | [**UpdateStageRequest**](UpdateStageRequest.md)| the update request | |

### Return type

ApiResponse<[**Stage**](Stage.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The update_1d entity |  -  |

