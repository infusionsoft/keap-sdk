# KeapCoreServiceV2Sdk.EmailApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmailUsingPOST1**](EmailApi.md#createEmailUsingPOST1) | **POST** /v2/emails | Create an Email Record
[**createEmailsUsingPOST1**](EmailApi.md#createEmailsUsingPOST1) | **POST** /v2/emails:batchAdd | Create a set of Email Records
[**deleteEmailUsingDELETE1**](EmailApi.md#deleteEmailUsingDELETE1) | **DELETE** /v2/emails/{id} | Delete an Email Record
[**deleteEmailsUsingPOST1**](EmailApi.md#deleteEmailsUsingPOST1) | **POST** /v2/emails:batchRemove | Remove a set of Email Records
[**getEmailUsingGET1**](EmailApi.md#getEmailUsingGET1) | **GET** /v2/emails/{id} | Retrieve an Email
[**sendEmailUsingPOST1**](EmailApi.md#sendEmailUsingPOST1) | **POST** /v2/emails:send | Send an Email



## createEmailUsingPOST1

> EmailSentWithContent createEmailUsingPOST1(createEmailSentRequest)

Create an Email Record

Creates a Record of an Email sent to a Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let createEmailSentRequest = new KeapCoreServiceV2Sdk.CreateEmailSentRequest(); // CreateEmailSentRequest | emailWithContent
apiInstance.createEmailUsingPOST1(createEmailSentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEmailSentRequest** | [**CreateEmailSentRequest**](CreateEmailSentRequest.md)| emailWithContent | 

### Return type

[**EmailSentWithContent**](EmailSentWithContent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEmailsUsingPOST1

> EmailsSentList createEmailsUsingPOST1(opts)

Create a set of Email Records

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let opts = {
  'createEmailsSentRequest': new KeapCoreServiceV2Sdk.CreateEmailsSentRequest() // CreateEmailsSentRequest | Email records to persist, with content.
};
apiInstance.createEmailsUsingPOST1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEmailsSentRequest** | [**CreateEmailsSentRequest**](CreateEmailsSentRequest.md)| Email records to persist, with content. | [optional] 

### Return type

[**EmailsSentList**](EmailsSentList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEmailUsingDELETE1

> deleteEmailUsingDELETE1(id)

Delete an Email Record

Deletes a specific Email Record

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let id = "id_example"; // String | id
apiInstance.deleteEmailUsingDELETE1(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEmailsUsingPOST1

> DeleteEmailsResponse deleteEmailsUsingPOST1(deleteEmailsRequest)

Remove a set of Email Records

Removes a set of Email Records

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let deleteEmailsRequest = new KeapCoreServiceV2Sdk.DeleteEmailsRequest(); // DeleteEmailsRequest | deleteEmailsRequest
apiInstance.deleteEmailsUsingPOST1(deleteEmailsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteEmailsRequest** | [**DeleteEmailsRequest**](DeleteEmailsRequest.md)| deleteEmailsRequest | 

### Return type

[**DeleteEmailsResponse**](DeleteEmailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEmailUsingGET1

> EmailSentWithContent getEmailUsingGET1(id)

Retrieve an Email

Retrieves a single Email that has been sent

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let id = "id_example"; // String | id
apiInstance.getEmailUsingGET1(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**EmailSentWithContent**](EmailSentWithContent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendEmailUsingPOST1

> sendEmailUsingPOST1(opts)

Send an Email

Sends an Email to a list of Contacts

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let opts = {
  'emailSendRequest': new KeapCoreServiceV2Sdk.EmailSendRequest() // EmailSendRequest | emailSendRequest
};
apiInstance.sendEmailUsingPOST1(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailSendRequest** | [**EmailSendRequest**](EmailSendRequest.md)| emailSendRequest | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

