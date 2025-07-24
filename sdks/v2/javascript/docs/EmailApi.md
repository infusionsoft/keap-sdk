# KeapCoreServiceV2Sdk.EmailApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmail**](EmailApi.md#createEmail) | **POST** /v2/emails | Create an Email Record
[**createEmails**](EmailApi.md#createEmails) | **POST** /v2/emails:batchAdd | Create a set of Email Records
[**deleteEmail**](EmailApi.md#deleteEmail) | **DELETE** /v2/emails/{id} | Delete an Email Record
[**deleteEmails**](EmailApi.md#deleteEmails) | **POST** /v2/emails:batchRemove | Remove a set of Email Records
[**getEmail**](EmailApi.md#getEmail) | **GET** /v2/emails/{id} | Retrieve an Email
[**getEmailTemplate**](EmailApi.md#getEmailTemplate) | **GET** /v2/emails/templates/{email_template_id} | Retrieve an email template
[**sendEmail**](EmailApi.md#sendEmail) | **POST** /v2/emails:send | Send an Email
[**sendEmailTemplate**](EmailApi.md#sendEmailTemplate) | **POST** /v2/emails/templates:send | Send an email based on a template



## createEmail

> EmailSentWithContent createEmail(createEmailSentRequest)

Create an Email Record

Creates a Record of an Email sent to a Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let createEmailSentRequest = new KeapCoreServiceV2Sdk.CreateEmailSentRequest(); // CreateEmailSentRequest | emailWithContent
apiInstance.createEmail(createEmailSentRequest).then((data) => {
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


## createEmails

> EmailsSentList createEmails(opts)

Create a set of Email Records

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let opts = {
  'createEmailsSentRequest': new KeapCoreServiceV2Sdk.CreateEmailsSentRequest() // CreateEmailsSentRequest | Email records to persist, with content.
};
apiInstance.createEmails(opts).then((data) => {
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


## deleteEmail

> deleteEmail(id)

Delete an Email Record

Deletes a specific Email Record

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let id = "id_example"; // String | id
apiInstance.deleteEmail(id).then(() => {
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


## deleteEmails

> DeleteEmailsResponse deleteEmails(deleteEmailsRequest)

Remove a set of Email Records

Removes a set of Email Records

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let deleteEmailsRequest = new KeapCoreServiceV2Sdk.DeleteEmailsRequest(); // DeleteEmailsRequest | deleteEmailsRequest
apiInstance.deleteEmails(deleteEmailsRequest).then((data) => {
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


## getEmail

> EmailSentWithContent getEmail(id)

Retrieve an Email

Retrieves a single Email that has been sent

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let id = "id_example"; // String | id
apiInstance.getEmail(id).then((data) => {
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


## getEmailTemplate

> EmailTemplate getEmailTemplate(emailTemplateId)

Retrieve an email template

Retrieve an email template

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let emailTemplateId = "emailTemplateId_example"; // String | email_template_id
apiInstance.getEmailTemplate(emailTemplateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **String**| email_template_id | 

### Return type

[**EmailTemplate**](EmailTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendEmail

> sendEmail(opts)

Send an Email

Sends an Email to a list of Contacts

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let opts = {
  'emailSendRequest': new KeapCoreServiceV2Sdk.EmailSendRequest() // EmailSendRequest | emailSendRequest
};
apiInstance.sendEmail(opts).then(() => {
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


## sendEmailTemplate

> sendEmailTemplate(opts)

Send an email based on a template

Send an email based on a template

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.EmailApi();
let opts = {
  'emailSendTemplateRequest': new KeapCoreServiceV2Sdk.EmailSendTemplateRequest() // EmailSendTemplateRequest | Use a template to send an email to a list of contacts 
};
apiInstance.sendEmailTemplate(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailSendTemplateRequest** | [**EmailSendTemplateRequest**](EmailSendTemplateRequest.md)| Use a template to send an email to a list of contacts  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

