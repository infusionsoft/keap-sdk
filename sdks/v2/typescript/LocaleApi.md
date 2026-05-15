# .LocaleApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCountryByCode**](LocaleApi.md#getCountryByCode) | **GET** /rest/v2/locales/countries/{country_code} | Get Country
[**getProvinceByCode**](LocaleApi.md#getProvinceByCode) | **GET** /rest/v2/locales/countries/{country_code}/provinces/{province_code} | Get Province
[**listCountries**](LocaleApi.md#listCountries) | **GET** /rest/v2/locales/countries | List Countries
[**listProvincesForCountry**](LocaleApi.md#listProvincesForCountry) | **GET** /rest/v2/locales/countries/{country_code}/provinces | List a Country\&#39;s Provinces


# **getCountryByCode**
> Country getCountryByCode()

Gets a country by its code or name

### Example


```typescript
import { createConfiguration, LocaleApi } from '';
import type { LocaleApiGetCountryByCodeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LocaleApi(configuration);

const request: LocaleApiGetCountryByCodeRequest = {
    // The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved
  countryCode: "country_code_example",
};

const data = await apiInstance.getCountryByCode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | [**string**] | The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved | defaults to undefined


### Return type

**Country**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProvinceByCode**
> Province getProvinceByCode()

Get a province by its code or name

### Example


```typescript
import { createConfiguration, LocaleApi } from '';
import type { LocaleApiGetProvinceByCodeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LocaleApi(configuration);

const request: LocaleApiGetProvinceByCodeRequest = {
    // The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved
  countryCode: "country_code_example",
    // The ISO 3166-2 code or name of the province to be retrieved
  provinceCode: "province_code_example",
};

const data = await apiInstance.getProvinceByCode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | [**string**] | The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved | defaults to undefined
 **provinceCode** | [**string**] | The ISO 3166-2 code or name of the province to be retrieved | defaults to undefined


### Return type

**Province**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCountries**
> ListCountriesResponse listCountries()

Retrieves a list of countries

### Example


```typescript
import { createConfiguration, LocaleApi } from '';

const configuration = createConfiguration();
const apiInstance = new LocaleApi(configuration);

const request = {};

const data = await apiInstance.listCountries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListCountriesResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProvincesForCountry**
> ListProvincesResponse listProvincesForCountry()

Retrieves a list of provinces for a given country

### Example


```typescript
import { createConfiguration, LocaleApi } from '';
import type { LocaleApiListProvincesForCountryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LocaleApi(configuration);

const request: LocaleApiListProvincesForCountryRequest = {
  
  countryCode: "country_code_example",
};

const data = await apiInstance.listProvincesForCountry(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | [**string**] |  | defaults to undefined


### Return type

**ListProvincesResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


