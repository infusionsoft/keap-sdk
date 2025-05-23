# keap_core_v2_client.CustomFieldsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_custom_fields**](CustomFieldsApi.md#get_custom_fields) | **GET** /v2/customFields | Retrieves a list of custom fields in a tenant.
[**update_custom_field**](CustomFieldsApi.md#update_custom_field) | **PATCH** /v2/customFields/{custom_field_id} | Updates a custom field


# **get_custom_fields**
> PipelineCustomFields get_custom_fields()

Retrieves a list of custom fields in a tenant.

Retrieves a list of custom fields in a tenant.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.pipeline_custom_fields import PipelineCustomFields
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
    api_instance = keap_core_v2_client.CustomFieldsApi(api_client)

    try:
        # Retrieves a list of custom fields in a tenant.
        api_response = api_instance.get_custom_fields()
        print("The response of CustomFieldsApi->get_custom_fields:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->get_custom_fields: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**PipelineCustomFields**](PipelineCustomFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of PipelineCustomFields |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_custom_field**
> PipelineCustomField update_custom_field(custom_field_id, update_custom_field_request)

Updates a custom field

Updates a custom field

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.pipeline_custom_field import PipelineCustomField
from keap_core_v2_client.models.update_custom_field_request import UpdateCustomFieldRequest
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
    api_instance = keap_core_v2_client.CustomFieldsApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | the identifier of the custom field to update
    update_custom_field_request = keap_core_v2_client.UpdateCustomFieldRequest() # UpdateCustomFieldRequest | the request body containing updated custom field details

    try:
        # Updates a custom field
        api_response = api_instance.update_custom_field(custom_field_id, update_custom_field_request)
        print("The response of CustomFieldsApi->update_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomFieldsApi->update_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| the identifier of the custom field to update | 
 **update_custom_field_request** | [**UpdateCustomFieldRequest**](UpdateCustomFieldRequest.md)| the request body containing updated custom field details | 

### Return type

[**PipelineCustomField**](PipelineCustomField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the updated PipelineCustomField |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

