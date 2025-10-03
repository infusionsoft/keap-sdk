# .LeadScoreApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLeadScoreDetails**](LeadScoreApi.md#getLeadScoreDetails) | **GET** /v2/contacts/{contact_id}/leadScore | Retrieve Lead Score of a Contact


# **getLeadScoreDetails**
> LeadScore getLeadScoreDetails()

Retrieves information about the Lead Score of a Contact

### Example


```typescript
import { createConfiguration, LeadScoreApi } from '';
import type { LeadScoreApiGetLeadScoreDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadScoreApi(configuration);

const request: LeadScoreApiGetLeadScoreDetailsRequest = {
    // contact_id
  contactId: "contact_id_example",
};

const data = await apiInstance.getLeadScoreDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | contact_id | defaults to undefined


### Return type

**LeadScore**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


