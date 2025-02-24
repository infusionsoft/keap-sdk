# .CampaignApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactsToCampaignSequenceUsingPOST1**](CampaignApi.md#addContactsToCampaignSequenceUsingPOST1) | **POST** /v2/campaigns/{campaign_id}/sequences/{sequence_id}:addContacts | Add Contacts to Campaign Sequence
[**getCampaignUsingGET1**](CampaignApi.md#getCampaignUsingGET1) | **GET** /v2/campaigns/{campaign_id} | Retrieve a Campaign
[**listCampaignsUsingGET1**](CampaignApi.md#listCampaignsUsingGET1) | **GET** /v2/campaigns | List Campaigns
[**removeContactsFromCampaignSequenceUsingPOST**](CampaignApi.md#removeContactsFromCampaignSequenceUsingPOST) | **POST** /v2/campaigns/{campaign_id}/sequences/{sequence_id}:removeContacts | Remove Contacts from Campaign Sequence


# **addContactsToCampaignSequenceUsingPOST1**
> AddContactsToSequenceResponse addContactsToCampaignSequenceUsingPOST1(addContactsToSequenceRequest)

Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.

### Example


```typescript
import { createConfiguration, CampaignApi } from '';
import type { CampaignApiAddContactsToCampaignSequenceUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new CampaignApi(configuration);

const request: CampaignApiAddContactsToCampaignSequenceUsingPOST1Request = {
    // campaign_id
  campaignId: "campaign_id_example",
    // sequence_id
  sequenceId: "sequence_id_example",
    // addContactsToSequenceRequest
  addContactsToSequenceRequest: {
    contactIds: [
      "contactIds_example",
    ],
  },
};

const data = await apiInstance.addContactsToCampaignSequenceUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addContactsToSequenceRequest** | **AddContactsToSequenceRequest**| addContactsToSequenceRequest |
 **campaignId** | [**string**] | campaign_id | defaults to undefined
 **sequenceId** | [**string**] | sequence_id | defaults to undefined


### Return type

**AddContactsToSequenceResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCampaignUsingGET1**
> Campaign getCampaignUsingGET1()

Retrieves a single campaign

### Example


```typescript
import { createConfiguration, CampaignApi } from '';
import type { CampaignApiGetCampaignUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new CampaignApi(configuration);

const request: CampaignApiGetCampaignUsingGET1Request = {
    // campaign_id
  campaignId: "campaign_id_example",
};

const data = await apiInstance.getCampaignUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | campaign_id | defaults to undefined


### Return type

**Campaign**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCampaignsUsingGET1**
> ListCampaignsResponse listCampaignsUsingGET1()

Retrieves a list of campaigns for the authenticated user

### Example


```typescript
import { createConfiguration, CampaignApi } from '';
import type { CampaignApiListCampaignsUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new CampaignApi(configuration);

const request: CampaignApiListCampaignsUsingGET1Request = {
    // Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the campaign name. - `filter=name%3D%3DSpring Campaign` - `filter=name%3D%3DTag New Contacts`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `publisheddate` - `id` - `completedContactCount` - `activeContacts` - `datecreated` - `lastupdated`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
  
  stats: true,
};

const data = await apiInstance.listCampaignsUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **stats** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ListCampaignsResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeContactsFromCampaignSequenceUsingPOST**
> RemoveContactsFromSequenceResponse removeContactsFromCampaignSequenceUsingPOST(removeContactsFromSequenceRequest)

Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.

### Example


```typescript
import { createConfiguration, CampaignApi } from '';
import type { CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CampaignApi(configuration);

const request: CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest = {
    // campaign_id
  campaignId: "campaign_id_example",
    // sequence_id
  sequenceId: "sequence_id_example",
    // removeContactsFromSequenceRequest
  removeContactsFromSequenceRequest: {
    contactIds: [
      "contactIds_example",
    ],
  },
};

const data = await apiInstance.removeContactsFromCampaignSequenceUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeContactsFromSequenceRequest** | **RemoveContactsFromSequenceRequest**| removeContactsFromSequenceRequest |
 **campaignId** | [**string**] | campaign_id | defaults to undefined
 **sequenceId** | [**string**] | sequence_id | defaults to undefined


### Return type

**RemoveContactsFromSequenceResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


