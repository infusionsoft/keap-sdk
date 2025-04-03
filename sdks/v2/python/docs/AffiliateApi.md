# keap_core_v2_client.AffiliateApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_affiliate_using_post**](AffiliateApi.md#add_affiliate_using_post) | **POST** /v2/affiliates | Create an Affiliate
[**get_affiliate_using_get1**](AffiliateApi.md#get_affiliate_using_get1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
[**update_affiliate_using_patch**](AffiliateApi.md#update_affiliate_using_patch) | **PATCH** /v2/affiliates/{id} | Update an Affiliate
[**update_commission_program_using_patch**](AffiliateApi.md#update_commission_program_using_patch) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program


# **add_affiliate_using_post**
> RestAffiliate add_affiliate_using_post(create_affiliate_request=create_affiliate_request)

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
        api_response = api_instance.add_affiliate_using_post(create_affiliate_request=create_affiliate_request)
        print("The response of AffiliateApi->add_affiliate_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->add_affiliate_using_post: %s\n" % e)
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

# **get_affiliate_using_get1**
> RestAffiliate get_affiliate_using_get1(id)

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
        api_response = api_instance.get_affiliate_using_get1(id)
        print("The response of AffiliateApi->get_affiliate_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_affiliate_using_get1: %s\n" % e)
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

# **update_affiliate_using_patch**
> RestAffiliate update_affiliate_using_patch(id, update_affiliate_request=update_affiliate_request)

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
        api_response = api_instance.update_affiliate_using_patch(id, update_affiliate_request=update_affiliate_request)
        print("The response of AffiliateApi->update_affiliate_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_affiliate_using_patch: %s\n" % e)
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

# **update_commission_program_using_patch**
> AffiliateCommissionProgramResponse update_commission_program_using_patch(commission_program_id, update_commission_program_request, update_mask=update_mask)

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
        api_response = api_instance.update_commission_program_using_patch(commission_program_id, update_commission_program_request, update_mask=update_mask)
        print("The response of AffiliateApi->update_commission_program_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_commission_program_using_patch: %s\n" % e)
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

