# keap_core_v2_client.AffiliateApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_affiliate**](AffiliateApi.md#add_affiliate) | **POST** /v2/affiliates | Create an Affiliate
[**add_affiliate_to_program**](AffiliateApi.md#add_affiliate_to_program) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**add_commission_program**](AffiliateApi.md#add_commission_program) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assign_product_commission_program**](AffiliateApi.md#assign_product_commission_program) | **POST** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Assign a Product Commission Program
[**assign_subscription_commission_program**](AffiliateApi.md#assign_subscription_commission_program) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Assign a Subscription Commission Program
[**create_default_commission_program**](AffiliateApi.md#create_default_commission_program) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Create a Default Commission Program
[**create_redirect_link**](AffiliateApi.md#create_redirect_link) | **POST** /v2/affiliates/redirects | Create an Affiliate Link
[**delete_affiliate**](AffiliateApi.md#delete_affiliate) | **DELETE** /v2/affiliates/{id} | Delete Affiliate
[**delete_affiliate_commission_program**](AffiliateApi.md#delete_affiliate_commission_program) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**delete_redirect_link**](AffiliateApi.md#delete_redirect_link) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**get_affiliate**](AffiliateApi.md#get_affiliate) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
[**get_affiliate_commission_total**](AffiliateApi.md#get_affiliate_commission_total) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**get_affiliate_commissions**](AffiliateApi.md#get_affiliate_commissions) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks
[**get_commission_program**](AffiliateApi.md#get_commission_program) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**get_redirect_link**](AffiliateApi.md#get_redirect_link) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**list_affiliate_commission_programs**](AffiliateApi.md#list_affiliate_commission_programs) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**list_affiliate_links**](AffiliateApi.md#list_affiliate_links) | **GET** /v2/affiliates/redirects | List Affiliate Links
[**list_summaries**](AffiliateApi.md#list_summaries) | **GET** /v2/affiliates/summaries | List Affiliate Summaries
[**remove_affiliate_from_program**](AffiliateApi.md#remove_affiliate_from_program) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**remove_product_commission_from_commissions**](AffiliateApi.md#remove_product_commission_from_commissions) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program
[**remove_subscription_plan_commission_from_commissions**](AffiliateApi.md#remove_subscription_plan_commission_from_commissions) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**update_affiliate**](AffiliateApi.md#update_affiliate) | **PATCH** /v2/affiliates/{id} | Update an Affiliate
[**update_commission_program**](AffiliateApi.md#update_commission_program) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program
[**update_default_commission_program**](AffiliateApi.md#update_default_commission_program) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**update_product_commission_program**](AffiliateApi.md#update_product_commission_program) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**update_redirect_link**](AffiliateApi.md#update_redirect_link) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link
[**update_subscription_commission_program**](AffiliateApi.md#update_subscription_commission_program) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program


# **add_affiliate**
> RestAffiliate add_affiliate(create_affiliate_request=create_affiliate_request)

Create an Affiliate

Creates a single Affiliate

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_affiliate_request import CreateAffiliateRequest
from keap_core_v2_client.models.rest_affiliate import RestAffiliate
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    create_affiliate_request = keap_core_v2_client.CreateAffiliateRequest() # CreateAffiliateRequest | Affiliate request to insert (optional)

    try:
        # Create an Affiliate
        api_response = api_instance.add_affiliate(create_affiliate_request=create_affiliate_request)
        print("The response of AffiliateApi->add_affiliate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->add_affiliate: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_affiliate_request** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)| Affiliate request to insert | [optional] 

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
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_affiliate_to_program**
> add_affiliate_to_program(id, affiliate_add_to_program_request)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_add_to_program_request import AffiliateAddToProgramRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    id = 'id_example' # str | id
    affiliate_add_to_program_request = keap_core_v2_client.AffiliateAddToProgramRequest() # AffiliateAddToProgramRequest | affiliateAddToProgramRequest

    try:
        # Assign Affiliate to Commission program
        api_instance.add_affiliate_to_program(id, affiliate_add_to_program_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->add_affiliate_to_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **affiliate_add_to_program_request** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)| affiliateAddToProgramRequest | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_commission_program**
> AffiliateCommissionProgramResponse add_commission_program(create_commission_program_request=create_commission_program_request)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_commission_program_response import AffiliateCommissionProgramResponse
from keap_core_v2_client.models.create_commission_program_request import CreateCommissionProgramRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    create_commission_program_request = keap_core_v2_client.CreateCommissionProgramRequest() # CreateCommissionProgramRequest | Commission Program to insert (optional)

    try:
        # Create an Affiliate Commission Program
        api_response = api_instance.add_commission_program(create_commission_program_request=create_commission_program_request)
        print("The response of AffiliateApi->add_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->add_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_commission_program_request** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)| Commission Program to insert | [optional] 

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
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_product_commission_program**
> ProductCommissionProgram assign_product_commission_program(commission_program_id, create_product_commission_program_request=create_product_commission_program_request)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_product_commission_program_request import CreateProductCommissionProgramRequest
from keap_core_v2_client.models.product_commission_program import ProductCommissionProgram
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    create_product_commission_program_request = keap_core_v2_client.CreateProductCommissionProgramRequest() # CreateProductCommissionProgramRequest | Product Commission Program (optional)

    try:
        # Assign a Product Commission Program
        api_response = api_instance.assign_product_commission_program(commission_program_id, create_product_commission_program_request=create_product_commission_program_request)
        print("The response of AffiliateApi->assign_product_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->assign_product_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **create_product_commission_program_request** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)| Product Commission Program | [optional] 

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
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_subscription_commission_program**
> SubscriptionCommissionProgram assign_subscription_commission_program(commission_program_id, create_subscription_commission_program_request=create_subscription_commission_program_request)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_subscription_commission_program_request import CreateSubscriptionCommissionProgramRequest
from keap_core_v2_client.models.subscription_commission_program import SubscriptionCommissionProgram
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    create_subscription_commission_program_request = keap_core_v2_client.CreateSubscriptionCommissionProgramRequest() # CreateSubscriptionCommissionProgramRequest | Subscription Commission Program (optional)

    try:
        # Assign a Subscription Commission Program
        api_response = api_instance.assign_subscription_commission_program(commission_program_id, create_subscription_commission_program_request=create_subscription_commission_program_request)
        print("The response of AffiliateApi->assign_subscription_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->assign_subscription_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **create_subscription_commission_program_request** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)| Subscription Commission Program | [optional] 

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
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_default_commission_program**
> SetDefaultCommissionProgramResponse create_default_commission_program(commission_program_id, create_default_commission_program_request=create_default_commission_program_request)

Create a Default Commission Program

Creates a Default Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_default_commission_program_request import CreateDefaultCommissionProgramRequest
from keap_core_v2_client.models.set_default_commission_program_response import SetDefaultCommissionProgramResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    create_default_commission_program_request = keap_core_v2_client.CreateDefaultCommissionProgramRequest() # CreateDefaultCommissionProgramRequest | Values of the Default Commission Program (optional)

    try:
        # Create a Default Commission Program
        api_response = api_instance.create_default_commission_program(commission_program_id, create_default_commission_program_request=create_default_commission_program_request)
        print("The response of AffiliateApi->create_default_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->create_default_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **create_default_commission_program_request** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)| Values of the Default Commission Program | [optional] 

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
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_redirect_link**
> AffiliateLink create_redirect_link(create_or_update_affiliate_link_request)

Create an Affiliate Link

Creates a single Affiliate Link

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_link import AffiliateLink
from keap_core_v2_client.models.create_or_update_affiliate_link_request import CreateOrUpdateAffiliateLinkRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    create_or_update_affiliate_link_request = keap_core_v2_client.CreateOrUpdateAffiliateLinkRequest() # CreateOrUpdateAffiliateLinkRequest | request

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
 **create_or_update_affiliate_link_request** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)| request | 

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
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_affiliate**
> delete_affiliate(id)

Delete Affiliate

Deletes the specified Affiliate

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    id = 'id_example' # str | id

    try:
        # Delete Affiliate
        api_instance.delete_affiliate(id)
    except Exception as e:
        print("Exception when calling AffiliateApi->delete_affiliate: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_affiliate_commission_program**
> delete_affiliate_commission_program(commission_program_id)

Delete a Commission Program

Deletes a Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id

    try:
        # Delete a Commission Program
        api_instance.delete_affiliate_commission_program(commission_program_id)
    except Exception as e:
        print("Exception when calling AffiliateApi->delete_affiliate_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_redirect_link**
> delete_redirect_link(redirect_id)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    redirect_id = 'redirect_id_example' # str | redirect_id

    try:
        # Delete an Affiliate Link
        api_instance.delete_redirect_link(redirect_id)
    except Exception as e:
        print("Exception when calling AffiliateApi->delete_redirect_link: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_id** | **str**| redirect_id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_affiliate**
> RestAffiliate get_affiliate(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_affiliate import RestAffiliate
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    id = 'id_example' # str | id

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
 **id** | **str**| id | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_affiliate_commission_total**
> AffiliateCommissionEarned get_affiliate_commission_total(affiliate_id)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_commission_earned import AffiliateCommissionEarned
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    affiliate_id = 'affiliate_id_example' # str | affiliate_id

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
 **affiliate_id** | **str**| affiliate_id | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_affiliate_commissions**
> ListAffiliateCommissionsResponse get_affiliate_commissions(affiliate_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate's Commissions and Clawbacks

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliate_commissions_response import ListAffiliateCommissionsResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    affiliate_id = 'affiliate_id_example' # str | affiliate_id
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `affiliateId` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliateId%3D%3D123`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `invoice_id` - `affowed_id` - `date_earned`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # Retrieve Affiliate Commission and Clawbacks
        api_response = api_instance.get_affiliate_commissions(affiliate_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->get_affiliate_commissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_affiliate_commissions: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_id** | **str**| affiliate_id | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;affiliateId&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliateId%3D%3D123&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;affowed_id&#x60; - &#x60;date_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_commission_program**
> AffiliateProgramV2 get_commission_program(commission_program_id)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_program_v2 import AffiliateProgramV2
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id

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
 **commission_program_id** | **str**| commission_program_id | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_redirect_link**
> AffiliateLink get_redirect_link(redirect_id)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_link import AffiliateLink
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    redirect_id = 'redirect_id_example' # str | redirect_id

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
 **redirect_id** | **str**| redirect_id | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_affiliate_commission_programs**
> ListAffiliateCommissionProgramsResponse list_affiliate_commission_programs(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliate_commission_programs_response import ListAffiliateCommissionProgramsResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_affiliate_links**
> ListAffiliateLinksResponse list_affiliate_links(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliate_links_response import ListAffiliateLinksResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_summaries**
> ListAffiliateSummariesResponse list_summaries(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliate Summaries

Retrieves a list of Affiliate Summaries

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_affiliate_summaries_response import ListAffiliateSummariesResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional)
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
 **filter** | **str**| Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_affiliate_from_program**
> remove_affiliate_from_program(id, affiliate_remove_from_program_request)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_remove_from_program_request import AffiliateRemoveFromProgramRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    id = 'id_example' # str | id
    affiliate_remove_from_program_request = keap_core_v2_client.AffiliateRemoveFromProgramRequest() # AffiliateRemoveFromProgramRequest | removeFromProgramRequest

    try:
        # Remove an Affiliate from a Commission Program
        api_instance.remove_affiliate_from_program(id, affiliate_remove_from_program_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->remove_affiliate_from_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **affiliate_remove_from_program_request** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)| removeFromProgramRequest | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_product_commission_from_commissions**
> remove_product_commission_from_commissions(commission_id, delete_program_commission_request)

Remove a Product from a Commission Program

Removes a Product from a Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.delete_program_commission_request import DeleteProgramCommissionRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_id = 'commission_id_example' # str | commission_id
    delete_program_commission_request = keap_core_v2_client.DeleteProgramCommissionRequest() # DeleteProgramCommissionRequest | deleteProgramCommissionRequest

    try:
        # Remove a Product from a Commission Program
        api_instance.remove_product_commission_from_commissions(commission_id, delete_program_commission_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->remove_product_commission_from_commissions: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_id** | **str**| commission_id | 
 **delete_program_commission_request** | [**DeleteProgramCommissionRequest**](DeleteProgramCommissionRequest.md)| deleteProgramCommissionRequest | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_subscription_plan_commission_from_commissions**
> remove_subscription_plan_commission_from_commissions(commission_id, delete_subscription_plan_commission_request)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.delete_subscription_plan_commission_request import DeleteSubscriptionPlanCommissionRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_id = 'commission_id_example' # str | commission_id
    delete_subscription_plan_commission_request = keap_core_v2_client.DeleteSubscriptionPlanCommissionRequest() # DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest

    try:
        # Remove a Subscription from a Commission Program
        api_instance.remove_subscription_plan_commission_from_commissions(commission_id, delete_subscription_plan_commission_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->remove_subscription_plan_commission_from_commissions: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_id** | **str**| commission_id | 
 **delete_subscription_plan_commission_request** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)| deleteSubscriptionPlanCommissionRequest | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_affiliate**
> RestAffiliate update_affiliate(id, update_affiliate_request=update_affiliate_request)

Update an Affiliate

Updates a single Affiliate

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_affiliate import RestAffiliate
from keap_core_v2_client.models.update_affiliate_request import UpdateAffiliateRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    id = 'id_example' # str | id
    update_affiliate_request = keap_core_v2_client.UpdateAffiliateRequest() # UpdateAffiliateRequest | Request to update an affiliate (optional)

    try:
        # Update an Affiliate
        api_response = api_instance.update_affiliate(id, update_affiliate_request=update_affiliate_request)
        print("The response of AffiliateApi->update_affiliate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_affiliate: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **update_affiliate_request** | [**UpdateAffiliateRequest**](UpdateAffiliateRequest.md)| Request to update an affiliate | [optional] 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_commission_program**
> AffiliateCommissionProgramResponse update_commission_program(commission_program_id, update_commission_program_request, update_mask=update_mask)

Update an Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_commission_program_response import AffiliateCommissionProgramResponse
from keap_core_v2_client.models.update_commission_program_request import UpdateCommissionProgramRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    update_commission_program_request = keap_core_v2_client.UpdateCommissionProgramRequest() # UpdateCommissionProgramRequest | updateCommissionProgramRequest
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

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
 **commission_program_id** | **str**| commission_program_id | 
 **update_commission_program_request** | [**UpdateCommissionProgramRequest**](UpdateCommissionProgramRequest.md)| updateCommissionProgramRequest | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_default_commission_program**
> SetDefaultCommissionProgramResponse update_default_commission_program(commission_program_id, update_mask=update_mask, update_default_commission_program_request=update_default_commission_program_request)

Update a Default Commission Program

Updates a Default Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.set_default_commission_program_response import SetDefaultCommissionProgramResponse
from keap_core_v2_client.models.update_default_commission_program_request import UpdateDefaultCommissionProgramRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    update_mask = ['update_mask_example'] # List[str] | update_mask (optional)
    update_default_commission_program_request = keap_core_v2_client.UpdateDefaultCommissionProgramRequest() # UpdateDefaultCommissionProgramRequest | Values of the default Commission Program (optional)

    try:
        # Update a Default Commission Program
        api_response = api_instance.update_default_commission_program(commission_program_id, update_mask=update_mask, update_default_commission_program_request=update_default_commission_program_request)
        print("The response of AffiliateApi->update_default_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_default_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **update_mask** | [**List[str]**](str.md)| update_mask | [optional] 
 **update_default_commission_program_request** | [**UpdateDefaultCommissionProgramRequest**](UpdateDefaultCommissionProgramRequest.md)| Values of the default Commission Program | [optional] 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_product_commission_program**
> ProductCommissionProgram update_product_commission_program(commission_program_id, update_mask=update_mask, update_product_commission_program_request=update_product_commission_program_request)

Update a Product Commission Program

Updates a Product Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.product_commission_program import ProductCommissionProgram
from keap_core_v2_client.models.update_product_commission_program_request import UpdateProductCommissionProgramRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    update_mask = ['update_mask_example'] # List[str] | update_mask (optional)
    update_product_commission_program_request = keap_core_v2_client.UpdateProductCommissionProgramRequest() # UpdateProductCommissionProgramRequest | Values of the product Commission Program (optional)

    try:
        # Update a Product Commission Program
        api_response = api_instance.update_product_commission_program(commission_program_id, update_mask=update_mask, update_product_commission_program_request=update_product_commission_program_request)
        print("The response of AffiliateApi->update_product_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_product_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **update_mask** | [**List[str]**](str.md)| update_mask | [optional] 
 **update_product_commission_program_request** | [**UpdateProductCommissionProgramRequest**](UpdateProductCommissionProgramRequest.md)| Values of the product Commission Program | [optional] 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_redirect_link**
> AffiliateLink update_redirect_link(redirect_id, create_or_update_affiliate_link_request)

Update an Affiliate Link

Updates an Affiliate Link

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.affiliate_link import AffiliateLink
from keap_core_v2_client.models.create_or_update_affiliate_link_request import CreateOrUpdateAffiliateLinkRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    redirect_id = 'redirect_id_example' # str | redirect_id
    create_or_update_affiliate_link_request = keap_core_v2_client.CreateOrUpdateAffiliateLinkRequest() # CreateOrUpdateAffiliateLinkRequest | request

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
 **redirect_id** | **str**| redirect_id | 
 **create_or_update_affiliate_link_request** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)| request | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_subscription_commission_program**
> SubscriptionCommissionProgram update_subscription_commission_program(commission_program_id, update_mask=update_mask, update_subscription_commission_program_request=update_subscription_commission_program_request)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.subscription_commission_program import SubscriptionCommissionProgram
from keap_core_v2_client.models.update_subscription_commission_program_request import UpdateSubscriptionCommissionProgramRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    update_mask = ['update_mask_example'] # List[str] | update_mask (optional)
    update_subscription_commission_program_request = keap_core_v2_client.UpdateSubscriptionCommissionProgramRequest() # UpdateSubscriptionCommissionProgramRequest | Values of the subscription Commission Program (optional)

    try:
        # Update a Subscription Commission Program
        api_response = api_instance.update_subscription_commission_program(commission_program_id, update_mask=update_mask, update_subscription_commission_program_request=update_subscription_commission_program_request)
        print("The response of AffiliateApi->update_subscription_commission_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_subscription_commission_program: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **update_mask** | [**List[str]**](str.md)| update_mask | [optional] 
 **update_subscription_commission_program_request** | [**UpdateSubscriptionCommissionProgramRequest**](UpdateSubscriptionCommissionProgramRequest.md)| Values of the subscription Commission Program | [optional] 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

