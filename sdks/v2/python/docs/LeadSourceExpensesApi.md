# keap_core_v2_client.LeadSourceExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_lead_source_expense**](LeadSourceExpensesApi.md#create_lead_source_expense) | **POST** /v2/leadSources/{lead_source_id}/expenses | Create a Lead Source Expense
[**delete_lead_source_expense**](LeadSourceExpensesApi.md#delete_lead_source_expense) | **DELETE** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Delete a lead source expense
[**get_lead_source_expense**](LeadSourceExpensesApi.md#get_lead_source_expense) | **GET** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Retrieve a Lead Source Expense
[**list_lead_source_expenses**](LeadSourceExpensesApi.md#list_lead_source_expenses) | **GET** /v2/leadSources/{lead_source_id}/expenses | List Lead Source Expenses
[**update_lead_source_expense**](LeadSourceExpensesApi.md#update_lead_source_expense) | **PATCH** /v2/leadSources/{lead_source_id}/expenses/{lead_source_expense_id} | Update a Lead Source Expense


# **create_lead_source_expense**
> LeadSourceExpense create_lead_source_expense(lead_source_id, create_lead_source_expense_request)

Create a Lead Source Expense

Creates a new Lead Source Expense

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_lead_source_expense_request import CreateLeadSourceExpenseRequest
from keap_core_v2_client.models.lead_source_expense import LeadSourceExpense
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
    api_instance = keap_core_v2_client.LeadSourceExpensesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this expense belongs to
    create_lead_source_expense_request = keap_core_v2_client.CreateLeadSourceExpenseRequest() # CreateLeadSourceExpenseRequest | The request object to create a new lead source expense

    try:
        # Create a Lead Source Expense
        api_response = api_instance.create_lead_source_expense(lead_source_id, create_lead_source_expense_request)
        print("The response of LeadSourceExpensesApi->create_lead_source_expense:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceExpensesApi->create_lead_source_expense: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of the lead source this expense belongs to | 
 **create_lead_source_expense_request** | [**CreateLeadSourceExpenseRequest**](CreateLeadSourceExpenseRequest.md)| The request object to create a new lead source expense | 

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_lead_source_expense**
> delete_lead_source_expense(lead_source_expense_id, lead_source_id)

Delete a lead source expense

Deletes a lead source expense by ID

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
    api_instance = keap_core_v2_client.LeadSourceExpensesApi(api_client)
    lead_source_expense_id = 'lead_source_expense_id_example' # str | The ID of a lead source expense
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this expense belongs to

    try:
        # Delete a lead source expense
        api_instance.delete_lead_source_expense(lead_source_expense_id, lead_source_id)
    except Exception as e:
        print("Exception when calling LeadSourceExpensesApi->delete_lead_source_expense: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_expense_id** | **str**| The ID of a lead source expense | 
 **lead_source_id** | **str**| The ID of the lead source this expense belongs to | 

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

# **get_lead_source_expense**
> LeadSourceExpense get_lead_source_expense(lead_source_expense_id, lead_source_id)

Retrieve a Lead Source Expense

Retrieves a single Lead Source Expense for a given ID

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.lead_source_expense import LeadSourceExpense
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
    api_instance = keap_core_v2_client.LeadSourceExpensesApi(api_client)
    lead_source_expense_id = 'lead_source_expense_id_example' # str | The ID of a lead source expense
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this expense belongs to

    try:
        # Retrieve a Lead Source Expense
        api_response = api_instance.get_lead_source_expense(lead_source_expense_id, lead_source_id)
        print("The response of LeadSourceExpensesApi->get_lead_source_expense:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceExpensesApi->get_lead_source_expense: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_expense_id** | **str**| The ID of a lead source expense | 
 **lead_source_id** | **str**| The ID of the lead source this expense belongs to | 

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)

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

# **list_lead_source_expenses**
> ListLeadSourceExpensesResponse list_lead_source_expenses(lead_source_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Lead Source Expenses

Retrieves a list of lead source expenses

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_lead_source_expenses_response import ListLeadSourceExpensesResponse
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
    api_instance = keap_core_v2_client.LeadSourceExpensesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this expense belongs to
    filter = 'filter_example' # str | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Lead Source Expenses
        api_response = api_instance.list_lead_source_expenses(lead_source_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of LeadSourceExpensesApi->list_lead_source_expenses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceExpensesApi->list_lead_source_expenses: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of the lead source this expense belongs to | 
 **filter** | **str**| Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListLeadSourceExpensesResponse**](ListLeadSourceExpensesResponse.md)

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_lead_source_expense**
> LeadSourceExpense update_lead_source_expense(lead_source_expense_id, lead_source_id, update_lead_source_expense_request, update_mask=update_mask)

Update a Lead Source Expense

Updates a new Lead Source Expense

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.lead_source_expense import LeadSourceExpense
from keap_core_v2_client.models.update_lead_source_expense_request import UpdateLeadSourceExpenseRequest
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
    api_instance = keap_core_v2_client.LeadSourceExpensesApi(api_client)
    lead_source_expense_id = 'lead_source_expense_id_example' # str | The ID of a lead source expense
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this expense belongs to
    update_lead_source_expense_request = keap_core_v2_client.UpdateLeadSourceExpenseRequest() # UpdateLeadSourceExpenseRequest | The request object to update a lead source expense
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Lead Source Expense
        api_response = api_instance.update_lead_source_expense(lead_source_expense_id, lead_source_id, update_lead_source_expense_request, update_mask=update_mask)
        print("The response of LeadSourceExpensesApi->update_lead_source_expense:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceExpensesApi->update_lead_source_expense: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_expense_id** | **str**| The ID of a lead source expense | 
 **lead_source_id** | **str**| The ID of the lead source this expense belongs to | 
 **update_lead_source_expense_request** | [**UpdateLeadSourceExpenseRequest**](UpdateLeadSourceExpenseRequest.md)| The request object to update a lead source expense | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**LeadSourceExpense**](LeadSourceExpense.md)

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

