# .ShippingApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listShippingMethods**](ShippingApi.md#listShippingMethods) | **GET** /v2/shipping | List Shipping methods


# **listShippingMethods**
> ListRestShippingMethodsResponse listShippingMethods()

Retrieves a list of Shipping methods

### Example


```typescript
import { createConfiguration, ShippingApi } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingApi(configuration);

const request = {};

const data = await apiInstance.listShippingMethods(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListRestShippingMethodsResponse**

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


