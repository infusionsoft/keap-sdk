# .EmailApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmailUsingPOST1**](EmailApi.md#createEmailUsingPOST1) | **POST** /v2/emails | Create an Email Record
[**createEmailsUsingPOST1**](EmailApi.md#createEmailsUsingPOST1) | **POST** /v2/emails:batchAdd | Create a set of Email Records
[**deleteEmailUsingDELETE1**](EmailApi.md#deleteEmailUsingDELETE1) | **DELETE** /v2/emails/{id} | Delete an Email Record
[**deleteEmailsUsingPOST1**](EmailApi.md#deleteEmailsUsingPOST1) | **POST** /v2/emails:batchRemove | Remove a set of Email Records
[**getEmailTemplateUsingGET**](EmailApi.md#getEmailTemplateUsingGET) | **GET** /v2/emails/templates/{email_template_id} | Retrieve an email template
[**getEmailUsingGET1**](EmailApi.md#getEmailUsingGET1) | **GET** /v2/emails/{id} | Retrieve an Email
[**sendEmailUsingPOST1**](EmailApi.md#sendEmailUsingPOST1) | **POST** /v2/emails:send | Send an Email


# **createEmailUsingPOST1**
> EmailSentWithContent createEmailUsingPOST1(createEmailSentRequest)

Creates a Record of an Email sent to a Contact

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiCreateEmailUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiCreateEmailUsingPOST1Request = {
    // emailWithContent
  createEmailSentRequest: {
    clickedTime: "clickedTime_example",
    contactId: "contactId_example",
    headers: "headers_example",
    htmlContent: "htmlContent_example",
    openedTime: "openedTime_example",
    originalProvider: "UNKNOWN",
    originalProviderId: "originalProviderId_example",
    plainContent: "plainContent_example",
    providerSourceId: "providerSourceId_example",
    receivedTime: "receivedTime_example",
    sentFromAddress: "sentFromAddress_example",
    sentFromReplyAddress: "sentFromReplyAddress_example",
    sentTime: "sentTime_example",
    sentToAddress: "sentToAddress_example",
    sentToBccAddressList: [
      "sentToBccAddressList_example",
    ],
    sentToCcAddressList: [
      "sentToCcAddressList_example",
    ],
    subject: "subject_example",
  },
};

const data = await apiInstance.createEmailUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEmailSentRequest** | **CreateEmailSentRequest**| emailWithContent |


### Return type

**EmailSentWithContent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEmailsUsingPOST1**
> EmailsSentList createEmailsUsingPOST1()

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiCreateEmailsUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiCreateEmailsUsingPOST1Request = {
    // Email records to persist, with content. (optional)
  createEmailsSentRequest: {
    emails: [
      {
        clickedTime: "clickedTime_example",
        contactId: "contactId_example",
        headers: "headers_example",
        htmlContent: "htmlContent_example",
        openedTime: "openedTime_example",
        originalProvider: "UNKNOWN",
        originalProviderId: "originalProviderId_example",
        plainContent: "plainContent_example",
        providerSourceId: "providerSourceId_example",
        receivedTime: "receivedTime_example",
        sentFromAddress: "sentFromAddress_example",
        sentFromReplyAddress: "sentFromReplyAddress_example",
        sentTime: "sentTime_example",
        sentToAddress: "sentToAddress_example",
        sentToBccAddressList: [
          "sentToBccAddressList_example",
        ],
        sentToCcAddressList: [
          "sentToCcAddressList_example",
        ],
        subject: "subject_example",
      },
    ],
  },
};

const data = await apiInstance.createEmailsUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEmailsSentRequest** | **CreateEmailsSentRequest**| Email records to persist, with content. |


### Return type

**EmailsSentList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEmailUsingDELETE1**
> void deleteEmailUsingDELETE1()

Deletes a specific Email Record

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiDeleteEmailUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiDeleteEmailUsingDELETE1Request = {
    // id
  id: "id_example",
};

const data = await apiInstance.deleteEmailUsingDELETE1(request);
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
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEmailsUsingPOST1**
> DeleteEmailsResponse deleteEmailsUsingPOST1(deleteEmailsRequest)

Removes a set of Email Records

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiDeleteEmailsUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiDeleteEmailsUsingPOST1Request = {
    // deleteEmailsRequest
  deleteEmailsRequest: {
    emailIds: [
      "emailIds_example",
    ],
  },
};

const data = await apiInstance.deleteEmailsUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteEmailsRequest** | **DeleteEmailsRequest**| deleteEmailsRequest |


### Return type

**DeleteEmailsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmailTemplateUsingGET**
> EmailTemplate getEmailTemplateUsingGET()

Pre-Release

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiGetEmailTemplateUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiGetEmailTemplateUsingGETRequest = {
    // email_template_id
  emailTemplateId: "email_template_id_example",
};

const data = await apiInstance.getEmailTemplateUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | [**string**] | email_template_id | defaults to undefined


### Return type

**EmailTemplate**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmailUsingGET1**
> EmailSentWithContent getEmailUsingGET1()

Retrieves a single Email that has been sent

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiGetEmailUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiGetEmailUsingGET1Request = {
    // id
  id: "id_example",
};

const data = await apiInstance.getEmailUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined


### Return type

**EmailSentWithContent**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendEmailUsingPOST1**
> void sendEmailUsingPOST1()

Sends an Email to a list of Contacts

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiSendEmailUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiSendEmailUsingPOST1Request = {
    // emailSendRequest (optional)
  emailSendRequest: {
    addressField: "addressField_example",
    attachments: [
      {
        fileData: "fileData_example",
        fileName: "fileName_example",
      },
    ],
    contacts: [
      "contacts_example",
    ],
    htmlContent: "htmlContent_example",
    plainContent: "plainContent_example",
    subject: "subject_example",
    userId: "userId_example",
  },
};

const data = await apiInstance.sendEmailUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailSendRequest** | **EmailSendRequest**| emailSendRequest |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


