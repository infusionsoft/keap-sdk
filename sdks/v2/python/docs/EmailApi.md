# keap_core_v2_client.EmailApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_email_using_post1**](EmailApi.md#create_email_using_post1) | **POST** /v2/emails | Create an Email Record
[**create_emails_using_post1**](EmailApi.md#create_emails_using_post1) | **POST** /v2/emails:batchAdd | Create a set of Email Records
[**delete_email_using_delete1**](EmailApi.md#delete_email_using_delete1) | **DELETE** /v2/emails/{id} | Delete an Email Record
[**delete_emails_using_post1**](EmailApi.md#delete_emails_using_post1) | **POST** /v2/emails:batchRemove | Remove a set of Email Records
[**get_email_template_using_get**](EmailApi.md#get_email_template_using_get) | **GET** /v2/emails/templates/{email_template_id} | Retrieve an email template
[**get_email_using_get1**](EmailApi.md#get_email_using_get1) | **GET** /v2/emails/{id} | Retrieve an Email
[**send_email_template_using_post**](EmailApi.md#send_email_template_using_post) | **POST** /v2/emails/templates:send | Send an email based on a template
[**send_email_using_post1**](EmailApi.md#send_email_using_post1) | **POST** /v2/emails:send | Send an Email


# **create_email_using_post1**
> EmailSentWithContent create_email_using_post1(create_email_sent_request)

Create an Email Record

Creates a Record of an Email sent to a Contact

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_email_sent_request import CreateEmailSentRequest
from keap_core_v2_client.models.email_sent_with_content import EmailSentWithContent
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.EmailApi(api_client)
    create_email_sent_request = keap_core_v2_client.CreateEmailSentRequest() # CreateEmailSentRequest | emailWithContent

    try:
        # Create an Email Record
        api_response = api_instance.create_email_using_post1(create_email_sent_request)
        print("The response of EmailApi->create_email_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->create_email_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_email_sent_request** | [**CreateEmailSentRequest**](CreateEmailSentRequest.md)| emailWithContent | 

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
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_emails_using_post1**
> EmailsSentList create_emails_using_post1(create_emails_sent_request=create_emails_sent_request)

Create a set of Email Records

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_emails_sent_request import CreateEmailsSentRequest
from keap_core_v2_client.models.emails_sent_list import EmailsSentList
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.EmailApi(api_client)
    create_emails_sent_request = keap_core_v2_client.CreateEmailsSentRequest() # CreateEmailsSentRequest | Email records to persist, with content. (optional)

    try:
        # Create a set of Email Records
        api_response = api_instance.create_emails_using_post1(create_emails_sent_request=create_emails_sent_request)
        print("The response of EmailApi->create_emails_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->create_emails_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_emails_sent_request** | [**CreateEmailsSentRequest**](CreateEmailsSentRequest.md)| Email records to persist, with content. | [optional] 

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
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_email_using_delete1**
> delete_email_using_delete1(id)

Delete an Email Record

Deletes a specific Email Record

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.EmailApi(api_client)
    id = 'id_example' # str | id

    try:
        # Delete an Email Record
        api_instance.delete_email_using_delete1(id)
    except Exception as e:
        print("Exception when calling EmailApi->delete_email_using_delete1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 

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
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_emails_using_post1**
> DeleteEmailsResponse delete_emails_using_post1(delete_emails_request)

Remove a set of Email Records

Removes a set of Email Records

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.delete_emails_request import DeleteEmailsRequest
from keap_core_v2_client.models.delete_emails_response import DeleteEmailsResponse
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.EmailApi(api_client)
    delete_emails_request = keap_core_v2_client.DeleteEmailsRequest() # DeleteEmailsRequest | deleteEmailsRequest

    try:
        # Remove a set of Email Records
        api_response = api_instance.delete_emails_using_post1(delete_emails_request)
        print("The response of EmailApi->delete_emails_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->delete_emails_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_emails_request** | [**DeleteEmailsRequest**](DeleteEmailsRequest.md)| deleteEmailsRequest | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_email_template_using_get**
> EmailTemplate get_email_template_using_get(email_template_id)

Retrieve an email template

Retrieve an email template

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.email_template import EmailTemplate
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.EmailApi(api_client)
    email_template_id = 'email_template_id_example' # str | email_template_id

    try:
        # Retrieve an email template
        api_response = api_instance.get_email_template_using_get(email_template_id)
        print("The response of EmailApi->get_email_template_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->get_email_template_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_template_id** | **str**| email_template_id | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_email_using_get1**
> EmailSentWithContent get_email_using_get1(id)

Retrieve an Email

Retrieves a single Email that has been sent

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.email_sent_with_content import EmailSentWithContent
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.EmailApi(api_client)
    id = 'id_example' # str | id

    try:
        # Retrieve an Email
        api_response = api_instance.get_email_using_get1(id)
        print("The response of EmailApi->get_email_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->get_email_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_email_template_using_post**
> send_email_template_using_post(email_send_template_request=email_send_template_request)

Send an email based on a template

Send an email based on a template

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.email_send_template_request import EmailSendTemplateRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.EmailApi(api_client)
    email_send_template_request = keap_core_v2_client.EmailSendTemplateRequest() # EmailSendTemplateRequest | Use a template to send an email to a list of contacts  (optional)

    try:
        # Send an email based on a template
        api_instance.send_email_template_using_post(email_send_template_request=email_send_template_request)
    except Exception as e:
        print("Exception when calling EmailApi->send_email_template_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_send_template_request** | [**EmailSendTemplateRequest**](EmailSendTemplateRequest.md)| Use a template to send an email to a list of contacts  | [optional] 

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
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_email_using_post1**
> send_email_using_post1(email_send_request=email_send_request)

Send an Email

Sends an Email to a list of Contacts

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.email_send_request import EmailSendRequest
from keap_core_v2_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_core_v2_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_core_v2_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_core_v2_client.EmailApi(api_client)
    email_send_request = keap_core_v2_client.EmailSendRequest() # EmailSendRequest | emailSendRequest (optional)

    try:
        # Send an Email
        api_instance.send_email_using_post1(email_send_request=email_send_request)
    except Exception as e:
        print("Exception when calling EmailApi->send_email_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_send_request** | [**EmailSendRequest**](EmailSendRequest.md)| emailSendRequest | [optional] 

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
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

