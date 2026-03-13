# KeapCoreServiceV2Sdk.CampaignApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactsToCampaignSequence**](CampaignApi.md#addContactsToCampaignSequence) | **POST** /rest/v2/campaigns/{campaign_id}/sequences/{sequence_id}:addContacts | Add Contacts to Campaign Sequence
[**getCampaign**](CampaignApi.md#getCampaign) | **GET** /rest/v2/campaigns/{campaign_id} | Retrieve a Campaign
[**getCampaignGoals**](CampaignApi.md#getCampaignGoals) | **GET** /rest/v2/campaigns/{campaign_id}/goals | Retrieve a list of Goals for a Campaign
[**getCampaignSequences**](CampaignApi.md#getCampaignSequences) | **GET** /rest/v2/campaigns/{campaign_id}/sequences | Retrieve a list of Sequences for a Campaign
[**listCampaigns**](CampaignApi.md#listCampaigns) | **GET** /rest/v2/campaigns | List Campaigns
[**removeContactsFromCampaignSequence**](CampaignApi.md#removeContactsFromCampaignSequence) | **POST** /rest/v2/campaigns/{campaign_id}/sequences/{sequence_id}:removeContacts | Remove Contacts from Campaign Sequence



## addContactsToCampaignSequence

> AddContactsToSequenceResponse addContactsToCampaignSequence(campaignId, sequenceId, addContactsToSequenceRequest)

Add Contacts to Campaign Sequence

Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.CampaignApi();
let campaignId = "campaignId_example"; // String | 
let sequenceId = "sequenceId_example"; // String | 
let addContactsToSequenceRequest = new KeapCoreServiceV2Sdk.AddContactsToSequenceRequest(); // AddContactsToSequenceRequest | 
apiInstance.addContactsToCampaignSequence(campaignId, sequenceId, addContactsToSequenceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**|  | 
 **sequenceId** | **String**|  | 
 **addContactsToSequenceRequest** | [**AddContactsToSequenceRequest**](AddContactsToSequenceRequest.md)|  | 

### Return type

[**AddContactsToSequenceResponse**](AddContactsToSequenceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCampaign

> Campaign getCampaign(campaignId)

Retrieve a Campaign

Retrieves a single campaign

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.CampaignApi();
let campaignId = "campaignId_example"; // String | 
apiInstance.getCampaign(campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**|  | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaignGoals

> ListCampaignGoalsResponse getCampaignGoals(campaignId)

Retrieve a list of Goals for a Campaign

Retrieves a list of Goals (published) for a Campaign

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.CampaignApi();
let campaignId = "campaignId_example"; // String | 
apiInstance.getCampaignGoals(campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**|  | 

### Return type

[**ListCampaignGoalsResponse**](ListCampaignGoalsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaignSequences

> ListCampaignSequenceResponse getCampaignSequences(campaignId)

Retrieve a list of Sequences for a Campaign

Retrieves a list of Sequences (published) for a Campaign

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.CampaignApi();
let campaignId = "campaignId_example"; // String | 
apiInstance.getCampaignSequences(campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**|  | 

### Return type

[**ListCampaignSequenceResponse**](ListCampaignSequenceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCampaigns

> ListCampaignsResponse listCampaigns(opts)

List Campaigns

Retrieves a list of campaigns for the authenticated user

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.CampaignApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of the filter with your searched text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the campaign name. - `filter=name%3D%3DSpring Campaign` - `filter=name%3D%3DTag New Contacts` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `publisheddate` - `id` - `completedContactCount` - `activeContacts` - `datecreated` - `lastupdated`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listCampaigns(opts).then((data) => {
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

### Return type

[**ListCampaignsResponse**](ListCampaignsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeContactsFromCampaignSequence

> RemoveContactsFromSequenceResponse removeContactsFromCampaignSequence(campaignId, sequenceId, removeContactsFromSequenceRequest)

Remove Contacts from Campaign Sequence

Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.CampaignApi();
let campaignId = "campaignId_example"; // String | 
let sequenceId = "sequenceId_example"; // String | 
let removeContactsFromSequenceRequest = new KeapCoreServiceV2Sdk.RemoveContactsFromSequenceRequest(); // RemoveContactsFromSequenceRequest | 
apiInstance.removeContactsFromCampaignSequence(campaignId, sequenceId, removeContactsFromSequenceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**|  | 
 **sequenceId** | **String**|  | 
 **removeContactsFromSequenceRequest** | [**RemoveContactsFromSequenceRequest**](RemoveContactsFromSequenceRequest.md)|  | 

### Return type

[**RemoveContactsFromSequenceResponse**](RemoveContactsFromSequenceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

