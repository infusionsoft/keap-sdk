# AffiliateApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAffiliate**](AffiliateApi.md#addAffiliate) | **POST** /v2/affiliates | Create an Affiliate |
| [**addAffiliateWithHttpInfo**](AffiliateApi.md#addAffiliateWithHttpInfo) | **POST** /v2/affiliates | Create an Affiliate |
| [**addAffiliateToProgram**](AffiliateApi.md#addAffiliateToProgram) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**addAffiliateToProgramWithHttpInfo**](AffiliateApi.md#addAffiliateToProgramWithHttpInfo) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**addCommissionProgram**](AffiliateApi.md#addCommissionProgram) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**addCommissionProgramWithHttpInfo**](AffiliateApi.md#addCommissionProgramWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**assignProductCommissionProgram**](AffiliateApi.md#assignProductCommissionProgram) | **POST** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Assign a Product Commission Program |
| [**assignProductCommissionProgramWithHttpInfo**](AffiliateApi.md#assignProductCommissionProgramWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Assign a Product Commission Program |
| [**assignSubscriptionCommissionProgram**](AffiliateApi.md#assignSubscriptionCommissionProgram) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Assign a Subscription Commission Program |
| [**assignSubscriptionCommissionProgramWithHttpInfo**](AffiliateApi.md#assignSubscriptionCommissionProgramWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Assign a Subscription Commission Program |
| [**createDefaultCommissionProgram**](AffiliateApi.md#createDefaultCommissionProgram) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Create a Default Commission Program |
| [**createDefaultCommissionProgramWithHttpInfo**](AffiliateApi.md#createDefaultCommissionProgramWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Create a Default Commission Program |
| [**createRedirectLink**](AffiliateApi.md#createRedirectLink) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**createRedirectLinkWithHttpInfo**](AffiliateApi.md#createRedirectLinkWithHttpInfo) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**deleteAffiliate**](AffiliateApi.md#deleteAffiliate) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**deleteAffiliateWithHttpInfo**](AffiliateApi.md#deleteAffiliateWithHttpInfo) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**deleteAffiliateCommissionProgram**](AffiliateApi.md#deleteAffiliateCommissionProgram) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**deleteAffiliateCommissionProgramWithHttpInfo**](AffiliateApi.md#deleteAffiliateCommissionProgramWithHttpInfo) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**deleteRedirectLink**](AffiliateApi.md#deleteRedirectLink) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**deleteRedirectLinkWithHttpInfo**](AffiliateApi.md#deleteRedirectLinkWithHttpInfo) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**getAffiliate**](AffiliateApi.md#getAffiliate) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**getAffiliateWithHttpInfo**](AffiliateApi.md#getAffiliateWithHttpInfo) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**getAffiliateCommissionTotal**](AffiliateApi.md#getAffiliateCommissionTotal) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**getAffiliateCommissionTotalWithHttpInfo**](AffiliateApi.md#getAffiliateCommissionTotalWithHttpInfo) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**getAffiliateCommissions**](AffiliateApi.md#getAffiliateCommissions) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**getAffiliateCommissionsWithHttpInfo**](AffiliateApi.md#getAffiliateCommissionsWithHttpInfo) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**getCommissionProgram**](AffiliateApi.md#getCommissionProgram) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**getCommissionProgramWithHttpInfo**](AffiliateApi.md#getCommissionProgramWithHttpInfo) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**getRedirectLink**](AffiliateApi.md#getRedirectLink) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**getRedirectLinkWithHttpInfo**](AffiliateApi.md#getRedirectLinkWithHttpInfo) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**listAffiliateCommissionPrograms**](AffiliateApi.md#listAffiliateCommissionPrograms) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**listAffiliateCommissionProgramsWithHttpInfo**](AffiliateApi.md#listAffiliateCommissionProgramsWithHttpInfo) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**listAffiliateLinks**](AffiliateApi.md#listAffiliateLinks) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**listAffiliateLinksWithHttpInfo**](AffiliateApi.md#listAffiliateLinksWithHttpInfo) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**listSummaries**](AffiliateApi.md#listSummaries) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**listSummariesWithHttpInfo**](AffiliateApi.md#listSummariesWithHttpInfo) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**removeAffiliateFromProgram**](AffiliateApi.md#removeAffiliateFromProgram) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**removeAffiliateFromProgramWithHttpInfo**](AffiliateApi.md#removeAffiliateFromProgramWithHttpInfo) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**removeProductCommissionFromCommissions**](AffiliateApi.md#removeProductCommissionFromCommissions) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program |
| [**removeProductCommissionFromCommissionsWithHttpInfo**](AffiliateApi.md#removeProductCommissionFromCommissionsWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program |
| [**removeSubscriptionPlanCommissionFromCommissions**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissions) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**updateAffiliate**](AffiliateApi.md#updateAffiliate) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**updateAffiliateWithHttpInfo**](AffiliateApi.md#updateAffiliateWithHttpInfo) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**updateCommissionProgram**](AffiliateApi.md#updateCommissionProgram) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program |
| [**updateCommissionProgramWithHttpInfo**](AffiliateApi.md#updateCommissionProgramWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program |
| [**updateDefaultCommissionProgram**](AffiliateApi.md#updateDefaultCommissionProgram) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**updateDefaultCommissionProgramWithHttpInfo**](AffiliateApi.md#updateDefaultCommissionProgramWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**updateProductCommissionProgram**](AffiliateApi.md#updateProductCommissionProgram) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**updateProductCommissionProgramWithHttpInfo**](AffiliateApi.md#updateProductCommissionProgramWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**updateRedirectLink**](AffiliateApi.md#updateRedirectLink) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**updateRedirectLinkWithHttpInfo**](AffiliateApi.md#updateRedirectLinkWithHttpInfo) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**updateSubscriptionCommissionProgram**](AffiliateApi.md#updateSubscriptionCommissionProgram) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |
| [**updateSubscriptionCommissionProgramWithHttpInfo**](AffiliateApi.md#updateSubscriptionCommissionProgramWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |



## addAffiliate

> RestAffiliate addAffiliate(createAffiliateRequest)

Create an Affiliate

Creates a single Affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateAffiliateRequest createAffiliateRequest = new CreateAffiliateRequest(); // CreateAffiliateRequest | Affiliate request to insert
        try {
            RestAffiliate result = apiInstance.addAffiliate(createAffiliateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliate");
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
| **createAffiliateRequest** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)| Affiliate request to insert | [optional] |

### Return type

[**RestAffiliate**](RestAffiliate.md)


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

## addAffiliateWithHttpInfo

> ApiResponse<RestAffiliate> addAffiliate addAffiliateWithHttpInfo(createAffiliateRequest)

Create an Affiliate

Creates a single Affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateAffiliateRequest createAffiliateRequest = new CreateAffiliateRequest(); // CreateAffiliateRequest | Affiliate request to insert
        try {
            ApiResponse<RestAffiliate> response = apiInstance.addAffiliateWithHttpInfo(createAffiliateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliate");
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
| **createAffiliateRequest** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)| Affiliate request to insert | [optional] |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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


## addAffiliateToProgram

> void addAffiliateToProgram(id, affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        AffiliateAddToProgramRequest affiliateAddToProgramRequest = new AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | affiliateAddToProgramRequest
        try {
            apiInstance.addAffiliateToProgram(id, affiliateAddToProgramRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateToProgram");
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
| **id** | **String**| id | |
| **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)| affiliateAddToProgramRequest | |

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

## addAffiliateToProgramWithHttpInfo

> ApiResponse<Void> addAffiliateToProgram addAffiliateToProgramWithHttpInfo(id, affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        AffiliateAddToProgramRequest affiliateAddToProgramRequest = new AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | affiliateAddToProgramRequest
        try {
            ApiResponse<Void> response = apiInstance.addAffiliateToProgramWithHttpInfo(id, affiliateAddToProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateToProgram");
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
| **id** | **String**| id | |
| **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)| affiliateAddToProgramRequest | |

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


## addCommissionProgram

> AffiliateCommissionProgramResponse addCommissionProgram(createCommissionProgramRequest)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateCommissionProgramRequest createCommissionProgramRequest = new CreateCommissionProgramRequest(); // CreateCommissionProgramRequest | Commission Program to insert
        try {
            AffiliateCommissionProgramResponse result = apiInstance.addCommissionProgram(createCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addCommissionProgram");
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
| **createCommissionProgramRequest** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)| Commission Program to insert | [optional] |

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)


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

## addCommissionProgramWithHttpInfo

> ApiResponse<AffiliateCommissionProgramResponse> addCommissionProgram addCommissionProgramWithHttpInfo(createCommissionProgramRequest)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateCommissionProgramRequest createCommissionProgramRequest = new CreateCommissionProgramRequest(); // CreateCommissionProgramRequest | Commission Program to insert
        try {
            ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.addCommissionProgramWithHttpInfo(createCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addCommissionProgram");
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
| **createCommissionProgramRequest** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)| Commission Program to insert | [optional] |

### Return type

ApiResponse<[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)>


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


## assignProductCommissionProgram

> ProductCommissionProgram assignProductCommissionProgram(commissionProgramId, createProductCommissionProgramRequest)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateProductCommissionProgramRequest createProductCommissionProgramRequest = new CreateProductCommissionProgramRequest(); // CreateProductCommissionProgramRequest | Product Commission Program
        try {
            ProductCommissionProgram result = apiInstance.assignProductCommissionProgram(commissionProgramId, createProductCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignProductCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **createProductCommissionProgramRequest** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)| Product Commission Program | [optional] |

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)


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

## assignProductCommissionProgramWithHttpInfo

> ApiResponse<ProductCommissionProgram> assignProductCommissionProgram assignProductCommissionProgramWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateProductCommissionProgramRequest createProductCommissionProgramRequest = new CreateProductCommissionProgramRequest(); // CreateProductCommissionProgramRequest | Product Commission Program
        try {
            ApiResponse<ProductCommissionProgram> response = apiInstance.assignProductCommissionProgramWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignProductCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **createProductCommissionProgramRequest** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)| Product Commission Program | [optional] |

### Return type

ApiResponse<[**ProductCommissionProgram**](ProductCommissionProgram.md)>


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


## assignSubscriptionCommissionProgram

> SubscriptionCommissionProgram assignSubscriptionCommissionProgram(commissionProgramId, createSubscriptionCommissionProgramRequest)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateSubscriptionCommissionProgramRequest createSubscriptionCommissionProgramRequest = new CreateSubscriptionCommissionProgramRequest(); // CreateSubscriptionCommissionProgramRequest | Subscription Commission Program
        try {
            SubscriptionCommissionProgram result = apiInstance.assignSubscriptionCommissionProgram(commissionProgramId, createSubscriptionCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignSubscriptionCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **createSubscriptionCommissionProgramRequest** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)| Subscription Commission Program | [optional] |

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)


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

## assignSubscriptionCommissionProgramWithHttpInfo

> ApiResponse<SubscriptionCommissionProgram> assignSubscriptionCommissionProgram assignSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateSubscriptionCommissionProgramRequest createSubscriptionCommissionProgramRequest = new CreateSubscriptionCommissionProgramRequest(); // CreateSubscriptionCommissionProgramRequest | Subscription Commission Program
        try {
            ApiResponse<SubscriptionCommissionProgram> response = apiInstance.assignSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignSubscriptionCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **createSubscriptionCommissionProgramRequest** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)| Subscription Commission Program | [optional] |

### Return type

ApiResponse<[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)>


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


## createDefaultCommissionProgram

> SetDefaultCommissionProgramResponse createDefaultCommissionProgram(commissionProgramId, createDefaultCommissionProgramRequest)

Create a Default Commission Program

Creates a Default Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateDefaultCommissionProgramRequest createDefaultCommissionProgramRequest = new CreateDefaultCommissionProgramRequest(); // CreateDefaultCommissionProgramRequest | Values of the Default Commission Program
        try {
            SetDefaultCommissionProgramResponse result = apiInstance.createDefaultCommissionProgram(commissionProgramId, createDefaultCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createDefaultCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)| Values of the Default Commission Program | [optional] |

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)


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

## createDefaultCommissionProgramWithHttpInfo

> ApiResponse<SetDefaultCommissionProgramResponse> createDefaultCommissionProgram createDefaultCommissionProgramWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest)

Create a Default Commission Program

Creates a Default Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateDefaultCommissionProgramRequest createDefaultCommissionProgramRequest = new CreateDefaultCommissionProgramRequest(); // CreateDefaultCommissionProgramRequest | Values of the Default Commission Program
        try {
            ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.createDefaultCommissionProgramWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createDefaultCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)| Values of the Default Commission Program | [optional] |

### Return type

ApiResponse<[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)>


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


## createRedirectLink

> AffiliateLink createRedirectLink(createOrUpdateAffiliateLinkRequest)

Create an Affiliate Link

Creates a single Affiliate Link

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest = new CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | request
        try {
            AffiliateLink result = apiInstance.createRedirectLink(createOrUpdateAffiliateLinkRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createRedirectLink");
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
| **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)| request | |

### Return type

[**AffiliateLink**](AffiliateLink.md)


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

## createRedirectLinkWithHttpInfo

> ApiResponse<AffiliateLink> createRedirectLink createRedirectLinkWithHttpInfo(createOrUpdateAffiliateLinkRequest)

Create an Affiliate Link

Creates a single Affiliate Link

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest = new CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | request
        try {
            ApiResponse<AffiliateLink> response = apiInstance.createRedirectLinkWithHttpInfo(createOrUpdateAffiliateLinkRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createRedirectLink");
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
| **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)| request | |

### Return type

ApiResponse<[**AffiliateLink**](AffiliateLink.md)>


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


## deleteAffiliate

> void deleteAffiliate(id)

Delete Affiliate

Deletes the specified Affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            apiInstance.deleteAffiliate(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliate");
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
| **id** | **String**| id | |

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

## deleteAffiliateWithHttpInfo

> ApiResponse<Void> deleteAffiliate deleteAffiliateWithHttpInfo(id)

Delete Affiliate

Deletes the specified Affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<Void> response = apiInstance.deleteAffiliateWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliate");
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
| **id** | **String**| id | |

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


## deleteAffiliateCommissionProgram

> void deleteAffiliateCommissionProgram(commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        try {
            apiInstance.deleteAffiliateCommissionProgram(commissionProgramId);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |

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

## deleteAffiliateCommissionProgramWithHttpInfo

> ApiResponse<Void> deleteAffiliateCommissionProgram deleteAffiliateCommissionProgramWithHttpInfo(commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        try {
            ApiResponse<Void> response = apiInstance.deleteAffiliateCommissionProgramWithHttpInfo(commissionProgramId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |

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


## deleteRedirectLink

> void deleteRedirectLink(redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        try {
            apiInstance.deleteRedirectLink(redirectId);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteRedirectLink");
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
| **redirectId** | **String**| redirect_id | |

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

## deleteRedirectLinkWithHttpInfo

> ApiResponse<Void> deleteRedirectLink deleteRedirectLinkWithHttpInfo(redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        try {
            ApiResponse<Void> response = apiInstance.deleteRedirectLinkWithHttpInfo(redirectId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteRedirectLink");
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
| **redirectId** | **String**| redirect_id | |

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


## getAffiliate

> RestAffiliate getAffiliate(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            RestAffiliate result = apiInstance.getAffiliate(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliate");
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
| **id** | **String**| id | |

### Return type

[**RestAffiliate**](RestAffiliate.md)


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

## getAffiliateWithHttpInfo

> ApiResponse<RestAffiliate> getAffiliate getAffiliateWithHttpInfo(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<RestAffiliate> response = apiInstance.getAffiliateWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliate");
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
| **id** | **String**| id | |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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


## getAffiliateCommissionTotal

> AffiliateCommissionEarned getAffiliateCommissionTotal(affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | affiliate_id
        try {
            AffiliateCommissionEarned result = apiInstance.getAffiliateCommissionTotal(affiliateId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissionTotal");
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
| **affiliateId** | **String**| affiliate_id | |

### Return type

[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)


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

## getAffiliateCommissionTotalWithHttpInfo

> ApiResponse<AffiliateCommissionEarned> getAffiliateCommissionTotal getAffiliateCommissionTotalWithHttpInfo(affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | affiliate_id
        try {
            ApiResponse<AffiliateCommissionEarned> response = apiInstance.getAffiliateCommissionTotalWithHttpInfo(affiliateId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissionTotal");
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
| **affiliateId** | **String**| affiliate_id | |

### Return type

ApiResponse<[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)>


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


## getAffiliateCommissions

> ListAffiliateCommissionsResponse getAffiliateCommissions(affiliateId, filter, orderBy, pageSize, pageToken)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate&#39;s Commissions and Clawbacks

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | affiliate_id
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `affiliateId` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliateId%3D%3D123` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `invoice_id` - `affowed_id` - `date_earned`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListAffiliateCommissionsResponse result = apiInstance.getAffiliateCommissions(affiliateId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissions");
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
| **affiliateId** | **String**| affiliate_id | |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;affiliateId&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliateId%3D%3D123&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;affowed_id&#x60; - &#x60;date_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliateCommissionsResponse**](ListAffiliateCommissionsResponse.md)


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

## getAffiliateCommissionsWithHttpInfo

> ApiResponse<ListAffiliateCommissionsResponse> getAffiliateCommissions getAffiliateCommissionsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate&#39;s Commissions and Clawbacks

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | affiliate_id
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `affiliateId` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliateId%3D%3D123` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `invoice_id` - `affowed_id` - `date_earned`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListAffiliateCommissionsResponse> response = apiInstance.getAffiliateCommissionsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissions");
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
| **affiliateId** | **String**| affiliate_id | |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;affiliateId&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliateId%3D%3D123&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;affowed_id&#x60; - &#x60;date_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliateCommissionsResponse**](ListAffiliateCommissionsResponse.md)>


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


## getCommissionProgram

> AffiliateProgramV2 getCommissionProgram(commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        try {
            AffiliateProgramV2 result = apiInstance.getCommissionProgram(commissionProgramId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |

### Return type

[**AffiliateProgramV2**](AffiliateProgramV2.md)


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

## getCommissionProgramWithHttpInfo

> ApiResponse<AffiliateProgramV2> getCommissionProgram getCommissionProgramWithHttpInfo(commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        try {
            ApiResponse<AffiliateProgramV2> response = apiInstance.getCommissionProgramWithHttpInfo(commissionProgramId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |

### Return type

ApiResponse<[**AffiliateProgramV2**](AffiliateProgramV2.md)>


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


## getRedirectLink

> AffiliateLink getRedirectLink(redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        try {
            AffiliateLink result = apiInstance.getRedirectLink(redirectId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getRedirectLink");
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
| **redirectId** | **String**| redirect_id | |

### Return type

[**AffiliateLink**](AffiliateLink.md)


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

## getRedirectLinkWithHttpInfo

> ApiResponse<AffiliateLink> getRedirectLink getRedirectLinkWithHttpInfo(redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        try {
            ApiResponse<AffiliateLink> response = apiInstance.getRedirectLinkWithHttpInfo(redirectId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getRedirectLink");
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
| **redirectId** | **String**| redirect_id | |

### Return type

ApiResponse<[**AffiliateLink**](AffiliateLink.md)>


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


## listAffiliateCommissionPrograms

> ListAffiliateCommissionProgramsResponse listAffiliateCommissionPrograms(filter, orderBy, pageSize, pageToken)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListAffiliateCommissionProgramsResponse result = apiInstance.listAffiliateCommissionPrograms(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateCommissionPrograms");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliateCommissionProgramsResponse**](ListAffiliateCommissionProgramsResponse.md)


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

## listAffiliateCommissionProgramsWithHttpInfo

> ApiResponse<ListAffiliateCommissionProgramsResponse> listAffiliateCommissionPrograms listAffiliateCommissionProgramsWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListAffiliateCommissionProgramsResponse> response = apiInstance.listAffiliateCommissionProgramsWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateCommissionPrograms");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliateCommissionProgramsResponse**](ListAffiliateCommissionProgramsResponse.md)>


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


## listAffiliateLinks

> ListAffiliateLinksResponse listAffiliateLinks(filter, orderBy, pageSize, pageToken)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListAffiliateLinksResponse result = apiInstance.listAffiliateLinks(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateLinks");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliateLinksResponse**](ListAffiliateLinksResponse.md)


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

## listAffiliateLinksWithHttpInfo

> ApiResponse<ListAffiliateLinksResponse> listAffiliateLinks listAffiliateLinksWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListAffiliateLinksResponse> response = apiInstance.listAffiliateLinksWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateLinks");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliateLinksResponse**](ListAffiliateLinksResponse.md)>


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


## listSummaries

> ListAffiliateSummariesResponse listSummaries(filter, orderBy, pageSize, pageToken)

List Affiliate Summaries

Retrieves a list of Affiliate Summaries

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `affiliate_id` - `amount_earned` - `balance` - `clawbacks`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListAffiliateSummariesResponse result = apiInstance.listSummaries(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listSummaries");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)


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

## listSummariesWithHttpInfo

> ApiResponse<ListAffiliateSummariesResponse> listSummaries listSummariesWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Affiliate Summaries

Retrieves a list of Affiliate Summaries

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `affiliate_id` - `amount_earned` - `balance` - `clawbacks`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListAffiliateSummariesResponse> response = apiInstance.listSummariesWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listSummaries");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)>


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


## removeAffiliateFromProgram

> void removeAffiliateFromProgram(id, affiliateRemoveFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        AffiliateRemoveFromProgramRequest affiliateRemoveFromProgramRequest = new AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | removeFromProgramRequest
        try {
            apiInstance.removeAffiliateFromProgram(id, affiliateRemoveFromProgramRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeAffiliateFromProgram");
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
| **id** | **String**| id | |
| **affiliateRemoveFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)| removeFromProgramRequest | |

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

## removeAffiliateFromProgramWithHttpInfo

> ApiResponse<Void> removeAffiliateFromProgram removeAffiliateFromProgramWithHttpInfo(id, affiliateRemoveFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        AffiliateRemoveFromProgramRequest affiliateRemoveFromProgramRequest = new AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | removeFromProgramRequest
        try {
            ApiResponse<Void> response = apiInstance.removeAffiliateFromProgramWithHttpInfo(id, affiliateRemoveFromProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeAffiliateFromProgram");
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
| **id** | **String**| id | |
| **affiliateRemoveFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)| removeFromProgramRequest | |

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


## removeProductCommissionFromCommissions

> void removeProductCommissionFromCommissions(commissionId, deleteProgramCommissionRequest)

Remove a Product from a Commission Program

Removes a Product from a Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionId = "commissionId_example"; // String | commission_id
        DeleteProgramCommissionRequest deleteProgramCommissionRequest = new DeleteProgramCommissionRequest(); // DeleteProgramCommissionRequest | deleteProgramCommissionRequest
        try {
            apiInstance.removeProductCommissionFromCommissions(commissionId, deleteProgramCommissionRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeProductCommissionFromCommissions");
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
| **commissionId** | **String**| commission_id | |
| **deleteProgramCommissionRequest** | [**DeleteProgramCommissionRequest**](DeleteProgramCommissionRequest.md)| deleteProgramCommissionRequest | |

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

## removeProductCommissionFromCommissionsWithHttpInfo

> ApiResponse<Void> removeProductCommissionFromCommissions removeProductCommissionFromCommissionsWithHttpInfo(commissionId, deleteProgramCommissionRequest)

Remove a Product from a Commission Program

Removes a Product from a Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionId = "commissionId_example"; // String | commission_id
        DeleteProgramCommissionRequest deleteProgramCommissionRequest = new DeleteProgramCommissionRequest(); // DeleteProgramCommissionRequest | deleteProgramCommissionRequest
        try {
            ApiResponse<Void> response = apiInstance.removeProductCommissionFromCommissionsWithHttpInfo(commissionId, deleteProgramCommissionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeProductCommissionFromCommissions");
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
| **commissionId** | **String**| commission_id | |
| **deleteProgramCommissionRequest** | [**DeleteProgramCommissionRequest**](DeleteProgramCommissionRequest.md)| deleteProgramCommissionRequest | |

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


## removeSubscriptionPlanCommissionFromCommissions

> void removeSubscriptionPlanCommissionFromCommissions(commissionId, deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionId = "commissionId_example"; // String | commission_id
        DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest = new DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest
        try {
            apiInstance.removeSubscriptionPlanCommissionFromCommissions(commissionId, deleteSubscriptionPlanCommissionRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeSubscriptionPlanCommissionFromCommissions");
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
| **commissionId** | **String**| commission_id | |
| **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)| deleteSubscriptionPlanCommissionRequest | |

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

## removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo

> ApiResponse<Void> removeSubscriptionPlanCommissionFromCommissions removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionId = "commissionId_example"; // String | commission_id
        DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest = new DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest
        try {
            ApiResponse<Void> response = apiInstance.removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeSubscriptionPlanCommissionFromCommissions");
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
| **commissionId** | **String**| commission_id | |
| **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)| deleteSubscriptionPlanCommissionRequest | |

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


## updateAffiliate

> RestAffiliate updateAffiliate(id, updateAffiliateRequest)

Update an Affiliate

Updates a single Affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        UpdateAffiliateRequest updateAffiliateRequest = new UpdateAffiliateRequest(); // UpdateAffiliateRequest | Request to update an affiliate
        try {
            RestAffiliate result = apiInstance.updateAffiliate(id, updateAffiliateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliate");
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
| **id** | **String**| id | |
| **updateAffiliateRequest** | [**UpdateAffiliateRequest**](UpdateAffiliateRequest.md)| Request to update an affiliate | [optional] |

### Return type

[**RestAffiliate**](RestAffiliate.md)


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

## updateAffiliateWithHttpInfo

> ApiResponse<RestAffiliate> updateAffiliate updateAffiliateWithHttpInfo(id, updateAffiliateRequest)

Update an Affiliate

Updates a single Affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        UpdateAffiliateRequest updateAffiliateRequest = new UpdateAffiliateRequest(); // UpdateAffiliateRequest | Request to update an affiliate
        try {
            ApiResponse<RestAffiliate> response = apiInstance.updateAffiliateWithHttpInfo(id, updateAffiliateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliate");
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
| **id** | **String**| id | |
| **updateAffiliateRequest** | [**UpdateAffiliateRequest**](UpdateAffiliateRequest.md)| Request to update an affiliate | [optional] |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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


## updateCommissionProgram

> AffiliateCommissionProgramResponse updateCommissionProgram(commissionProgramId, updateCommissionProgramRequest, updateMask)

Update an Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        UpdateCommissionProgramRequest updateCommissionProgramRequest = new UpdateCommissionProgramRequest(); // UpdateCommissionProgramRequest | updateCommissionProgramRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            AffiliateCommissionProgramResponse result = apiInstance.updateCommissionProgram(commissionProgramId, updateCommissionProgramRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateCommissionProgramRequest** | [**UpdateCommissionProgramRequest**](UpdateCommissionProgramRequest.md)| updateCommissionProgramRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, notes, priority] |

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)


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

## updateCommissionProgramWithHttpInfo

> ApiResponse<AffiliateCommissionProgramResponse> updateCommissionProgram updateCommissionProgramWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask)

Update an Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        UpdateCommissionProgramRequest updateCommissionProgramRequest = new UpdateCommissionProgramRequest(); // UpdateCommissionProgramRequest | updateCommissionProgramRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.updateCommissionProgramWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateCommissionProgramRequest** | [**UpdateCommissionProgramRequest**](UpdateCommissionProgramRequest.md)| updateCommissionProgramRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, notes, priority] |

### Return type

ApiResponse<[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)>


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


## updateDefaultCommissionProgram

> SetDefaultCommissionProgramResponse updateDefaultCommissionProgram(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest)

Update a Default Commission Program

Updates a Default Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        UpdateDefaultCommissionProgramRequest updateDefaultCommissionProgramRequest = new UpdateDefaultCommissionProgramRequest(); // UpdateDefaultCommissionProgramRequest | Values of the default Commission Program
        try {
            SetDefaultCommissionProgramResponse result = apiInstance.updateDefaultCommissionProgram(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateDefaultCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **updateDefaultCommissionProgramRequest** | [**UpdateDefaultCommissionProgramRequest**](UpdateDefaultCommissionProgramRequest.md)| Values of the default Commission Program | [optional] |

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)


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

## updateDefaultCommissionProgramWithHttpInfo

> ApiResponse<SetDefaultCommissionProgramResponse> updateDefaultCommissionProgram updateDefaultCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest)

Update a Default Commission Program

Updates a Default Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        UpdateDefaultCommissionProgramRequest updateDefaultCommissionProgramRequest = new UpdateDefaultCommissionProgramRequest(); // UpdateDefaultCommissionProgramRequest | Values of the default Commission Program
        try {
            ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.updateDefaultCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateDefaultCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **updateDefaultCommissionProgramRequest** | [**UpdateDefaultCommissionProgramRequest**](UpdateDefaultCommissionProgramRequest.md)| Values of the default Commission Program | [optional] |

### Return type

ApiResponse<[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)>


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


## updateProductCommissionProgram

> ProductCommissionProgram updateProductCommissionProgram(commissionProgramId, updateMask, updateProductCommissionProgramRequest)

Update a Product Commission Program

Updates a Product Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        UpdateProductCommissionProgramRequest updateProductCommissionProgramRequest = new UpdateProductCommissionProgramRequest(); // UpdateProductCommissionProgramRequest | Values of the product Commission Program
        try {
            ProductCommissionProgram result = apiInstance.updateProductCommissionProgram(commissionProgramId, updateMask, updateProductCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateProductCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **updateProductCommissionProgramRequest** | [**UpdateProductCommissionProgramRequest**](UpdateProductCommissionProgramRequest.md)| Values of the product Commission Program | [optional] |

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)


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

## updateProductCommissionProgramWithHttpInfo

> ApiResponse<ProductCommissionProgram> updateProductCommissionProgram updateProductCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateProductCommissionProgramRequest)

Update a Product Commission Program

Updates a Product Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        UpdateProductCommissionProgramRequest updateProductCommissionProgramRequest = new UpdateProductCommissionProgramRequest(); // UpdateProductCommissionProgramRequest | Values of the product Commission Program
        try {
            ApiResponse<ProductCommissionProgram> response = apiInstance.updateProductCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateProductCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateProductCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **updateProductCommissionProgramRequest** | [**UpdateProductCommissionProgramRequest**](UpdateProductCommissionProgramRequest.md)| Values of the product Commission Program | [optional] |

### Return type

ApiResponse<[**ProductCommissionProgram**](ProductCommissionProgram.md)>


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


## updateRedirectLink

> AffiliateLink updateRedirectLink(redirectId, createOrUpdateAffiliateLinkRequest)

Update an Affiliate Link

Updates an Affiliate Link

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest = new CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | request
        try {
            AffiliateLink result = apiInstance.updateRedirectLink(redirectId, createOrUpdateAffiliateLinkRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateRedirectLink");
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
| **redirectId** | **String**| redirect_id | |
| **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)| request | |

### Return type

[**AffiliateLink**](AffiliateLink.md)


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

## updateRedirectLinkWithHttpInfo

> ApiResponse<AffiliateLink> updateRedirectLink updateRedirectLinkWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest)

Update an Affiliate Link

Updates an Affiliate Link

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest = new CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | request
        try {
            ApiResponse<AffiliateLink> response = apiInstance.updateRedirectLinkWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateRedirectLink");
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
| **redirectId** | **String**| redirect_id | |
| **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)| request | |

### Return type

ApiResponse<[**AffiliateLink**](AffiliateLink.md)>


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


## updateSubscriptionCommissionProgram

> SubscriptionCommissionProgram updateSubscriptionCommissionProgram(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        UpdateSubscriptionCommissionProgramRequest updateSubscriptionCommissionProgramRequest = new UpdateSubscriptionCommissionProgramRequest(); // UpdateSubscriptionCommissionProgramRequest | Values of the subscription Commission Program
        try {
            SubscriptionCommissionProgram result = apiInstance.updateSubscriptionCommissionProgram(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateSubscriptionCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **updateSubscriptionCommissionProgramRequest** | [**UpdateSubscriptionCommissionProgramRequest**](UpdateSubscriptionCommissionProgramRequest.md)| Values of the subscription Commission Program | [optional] |

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)


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

## updateSubscriptionCommissionProgramWithHttpInfo

> ApiResponse<SubscriptionCommissionProgram> updateSubscriptionCommissionProgram updateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        UpdateSubscriptionCommissionProgramRequest updateSubscriptionCommissionProgramRequest = new UpdateSubscriptionCommissionProgramRequest(); // UpdateSubscriptionCommissionProgramRequest | Values of the subscription Commission Program
        try {
            ApiResponse<SubscriptionCommissionProgram> response = apiInstance.updateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateSubscriptionCommissionProgram");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **updateSubscriptionCommissionProgramRequest** | [**UpdateSubscriptionCommissionProgramRequest**](UpdateSubscriptionCommissionProgramRequest.md)| Values of the subscription Commission Program | [optional] |

### Return type

ApiResponse<[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)>


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

