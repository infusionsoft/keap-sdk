# keap_core_v2_client.CampaignApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_contacts_to_campaign_sequence**](CampaignApi.md#add_contacts_to_campaign_sequence) | **POST** /v2/campaigns/{campaign_id}/sequences/{sequence_id}:addContacts | Add Contacts to Campaign Sequence
[**get_campaign**](CampaignApi.md#get_campaign) | **GET** /v2/campaigns/{campaign_id} | Retrieve a Campaign
[**get_campaign_goals**](CampaignApi.md#get_campaign_goals) | **GET** /v2/campaigns/{campaign_id}/goals | Retrieve a list of Goals for a Campaign
[**get_campaign_sequences**](CampaignApi.md#get_campaign_sequences) | **GET** /v2/campaigns/{campaign_id}/sequences | Retrieve a list of Sequences for a Campaign
[**list_campaigns**](CampaignApi.md#list_campaigns) | **GET** /v2/campaigns | List Campaigns
[**remove_contacts_from_campaign_sequence**](CampaignApi.md#remove_contacts_from_campaign_sequence) | **POST** /v2/campaigns/{campaign_id}/sequences/{sequence_id}:removeContacts | Remove Contacts from Campaign Sequence


# **add_contacts_to_campaign_sequence**
> AddContactsToSequenceResponse add_contacts_to_campaign_sequence(campaign_id, sequence_id, add_contacts_to_sequence_request)

Add Contacts to Campaign Sequence

Adds a list of contacts to a campaign sequence
Response contains a map of the provided list of Contact Ids related to their individual result.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.add_contacts_to_sequence_request import AddContactsToSequenceRequest
from keap_core_v2_client.models.add_contacts_to_sequence_response import AddContactsToSequenceResponse
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
    api_instance = keap_core_v2_client.CampaignApi(api_client)
    campaign_id = 'campaign_id_example' # str | campaign_id
    sequence_id = 'sequence_id_example' # str | sequence_id
    add_contacts_to_sequence_request = keap_core_v2_client.AddContactsToSequenceRequest() # AddContactsToSequenceRequest | addContactsToSequenceRequest

    try:
        # Add Contacts to Campaign Sequence
        api_response = api_instance.add_contacts_to_campaign_sequence(campaign_id, sequence_id, add_contacts_to_sequence_request)
        print("The response of CampaignApi->add_contacts_to_campaign_sequence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignApi->add_contacts_to_campaign_sequence: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| campaign_id | 
 **sequence_id** | **str**| sequence_id | 
 **add_contacts_to_sequence_request** | [**AddContactsToSequenceRequest**](AddContactsToSequenceRequest.md)| addContactsToSequenceRequest | 

### Return type

[**AddContactsToSequenceResponse**](AddContactsToSequenceResponse.md)

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

# **get_campaign**
> Campaign get_campaign(campaign_id)

Retrieve a Campaign

Retrieves a single campaign

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.campaign import Campaign
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
    api_instance = keap_core_v2_client.CampaignApi(api_client)
    campaign_id = 'campaign_id_example' # str | campaign_id

    try:
        # Retrieve a Campaign
        api_response = api_instance.get_campaign(campaign_id)
        print("The response of CampaignApi->get_campaign:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignApi->get_campaign: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| campaign_id | 

### Return type

[**Campaign**](Campaign.md)

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

# **get_campaign_goals**
> ListCampaignGoalsResponse get_campaign_goals(campaign_id)

Retrieve a list of Goals for a Campaign

Retrieves a list of Goals (published) for a Campaign

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_campaign_goals_response import ListCampaignGoalsResponse
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
    api_instance = keap_core_v2_client.CampaignApi(api_client)
    campaign_id = 'campaign_id_example' # str | campaign_id

    try:
        # Retrieve a list of Goals for a Campaign
        api_response = api_instance.get_campaign_goals(campaign_id)
        print("The response of CampaignApi->get_campaign_goals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignApi->get_campaign_goals: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| campaign_id | 

### Return type

[**ListCampaignGoalsResponse**](ListCampaignGoalsResponse.md)

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

# **get_campaign_sequences**
> ListCampaignSequenceResponse get_campaign_sequences(campaign_id)

Retrieve a list of Sequences for a Campaign

Retrieves a list of Sequences (published) for a Campaign

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_campaign_sequence_response import ListCampaignSequenceResponse
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
    api_instance = keap_core_v2_client.CampaignApi(api_client)
    campaign_id = 'campaign_id_example' # str | campaign_id

    try:
        # Retrieve a list of Sequences for a Campaign
        api_response = api_instance.get_campaign_sequences(campaign_id)
        print("The response of CampaignApi->get_campaign_sequences:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignApi->get_campaign_sequences: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| campaign_id | 

### Return type

[**ListCampaignSequenceResponse**](ListCampaignSequenceResponse.md)

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

# **list_campaigns**
> ListCampaignsResponse list_campaigns(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, stats=stats)

List Campaigns

Retrieves a list of campaigns for the authenticated user

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_campaigns_response import ListCampaignsResponse
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
    api_instance = keap_core_v2_client.CampaignApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the campaign name. - `filter=name%3D%3DSpring Campaign` - `filter=name%3D%3DTag New Contacts`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `name` - `publisheddate` - `id` - `completedContactCount` - `activeContacts` - `datecreated` - `lastupdated`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)
    stats = True # bool |  (optional)

    try:
        # List Campaigns
        api_response = api_instance.list_campaigns(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, stats=stats)
        print("The response of CampaignApi->list_campaigns:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignApi->list_campaigns: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 
 **stats** | **bool**|  | [optional] 

### Return type

[**ListCampaignsResponse**](ListCampaignsResponse.md)

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

# **remove_contacts_from_campaign_sequence**
> RemoveContactsFromSequenceResponse remove_contacts_from_campaign_sequence(campaign_id, sequence_id, remove_contacts_from_sequence_request)

Remove Contacts from Campaign Sequence

Removes a list of contacts from a campaign sequence
Response contains a map of the provided list of Contact Ids related to their individual result.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.remove_contacts_from_sequence_request import RemoveContactsFromSequenceRequest
from keap_core_v2_client.models.remove_contacts_from_sequence_response import RemoveContactsFromSequenceResponse
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
    api_instance = keap_core_v2_client.CampaignApi(api_client)
    campaign_id = 'campaign_id_example' # str | campaign_id
    sequence_id = 'sequence_id_example' # str | sequence_id
    remove_contacts_from_sequence_request = keap_core_v2_client.RemoveContactsFromSequenceRequest() # RemoveContactsFromSequenceRequest | removeContactsFromSequenceRequest

    try:
        # Remove Contacts from Campaign Sequence
        api_response = api_instance.remove_contacts_from_campaign_sequence(campaign_id, sequence_id, remove_contacts_from_sequence_request)
        print("The response of CampaignApi->remove_contacts_from_campaign_sequence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CampaignApi->remove_contacts_from_campaign_sequence: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| campaign_id | 
 **sequence_id** | **str**| sequence_id | 
 **remove_contacts_from_sequence_request** | [**RemoveContactsFromSequenceRequest**](RemoveContactsFromSequenceRequest.md)| removeContactsFromSequenceRequest | 

### Return type

[**RemoveContactsFromSequenceResponse**](RemoveContactsFromSequenceResponse.md)

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

