# .EmailApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmail**](EmailApi.md#createEmail) | **POST** /rest/v2/emails | Create an Email Record
[**createEmails**](EmailApi.md#createEmails) | **POST** /rest/v2/emails:batchAdd | Create a set of Email Records
[**deleteEmail**](EmailApi.md#deleteEmail) | **DELETE** /rest/v2/emails/{id} | Delete an Email Record
[**deleteEmails**](EmailApi.md#deleteEmails) | **POST** /rest/v2/emails:batchRemove | Remove a set of Email Records
[**getEmail**](EmailApi.md#getEmail) | **GET** /rest/v2/emails/{id} | Retrieve an Email
[**getEmailTemplate**](EmailApi.md#getEmailTemplate) | **GET** /rest/v2/emails/templates/{email_template_id} | Retrieve an email template
[**listEmails**](EmailApi.md#listEmails) | **GET** /rest/v2/emails | List Emails
[**sendEmail**](EmailApi.md#sendEmail) | **POST** /rest/v2/emails:send | Send an Email
[**sendEmailTemplate**](EmailApi.md#sendEmailTemplate) | **POST** /rest/v2/emails/templates:send | Send an email based on a template


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
  
  createEmailSentRequest: {
    subject: "Welcome to our service",
    headers: "X-Custom-Header: value",
    contactId: "456",
    sentToAddress: "john@example.com",
    sentToCcAddressList: [cc1@example.com, cc2@example.com],
    sentToBccAddressList: [bcc@example.com],
    sentFromAddress: "sender@company.com",
    sentFromReplyAddress: "reply@company.com",
    sentTime: new Date('2024-05-21T14:30:00Z'),
    receivedTime: new Date('2024-05-21T14:31:00Z'),
    openedTime: new Date('2024-05-21T15:00:00Z'),
    clickedTime: new Date('2024-05-21T15:05:00Z'),
    plainContent: "V2VsY29tZSB0byBvdXIgc2VydmljZQ==",
    htmlContent: "PGgxPldlbGNvbWU8L2gxPg==",
    originalProvider: "INFUSIONSOFT",
    originalProviderId: "msg_abc123",
    providerSourceId: "sync@company.com",
  },
};

const data = await apiInstance.createEmail(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEmailSentRequest** | **CreateEmailSentRequest**|  |


### Return type

**EmailSentWithContent**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEmails**
> EmailsSentList createEmails(createEmailsSentRequest)

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiCreateEmailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiCreateEmailsRequest = {
  
  createEmailsSentRequest: {
    emails: [
      {
        subject: "Welcome to our service",
        headers: "X-Custom-Header: value",
        contactId: "456",
        sentToAddress: "john@example.com",
        sentToCcAddressList: [cc1@example.com, cc2@example.com],
        sentToBccAddressList: [bcc@example.com],
        sentFromAddress: "sender@company.com",
        sentFromReplyAddress: "reply@company.com",
        sentTime: new Date('2024-05-21T14:30:00Z'),
        receivedTime: new Date('2024-05-21T14:31:00Z'),
        openedTime: new Date('2024-05-21T15:00:00Z'),
        clickedTime: new Date('2024-05-21T15:05:00Z'),
        plainContent: "V2VsY29tZSB0byBvdXIgc2VydmljZQ==",
        htmlContent: "PGgxPldlbGNvbWU8L2gxPg==",
        originalProvider: "INFUSIONSOFT",
        originalProviderId: "msg_abc123",
        providerSourceId: "sync@company.com",
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
 **createEmailsSentRequest** | **CreateEmailsSentRequest**|  |


### Return type

**EmailsSentList**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  id: "id_example",
};

const data = await apiInstance.deleteEmail(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  deleteEmailsRequest: {
    emailIds: [123, 456, 789],
  },
};

const data = await apiInstance.deleteEmails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteEmailsRequest** | **DeleteEmailsRequest**|  |


### Return type

**DeleteEmailsResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  id: "id_example",
};

const data = await apiInstance.getEmail(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**EmailSentWithContent**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  emailTemplateId: "email_template_id_example",
};

const data = await apiInstance.getEmailTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | [**string**] |  | defaults to undefined


### Return type

**EmailTemplate**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendEmail**
> void sendEmail(emailSendRequest)

Sends an Email to a list of Contacts

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiSendEmailRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiSendEmailRequest = {
  
  emailSendRequest: {
    contacts: [1, 2, 3],
    subject: "Welcome to our newsletter",
    attachments: [
      {
        fileName: "document.pdf",
        fileData: "JVBERi0xLjQKJeLjz9MK...",
      },
    ],
    userId: "1",
    htmlContent: "PGgxPldlbGNvbWU8L2gxPg==",
    plainContent: "V2VsY29tZSB0byBvdXIgbmV3c2xldHRlcg==",
    addressField: "EMAIL1",
  },
};

const data = await apiInstance.sendEmail(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailSendRequest** | **EmailSendRequest**|  |


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendEmailTemplate**
> void sendEmailTemplate(emailSendTemplateRequest)

Send an email based on a template

### Example


```typescript
import { createConfiguration, EmailApi } from '';
import type { EmailApiSendEmailTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EmailApi(configuration);

const request: EmailApiSendEmailTemplateRequest = {
  
  emailSendTemplateRequest: {
    templateId: "123",
    contactIds: [1, 2, 3],
    userId: "1",
    addressField: "EMAIL1",
  },
};

const data = await apiInstance.sendEmailTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailSendTemplateRequest** | **EmailSendTemplateRequest**|  |


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


