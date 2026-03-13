# .OrdersApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyCommissionOnOrderItems**](OrdersApi.md#applyCommissionOnOrderItems) | **POST** /rest/v2/orders/{order_id}/items/{order_item_id}:applyCommission | Apply Commission to an Order Item
[**applyTax**](OrdersApi.md#applyTax) | **POST** /rest/v2/orders/{order_id}:applyTax | Apply Taxes on an Order
[**attachFileToOrder**](OrdersApi.md#attachFileToOrder) | **POST** /rest/v2/orders/{order_id}:attachFile | Attach a File to an Order Invoice
[**createOrder**](OrdersApi.md#createOrder) | **POST** /rest/v2/orders | Create an Order
[**createOrderCustomField**](OrdersApi.md#createOrderCustomField) | **POST** /rest/v2/orders/model/customFields | Create an Order Custom Field
[**createOrderItem**](OrdersApi.md#createOrderItem) | **POST** /rest/v2/orders/{order_id}/items | Create an Order Item
[**createPaymentForAnOrder**](OrdersApi.md#createPaymentForAnOrder) | **POST** /rest/v2/orders/{order_id}/payments | Create a Payment
[**deleteOrder**](OrdersApi.md#deleteOrder) | **DELETE** /rest/v2/orders/{order_id} | Delete an Order
[**deleteOrderCustomField**](OrdersApi.md#deleteOrderCustomField) | **DELETE** /rest/v2/orders/model/customFields/{custom_field_id} | Delete an Order Custom Field
[**deleteOrderItem**](OrdersApi.md#deleteOrderItem) | **DELETE** /rest/v2/orders/{order_id}/items/{order_item_id} | Delete an Order Item
[**detachFileFromOrder**](OrdersApi.md#detachFileFromOrder) | **POST** /rest/v2/orders/{order_id}:detachFile | Detach a File from an Order Invoice
[**getOrder**](OrdersApi.md#getOrder) | **GET** /rest/v2/orders/{order_id} | Retrieve an Order
[**listOrderPayments**](OrdersApi.md#listOrderPayments) | **GET** /rest/v2/orders/{order_id}/payments | Retrieve Order Payments
[**listOrders**](OrdersApi.md#listOrders) | **GET** /rest/v2/orders | List orders
[**retrieveOrderCustomFieldModel**](OrdersApi.md#retrieveOrderCustomFieldModel) | **GET** /rest/v2/orders/model | Retrieve Order Custom Field Model
[**updateOrder**](OrdersApi.md#updateOrder) | **PATCH** /rest/v2/orders/{order_id} | Update an Order
[**updateOrderCustomField**](OrdersApi.md#updateOrderCustomField) | **PATCH** /rest/v2/orders/model/customFields/{custom_field_id} | Update an Order Custom Field
[**updateOrderItem**](OrdersApi.md#updateOrderItem) | **PATCH** /rest/v2/orders/{order_id}/items/{order_item_id} | Update an Order Item


# **applyCommissionOnOrderItems**
> OrderItem applyCommissionOnOrderItems(applyCommissionRequest)

Applies commission to an order item on an existing order.

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiApplyCommissionOnOrderItemsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiApplyCommissionOnOrderItemsRequest = {
  
  orderId: "order_id_example",
  
  orderItemId: "order_item_id_example",
  
  applyCommissionRequest: {
    affiliateId: "123",
    payPercent: 10,
    commissionAmount: 50,
    payoutType: "UPFRONT",
    description: "Q1 Sales Commission",
    commissionDate: new Date('2024-05-21').toISOString().split('T')[0];,
  },
};

const data = await apiInstance.applyCommissionOnOrderItems(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applyCommissionRequest** | **ApplyCommissionRequest**|  |
 **orderId** | [**string**] |  | defaults to undefined
 **orderItemId** | [**string**] |  | defaults to undefined


### Return type

**OrderItem**

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

# **applyTax**
> OrderV2 applyTax()

Calculate taxes for a single Order for a given order id

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiApplyTaxRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiApplyTaxRequest = {
  
  orderId: "order_id_example",
};

const data = await apiInstance.applyTax(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] |  | defaults to undefined


### Return type

**OrderV2**

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

# **attachFileToOrder**
> OrderV2 attachFileToOrder(fileOperationRequest)

Attaches an uploaded File to an Order Invoice

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiAttachFileToOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiAttachFileToOrderRequest = {
  
  orderId: "order_id_example",
  
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
 **fileOperationRequest** | **FileOperationRequest**|  |
 **orderId** | [**string**] |  | defaults to undefined


### Return type

**OrderV2**

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

# **createOrder**
> OrderV2 createOrder(restCreateOrderRequest)

Creates a one time Order with Order items

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreateOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreateOrderRequest = {
  
  restCreateOrderRequest: {
    notes: "Rush delivery requested",
    terms: "Net 30",
    contactId: "123",
    orderItems: [
      {
        name: "Premium Widget",
        description: "High-quality widget",
        quantity: 2,
        notes: "Gift wrap",
        productId: "123",
        subscriptionPlanId: "456",
        subscriptionPlanDescription: "Monthly subscription plan",
        itemType: "PRODUCT",
        pricePerUnit: 29.99,
        costPerUnit: 15,
      },
    ],
    orderTitle: "Online Purchase",
    orderTime: new Date('2024-05-21T14:30:00Z'),
    orderType: "ONLINE",
    promoCodes: [SUMMER20, FREESHIP],
    leadAffiliateId: "456",
    salesAffiliateId: "789",
    shippingAddress: {
      line1: "line1_example",
      line2: "line2_example",
      locality: "locality_example",
      region: "region_example",
      company: "company_example",
      phone: "phone_example",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
      countryCode: "countryCode_example",
      firstName: "firstName_example",
      middleName: "middleName_example",
      lastName: "lastName_example",
      isInvoiceToCompany: true,
    },
  },
};

const data = await apiInstance.createOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restCreateOrderRequest** | **RestCreateOrderRequest**|  |


### Return type

**OrderV2**

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
  
  createCustomFieldRequest: {
    label: "label_example",
    options: [
      {
        label: "label_example",
      },
    ],
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createOrderCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**|  |


### Return type

**CustomFieldMetaData**

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
  
  orderId: "order_id_example",
  
  createOrderItemRequest: {
    name: "Premium Widget",
    description: "High-quality widget",
    quantity: 2,
    notes: "Gift wrap",
    productId: "123",
    subscriptionPlanId: "456",
    subscriptionPlanDescription: "Monthly subscription plan",
    itemType: "PRODUCT",
    pricePerUnit: 29.99,
    costPerUnit: 15,
  },
};

const data = await apiInstance.createOrderItem(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderItemRequest** | **CreateOrderItemRequest**|  |
 **orderId** | [**string**] |  | defaults to undefined


### Return type

**OrderItem**

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

# **createPaymentForAnOrder**
> PaymentResult createPaymentForAnOrder(restCreatePaymentRequest)

Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreatePaymentForAnOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreatePaymentForAnOrderRequest = {
  
  orderId: "order_id_example",
  
  restCreatePaymentRequest: {
    notes: "notes_example",
    paymentMethodId: "paymentMethodId_example",
    paymentMethodType: "paymentMethodType_example",
    paymentTime: new Date('2024-05-21T14:30:00Z'),
    paymentAmount: 3.14,
    applyToCommissions: true,
  },
};

const data = await apiInstance.createPaymentForAnOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restCreatePaymentRequest** | **RestCreatePaymentRequest**|  |
 **orderId** | [**string**] |  | defaults to undefined


### Return type

**PaymentResult**

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
  
  orderId: "order_id_example",
};

const data = await apiInstance.deleteOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] |  | defaults to undefined


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
  
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteOrderCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] |  | defaults to undefined


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
  
  orderId: "order_id_example",
  
  orderItemId: "order_item_id_example",
};

const data = await apiInstance.deleteOrderItem(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] |  | defaults to undefined
 **orderItemId** | [**string**] |  | defaults to undefined


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

# **detachFileFromOrder**
> OrderV2 detachFileFromOrder(fileOperationRequest)

Detaches a File from an Order Invoice

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiDetachFileFromOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiDetachFileFromOrderRequest = {
  
  orderId: "order_id_example",
  
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
 **fileOperationRequest** | **FileOperationRequest**|  |
 **orderId** | [**string**] |  | defaults to undefined


### Return type

**OrderV2**

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

# **getOrder**
> OrderV2 getOrder()

Retrieves a single Order for a given order id

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiGetOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiGetOrderRequest = {
  
  orderId: "order_id_example",
};

const data = await apiInstance.getOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] |  | defaults to undefined


### Return type

**OrderV2**

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
 **orderId** | [**string**] |  | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;invoice_id&#x60; - (String) &#x60;payment_id&#x60; - (String) &#x60;amount&#x60; - (String) &#x60;pay_status&#x60; - (Boolean) &#x60;skip_commission&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;payment_id&#x60; - &#x60;amount&#x60; - &#x60;pay_time&#x60; - &#x60;pay_status&#x60; - &#x60;skip_commission&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOrderPaymentsResponse**

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
    // Filter to apply, allowed fields are: - (String) `product_id` - (String) `contact_id` - (Boolean) `paid` - (String) `created_since_time` - (String) `created_until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567` (optional)
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
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOrders**

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

# **updateOrder**
> OrderV2 updateOrder(updateOrderRequest)

Updates an Order

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiUpdateOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiUpdateOrderRequest = {
  
  orderId: "order_id_example",
  
  updateOrderRequest: {
    notes: "Rush delivery",
    terms: "Net 30",
    contactId: "123",
    orderTitle: "Online Purchase",
    orderTime: new Date('2024-05-21T14:30:00Z'),
    orderType: "ONLINE",
    promoCodes: [SUMMER20],
    leadAffiliateId: "456",
    salesAffiliateId: "789",
    shippingAddress: {
      line1: "line1_example",
      line2: "line2_example",
      locality: "locality_example",
      region: "region_example",
      company: "company_example",
      phone: "phone_example",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
      countryCode: "countryCode_example",
      firstName: "firstName_example",
      middleName: "middleName_example",
      lastName: "lastName_example",
      isInvoiceToCompany: true,
    },
    paymentPlan: {
      autoCharge: true,
      maxChargeAttempts: 3,
      daysBetweenRetries: 7,
      paymentMethodId: "123",
      initialPaymentAmount: 50,
      initialPaymentDate: new Date('2024-05-21').toISOString().split('T')[0];,
      planStartDate: new Date('2024-05-21').toISOString().split('T')[0];,
      numberOfPayments: 12,
      daysBetweenPayments: 30,
    },
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: `contact_id,order_items,order_title,order_time,order_type,promo_codes,
lead_affiliate_id,sales_affiliate_id,shipping_address,notes,terms,payment_plan`,
};

const data = await apiInstance.updateOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOrderRequest** | **UpdateOrderRequest**|  |
 **orderId** | [**string**] |  | defaults to undefined
 **updateMask** | [**&#39;contact_id,order_items,order_title,order_time,order_type,promo_codes, lead_affiliate_id,sales_affiliate_id,shipping_address,notes,terms,payment_plan&#39;**]**Array<&#39;contact_id,order_items,order_title,order_time,order_type,promo_codes, lead_affiliate_id,sales_affiliate_id,shipping_address,notes,terms,payment_plan&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**OrderV2**

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
  
  customFieldId: "custom_field_id_example",
  
  updateCustomFieldMetaDataRequest: {
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
      },
    ],
    groupId: "groupId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: "group_id,label,options",
};

const data = await apiInstance.updateOrderCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**|  |
 **customFieldId** | [**string**] |  | defaults to undefined
 **updateMask** | [**&#39;group_id,label,options&#39;**]**Array<&#39;group_id,label,options&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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

# **updateOrderItem**
> OrderItem updateOrderItem(updateOrderItemRequest)

Updates an Order Item

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiUpdateOrderItemRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiUpdateOrderItemRequest = {
  
  orderId: "order_id_example",
  
  orderItemId: "order_item_id_example",
  
  updateOrderItemRequest: {
    name: "Premium Widget",
    description: "High-quality widget",
    quantity: 2,
    notes: "Gift wrap requested",
    productId: "123",
    subscriptionPlanId: "456",
    subscriptionPlanDescription: "Monthly billing",
    pricePerUnit: 29.99,
    costPerUnit: 15,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: `name,description,notes,quantity,price_per_unit,cost_per_unit,
product_id,subscription_plan_id,subscription_plan_description`,
};

const data = await apiInstance.updateOrderItem(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOrderItemRequest** | **UpdateOrderItemRequest**|  |
 **orderId** | [**string**] |  | defaults to undefined
 **orderItemId** | [**string**] |  | defaults to undefined
 **updateMask** | [**&#39;name,description,notes,quantity,price_per_unit,cost_per_unit, product_id,subscription_plan_id,subscription_plan_description&#39;**]**Array<&#39;name,description,notes,quantity,price_per_unit,cost_per_unit, product_id,subscription_plan_id,subscription_plan_description&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**OrderItem**

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


