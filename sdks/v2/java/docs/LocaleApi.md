# LocaleApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCountryByCode**](LocaleApi.md#getCountryByCode) | **GET** /v2/locales/countries/{country_code} | Get Country |
| [**getCountryByCodeWithHttpInfo**](LocaleApi.md#getCountryByCodeWithHttpInfo) | **GET** /v2/locales/countries/{country_code} | Get Country |
| [**getProvinceByCode**](LocaleApi.md#getProvinceByCode) | **GET** /v2/locales/countries/{country_code}/provinces/{province_code} | Get Province |
| [**getProvinceByCodeWithHttpInfo**](LocaleApi.md#getProvinceByCodeWithHttpInfo) | **GET** /v2/locales/countries/{country_code}/provinces/{province_code} | Get Province |
| [**listCountries**](LocaleApi.md#listCountries) | **GET** /v2/locales/countries | List Countries |
| [**listCountriesWithHttpInfo**](LocaleApi.md#listCountriesWithHttpInfo) | **GET** /v2/locales/countries | List Countries |
| [**listProvincesForCountry**](LocaleApi.md#listProvincesForCountry) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Province |
| [**listProvincesForCountryWithHttpInfo**](LocaleApi.md#listProvincesForCountryWithHttpInfo) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Province |



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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

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
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

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


## listProvincesForCountry

> ListProvincesResponse listProvincesForCountry(countryCode)

List a Country&#39;s Province

Retrieves a list of provinces for a given country

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | country_code
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
| **countryCode** | **String**| country_code | |

### Return type

[**ListProvincesResponse**](ListProvincesResponse.md)


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

## listProvincesForCountryWithHttpInfo

> ApiResponse<ListProvincesResponse> listProvincesForCountry listProvincesForCountryWithHttpInfo(countryCode)

List a Country&#39;s Province

Retrieves a list of provinces for a given country

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | country_code
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
| **countryCode** | **String**| country_code | |

### Return type

ApiResponse<[**ListProvincesResponse**](ListProvincesResponse.md)>


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

