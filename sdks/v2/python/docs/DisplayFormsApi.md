# keap_core_v2_client.DisplayFormsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_display_form**](DisplayFormsApi.md#get_display_form) | **GET** /v2/pipelines/{pipeline_id}/form | Retrieves a specific display form by a pipeline ID.
[**update_display_form**](DisplayFormsApi.md#update_display_form) | **PATCH** /v2/pipelines/{pipeline_id}/form | Updates a display form


# **get_display_form**
> DisplayForm get_display_form(pipeline_id)

Retrieves a specific display form by a pipeline ID.

Retrieves a specific display form by a pipeline ID.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.display_form import DisplayForm
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
    api_instance = keap_core_v2_client.DisplayFormsApi(api_client)
    pipeline_id = 'pipeline_id_example' # str | the ID of the pipeline containing the form

    try:
        # Retrieves a specific display form by a pipeline ID.
        api_response = api_instance.get_display_form(pipeline_id)
        print("The response of DisplayFormsApi->get_display_form:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisplayFormsApi->get_display_form: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pipeline_id** | **str**| the ID of the pipeline containing the form | 

### Return type

[**DisplayForm**](DisplayForm.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the requested Deal |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_display_form**
> DisplayForm update_display_form(pipeline_id, update_display_form_request)

Updates a display form

Updates a display form

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.display_form import DisplayForm
from keap_core_v2_client.models.update_display_form_request import UpdateDisplayFormRequest
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
    api_instance = keap_core_v2_client.DisplayFormsApi(api_client)
    pipeline_id = 'pipeline_id_example' # str | the ID of the pipeline containing the form
    update_display_form_request = keap_core_v2_client.UpdateDisplayFormRequest() # UpdateDisplayFormRequest | the request body containing updated display form details

    try:
        # Updates a display form
        api_response = api_instance.update_display_form(pipeline_id, update_display_form_request)
        print("The response of DisplayFormsApi->update_display_form:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisplayFormsApi->update_display_form: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pipeline_id** | **str**| the ID of the pipeline containing the form | 
 **update_display_form_request** | [**UpdateDisplayFormRequest**](UpdateDisplayFormRequest.md)| the request body containing updated display form details | 

### Return type

[**DisplayForm**](DisplayForm.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the updated DisplayForm |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

