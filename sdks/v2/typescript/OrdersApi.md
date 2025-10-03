# .OrdersApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyCommissionOnOrderItems**](OrdersApi.md#applyCommissionOnOrderItems) | **POST** /v2/orders/{order_id}/items/{order_item_id}:applyCommission | Apply Commission to an Order Item
[**applyTax**](OrdersApi.md#applyTax) | **POST** /v2/orders/{order_id}:applyTax | Apply Taxes on an Order
[**attachFileToOrder**](OrdersApi.md#attachFileToOrder) | **POST** /v2/orders/{order_id}:attachFile | Attach a File to an Order Invoice
[**createOrder**](OrdersApi.md#createOrder) | **POST** /v2/orders | Create an Order
[**createOrderCustomField**](OrdersApi.md#createOrderCustomField) | **POST** /v2/orders/model/customFields | Create an Order Custom Field
[**createOrderItem**](OrdersApi.md#createOrderItem) | **POST** /v2/orders/{order_id}/items | Create an Order Item
[**createPaymentForAnOrder**](OrdersApi.md#createPaymentForAnOrder) | **POST** /v2/orders/{order_id}/payments | Create a Payment
[**deleteOrder**](OrdersApi.md#deleteOrder) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**deleteOrderCustomField**](OrdersApi.md#deleteOrderCustomField) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order Custom Field
[**deleteOrderItem**](OrdersApi.md#deleteOrderItem) | **DELETE** /v2/orders/{order_id}/items/{order_item_id} | Delete an Order Item
[**detachFileFromOrder**](OrdersApi.md#detachFileFromOrder) | **POST** /v2/orders/{order_id}:detachFile | Detach a File from an Order Invoice
[**getOrder**](OrdersApi.md#getOrder) | **GET** /v2/orders/{order_id} | Retrieve an Order
[**listOrderPayments**](OrdersApi.md#listOrderPayments) | **GET** /v2/orders/{order_id}/payments | Retrieve Order Payments
[**listOrders**](OrdersApi.md#listOrders) | **GET** /v2/orders | List orders
[**retrieveOrderCustomFieldModel**](OrdersApi.md#retrieveOrderCustomFieldModel) | **GET** /v2/orders/model | Retrieve Order Custom Field Model
[**updateOrder**](OrdersApi.md#updateOrder) | **PATCH** /v2/orders/{order_id} | Update an Order
[**updateOrderCustomField**](OrdersApi.md#updateOrderCustomField) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order Custom Field
[**updateOrderItem**](OrdersApi.md#updateOrderItem) | **PATCH** /v2/orders/{order_id}/items/{order_item_id} | Update an Order Item


# **applyCommissionOnOrderItems**
> OrderItem applyCommissionOnOrderItems(restApplyCommissionRequest)

Applies commission to an order item on an existing order.

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiApplyCommissionOnOrderItemsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiApplyCommissionOnOrderItemsRequest = {
    // order_id
  orderId: "order_id_example",
    // order_item_id
  orderItemId: "order_item_id_example",
    // request
  restApplyCommissionRequest: {
    affiliateId: "affiliateId_example",
    commissionAmount: 3.14,
    commissionDate: "commissionDate_example",
    description: "description_example",
    payPercent: 3.14,
    payoutType: "UPFRONT",
  },
};

const data = await apiInstance.applyCommissionOnOrderItems(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restApplyCommissionRequest** | **RestApplyCommissionRequest**| request |
 **orderId** | [**string**] | order_id | defaults to undefined
 **orderItemId** | [**string**] | order_item_id | defaults to undefined


### Return type

**OrderItem**

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

# **applyTax**
> Order applyTax()

Calculate taxes for a single Order for a given order id

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiApplyTaxRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiApplyTaxRequest = {
    // order_id
  orderId: "order_id_example",
};

const data = await apiInstance.applyTax(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**Order**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **attachFileToOrder**
> Order attachFileToOrder(fileOperationRequest)

Attaches an uploaded File to an Order Invoice

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiAttachFileToOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiAttachFileToOrderRequest = {
    // order_id
  orderId: "order_id_example",
    // File name
  fileOperationRequest: {
    fileId: "fileId_example",
  },
};

const data = await apiInstance.attachFileToOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileOperationRequest** | **FileOperationRequest**| File name |
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**Order**

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

# **createOrder**
> Order createOrder(restCreateOrderRequest)

Creates a one time Order with Order items

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreateOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreateOrderRequest = {
    // request
  restCreateOrderRequest: {
    contactId: "contactId_example",
    leadAffiliateId: "leadAffiliateId_example",
    notes: "notes_example",
    orderItems: [
      {
        costPerUnit: 3.14,
        description: "description_example",
        itemType: "UNKNOWN",
        name: "name_example",
        notes: "notes_example",
        pricePerUnit: 3.14,
        productId: "productId_example",
        quantity: 1,
      },
    ],
    orderTime: "orderTime_example",
    orderTitle: "orderTitle_example",
    orderType: "OFFLINE",
    promoCodes: [
      "promoCodes_example",
    ],
    salesAffiliateId: "salesAffiliateId_example",
    shippingAddress: {
      company: "company_example",
      countryCode: "countryCode_example",
      firstName: "firstName_example",
      isInvoiceToCompany: true,
      lastName: "lastName_example",
      line1: "line1_example",
      line2: "line2_example",
      locality: "locality_example",
      middleName: "middleName_example",
      phone: "phone_example",
      region: "region_example",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
    },
    terms: "terms_example",
  },
};

const data = await apiInstance.createOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restCreateOrderRequest** | **RestCreateOrderRequest**| request |


### Return type

**Order**

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

# **createOrderCustomField**
> CustomFieldMetaData createOrderCustomField(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Order object

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreateOrderCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreateOrderCustomFieldRequest = {
    // customField
  createCustomFieldRequest: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createOrderCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

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

# **createOrderItem**
> OrderItem createOrderItem(createOrderItemRequest)

Creates an order item on an existing order

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreateOrderItemRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreateOrderItemRequest = {
    // order_id
  orderId: "order_id_example",
    // request
  createOrderItemRequest: {
    costPerUnit: 3.14,
    description: "description_example",
    itemType: "UNKNOWN",
    name: "name_example",
    notes: "notes_example",
    pricePerUnit: 3.14,
    productId: "productId_example",
    quantity: 1,
  },
};

const data = await apiInstance.createOrderItem(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderItemRequest** | **CreateOrderItemRequest**| request |
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**OrderItem**

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

# **createPaymentForAnOrder**
> PaymentResult createPaymentForAnOrder(createPaymentRequest)

Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreatePaymentForAnOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreatePaymentForAnOrderRequest = {
    // order_id
  orderId: "order_id_example",
    // request
  createPaymentRequest: {
    applyToCommissions: true,
    notes: "notes_example",
    paymentAmount: 3.14,
    paymentMethodId: "paymentMethodId_example",
    paymentMethodType: "paymentMethodType_example",
    paymentTime: "paymentTime_example",
  },
};

const data = await apiInstance.createPaymentForAnOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentRequest** | **CreatePaymentRequest**| request |
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**PaymentResult**

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

# **deleteOrder**
> void deleteOrder()

Deletes an Order<br/> Note: The Order must not have any transactions recorded to be available for deletion. 

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiDeleteOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiDeleteOrderRequest = {
    // order_id
  orderId: "order_id_example",
};

const data = await apiInstance.deleteOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | order_id | defaults to undefined


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

# **deleteOrderCustomField**
> void deleteOrderCustomField()

Deletes a Custom Field from the Order object

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiDeleteOrderCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiDeleteOrderCustomFieldRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteOrderCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined


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

# **deleteOrderItem**
> void deleteOrderItem()

Deletes an order item on an existing order

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiDeleteOrderItemRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiDeleteOrderItemRequest = {
    // order_id
  orderId: "order_id_example",
    // order_item_id
  orderItemId: "order_item_id_example",
};

const data = await apiInstance.deleteOrderItem(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | order_id | defaults to undefined
 **orderItemId** | [**string**] | order_item_id | defaults to undefined


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

# **detachFileFromOrder**
> Order detachFileFromOrder(fileOperationRequest)

Detaches a File from an Order Invoice

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiDetachFileFromOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiDetachFileFromOrderRequest = {
    // order_id
  orderId: "order_id_example",
    // request
  fileOperationRequest: {
    fileId: "fileId_example",
  },
};

const data = await apiInstance.detachFileFromOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileOperationRequest** | **FileOperationRequest**| request |
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**Order**

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

# **getOrder**
> Order getOrder()

Retrieves a single Order for a given order id

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiGetOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiGetOrderRequest = {
    // order_id
  orderId: "order_id_example",
};

const data = await apiInstance.getOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**Order**

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

# **listOrderPayments**
> ListOrderPaymentsResponse listOrderPayments()

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiListOrderPaymentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiListOrderPaymentsRequest = {
    // order_id
  orderId: "order_id_example",
    // Filter to apply, allowed fields are: - (String) `invoice_id` - (String) `payment_id` - (String) `amount` - (String) `pay_status` - (Boolean) `skip_commission`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=payment_id%3D%3D123` - `filter=pay_status%3D%3DAPPROVED` - `filter=invoice_id%3D%3D456%3Bskip_commission=true`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `invoice_id` - `payment_id` - `amount` - `pay_time` - `pay_status` - `skip_commission` - `last_updated_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOrderPayments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | order_id | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;invoice_id&#x60; - (String) &#x60;payment_id&#x60; - (String) &#x60;amount&#x60; - (String) &#x60;pay_status&#x60; - (Boolean) &#x60;skip_commission&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;payment_id&#x60; - &#x60;amount&#x60; - &#x60;pay_time&#x60; - &#x60;pay_status&#x60; - &#x60;skip_commission&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOrderPaymentsResponse**

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

# **listOrders**
> ListOrders listOrders()

Retrieves a list of orders

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiListOrdersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiListOrdersRequest = {
    // Filter to apply, allowed fields are: - (String) `product_id` - (String) `contact_id` - (Boolean) `paid` - (String) `created_since_time` - (String) `created_until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `order_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOrders(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOrders**

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

# **retrieveOrderCustomFieldModel**
> ObjectModel retrieveOrderCustomFieldModel()

Gets the custom fields for the Order object

### Example


```typescript
import { createConfiguration, OrdersApi } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request = {};

const data = await apiInstance.retrieveOrderCustomFieldModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

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

# **updateOrder**
> Order updateOrder()

Updates an Order

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiUpdateOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiUpdateOrderRequest = {
    // order_id
  orderId: "order_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "contact_id",
  ],
    // order (optional)
  updateOrderRequest: {
    contactId: "contactId_example",
    leadAffiliateId: "leadAffiliateId_example",
    notes: "notes_example",
    orderTime: "orderTime_example",
    orderTitle: "orderTitle_example",
    orderType: "OFFLINE",
    paymentPlan: {
      autoCharge: true,
      daysBetweenPayments: 1,
      daysBetweenRetries: 1,
      initialPaymentAmount: 3.14,
      initialPaymentDate: "initialPaymentDate_example",
      maxChargeAttempts: 1,
      numberOfPayments: 1,
      paymentMethodId: "paymentMethodId_example",
      planStartDate: "planStartDate_example",
    },
    promoCodes: [
      "promoCodes_example",
    ],
    salesAffiliateId: "salesAffiliateId_example",
    shippingAddress: {
      company: "company_example",
      countryCode: "countryCode_example",
      firstName: "firstName_example",
      isInvoiceToCompany: true,
      lastName: "lastName_example",
      line1: "line1_example",
      line2: "line2_example",
      locality: "locality_example",
      middleName: "middleName_example",
      phone: "phone_example",
      region: "region_example",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
    },
    terms: "terms_example",
  },
};

const data = await apiInstance.updateOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOrderRequest** | **UpdateOrderRequest**| order |
 **orderId** | [**string**] | order_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**Order**

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
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOrderCustomField**
> CustomFieldMetaData updateOrderCustomField(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Order object

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiUpdateOrderCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiUpdateOrderCustomFieldRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  updateCustomFieldMetaDataRequest: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateOrderCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOrderItem**
> OrderItem updateOrderItem()

Updates an Order Item

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiUpdateOrderItemRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiUpdateOrderItemRequest = {
    // order_id
  orderId: "order_id_example",
    // order_item_id
  orderItemId: "order_item_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "contact_id",
  ],
    // order (optional)
  updateOrderItemRequest: {
    costPerUnit: 3.14,
    description: "description_example",
    itemType: "UNKNOWN",
    name: "name_example",
    notes: "notes_example",
    pricePerUnit: 3.14,
    quantity: 1,
  },
};

const data = await apiInstance.updateOrderItem(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOrderItemRequest** | **UpdateOrderItemRequest**| order |
 **orderId** | [**string**] | order_id | defaults to undefined
 **orderItemId** | [**string**] | order_item_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**OrderItem**

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
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


