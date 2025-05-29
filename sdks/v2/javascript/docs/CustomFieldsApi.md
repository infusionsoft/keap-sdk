# KeapCoreServiceV2Sdk.CustomFieldsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomFields**](CustomFieldsApi.md#getCustomFields) | **GET** /v2/customFields | Retrieves a list of custom fields in a tenant.
[**updateCustomField**](CustomFieldsApi.md#updateCustomField) | **PATCH** /v2/customFields/{id} | Updates a custom field



## getCustomFields

> PipelineCustomFields getCustomFields(opts)

Retrieves a list of custom fields in a tenant.

Retrieves a list of custom fields in a tenant.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CustomFieldsApi();
let opts = {
  'filter': "filter_example", // String | 
  'pageToken': "pageToken_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'pageSize': 100 // Number | 
};
apiInstance.getCustomFields(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**|  | [optional] 
 **pageToken** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] [default to 1000]

### Return type

[**PipelineCustomFields**](PipelineCustomFields.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCustomField

> PipelineCustomField updateCustomField(id, updateCustomFieldRequest)

Updates a custom field

Updates a custom field

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CustomFieldsApi();
let id = "id_example"; // String | the identifier of the custom field to update
let updateCustomFieldRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldRequest(); // UpdateCustomFieldRequest | the request body containing updated custom field details
apiInstance.updateCustomField(id, updateCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the identifier of the custom field to update | 
 **updateCustomFieldRequest** | [**UpdateCustomFieldRequest**](UpdateCustomFieldRequest.md)| the request body containing updated custom field details | 

### Return type

[**PipelineCustomField**](PipelineCustomField.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

