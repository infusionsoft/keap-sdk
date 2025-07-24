# OpportunityApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOpportunity**](OpportunityApi.md#createOpportunity) | **POST** /v2/opportunities | Create an Opportunity |
| [**createOpportunityWithHttpInfo**](OpportunityApi.md#createOpportunityWithHttpInfo) | **POST** /v2/opportunities | Create an Opportunity |
| [**createOpportunityCustomFields**](OpportunityApi.md#createOpportunityCustomFields) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**createOpportunityCustomFieldsWithHttpInfo**](OpportunityApi.md#createOpportunityCustomFieldsWithHttpInfo) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**createOpportunityStage**](OpportunityApi.md#createOpportunityStage) | **POST** /v2/opportunities/stages | Create an Opportunity Stage |
| [**createOpportunityStageWithHttpInfo**](OpportunityApi.md#createOpportunityStageWithHttpInfo) | **POST** /v2/opportunities/stages | Create an Opportunity Stage |
| [**deleteOpportunity**](OpportunityApi.md#deleteOpportunity) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**deleteOpportunityWithHttpInfo**](OpportunityApi.md#deleteOpportunityWithHttpInfo) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**deleteOpportunityStage**](OpportunityApi.md#deleteOpportunityStage) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**deleteOpportunityStageWithHttpInfo**](OpportunityApi.md#deleteOpportunityStageWithHttpInfo) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**getOpportunity**](OpportunityApi.md#getOpportunity) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**getOpportunityWithHttpInfo**](OpportunityApi.md#getOpportunityWithHttpInfo) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**getOpportunityStage**](OpportunityApi.md#getOpportunityStage) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**getOpportunityStageWithHttpInfo**](OpportunityApi.md#getOpportunityStageWithHttpInfo) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**listOpportunities**](OpportunityApi.md#listOpportunities) | **GET** /v2/opportunities | List Opportunities |
| [**listOpportunitiesWithHttpInfo**](OpportunityApi.md#listOpportunitiesWithHttpInfo) | **GET** /v2/opportunities | List Opportunities |
| [**listOpportunityStages**](OpportunityApi.md#listOpportunityStages) | **GET** /v2/opportunities/stages | List of Opportunity Stages |
| [**listOpportunityStagesWithHttpInfo**](OpportunityApi.md#listOpportunityStagesWithHttpInfo) | **GET** /v2/opportunities/stages | List of Opportunity Stages |
| [**updateOpportunity**](OpportunityApi.md#updateOpportunity) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity |
| [**updateOpportunityWithHttpInfo**](OpportunityApi.md#updateOpportunityWithHttpInfo) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity |
| [**updateOpportunityCustomField**](OpportunityApi.md#updateOpportunityCustomField) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**updateOpportunityCustomFieldWithHttpInfo**](OpportunityApi.md#updateOpportunityCustomFieldWithHttpInfo) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**updateOpportunityStage**](OpportunityApi.md#updateOpportunityStage) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage |
| [**updateOpportunityStageWithHttpInfo**](OpportunityApi.md#updateOpportunityStageWithHttpInfo) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage |



## createOpportunity

> RestV2Opportunity createOpportunity(createOpportunityRequest)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityRequest createOpportunityRequest = new CreateOpportunityRequest(); // CreateOpportunityRequest | opportunity
        try {
            RestV2Opportunity result = apiInstance.createOpportunity(createOpportunityRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunity");
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
| **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| opportunity | [optional] |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)


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

## createOpportunityWithHttpInfo

> ApiResponse<RestV2Opportunity> createOpportunity createOpportunityWithHttpInfo(createOpportunityRequest)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityRequest createOpportunityRequest = new CreateOpportunityRequest(); // CreateOpportunityRequest | opportunity
        try {
            ApiResponse<RestV2Opportunity> response = apiInstance.createOpportunityWithHttpInfo(createOpportunityRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunity");
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
| **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| opportunity | [optional] |

### Return type

ApiResponse<[**RestV2Opportunity**](RestV2Opportunity.md)>


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


## createOpportunityCustomFields

> CustomFieldMetaData createOpportunityCustomFields(createCustomFieldRequest)

Create an Opportunity Custom Field

Creates a custom field of the specified type and options to the Opportunity object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            CustomFieldMetaData result = apiInstance.createOpportunityCustomFields(createCustomFieldRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityCustomFields");
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

## createOpportunityCustomFieldsWithHttpInfo

> ApiResponse<CustomFieldMetaData> createOpportunityCustomFields createOpportunityCustomFieldsWithHttpInfo(createCustomFieldRequest)

Create an Opportunity Custom Field

Creates a custom field of the specified type and options to the Opportunity object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.createOpportunityCustomFieldsWithHttpInfo(createCustomFieldRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityCustomFields");
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


## createOpportunityStage

> RestOpportunityStage createOpportunityStage(createOpportunityStageRequest)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityStageRequest createOpportunityStageRequest = new CreateOpportunityStageRequest(); // CreateOpportunityStageRequest | opportunity
        try {
            RestOpportunityStage result = apiInstance.createOpportunityStage(createOpportunityStageRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityStage");
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
| **createOpportunityStageRequest** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)| opportunity | [optional] |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)


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

## createOpportunityStageWithHttpInfo

> ApiResponse<RestOpportunityStage> createOpportunityStage createOpportunityStageWithHttpInfo(createOpportunityStageRequest)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityStageRequest createOpportunityStageRequest = new CreateOpportunityStageRequest(); // CreateOpportunityStageRequest | opportunity
        try {
            ApiResponse<RestOpportunityStage> response = apiInstance.createOpportunityStageWithHttpInfo(createOpportunityStageRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityStage");
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
| **createOpportunityStageRequest** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)| opportunity | [optional] |

### Return type

ApiResponse<[**RestOpportunityStage**](RestOpportunityStage.md)>


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


## deleteOpportunity

> void deleteOpportunity(opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        try {
            apiInstance.deleteOpportunity(opportunityId);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunity");
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
| **opportunityId** | **String**| opportunity_id | |

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

## deleteOpportunityWithHttpInfo

> ApiResponse<Void> deleteOpportunity deleteOpportunityWithHttpInfo(opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        try {
            ApiResponse<Void> response = apiInstance.deleteOpportunityWithHttpInfo(opportunityId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunity");
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
| **opportunityId** | **String**| opportunity_id | |

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


## deleteOpportunityStage

> void deleteOpportunityStage(stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        try {
            apiInstance.deleteOpportunityStage(stageId);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunityStage");
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
| **stageId** | **String**| stage_id | |

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

## deleteOpportunityStageWithHttpInfo

> ApiResponse<Void> deleteOpportunityStage deleteOpportunityStageWithHttpInfo(stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        try {
            ApiResponse<Void> response = apiInstance.deleteOpportunityStageWithHttpInfo(stageId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunityStage");
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
| **stageId** | **String**| stage_id | |

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


## getOpportunity

> RestV2Opportunity getOpportunity(opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        try {
            RestV2Opportunity result = apiInstance.getOpportunity(opportunityId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#getOpportunity");
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
| **opportunityId** | **String**| opportunity_id | |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)


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

## getOpportunityWithHttpInfo

> ApiResponse<RestV2Opportunity> getOpportunity getOpportunityWithHttpInfo(opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        try {
            ApiResponse<RestV2Opportunity> response = apiInstance.getOpportunityWithHttpInfo(opportunityId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#getOpportunity");
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
| **opportunityId** | **String**| opportunity_id | |

### Return type

ApiResponse<[**RestV2Opportunity**](RestV2Opportunity.md)>


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


## getOpportunityStage

> RestOpportunityStage getOpportunityStage(stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        try {
            RestOpportunityStage result = apiInstance.getOpportunityStage(stageId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#getOpportunityStage");
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
| **stageId** | **String**| stage_id | |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)


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

## getOpportunityStageWithHttpInfo

> ApiResponse<RestOpportunityStage> getOpportunityStage getOpportunityStageWithHttpInfo(stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        try {
            ApiResponse<RestOpportunityStage> response = apiInstance.getOpportunityStageWithHttpInfo(stageId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#getOpportunityStage");
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
| **stageId** | **String**| stage_id | |

### Return type

ApiResponse<[**RestOpportunityStage**](RestOpportunityStage.md)>


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


## listOpportunities

> ListOpportunitiesResponse listOpportunities(fields, filter, orderBy, pageSize, pageToken)

List Opportunities

Retrieves a list of all Opportunities.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | fields
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_name` - `created_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListOpportunitiesResponse result = apiInstance.listOpportunities(fields, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#listOpportunities");
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
| **fields** | [**List&lt;String&gt;**](String.md)| fields | [optional] |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)


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

## listOpportunitiesWithHttpInfo

> ApiResponse<ListOpportunitiesResponse> listOpportunities listOpportunitiesWithHttpInfo(fields, filter, orderBy, pageSize, pageToken)

List Opportunities

Retrieves a list of all Opportunities.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | fields
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_name` - `created_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListOpportunitiesResponse> response = apiInstance.listOpportunitiesWithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#listOpportunities");
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
| **fields** | [**List&lt;String&gt;**](String.md)| fields | [optional] |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)>


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


## listOpportunityStages

> ListOpportunityStagesResponse listOpportunityStages(filter, orderBy, pageSize, pageToken)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order stage items. One of the following fields: - `stage_order`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListOpportunityStagesResponse result = apiInstance.listOpportunityStages(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#listOpportunityStages");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)


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

## listOpportunityStagesWithHttpInfo

> ApiResponse<ListOpportunityStagesResponse> listOpportunityStages listOpportunityStagesWithHttpInfo(filter, orderBy, pageSize, pageToken)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order stage items. One of the following fields: - `stage_order`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListOpportunityStagesResponse> response = apiInstance.listOpportunityStagesWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#listOpportunityStages");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)>


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


## updateOpportunity

> RestV2Opportunity updateOpportunity(opportunityId, updateOpportunityRequestV2, updateMask)

Update an opportunity

Updates specified values of a given opportunity

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        UpdateOpportunityRequestV2 updateOpportunityRequestV2 = new UpdateOpportunityRequestV2(); // UpdateOpportunityRequestV2 | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            RestV2Opportunity result = apiInstance.updateOpportunity(opportunityId, updateOpportunityRequestV2, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunity");
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
| **opportunityId** | **String**| opportunity_id | |
| **updateOpportunityRequestV2** | [**UpdateOpportunityRequestV2**](UpdateOpportunityRequestV2.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: opportunity_title, next_action_time, next_action_notes, opportunity_notes, estimated_close_time, include_in_forecast, projected_revenue_low, projected_revenue_high, contact_id, stage_id, user_id, custom_fields, affiliate_id] |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)


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

## updateOpportunityWithHttpInfo

> ApiResponse<RestV2Opportunity> updateOpportunity updateOpportunityWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask)

Update an opportunity

Updates specified values of a given opportunity

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        UpdateOpportunityRequestV2 updateOpportunityRequestV2 = new UpdateOpportunityRequestV2(); // UpdateOpportunityRequestV2 | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<RestV2Opportunity> response = apiInstance.updateOpportunityWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunity");
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
| **opportunityId** | **String**| opportunity_id | |
| **updateOpportunityRequestV2** | [**UpdateOpportunityRequestV2**](UpdateOpportunityRequestV2.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: opportunity_title, next_action_time, next_action_notes, opportunity_notes, estimated_close_time, include_in_forecast, projected_revenue_low, projected_revenue_high, contact_id, stage_id, user_id, custom_fields, affiliate_id] |

### Return type

ApiResponse<[**RestV2Opportunity**](RestV2Opportunity.md)>


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


## updateOpportunityCustomField

> CustomFieldMetaData updateOpportunityCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Opportunity&#39;s Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CustomFieldMetaData result = apiInstance.updateOpportunityCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityCustomField");
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

## updateOpportunityCustomFieldWithHttpInfo

> ApiResponse<CustomFieldMetaData> updateOpportunityCustomField updateOpportunityCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Opportunity&#39;s Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.updateOpportunityCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityCustomField");
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


## updateOpportunityStage

> RestOpportunityStage updateOpportunityStage(stageId, updateOpportunityStageRequest, updateMask)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        UpdateOpportunityStageRequest updateOpportunityStageRequest = new UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            RestOpportunityStage result = apiInstance.updateOpportunityStage(stageId, updateOpportunityStageRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityStage");
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
| **stageId** | **String**| stage_id | |
| **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, order, target_number_days, probability, checklist_items] |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)


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

## updateOpportunityStageWithHttpInfo

> ApiResponse<RestOpportunityStage> updateOpportunityStage updateOpportunityStageWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        UpdateOpportunityStageRequest updateOpportunityStageRequest = new UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<RestOpportunityStage> response = apiInstance.updateOpportunityStageWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityStage");
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
| **stageId** | **String**| stage_id | |
| **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, order, target_number_days, probability, checklist_items] |

### Return type

ApiResponse<[**RestOpportunityStage**](RestOpportunityStage.md)>


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

