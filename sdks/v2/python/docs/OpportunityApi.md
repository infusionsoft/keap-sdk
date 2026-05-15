# keap_core_v2_client.OpportunityApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_opportunity**](OpportunityApi.md#create_opportunity) | **POST** /rest/v2/opportunities | Create an Opportunity
[**create_opportunity_custom_fields**](OpportunityApi.md#create_opportunity_custom_fields) | **POST** /rest/v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**create_opportunity_stage**](OpportunityApi.md#create_opportunity_stage) | **POST** /rest/v2/opportunities/stages | Create an Opportunity Stage
[**delete_opportunity**](OpportunityApi.md#delete_opportunity) | **DELETE** /rest/v2/opportunities/{opportunity_id} | Delete an Opportunity
[**delete_opportunity_stage**](OpportunityApi.md#delete_opportunity_stage) | **DELETE** /rest/v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**get_opportunity**](OpportunityApi.md#get_opportunity) | **GET** /rest/v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**get_opportunity_stage**](OpportunityApi.md#get_opportunity_stage) | **GET** /rest/v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**list_opportunities**](OpportunityApi.md#list_opportunities) | **GET** /rest/v2/opportunities | List Opportunities
[**list_opportunity_stages**](OpportunityApi.md#list_opportunity_stages) | **GET** /rest/v2/opportunities/stages | List of Opportunity Stages
[**update_opportunity**](OpportunityApi.md#update_opportunity) | **PATCH** /rest/v2/opportunities/{opportunity_id} | Update an opportunity
[**update_opportunity_custom_field**](OpportunityApi.md#update_opportunity_custom_field) | **PATCH** /rest/v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field
[**update_opportunity_stage**](OpportunityApi.md#update_opportunity_stage) | **PATCH** /rest/v2/opportunities/stages/{stage_id} | Update an Opportunity Stage


# **create_opportunity**
> RestV2Opportunity create_opportunity(create_opportunity_request)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_opportunity_request import CreateOpportunityRequest
from keap_core_v2_client.models.rest_v2_opportunity import RestV2Opportunity
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    create_opportunity_request = keap_core_v2_client.CreateOpportunityRequest() # CreateOpportunityRequest | 

    try:
        # Create an Opportunity
        api_response = api_instance.create_opportunity(create_opportunity_request)
        print("The response of OpportunityApi->create_opportunity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->create_opportunity: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_opportunity_request** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)|  | 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

# **create_opportunity_custom_fields**
> CustomFieldMetaData create_opportunity_custom_fields(create_custom_field_request)

Create an Opportunity Custom Field

Creates a custom field of the specified type and options to the Opportunity object

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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    create_custom_field_request = keap_core_v2_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | 

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

# **create_opportunity_stage**
> RestOpportunityStage create_opportunity_stage(create_opportunity_stage_request)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.create_opportunity_stage_request import CreateOpportunityStageRequest
from keap_core_v2_client.models.rest_opportunity_stage import RestOpportunityStage
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    create_opportunity_stage_request = keap_core_v2_client.CreateOpportunityStageRequest() # CreateOpportunityStageRequest | 

    try:
        # Create an Opportunity Stage
        api_response = api_instance.create_opportunity_stage(create_opportunity_stage_request)
        print("The response of OpportunityApi->create_opportunity_stage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpportunityApi->create_opportunity_stage: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_opportunity_stage_request** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)|  | 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

# **delete_opportunity**
> delete_opportunity(opportunity_id)

Delete an Opportunity

Deletes the specified Opportunity

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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    opportunity_id = 'opportunity_id_example' # str | 

    try:
        # Delete an Opportunity
        api_instance.delete_opportunity(opportunity_id)
    except Exception as e:
        print("Exception when calling OpportunityApi->delete_opportunity: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity_id** | **str**|  | 

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

# **delete_opportunity_stage**
> delete_opportunity_stage(stage_id)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    stage_id = 'stage_id_example' # str | 

    try:
        # Delete an Opportunity Stage
        api_instance.delete_opportunity_stage(stage_id)
    except Exception as e:
        print("Exception when calling OpportunityApi->delete_opportunity_stage: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage_id** | **str**|  | 

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

# **get_opportunity**
> RestV2Opportunity get_opportunity(opportunity_id)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_v2_opportunity import RestV2Opportunity
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    opportunity_id = 'opportunity_id_example' # str | 

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
 **opportunity_id** | **str**|  | 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

# **get_opportunity_stage**
> RestOpportunityStage get_opportunity_stage(stage_id)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_opportunity_stage import RestOpportunityStage
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    stage_id = 'stage_id_example' # str | 

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
 **stage_id** | **str**|  | 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

# **list_opportunities**
> ListOpportunitiesResponse list_opportunities(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Opportunities

Retrieves a list of all Opportunities.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_opportunities_response import ListOpportunitiesResponse
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    fields = ['fields_example'] # List[str] |  (optional)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` - (String) `contact_id` - (String) `opportunity_title` — supports wildcard prefix search (e.g. `opportunity_title==Deal*`) - (String) `lead_source_name` — supports wildcard prefix search (e.g. `lead_source_name==Web*`) - (String) `affiliate_id` — exact match only (e.g. `affiliate_id==123`) - (String) `opportunity_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` - (String) `ids` — comma-separated list of opportunity IDs (e.g. `ids==1,2,3`), maximum 100 IDs Note: `opportunity_id` and `ids` cannot be used together in the same request.  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_title` - `created_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
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
 **fields** | [**List[str]**](str.md)|  | [optional] 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;opportunity_title&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_title&#x3D;&#x3D;Deal*&#x60;) - (String) &#x60;lead_source_name&#x60; — supports wildcard prefix search (e.g. &#x60;lead_source_name&#x3D;&#x3D;Web*&#x60;) - (String) &#x60;affiliate_id&#x60; — exact match only (e.g. &#x60;affiliate_id&#x3D;&#x3D;123&#x60;) - (String) &#x60;opportunity_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;ids&#x60; — comma-separated list of opportunity IDs (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;), maximum 100 IDs Note: &#x60;opportunity_id&#x60; and &#x60;ids&#x60; cannot be used together in the same request.  | [optional] 
 **order_by** | **str**| Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_title&#x60; - &#x60;created_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)

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

# **list_opportunity_stages**
> ListOpportunityStagesResponse list_opportunity_stages(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.list_opportunity_stages_response import ListOpportunityStagesResponse
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

# **update_opportunity**
> RestV2Opportunity update_opportunity(opportunity_id, update_opportunity_request_v2, update_mask=update_mask)

Update an opportunity

Updates specified values of a given opportunity

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_v2_opportunity import RestV2Opportunity
from keap_core_v2_client.models.update_opportunity_request_v2 import UpdateOpportunityRequestV2
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    opportunity_id = 'opportunity_id_example' # str | 
    update_opportunity_request_v2 = keap_core_v2_client.UpdateOpportunityRequestV2() # UpdateOpportunityRequestV2 | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

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
 **opportunity_id** | **str**|  | 
 **update_opportunity_request_v2** | [**UpdateOpportunityRequestV2**](UpdateOpportunityRequestV2.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

# **update_opportunity_custom_field**
> CustomFieldMetaData update_opportunity_custom_field(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update a Opportunity's Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | 
    update_custom_field_meta_data_request = keap_core_v2_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

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

# **update_opportunity_stage**
> RestOpportunityStage update_opportunity_stage(stage_id, update_opportunity_stage_request, update_mask=update_mask)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example

* OAuth Authentication (oauth2):

```python
import keap_core_v2_client
from keap_core_v2_client.models.rest_opportunity_stage import RestOpportunityStage
from keap_core_v2_client.models.update_opportunity_stage_request import UpdateOpportunityStageRequest
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
    api_instance = keap_core_v2_client.OpportunityApi(api_client)
    stage_id = 'stage_id_example' # str | 
    update_opportunity_stage_request = keap_core_v2_client.UpdateOpportunityStageRequest() # UpdateOpportunityStageRequest | 
    update_mask = None # object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

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
 **stage_id** | **str**|  | 
 **update_opportunity_stage_request** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)|  | 
 **update_mask** | [**object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

