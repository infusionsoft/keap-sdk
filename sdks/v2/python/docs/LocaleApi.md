# keap_core_v2_client.LocaleApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_country_by_code**](LocaleApi.md#get_country_by_code) | **GET** /rest/v2/locales/countries/{country_code} | Get Country
[**get_province_by_code**](LocaleApi.md#get_province_by_code) | **GET** /rest/v2/locales/countries/{country_code}/provinces/{province_code} | Get Province
[**list_countries**](LocaleApi.md#list_countries) | **GET** /rest/v2/locales/countries | List Countries
[**list_provinces_for_country**](LocaleApi.md#list_provinces_for_country) | **GET** /rest/v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces


# **get_country_by_code**
> Country get_country_by_code(country_code)

Get Country

Gets a country by its code or name

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.country import Country
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.LocaleApi(api_client)
    country_code = 'country_code_example' # str | The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved

    try:
        # Get Country
        api_response = api_instance.get_country_by_code(country_code)
        print("The response of LocaleApi->get_country_by_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocaleApi->get_country_by_code: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**| The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved | 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_province_by_code**
> Province get_province_by_code(country_code, province_code)

Get Province

Get a province by its code or name

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.province import Province
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.LocaleApi(api_client)
    country_code = 'country_code_example' # str | The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved
    province_code = 'province_code_example' # str | The ISO 3166-2 code or name of the province to be retrieved

    try:
        # Get Province
        api_response = api_instance.get_province_by_code(country_code, province_code)
        print("The response of LocaleApi->get_province_by_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocaleApi->get_province_by_code: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**| The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved | 
 **province_code** | **str**| The ISO 3166-2 code or name of the province to be retrieved | 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_countries**
> ListCountriesResponse list_countries()

List Countries

Retrieves a list of countries

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_countries_response import ListCountriesResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.LocaleApi(api_client)

    try:
        # List Countries
        api_response = api_instance.list_countries()
        print("The response of LocaleApi->list_countries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocaleApi->list_countries: %s\n" % e)
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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_provinces_for_country**
> ListProvincesResponse list_provinces_for_country(country_code)

List a Country's Provinces

Retrieves a list of provinces for a given country

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_provinces_response import ListProvincesResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]
# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.LocaleApi(api_client)
    country_code = 'country_code_example' # str | 

    try:
        # List a Country's Provinces
        api_response = api_instance.list_provinces_for_country(country_code)
        print("The response of LocaleApi->list_provinces_for_country:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocaleApi->list_provinces_for_country: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**|  | 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

