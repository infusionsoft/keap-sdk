# .CustomFieldsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomFields**](CustomFieldsApi.md#getCustomFields) | **GET** /v2/customFields | Retrieves a list of custom fields in a tenant.


# **getCustomFields**
> PipelineCustomFields getCustomFields()

Retrieves a list of custom fields in a tenant.

### Example


```typescript
import { createConfiguration, CustomFieldsApi } from '';

const configuration = createConfiguration();
const apiInstance = new CustomFieldsApi(configuration);

const request = {};

const data = await apiInstance.getCustomFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**PipelineCustomFields**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of PipelineCustomFields |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


