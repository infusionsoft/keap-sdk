# keap_core_v2_client.ReferralApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_referral**](ReferralApi.md#create_referral) | **POST** /v2/referrals | Create a Referral


# **create_referral**
> Referral create_referral(create_referral_request)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_referral_request import CreateReferralRequest
from keap_core_v2_client.models.referral import Referral
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
    api_instance = keap_core_v2_client.ReferralApi(api_client)
    create_referral_request = keap_core_v2_client.CreateReferralRequest() # CreateReferralRequest | request

    try:
        # Create a Referral
        api_response = api_instance.create_referral(create_referral_request)
        print("The response of ReferralApi->create_referral:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferralApi->create_referral: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_referral_request** | [**CreateReferralRequest**](CreateReferralRequest.md)| request | 

### Return type

[**Referral**](Referral.md)

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

