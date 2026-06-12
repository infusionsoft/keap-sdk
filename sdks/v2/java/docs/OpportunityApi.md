# OpportunityApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOpportunity**](OpportunityApi.md#createOpportunity) | **POST** /rest/v2/opportunities | Create an Opportunity |
| [**createOpportunityWithHttpInfo**](OpportunityApi.md#createOpportunityWithHttpInfo) | **POST** /rest/v2/opportunities | Create an Opportunity |
| [**createOpportunityCustomFieldGroup**](OpportunityApi.md#createOpportunityCustomFieldGroup) | **POST** /rest/v2/opportunities/model/customFields/groups | Create an Opportunity Custom Field Group |
| [**createOpportunityCustomFieldGroupWithHttpInfo**](OpportunityApi.md#createOpportunityCustomFieldGroupWithHttpInfo) | **POST** /rest/v2/opportunities/model/customFields/groups | Create an Opportunity Custom Field Group |
| [**createOpportunityCustomFields**](OpportunityApi.md#createOpportunityCustomFields) | **POST** /rest/v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**createOpportunityCustomFieldsWithHttpInfo**](OpportunityApi.md#createOpportunityCustomFieldsWithHttpInfo) | **POST** /rest/v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**createOpportunityStage**](OpportunityApi.md#createOpportunityStage) | **POST** /rest/v2/opportunities/stages | Create an Opportunity Stage |
| [**createOpportunityStageWithHttpInfo**](OpportunityApi.md#createOpportunityStageWithHttpInfo) | **POST** /rest/v2/opportunities/stages | Create an Opportunity Stage |
| [**deleteOpportunitiesCustomField**](OpportunityApi.md#deleteOpportunitiesCustomField) | **DELETE** /rest/v2/opportunities/model/customFields/{custom_field_id} | Delete an Opportunity Custom Field |
| [**deleteOpportunitiesCustomFieldWithHttpInfo**](OpportunityApi.md#deleteOpportunitiesCustomFieldWithHttpInfo) | **DELETE** /rest/v2/opportunities/model/customFields/{custom_field_id} | Delete an Opportunity Custom Field |
| [**deleteOpportunity**](OpportunityApi.md#deleteOpportunity) | **DELETE** /rest/v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**deleteOpportunityWithHttpInfo**](OpportunityApi.md#deleteOpportunityWithHttpInfo) | **DELETE** /rest/v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**deleteOpportunityCustomFieldGroup**](OpportunityApi.md#deleteOpportunityCustomFieldGroup) | **DELETE** /rest/v2/opportunities/model/customFields/groups/{group_id} | Delete an Opportunity Custom Field Group |
| [**deleteOpportunityCustomFieldGroupWithHttpInfo**](OpportunityApi.md#deleteOpportunityCustomFieldGroupWithHttpInfo) | **DELETE** /rest/v2/opportunities/model/customFields/groups/{group_id} | Delete an Opportunity Custom Field Group |
| [**deleteOpportunityStage**](OpportunityApi.md#deleteOpportunityStage) | **DELETE** /rest/v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**deleteOpportunityStageWithHttpInfo**](OpportunityApi.md#deleteOpportunityStageWithHttpInfo) | **DELETE** /rest/v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**getOpportunity**](OpportunityApi.md#getOpportunity) | **GET** /rest/v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**getOpportunityWithHttpInfo**](OpportunityApi.md#getOpportunityWithHttpInfo) | **GET** /rest/v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**getOpportunityCustomFieldGroup**](OpportunityApi.md#getOpportunityCustomFieldGroup) | **GET** /rest/v2/opportunities/model/customFields/groups/{group_id} | Retrieve an Opportunity Custom Field Group |
| [**getOpportunityCustomFieldGroupWithHttpInfo**](OpportunityApi.md#getOpportunityCustomFieldGroupWithHttpInfo) | **GET** /rest/v2/opportunities/model/customFields/groups/{group_id} | Retrieve an Opportunity Custom Field Group |
| [**getOpportunityStage**](OpportunityApi.md#getOpportunityStage) | **GET** /rest/v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**getOpportunityStageWithHttpInfo**](OpportunityApi.md#getOpportunityStageWithHttpInfo) | **GET** /rest/v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**listOpportunities**](OpportunityApi.md#listOpportunities) | **GET** /rest/v2/opportunities | List Opportunities |
| [**listOpportunitiesWithHttpInfo**](OpportunityApi.md#listOpportunitiesWithHttpInfo) | **GET** /rest/v2/opportunities | List Opportunities |
| [**listOpportunityCustomFieldGroups**](OpportunityApi.md#listOpportunityCustomFieldGroups) | **GET** /rest/v2/opportunities/model/customFields/groups | List Opportunity Custom Field Groups |
| [**listOpportunityCustomFieldGroupsWithHttpInfo**](OpportunityApi.md#listOpportunityCustomFieldGroupsWithHttpInfo) | **GET** /rest/v2/opportunities/model/customFields/groups | List Opportunity Custom Field Groups |
| [**listOpportunityStages**](OpportunityApi.md#listOpportunityStages) | **GET** /rest/v2/opportunities/stages | List of Opportunity Stages |
| [**listOpportunityStagesWithHttpInfo**](OpportunityApi.md#listOpportunityStagesWithHttpInfo) | **GET** /rest/v2/opportunities/stages | List of Opportunity Stages |
| [**retrieveOpportunityCustomFieldModel**](OpportunityApi.md#retrieveOpportunityCustomFieldModel) | **GET** /rest/v2/opportunities/model | Retrieve Opportunity Custom Field Model |
| [**retrieveOpportunityCustomFieldModelWithHttpInfo**](OpportunityApi.md#retrieveOpportunityCustomFieldModelWithHttpInfo) | **GET** /rest/v2/opportunities/model | Retrieve Opportunity Custom Field Model |
| [**updateOpportunity**](OpportunityApi.md#updateOpportunity) | **PATCH** /rest/v2/opportunities/{opportunity_id} | Update an opportunity |
| [**updateOpportunityWithHttpInfo**](OpportunityApi.md#updateOpportunityWithHttpInfo) | **PATCH** /rest/v2/opportunities/{opportunity_id} | Update an opportunity |
| [**updateOpportunityCustomField**](OpportunityApi.md#updateOpportunityCustomField) | **PATCH** /rest/v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**updateOpportunityCustomFieldWithHttpInfo**](OpportunityApi.md#updateOpportunityCustomFieldWithHttpInfo) | **PATCH** /rest/v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**updateOpportunityCustomFieldGroup**](OpportunityApi.md#updateOpportunityCustomFieldGroup) | **PATCH** /rest/v2/opportunities/model/customFields/groups/{group_id} | Update an Opportunity Custom Field Group |
| [**updateOpportunityCustomFieldGroupWithHttpInfo**](OpportunityApi.md#updateOpportunityCustomFieldGroupWithHttpInfo) | **PATCH** /rest/v2/opportunities/model/customFields/groups/{group_id} | Update an Opportunity Custom Field Group |
| [**updateOpportunityStage**](OpportunityApi.md#updateOpportunityStage) | **PATCH** /rest/v2/opportunities/stages/{stage_id} | Update an Opportunity Stage |
| [**updateOpportunityStageWithHttpInfo**](OpportunityApi.md#updateOpportunityStageWithHttpInfo) | **PATCH** /rest/v2/opportunities/stages/{stage_id} | Update an Opportunity Stage |



## createOpportunity

> RestV2Opportunity createOpportunity(createOpportunityRequest, fields)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityRequest createOpportunityRequest = new CreateOpportunityRequest(); // CreateOpportunityRequest | 
        Set<String> fields = Arrays.asList(); // Set<String> | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
        try {
            RestV2Opportunity result = apiInstance.createOpportunity(createOpportunityRequest, fields);
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
| **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)|  | |
| **fields** | [**Set&lt;String&gt;**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] [enum: custom_fields, monthly_revenue, order_revenue, objection, status, stage_entrance_time] |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createOpportunityWithHttpInfo

> ApiResponse<RestV2Opportunity> createOpportunity createOpportunityWithHttpInfo(createOpportunityRequest, fields)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityRequest createOpportunityRequest = new CreateOpportunityRequest(); // CreateOpportunityRequest | 
        Set<String> fields = Arrays.asList(); // Set<String> | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
        try {
            ApiResponse<RestV2Opportunity> response = apiInstance.createOpportunityWithHttpInfo(createOpportunityRequest, fields);
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
| **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)|  | |
| **fields** | [**Set&lt;String&gt;**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] [enum: custom_fields, monthly_revenue, order_revenue, objection, status, stage_entrance_time] |

### Return type

ApiResponse<[**RestV2Opportunity**](RestV2Opportunity.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## createOpportunityCustomFieldGroup

> CustomFieldGroup createOpportunityCustomFieldGroup(createCustomFieldGroupRequest)

Create an Opportunity Custom Field Group

Creates a new custom field group for the Opportunity record type. If &#x60;tab_id&#x60; is omitted, the group is added to the default &#39;Custom Fields&#39; tab.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateCustomFieldGroupRequest createCustomFieldGroupRequest = new CreateCustomFieldGroupRequest(); // CreateCustomFieldGroupRequest | 
        try {
            CustomFieldGroup result = apiInstance.createOpportunityCustomFieldGroup(createCustomFieldGroupRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityCustomFieldGroup");
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
| **createCustomFieldGroupRequest** | [**CreateCustomFieldGroupRequest**](CreateCustomFieldGroupRequest.md)|  | |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createOpportunityCustomFieldGroupWithHttpInfo

> ApiResponse<CustomFieldGroup> createOpportunityCustomFieldGroup createOpportunityCustomFieldGroupWithHttpInfo(createCustomFieldGroupRequest)

Create an Opportunity Custom Field Group

Creates a new custom field group for the Opportunity record type. If &#x60;tab_id&#x60; is omitted, the group is added to the default &#39;Custom Fields&#39; tab.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateCustomFieldGroupRequest createCustomFieldGroupRequest = new CreateCustomFieldGroupRequest(); // CreateCustomFieldGroupRequest | 
        try {
            ApiResponse<CustomFieldGroup> response = apiInstance.createOpportunityCustomFieldGroupWithHttpInfo(createCustomFieldGroupRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityCustomFieldGroup");
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
| **createCustomFieldGroupRequest** | [**CreateCustomFieldGroupRequest**](CreateCustomFieldGroupRequest.md)|  | |

### Return type

ApiResponse<[**CustomFieldGroup**](CustomFieldGroup.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityStageRequest createOpportunityStageRequest = new CreateOpportunityStageRequest(); // CreateOpportunityStageRequest | 
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
| **createOpportunityStageRequest** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)|  | |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityStageRequest createOpportunityStageRequest = new CreateOpportunityStageRequest(); // CreateOpportunityStageRequest | 
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
| **createOpportunityStageRequest** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)|  | |

### Return type

ApiResponse<[**RestOpportunityStage**](RestOpportunityStage.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteOpportunitiesCustomField

> void deleteOpportunitiesCustomField(customFieldId)

Delete an Opportunity Custom Field

Deletes a Custom Field from Opportunity.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        try {
            apiInstance.deleteOpportunitiesCustomField(customFieldId);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunitiesCustomField");
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
| **customFieldId** | **String**|  | |

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
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteOpportunitiesCustomFieldWithHttpInfo

> ApiResponse<Void> deleteOpportunitiesCustomField deleteOpportunitiesCustomFieldWithHttpInfo(customFieldId)

Delete an Opportunity Custom Field

Deletes a Custom Field from Opportunity.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteOpportunitiesCustomFieldWithHttpInfo(customFieldId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunitiesCustomField");
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
| **customFieldId** | **String**|  | |

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
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | 
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
| **opportunityId** | **String**|  | |

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
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | 
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
| **opportunityId** | **String**|  | |

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
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteOpportunityCustomFieldGroup

> void deleteOpportunityCustomFieldGroup(groupId)

Delete an Opportunity Custom Field Group

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        try {
            apiInstance.deleteOpportunityCustomFieldGroup(groupId);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunityCustomFieldGroup");
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
| **groupId** | **String**|  | |

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
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteOpportunityCustomFieldGroupWithHttpInfo

> ApiResponse<Void> deleteOpportunityCustomFieldGroup deleteOpportunityCustomFieldGroupWithHttpInfo(groupId)

Delete an Opportunity Custom Field Group

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteOpportunityCustomFieldGroupWithHttpInfo(groupId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunityCustomFieldGroup");
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
| **groupId** | **String**|  | |

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
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | 
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
| **stageId** | **String**|  | |

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
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | 
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
| **stageId** | **String**|  | |

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
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getOpportunity

> RestV2Opportunity getOpportunity(opportunityId, fields)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | 
        Set<String> fields = Arrays.asList(); // Set<String> | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
        try {
            RestV2Opportunity result = apiInstance.getOpportunity(opportunityId, fields);
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
| **opportunityId** | **String**|  | |
| **fields** | [**Set&lt;String&gt;**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] [enum: custom_fields, monthly_revenue, order_revenue, objection, status, stage_entrance_time] |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)


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

## getOpportunityWithHttpInfo

> ApiResponse<RestV2Opportunity> getOpportunity getOpportunityWithHttpInfo(opportunityId, fields)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | 
        Set<String> fields = Arrays.asList(); // Set<String> | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
        try {
            ApiResponse<RestV2Opportunity> response = apiInstance.getOpportunityWithHttpInfo(opportunityId, fields);
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
| **opportunityId** | **String**|  | |
| **fields** | [**Set&lt;String&gt;**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] [enum: custom_fields, monthly_revenue, order_revenue, objection, status, stage_entrance_time] |

### Return type

ApiResponse<[**RestV2Opportunity**](RestV2Opportunity.md)>


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


## getOpportunityCustomFieldGroup

> CustomFieldGroup getOpportunityCustomFieldGroup(groupId)

Retrieve an Opportunity Custom Field Group

Retrieves a single custom field group by id for the Opportunity record type.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        try {
            CustomFieldGroup result = apiInstance.getOpportunityCustomFieldGroup(groupId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#getOpportunityCustomFieldGroup");
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
| **groupId** | **String**|  | |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)


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

## getOpportunityCustomFieldGroupWithHttpInfo

> ApiResponse<CustomFieldGroup> getOpportunityCustomFieldGroup getOpportunityCustomFieldGroupWithHttpInfo(groupId)

Retrieve an Opportunity Custom Field Group

Retrieves a single custom field group by id for the Opportunity record type.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        try {
            ApiResponse<CustomFieldGroup> response = apiInstance.getOpportunityCustomFieldGroupWithHttpInfo(groupId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#getOpportunityCustomFieldGroup");
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
| **groupId** | **String**|  | |

### Return type

ApiResponse<[**CustomFieldGroup**](CustomFieldGroup.md)>


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | 
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
| **stageId** | **String**|  | |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | 
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
| **stageId** | **String**|  | |

### Return type

ApiResponse<[**RestOpportunityStage**](RestOpportunityStage.md)>


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        Set<String> fields = Arrays.asList(); // Set<String> | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` - (String) `contact_id` - (String) `opportunity_title` — supports wildcard prefix search (e.g. `opportunity_title==Deal*`) - (String) `lead_source_name` — supports wildcard prefix search (e.g. `lead_source_name==Web*`) - (String) `affiliate_id` — exact match only (e.g. `affiliate_id==123`) - (String) `opportunity_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` - (String) `ids` — comma-separated list of opportunity IDs (e.g. `ids==1,2,3`), maximum 100 IDs Note: `opportunity_id` and `ids` cannot be used together in the same request. 
        String orderBy = "orderBy_example"; // String | Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_title` - `created_time` - `update_time`  One of the following directions: - `asc` - `desc`
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
| **fields** | [**Set&lt;String&gt;**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] [enum: custom_fields, monthly_revenue, order_revenue, objection, status, stage_entrance_time] |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;opportunity_title&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_title&#x3D;&#x3D;Deal*&#x60;) - (String) &#x60;lead_source_name&#x60; — supports wildcard prefix search (e.g. &#x60;lead_source_name&#x3D;&#x3D;Web*&#x60;) - (String) &#x60;affiliate_id&#x60; — exact match only (e.g. &#x60;affiliate_id&#x3D;&#x3D;123&#x60;) - (String) &#x60;opportunity_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;ids&#x60; — comma-separated list of opportunity IDs (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;), maximum 100 IDs Note: &#x60;opportunity_id&#x60; and &#x60;ids&#x60; cannot be used together in the same request.  | [optional] |
| **orderBy** | **String**| Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_title&#x60; - &#x60;created_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        Set<String> fields = Arrays.asList(); // Set<String> | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` - (String) `contact_id` - (String) `opportunity_title` — supports wildcard prefix search (e.g. `opportunity_title==Deal*`) - (String) `lead_source_name` — supports wildcard prefix search (e.g. `lead_source_name==Web*`) - (String) `affiliate_id` — exact match only (e.g. `affiliate_id==123`) - (String) `opportunity_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` - (String) `ids` — comma-separated list of opportunity IDs (e.g. `ids==1,2,3`), maximum 100 IDs Note: `opportunity_id` and `ids` cannot be used together in the same request. 
        String orderBy = "orderBy_example"; // String | Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_title` - `created_time` - `update_time`  One of the following directions: - `asc` - `desc`
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
| **fields** | [**Set&lt;String&gt;**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] [enum: custom_fields, monthly_revenue, order_revenue, objection, status, stage_entrance_time] |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;opportunity_title&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_title&#x3D;&#x3D;Deal*&#x60;) - (String) &#x60;lead_source_name&#x60; — supports wildcard prefix search (e.g. &#x60;lead_source_name&#x3D;&#x3D;Web*&#x60;) - (String) &#x60;affiliate_id&#x60; — exact match only (e.g. &#x60;affiliate_id&#x3D;&#x3D;123&#x60;) - (String) &#x60;opportunity_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;ids&#x60; — comma-separated list of opportunity IDs (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;), maximum 100 IDs Note: &#x60;opportunity_id&#x60; and &#x60;ids&#x60; cannot be used together in the same request.  | [optional] |
| **orderBy** | **String**| Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_title&#x60; - &#x60;created_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)>


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


## listOpportunityCustomFieldGroups

> ListCustomFieldGroupsResponse listOpportunityCustomFieldGroups(tabId)

List Opportunity Custom Field Groups

Retrieves a list of custom field groups for the Opportunity record type. Optionally filter by tab_id to scope to a specific tab.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String tabId = "tabId_example"; // String | Optional tab id to scope groups to a single tab
        try {
            ListCustomFieldGroupsResponse result = apiInstance.listOpportunityCustomFieldGroups(tabId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#listOpportunityCustomFieldGroups");
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
| **tabId** | **String**| Optional tab id to scope groups to a single tab | [optional] |

### Return type

[**ListCustomFieldGroupsResponse**](ListCustomFieldGroupsResponse.md)


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

## listOpportunityCustomFieldGroupsWithHttpInfo

> ApiResponse<ListCustomFieldGroupsResponse> listOpportunityCustomFieldGroups listOpportunityCustomFieldGroupsWithHttpInfo(tabId)

List Opportunity Custom Field Groups

Retrieves a list of custom field groups for the Opportunity record type. Optionally filter by tab_id to scope to a specific tab.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String tabId = "tabId_example"; // String | Optional tab id to scope groups to a single tab
        try {
            ApiResponse<ListCustomFieldGroupsResponse> response = apiInstance.listOpportunityCustomFieldGroupsWithHttpInfo(tabId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#listOpportunityCustomFieldGroups");
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
| **tabId** | **String**| Optional tab id to scope groups to a single tab | [optional] |

### Return type

ApiResponse<[**ListCustomFieldGroupsResponse**](ListCustomFieldGroupsResponse.md)>


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `opportunity_stage_name` — supports wildcard prefix search (e.g. `opportunity_stage_name==Qualified*`) - (String) `opportunity_stage_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `opportunity_stage_id>5`) 
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;opportunity_stage_name&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_stage_name&#x3D;&#x3D;Qualified*&#x60;) - (String) &#x60;opportunity_stage_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;opportunity_stage_id&gt;5&#x60;)  | [optional] |
| **orderBy** | **String**| Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `opportunity_stage_name` — supports wildcard prefix search (e.g. `opportunity_stage_name==Qualified*`) - (String) `opportunity_stage_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `opportunity_stage_id>5`) 
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;opportunity_stage_name&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_stage_name&#x3D;&#x3D;Qualified*&#x60;) - (String) &#x60;opportunity_stage_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;opportunity_stage_id&gt;5&#x60;)  | [optional] |
| **orderBy** | **String**| Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)>


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


## retrieveOpportunityCustomFieldModel

> ObjectModel retrieveOpportunityCustomFieldModel()

Retrieve Opportunity Custom Field Model

Get the custom fields for the Opportunity object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        try {
            ObjectModel result = apiInstance.retrieveOpportunityCustomFieldModel();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#retrieveOpportunityCustomFieldModel");
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

## retrieveOpportunityCustomFieldModelWithHttpInfo

> ApiResponse<ObjectModel> retrieveOpportunityCustomFieldModel retrieveOpportunityCustomFieldModelWithHttpInfo()

Retrieve Opportunity Custom Field Model

Get the custom fields for the Opportunity object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        try {
            ApiResponse<ObjectModel> response = apiInstance.retrieveOpportunityCustomFieldModelWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#retrieveOpportunityCustomFieldModel");
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


## updateOpportunity

> RestV2Opportunity updateOpportunity(opportunityId, updateOpportunityRequestV2, updateMask, fields)

Update an opportunity

Updates specified values of a given opportunity

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | 
        UpdateOpportunityRequestV2 updateOpportunityRequestV2 = new UpdateOpportunityRequestV2(); // UpdateOpportunityRequestV2 | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        Set<String> fields = Arrays.asList(); // Set<String> | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
        try {
            RestV2Opportunity result = apiInstance.updateOpportunity(opportunityId, updateOpportunityRequestV2, updateMask, fields);
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
| **opportunityId** | **String**|  | |
| **updateOpportunityRequestV2** | [**UpdateOpportunityRequestV2**](UpdateOpportunityRequestV2.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: opportunity_title, next_action_time, next_action_notes, opportunity_notes, estimated_close_time, include_in_forecast, projected_revenue_low, projected_revenue_high, contact_id, stage_id, user_id, custom_fields, affiliate_id] |
| **fields** | [**Set&lt;String&gt;**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] [enum: custom_fields, monthly_revenue, order_revenue, objection, status, stage_entrance_time] |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
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

## updateOpportunityWithHttpInfo

> ApiResponse<RestV2Opportunity> updateOpportunity updateOpportunityWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask, fields)

Update an opportunity

Updates specified values of a given opportunity

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | 
        UpdateOpportunityRequestV2 updateOpportunityRequestV2 = new UpdateOpportunityRequestV2(); // UpdateOpportunityRequestV2 | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        Set<String> fields = Arrays.asList(); // Set<String> | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
        try {
            ApiResponse<RestV2Opportunity> response = apiInstance.updateOpportunityWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask, fields);
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
| **opportunityId** | **String**|  | |
| **updateOpportunityRequestV2** | [**UpdateOpportunityRequestV2**](UpdateOpportunityRequestV2.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: opportunity_title, next_action_time, next_action_notes, opportunity_notes, estimated_close_time, include_in_forecast, projected_revenue_low, projected_revenue_high, contact_id, stage_id, user_id, custom_fields, affiliate_id] |
| **fields** | [**Set&lt;String&gt;**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] [enum: custom_fields, monthly_revenue, order_revenue, objection, status, stage_entrance_time] |

### Return type

ApiResponse<[**RestV2Opportunity**](RestV2Opportunity.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **customFieldId** | **String**|  | |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **customFieldId** | **String**|  | |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
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


## updateOpportunityCustomFieldGroup

> CustomFieldGroup updateOpportunityCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest)

Update an Opportunity Custom Field Group

Updates an existing custom field group. Only fields listed in &#x60;update_mask&#x60; are applied.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | Comma-separated list of fields to update
        UpdateCustomFieldGroupRequest updateCustomFieldGroupRequest = new UpdateCustomFieldGroupRequest(); // UpdateCustomFieldGroupRequest | 
        try {
            CustomFieldGroup result = apiInstance.updateOpportunityCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityCustomFieldGroup");
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
| **groupId** | **String**|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| Comma-separated list of fields to update | [enum: name, tab_id, order] |
| **updateCustomFieldGroupRequest** | [**UpdateCustomFieldGroupRequest**](UpdateCustomFieldGroupRequest.md)|  | |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
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

## updateOpportunityCustomFieldGroupWithHttpInfo

> ApiResponse<CustomFieldGroup> updateOpportunityCustomFieldGroup updateOpportunityCustomFieldGroupWithHttpInfo(groupId, updateMask, updateCustomFieldGroupRequest)

Update an Opportunity Custom Field Group

Updates an existing custom field group. Only fields listed in &#x60;update_mask&#x60; are applied.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String groupId = "groupId_example"; // String | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | Comma-separated list of fields to update
        UpdateCustomFieldGroupRequest updateCustomFieldGroupRequest = new UpdateCustomFieldGroupRequest(); // UpdateCustomFieldGroupRequest | 
        try {
            ApiResponse<CustomFieldGroup> response = apiInstance.updateOpportunityCustomFieldGroupWithHttpInfo(groupId, updateMask, updateCustomFieldGroupRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityCustomFieldGroup");
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
| **groupId** | **String**|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| Comma-separated list of fields to update | [enum: name, tab_id, order] |
| **updateCustomFieldGroupRequest** | [**UpdateCustomFieldGroupRequest**](UpdateCustomFieldGroupRequest.md)|  | |

### Return type

ApiResponse<[**CustomFieldGroup**](CustomFieldGroup.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | 
        UpdateOpportunityStageRequest updateOpportunityStageRequest = new UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **stageId** | **String**|  | |
| **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, order, target_number_days, probability, checklist_items] |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | 
        UpdateOpportunityStageRequest updateOpportunityStageRequest = new UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **stageId** | **String**|  | |
| **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, order, target_number_days, probability, checklist_items] |

### Return type

ApiResponse<[**RestOpportunityStage**](RestOpportunityStage.md)>


### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
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

