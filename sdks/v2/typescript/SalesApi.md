# .SalesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setMerchantGatewayAsDefaultUsingPOST**](SalesApi.md#setMerchantGatewayAsDefaultUsingPOST) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account


# **setMerchantGatewayAsDefaultUsingPOST**
> void setMerchantGatewayAsDefaultUsingPOST()

Sets the specified Merchant Account as the default Merchant Account.

### Example


```typescript
import { createConfiguration, SalesApi } from '';
import type { SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SalesApi(configuration);

const request: SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.setMerchantGatewayAsDefaultUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined


### Return type

**void**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


