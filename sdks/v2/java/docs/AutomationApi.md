# AutomationApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addContactsToAutomationSequence**](AutomationApi.md#addContactsToAutomationSequence) | **POST** /v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence |
| [**addContactsToAutomationSequenceWithHttpInfo**](AutomationApi.md#addContactsToAutomationSequenceWithHttpInfo) | **POST** /v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence |
| [**bulkAssignmentAutomationsCategories**](AutomationApi.md#bulkAssignmentAutomationsCategories) | **POST** /v2/automations/categories/batchAssign | Bulk update for Automations Categories |
| [**bulkAssignmentAutomationsCategoriesWithHttpInfo**](AutomationApi.md#bulkAssignmentAutomationsCategoriesWithHttpInfo) | **POST** /v2/automations/categories/batchAssign | Bulk update for Automations Categories |
| [**deleteAutomation**](AutomationApi.md#deleteAutomation) | **DELETE** /v2/automations | Delete an Automation |
| [**deleteAutomationWithHttpInfo**](AutomationApi.md#deleteAutomationWithHttpInfo) | **DELETE** /v2/automations | Delete an Automation |
| [**getAutomation**](AutomationApi.md#getAutomation) | **GET** /v2/automations/{automation_id} | Retrieve an Automation |
| [**getAutomationWithHttpInfo**](AutomationApi.md#getAutomationWithHttpInfo) | **GET** /v2/automations/{automation_id} | Retrieve an Automation |
| [**listAllAutomationIds**](AutomationApi.md#listAllAutomationIds) | **GET** /v2/automations/ids | List Automations Ids |
| [**listAllAutomationIdsWithHttpInfo**](AutomationApi.md#listAllAutomationIdsWithHttpInfo) | **GET** /v2/automations/ids | List Automations Ids |
| [**listAutomations**](AutomationApi.md#listAutomations) | **GET** /v2/automations | List Automations |
| [**listAutomationsWithHttpInfo**](AutomationApi.md#listAutomationsWithHttpInfo) | **GET** /v2/automations | List Automations |



## addContactsToAutomationSequence

> AddToAutomationSequenceResponse addContactsToAutomationSequence(automationId, sequenceId, addToAutomationSequenceRequest)

Add Contacts to an Automation Sequence

Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        String automationId = "automationId_example"; // String | automation_id
        String sequenceId = "sequenceId_example"; // String | sequence_id
        AddToAutomationSequenceRequest addToAutomationSequenceRequest = new AddToAutomationSequenceRequest(); // AddToAutomationSequenceRequest | addToAutomationSequenceRequest
        try {
            AddToAutomationSequenceResponse result = apiInstance.addContactsToAutomationSequence(automationId, sequenceId, addToAutomationSequenceRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#addContactsToAutomationSequence");
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
| **automationId** | **String**| automation_id | |
| **sequenceId** | **String**| sequence_id | |
| **addToAutomationSequenceRequest** | [**AddToAutomationSequenceRequest**](AddToAutomationSequenceRequest.md)| addToAutomationSequenceRequest | |

### Return type

[**AddToAutomationSequenceResponse**](AddToAutomationSequenceResponse.md)


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

## addContactsToAutomationSequenceWithHttpInfo

> ApiResponse<AddToAutomationSequenceResponse> addContactsToAutomationSequence addContactsToAutomationSequenceWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest)

Add Contacts to an Automation Sequence

Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        String automationId = "automationId_example"; // String | automation_id
        String sequenceId = "sequenceId_example"; // String | sequence_id
        AddToAutomationSequenceRequest addToAutomationSequenceRequest = new AddToAutomationSequenceRequest(); // AddToAutomationSequenceRequest | addToAutomationSequenceRequest
        try {
            ApiResponse<AddToAutomationSequenceResponse> response = apiInstance.addContactsToAutomationSequenceWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#addContactsToAutomationSequence");
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
| **automationId** | **String**| automation_id | |
| **sequenceId** | **String**| sequence_id | |
| **addToAutomationSequenceRequest** | [**AddToAutomationSequenceRequest**](AddToAutomationSequenceRequest.md)| addToAutomationSequenceRequest | |

### Return type

ApiResponse<[**AddToAutomationSequenceResponse**](AddToAutomationSequenceResponse.md)>


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


## bulkAssignmentAutomationsCategories

> void bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest)

Bulk update for Automations Categories

Bulk updates the categories of one or more automations

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        AssignAutomationCategoryRequest assignAutomationCategoryRequest = new AssignAutomationCategoryRequest(); // AssignAutomationCategoryRequest | assignAutomationCategoryRequest
        try {
            apiInstance.bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#bulkAssignmentAutomationsCategories");
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
| **assignAutomationCategoryRequest** | [**AssignAutomationCategoryRequest**](AssignAutomationCategoryRequest.md)| assignAutomationCategoryRequest | |

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

## bulkAssignmentAutomationsCategoriesWithHttpInfo

> ApiResponse<Void> bulkAssignmentAutomationsCategories bulkAssignmentAutomationsCategoriesWithHttpInfo(assignAutomationCategoryRequest)

Bulk update for Automations Categories

Bulk updates the categories of one or more automations

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        AssignAutomationCategoryRequest assignAutomationCategoryRequest = new AssignAutomationCategoryRequest(); // AssignAutomationCategoryRequest | assignAutomationCategoryRequest
        try {
            ApiResponse<Void> response = apiInstance.bulkAssignmentAutomationsCategoriesWithHttpInfo(assignAutomationCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#bulkAssignmentAutomationsCategories");
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
| **assignAutomationCategoryRequest** | [**AssignAutomationCategoryRequest**](AssignAutomationCategoryRequest.md)| assignAutomationCategoryRequest | |

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


## deleteAutomation

> void deleteAutomation(automationIds)

Delete an Automation

Deletes a single automation

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        List<Long> automationIds = Arrays.asList(); // List<Long> | automation_ids
        try {
            apiInstance.deleteAutomation(automationIds);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#deleteAutomation");
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
| **automationIds** | [**List&lt;Long&gt;**](Long.md)| automation_ids | |

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

## deleteAutomationWithHttpInfo

> ApiResponse<Void> deleteAutomation deleteAutomationWithHttpInfo(automationIds)

Delete an Automation

Deletes a single automation

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        List<Long> automationIds = Arrays.asList(); // List<Long> | automation_ids
        try {
            ApiResponse<Void> response = apiInstance.deleteAutomationWithHttpInfo(automationIds);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#deleteAutomation");
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
| **automationIds** | [**List&lt;Long&gt;**](Long.md)| automation_ids | |

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


## getAutomation

> Automation getAutomation(automationId)

Retrieve an Automation

Retrieves a single automation

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        String automationId = "automationId_example"; // String | automation_id
        try {
            Automation result = apiInstance.getAutomation(automationId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#getAutomation");
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
| **automationId** | **String**| automation_id | |

### Return type

[**Automation**](Automation.md)


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

## getAutomationWithHttpInfo

> ApiResponse<Automation> getAutomation getAutomationWithHttpInfo(automationId)

Retrieve an Automation

Retrieves a single automation

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        String automationId = "automationId_example"; // String | automation_id
        try {
            ApiResponse<Automation> response = apiInstance.getAutomationWithHttpInfo(automationId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#getAutomation");
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
| **automationId** | **String**| automation_id | |

### Return type

ApiResponse<[**Automation**](Automation.md)>


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


## listAllAutomationIds

> ListAutomationIdsResponse listAllAutomationIds(filter, orderBy, pageSize, pageToken, stats)

List Automations Ids

Retrieves a list of automations IDs

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        Boolean stats = true; // Boolean | 
        try {
            ListAutomationIdsResponse result = apiInstance.listAllAutomationIds(filter, orderBy, pageSize, pageToken, stats);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#listAllAutomationIds");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **stats** | **Boolean**|  | [optional] |

### Return type

[**ListAutomationIdsResponse**](ListAutomationIdsResponse.md)


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

## listAllAutomationIdsWithHttpInfo

> ApiResponse<ListAutomationIdsResponse> listAllAutomationIds listAllAutomationIdsWithHttpInfo(filter, orderBy, pageSize, pageToken, stats)

List Automations Ids

Retrieves a list of automations IDs

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        Boolean stats = true; // Boolean | 
        try {
            ApiResponse<ListAutomationIdsResponse> response = apiInstance.listAllAutomationIdsWithHttpInfo(filter, orderBy, pageSize, pageToken, stats);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#listAllAutomationIds");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **stats** | **Boolean**|  | [optional] |

### Return type

ApiResponse<[**ListAutomationIdsResponse**](ListAutomationIdsResponse.md)>


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


## listAutomations

> ListAutomationResponse listAutomations(filter, orderBy, pageSize, pageToken, stats)

List Automations

Retrieves a list of automations

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        Boolean stats = true; // Boolean | 
        try {
            ListAutomationResponse result = apiInstance.listAutomations(filter, orderBy, pageSize, pageToken, stats);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#listAutomations");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **stats** | **Boolean**|  | [optional] |

### Return type

[**ListAutomationResponse**](ListAutomationResponse.md)


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

## listAutomationsWithHttpInfo

> ApiResponse<ListAutomationResponse> listAutomations listAutomationsWithHttpInfo(filter, orderBy, pageSize, pageToken, stats)

List Automations

Retrieves a list of automations

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AutomationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AutomationApi apiInstance = new AutomationApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.  - `filter=name%3D%3DSpring Automation` - `filter=name%3D%3DTag New Contacts` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        Boolean stats = true; // Boolean | 
        try {
            ApiResponse<ListAutomationResponse> response = apiInstance.listAutomationsWithHttpInfo(filter, orderBy, pageSize, pageToken, stats);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#listAutomations");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **stats** | **Boolean**|  | [optional] |

### Return type

ApiResponse<[**ListAutomationResponse**](ListAutomationResponse.md)>


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

