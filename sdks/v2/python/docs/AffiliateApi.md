# keap_core_v2_client.AffiliateApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_affiliate**](AffiliateApi.md#add_affiliate) | **POST** /rest/v2/affiliates | Create an Affiliate
[**add_affiliate_to_program**](AffiliateApi.md#add_affiliate_to_program) | **POST** /rest/v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**add_commission_program**](AffiliateApi.md#add_commission_program) | **POST** /rest/v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assign_product_commission_program**](AffiliateApi.md#assign_product_commission_program) | **POST** /rest/v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Assign a Product Commission Program
[**assign_subscription_commission_program**](AffiliateApi.md#assign_subscription_commission_program) | **POST** /rest/v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Assign a Subscription Commission Program
[**create_affiliate_custom_field**](AffiliateApi.md#create_affiliate_custom_field) | **POST** /rest/v2/affiliates/model/customFields | Create an Affiliate Custom Field
[**create_default_commission_program**](AffiliateApi.md#create_default_commission_program) | **POST** /rest/v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Create a Default Commission Program
[**create_redirect_link**](AffiliateApi.md#create_redirect_link) | **POST** /rest/v2/affiliates/redirects | Create an Affiliate Link
[**delete_affiliate**](AffiliateApi.md#delete_affiliate) | **DELETE** /rest/v2/affiliates/{id} | Delete Affiliate
[**delete_affiliate_commission_program**](AffiliateApi.md#delete_affiliate_commission_program) | **DELETE** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**delete_affiliate_custom_field**](AffiliateApi.md#delete_affiliate_custom_field) | **DELETE** /rest/v2/affiliates/model/customFields/{custom_field_id} | Delete a Custom Field
[**delete_redirect_link**](AffiliateApi.md#delete_redirect_link) | **DELETE** /rest/v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**get_affiliate**](AffiliateApi.md#get_affiliate) | **GET** /rest/v2/affiliates/{id} | Retrieve an Affiliate
[**get_affiliate_commission_total**](AffiliateApi.md#get_affiliate_commission_total) | **GET** /rest/v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**get_affiliate_commissions**](AffiliateApi.md#get_affiliate_commissions) | **GET** /rest/v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commissions
[**get_affiliate_custom_fields**](AffiliateApi.md#get_affiliate_custom_fields) | **GET** /rest/v2/affiliates/model | Retrieve Affiliate Model
[**get_commission_program**](AffiliateApi.md#get_commission_program) | **GET** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**get_redirect_link**](AffiliateApi.md#get_redirect_link) | **GET** /rest/v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**get_referrals_by_affiliate_id**](AffiliateApi.md#get_referrals_by_affiliate_id) | **GET** /rest/v2/affiliates/{affiliate_id}/referrals | Retrieve Affiliate Referrals
[**list_affiliate**](AffiliateApi.md#list_affiliate) | **GET** /rest/v2/affiliates | List Affiliates
[**list_affiliate_commission_programs**](AffiliateApi.md#list_affiliate_commission_programs) | **GET** /rest/v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**list_affiliate_links**](AffiliateApi.md#list_affiliate_links) | **GET** /rest/v2/affiliates/redirects | List Affiliate Links
[**list_affiliate_payments**](AffiliateApi.md#list_affiliate_payments) | **GET** /rest/v2/affiliates/{affiliate_id}/payments | List Affiliate Payments
[**list_commission_program_resources**](AffiliateApi.md#list_commission_program_resources) | **GET** /rest/v2/affiliates/commissionPrograms/{commission_program_id}/resources | Retrieve Commission Program Resources
[**list_summaries**](AffiliateApi.md#list_summaries) | **GET** /rest/v2/affiliates/summaries | List Affiliate Summaries
[**remove_affiliate_from_program**](AffiliateApi.md#remove_affiliate_from_program) | **POST** /rest/v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**remove_product_commission_from_commissions**](AffiliateApi.md#remove_product_commission_from_commissions) | **POST** /rest/v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program
[**remove_subscription_plan_commission_from_commissions**](AffiliateApi.md#remove_subscription_plan_commission_from_commissions) | **POST** /rest/v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**update_affiliate**](AffiliateApi.md#update_affiliate) | **PATCH** /rest/v2/affiliates/{id} | Update an Affiliate
[**update_affiliate_custom_field**](AffiliateApi.md#update_affiliate_custom_field) | **PATCH** /rest/v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field
[**update_commission_program**](AffiliateApi.md#update_commission_program) | **PATCH** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program
[**update_default_commission_program**](AffiliateApi.md#update_default_commission_program) | **PATCH** /rest/v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**update_product_commission_program**](AffiliateApi.md#update_product_commission_program) | **PATCH** /rest/v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**update_redirect_link**](AffiliateApi.md#update_redirect_link) | **PATCH** /rest/v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link
[**update_subscription_commission_program**](AffiliateApi.md#update_subscription_commission_program) | **PATCH** /rest/v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program


# **add_affiliate**
> RestAffiliate add_affiliate(create_affiliate_request)

Create an Affiliate

Creates a single Affiliate

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_affiliate_request import CreateAffiliateRequest
from keap_core_v2_client.models.rest_affiliate import RestAffiliate
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    create_affiliate_request = keap_core_v2_client.CreateAffiliateRequest() # CreateAffiliateRequest | 

    try:
        # Create an Affiliate
        api_response = api_instance.add_affiliate(create_affiliate_request)
        print("The response of AffiliateApi->add_affiliate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->add_affiliate: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_affiliate_request** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)|  | 

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
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_affiliate_to_program**
> add_affiliate_to_program(id, affiliate_add_to_program_request)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_add_to_program_request import AffiliateAddToProgramRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    id = 'id_example' # str | 
    affiliate_add_to_program_request = keap_core_v2_client.AffiliateAddToProgramRequest() # AffiliateAddToProgramRequest | 

    try:
        # Assign Affiliate to Commission program
        api_instance.add_affiliate_to_program(id, affiliate_add_to_program_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->add_affiliate_to_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **affiliate_add_to_program_request** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)|  | 

### Return type

void (empty response body)

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_commission_program**
> AffiliateCommissionProgramResponse add_commission_program(create_commission_program_request)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_commission_program_response import AffiliateCommissionProgramResponse
from keap_core_v2_client.models.create_commission_program_request import CreateCommissionProgramRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    create_commission_program_request = keap_core_v2_client.CreateCommissionProgramRequest() # CreateCommissionProgramRequest | 

    try:
        # Create an Affiliate Commission Program
        api_response = api_instance.add_commission_program(create_commission_program_request)
        print("The response of AffiliateApi->add_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->add_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_commission_program_request** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)|  | 

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
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_product_commission_program**
> GetRestCommissionProgram assign_product_commission_program(commission_program_id, create_product_commission_program_request)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_product_commission_program_request import CreateProductCommissionProgramRequest
from keap_core_v2_client.models.get_rest_commission_program import GetRestCommissionProgram
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | 
    create_product_commission_program_request = keap_core_v2_client.CreateProductCommissionProgramRequest() # CreateProductCommissionProgramRequest | 

    try:
        # Assign a Product Commission Program
        api_response = api_instance.assign_product_commission_program(commission_program_id, create_product_commission_program_request)
        print("The response of AffiliateApi->assign_product_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->assign_product_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**|  | 
 **create_product_commission_program_request** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)|  | 

### Return type

[**GetRestCommissionProgram**](GetRestCommissionProgram.md)

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_subscription_commission_program**
> GetRestCommissionProgram assign_subscription_commission_program(commission_program_id, create_subscription_commission_program_request)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_subscription_commission_program_request import CreateSubscriptionCommissionProgramRequest
from keap_core_v2_client.models.get_rest_commission_program import GetRestCommissionProgram
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | 
    create_subscription_commission_program_request = keap_core_v2_client.CreateSubscriptionCommissionProgramRequest() # CreateSubscriptionCommissionProgramRequest | 

    try:
        # Assign a Subscription Commission Program
        api_response = api_instance.assign_subscription_commission_program(commission_program_id, create_subscription_commission_program_request)
        print("The response of AffiliateApi->assign_subscription_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->assign_subscription_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**|  | 
 **create_subscription_commission_program_request** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)|  | 

### Return type

[**GetRestCommissionProgram**](GetRestCommissionProgram.md)

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_affiliate_custom_field**
> CustomFieldMetaData create_affiliate_custom_field(create_custom_field_request)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    create_custom_field_request = keap_core_v2_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | 

    try:
        # Create an Affiliate Custom Field
        api_response = api_instance.create_affiliate_custom_field(create_custom_field_request)
        print("The response of AffiliateApi->create_affiliate_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->create_affiliate_custom_field: %s\n" % e)
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_default_commission_program**
> GetRestCommissionProgram create_default_commission_program(commission_program_id, create_default_commission_program_request)

Create a Default Commission Program

Creates a Default Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_default_commission_program_request import CreateDefaultCommissionProgramRequest
from keap_core_v2_client.models.get_rest_commission_program import GetRestCommissionProgram
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | 
    create_default_commission_program_request = keap_core_v2_client.CreateDefaultCommissionProgramRequest() # CreateDefaultCommissionProgramRequest | 

    try:
        # Create a Default Commission Program
        api_response = api_instance.create_default_commission_program(commission_program_id, create_default_commission_program_request)
        print("The response of AffiliateApi->create_default_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->create_default_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**|  | 
 **create_default_commission_program_request** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)|  | 

### Return type

[**GetRestCommissionProgram**](GetRestCommissionProgram.md)

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_redirect_link**
> AffiliateLink create_redirect_link(create_or_update_affiliate_link_request)

Create an Affiliate Link

Creates a single Affiliate Link

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_link import AffiliateLink
from keap_core_v2_client.models.create_or_update_affiliate_link_request import CreateOrUpdateAffiliateLinkRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    create_or_update_affiliate_link_request = keap_core_v2_client.CreateOrUpdateAffiliateLinkRequest() # CreateOrUpdateAffiliateLinkRequest | 

    try:
        # Create an Affiliate Link
        api_response = api_instance.create_redirect_link(create_or_update_affiliate_link_request)
        print("The response of AffiliateApi->create_redirect_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->create_redirect_link: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_or_update_affiliate_link_request** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)|  | 

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
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_affiliate**
> delete_affiliate(id)

Delete Affiliate

Deletes the specified Affiliate

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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete Affiliate
        api_instance.delete_affiliate(id)
    except Exception as e:
        print("Exception when calling AffiliateApi->delete_affiliate: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_affiliate_commission_program**
> delete_affiliate_commission_program(commission_program_id)

Delete a Commission Program

Deletes a Commission Program

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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | 

    try:
        # Delete a Commission Program
        api_instance.delete_affiliate_commission_program(commission_program_id)
    except Exception as e:
        print("Exception when calling AffiliateApi->delete_affiliate_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**|  | 

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_affiliate_custom_field**
> delete_affiliate_custom_field(custom_field_id)

Delete a Custom Field

Deletes a Custom Field from Affiliate.

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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | 

    try:
        # Delete a Custom Field
        api_instance.delete_affiliate_custom_field(custom_field_id)
    except Exception as e:
        print("Exception when calling AffiliateApi->delete_affiliate_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**|  | 

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_redirect_link**
> delete_redirect_link(redirect_id)

Delete an Affiliate Link

Deletes an Affiliate Link

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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    redirect_id = 'redirect_id_example' # str | 

    try:
        # Delete an Affiliate Link
        api_instance.delete_redirect_link(redirect_id)
    except Exception as e:
        print("Exception when calling AffiliateApi->delete_redirect_link: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_id** | **str**|  | 

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_affiliate**
> RestAffiliate get_affiliate(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_affiliate import RestAffiliate
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieve an Affiliate
        api_response = api_instance.get_affiliate(id)
        print("The response of AffiliateApi->get_affiliate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_affiliate: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_affiliate_commission_total**
> AffiliateCommissionEarned get_affiliate_commission_total(affiliate_id)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_commission_earned import AffiliateCommissionEarned
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    affiliate_id = 'affiliate_id_example' # str | 

    try:
        # Retrieve Affiliate Commission Earned and View LedgerURl for portal
        api_response = api_instance.get_affiliate_commission_total(affiliate_id)
        print("The response of AffiliateApi->get_affiliate_commission_total:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_affiliate_commission_total: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_id** | **str**|  | 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_affiliate_commissions**
> ListAffiliateCommissionsResponse get_affiliate_commissions(affiliate_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieve Affiliate Commissions

Retrieve a list of Affiliate's Commissions

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliate_commissions_response import ListAffiliateCommissionsResponse
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    affiliate_id = 'affiliate_id_example' # str | 
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z` - `filter=until_time%3D%3D2025-05-21T23:00:00Z`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `invoice_id` - `time_earned`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # Retrieve Affiliate Commissions
        api_response = api_instance.get_affiliate_commissions(affiliate_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->get_affiliate_commissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_affiliate_commissions: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_id** | **str**|  | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-05-21T23:00:00Z&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;time_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_affiliate_custom_fields**
> ObjectModel get_affiliate_custom_fields()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)

    try:
        # Retrieve Affiliate Model
        api_response = api_instance.get_affiliate_custom_fields()
        print("The response of AffiliateApi->get_affiliate_custom_fields:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_affiliate_custom_fields: %s\n" % e)
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_commission_program**
> GetRestCommissionProgram get_commission_program(commission_program_id)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.get_rest_commission_program import GetRestCommissionProgram
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | 

    try:
        # Retrieve a Commission Program
        api_response = api_instance.get_commission_program(commission_program_id)
        print("The response of AffiliateApi->get_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**|  | 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_redirect_link**
> AffiliateLink get_redirect_link(redirect_id)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_link import AffiliateLink
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    redirect_id = 'redirect_id_example' # str | 

    try:
        # Retrieve an Affiliate Link
        api_response = api_instance.get_redirect_link(redirect_id)
        print("The response of AffiliateApi->get_redirect_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_redirect_link: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_id** | **str**|  | 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_referrals_by_affiliate_id**
> ListAffiliateReferralsResponse get_referrals_by_affiliate_id(affiliate_id)

Retrieve Affiliate Referrals

Retrieves all referrals belonging to the given affiliate

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliate_referrals_response import ListAffiliateReferralsResponse
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    affiliate_id = 'affiliate_id_example' # str | 

    try:
        # Retrieve Affiliate Referrals
        api_response = api_instance.get_referrals_by_affiliate_id(affiliate_id)
        print("The response of AffiliateApi->get_referrals_by_affiliate_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_referrals_by_affiliate_id: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_id** | **str**|  | 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_affiliate**
> ListAffiliatesResponse list_affiliate(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliates

Retrieves a list of Affiliates

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliates_response import ListAffiliatesResponse
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `id` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `name` - Wildcard matching allowed - (String) `contact_id` - (String) `referral_contact_id` - (String) `status` - (String) `code`  You will need to apply the `==` operator to check the equality of one of the filters with the value you want to match, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3C123` - `filter=id%3D%3D123` - `filter=name%3D%3DBob` - `filter=contact_id%3D%3D567` - `filter=contact_id%3D%3D123%3Bcode%3D%3D567`  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `id` - `date_created` - `name` - `status` - `code`  One of the following directions: - `asc` - `desc`  (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliates
        api_response = api_instance.list_affiliate(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->list_affiliate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->list_affiliate: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;name&#x60; - Wildcard matching allowed - (String) &#x60;contact_id&#x60; - (String) &#x60;referral_contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with the value you want to match, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3C123&#x60; - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;name%3D%3DBob&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bcode%3D%3D567&#x60;  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_affiliate_commission_programs**
> ListAffiliateCommissionProgramsResponse list_affiliate_commission_programs(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliate_commission_programs_response import ListAffiliateCommissionProgramsResponse
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliate Commission Programs
        api_response = api_instance.list_affiliate_commission_programs(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->list_affiliate_commission_programs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->list_affiliate_commission_programs: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_affiliate_links**
> ListAffiliateLinksResponse list_affiliate_links(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliate_links_response import ListAffiliateLinksResponse
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliate Links
        api_response = api_instance.list_affiliate_links(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->list_affiliate_links:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->list_affiliate_links: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_affiliate_payments**
> ListAffiliatePaymentsResponse list_affiliate_payments(affiliate_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliate Payments

Retrieves a list of affiliate payments

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliate_payments_response import ListAffiliatePaymentsResponse
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    affiliate_id = 'affiliate_id_example' # str | 
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-09-17T-15:50+00` - `filter=until_time%3D%3D2024-09-17T-15:50+00`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `create_time` - `pay_date` - `pay_amount`  One of the following directions: - `asc` - `desc`  (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliate Payments
        api_response = api_instance.list_affiliate_payments(affiliate_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->list_affiliate_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->list_affiliate_payments: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_id** | **str**|  | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60; - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;pay_date&#x60; - &#x60;pay_amount&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_commission_program_resources**
> ListProgramResourcesResponse list_commission_program_resources(commission_program_id)

Retrieve Commission Program Resources

Retrieves resources for a commission program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_program_resources_response import ListProgramResourcesResponse
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | 

    try:
        # Retrieve Commission Program Resources
        api_response = api_instance.list_commission_program_resources(commission_program_id)
        print("The response of AffiliateApi->list_commission_program_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->list_commission_program_resources: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**|  | 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_summaries**
> ListAffiliateSummariesResponse list_summaries(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliate Summaries

Retrieves a list of Affiliate Summaries

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliate_summaries_response import ListAffiliateSummariesResponse
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `affiliate_id` - `amount_earned` - `balance` - `clawbacks`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliate Summaries
        api_response = api_instance.list_summaries(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->list_summaries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->list_summaries: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_affiliate_from_program**
> remove_affiliate_from_program(id, affiliate_remove_from_program_request)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_remove_from_program_request import AffiliateRemoveFromProgramRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    id = 'id_example' # str | 
    affiliate_remove_from_program_request = keap_core_v2_client.AffiliateRemoveFromProgramRequest() # AffiliateRemoveFromProgramRequest | 

    try:
        # Remove an Affiliate from a Commission Program
        api_instance.remove_affiliate_from_program(id, affiliate_remove_from_program_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->remove_affiliate_from_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **affiliate_remove_from_program_request** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)|  | 

### Return type

void (empty response body)

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_product_commission_from_commissions**
> remove_product_commission_from_commissions(commission_id, delete_program_commission_request)

Remove a Product from a Commission Program

Removes a Product from a Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.delete_program_commission_request import DeleteProgramCommissionRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_id = 'commission_id_example' # str | 
    delete_program_commission_request = keap_core_v2_client.DeleteProgramCommissionRequest() # DeleteProgramCommissionRequest | 

    try:
        # Remove a Product from a Commission Program
        api_instance.remove_product_commission_from_commissions(commission_id, delete_program_commission_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->remove_product_commission_from_commissions: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_id** | **str**|  | 
 **delete_program_commission_request** | [**DeleteProgramCommissionRequest**](DeleteProgramCommissionRequest.md)|  | 

### Return type

void (empty response body)

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_subscription_plan_commission_from_commissions**
> remove_subscription_plan_commission_from_commissions(commission_id, delete_subscription_plan_commission_request)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.delete_subscription_plan_commission_request import DeleteSubscriptionPlanCommissionRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_id = 'commission_id_example' # str | 
    delete_subscription_plan_commission_request = keap_core_v2_client.DeleteSubscriptionPlanCommissionRequest() # DeleteSubscriptionPlanCommissionRequest | 

    try:
        # Remove a Subscription from a Commission Program
        api_instance.remove_subscription_plan_commission_from_commissions(commission_id, delete_subscription_plan_commission_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->remove_subscription_plan_commission_from_commissions: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_id** | **str**|  | 
 **delete_subscription_plan_commission_request** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)|  | 

### Return type

void (empty response body)

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_affiliate**
> RestAffiliate update_affiliate(id, update_affiliate_request, update_mask=update_mask)

Update an Affiliate

Updates a single Affiliate

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_affiliate import RestAffiliate
from keap_core_v2_client.models.update_affiliate_request import UpdateAffiliateRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    id = 'id_example' # str | 
    update_affiliate_request = keap_core_v2_client.UpdateAffiliateRequest() # UpdateAffiliateRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Affiliate
        api_response = api_instance.update_affiliate(id, update_affiliate_request, update_mask=update_mask)
        print("The response of AffiliateApi->update_affiliate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_affiliate: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **update_affiliate_request** | [**UpdateAffiliateRequest**](UpdateAffiliateRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_affiliate_custom_field**
> CustomFieldMetaData update_affiliate_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | 
    update_custom_field_meta_data_request = keap_core_v2_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Custom Field
        api_response = api_instance.update_affiliate_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)
        print("The response of AffiliateApi->update_affiliate_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_affiliate_custom_field: %s\n" % e)
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_commission_program**
> AffiliateCommissionProgramResponse update_commission_program(commission_program_id, update_commission_program_request, update_mask=update_mask)

Update an Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_commission_program_response import AffiliateCommissionProgramResponse
from keap_core_v2_client.models.update_commission_program_request import UpdateCommissionProgramRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | 
    update_commission_program_request = keap_core_v2_client.UpdateCommissionProgramRequest() # UpdateCommissionProgramRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Affiliate Commission Program
        api_response = api_instance.update_commission_program(commission_program_id, update_commission_program_request, update_mask=update_mask)
        print("The response of AffiliateApi->update_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**|  | 
 **update_commission_program_request** | [**UpdateCommissionProgramRequest**](UpdateCommissionProgramRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_default_commission_program**
> GetRestCommissionProgram update_default_commission_program(commission_program_id, update_default_commission_program_request, update_mask=update_mask)

Update a Default Commission Program

Updates a Default Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.get_rest_commission_program import GetRestCommissionProgram
from keap_core_v2_client.models.update_default_commission_program_request import UpdateDefaultCommissionProgramRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | 
    update_default_commission_program_request = keap_core_v2_client.UpdateDefaultCommissionProgramRequest() # UpdateDefaultCommissionProgramRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Default Commission Program
        api_response = api_instance.update_default_commission_program(commission_program_id, update_default_commission_program_request, update_mask=update_mask)
        print("The response of AffiliateApi->update_default_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_default_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**|  | 
 **update_default_commission_program_request** | [**UpdateDefaultCommissionProgramRequest**](UpdateDefaultCommissionProgramRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**GetRestCommissionProgram**](GetRestCommissionProgram.md)

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_product_commission_program**
> GetRestCommissionProgram update_product_commission_program(commission_program_id, update_product_commission_program_request, update_mask=update_mask)

Update a Product Commission Program

Updates a Product Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.get_rest_commission_program import GetRestCommissionProgram
from keap_core_v2_client.models.update_product_commission_program_request import UpdateProductCommissionProgramRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | 
    update_product_commission_program_request = keap_core_v2_client.UpdateProductCommissionProgramRequest() # UpdateProductCommissionProgramRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Product Commission Program
        api_response = api_instance.update_product_commission_program(commission_program_id, update_product_commission_program_request, update_mask=update_mask)
        print("The response of AffiliateApi->update_product_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_product_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**|  | 
 **update_product_commission_program_request** | [**UpdateProductCommissionProgramRequest**](UpdateProductCommissionProgramRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**GetRestCommissionProgram**](GetRestCommissionProgram.md)

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_redirect_link**
> AffiliateLink update_redirect_link(redirect_id, create_or_update_affiliate_link_request)

Update an Affiliate Link

Updates an Affiliate Link

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_link import AffiliateLink
from keap_core_v2_client.models.create_or_update_affiliate_link_request import CreateOrUpdateAffiliateLinkRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    redirect_id = 'redirect_id_example' # str | 
    create_or_update_affiliate_link_request = keap_core_v2_client.CreateOrUpdateAffiliateLinkRequest() # CreateOrUpdateAffiliateLinkRequest | 

    try:
        # Update an Affiliate Link
        api_response = api_instance.update_redirect_link(redirect_id, create_or_update_affiliate_link_request)
        print("The response of AffiliateApi->update_redirect_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_redirect_link: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_id** | **str**|  | 
 **create_or_update_affiliate_link_request** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)|  | 

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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_subscription_commission_program**
> GetRestCommissionProgram update_subscription_commission_program(commission_program_id, update_subscription_commission_program_request, update_mask=update_mask)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.get_rest_commission_program import GetRestCommissionProgram
from keap_core_v2_client.models.update_subscription_commission_program_request import UpdateSubscriptionCommissionProgramRequest
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
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | 
    update_subscription_commission_program_request = keap_core_v2_client.UpdateSubscriptionCommissionProgramRequest() # UpdateSubscriptionCommissionProgramRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Subscription Commission Program
        api_response = api_instance.update_subscription_commission_program(commission_program_id, update_subscription_commission_program_request, update_mask=update_mask)
        print("The response of AffiliateApi->update_subscription_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_subscription_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**|  | 
 **update_subscription_commission_program_request** | [**UpdateSubscriptionCommissionProgramRequest**](UpdateSubscriptionCommissionProgramRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**GetRestCommissionProgram**](GetRestCommissionProgram.md)

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

