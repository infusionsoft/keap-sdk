# ReferralApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createReferral**](ReferralApi.md#createReferral) | **POST** /rest/v2/referrals | Create a Referral |
| [**createReferralWithHttpInfo**](ReferralApi.md#createReferralWithHttpInfo) | **POST** /rest/v2/referrals | Create a Referral |
| [**listReferrals**](ReferralApi.md#listReferrals) | **GET** /rest/v2/referrals | List Referrals |
| [**listReferralsWithHttpInfo**](ReferralApi.md#listReferralsWithHttpInfo) | **GET** /rest/v2/referrals | List Referrals |



## createReferral

> Referral createReferral(createReferralRequest)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ReferralApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ReferralApi apiInstance = new ReferralApi(defaultClient);
        CreateReferralRequest createReferralRequest = new CreateReferralRequest(); // CreateReferralRequest | 
        try {
            Referral result = apiInstance.createReferral(createReferralRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReferralApi#createReferral");
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
| **createReferralRequest** | [**CreateReferralRequest**](CreateReferralRequest.md)|  | |

### Return type

[**Referral**](Referral.md)


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

## createReferralWithHttpInfo

> ApiResponse<Referral> createReferral createReferralWithHttpInfo(createReferralRequest)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ReferralApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ReferralApi apiInstance = new ReferralApi(defaultClient);
        CreateReferralRequest createReferralRequest = new CreateReferralRequest(); // CreateReferralRequest | 
        try {
            ApiResponse<Referral> response = apiInstance.createReferralWithHttpInfo(createReferralRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReferralApi#createReferral");
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
| **createReferralRequest** | [**CreateReferralRequest**](CreateReferralRequest.md)|  | |

### Return type

ApiResponse<[**Referral**](Referral.md)>


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


## listReferrals

> ListReferralsResponse listReferrals(filter, pageToken, orderBy, pageSize)

List Referrals

Retrieves a list of all referrals with optional filtering and sorting

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ReferralApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ReferralApi apiInstance = new ReferralApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `referral_partner_id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `contact_id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `source` - Wildcard matching allowed - (String) `description` - Wildcard matching allowed - (String) `type` (Allowed values: `COOKIE`, `PERMANENT`, `MANUAL`)  You will need to apply the `==` operator (or other supported operators) to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=referral_partner_id%3D%3D123` - `filter=referral_partner_id%3E10` (referral_partner_id > 10) - `filter=contact_id%3D%3D456` - `filter=contact_id%3C%3D100` (contact_id <= 100) - `filter=source%3D%3DEmail Marketing` - `filter=source%3D%3DEmail*` (starts with \"Email\") - `filter=description%3D%3DReferred*` (starts with \"Referred\") - `filter=type%3D%3DCOOKIE` - `filter=referral_partner_id%3D%3D123%3Bcontact_id%3D%3D456`  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo` 
        String pageToken = "pageToken_example"; // String | Page token
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `referral_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        try {
            ListReferralsResponse result = apiInstance.listReferrals(filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReferralApi#listReferrals");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;referral_partner_id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;contact_id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;source&#x60; - Wildcard matching allowed - (String) &#x60;description&#x60; - Wildcard matching allowed - (String) &#x60;type&#x60; (Allowed values: &#x60;COOKIE&#x60;, &#x60;PERMANENT&#x60;, &#x60;MANUAL&#x60;)  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator (or other supported operators) to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;referral_partner_id%3D%3D123&#x60; - &#x60;filter&#x3D;referral_partner_id%3E10&#x60; (referral_partner_id &gt; 10) - &#x60;filter&#x3D;contact_id%3D%3D456&#x60; - &#x60;filter&#x3D;contact_id%3C%3D100&#x60; (contact_id &lt;&#x3D; 100) - &#x60;filter&#x3D;source%3D%3DEmail Marketing&#x60; - &#x60;filter&#x3D;source%3D%3DEmail*&#x60; (starts with \&quot;Email\&quot;) - &#x60;filter&#x3D;description%3D%3DReferred*&#x60; (starts with \&quot;Referred\&quot;) - &#x60;filter&#x3D;type%3D%3DCOOKIE&#x60; - &#x60;filter&#x3D;referral_partner_id%3D%3D123%3Bcontact_id%3D%3D456&#x60;  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;referral_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |

### Return type

[**ListReferralsResponse**](ListReferralsResponse.md)


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

## listReferralsWithHttpInfo

> ApiResponse<ListReferralsResponse> listReferrals listReferralsWithHttpInfo(filter, pageToken, orderBy, pageSize)

List Referrals

Retrieves a list of all referrals with optional filtering and sorting

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.ReferralApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        ReferralApi apiInstance = new ReferralApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) `referral_partner_id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `contact_id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `source` - Wildcard matching allowed - (String) `description` - Wildcard matching allowed - (String) `type` (Allowed values: `COOKIE`, `PERMANENT`, `MANUAL`)  You will need to apply the `==` operator (or other supported operators) to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=referral_partner_id%3D%3D123` - `filter=referral_partner_id%3E10` (referral_partner_id > 10) - `filter=contact_id%3D%3D456` - `filter=contact_id%3C%3D100` (contact_id <= 100) - `filter=source%3D%3DEmail Marketing` - `filter=source%3D%3DEmail*` (starts with \"Email\") - `filter=description%3D%3DReferred*` (starts with \"Referred\") - `filter=type%3D%3DCOOKIE` - `filter=referral_partner_id%3D%3D123%3Bcontact_id%3D%3D456`  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo` 
        String pageToken = "pageToken_example"; // String | Page token
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - `id` - `referral_time`  One of the following directions: - `asc` - `desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        try {
            ApiResponse<ListReferralsResponse> response = apiInstance.listReferralsWithHttpInfo(filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReferralApi#listReferrals");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;referral_partner_id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;contact_id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;source&#x60; - Wildcard matching allowed - (String) &#x60;description&#x60; - Wildcard matching allowed - (String) &#x60;type&#x60; (Allowed values: &#x60;COOKIE&#x60;, &#x60;PERMANENT&#x60;, &#x60;MANUAL&#x60;)  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator (or other supported operators) to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;referral_partner_id%3D%3D123&#x60; - &#x60;filter&#x3D;referral_partner_id%3E10&#x60; (referral_partner_id &gt; 10) - &#x60;filter&#x3D;contact_id%3D%3D456&#x60; - &#x60;filter&#x3D;contact_id%3C%3D100&#x60; (contact_id &lt;&#x3D; 100) - &#x60;filter&#x3D;source%3D%3DEmail Marketing&#x60; - &#x60;filter&#x3D;source%3D%3DEmail*&#x60; (starts with \&quot;Email\&quot;) - &#x60;filter&#x3D;description%3D%3DReferred*&#x60; (starts with \&quot;Referred\&quot;) - &#x60;filter&#x3D;type%3D%3DCOOKIE&#x60; - &#x60;filter&#x3D;referral_partner_id%3D%3D123%3Bcontact_id%3D%3D456&#x60;  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;referral_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |

### Return type

ApiResponse<[**ListReferralsResponse**](ListReferralsResponse.md)>


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

