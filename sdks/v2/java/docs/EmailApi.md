# EmailApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEmail**](EmailApi.md#createEmail) | **POST** /v2/emails | Create an Email Record |
| [**createEmailWithHttpInfo**](EmailApi.md#createEmailWithHttpInfo) | **POST** /v2/emails | Create an Email Record |
| [**createEmails**](EmailApi.md#createEmails) | **POST** /v2/emails:batchAdd | Create a set of Email Records |
| [**createEmailsWithHttpInfo**](EmailApi.md#createEmailsWithHttpInfo) | **POST** /v2/emails:batchAdd | Create a set of Email Records |
| [**deleteEmail**](EmailApi.md#deleteEmail) | **DELETE** /v2/emails/{id} | Delete an Email Record |
| [**deleteEmailWithHttpInfo**](EmailApi.md#deleteEmailWithHttpInfo) | **DELETE** /v2/emails/{id} | Delete an Email Record |
| [**deleteEmails**](EmailApi.md#deleteEmails) | **POST** /v2/emails:batchRemove | Remove a set of Email Records |
| [**deleteEmailsWithHttpInfo**](EmailApi.md#deleteEmailsWithHttpInfo) | **POST** /v2/emails:batchRemove | Remove a set of Email Records |
| [**getEmail**](EmailApi.md#getEmail) | **GET** /v2/emails/{id} | Retrieve an Email |
| [**getEmailWithHttpInfo**](EmailApi.md#getEmailWithHttpInfo) | **GET** /v2/emails/{id} | Retrieve an Email |
| [**getEmailTemplate**](EmailApi.md#getEmailTemplate) | **GET** /v2/emails/templates/{email_template_id} | Retrieve an email template |
| [**getEmailTemplateWithHttpInfo**](EmailApi.md#getEmailTemplateWithHttpInfo) | **GET** /v2/emails/templates/{email_template_id} | Retrieve an email template |
| [**sendEmail**](EmailApi.md#sendEmail) | **POST** /v2/emails:send | Send an Email |
| [**sendEmailWithHttpInfo**](EmailApi.md#sendEmailWithHttpInfo) | **POST** /v2/emails:send | Send an Email |
| [**sendEmailTemplate**](EmailApi.md#sendEmailTemplate) | **POST** /v2/emails/templates:send | Send an email based on a template |
| [**sendEmailTemplateWithHttpInfo**](EmailApi.md#sendEmailTemplateWithHttpInfo) | **POST** /v2/emails/templates:send | Send an email based on a template |



## createEmail

> EmailSentWithContent createEmail(createEmailSentRequest)

Create an Email Record

Creates a Record of an Email sent to a Contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        CreateEmailSentRequest createEmailSentRequest = new CreateEmailSentRequest(); // CreateEmailSentRequest | emailWithContent
        try {
            EmailSentWithContent result = apiInstance.createEmail(createEmailSentRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#createEmail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createEmailSentRequest** | [**CreateEmailSentRequest**](CreateEmailSentRequest.md)| emailWithContent | |

### Return type

[**EmailSentWithContent**](EmailSentWithContent.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## createEmailWithHttpInfo

> ApiResponse<EmailSentWithContent> createEmail createEmailWithHttpInfo(createEmailSentRequest)

Create an Email Record

Creates a Record of an Email sent to a Contact

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        CreateEmailSentRequest createEmailSentRequest = new CreateEmailSentRequest(); // CreateEmailSentRequest | emailWithContent
        try {
            ApiResponse<EmailSentWithContent> response = apiInstance.createEmailWithHttpInfo(createEmailSentRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#createEmail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createEmailSentRequest** | [**CreateEmailSentRequest**](CreateEmailSentRequest.md)| emailWithContent | |

### Return type

ApiResponse<[**EmailSentWithContent**](EmailSentWithContent.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |


## createEmails

> EmailsSentList createEmails(createEmailsSentRequest)

Create a set of Email Records

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        CreateEmailsSentRequest createEmailsSentRequest = new CreateEmailsSentRequest(); // CreateEmailsSentRequest | Email records to persist, with content.
        try {
            EmailsSentList result = apiInstance.createEmails(createEmailsSentRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#createEmails");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createEmailsSentRequest** | [**CreateEmailsSentRequest**](CreateEmailsSentRequest.md)| Email records to persist, with content. | [optional] |

### Return type

[**EmailsSentList**](EmailsSentList.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## createEmailsWithHttpInfo

> ApiResponse<EmailsSentList> createEmails createEmailsWithHttpInfo(createEmailsSentRequest)

Create a set of Email Records

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        CreateEmailsSentRequest createEmailsSentRequest = new CreateEmailsSentRequest(); // CreateEmailsSentRequest | Email records to persist, with content.
        try {
            ApiResponse<EmailsSentList> response = apiInstance.createEmailsWithHttpInfo(createEmailsSentRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#createEmails");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createEmailsSentRequest** | [**CreateEmailsSentRequest**](CreateEmailsSentRequest.md)| Email records to persist, with content. | [optional] |

### Return type

ApiResponse<[**EmailsSentList**](EmailsSentList.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |


## deleteEmail

> void deleteEmail(id)

Delete an Email Record

Deletes a specific Email Record

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            apiInstance.deleteEmail(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#deleteEmail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| id | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## deleteEmailWithHttpInfo

> ApiResponse<Void> deleteEmail deleteEmailWithHttpInfo(id)

Delete an Email Record

Deletes a specific Email Record

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<Void> response = apiInstance.deleteEmailWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#deleteEmail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| id | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |


## deleteEmails

> DeleteEmailsResponse deleteEmails(deleteEmailsRequest)

Remove a set of Email Records

Removes a set of Email Records

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        DeleteEmailsRequest deleteEmailsRequest = new DeleteEmailsRequest(); // DeleteEmailsRequest | deleteEmailsRequest
        try {
            DeleteEmailsResponse result = apiInstance.deleteEmails(deleteEmailsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#deleteEmails");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deleteEmailsRequest** | [**DeleteEmailsRequest**](DeleteEmailsRequest.md)| deleteEmailsRequest | |

### Return type

[**DeleteEmailsResponse**](DeleteEmailsResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## deleteEmailsWithHttpInfo

> ApiResponse<DeleteEmailsResponse> deleteEmails deleteEmailsWithHttpInfo(deleteEmailsRequest)

Remove a set of Email Records

Removes a set of Email Records

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        DeleteEmailsRequest deleteEmailsRequest = new DeleteEmailsRequest(); // DeleteEmailsRequest | deleteEmailsRequest
        try {
            ApiResponse<DeleteEmailsResponse> response = apiInstance.deleteEmailsWithHttpInfo(deleteEmailsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#deleteEmails");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deleteEmailsRequest** | [**DeleteEmailsRequest**](DeleteEmailsRequest.md)| deleteEmailsRequest | |

### Return type

ApiResponse<[**DeleteEmailsResponse**](DeleteEmailsResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |


## getEmail

> EmailSentWithContent getEmail(id)

Retrieve an Email

Retrieves a single Email that has been sent

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            EmailSentWithContent result = apiInstance.getEmail(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#getEmail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| id | |

### Return type

[**EmailSentWithContent**](EmailSentWithContent.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## getEmailWithHttpInfo

> ApiResponse<EmailSentWithContent> getEmail getEmailWithHttpInfo(id)

Retrieve an Email

Retrieves a single Email that has been sent

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<EmailSentWithContent> response = apiInstance.getEmailWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#getEmail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| id | |

### Return type

ApiResponse<[**EmailSentWithContent**](EmailSentWithContent.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |


## getEmailTemplate

> EmailTemplate getEmailTemplate(emailTemplateId)

Retrieve an email template

Retrieve an email template

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        String emailTemplateId = "emailTemplateId_example"; // String | email_template_id
        try {
            EmailTemplate result = apiInstance.getEmailTemplate(emailTemplateId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#getEmailTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **emailTemplateId** | **String**| email_template_id | |

### Return type

[**EmailTemplate**](EmailTemplate.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

## getEmailTemplateWithHttpInfo

> ApiResponse<EmailTemplate> getEmailTemplate getEmailTemplateWithHttpInfo(emailTemplateId)

Retrieve an email template

Retrieve an email template

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        String emailTemplateId = "emailTemplateId_example"; // String | email_template_id
        try {
            ApiResponse<EmailTemplate> response = apiInstance.getEmailTemplateWithHttpInfo(emailTemplateId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#getEmailTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **emailTemplateId** | **String**| email_template_id | |

### Return type

ApiResponse<[**EmailTemplate**](EmailTemplate.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |


## sendEmail

> void sendEmail(emailSendRequest)

Send an Email

Sends an Email to a list of Contacts

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        EmailSendRequest emailSendRequest = new EmailSendRequest(); // EmailSendRequest | emailSendRequest
        try {
            apiInstance.sendEmail(emailSendRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#sendEmail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **emailSendRequest** | [**EmailSendRequest**](EmailSendRequest.md)| emailSendRequest | [optional] |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## sendEmailWithHttpInfo

> ApiResponse<Void> sendEmail sendEmailWithHttpInfo(emailSendRequest)

Send an Email

Sends an Email to a list of Contacts

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        EmailSendRequest emailSendRequest = new EmailSendRequest(); // EmailSendRequest | emailSendRequest
        try {
            ApiResponse<Void> response = apiInstance.sendEmailWithHttpInfo(emailSendRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#sendEmail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **emailSendRequest** | [**EmailSendRequest**](EmailSendRequest.md)| emailSendRequest | [optional] |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |


## sendEmailTemplate

> void sendEmailTemplate(emailSendTemplateRequest)

Send an email based on a template

Send an email based on a template

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        EmailSendTemplateRequest emailSendTemplateRequest = new EmailSendTemplateRequest(); // EmailSendTemplateRequest | Use a template to send an email to a list of contacts 
        try {
            apiInstance.sendEmailTemplate(emailSendTemplateRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#sendEmailTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **emailSendTemplateRequest** | [**EmailSendTemplateRequest**](EmailSendTemplateRequest.md)| Use a template to send an email to a list of contacts  | [optional] |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

## sendEmailTemplateWithHttpInfo

> ApiResponse<Void> sendEmailTemplate sendEmailTemplateWithHttpInfo(emailSendTemplateRequest)

Send an email based on a template

Send an email based on a template

### Example

```java
// Import classes:
import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Configuration;
import com.keap.core.sdk.models.*;
import com.keap.core.sdk.client.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        EmailApi apiInstance = new EmailApi(defaultClient);
        EmailSendTemplateRequest emailSendTemplateRequest = new EmailSendTemplateRequest(); // EmailSendTemplateRequest | Use a template to send an email to a list of contacts 
        try {
            ApiResponse<Void> response = apiInstance.sendEmailTemplateWithHttpInfo(emailSendTemplateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#sendEmailTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **emailSendTemplateRequest** | [**EmailSendTemplateRequest**](EmailSendTemplateRequest.md)| Use a template to send an email to a list of contacts  | [optional] |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

