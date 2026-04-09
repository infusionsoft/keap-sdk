# keap_core_v2_client.BusinessProfileApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_business_profile**](BusinessProfileApi.md#get_business_profile) | **GET** /rest/v2/businessProfile | Retrieve Business Profile
[**update_business_profile**](BusinessProfileApi.md#update_business_profile) | **PATCH** /rest/v2/businessProfile | Update Business Profile


# **get_business_profile**
> GetBusinessProfileResponse get_business_profile()

Retrieve Business Profile

Retrieves Business Profile information.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.get_business_profile_response import GetBusinessProfileResponse
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
    api_instance = keap_core_v2_client.BusinessProfileApi(api_client)

    try:
        # Retrieve Business Profile
        api_response = api_instance.get_business_profile()
        print("The response of BusinessProfileApi->get_business_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BusinessProfileApi->get_business_profile: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

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

# **update_business_profile**
> GetBusinessProfileResponse update_business_profile(update_business_profile_request, update_mask=update_mask)

Update Business Profile

Updates Business Profile information.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.get_business_profile_response import GetBusinessProfileResponse
from keap_core_v2_client.models.update_business_profile_request import UpdateBusinessProfileRequest
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
    api_instance = keap_core_v2_client.BusinessProfileApi(api_client)
    update_business_profile_request = keap_core_v2_client.UpdateBusinessProfileRequest() # UpdateBusinessProfileRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update Business Profile
        api_response = api_instance.update_business_profile(update_business_profile_request, update_mask=update_mask)
        print("The response of BusinessProfileApi->update_business_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BusinessProfileApi->update_business_profile: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_business_profile_request** | [**UpdateBusinessProfileRequest**](UpdateBusinessProfileRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

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

