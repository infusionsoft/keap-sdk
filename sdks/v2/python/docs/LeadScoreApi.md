# keap_core_v2_client.LeadScoreApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_lead_score_details**](LeadScoreApi.md#get_lead_score_details) | **GET** /v2/contacts/{contact_id}/leadScore | Retrieve Lead Score of a Contact


# **get_lead_score_details**
> LeadScore get_lead_score_details(contact_id)

Retrieve Lead Score of a Contact

Retrieves information about the Lead Score of a Contact

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.lead_score import LeadScore
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
    api_instance = keap_core_v2_client.LeadScoreApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id

    try:
        # Retrieve Lead Score of a Contact
        api_response = api_instance.get_lead_score_details(contact_id)
        print("The response of LeadScoreApi->get_lead_score_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadScoreApi->get_lead_score_details: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 

### Return type

[**LeadScore**](LeadScore.md)

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

