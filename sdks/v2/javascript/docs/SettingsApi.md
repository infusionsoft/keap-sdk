# KeapCoreServiceV2Sdk.SettingsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationConfigurations**](SettingsApi.md#getApplicationConfigurations) | **GET** /rest/v2/settings/applications:getConfiguration | Get Application Configuration
[**getContactOptionTypes**](SettingsApi.md#getContactOptionTypes) | **GET** /rest/v2/settings/contactOptionTypes | Get Contact Option types
[**isApplicationEnabled**](SettingsApi.md#isApplicationEnabled) | **GET** /rest/v2/settings/applications:isEnabled | Get Application Status



## getApplicationConfigurations

> GetSettingsResponse getApplicationConfigurations(opts)

Get Application Configuration

Get configuration values for the application instance.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SettingsApi();
let opts = {
  'fields': ["null"] // [String] | By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
};
apiInstance.getApplicationConfigurations(opts).then((data) => {
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

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactOptionTypes

> GetContactOptionTypesResponse getContactOptionTypes()

Get Contact Option types

Gets a list of Contact Option types.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SettingsApi();
apiInstance.getContactOptionTypes().then((data) => {
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

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## isApplicationEnabled

> GetApplicationEnabledStatusResponse isApplicationEnabled()

Get Application Status

Check if the application is enabled or not

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SettingsApi();
apiInstance.isApplicationEnabled().then((data) => {
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

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

