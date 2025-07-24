# CompanyApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCompany**](CompanyApi.md#createCompany) | **POST** /v2/companies | Create a Company |
| [**createCompanyWithHttpInfo**](CompanyApi.md#createCompanyWithHttpInfo) | **POST** /v2/companies | Create a Company |
| [**deleteCompany**](CompanyApi.md#deleteCompany) | **DELETE** /v2/companies/{company_id} | Delete a Company |
| [**deleteCompanyWithHttpInfo**](CompanyApi.md#deleteCompanyWithHttpInfo) | **DELETE** /v2/companies/{company_id} | Delete a Company |
| [**getCompany**](CompanyApi.md#getCompany) | **GET** /v2/companies/{company_id} | Retrieve a Company |
| [**getCompanyWithHttpInfo**](CompanyApi.md#getCompanyWithHttpInfo) | **GET** /v2/companies/{company_id} | Retrieve a Company |
| [**listCompanies**](CompanyApi.md#listCompanies) | **GET** /v2/companies | List Companies |
| [**listCompaniesWithHttpInfo**](CompanyApi.md#listCompaniesWithHttpInfo) | **GET** /v2/companies | List Companies |
| [**updateCompany**](CompanyApi.md#updateCompany) | **PATCH** /v2/companies/{company_id} | Update a Company |
| [**updateCompanyWithHttpInfo**](CompanyApi.md#updateCompanyWithHttpInfo) | **PATCH** /v2/companies/{company_id} | Update a Company |



## createCompany

> Company createCompany(createCompanyRequest)

Create a Company

Creates a new Company.&#x60;country_code&#x60; is required if &#x60;region&#x60; is specified.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CompanyApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CompanyApi apiInstance = new CompanyApi(defaultClient);
        CreateCompanyRequest createCompanyRequest = new CreateCompanyRequest(); // CreateCompanyRequest | company
        try {
            Company result = apiInstance.createCompany(createCompanyRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CompanyApi#createCompany");
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
| **createCompanyRequest** | [**CreateCompanyRequest**](CreateCompanyRequest.md)| company | [optional] |

### Return type

[**Company**](Company.md)


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

## createCompanyWithHttpInfo

> ApiResponse<Company> createCompany createCompanyWithHttpInfo(createCompanyRequest)

Create a Company

Creates a new Company.&#x60;country_code&#x60; is required if &#x60;region&#x60; is specified.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CompanyApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CompanyApi apiInstance = new CompanyApi(defaultClient);
        CreateCompanyRequest createCompanyRequest = new CreateCompanyRequest(); // CreateCompanyRequest | company
        try {
            ApiResponse<Company> response = apiInstance.createCompanyWithHttpInfo(createCompanyRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompanyApi#createCompany");
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
| **createCompanyRequest** | [**CreateCompanyRequest**](CreateCompanyRequest.md)| company | [optional] |

### Return type

ApiResponse<[**Company**](Company.md)>


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


## deleteCompany

> void deleteCompany(companyId)

Delete a Company

Deletes the specified Company

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CompanyApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CompanyApi apiInstance = new CompanyApi(defaultClient);
        String companyId = "companyId_example"; // String | company_id
        try {
            apiInstance.deleteCompany(companyId);
        } catch (ApiException e) {
            System.err.println("Exception when calling CompanyApi#deleteCompany");
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
| **companyId** | **String**| company_id | |

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

## deleteCompanyWithHttpInfo

> ApiResponse<Void> deleteCompany deleteCompanyWithHttpInfo(companyId)

Delete a Company

Deletes the specified Company

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CompanyApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CompanyApi apiInstance = new CompanyApi(defaultClient);
        String companyId = "companyId_example"; // String | company_id
        try {
            ApiResponse<Void> response = apiInstance.deleteCompanyWithHttpInfo(companyId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompanyApi#deleteCompany");
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
| **companyId** | **String**| company_id | |

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


## getCompany

> Company getCompany(companyId, fields)

Retrieve a Company

Retrieves a single Company

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CompanyApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CompanyApi apiInstance = new CompanyApi(defaultClient);
        String companyId = "companyId_example"; // String | company_id
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of Company properties to include in the response. (Available fields are: `company_name`, `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`)
        try {
            Company result = apiInstance.getCompany(companyId, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CompanyApi#getCompany");
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
| **companyId** | **String**| company_id | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;) | [optional] |

### Return type

[**Company**](Company.md)


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

## getCompanyWithHttpInfo

> ApiResponse<Company> getCompany getCompanyWithHttpInfo(companyId, fields)

Retrieve a Company

Retrieves a single Company

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CompanyApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CompanyApi apiInstance = new CompanyApi(defaultClient);
        String companyId = "companyId_example"; // String | company_id
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of Company properties to include in the response. (Available fields are: `company_name`, `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`)
        try {
            ApiResponse<Company> response = apiInstance.getCompanyWithHttpInfo(companyId, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompanyApi#getCompany");
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
| **companyId** | **String**| company_id | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;) | [optional] |

### Return type

ApiResponse<[**Company**](Company.md)>


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


## listCompanies

> ListCompaniesResponse listCompanies(fields, filter, orderBy, pageSize, pageToken)

List Companies

Retrieves a list of all Companies.&lt;br/&gt;&lt;br/&gt;If the feature flag is &lt;b&gt;enabled&lt;/b&gt;, the endpoint returns the &lt;span style&#x3D;&#39;color:red&#39;&gt;legacy&lt;/span&gt; non-paginated list of all companies.&lt;br/&gt;If the flag is &lt;b&gt;disabled&lt;/b&gt;, it returns a paginated list using the v2-compliant implementation.&lt;br/&gt;&lt;br/&gt;&lt;span style&#x3D;&#39;color:red&#39;&gt;Deprecated as of v2&lt;/span&gt;: The legacy behavior will be removed after the transition period.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CompanyApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CompanyApi apiInstance = new CompanyApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number`, `email_address`, `phone_number`, `update_time`, `create_time` and `custom_fields` aren't included, by default.)
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `company_name` - (String) `email` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=company_name%3D%3DCompany` - `filter=email%3D%3Dtest@gmail.com` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `name` - `email`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListCompaniesResponse result = apiInstance.listCompanies(fields, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CompanyApi#listCompanies");
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
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren&#39;t included, by default.) | [optional] |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListCompaniesResponse**](ListCompaniesResponse.md)


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

## listCompaniesWithHttpInfo

> ApiResponse<ListCompaniesResponse> listCompanies listCompaniesWithHttpInfo(fields, filter, orderBy, pageSize, pageToken)

List Companies

Retrieves a list of all Companies.&lt;br/&gt;&lt;br/&gt;If the feature flag is &lt;b&gt;enabled&lt;/b&gt;, the endpoint returns the &lt;span style&#x3D;&#39;color:red&#39;&gt;legacy&lt;/span&gt; non-paginated list of all companies.&lt;br/&gt;If the flag is &lt;b&gt;disabled&lt;/b&gt;, it returns a paginated list using the v2-compliant implementation.&lt;br/&gt;&lt;br/&gt;&lt;span style&#x3D;&#39;color:red&#39;&gt;Deprecated as of v2&lt;/span&gt;: The legacy behavior will be removed after the transition period.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CompanyApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CompanyApi apiInstance = new CompanyApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number`, `email_address`, `phone_number`, `update_time`, `create_time` and `custom_fields` aren't included, by default.)
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `company_name` - (String) `email` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=company_name%3D%3DCompany` - `filter=email%3D%3Dtest@gmail.com` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `name` - `email`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListCompaniesResponse> response = apiInstance.listCompaniesWithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompanyApi#listCompanies");
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
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren&#39;t included, by default.) | [optional] |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListCompaniesResponse**](ListCompaniesResponse.md)>


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


## updateCompany

> Company updateCompany(companyId, updateMask, updateCompanyRequest)

Update a Company

Updates a Company with the values provided in the request

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CompanyApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CompanyApi apiInstance = new CompanyApi(defaultClient);
        String companyId = "companyId_example"; // String | company_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        UpdateCompanyRequest updateCompanyRequest = new UpdateCompanyRequest(); // UpdateCompanyRequest | company
        try {
            Company result = apiInstance.updateCompany(companyId, updateMask, updateCompanyRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CompanyApi#updateCompany");
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
| **companyId** | **String**| company_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: id, company_name, address, phone_number, fax_number, email_address, notes, website, custom_fields, create_time, update_time] |
| **updateCompanyRequest** | [**UpdateCompanyRequest**](UpdateCompanyRequest.md)| company | [optional] |

### Return type

[**Company**](Company.md)


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

## updateCompanyWithHttpInfo

> ApiResponse<Company> updateCompany updateCompanyWithHttpInfo(companyId, updateMask, updateCompanyRequest)

Update a Company

Updates a Company with the values provided in the request

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.CompanyApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        CompanyApi apiInstance = new CompanyApi(defaultClient);
        String companyId = "companyId_example"; // String | company_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        UpdateCompanyRequest updateCompanyRequest = new UpdateCompanyRequest(); // UpdateCompanyRequest | company
        try {
            ApiResponse<Company> response = apiInstance.updateCompanyWithHttpInfo(companyId, updateMask, updateCompanyRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompanyApi#updateCompany");
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
| **companyId** | **String**| company_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: id, company_name, address, phone_number, fax_number, email_address, notes, website, custom_fields, create_time, update_time] |
| **updateCompanyRequest** | [**UpdateCompanyRequest**](UpdateCompanyRequest.md)| company | [optional] |

### Return type

ApiResponse<[**Company**](Company.md)>


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

