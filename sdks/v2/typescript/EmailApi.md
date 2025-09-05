# .EmailApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmail**](EmailApi.md#createEmail) | **POST** /v2/emails | Create an Email Record
[**createEmails**](EmailApi.md#createEmails) | **POST** /v2/emails:batchAdd | Create a set of Email Records
[**deleteEmail**](EmailApi.md#deleteEmail) | **DELETE** /v2/emails/{id} | Delete an Email Record
[**deleteEmails**](EmailApi.md#deleteEmails) | **POST** /v2/emails:batchRemove | Remove a set of Email Records
[**getEmail**](EmailApi.md#getEmail) | **GET** /v2/emails/{id} | Retrieve an Email
[**getEmailTemplate**](EmailApi.md#getEmailTemplate) | **GET** /v2/emails/templates/{email_template_id} | Retrieve an email template
[**listEmails**](EmailApi.md#listEmails) | **GET** /v2/emails | List Emails
[**sendEmail**](EmailApi.md#sendEmail) | **POST** /v2/emails:send | Send an Email
[**sendEmailTemplate**](EmailApi.md#sendEmailTemplate) | **POST** /v2/emails/templates:send | Send an email based on a template


# **createEmail**
> EmailSentWithContent createEmail(createEmailSentRequest)

Creates a Record of an Email sent to a Contact

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiCreateEmailRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiCreateEmailRequest = {
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

const data = await apiInstance.createEmail(request);
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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEmails**
> EmailsSentList createEmails()

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiCreateEmailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiCreateEmailsRequest = {
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

const data = await apiInstance.createEmails(request);
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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEmail**
> void deleteEmail()

Deletes a specific Email Record

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiDeleteEmailRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiDeleteEmailRequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.deleteEmail(request);
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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEmails**
> DeleteEmailsResponse deleteEmails(deleteEmailsRequest)

Removes a set of Email Records

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiDeleteEmailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiDeleteEmailsRequest = {
    // deleteEmailsRequest
  deleteEmailsRequest: {
    emailIds: [
      "emailIds_example",
    ],
  },
};

const data = await apiInstance.deleteEmails(request);
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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmail**
> EmailSentWithContent getEmail()

Retrieves a single Email that has been sent

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiGetEmailRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiGetEmailRequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.getEmail(request);
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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmailTemplate**
> EmailTemplate getEmailTemplate()

Retrieve an email template

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiGetEmailTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiGetEmailTemplateRequest = {
    // email_template_id
  emailTemplateId: "email_template_id_example",
};

const data = await apiInstance.getEmailTemplate(request);
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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEmails**
> ListEmailsSentResponse listEmails()

Retrieves a list of emails that have been sent

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiListEmailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiListEmailsRequest = {
    // Filter to apply, allowed fields are: - (String) contact_id - (String) email - (String) start_created_time - (String) end_created_time  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `created_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listEmails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) contact_id - (String) email - (String) start_created_time - (String) end_created_time  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListEmailsSentResponse**

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

# **sendEmail**
> void sendEmail()

Sends an Email to a list of Contacts

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiSendEmailRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiSendEmailRequest = {
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

const data = await apiInstance.sendEmail(request);
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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendEmailTemplate**
> void sendEmailTemplate()

Send an email based on a template

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiSendEmailTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiSendEmailTemplateRequest = {
    // Use a template to send an email to a list of contacts  (optional)
  emailSendTemplateRequest: {
    addressField: "addressField_example",
    contactIds: [
      "contactIds_example",
    ],
    templateId: "templateId_example",
    userId: "userId_example",
  },
};

const data = await apiInstance.sendEmailTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailSendTemplateRequest** | **EmailSendTemplateRequest**| Use a template to send an email to a list of contacts  |


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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


