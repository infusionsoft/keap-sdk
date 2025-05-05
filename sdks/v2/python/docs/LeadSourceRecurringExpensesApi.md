# keap_core_v2_client.LeadSourceRecurringExpensesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_lead_source_recurring_expense_using_post**](LeadSourceRecurringExpensesApi.md#create_lead_source_recurring_expense_using_post) | **POST** /v2/leadSources/{lead_source_id}/recurringExpenses | Create a Lead Source Recurring Expense
[**delete_lead_source_recurring_expense_using_delete**](LeadSourceRecurringExpensesApi.md#delete_lead_source_recurring_expense_using_delete) | **DELETE** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Delete a Lead Source Recurring Expense
[**get_lead_source_recurring_expense_using_get**](LeadSourceRecurringExpensesApi.md#get_lead_source_recurring_expense_using_get) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Retrieve a Lead Source Recurring Expense
[**list_expenses_incurred_from_lead_source_recurring_expense_using_get**](LeadSourceRecurringExpensesApi.md#list_expenses_incurred_from_lead_source_recurring_expense_using_get) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id}/expenses | Retrieves a list of expenses incurred from a recurring expense
[**list_lead_source_recurring_expenses_using_get**](LeadSourceRecurringExpensesApi.md#list_lead_source_recurring_expenses_using_get) | **GET** /v2/leadSources/{lead_source_id}/recurringExpenses | Retrieves a list of lead source recurring expenses
[**update_lead_source_recurring_expense_using_patch**](LeadSourceRecurringExpensesApi.md#update_lead_source_recurring_expense_using_patch) | **PATCH** /v2/leadSources/{lead_source_id}/recurringExpenses/{lead_source_recurring_expense_id} | Update a Lead Source Recurring Expense


# **create_lead_source_recurring_expense_using_post**
> LeadSourceRecurringExpense create_lead_source_recurring_expense_using_post(lead_source_id, create_lead_source_recurring_expense_request)

Create a Lead Source Recurring Expense

Creates a new Lead Source Recurring Expense

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.create_lead_source_recurring_expense_request import CreateLeadSourceRecurringExpenseRequest
from keap_core_v2_client.models.lead_source_recurring_expense import LeadSourceRecurringExpense
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
    api_instance = keap_core_v2_client.LeadSourceRecurringExpensesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this recurring expense belongs to
    create_lead_source_recurring_expense_request = keap_core_v2_client.CreateLeadSourceRecurringExpenseRequest() # CreateLeadSourceRecurringExpenseRequest | The request object to create a new lead source recurring expense

    try:
        # Create a Lead Source Recurring Expense
        api_response = api_instance.create_lead_source_recurring_expense_using_post(lead_source_id, create_lead_source_recurring_expense_request)
        print("The response of LeadSourceRecurringExpensesApi->create_lead_source_recurring_expense_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceRecurringExpensesApi->create_lead_source_recurring_expense_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of the lead source this recurring expense belongs to | 
 **create_lead_source_recurring_expense_request** | [**CreateLeadSourceRecurringExpenseRequest**](CreateLeadSourceRecurringExpenseRequest.md)| The request object to create a new lead source recurring expense | 

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_lead_source_recurring_expense_using_delete**
> delete_lead_source_recurring_expense_using_delete(lead_source_id, lead_source_recurring_expense_id)

Delete a Lead Source Recurring Expense

Deletes a new Lead Source Recurring Expense that belongs to a Lead Source

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
    api_instance = keap_core_v2_client.LeadSourceRecurringExpensesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this recurring expense belongs to
    lead_source_recurring_expense_id = 'lead_source_recurring_expense_id_example' # str | The ID of a lead source recurring expense

    try:
        # Delete a Lead Source Recurring Expense
        api_instance.delete_lead_source_recurring_expense_using_delete(lead_source_id, lead_source_recurring_expense_id)
    except Exception as e:
        print("Exception when calling LeadSourceRecurringExpensesApi->delete_lead_source_recurring_expense_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of the lead source this recurring expense belongs to | 
 **lead_source_recurring_expense_id** | **str**| The ID of a lead source recurring expense | 

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

# **get_lead_source_recurring_expense_using_get**
> LeadSourceRecurringExpense get_lead_source_recurring_expense_using_get(lead_source_id, lead_source_recurring_expense_id)

Retrieve a Lead Source Recurring Expense

Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.lead_source_recurring_expense import LeadSourceRecurringExpense
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
    api_instance = keap_core_v2_client.LeadSourceRecurringExpensesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this recurring expense belongs to
    lead_source_recurring_expense_id = 'lead_source_recurring_expense_id_example' # str | The ID of a lead source recurring expense

    try:
        # Retrieve a Lead Source Recurring Expense
        api_response = api_instance.get_lead_source_recurring_expense_using_get(lead_source_id, lead_source_recurring_expense_id)
        print("The response of LeadSourceRecurringExpensesApi->get_lead_source_recurring_expense_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceRecurringExpensesApi->get_lead_source_recurring_expense_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of the lead source this recurring expense belongs to | 
 **lead_source_recurring_expense_id** | **str**| The ID of a lead source recurring expense | 

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)

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

# **list_expenses_incurred_from_lead_source_recurring_expense_using_get**
> ListLeadSourceExpensesResponse list_expenses_incurred_from_lead_source_recurring_expense_using_get(lead_source_id, lead_source_recurring_expense_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieves a list of expenses incurred from a recurring expense

Retrieves a list of expenses incurred from a recurring expense

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
    api_instance = keap_core_v2_client.LeadSourceRecurringExpensesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this recurring expense belongs to
    lead_source_recurring_expense_id = 'lead_source_recurring_expense_id_example' # str | The ID of a lead source recurring expense
    filter = 'filter_example' # str | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `incurred_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=incurred_time%3D%3D2024-12-22T01:00:00.000Z` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields:  - `title` - `amount` - `incurred_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # Retrieves a list of expenses incurred from a recurring expense
        api_response = api_instance.list_expenses_incurred_from_lead_source_recurring_expense_using_get(lead_source_id, lead_source_recurring_expense_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of LeadSourceRecurringExpensesApi->list_expenses_incurred_from_lead_source_recurring_expense_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceRecurringExpensesApi->list_expenses_incurred_from_lead_source_recurring_expense_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of the lead source this recurring expense belongs to | 
 **lead_source_recurring_expense_id** | **str**| The ID of a lead source recurring expense | 
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

# **list_lead_source_recurring_expenses_using_get**
> ListLeadSourceRecurringExpensesResponse list_lead_source_recurring_expenses_using_get(lead_source_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieves a list of lead source recurring expenses

Retrieves a list of recurring expenses with lead_source_id and optional 'filter' query param

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.list_lead_source_recurring_expenses_response import ListLeadSourceRecurringExpensesResponse
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
    api_instance = keap_core_v2_client.LeadSourceRecurringExpensesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this recurring expense belongs to
    filter = 'filter_example' # str | Filter to apply, allowed fields are:  - (String) `title` - (Long) `amount` - (String) `start_time` - (String) `end_time` - (String) `next_expense_time` - (String) `create_time` - (String) `update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=amount%3D%3D2500` - `filter=next_expense_time%3D%3D2024-12-22T01:00:00.000Z` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - `title` - `amount` - `start_time` - `end_time` - `next_expense_time` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # Retrieves a list of lead source recurring expenses
        api_response = api_instance.list_lead_source_recurring_expenses_using_get(lead_source_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of LeadSourceRecurringExpensesApi->list_lead_source_recurring_expenses_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceRecurringExpensesApi->list_lead_source_recurring_expenses_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of the lead source this recurring expense belongs to | 
 **filter** | **str**| Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListLeadSourceRecurringExpensesResponse**](ListLeadSourceRecurringExpensesResponse.md)

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

# **update_lead_source_recurring_expense_using_patch**
> LeadSourceRecurringExpense update_lead_source_recurring_expense_using_patch(lead_source_id, lead_source_recurring_expense_id, lead_source_recurring_expense_update_request, update_mask=update_mask)

Update a Lead Source Recurring Expense

Updates a Lead Source Recurring Expense

### Example


```python
import keap_core_v2_client
from keap_core_v2_client.models.lead_source_recurring_expense import LeadSourceRecurringExpense
from keap_core_v2_client.models.lead_source_recurring_expense_update_request import LeadSourceRecurringExpenseUpdateRequest
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
    api_instance = keap_core_v2_client.LeadSourceRecurringExpensesApi(api_client)
    lead_source_id = 'lead_source_id_example' # str | The ID of the lead source this recurring expense belongs to
    lead_source_recurring_expense_id = 'lead_source_recurring_expense_id_example' # str | The ID of a lead source recurring expense
    lead_source_recurring_expense_update_request = keap_core_v2_client.LeadSourceRecurringExpenseUpdateRequest() # LeadSourceRecurringExpenseUpdateRequest | The request object to update a lead source recurring expense
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Lead Source Recurring Expense
        api_response = api_instance.update_lead_source_recurring_expense_using_patch(lead_source_id, lead_source_recurring_expense_id, lead_source_recurring_expense_update_request, update_mask=update_mask)
        print("The response of LeadSourceRecurringExpensesApi->update_lead_source_recurring_expense_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceRecurringExpensesApi->update_lead_source_recurring_expense_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lead_source_id** | **str**| The ID of the lead source this recurring expense belongs to | 
 **lead_source_recurring_expense_id** | **str**| The ID of a lead source recurring expense | 
 **lead_source_recurring_expense_update_request** | [**LeadSourceRecurringExpenseUpdateRequest**](LeadSourceRecurringExpenseUpdateRequest.md)| The request object to update a lead source recurring expense | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**LeadSourceRecurringExpense**](LeadSourceRecurringExpense.md)

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

