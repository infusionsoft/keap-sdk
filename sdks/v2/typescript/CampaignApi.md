# .CampaignApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactsToCampaignSequence**](CampaignApi.md#addContactsToCampaignSequence) | **POST** /rest/v2/campaigns/{campaign_id}/sequences/{sequence_id}:addContacts | Add Contacts to Campaign Sequence
[**getCampaign**](CampaignApi.md#getCampaign) | **GET** /rest/v2/campaigns/{campaign_id} | Retrieve a Campaign
[**getCampaignGoals**](CampaignApi.md#getCampaignGoals) | **GET** /rest/v2/campaigns/{campaign_id}/goals | Retrieve a list of Goals for a Campaign
[**getCampaignSequences**](CampaignApi.md#getCampaignSequences) | **GET** /rest/v2/campaigns/{campaign_id}/sequences | Retrieve a list of Sequences for a Campaign
[**listCampaigns**](CampaignApi.md#listCampaigns) | **GET** /rest/v2/campaigns | List Campaigns
[**removeContactsFromCampaignSequence**](CampaignApi.md#removeContactsFromCampaignSequence) | **POST** /rest/v2/campaigns/{campaign_id}/sequences/{sequence_id}:removeContacts | Remove Contacts from Campaign Sequence


# **addContactsToCampaignSequence**
> AddContactsToSequenceResponse addContactsToCampaignSequence(addContactsToSequenceRequest)

Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.

### Example


```typescript
import { createConfiguration, CampaignApi } from '';
import type { CampaignApiAddContactsToCampaignSequenceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CampaignApi(configuration);

const request: CampaignApiAddContactsToCampaignSequenceRequest = {
  
  campaignId: "campaign_id_example",
  
  sequenceId: "sequence_id_example",
  
  addContactsToSequenceRequest: {
    contactIds: [123, 456, 789],
  },
};

const data = await apiInstance.addContactsToCampaignSequence(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addContactsToSequenceRequest** | **AddContactsToSequenceRequest**|  |
 **campaignId** | [**string**] |  | defaults to undefined
 **sequenceId** | [**string**] |  | defaults to undefined


### Return type

**AddContactsToSequenceResponse**

### Authorization

[oauth2](README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCampaign**
> Campaign getCampaign()

Retrieves a single campaign

### Example


```typescript
import { createConfiguration, CampaignApi } from '';
import type { CampaignApiGetCampaignRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CampaignApi(configuration);

const request: CampaignApiGetCampaignRequest = {
  
  campaignId: "campaign_id_example",
};

const data = await apiInstance.getCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] |  | defaults to undefined


### Return type

**Campaign**

### Authorization

[oauth2](README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCampaignGoals**
> ListCampaignGoalsResponse getCampaignGoals()

Retrieves a list of Goals (published) for a Campaign

### Example


```typescript
import { createConfiguration, CampaignApi } from '';
import type { CampaignApiGetCampaignGoalsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CampaignApi(configuration);

const request: CampaignApiGetCampaignGoalsRequest = {
  
  campaignId: "campaign_id_example",
};

const data = await apiInstance.getCampaignGoals(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] |  | defaults to undefined


### Return type

**ListCampaignGoalsResponse**

### Authorization

[oauth2](README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCampaignSequences**
> ListCampaignSequenceResponse getCampaignSequences()

Retrieves a list of Sequences (published) for a Campaign

### Example


```typescript
import { createConfiguration, CampaignApi } from '';
import type { CampaignApiGetCampaignSequencesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CampaignApi(configuration);

const request: CampaignApiGetCampaignSequencesRequest = {
  
  campaignId: "campaign_id_example",
};

const data = await apiInstance.getCampaignSequences(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] |  | defaults to undefined


### Return type

**ListCampaignSequenceResponse**

### Authorization

[oauth2](README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCampaigns**
> ListCampaignsResponse listCampaigns()

Retrieves a list of campaigns for the authenticated user

### Example


```typescript
import { createConfiguration, CampaignApi } from '';
import type { CampaignApiListCampaignsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CampaignApi(configuration);

const request: CampaignApiListCampaignsRequest = {
    // Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the campaign name. - `filter=name%3D%3DSpring Campaign` - `filter=name%3D%3DTag New Contacts`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `publisheddate` - `id` - `completedContactCount` - `activeContacts` - `datecreated` - `lastupdated`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listCampaigns(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListCampaignsResponse**

### Authorization

[oauth2](README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeContactsFromCampaignSequence**
> RemoveContactsFromSequenceResponse removeContactsFromCampaignSequence(removeContactsFromSequenceRequest)

Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.

### Example


```typescript
import { createConfiguration, CampaignApi } from '';
import type { CampaignApiRemoveContactsFromCampaignSequenceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CampaignApi(configuration);

const request: CampaignApiRemoveContactsFromCampaignSequenceRequest = {
  
  campaignId: "campaign_id_example",
  
  sequenceId: "sequence_id_example",
  
  removeContactsFromSequenceRequest: {
    contactIds: [123, 456, 789],
  },
};

const data = await apiInstance.removeContactsFromCampaignSequence(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeContactsFromSequenceRequest** | **RemoveContactsFromSequenceRequest**|  |
 **campaignId** | [**string**] |  | defaults to undefined
 **sequenceId** | [**string**] |  | defaults to undefined


### Return type

**RemoveContactsFromSequenceResponse**

### Authorization

[oauth2](README.md#oauth2)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


