# AffiliateApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAffiliate**](AffiliateApi.md#addAffiliate) | **POST** /rest/v2/affiliates | Create an Affiliate |
| [**addAffiliateWithHttpInfo**](AffiliateApi.md#addAffiliateWithHttpInfo) | **POST** /rest/v2/affiliates | Create an Affiliate |
| [**addAffiliateToProgram**](AffiliateApi.md#addAffiliateToProgram) | **POST** /rest/v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**addAffiliateToProgramWithHttpInfo**](AffiliateApi.md#addAffiliateToProgramWithHttpInfo) | **POST** /rest/v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**addCommissionProgram**](AffiliateApi.md#addCommissionProgram) | **POST** /rest/v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**addCommissionProgramWithHttpInfo**](AffiliateApi.md#addCommissionProgramWithHttpInfo) | **POST** /rest/v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**assignProductCommissionProgram**](AffiliateApi.md#assignProductCommissionProgram) | **POST** /rest/v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Assign a Product Commission Program |
| [**assignProductCommissionProgramWithHttpInfo**](AffiliateApi.md#assignProductCommissionProgramWithHttpInfo) | **POST** /rest/v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Assign a Product Commission Program |
| [**assignSubscriptionCommissionProgram**](AffiliateApi.md#assignSubscriptionCommissionProgram) | **POST** /rest/v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Assign a Subscription Commission Program |
| [**assignSubscriptionCommissionProgramWithHttpInfo**](AffiliateApi.md#assignSubscriptionCommissionProgramWithHttpInfo) | **POST** /rest/v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Assign a Subscription Commission Program |
| [**createAffiliateCustomField**](AffiliateApi.md#createAffiliateCustomField) | **POST** /rest/v2/affiliates/model/customFields | Create an Affiliate Custom Field |
| [**createAffiliateCustomFieldWithHttpInfo**](AffiliateApi.md#createAffiliateCustomFieldWithHttpInfo) | **POST** /rest/v2/affiliates/model/customFields | Create an Affiliate Custom Field |
| [**createDefaultCommissionProgram**](AffiliateApi.md#createDefaultCommissionProgram) | **POST** /rest/v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Create a Default Commission Program |
| [**createDefaultCommissionProgramWithHttpInfo**](AffiliateApi.md#createDefaultCommissionProgramWithHttpInfo) | **POST** /rest/v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Create a Default Commission Program |
| [**createRedirectLink**](AffiliateApi.md#createRedirectLink) | **POST** /rest/v2/affiliates/redirects | Create an Affiliate Link |
| [**createRedirectLinkWithHttpInfo**](AffiliateApi.md#createRedirectLinkWithHttpInfo) | **POST** /rest/v2/affiliates/redirects | Create an Affiliate Link |
| [**deleteAffiliate**](AffiliateApi.md#deleteAffiliate) | **DELETE** /rest/v2/affiliates/{id} | Delete Affiliate |
| [**deleteAffiliateWithHttpInfo**](AffiliateApi.md#deleteAffiliateWithHttpInfo) | **DELETE** /rest/v2/affiliates/{id} | Delete Affiliate |
| [**deleteAffiliateCommissionProgram**](AffiliateApi.md#deleteAffiliateCommissionProgram) | **DELETE** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**deleteAffiliateCommissionProgramWithHttpInfo**](AffiliateApi.md#deleteAffiliateCommissionProgramWithHttpInfo) | **DELETE** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**deleteAffiliateCustomField**](AffiliateApi.md#deleteAffiliateCustomField) | **DELETE** /rest/v2/affiliates/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**deleteAffiliateCustomFieldWithHttpInfo**](AffiliateApi.md#deleteAffiliateCustomFieldWithHttpInfo) | **DELETE** /rest/v2/affiliates/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**deleteRedirectLink**](AffiliateApi.md#deleteRedirectLink) | **DELETE** /rest/v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**deleteRedirectLinkWithHttpInfo**](AffiliateApi.md#deleteRedirectLinkWithHttpInfo) | **DELETE** /rest/v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**getAffiliate**](AffiliateApi.md#getAffiliate) | **GET** /rest/v2/affiliates/{id} | Retrieve an Affiliate |
| [**getAffiliateWithHttpInfo**](AffiliateApi.md#getAffiliateWithHttpInfo) | **GET** /rest/v2/affiliates/{id} | Retrieve an Affiliate |
| [**getAffiliateCommissionTotal**](AffiliateApi.md#getAffiliateCommissionTotal) | **GET** /rest/v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**getAffiliateCommissionTotalWithHttpInfo**](AffiliateApi.md#getAffiliateCommissionTotalWithHttpInfo) | **GET** /rest/v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**getAffiliateCommissions**](AffiliateApi.md#getAffiliateCommissions) | **GET** /rest/v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commissions |
| [**getAffiliateCommissionsWithHttpInfo**](AffiliateApi.md#getAffiliateCommissionsWithHttpInfo) | **GET** /rest/v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commissions |
| [**getAffiliateCustomFields**](AffiliateApi.md#getAffiliateCustomFields) | **GET** /rest/v2/affiliates/model | Retrieve Affiliate Model |
| [**getAffiliateCustomFieldsWithHttpInfo**](AffiliateApi.md#getAffiliateCustomFieldsWithHttpInfo) | **GET** /rest/v2/affiliates/model | Retrieve Affiliate Model |
| [**getCommissionProgram**](AffiliateApi.md#getCommissionProgram) | **GET** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**getCommissionProgramWithHttpInfo**](AffiliateApi.md#getCommissionProgramWithHttpInfo) | **GET** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**getRedirectLink**](AffiliateApi.md#getRedirectLink) | **GET** /rest/v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**getRedirectLinkWithHttpInfo**](AffiliateApi.md#getRedirectLinkWithHttpInfo) | **GET** /rest/v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**getReferralsByAffiliateId**](AffiliateApi.md#getReferralsByAffiliateId) | **GET** /rest/v2/affiliates/{affiliate_id}/referrals | Retrieve Affiliate Referrals |
| [**getReferralsByAffiliateIdWithHttpInfo**](AffiliateApi.md#getReferralsByAffiliateIdWithHttpInfo) | **GET** /rest/v2/affiliates/{affiliate_id}/referrals | Retrieve Affiliate Referrals |
| [**listAffiliate**](AffiliateApi.md#listAffiliate) | **GET** /rest/v2/affiliates | List Affiliates |
| [**listAffiliateWithHttpInfo**](AffiliateApi.md#listAffiliateWithHttpInfo) | **GET** /rest/v2/affiliates | List Affiliates |
| [**listAffiliateCommissionPrograms**](AffiliateApi.md#listAffiliateCommissionPrograms) | **GET** /rest/v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**listAffiliateCommissionProgramsWithHttpInfo**](AffiliateApi.md#listAffiliateCommissionProgramsWithHttpInfo) | **GET** /rest/v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**listAffiliateLinks**](AffiliateApi.md#listAffiliateLinks) | **GET** /rest/v2/affiliates/redirects | List Affiliate Links |
| [**listAffiliateLinksWithHttpInfo**](AffiliateApi.md#listAffiliateLinksWithHttpInfo) | **GET** /rest/v2/affiliates/redirects | List Affiliate Links |
| [**listAffiliatePayments**](AffiliateApi.md#listAffiliatePayments) | **GET** /rest/v2/affiliates/{affiliate_id}/payments | List Affiliate Payments |
| [**listAffiliatePaymentsWithHttpInfo**](AffiliateApi.md#listAffiliatePaymentsWithHttpInfo) | **GET** /rest/v2/affiliates/{affiliate_id}/payments | List Affiliate Payments |
| [**listCommissionProgramResources**](AffiliateApi.md#listCommissionProgramResources) | **GET** /rest/v2/affiliates/commissionPrograms/{commission_program_id}/resources | Retrieve Commission Program Resources |
| [**listCommissionProgramResourcesWithHttpInfo**](AffiliateApi.md#listCommissionProgramResourcesWithHttpInfo) | **GET** /rest/v2/affiliates/commissionPrograms/{commission_program_id}/resources | Retrieve Commission Program Resources |
| [**listSummaries**](AffiliateApi.md#listSummaries) | **GET** /rest/v2/affiliates/summaries | List Affiliate Summaries |
| [**listSummariesWithHttpInfo**](AffiliateApi.md#listSummariesWithHttpInfo) | **GET** /rest/v2/affiliates/summaries | List Affiliate Summaries |
| [**removeAffiliateFromProgram**](AffiliateApi.md#removeAffiliateFromProgram) | **POST** /rest/v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**removeAffiliateFromProgramWithHttpInfo**](AffiliateApi.md#removeAffiliateFromProgramWithHttpInfo) | **POST** /rest/v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**removeProductCommissionFromCommissions**](AffiliateApi.md#removeProductCommissionFromCommissions) | **POST** /rest/v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program |
| [**removeProductCommissionFromCommissionsWithHttpInfo**](AffiliateApi.md#removeProductCommissionFromCommissionsWithHttpInfo) | **POST** /rest/v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program |
| [**removeSubscriptionPlanCommissionFromCommissions**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissions) | **POST** /rest/v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo) | **POST** /rest/v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**updateAffiliate**](AffiliateApi.md#updateAffiliate) | **PATCH** /rest/v2/affiliates/{id} | Update an Affiliate |
| [**updateAffiliateWithHttpInfo**](AffiliateApi.md#updateAffiliateWithHttpInfo) | **PATCH** /rest/v2/affiliates/{id} | Update an Affiliate |
| [**updateAffiliateCustomField**](AffiliateApi.md#updateAffiliateCustomField) | **PATCH** /rest/v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field |
| [**updateAffiliateCustomFieldWithHttpInfo**](AffiliateApi.md#updateAffiliateCustomFieldWithHttpInfo) | **PATCH** /rest/v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field |
| [**updateCommissionProgram**](AffiliateApi.md#updateCommissionProgram) | **PATCH** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program |
| [**updateCommissionProgramWithHttpInfo**](AffiliateApi.md#updateCommissionProgramWithHttpInfo) | **PATCH** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program |
| [**updateDefaultCommissionProgram**](AffiliateApi.md#updateDefaultCommissionProgram) | **PATCH** /rest/v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**updateDefaultCommissionProgramWithHttpInfo**](AffiliateApi.md#updateDefaultCommissionProgramWithHttpInfo) | **PATCH** /rest/v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**updateProductCommissionProgram**](AffiliateApi.md#updateProductCommissionProgram) | **PATCH** /rest/v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**updateProductCommissionProgramWithHttpInfo**](AffiliateApi.md#updateProductCommissionProgramWithHttpInfo) | **PATCH** /rest/v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**updateRedirectLink**](AffiliateApi.md#updateRedirectLink) | **PATCH** /rest/v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**updateRedirectLinkWithHttpInfo**](AffiliateApi.md#updateRedirectLinkWithHttpInfo) | **PATCH** /rest/v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**updateSubscriptionCommissionProgram**](AffiliateApi.md#updateSubscriptionCommissionProgram) | **PATCH** /rest/v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |
| [**updateSubscriptionCommissionProgramWithHttpInfo**](AffiliateApi.md#updateSubscriptionCommissionProgramWithHttpInfo) | **PATCH** /rest/v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |



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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateAffiliateRequest createAffiliateRequest = new CreateAffiliateRequest(); // CreateAffiliateRequest | 
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
| **createAffiliateRequest** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)|  | |

### Return type

[**RestAffiliate**](RestAffiliate.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateAffiliateRequest createAffiliateRequest = new CreateAffiliateRequest(); // CreateAffiliateRequest | 
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
| **createAffiliateRequest** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)|  | |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | 
        AffiliateAddToProgramRequest affiliateAddToProgramRequest = new AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | 
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
| **id** | **String**|  | |
| **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)|  | |

### Return type


null (empty response body)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | 
        AffiliateAddToProgramRequest affiliateAddToProgramRequest = new AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | 
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
| **id** | **String**|  | |
| **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)|  | |

### Return type


ApiResponse<Void>

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateCommissionProgramRequest createCommissionProgramRequest = new CreateCommissionProgramRequest(); // CreateCommissionProgramRequest | 
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
| **createCommissionProgramRequest** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)|  | |

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateCommissionProgramRequest createCommissionProgramRequest = new CreateCommissionProgramRequest(); // CreateCommissionProgramRequest | 
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
| **createCommissionProgramRequest** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)|  | |

### Return type

ApiResponse<[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        CreateProductCommissionProgramRequest createProductCommissionProgramRequest = new CreateProductCommissionProgramRequest(); // CreateProductCommissionProgramRequest | 
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
| **commissionProgramId** | **String**|  | |
| **createProductCommissionProgramRequest** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)|  | |

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        CreateProductCommissionProgramRequest createProductCommissionProgramRequest = new CreateProductCommissionProgramRequest(); // CreateProductCommissionProgramRequest | 
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
| **commissionProgramId** | **String**|  | |
| **createProductCommissionProgramRequest** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)|  | |

### Return type

ApiResponse<[**ProductCommissionProgram**](ProductCommissionProgram.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        CreateSubscriptionCommissionProgramRequest createSubscriptionCommissionProgramRequest = new CreateSubscriptionCommissionProgramRequest(); // CreateSubscriptionCommissionProgramRequest | 
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
| **commissionProgramId** | **String**|  | |
| **createSubscriptionCommissionProgramRequest** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)|  | |

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        CreateSubscriptionCommissionProgramRequest createSubscriptionCommissionProgramRequest = new CreateSubscriptionCommissionProgramRequest(); // CreateSubscriptionCommissionProgramRequest | 
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
| **commissionProgramId** | **String**|  | |
| **createSubscriptionCommissionProgramRequest** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)|  | |

### Return type

ApiResponse<[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## createAffiliateCustomField

> CustomFieldMetaData createAffiliateCustomField(createCustomFieldRequest)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
        try {
            CustomFieldMetaData result = apiInstance.createAffiliateCustomField(createCustomFieldRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createAffiliateCustomField");
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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## createAffiliateCustomFieldWithHttpInfo

> ApiResponse<CustomFieldMetaData> createAffiliateCustomField createAffiliateCustomFieldWithHttpInfo(createCustomFieldRequest)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.createAffiliateCustomFieldWithHttpInfo(createCustomFieldRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createAffiliateCustomField");
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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        CreateDefaultCommissionProgramRequest createDefaultCommissionProgramRequest = new CreateDefaultCommissionProgramRequest(); // CreateDefaultCommissionProgramRequest | 
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
| **commissionProgramId** | **String**|  | |
| **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)|  | |

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        CreateDefaultCommissionProgramRequest createDefaultCommissionProgramRequest = new CreateDefaultCommissionProgramRequest(); // CreateDefaultCommissionProgramRequest | 
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
| **commissionProgramId** | **String**|  | |
| **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)|  | |

### Return type

ApiResponse<[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest = new CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | 
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
| **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)|  | |

### Return type

[**AffiliateLink**](AffiliateLink.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest = new CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | 
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
| **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)|  | |

### Return type

ApiResponse<[**AffiliateLink**](AffiliateLink.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | 
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
| **id** | **String**|  | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | 
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
| **id** | **String**|  | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
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
| **commissionProgramId** | **String**|  | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
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
| **commissionProgramId** | **String**|  | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## deleteAffiliateCustomField

> void deleteAffiliateCustomField(customFieldId)

Delete a Custom Field

Deletes a Custom Field from Affiliate.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        try {
            apiInstance.deleteAffiliateCustomField(customFieldId);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateCustomField");
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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## deleteAffiliateCustomFieldWithHttpInfo

> ApiResponse<Void> deleteAffiliateCustomField deleteAffiliateCustomFieldWithHttpInfo(customFieldId)

Delete a Custom Field

Deletes a Custom Field from Affiliate.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteAffiliateCustomFieldWithHttpInfo(customFieldId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateCustomField");
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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | 
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
| **redirectId** | **String**|  | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | 
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
| **redirectId** | **String**|  | |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | 
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
| **id** | **String**|  | |

### Return type

[**RestAffiliate**](RestAffiliate.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | 
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
| **id** | **String**|  | |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | 
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
| **affiliateId** | **String**|  | |

### Return type

[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | 
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
| **affiliateId** | **String**|  | |

### Return type

ApiResponse<[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getAffiliateCommissions

> ListAffiliateCommissionsResponse getAffiliateCommissions(affiliateId, filter, orderBy, pageSize, pageToken)

Retrieve Affiliate Commissions

Retrieve a list of Affiliate&#39;s Commissions

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | 
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z` - `filter=until_time%3D%3D2025-05-21T23:00:00Z` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `invoice_id` - `time_earned`  One of the following directions: - `asc` - `desc`
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
| **affiliateId** | **String**|  | |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-05-21T23:00:00Z&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;time_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliateCommissionsResponse**](ListAffiliateCommissionsResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getAffiliateCommissionsWithHttpInfo

> ApiResponse<ListAffiliateCommissionsResponse> getAffiliateCommissions getAffiliateCommissionsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken)

Retrieve Affiliate Commissions

Retrieve a list of Affiliate&#39;s Commissions

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | 
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z` - `filter=until_time%3D%3D2025-05-21T23:00:00Z` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `invoice_id` - `time_earned`  One of the following directions: - `asc` - `desc`
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
| **affiliateId** | **String**|  | |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-05-21T23:00:00Z&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;time_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliateCommissionsResponse**](ListAffiliateCommissionsResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getAffiliateCustomFields

> ObjectModel getAffiliateCustomFields()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        try {
            ObjectModel result = apiInstance.getAffiliateCustomFields();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCustomFields");
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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getAffiliateCustomFieldsWithHttpInfo

> ApiResponse<ObjectModel> getAffiliateCustomFields getAffiliateCustomFieldsWithHttpInfo()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        try {
            ApiResponse<ObjectModel> response = apiInstance.getAffiliateCustomFieldsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCustomFields");
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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getCommissionProgram

> GetRestCommissionProgram getCommissionProgram(commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        try {
            GetRestCommissionProgram result = apiInstance.getCommissionProgram(commissionProgramId);
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
| **commissionProgramId** | **String**|  | |

### Return type

[**GetRestCommissionProgram**](GetRestCommissionProgram.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getCommissionProgramWithHttpInfo

> ApiResponse<GetRestCommissionProgram> getCommissionProgram getCommissionProgramWithHttpInfo(commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        try {
            ApiResponse<GetRestCommissionProgram> response = apiInstance.getCommissionProgramWithHttpInfo(commissionProgramId);
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
| **commissionProgramId** | **String**|  | |

### Return type

ApiResponse<[**GetRestCommissionProgram**](GetRestCommissionProgram.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | 
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
| **redirectId** | **String**|  | |

### Return type

[**AffiliateLink**](AffiliateLink.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | 
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
| **redirectId** | **String**|  | |

### Return type

ApiResponse<[**AffiliateLink**](AffiliateLink.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## getReferralsByAffiliateId

> ListAffiliateReferralsResponse getReferralsByAffiliateId(affiliateId)

Retrieve Affiliate Referrals

Retrieves all referrals belonging to the given affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | 
        try {
            ListAffiliateReferralsResponse result = apiInstance.getReferralsByAffiliateId(affiliateId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getReferralsByAffiliateId");
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
| **affiliateId** | **String**|  | |

### Return type

[**ListAffiliateReferralsResponse**](ListAffiliateReferralsResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## getReferralsByAffiliateIdWithHttpInfo

> ApiResponse<ListAffiliateReferralsResponse> getReferralsByAffiliateId getReferralsByAffiliateIdWithHttpInfo(affiliateId)

Retrieve Affiliate Referrals

Retrieves all referrals belonging to the given affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | 
        try {
            ApiResponse<ListAffiliateReferralsResponse> response = apiInstance.getReferralsByAffiliateIdWithHttpInfo(affiliateId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getReferralsByAffiliateId");
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
| **affiliateId** | **String**|  | |

### Return type

ApiResponse<[**ListAffiliateReferralsResponse**](ListAffiliateReferralsResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listAffiliate

> ListAffiliatesResponse listAffiliate(filter, orderBy, pageSize, pageToken)

List Affiliates

Retrieves a list of Affiliates

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `affiliate_name` - (String) `contact_id` - (String) `referral_contact_id` - (String) `status` - (String) `code`  You will need to apply the `==` operator to check the equality of one of the filters with the value you want to match, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=affiliate_name%3D%3DBob` - `filter=contact_id%3D%3D567` - `filter=contact_id%3D%3D123%3Bcode%3D%3D567`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `name` - `status` - `code`  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListAffiliatesResponse result = apiInstance.listAffiliate(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliate");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;affiliate_name&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;referral_contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with the value you want to match, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;affiliate_name%3D%3DBob&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bcode%3D%3D567&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliatesResponse**](ListAffiliatesResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listAffiliateWithHttpInfo

> ApiResponse<ListAffiliatesResponse> listAffiliate listAffiliateWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Affiliates

Retrieves a list of Affiliates

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `affiliate_name` - (String) `contact_id` - (String) `referral_contact_id` - (String) `status` - (String) `code`  You will need to apply the `==` operator to check the equality of one of the filters with the value you want to match, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=affiliate_name%3D%3DBob` - `filter=contact_id%3D%3D567` - `filter=contact_id%3D%3D123%3Bcode%3D%3D567`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `name` - `status` - `code`  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListAffiliatesResponse> response = apiInstance.listAffiliateWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliate");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;affiliate_name&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;referral_contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with the value you want to match, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;affiliate_name%3D%3DBob&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bcode%3D%3D567&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliatesResponse**](ListAffiliatesResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listAffiliatePayments

> ListAffiliatePaymentsResponse listAffiliatePayments(affiliateId, filter, orderBy, pageSize, pageToken)

List Affiliate Payments

Retrieves a list of affiliate payments

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | 
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-09-17T-15:50+00` - `filter=until_time%3D%3D2024-09-17T-15:50+00` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `create_time` - `pay_date` - `pay_amount`  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListAffiliatePaymentsResponse result = apiInstance.listAffiliatePayments(affiliateId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliatePayments");
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
| **affiliateId** | **String**|  | |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60; - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;pay_date&#x60; - &#x60;pay_amount&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliatePaymentsResponse**](ListAffiliatePaymentsResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listAffiliatePaymentsWithHttpInfo

> ApiResponse<ListAffiliatePaymentsResponse> listAffiliatePayments listAffiliatePaymentsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken)

List Affiliate Payments

Retrieves a list of affiliate payments

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | 
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-09-17T-15:50+00` - `filter=until_time%3D%3D2024-09-17T-15:50+00` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `create_time` - `pay_date` - `pay_amount`  One of the following directions: - `asc` - `desc` 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListAffiliatePaymentsResponse> response = apiInstance.listAffiliatePaymentsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliatePayments");
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
| **affiliateId** | **String**|  | |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60; - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;pay_date&#x60; - &#x60;pay_amount&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliatePaymentsResponse**](ListAffiliatePaymentsResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## listCommissionProgramResources

> ListProgramResourcesResponse listCommissionProgramResources(commissionProgramId)

Retrieve Commission Program Resources

Retrieves resources for a commission program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        try {
            ListProgramResourcesResponse result = apiInstance.listCommissionProgramResources(commissionProgramId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listCommissionProgramResources");
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
| **commissionProgramId** | **String**|  | |

### Return type

[**ListProgramResourcesResponse**](ListProgramResourcesResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## listCommissionProgramResourcesWithHttpInfo

> ApiResponse<ListProgramResourcesResponse> listCommissionProgramResources listCommissionProgramResourcesWithHttpInfo(commissionProgramId)

Retrieve Commission Program Resources

Retrieves resources for a commission program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        try {
            ApiResponse<ListProgramResourcesResponse> response = apiInstance.listCommissionProgramResourcesWithHttpInfo(commissionProgramId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listCommissionProgramResources");
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
| **commissionProgramId** | **String**|  | |

### Return type

ApiResponse<[**ListProgramResourcesResponse**](ListProgramResourcesResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
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
| **filter** | **String**| Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
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
| **filter** | **String**| Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | 
        AffiliateRemoveFromProgramRequest affiliateRemoveFromProgramRequest = new AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | 
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
| **id** | **String**|  | |
| **affiliateRemoveFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)|  | |

### Return type


null (empty response body)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | 
        AffiliateRemoveFromProgramRequest affiliateRemoveFromProgramRequest = new AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | 
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
| **id** | **String**|  | |
| **affiliateRemoveFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)|  | |

### Return type


ApiResponse<Void>

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionId = "commissionId_example"; // String | 
        DeleteProgramCommissionRequest deleteProgramCommissionRequest = new DeleteProgramCommissionRequest(); // DeleteProgramCommissionRequest | 
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
| **commissionId** | **String**|  | |
| **deleteProgramCommissionRequest** | [**DeleteProgramCommissionRequest**](DeleteProgramCommissionRequest.md)|  | |

### Return type


null (empty response body)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionId = "commissionId_example"; // String | 
        DeleteProgramCommissionRequest deleteProgramCommissionRequest = new DeleteProgramCommissionRequest(); // DeleteProgramCommissionRequest | 
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
| **commissionId** | **String**|  | |
| **deleteProgramCommissionRequest** | [**DeleteProgramCommissionRequest**](DeleteProgramCommissionRequest.md)|  | |

### Return type


ApiResponse<Void>

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionId = "commissionId_example"; // String | 
        DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest = new DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | 
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
| **commissionId** | **String**|  | |
| **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)|  | |

### Return type


null (empty response body)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionId = "commissionId_example"; // String | 
        DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest = new DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | 
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
| **commissionId** | **String**|  | |
| **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)|  | |

### Return type


ApiResponse<Void>

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateAffiliate

> RestAffiliate updateAffiliate(id, updateAffiliateRequest, updateMask)

Update an Affiliate

Updates a single Affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | 
        UpdateAffiliateRequest updateAffiliateRequest = new UpdateAffiliateRequest(); // UpdateAffiliateRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            RestAffiliate result = apiInstance.updateAffiliate(id, updateAffiliateRequest, updateMask);
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
| **id** | **String**|  | |
| **updateAffiliateRequest** | [**UpdateAffiliateRequest**](UpdateAffiliateRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**RestAffiliate**](RestAffiliate.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateAffiliateWithHttpInfo

> ApiResponse<RestAffiliate> updateAffiliate updateAffiliateWithHttpInfo(id, updateAffiliateRequest, updateMask)

Update an Affiliate

Updates a single Affiliate

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | 
        UpdateAffiliateRequest updateAffiliateRequest = new UpdateAffiliateRequest(); // UpdateAffiliateRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<RestAffiliate> response = apiInstance.updateAffiliateWithHttpInfo(id, updateAffiliateRequest, updateMask);
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
| **id** | **String**|  | |
| **updateAffiliateRequest** | [**UpdateAffiliateRequest**](UpdateAffiliateRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateAffiliateCustomField

> CustomFieldMetaData updateAffiliateCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CustomFieldMetaData result = apiInstance.updateAffiliateCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliateCustomField");
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
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateAffiliateCustomFieldWithHttpInfo

> ApiResponse<CustomFieldMetaData> updateAffiliateCustomField updateAffiliateCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | 
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.updateAffiliateCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliateCustomField");
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
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        UpdateCommissionProgramRequest updateCommissionProgramRequest = new UpdateCommissionProgramRequest(); // UpdateCommissionProgramRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **commissionProgramId** | **String**|  | |
| **updateCommissionProgramRequest** | [**UpdateCommissionProgramRequest**](UpdateCommissionProgramRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        UpdateCommissionProgramRequest updateCommissionProgramRequest = new UpdateCommissionProgramRequest(); // UpdateCommissionProgramRequest | 
        Object updateMask = null; // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
| **commissionProgramId** | **String**|  | |
| **updateCommissionProgramRequest** | [**UpdateCommissionProgramRequest**](UpdateCommissionProgramRequest.md)|  | |
| **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

ApiResponse<[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateDefaultCommissionProgram

> SetDefaultCommissionProgramResponse updateDefaultCommissionProgram(commissionProgramId, updateDefaultCommissionProgramRequest, updateMask)

Update a Default Commission Program

Updates a Default Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        UpdateDefaultCommissionProgramRequest updateDefaultCommissionProgramRequest = new UpdateDefaultCommissionProgramRequest(); // UpdateDefaultCommissionProgramRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | 
        try {
            SetDefaultCommissionProgramResponse result = apiInstance.updateDefaultCommissionProgram(commissionProgramId, updateDefaultCommissionProgramRequest, updateMask);
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
| **commissionProgramId** | **String**|  | |
| **updateDefaultCommissionProgramRequest** | [**UpdateDefaultCommissionProgramRequest**](UpdateDefaultCommissionProgramRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)|  | [optional] |

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateDefaultCommissionProgramWithHttpInfo

> ApiResponse<SetDefaultCommissionProgramResponse> updateDefaultCommissionProgram updateDefaultCommissionProgramWithHttpInfo(commissionProgramId, updateDefaultCommissionProgramRequest, updateMask)

Update a Default Commission Program

Updates a Default Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        UpdateDefaultCommissionProgramRequest updateDefaultCommissionProgramRequest = new UpdateDefaultCommissionProgramRequest(); // UpdateDefaultCommissionProgramRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | 
        try {
            ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.updateDefaultCommissionProgramWithHttpInfo(commissionProgramId, updateDefaultCommissionProgramRequest, updateMask);
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
| **commissionProgramId** | **String**|  | |
| **updateDefaultCommissionProgramRequest** | [**UpdateDefaultCommissionProgramRequest**](UpdateDefaultCommissionProgramRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)|  | [optional] |

### Return type

ApiResponse<[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateProductCommissionProgram

> ProductCommissionProgram updateProductCommissionProgram(commissionProgramId, updateProductCommissionProgramRequest, updateMask)

Update a Product Commission Program

Updates a Product Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        UpdateProductCommissionProgramRequest updateProductCommissionProgramRequest = new UpdateProductCommissionProgramRequest(); // UpdateProductCommissionProgramRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | 
        try {
            ProductCommissionProgram result = apiInstance.updateProductCommissionProgram(commissionProgramId, updateProductCommissionProgramRequest, updateMask);
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
| **commissionProgramId** | **String**|  | |
| **updateProductCommissionProgramRequest** | [**UpdateProductCommissionProgramRequest**](UpdateProductCommissionProgramRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)|  | [optional] |

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateProductCommissionProgramWithHttpInfo

> ApiResponse<ProductCommissionProgram> updateProductCommissionProgram updateProductCommissionProgramWithHttpInfo(commissionProgramId, updateProductCommissionProgramRequest, updateMask)

Update a Product Commission Program

Updates a Product Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        UpdateProductCommissionProgramRequest updateProductCommissionProgramRequest = new UpdateProductCommissionProgramRequest(); // UpdateProductCommissionProgramRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | 
        try {
            ApiResponse<ProductCommissionProgram> response = apiInstance.updateProductCommissionProgramWithHttpInfo(commissionProgramId, updateProductCommissionProgramRequest, updateMask);
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
| **commissionProgramId** | **String**|  | |
| **updateProductCommissionProgramRequest** | [**UpdateProductCommissionProgramRequest**](UpdateProductCommissionProgramRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)|  | [optional] |

### Return type

ApiResponse<[**ProductCommissionProgram**](ProductCommissionProgram.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | 
        CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest = new CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | 
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
| **redirectId** | **String**|  | |
| **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)|  | |

### Return type

[**AffiliateLink**](AffiliateLink.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

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
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | 
        CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest = new CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | 
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
| **redirectId** | **String**|  | |
| **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)|  | |

### Return type

ApiResponse<[**AffiliateLink**](AffiliateLink.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |


## updateSubscriptionCommissionProgram

> SubscriptionCommissionProgram updateSubscriptionCommissionProgram(commissionProgramId, updateSubscriptionCommissionProgramRequest, updateMask)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        UpdateSubscriptionCommissionProgramRequest updateSubscriptionCommissionProgramRequest = new UpdateSubscriptionCommissionProgramRequest(); // UpdateSubscriptionCommissionProgramRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | 
        try {
            SubscriptionCommissionProgram result = apiInstance.updateSubscriptionCommissionProgram(commissionProgramId, updateSubscriptionCommissionProgramRequest, updateMask);
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
| **commissionProgramId** | **String**|  | |
| **updateSubscriptionCommissionProgramRequest** | [**UpdateSubscriptionCommissionProgramRequest**](UpdateSubscriptionCommissionProgramRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)|  | [optional] |

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

## updateSubscriptionCommissionProgramWithHttpInfo

> ApiResponse<SubscriptionCommissionProgram> updateSubscriptionCommissionProgram updateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, updateSubscriptionCommissionProgramRequest, updateMask)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | 
        UpdateSubscriptionCommissionProgramRequest updateSubscriptionCommissionProgramRequest = new UpdateSubscriptionCommissionProgramRequest(); // UpdateSubscriptionCommissionProgramRequest | 
        Set<String> updateMask = Arrays.asList(); // Set<String> | 
        try {
            ApiResponse<SubscriptionCommissionProgram> response = apiInstance.updateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, updateSubscriptionCommissionProgramRequest, updateMask);
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
| **commissionProgramId** | **String**|  | |
| **updateSubscriptionCommissionProgramRequest** | [**UpdateSubscriptionCommissionProgramRequest**](UpdateSubscriptionCommissionProgramRequest.md)|  | |
| **updateMask** | [**Set&lt;String&gt;**](String.md)|  | [optional] |

### Return type

ApiResponse<[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)>


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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

