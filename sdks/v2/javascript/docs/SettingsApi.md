# KeapCoreServiceV2Sdk.SettingsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationConfigurationsUsingGET**](SettingsApi.md#getApplicationConfigurationsUsingGET) | **GET** /v2/settings/applications:getConfiguration | Get Application Configuration
[**getContactOptionTypesUsingGET1**](SettingsApi.md#getContactOptionTypesUsingGET1) | **GET** /v2/settings/contactOptionTypes | Get Contact Option types
[**isApplicationEnabledUsingGET**](SettingsApi.md#isApplicationEnabledUsingGET) | **GET** /v2/settings/applications:isEnabled | Get Application Status



## getApplicationConfigurationsUsingGET

> GetSettingsResponse getApplicationConfigurationsUsingGET(opts)

Get Application Configuration

Get configuration values for the application instance.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.SettingsApi();
let opts = {
  'fields': ["null"] // [String] | By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
};
apiInstance.getApplicationConfigurationsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. | [optional] 

### Return type

[**GetSettingsResponse**](GetSettingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactOptionTypesUsingGET1

> GetContactOptionTypesResponse getContactOptionTypesUsingGET1()

Get Contact Option types

Gets a list of Contact Option types.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.SettingsApi();
apiInstance.getContactOptionTypesUsingGET1().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetContactOptionTypesResponse**](GetContactOptionTypesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## isApplicationEnabledUsingGET

> GetApplicationEnabledStatusResponse isApplicationEnabledUsingGET()

Get Application Status

Check if the application is enabled or not

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.SettingsApi();
apiInstance.isApplicationEnabledUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetApplicationEnabledStatusResponse**](GetApplicationEnabledStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

