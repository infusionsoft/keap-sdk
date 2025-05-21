# KeapCoreServiceV2Sdk.DateExpressionApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryDateExpressions**](DateExpressionApi.md#queryDateExpressions) | **GET** /v2/dateExpressions | 



## queryDateExpressions

> DateExpressionResponse queryDateExpressions(opts)



### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DateExpressionApi();
let opts = {
  'timeZone': "timeZone_example", // String | 
  'query': "query_example" // String | 
};
apiInstance.queryDateExpressions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeZone** | **String**|  | [optional] 
 **query** | **String**|  | [optional] 

### Return type

[**DateExpressionResponse**](DateExpressionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

