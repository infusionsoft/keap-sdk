# .LeadScoreApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLeadScoreDetails**](LeadScoreApi.md#getLeadScoreDetails) | **GET** /rest/v2/contacts/{contact_id}/leadScore | Retrieve Lead Score of a Contact


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
  
  contactId: "contact_id_example",
};

const data = await apiInstance.getLeadScoreDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] |  | defaults to undefined


### Return type

**LeadScore**

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


