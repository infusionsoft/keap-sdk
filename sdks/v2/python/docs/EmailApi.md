# keap_core_v2_client.EmailApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_email**](EmailApi.md#create_email) | **POST** /v2/emails | Create an Email Record
[**create_emails**](EmailApi.md#create_emails) | **POST** /v2/emails:batchAdd | Create a set of Email Records
[**delete_email**](EmailApi.md#delete_email) | **DELETE** /v2/emails/{id} | Delete an Email Record
[**delete_emails**](EmailApi.md#delete_emails) | **POST** /v2/emails:batchRemove | Remove a set of Email Records
[**get_email**](EmailApi.md#get_email) | **GET** /v2/emails/{id} | Retrieve an Email
[**get_email_template**](EmailApi.md#get_email_template) | **GET** /v2/emails/templates/{email_template_id} | Retrieve an email template
[**list_emails**](EmailApi.md#list_emails) | **GET** /v2/emails | List Emails
[**send_email**](EmailApi.md#send_email) | **POST** /v2/emails:send | Send an Email
[**send_email_template**](EmailApi.md#send_email_template) | **POST** /v2/emails/templates:send | Send an email based on a template


# **create_email**
> EmailSentWithContent create_email(create_email_sent_request)

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
        api_response = api_instance.create_email(create_email_sent_request)
        print("The response of EmailApi->create_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->create_email: %s\n" % e)
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

# **create_emails**
> EmailsSentList create_emails(create_emails_sent_request=create_emails_sent_request)

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
        api_response = api_instance.create_emails(create_emails_sent_request=create_emails_sent_request)
        print("The response of EmailApi->create_emails:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->create_emails: %s\n" % e)
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

# **delete_email**
> delete_email(id)

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
        api_instance.delete_email(id)
    except Exception as e:
        print("Exception when calling EmailApi->delete_email: %s\n" % e)
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

# **delete_emails**
> DeleteEmailsResponse delete_emails(delete_emails_request)

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
        api_response = api_instance.delete_emails(delete_emails_request)
        print("The response of EmailApi->delete_emails:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->delete_emails: %s\n" % e)
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

# **get_email**
> EmailSentWithContent get_email(id)

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
        api_response = api_instance.get_email(id)
        print("The response of EmailApi->get_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->get_email: %s\n" % e)
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

# **get_email_template**
> EmailTemplate get_email_template(email_template_id)

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
        api_response = api_instance.get_email_template(email_template_id)
        print("The response of EmailApi->get_email_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->get_email_template: %s\n" % e)
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

# **list_emails**
> ListEmailsSentResponse list_emails(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Emails

Retrieves a list of emails that have been sent

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_emails_sent_response import ListEmailsSentResponse
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
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) contact_id - (String) email - (String) start_created_time - (String) end_created_time  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `created_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Emails
        api_response = api_instance.list_emails(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of EmailApi->list_emails:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailApi->list_emails: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) contact_id - (String) email - (String) start_created_time - (String) end_created_time  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListEmailsSentResponse**](ListEmailsSentResponse.md)

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

# **send_email**
> send_email(email_send_request=email_send_request)

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
        api_instance.send_email(email_send_request=email_send_request)
    except Exception as e:
        print("Exception when calling EmailApi->send_email: %s\n" % e)
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

# **send_email_template**
> send_email_template(email_send_template_request=email_send_template_request)

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
        api_instance.send_email_template(email_send_template_request=email_send_template_request)
    except Exception as e:
        print("Exception when calling EmailApi->send_email_template: %s\n" % e)
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

