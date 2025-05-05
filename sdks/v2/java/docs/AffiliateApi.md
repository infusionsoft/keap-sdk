# AffiliateApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAffiliateToProgramUsingPOST**](AffiliateApi.md#addAffiliateToProgramUsingPOST) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**addAffiliateToProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#addAffiliateToProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**addAffiliateUsingPOST**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate |
| [**addAffiliateUsingPOSTWithHttpInfo**](AffiliateApi.md#addAffiliateUsingPOSTWithHttpInfo) | **POST** /v2/affiliates | Create an Affiliate |
| [**addCommissionProgramUsingPOST**](AffiliateApi.md#addCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**addCommissionProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#addCommissionProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**assignProductCommissionProgramUsingPOST**](AffiliateApi.md#assignProductCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program |
| [**assignProductCommissionProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#assignProductCommissionProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program |
| [**assignSubscriptionCommissionProgramUsingPOST**](AffiliateApi.md#assignSubscriptionCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program |
| [**assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program |
| [**createDefaultCommissionProgramUsingPOST**](AffiliateApi.md#createDefaultCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program |
| [**createDefaultCommissionProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#createDefaultCommissionProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program |
| [**createRedirectLinkUsingPOST**](AffiliateApi.md#createRedirectLinkUsingPOST) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**createRedirectLinkUsingPOSTWithHttpInfo**](AffiliateApi.md#createRedirectLinkUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**deleteAffiliateCommissionProgramUsingDELETE**](AffiliateApi.md#deleteAffiliateCommissionProgramUsingDELETE) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo**](AffiliateApi.md#deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**deleteAffiliateUsingDELETE**](AffiliateApi.md#deleteAffiliateUsingDELETE) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**deleteAffiliateUsingDELETEWithHttpInfo**](AffiliateApi.md#deleteAffiliateUsingDELETEWithHttpInfo) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**deleteRedirectLinkUsingDELETE**](AffiliateApi.md#deleteRedirectLinkUsingDELETE) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**deleteRedirectLinkUsingDELETEWithHttpInfo**](AffiliateApi.md#deleteRedirectLinkUsingDELETEWithHttpInfo) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**getAffiliateCommissionTotalUsingGET**](AffiliateApi.md#getAffiliateCommissionTotalUsingGET) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**getAffiliateCommissionTotalUsingGETWithHttpInfo**](AffiliateApi.md#getAffiliateCommissionTotalUsingGETWithHttpInfo) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**getAffiliateCommissionsUsingGET**](AffiliateApi.md#getAffiliateCommissionsUsingGET) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**getAffiliateCommissionsUsingGETWithHttpInfo**](AffiliateApi.md#getAffiliateCommissionsUsingGETWithHttpInfo) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**getAffiliateUsingGET1**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**getAffiliateUsingGET1WithHttpInfo**](AffiliateApi.md#getAffiliateUsingGET1WithHttpInfo) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**getCommissionProgramUsingGET**](AffiliateApi.md#getCommissionProgramUsingGET) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**getCommissionProgramUsingGETWithHttpInfo**](AffiliateApi.md#getCommissionProgramUsingGETWithHttpInfo) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**getRedirectLinkUsingGET**](AffiliateApi.md#getRedirectLinkUsingGET) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**getRedirectLinkUsingGETWithHttpInfo**](AffiliateApi.md#getRedirectLinkUsingGETWithHttpInfo) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**listAffiliateCommissionProgramsUsingGET**](AffiliateApi.md#listAffiliateCommissionProgramsUsingGET) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**listAffiliateCommissionProgramsUsingGETWithHttpInfo**](AffiliateApi.md#listAffiliateCommissionProgramsUsingGETWithHttpInfo) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**listAffiliateLinksUsingGET**](AffiliateApi.md#listAffiliateLinksUsingGET) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**listAffiliateLinksUsingGETWithHttpInfo**](AffiliateApi.md#listAffiliateLinksUsingGETWithHttpInfo) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**listSummariesUsingGET1**](AffiliateApi.md#listSummariesUsingGET1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**listSummariesUsingGET1WithHttpInfo**](AffiliateApi.md#listSummariesUsingGET1WithHttpInfo) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**removeAffiliateFromProgramUsingPOST**](AffiliateApi.md#removeAffiliateFromProgramUsingPOST) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**removeAffiliateFromProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#removeAffiliateFromProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**removeProductCommissionFromCommissionsUsingPOST**](AffiliateApi.md#removeProductCommissionFromCommissionsUsingPOST) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program |
| [**removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo**](AffiliateApi.md#removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program |
| [**removeSubscriptionPlanCommissionFromCommissionsUsingPOST**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOST) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**updateAffiliateUsingPATCH**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**updateAffiliateUsingPATCHWithHttpInfo**](AffiliateApi.md#updateAffiliateUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**updateCommissionProgramUsingPATCH**](AffiliateApi.md#updateCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program |
| [**updateCommissionProgramUsingPATCHWithHttpInfo**](AffiliateApi.md#updateCommissionProgramUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program |
| [**updateDefaultCommissionProgramUsingPATCH**](AffiliateApi.md#updateDefaultCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**updateDefaultCommissionProgramUsingPATCHWithHttpInfo**](AffiliateApi.md#updateDefaultCommissionProgramUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**updateProductCommissionProgramUsingPATCH**](AffiliateApi.md#updateProductCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**updateProductCommissionProgramUsingPATCHWithHttpInfo**](AffiliateApi.md#updateProductCommissionProgramUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**updateRedirectLinkUsingPATCH**](AffiliateApi.md#updateRedirectLinkUsingPATCH) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**updateRedirectLinkUsingPATCHWithHttpInfo**](AffiliateApi.md#updateRedirectLinkUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**updateSubscriptionCommissionProgramUsingPATCH**](AffiliateApi.md#updateSubscriptionCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |
| [**updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo**](AffiliateApi.md#updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |



## addAffiliateToProgramUsingPOST

> void addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest)

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
            apiInstance.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateToProgramUsingPOST");
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

## addAffiliateToProgramUsingPOSTWithHttpInfo

> ApiResponse<Void> addAffiliateToProgramUsingPOST addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest)

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
            ApiResponse<Void> response = apiInstance.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateToProgramUsingPOST");
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


## addAffiliateUsingPOST

> RestAffiliate addAffiliateUsingPOST(createAffiliateRequest)

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
            RestAffiliate result = apiInstance.addAffiliateUsingPOST(createAffiliateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateUsingPOST");
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

## addAffiliateUsingPOSTWithHttpInfo

> ApiResponse<RestAffiliate> addAffiliateUsingPOST addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest)

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
            ApiResponse<RestAffiliate> response = apiInstance.addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateUsingPOST");
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


## addCommissionProgramUsingPOST

> AffiliateCommissionProgramResponse addCommissionProgramUsingPOST(createCommissionProgramRequest)

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
            AffiliateCommissionProgramResponse result = apiInstance.addCommissionProgramUsingPOST(createCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addCommissionProgramUsingPOST");
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

## addCommissionProgramUsingPOSTWithHttpInfo

> ApiResponse<AffiliateCommissionProgramResponse> addCommissionProgramUsingPOST addCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest)

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
            ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.addCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addCommissionProgramUsingPOST");
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


## assignProductCommissionProgramUsingPOST

> ProductCommissionProgram assignProductCommissionProgramUsingPOST(commissionProgramId, createProductCommissionProgramRequest)

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
            ProductCommissionProgram result = apiInstance.assignProductCommissionProgramUsingPOST(commissionProgramId, createProductCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignProductCommissionProgramUsingPOST");
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

## assignProductCommissionProgramUsingPOSTWithHttpInfo

> ApiResponse<ProductCommissionProgram> assignProductCommissionProgramUsingPOST assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest)

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
            ApiResponse<ProductCommissionProgram> response = apiInstance.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignProductCommissionProgramUsingPOST");
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


## assignSubscriptionCommissionProgramUsingPOST

> SubscriptionCommissionProgram assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, createSubscriptionCommissionProgramRequest)

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
            SubscriptionCommissionProgram result = apiInstance.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, createSubscriptionCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignSubscriptionCommissionProgramUsingPOST");
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

## assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo

> ApiResponse<SubscriptionCommissionProgram> assignSubscriptionCommissionProgramUsingPOST assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest)

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
            ApiResponse<SubscriptionCommissionProgram> response = apiInstance.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignSubscriptionCommissionProgramUsingPOST");
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


## createDefaultCommissionProgramUsingPOST

> SetDefaultCommissionProgramResponse createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest)

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
            SetDefaultCommissionProgramResponse result = apiInstance.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createDefaultCommissionProgramUsingPOST");
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

## createDefaultCommissionProgramUsingPOSTWithHttpInfo

> ApiResponse<SetDefaultCommissionProgramResponse> createDefaultCommissionProgramUsingPOST createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest)

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
            ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createDefaultCommissionProgramUsingPOST");
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


## createRedirectLinkUsingPOST

> AffiliateLink createRedirectLinkUsingPOST(createOrUpdateAffiliateLinkRequest)

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
            AffiliateLink result = apiInstance.createRedirectLinkUsingPOST(createOrUpdateAffiliateLinkRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createRedirectLinkUsingPOST");
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

## createRedirectLinkUsingPOSTWithHttpInfo

> ApiResponse<AffiliateLink> createRedirectLinkUsingPOST createRedirectLinkUsingPOSTWithHttpInfo(createOrUpdateAffiliateLinkRequest)

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
            ApiResponse<AffiliateLink> response = apiInstance.createRedirectLinkUsingPOSTWithHttpInfo(createOrUpdateAffiliateLinkRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createRedirectLinkUsingPOST");
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


## deleteAffiliateCommissionProgramUsingDELETE

> void deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId)

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
            apiInstance.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateCommissionProgramUsingDELETE");
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

## deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteAffiliateCommissionProgramUsingDELETE deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId)

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
            ApiResponse<Void> response = apiInstance.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateCommissionProgramUsingDELETE");
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


## deleteAffiliateUsingDELETE

> void deleteAffiliateUsingDELETE(id)

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
            apiInstance.deleteAffiliateUsingDELETE(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateUsingDELETE");
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

## deleteAffiliateUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteAffiliateUsingDELETE deleteAffiliateUsingDELETEWithHttpInfo(id)

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
            ApiResponse<Void> response = apiInstance.deleteAffiliateUsingDELETEWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateUsingDELETE");
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


## deleteRedirectLinkUsingDELETE

> void deleteRedirectLinkUsingDELETE(redirectId)

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
            apiInstance.deleteRedirectLinkUsingDELETE(redirectId);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteRedirectLinkUsingDELETE");
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

## deleteRedirectLinkUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteRedirectLinkUsingDELETE deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId)

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
            ApiResponse<Void> response = apiInstance.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteRedirectLinkUsingDELETE");
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


## getAffiliateCommissionTotalUsingGET

> AffiliateCommissionEarned getAffiliateCommissionTotalUsingGET(affiliateId)

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
            AffiliateCommissionEarned result = apiInstance.getAffiliateCommissionTotalUsingGET(affiliateId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissionTotalUsingGET");
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

## getAffiliateCommissionTotalUsingGETWithHttpInfo

> ApiResponse<AffiliateCommissionEarned> getAffiliateCommissionTotalUsingGET getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId)

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
            ApiResponse<AffiliateCommissionEarned> response = apiInstance.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissionTotalUsingGET");
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


## getAffiliateCommissionsUsingGET

> ListAffiliateCommissionsResponse getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken)

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
            ListAffiliateCommissionsResponse result = apiInstance.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissionsUsingGET");
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

## getAffiliateCommissionsUsingGETWithHttpInfo

> ApiResponse<ListAffiliateCommissionsResponse> getAffiliateCommissionsUsingGET getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken)

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
            ApiResponse<ListAffiliateCommissionsResponse> response = apiInstance.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissionsUsingGET");
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


## getAffiliateUsingGET1

> RestAffiliate getAffiliateUsingGET1(id)

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
            RestAffiliate result = apiInstance.getAffiliateUsingGET1(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateUsingGET1");
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

## getAffiliateUsingGET1WithHttpInfo

> ApiResponse<RestAffiliate> getAffiliateUsingGET1 getAffiliateUsingGET1WithHttpInfo(id)

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
            ApiResponse<RestAffiliate> response = apiInstance.getAffiliateUsingGET1WithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateUsingGET1");
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


## getCommissionProgramUsingGET

> AffiliateProgramV2 getCommissionProgramUsingGET(commissionProgramId)

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
            AffiliateProgramV2 result = apiInstance.getCommissionProgramUsingGET(commissionProgramId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getCommissionProgramUsingGET");
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

## getCommissionProgramUsingGETWithHttpInfo

> ApiResponse<AffiliateProgramV2> getCommissionProgramUsingGET getCommissionProgramUsingGETWithHttpInfo(commissionProgramId)

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
            ApiResponse<AffiliateProgramV2> response = apiInstance.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getCommissionProgramUsingGET");
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


## getRedirectLinkUsingGET

> AffiliateLink getRedirectLinkUsingGET(redirectId)

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
            AffiliateLink result = apiInstance.getRedirectLinkUsingGET(redirectId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getRedirectLinkUsingGET");
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

## getRedirectLinkUsingGETWithHttpInfo

> ApiResponse<AffiliateLink> getRedirectLinkUsingGET getRedirectLinkUsingGETWithHttpInfo(redirectId)

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
            ApiResponse<AffiliateLink> response = apiInstance.getRedirectLinkUsingGETWithHttpInfo(redirectId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getRedirectLinkUsingGET");
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


## listAffiliateCommissionProgramsUsingGET

> ListAffiliateCommissionProgramsResponse listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken)

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
            ListAffiliateCommissionProgramsResponse result = apiInstance.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateCommissionProgramsUsingGET");
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

## listAffiliateCommissionProgramsUsingGETWithHttpInfo

> ApiResponse<ListAffiliateCommissionProgramsResponse> listAffiliateCommissionProgramsUsingGET listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

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
            ApiResponse<ListAffiliateCommissionProgramsResponse> response = apiInstance.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateCommissionProgramsUsingGET");
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


## listAffiliateLinksUsingGET

> ListAffiliateLinksResponse listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken)

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
            ListAffiliateLinksResponse result = apiInstance.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateLinksUsingGET");
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

## listAffiliateLinksUsingGETWithHttpInfo

> ApiResponse<ListAffiliateLinksResponse> listAffiliateLinksUsingGET listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

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
            ApiResponse<ListAffiliateLinksResponse> response = apiInstance.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateLinksUsingGET");
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


## listSummariesUsingGET1

> ListAffiliateSummariesResponse listSummariesUsingGET1(filter, orderBy, pageSize, pageToken)

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
            ListAffiliateSummariesResponse result = apiInstance.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listSummariesUsingGET1");
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

## listSummariesUsingGET1WithHttpInfo

> ApiResponse<ListAffiliateSummariesResponse> listSummariesUsingGET1 listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken)

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
            ApiResponse<ListAffiliateSummariesResponse> response = apiInstance.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listSummariesUsingGET1");
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


## removeAffiliateFromProgramUsingPOST

> void removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest)

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
            apiInstance.removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeAffiliateFromProgramUsingPOST");
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

## removeAffiliateFromProgramUsingPOSTWithHttpInfo

> ApiResponse<Void> removeAffiliateFromProgramUsingPOST removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, affiliateRemoveFromProgramRequest)

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
            ApiResponse<Void> response = apiInstance.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, affiliateRemoveFromProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeAffiliateFromProgramUsingPOST");
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


## removeProductCommissionFromCommissionsUsingPOST

> void removeProductCommissionFromCommissionsUsingPOST(commissionId, deleteProgramCommissionRequest)

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
            apiInstance.removeProductCommissionFromCommissionsUsingPOST(commissionId, deleteProgramCommissionRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeProductCommissionFromCommissionsUsingPOST");
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

## removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo

> ApiResponse<Void> removeProductCommissionFromCommissionsUsingPOST removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteProgramCommissionRequest)

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
            ApiResponse<Void> response = apiInstance.removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteProgramCommissionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeProductCommissionFromCommissionsUsingPOST");
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


## removeSubscriptionPlanCommissionFromCommissionsUsingPOST

> void removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest)

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
            apiInstance.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeSubscriptionPlanCommissionFromCommissionsUsingPOST");
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

## removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo

> ApiResponse<Void> removeSubscriptionPlanCommissionFromCommissionsUsingPOST removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest)

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
            ApiResponse<Void> response = apiInstance.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeSubscriptionPlanCommissionFromCommissionsUsingPOST");
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


## updateAffiliateUsingPATCH

> RestAffiliate updateAffiliateUsingPATCH(id, updateAffiliateRequest)

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
            RestAffiliate result = apiInstance.updateAffiliateUsingPATCH(id, updateAffiliateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliateUsingPATCH");
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

## updateAffiliateUsingPATCHWithHttpInfo

> ApiResponse<RestAffiliate> updateAffiliateUsingPATCH updateAffiliateUsingPATCHWithHttpInfo(id, updateAffiliateRequest)

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
            ApiResponse<RestAffiliate> response = apiInstance.updateAffiliateUsingPATCHWithHttpInfo(id, updateAffiliateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliateUsingPATCH");
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


## updateCommissionProgramUsingPATCH

> AffiliateCommissionProgramResponse updateCommissionProgramUsingPATCH(commissionProgramId, updateCommissionProgramRequest, updateMask)

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
            AffiliateCommissionProgramResponse result = apiInstance.updateCommissionProgramUsingPATCH(commissionProgramId, updateCommissionProgramRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateCommissionProgramUsingPATCH");
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

## updateCommissionProgramUsingPATCHWithHttpInfo

> ApiResponse<AffiliateCommissionProgramResponse> updateCommissionProgramUsingPATCH updateCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask)

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
            ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.updateCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateCommissionProgramUsingPATCH");
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


## updateDefaultCommissionProgramUsingPATCH

> SetDefaultCommissionProgramResponse updateDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest)

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
            SetDefaultCommissionProgramResponse result = apiInstance.updateDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateDefaultCommissionProgramUsingPATCH");
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

## updateDefaultCommissionProgramUsingPATCHWithHttpInfo

> ApiResponse<SetDefaultCommissionProgramResponse> updateDefaultCommissionProgramUsingPATCH updateDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest)

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
            ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.updateDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateDefaultCommissionProgramUsingPATCH");
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


## updateProductCommissionProgramUsingPATCH

> ProductCommissionProgram updateProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateProductCommissionProgramRequest)

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
            ProductCommissionProgram result = apiInstance.updateProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateProductCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateProductCommissionProgramUsingPATCH");
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

## updateProductCommissionProgramUsingPATCHWithHttpInfo

> ApiResponse<ProductCommissionProgram> updateProductCommissionProgramUsingPATCH updateProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateProductCommissionProgramRequest)

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
            ApiResponse<ProductCommissionProgram> response = apiInstance.updateProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateProductCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateProductCommissionProgramUsingPATCH");
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


## updateRedirectLinkUsingPATCH

> AffiliateLink updateRedirectLinkUsingPATCH(redirectId, createOrUpdateAffiliateLinkRequest)

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
            AffiliateLink result = apiInstance.updateRedirectLinkUsingPATCH(redirectId, createOrUpdateAffiliateLinkRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateRedirectLinkUsingPATCH");
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

## updateRedirectLinkUsingPATCHWithHttpInfo

> ApiResponse<AffiliateLink> updateRedirectLinkUsingPATCH updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest)

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
            ApiResponse<AffiliateLink> response = apiInstance.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateRedirectLinkUsingPATCH");
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


## updateSubscriptionCommissionProgramUsingPATCH

> SubscriptionCommissionProgram updateSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest)

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
            SubscriptionCommissionProgram result = apiInstance.updateSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateSubscriptionCommissionProgramUsingPATCH");
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

## updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo

> ApiResponse<SubscriptionCommissionProgram> updateSubscriptionCommissionProgramUsingPATCH updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest)

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
            ApiResponse<SubscriptionCommissionProgram> response = apiInstance.updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateSubscriptionCommissionProgramUsingPATCH");
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

