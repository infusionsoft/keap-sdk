# KeapCoreServiceV2Sdk.LeadScoreApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLeadScoreDetails**](LeadScoreApi.md#getLeadScoreDetails) | **GET** /rest/v2/contacts/{contact_id}/leadScore | Retrieve Lead Score of a Contact



## getLeadScoreDetails

> LeadScore getLeadScoreDetails(contactId)

Retrieve Lead Score of a Contact

Retrieves information about the Lead Score of a Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.LeadScoreApi();
let contactId = "contactId_example"; // String | 
apiInstance.getLeadScoreDetails(contactId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**|  | 

### Return type

[**LeadScore**](LeadScore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

