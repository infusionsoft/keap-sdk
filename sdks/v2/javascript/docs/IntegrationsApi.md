# KeapCoreServiceV2Sdk.IntegrationsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**achieveIntegrationsWordPressOptInGoal**](IntegrationsApi.md#achieveIntegrationsWordPressOptInGoal) | **POST** /rest/v2/integrations/wordpress/options/{option_key}:achieve | Achieve a WordPress Opt-In Goal
[**addIntegrationsWordPressOptIn**](IntegrationsApi.md#addIntegrationsWordPressOptIn) | **POST** /rest/v2/integrations/wordpress/options | Add a WordPress Opt-In Option
[**deleteIntegrationsWordPressOptIn**](IntegrationsApi.md#deleteIntegrationsWordPressOptIn) | **DELETE** /rest/v2/integrations/wordpress/options/{option_key} | Delete a WordPress Opt-In Option
[**listIntegrationsWordPressOptInOptions**](IntegrationsApi.md#listIntegrationsWordPressOptInOptions) | **GET** /rest/v2/integrations/wordpress/options | List WordPress Opt-In Options



## achieveIntegrationsWordPressOptInGoal

> AchieveWordPressOptInGoalResult achieveIntegrationsWordPressOptInGoal(optionKey, achieveIntegrationsWordPressOptInOptionGoalRequest)

Achieve a WordPress Opt-In Goal

Achieves a WordPress Opt-In Option Goal

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.IntegrationsApi();
let optionKey = "optionKey_example"; // String | 
let achieveIntegrationsWordPressOptInOptionGoalRequest = new KeapCoreServiceV2Sdk.AchieveIntegrationsWordPressOptInOptionGoalRequest(); // AchieveIntegrationsWordPressOptInOptionGoalRequest | 
apiInstance.achieveIntegrationsWordPressOptInGoal(optionKey, achieveIntegrationsWordPressOptInOptionGoalRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionKey** | **String**|  | 
 **achieveIntegrationsWordPressOptInOptionGoalRequest** | [**AchieveIntegrationsWordPressOptInOptionGoalRequest**](AchieveIntegrationsWordPressOptInOptionGoalRequest.md)|  | 

### Return type

[**AchieveWordPressOptInGoalResult**](AchieveWordPressOptInGoalResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addIntegrationsWordPressOptIn

> WordPressOptInOption addIntegrationsWordPressOptIn(createIntegrationsWordPressOptInOption)

Add a WordPress Opt-In Option

Adds a value to the list of WordPress Opt-In Options Available

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.IntegrationsApi();
let createIntegrationsWordPressOptInOption = new KeapCoreServiceV2Sdk.CreateIntegrationsWordPressOptInOption(); // CreateIntegrationsWordPressOptInOption | 
apiInstance.addIntegrationsWordPressOptIn(createIntegrationsWordPressOptInOption).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createIntegrationsWordPressOptInOption** | [**CreateIntegrationsWordPressOptInOption**](CreateIntegrationsWordPressOptInOption.md)|  | 

### Return type

[**WordPressOptInOption**](WordPressOptInOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIntegrationsWordPressOptIn

> deleteIntegrationsWordPressOptIn(optionKey)

Delete a WordPress Opt-In Option

Deletes a value from the list of WordPress Opt-In Options Available

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.IntegrationsApi();
let optionKey = "optionKey_example"; // String | 
apiInstance.deleteIntegrationsWordPressOptIn(optionKey).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listIntegrationsWordPressOptInOptions

> ListWordPressOptInOptionsResponse listIntegrationsWordPressOptInOptions()

List WordPress Opt-In Options

Retrieves the list of WordPress Opt-In Options available

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.IntegrationsApi();
apiInstance.listIntegrationsWordPressOptInOptions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListWordPressOptInOptionsResponse**](ListWordPressOptInOptionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

