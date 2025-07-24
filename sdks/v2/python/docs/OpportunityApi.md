# keap_core_v2_client.OpportunityApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_opportunity**](OpportunityApi.md#create_opportunity) | **POST** /v2/opportunities | Create an Opportunity
[**create_opportunity_custom_fields**](OpportunityApi.md#create_opportunity_custom_fields) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**create_opportunity_stage**](OpportunityApi.md#create_opportunity_stage) | **POST** /v2/opportunities/stages | Create an Opportunity Stage
[**delete_opportunity**](OpportunityApi.md#delete_opportunity) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity
[**delete_opportunity_stage**](OpportunityApi.md#delete_opportunity_stage) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**get_opportunity**](OpportunityApi.md#get_opportunity) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**get_opportunity_stage**](OpportunityApi.md#get_opportunity_stage) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**list_opportunities**](OpportunityApi.md#list_opportunities) | **GET** /v2/opportunities | List Opportunities
[**list_opportunity_stages**](OpportunityApi.md#list_opportunity_stages) | **GET** /v2/opportunities/stages | List of Opportunity Stages
[**update_opportunity**](OpportunityApi.md#update_opportunity) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity
[**update_opportunity_custom_field**](OpportunityApi.md#update_opportunity_custom_field) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field
[**update_opportunity_stage**](OpportunityApi.md#update_opportunity_stage) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage


# **create_opportunity**
> RestV2Opportunity create_opportunity(create_opportunity_request=create_opportunity_request)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_opportunity_request import CreateOpportunityRequest
from keap_core_v2_client.models.rest_v2_opportunity import RestV2Opportunity
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    create_opportunity_request = keap_core_v2_client.CreateOpportunityRequest() # CreateOpportunityRequest | opportunity (optional)

    try:
        # Create an Opportunity
        api_response = api_instance.create_opportunity(create_opportunity_request=create_opportunity_request)
        print("The response of OpportunityApi->create_opportunity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->create_opportunity: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_opportunity_request** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| opportunity | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

# **create_opportunity_custom_fields**
> CustomFieldMetaData create_opportunity_custom_fields(create_custom_field_request)

Create an Opportunity Custom Field

Creates a custom field of the specified type and options to the Opportunity object

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    create_custom_field_request = keap_core_v2_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create an Opportunity Custom Field
        api_response = api_instance.create_opportunity_custom_fields(create_custom_field_request)
        print("The response of OpportunityApi->create_opportunity_custom_fields:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->create_opportunity_custom_fields: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

# **create_opportunity_stage**
> RestOpportunityStage create_opportunity_stage(create_opportunity_stage_request=create_opportunity_stage_request)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_opportunity_stage_request import CreateOpportunityStageRequest
from keap_core_v2_client.models.rest_opportunity_stage import RestOpportunityStage
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    create_opportunity_stage_request = keap_core_v2_client.CreateOpportunityStageRequest() # CreateOpportunityStageRequest | opportunity (optional)

    try:
        # Create an Opportunity Stage
        api_response = api_instance.create_opportunity_stage(create_opportunity_stage_request=create_opportunity_stage_request)
        print("The response of OpportunityApi->create_opportunity_stage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->create_opportunity_stage: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_opportunity_stage_request** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)| opportunity | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

# **delete_opportunity**
> delete_opportunity(opportunity_id)

Delete an Opportunity

Deletes the specified Opportunity

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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    opportunity_id = 'opportunity_id_example' # str | opportunity_id

    try:
        # Delete an Opportunity
        api_instance.delete_opportunity(opportunity_id)
    except Exception as e:
        print("Exception when calling OpportunityApi->delete_opportunity: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity_id** | **str**| opportunity_id | 

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

# **delete_opportunity_stage**
> delete_opportunity_stage(stage_id)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    stage_id = 'stage_id_example' # str | stage_id

    try:
        # Delete an Opportunity Stage
        api_instance.delete_opportunity_stage(stage_id)
    except Exception as e:
        print("Exception when calling OpportunityApi->delete_opportunity_stage: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage_id** | **str**| stage_id | 

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

# **get_opportunity**
> RestV2Opportunity get_opportunity(opportunity_id)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_v2_opportunity import RestV2Opportunity
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    opportunity_id = 'opportunity_id_example' # str | opportunity_id

    try:
        # Retrieve a Opportunity
        api_response = api_instance.get_opportunity(opportunity_id)
        print("The response of OpportunityApi->get_opportunity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->get_opportunity: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity_id** | **str**| opportunity_id | 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

# **get_opportunity_stage**
> RestOpportunityStage get_opportunity_stage(stage_id)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_opportunity_stage import RestOpportunityStage
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    stage_id = 'stage_id_example' # str | stage_id

    try:
        # Retrieve an Opportunity Stage
        api_response = api_instance.get_opportunity_stage(stage_id)
        print("The response of OpportunityApi->get_opportunity_stage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->get_opportunity_stage: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage_id** | **str**| stage_id | 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

# **list_opportunities**
> ListOpportunitiesResponse list_opportunities(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Opportunities

Retrieves a list of all Opportunities.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_opportunities_response import ListOpportunitiesResponse
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    fields = ['fields_example'] # List[str] | fields (optional)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_name` - `created_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Opportunities
        api_response = api_instance.list_opportunities(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OpportunityApi->list_opportunities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->list_opportunities: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**List[str]**](str.md)| fields | [optional] 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)

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

# **list_opportunity_stages**
> ListOpportunityStagesResponse list_opportunity_stages(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_opportunity_stages_response import ListOpportunityStagesResponse
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order stage items. One of the following fields: - `stage_order`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List of Opportunity Stages
        api_response = api_instance.list_opportunity_stages(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OpportunityApi->list_opportunity_stages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->list_opportunity_stages: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)

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

# **update_opportunity**
> RestV2Opportunity update_opportunity(opportunity_id, update_opportunity_request_v2, update_mask=update_mask)

Update an opportunity

Updates specified values of a given opportunity

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_v2_opportunity import RestV2Opportunity
from keap_core_v2_client.models.update_opportunity_request_v2 import UpdateOpportunityRequestV2
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    opportunity_id = 'opportunity_id_example' # str | opportunity_id
    update_opportunity_request_v2 = keap_core_v2_client.UpdateOpportunityRequestV2() # UpdateOpportunityRequestV2 | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an opportunity
        api_response = api_instance.update_opportunity(opportunity_id, update_opportunity_request_v2, update_mask=update_mask)
        print("The response of OpportunityApi->update_opportunity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->update_opportunity: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity_id** | **str**| opportunity_id | 
 **update_opportunity_request_v2** | [**UpdateOpportunityRequestV2**](UpdateOpportunityRequestV2.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

# **update_opportunity_custom_field**
> CustomFieldMetaData update_opportunity_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update a Opportunity's Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_core_v2_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    update_custom_field_meta_data_request = keap_core_v2_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Opportunity's Custom Field
        api_response = api_instance.update_opportunity_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)
        print("The response of OpportunityApi->update_opportunity_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->update_opportunity_custom_field: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 
 **update_custom_field_meta_data_request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

# **update_opportunity_stage**
> RestOpportunityStage update_opportunity_stage(stage_id, update_opportunity_stage_request, update_mask=update_mask)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_opportunity_stage import RestOpportunityStage
from keap_core_v2_client.models.update_opportunity_stage_request import UpdateOpportunityStageRequest
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    stage_id = 'stage_id_example' # str | stage_id
    update_opportunity_stage_request = keap_core_v2_client.UpdateOpportunityStageRequest() # UpdateOpportunityStageRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Opportunity Stage
        api_response = api_instance.update_opportunity_stage(stage_id, update_opportunity_stage_request, update_mask=update_mask)
        print("The response of OpportunityApi->update_opportunity_stage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->update_opportunity_stage: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage_id** | **str**| stage_id | 
 **update_opportunity_stage_request** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

