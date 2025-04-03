# AutomationApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addContactsToAutomationSequenceUsingPOST**](AutomationApi.md#addContactsToAutomationSequenceUsingPOST) | **POST** /v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence |
| [**addContactsToAutomationSequenceUsingPOSTWithHttpInfo**](AutomationApi.md#addContactsToAutomationSequenceUsingPOSTWithHttpInfo) | **POST** /v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence |
| [**deleteAutomationUsingDELETE**](AutomationApi.md#deleteAutomationUsingDELETE) | **DELETE** /v2/automations | Delete an Automation |
| [**deleteAutomationUsingDELETEWithHttpInfo**](AutomationApi.md#deleteAutomationUsingDELETEWithHttpInfo) | **DELETE** /v2/automations | Delete an Automation |
| [**getAutomationUsingGET**](AutomationApi.md#getAutomationUsingGET) | **GET** /v2/automations/{automation_id} | Retrieve an Automation |
| [**getAutomationUsingGETWithHttpInfo**](AutomationApi.md#getAutomationUsingGETWithHttpInfo) | **GET** /v2/automations/{automation_id} | Retrieve an Automation |
| [**listAllAutomationIdsUsingGET**](AutomationApi.md#listAllAutomationIdsUsingGET) | **GET** /v2/automations/ids | List Automations Ids |
| [**listAllAutomationIdsUsingGETWithHttpInfo**](AutomationApi.md#listAllAutomationIdsUsingGETWithHttpInfo) | **GET** /v2/automations/ids | List Automations Ids |
| [**listAutomationsUsingGET**](AutomationApi.md#listAutomationsUsingGET) | **GET** /v2/automations | List Automations |
| [**listAutomationsUsingGETWithHttpInfo**](AutomationApi.md#listAutomationsUsingGETWithHttpInfo) | **GET** /v2/automations | List Automations |
| [**updateAutomationCategoryUsingPUT**](AutomationApi.md#updateAutomationCategoryUsingPUT) | **PUT** /v2/automations/category | Update an Automation&#39;s Category |
| [**updateAutomationCategoryUsingPUTWithHttpInfo**](AutomationApi.md#updateAutomationCategoryUsingPUTWithHttpInfo) | **PUT** /v2/automations/category | Update an Automation&#39;s Category |



## addContactsToAutomationSequenceUsingPOST

> AddToAutomationSequenceResponse addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest)

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
            AddToAutomationSequenceResponse result = apiInstance.addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#addContactsToAutomationSequenceUsingPOST");
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

## addContactsToAutomationSequenceUsingPOSTWithHttpInfo

> ApiResponse<AddToAutomationSequenceResponse> addContactsToAutomationSequenceUsingPOST addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest)

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
            ApiResponse<AddToAutomationSequenceResponse> response = apiInstance.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#addContactsToAutomationSequenceUsingPOST");
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


## deleteAutomationUsingDELETE

> void deleteAutomationUsingDELETE(automationIds)

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
            apiInstance.deleteAutomationUsingDELETE(automationIds);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#deleteAutomationUsingDELETE");
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

## deleteAutomationUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteAutomationUsingDELETE deleteAutomationUsingDELETEWithHttpInfo(automationIds)

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
            ApiResponse<Void> response = apiInstance.deleteAutomationUsingDELETEWithHttpInfo(automationIds);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#deleteAutomationUsingDELETE");
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


## getAutomationUsingGET

> Automation getAutomationUsingGET(automationId)

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
            Automation result = apiInstance.getAutomationUsingGET(automationId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#getAutomationUsingGET");
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

## getAutomationUsingGETWithHttpInfo

> ApiResponse<Automation> getAutomationUsingGET getAutomationUsingGETWithHttpInfo(automationId)

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
            ApiResponse<Automation> response = apiInstance.getAutomationUsingGETWithHttpInfo(automationId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#getAutomationUsingGET");
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


## listAllAutomationIdsUsingGET

> ListAutomationIdsResponse listAllAutomationIdsUsingGET(filter, orderBy, pageSize, pageToken, stats)

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
            ListAutomationIdsResponse result = apiInstance.listAllAutomationIdsUsingGET(filter, orderBy, pageSize, pageToken, stats);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#listAllAutomationIdsUsingGET");
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

## listAllAutomationIdsUsingGETWithHttpInfo

> ApiResponse<ListAutomationIdsResponse> listAllAutomationIdsUsingGET listAllAutomationIdsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats)

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
            ApiResponse<ListAutomationIdsResponse> response = apiInstance.listAllAutomationIdsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#listAllAutomationIdsUsingGET");
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


## listAutomationsUsingGET

> ListAutomationResponse listAutomationsUsingGET(filter, orderBy, pageSize, pageToken, stats)

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
            ListAutomationResponse result = apiInstance.listAutomationsUsingGET(filter, orderBy, pageSize, pageToken, stats);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#listAutomationsUsingGET");
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

## listAutomationsUsingGETWithHttpInfo

> ApiResponse<ListAutomationResponse> listAutomationsUsingGET listAutomationsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats)

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
            ApiResponse<ListAutomationResponse> response = apiInstance.listAutomationsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#listAutomationsUsingGET");
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


## updateAutomationCategoryUsingPUT

> void updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest)

Update an Automation&#39;s Category

Updates the category of one or more automations

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
        UpdateAutomationCategoryRequest updateAutomationCategoryRequest = new UpdateAutomationCategoryRequest(); // UpdateAutomationCategoryRequest | updateAutomationCategoryRequest
        try {
            apiInstance.updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#updateAutomationCategoryUsingPUT");
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
| **updateAutomationCategoryRequest** | [**UpdateAutomationCategoryRequest**](UpdateAutomationCategoryRequest.md)| updateAutomationCategoryRequest | |

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
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## updateAutomationCategoryUsingPUTWithHttpInfo

> ApiResponse<Void> updateAutomationCategoryUsingPUT updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest)

Update an Automation&#39;s Category

Updates the category of one or more automations

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
        UpdateAutomationCategoryRequest updateAutomationCategoryRequest = new UpdateAutomationCategoryRequest(); // UpdateAutomationCategoryRequest | updateAutomationCategoryRequest
        try {
            ApiResponse<Void> response = apiInstance.updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationApi#updateAutomationCategoryUsingPUT");
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
| **updateAutomationCategoryRequest** | [**UpdateAutomationCategoryRequest**](UpdateAutomationCategoryRequest.md)| updateAutomationCategoryRequest | |

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
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

