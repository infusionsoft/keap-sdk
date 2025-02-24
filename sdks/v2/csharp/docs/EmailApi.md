# Keap.Core.V2.Api.EmailApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateEmailUsingPOST1**](EmailApi.md#createemailusingpost1) | **POST** /v2/emails | Create an Email Record |
| [**CreateEmailsUsingPOST1**](EmailApi.md#createemailsusingpost1) | **POST** /v2/emails:batchAdd | Create a set of Email Records |
| [**DeleteEmailUsingDELETE1**](EmailApi.md#deleteemailusingdelete1) | **DELETE** /v2/emails/{id} | Delete an Email Record |
| [**DeleteEmailsUsingPOST1**](EmailApi.md#deleteemailsusingpost1) | **POST** /v2/emails:batchRemove | Remove a set of Email Records |
| [**GetEmailTemplateUsingGET**](EmailApi.md#getemailtemplateusingget) | **GET** /v2/emails/templates/{email_template_id} | Retrieve an email template |
| [**GetEmailUsingGET1**](EmailApi.md#getemailusingget1) | **GET** /v2/emails/{id} | Retrieve an Email |
| [**SendEmailUsingPOST1**](EmailApi.md#sendemailusingpost1) | **POST** /v2/emails:send | Send an Email |

<a id="createemailusingpost1"></a>
# **CreateEmailUsingPOST1**
> EmailSentWithContent CreateEmailUsingPOST1 (CreateEmailSentRequest createEmailSentRequest)

Create an Email Record

Creates a Record of an Email sent to a Contact

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateEmailUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new EmailApi(config);
            var createEmailSentRequest = new CreateEmailSentRequest(); // CreateEmailSentRequest | emailWithContent

            try
            {
                // Create an Email Record
                EmailSentWithContent result = apiInstance.CreateEmailUsingPOST1(createEmailSentRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailApi.CreateEmailUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateEmailUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Email Record
    ApiResponse<EmailSentWithContent> response = apiInstance.CreateEmailUsingPOST1WithHttpInfo(createEmailSentRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailApi.CreateEmailUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createEmailSentRequest** | [**CreateEmailSentRequest**](CreateEmailSentRequest.md) | emailWithContent |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createemailsusingpost1"></a>
# **CreateEmailsUsingPOST1**
> EmailsSentList CreateEmailsUsingPOST1 (CreateEmailsSentRequest? createEmailsSentRequest = null)

Create a set of Email Records

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateEmailsUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new EmailApi(config);
            var createEmailsSentRequest = new CreateEmailsSentRequest?(); // CreateEmailsSentRequest? | Email records to persist, with content. (optional) 

            try
            {
                // Create a set of Email Records
                EmailsSentList result = apiInstance.CreateEmailsUsingPOST1(createEmailsSentRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailApi.CreateEmailsUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateEmailsUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a set of Email Records
    ApiResponse<EmailsSentList> response = apiInstance.CreateEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailApi.CreateEmailsUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createEmailsSentRequest** | [**CreateEmailsSentRequest?**](CreateEmailsSentRequest?.md) | Email records to persist, with content. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteemailusingdelete1"></a>
# **DeleteEmailUsingDELETE1**
> void DeleteEmailUsingDELETE1 (string id)

Delete an Email Record

Deletes a specific Email Record

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteEmailUsingDELETE1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new EmailApi(config);
            var id = "id_example";  // string | id

            try
            {
                // Delete an Email Record
                apiInstance.DeleteEmailUsingDELETE1(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailApi.DeleteEmailUsingDELETE1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteEmailUsingDELETE1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Email Record
    apiInstance.DeleteEmailUsingDELETE1WithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailApi.DeleteEmailUsingDELETE1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteemailsusingpost1"></a>
# **DeleteEmailsUsingPOST1**
> DeleteEmailsResponse DeleteEmailsUsingPOST1 (DeleteEmailsRequest deleteEmailsRequest)

Remove a set of Email Records

Removes a set of Email Records

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteEmailsUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new EmailApi(config);
            var deleteEmailsRequest = new DeleteEmailsRequest(); // DeleteEmailsRequest | deleteEmailsRequest

            try
            {
                // Remove a set of Email Records
                DeleteEmailsResponse result = apiInstance.DeleteEmailsUsingPOST1(deleteEmailsRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailApi.DeleteEmailsUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteEmailsUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a set of Email Records
    ApiResponse<DeleteEmailsResponse> response = apiInstance.DeleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailApi.DeleteEmailsUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **deleteEmailsRequest** | [**DeleteEmailsRequest**](DeleteEmailsRequest.md) | deleteEmailsRequest |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getemailtemplateusingget"></a>
# **GetEmailTemplateUsingGET**
> EmailTemplate GetEmailTemplateUsingGET (string emailTemplateId)

Retrieve an email template

Pre-Release

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetEmailTemplateUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new EmailApi(config);
            var emailTemplateId = "emailTemplateId_example";  // string | email_template_id

            try
            {
                // Retrieve an email template
                EmailTemplate result = apiInstance.GetEmailTemplateUsingGET(emailTemplateId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailApi.GetEmailTemplateUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetEmailTemplateUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an email template
    ApiResponse<EmailTemplate> response = apiInstance.GetEmailTemplateUsingGETWithHttpInfo(emailTemplateId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailApi.GetEmailTemplateUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **emailTemplateId** | **string** | email_template_id |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getemailusingget1"></a>
# **GetEmailUsingGET1**
> EmailSentWithContent GetEmailUsingGET1 (string id)

Retrieve an Email

Retrieves a single Email that has been sent

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetEmailUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new EmailApi(config);
            var id = "id_example";  // string | id

            try
            {
                // Retrieve an Email
                EmailSentWithContent result = apiInstance.GetEmailUsingGET1(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailApi.GetEmailUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetEmailUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Email
    ApiResponse<EmailSentWithContent> response = apiInstance.GetEmailUsingGET1WithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailApi.GetEmailUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendemailusingpost1"></a>
# **SendEmailUsingPOST1**
> void SendEmailUsingPOST1 (EmailSendRequest? emailSendRequest = null)

Send an Email

Sends an Email to a list of Contacts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class SendEmailUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new EmailApi(config);
            var emailSendRequest = new EmailSendRequest?(); // EmailSendRequest? | emailSendRequest (optional) 

            try
            {
                // Send an Email
                apiInstance.SendEmailUsingPOST1(emailSendRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling EmailApi.SendEmailUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SendEmailUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send an Email
    apiInstance.SendEmailUsingPOST1WithHttpInfo(emailSendRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmailApi.SendEmailUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **emailSendRequest** | [**EmailSendRequest?**](EmailSendRequest?.md) | emailSendRequest | [optional]  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

