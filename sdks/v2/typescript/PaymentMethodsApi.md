# .PaymentMethodsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deactivatePaymentMethod**](PaymentMethodsApi.md#deactivatePaymentMethod) | **POST** /v2/contacts/{contact_id}/paymentMethods/{payment_method_id}:deactivate | Deactivate a Payment Method
[**deletePaymentMethod**](PaymentMethodsApi.md#deletePaymentMethod) | **DELETE** /v2/contacts/{contact_id}/paymentMethods/{payment_method_id} | Delete a Payment Method
[**listPaymentMethods**](PaymentMethodsApi.md#listPaymentMethods) | **GET** /v2/contacts/{contact_id}/paymentMethods | List of Payment Methods


# **deactivatePaymentMethod**
> void deactivatePaymentMethod()

Deactivate the specified payment method

### Example


```typescript
import { createConfiguration, PaymentMethodsApi } from '';
import type { PaymentMethodsApiDeactivatePaymentMethodRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentMethodsApi(configuration);

const request: PaymentMethodsApiDeactivatePaymentMethodRequest = {
    // ID of the contact to which the payment method belongs.
  contactId: "contact_id_example",
    // ID of the payment method to be deactivated.
  paymentMethodId: "payment_method_id_example",
};

const data = await apiInstance.deactivatePaymentMethod(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | ID of the contact to which the payment method belongs. | defaults to undefined
 **paymentMethodId** | [**string**] | ID of the payment method to be deactivated. | defaults to undefined


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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePaymentMethod**
> void deletePaymentMethod()

Deletes the specified payment method

### Example


```typescript
import { createConfiguration, PaymentMethodsApi } from '';
import type { PaymentMethodsApiDeletePaymentMethodRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentMethodsApi(configuration);

const request: PaymentMethodsApiDeletePaymentMethodRequest = {
    // ID of the contact to which the payment method belongs.
  contactId: "contact_id_example",
    // ID of the payment method to be deleted.
  paymentMethodId: "payment_method_id_example",
};

const data = await apiInstance.deletePaymentMethod(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | ID of the contact to which the payment method belongs. | defaults to undefined
 **paymentMethodId** | [**string**] | ID of the payment method to be deleted. | defaults to undefined


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

# **listPaymentMethods**
> ListPaymentMethodsResponse listPaymentMethods()

Retrieves a list of Payment Methods

### Example


```typescript
import { createConfiguration, PaymentMethodsApi } from '';
import type { PaymentMethodsApiListPaymentMethodsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentMethodsApi(configuration);

const request: PaymentMethodsApiListPaymentMethodsRequest = {
    // ID of the contact to which the payment method belongs.
  contactId: "contact_id_example",
    // Filter to apply, allowed fields are: - (String) `merchant_account_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. - `filter=merchant_account_id%3D%3D123`  You can filter across all contacts by using the `-` for the `contact_id` field.  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `date_created`  One of the following directions: - `desc` - `asc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listPaymentMethods(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | ID of the contact to which the payment method belongs. | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;  You can filter across all contacts by using the &#x60;-&#x60; for the &#x60;contact_id&#x60; field.  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListPaymentMethodsResponse**

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


