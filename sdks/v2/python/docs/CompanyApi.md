# keap_core_v2_client.CompanyApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_company**](CompanyApi.md#create_company) | **POST** /rest/v2/companies | Create a Company
[**create_company_custom_field**](CompanyApi.md#create_company_custom_field) | **POST** /rest/v2/companies/model/customFields | Create a Company Custom Field
[**delete_company**](CompanyApi.md#delete_company) | **DELETE** /rest/v2/companies/{company_id} | Delete a Company
[**get_company**](CompanyApi.md#get_company) | **GET** /rest/v2/companies/{company_id} | Retrieve a Company
[**list_companies**](CompanyApi.md#list_companies) | **GET** /rest/v2/companies | List Companies
[**retrieve_company_custom_field_model**](CompanyApi.md#retrieve_company_custom_field_model) | **GET** /rest/v2/companies/model | Retrieve Company Custom Field Model
[**update_company**](CompanyApi.md#update_company) | **PATCH** /rest/v2/companies/{company_id} | Update a Company
[**update_company_custom_field**](CompanyApi.md#update_company_custom_field) | **PATCH** /rest/v2/companies/model/customFields/{custom_field_id} | Update a Company Custom Field


# **create_company**
> Company create_company(create_company_request)

Create a Company

Creates a new Company.`country_code` is required if `region` is specified.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.company import Company
from keap_core_v2_client.models.create_company_request import CreateCompanyRequest
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
    api_instance = keap_core_v2_client.CompanyApi(api_client)
    create_company_request = keap_core_v2_client.CreateCompanyRequest() # CreateCompanyRequest | 

    try:
        # Create a Company
        api_response = api_instance.create_company(create_company_request)
        print("The response of CompanyApi->create_company:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompanyApi->create_company: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_company_request** | [**CreateCompanyRequest**](CreateCompanyRequest.md)|  | 

### Return type

[**Company**](Company.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_company_custom_field**
> CustomFieldMetaData create_company_custom_field(create_custom_field_request)

Create a Company Custom Field

Creates a custom field of the specified type and options to the Company object

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
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
    api_instance = keap_core_v2_client.CompanyApi(api_client)
    create_custom_field_request = keap_core_v2_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | 

    try:
        # Create a Company Custom Field
        api_response = api_instance.create_company_custom_field(create_custom_field_request)
        print("The response of CompanyApi->create_company_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompanyApi->create_company_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | 

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
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_company**
> delete_company(company_id)

Delete a Company

Deletes the specified Company

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
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
    api_instance = keap_core_v2_client.CompanyApi(api_client)
    company_id = 'company_id_example' # str | 

    try:
        # Delete a Company
        api_instance.delete_company(company_id)
    except Exception as e:
        print("Exception when calling CompanyApi->delete_company: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_company**
> Company get_company(company_id, fields=fields)

Retrieve a Company

Retrieves a single Company

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.company import Company
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
    api_instance = keap_core_v2_client.CompanyApi(api_client)
    company_id = 'company_id_example' # str | 
    fields = ['fields_example'] # List[str] | Comma-delimited list of Company properties to include in the response. (Available fields are: `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`) (optional)

    try:
        # Retrieve a Company
        api_response = api_instance.get_company(company_id, fields=fields)
        print("The response of CompanyApi->get_company:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompanyApi->get_company: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **fields** | [**List[str]**](str.md)| Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;) | [optional] 

### Return type

[**Company**](Company.md)

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

# **list_companies**
> ListCompaniesResponse list_companies(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Companies

Retrieves a list of all Companies.<br/><br/>

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_companies_response import ListCompaniesResponse
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
    api_instance = keap_core_v2_client.CompanyApi(api_client)
    fields = ['fields_example'] # List[str] | Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number`, `address`, `email_address`, `phone_number`, `update_time`, `create_time` and `custom_fields` aren't included, by default.) (optional)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `company_name` - (String) `email` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=company_name%3D%3DCompany` - `filter=email%3D%3Dtest@gmail.com` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `name` - `email`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Companies
        api_response = api_instance.list_companies(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of CompanyApi->list_companies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompanyApi->list_companies: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**List[str]**](str.md)| Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;address&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren&#39;t included, by default.) | [optional] 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListCompaniesResponse**](ListCompaniesResponse.md)

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

# **retrieve_company_custom_field_model**
> ObjectModel retrieve_company_custom_field_model()

Retrieve Company Custom Field Model

Get the custom fields for the Company object

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.object_model import ObjectModel
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
    api_instance = keap_core_v2_client.CompanyApi(api_client)

    try:
        # Retrieve Company Custom Field Model
        api_response = api_instance.retrieve_company_custom_field_model()
        print("The response of CompanyApi->retrieve_company_custom_field_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompanyApi->retrieve_company_custom_field_model: %s\n" % e)
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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_company**
> Company update_company(company_id, update_company_request, update_mask=update_mask)

Update a Company

Updates a Company with the values provided in the request

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.company import Company
from keap_core_v2_client.models.update_company_request import UpdateCompanyRequest
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
    api_instance = keap_core_v2_client.CompanyApi(api_client)
    company_id = 'company_id_example' # str | 
    update_company_request = keap_core_v2_client.UpdateCompanyRequest() # UpdateCompanyRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Company
        api_response = api_instance.update_company(company_id, update_company_request, update_mask=update_mask)
        print("The response of CompanyApi->update_company:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompanyApi->update_company: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**|  | 
 **update_company_request** | [**UpdateCompanyRequest**](UpdateCompanyRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**Company**](Company.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
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

# **update_company_custom_field**
> CustomFieldMetaData update_company_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update a Company Custom Field

Updates a custom field of the specified type and options to the Company object

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_core_v2_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest
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
    api_instance = keap_core_v2_client.CompanyApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | 
    update_custom_field_meta_data_request = keap_core_v2_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Company Custom Field
        api_response = api_instance.update_company_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)
        print("The response of CompanyApi->update_company_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompanyApi->update_company_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**|  | 
 **update_custom_field_meta_data_request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

