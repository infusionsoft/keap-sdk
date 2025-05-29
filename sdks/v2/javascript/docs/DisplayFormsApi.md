# KeapCoreServiceV2Sdk.DisplayFormsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDisplayForm**](DisplayFormsApi.md#getDisplayForm) | **GET** /v2/pipelines/{id}/form | Retrieves a specific display form by a pipeline ID.
[**updateDisplayForm**](DisplayFormsApi.md#updateDisplayForm) | **PATCH** /v2/pipelines/{id}/form | Updates a display form



## getDisplayForm

> DisplayForm getDisplayForm(id)

Retrieves a specific display form by a pipeline ID.

Retrieves a specific display form by a pipeline ID.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DisplayFormsApi();
let id = "id_example"; // String | the ID of the pipeline containing the form
apiInstance.getDisplayForm(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID of the pipeline containing the form | 

### Return type

[**DisplayForm**](DisplayForm.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDisplayForm

> DisplayForm updateDisplayForm(id, updateDisplayFormRequest)

Updates a display form

Updates a display form

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.DisplayFormsApi();
let id = "id_example"; // String | the ID of the pipeline containing the form
let updateDisplayFormRequest = new KeapCoreServiceV2Sdk.UpdateDisplayFormRequest(); // UpdateDisplayFormRequest | the request body containing updated display form details
apiInstance.updateDisplayForm(id, updateDisplayFormRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the ID of the pipeline containing the form | 
 **updateDisplayFormRequest** | [**UpdateDisplayFormRequest**](UpdateDisplayFormRequest.md)| the request body containing updated display form details | 

### Return type

[**DisplayForm**](DisplayForm.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

