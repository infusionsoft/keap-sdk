# KeapCoreServiceV2Sdk.CampaignApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactsToCampaignSequenceUsingPOST1**](CampaignApi.md#addContactsToCampaignSequenceUsingPOST1) | **POST** /v2/campaigns/{campaign_id}/sequences/{sequence_id}:addContacts | Add Contacts to Campaign Sequence
[**getCampaignUsingGET1**](CampaignApi.md#getCampaignUsingGET1) | **GET** /v2/campaigns/{campaign_id} | Retrieve a Campaign
[**listCampaignsUsingGET1**](CampaignApi.md#listCampaignsUsingGET1) | **GET** /v2/campaigns | List Campaigns
[**removeContactsFromCampaignSequenceUsingPOST**](CampaignApi.md#removeContactsFromCampaignSequenceUsingPOST) | **POST** /v2/campaigns/{campaign_id}/sequences/{sequence_id}:removeContacts | Remove Contacts from Campaign Sequence



## addContactsToCampaignSequenceUsingPOST1

> AddContactsToSequenceResponse addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest)

Add Contacts to Campaign Sequence

Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CampaignApi();
let campaignId = "campaignId_example"; // String | campaign_id
let sequenceId = "sequenceId_example"; // String | sequence_id
let addContactsToSequenceRequest = new KeapCoreServiceV2Sdk.AddContactsToSequenceRequest(); // AddContactsToSequenceRequest | addContactsToSequenceRequest
apiInstance.addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| campaign_id | 
 **sequenceId** | **String**| sequence_id | 
 **addContactsToSequenceRequest** | [**AddContactsToSequenceRequest**](AddContactsToSequenceRequest.md)| addContactsToSequenceRequest | 

### Return type

[**AddContactsToSequenceResponse**](AddContactsToSequenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCampaignUsingGET1

> Campaign getCampaignUsingGET1(campaignId)

Retrieve a Campaign

Retrieves a single campaign

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CampaignApi();
let campaignId = "campaignId_example"; // String | campaign_id
apiInstance.getCampaignUsingGET1(campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| campaign_id | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCampaignsUsingGET1

> ListCampaignsResponse listCampaignsUsingGET1(opts)

List Campaigns

Retrieves a list of campaigns for the authenticated user

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CampaignApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the campaign name. - `filter=name%3D%3DSpring Campaign` - `filter=name%3D%3DTag New Contacts` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `publisheddate` - `id` - `completedContactCount` - `activeContacts` - `datecreated` - `lastupdated`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example", // String | Page token
  'stats': true // Boolean | 
};
apiInstance.listCampaignsUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **stats** | **Boolean**|  | [optional] 

### Return type

[**ListCampaignsResponse**](ListCampaignsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeContactsFromCampaignSequenceUsingPOST

> RemoveContactsFromSequenceResponse removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest)

Remove Contacts from Campaign Sequence

Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CampaignApi();
let campaignId = "campaignId_example"; // String | campaign_id
let sequenceId = "sequenceId_example"; // String | sequence_id
let removeContactsFromSequenceRequest = new KeapCoreServiceV2Sdk.RemoveContactsFromSequenceRequest(); // RemoveContactsFromSequenceRequest | removeContactsFromSequenceRequest
apiInstance.removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| campaign_id | 
 **sequenceId** | **String**| sequence_id | 
 **removeContactsFromSequenceRequest** | [**RemoveContactsFromSequenceRequest**](RemoveContactsFromSequenceRequest.md)| removeContactsFromSequenceRequest | 

### Return type

[**RemoveContactsFromSequenceResponse**](RemoveContactsFromSequenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

