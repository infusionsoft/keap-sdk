# KeapCoreServiceV2Sdk.LocaleApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCountryByCode**](LocaleApi.md#getCountryByCode) | **GET** /v2/locales/countries/{country_code} | Get Country
[**getProvinceByCode**](LocaleApi.md#getProvinceByCode) | **GET** /v2/locales/countries/{country_code}/provinces/{province_code} | Get Province
[**listCountries**](LocaleApi.md#listCountries) | **GET** /v2/locales/countries | List Countries
[**listProvincesForCountry**](LocaleApi.md#listProvincesForCountry) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Province



## getCountryByCode

> Country getCountryByCode(countryCode)

Get Country

Gets a country by its code or name

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LocaleApi();
let countryCode = "countryCode_example"; // String | The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved
apiInstance.getCountryByCode(countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**| The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved | 

### Return type

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProvinceByCode

> Province getProvinceByCode(countryCode, provinceCode)

Get Province

Get a province by its code or name

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LocaleApi();
let countryCode = "countryCode_example"; // String | The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved
let provinceCode = "provinceCode_example"; // String | The ISO 3166-2 code or name of the province to be retrieved
apiInstance.getProvinceByCode(countryCode, provinceCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**| The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved | 
 **provinceCode** | **String**| The ISO 3166-2 code or name of the province to be retrieved | 

### Return type

[**Province**](Province.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCountries

> ListCountriesResponse listCountries()

List Countries

Retrieves a list of countries

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LocaleApi();
apiInstance.listCountries().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## listProvincesForCountry

> ListProvincesResponse listProvincesForCountry(countryCode)

List a Country&#39;s Province

Retrieves a list of provinces for a given country

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LocaleApi();
let countryCode = "countryCode_example"; // String | country_code
apiInstance.listProvincesForCountry(countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**| country_code | 

### Return type

[**ListProvincesResponse**](ListProvincesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

