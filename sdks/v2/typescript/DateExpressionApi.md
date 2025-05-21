# .DateExpressionApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryDateExpressions**](DateExpressionApi.md#queryDateExpressions) | **GET** /v2/dateExpressions | 


# **queryDateExpressions**
> DateExpressionResponse queryDateExpressions()


### Example


```typescript
import { createConfiguration, DateExpressionApi } from '';
import type { DateExpressionApiQueryDateExpressionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DateExpressionApi(configuration);

const request: DateExpressionApiQueryDateExpressionsRequest = {
  
  timeZone: "time_zone_example",
  
  query: "query_example",
};

const data = await apiInstance.queryDateExpressions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeZone** | [**string**] |  | (optional) defaults to undefined
 **query** | [**string**] |  | (optional) defaults to undefined


### Return type

**DateExpressionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | queryDateExpressions 200 response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


