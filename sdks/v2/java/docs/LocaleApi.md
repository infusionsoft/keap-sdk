# LocaleApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCountryByCode**](LocaleApi.md#getCountryByCode) | **GET** /rest/v2/locales/countries/{country_code} | Get Country |
| [**getCountryByCodeWithHttpInfo**](LocaleApi.md#getCountryByCodeWithHttpInfo) | **GET** /rest/v2/locales/countries/{country_code} | Get Country |
| [**getProvinceByCode**](LocaleApi.md#getProvinceByCode) | **GET** /rest/v2/locales/countries/{country_code}/provinces/{province_code} | Get Province |
| [**getProvinceByCodeWithHttpInfo**](LocaleApi.md#getProvinceByCodeWithHttpInfo) | **GET** /rest/v2/locales/countries/{country_code}/provinces/{province_code} | Get Province |
| [**listCountries**](LocaleApi.md#listCountries) | **GET** /rest/v2/locales/countries | List Countries |
| [**listCountriesWithHttpInfo**](LocaleApi.md#listCountriesWithHttpInfo) | **GET** /rest/v2/locales/countries | List Countries |
| [**listProvincesForCountry**](LocaleApi.md#listProvincesForCountry) | **GET** /rest/v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |
| [**listProvincesForCountryWithHttpInfo**](LocaleApi.md#listProvincesForCountryWithHttpInfo) | **GET** /rest/v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |



## getCountryByCode

> Country getCountryByCode(countryCode)

Get Country

Gets a country by its code or name

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved
        try {
            Country result = apiInstance.getCountryByCode(countryCode);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#getCountryByCode");
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
| **countryCode** | **String**| The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved | |

### Return type

[**Country**](Country.md)


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

## getCountryByCodeWithHttpInfo

> ApiResponse<Country> getCountryByCode getCountryByCodeWithHttpInfo(countryCode)

Get Country

Gets a country by its code or name

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved
        try {
            ApiResponse<Country> response = apiInstance.getCountryByCodeWithHttpInfo(countryCode);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#getCountryByCode");
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
| **countryCode** | **String**| The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved | |

### Return type

ApiResponse<[**Country**](Country.md)>


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


## getProvinceByCode

> Province getProvinceByCode(countryCode, provinceCode)

Get Province

Get a province by its code or name

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved
        String provinceCode = "provinceCode_example"; // String | The ISO 3166-2 code or name of the province to be retrieved
        try {
            Province result = apiInstance.getProvinceByCode(countryCode, provinceCode);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#getProvinceByCode");
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
| **countryCode** | **String**| The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved | |
| **provinceCode** | **String**| The ISO 3166-2 code or name of the province to be retrieved | |

### Return type

[**Province**](Province.md)


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

## getProvinceByCodeWithHttpInfo

> ApiResponse<Province> getProvinceByCode getProvinceByCodeWithHttpInfo(countryCode, provinceCode)

Get Province

Get a province by its code or name

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved
        String provinceCode = "provinceCode_example"; // String | The ISO 3166-2 code or name of the province to be retrieved
        try {
            ApiResponse<Province> response = apiInstance.getProvinceByCodeWithHttpInfo(countryCode, provinceCode);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#getProvinceByCode");
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
| **countryCode** | **String**| The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved | |
| **provinceCode** | **String**| The ISO 3166-2 code or name of the province to be retrieved | |

### Return type

ApiResponse<[**Province**](Province.md)>


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


## listCountries

> ListCountriesResponse listCountries()

List Countries

Retrieves a list of countries

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        try {
            ListCountriesResponse result = apiInstance.listCountries();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listCountries");
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

[**ListCountriesResponse**](ListCountriesResponse.md)


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

## listCountriesWithHttpInfo

> ApiResponse<ListCountriesResponse> listCountries listCountriesWithHttpInfo()

List Countries

Retrieves a list of countries

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        try {
            ApiResponse<ListCountriesResponse> response = apiInstance.listCountriesWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listCountries");
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

ApiResponse<[**ListCountriesResponse**](ListCountriesResponse.md)>


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


## listProvincesForCountry

> ListProvincesResponse listProvincesForCountry(countryCode)

List a Country&#39;s Provinces

Retrieves a list of provinces for a given country

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | 
        try {
            ListProvincesResponse result = apiInstance.listProvincesForCountry(countryCode);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listProvincesForCountry");
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
| **countryCode** | **String**|  | |

### Return type

[**ListProvincesResponse**](ListProvincesResponse.md)


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

## listProvincesForCountryWithHttpInfo

> ApiResponse<ListProvincesResponse> listProvincesForCountry listProvincesForCountryWithHttpInfo(countryCode)

List a Country&#39;s Provinces

Retrieves a list of provinces for a given country

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.auth.*;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm");
        
        // Configure OAuth2 access token for authorization: oauth2
        OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setAccessToken("YOUR ACCESS TOKEN");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | 
        try {
            ApiResponse<ListProvincesResponse> response = apiInstance.listProvincesForCountryWithHttpInfo(countryCode);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listProvincesForCountry");
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
| **countryCode** | **String**|  | |

### Return type

ApiResponse<[**ListProvincesResponse**](ListProvincesResponse.md)>


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

