# KeapCoreServiceV2Sdk.LeadScoreApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLeadScoreDetails**](LeadScoreApi.md#getLeadScoreDetails) | **GET** /v2/contacts/{contact_id}/leadScore | Retrieve Lead Score of a Contact



## getLeadScoreDetails

> LeadScore getLeadScoreDetails(contactId)

Retrieve Lead Score of a Contact

Retrieves information about the Lead Score of a Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.LeadScoreApi();
let contactId = "contactId_example"; // String | contact_id
apiInstance.getLeadScoreDetails(contactId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 

### Return type

[**LeadScore**](LeadScore.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

