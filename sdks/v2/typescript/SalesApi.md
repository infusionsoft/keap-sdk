# .SalesApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPayments**](SalesApi.md#listPayments) | **GET** /rest/v2/sales/payments | List Payments
[**listTransactions**](SalesApi.md#listTransactions) | **GET** /rest/v2/sales/transactions | List Transactions
[**setMerchantGatewayAsDefault**](SalesApi.md#setMerchantGatewayAsDefault) | **POST** /rest/v2/sales/merchants/{id}:setDefault | Set default Merchant Account


# **listPayments**
> ListPayments listPayments()

Retrieves a list of payments

### Example


```typescript
import { createConfiguration, SalesApi } from '';
import type { SalesApiListPaymentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SalesApi(configuration);

const request: SalesApiListPaymentsRequest = {
    // Filter to apply, allowed fields are: - (String) `id` - (String) `amount` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `order_id` - (String) `contact_id` - (String) `since_time` - (String) `until_time` - (String) `merchant_account_id` - (String) `merchant_account_type`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=order_id%3D%3D123%3Bcontact_id%3D%3D567` (optional)
  filter: "filter_example",
    // Page token (optional)
  pageToken: "page_token_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `amount` - `payment_time` - `contact_id`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
};

const data = await apiInstance.listPayments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;amount&#x60; - &#x60;payment_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined


### Return type

**ListPayments**

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

# **listTransactions**
> ListTransactions listTransactions()

Retrieves a list of sales transactions

### Example


```typescript
import { createConfiguration, SalesApi } from '';
import type { SalesApiListTransactionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SalesApi(configuration);

const request: SalesApiListTransactionsRequest = {
    // Filter to apply, allowed fields are: - (String) `amount` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `order_id` - (String) `contact_id` - (String) `since_time` - (String) `until_time` - (String) `merchant_account_id` - (String) `merchant_account_type` - (String) `status` - (String) `transaction_method` - (String) `is_successful`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=order_id%3D%3D123` - `filter=order_id%3D%3D123%3Bcontact_id%3D%3D567` (optional)
  filter: "filter_example",
    // Page token (optional)
  pageToken: "page_token_example",
    // Attribute and direction to order items. One of the following fields: - `amount` - `transaction_time` - `contact_id`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
};

const data = await apiInstance.listTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60; - (String) &#x60;status&#x60; - (String) &#x60;transaction_method&#x60; - (String) &#x60;is_successful&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;order_id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;amount&#x60; - &#x60;transaction_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined


### Return type

**ListTransactions**

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

# **setMerchantGatewayAsDefault**
> void setMerchantGatewayAsDefault()

Sets the specified Merchant Account as the default Merchant Account.

### Example


```typescript
import { createConfiguration, SalesApi } from '';
import type { SalesApiSetMerchantGatewayAsDefaultRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SalesApi(configuration);

const request: SalesApiSetMerchantGatewayAsDefaultRequest = {
  
  id: "id_example",
};

const data = await apiInstance.setMerchantGatewayAsDefault(request);
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
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


