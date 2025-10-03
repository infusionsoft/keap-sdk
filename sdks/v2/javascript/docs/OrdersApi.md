# KeapCoreServiceV2Sdk.OrdersApi

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



## applyCommissionOnOrderItems

> OrderItem applyCommissionOnOrderItems(orderId, orderItemId, restApplyCommissionRequest)

Apply Commission to an Order Item

Applies commission to an order item on an existing order.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let orderItemId = "orderItemId_example"; // String | order_item_id
let restApplyCommissionRequest = new KeapCoreServiceV2Sdk.RestApplyCommissionRequest(); // RestApplyCommissionRequest | request
apiInstance.applyCommissionOnOrderItems(orderId, orderItemId, restApplyCommissionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **orderItemId** | **String**| order_item_id | 
 **restApplyCommissionRequest** | [**RestApplyCommissionRequest**](RestApplyCommissionRequest.md)| request | 

### Return type

[**OrderItem**](OrderItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## applyTax

> Order applyTax(orderId)

Apply Taxes on an Order

Calculate taxes for a single Order for a given order id

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
apiInstance.applyTax(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attachFileToOrder

> Order attachFileToOrder(orderId, fileOperationRequest)

Attach a File to an Order Invoice

Attaches an uploaded File to an Order Invoice

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let fileOperationRequest = new KeapCoreServiceV2Sdk.FileOperationRequest(); // FileOperationRequest | File name
apiInstance.attachFileToOrder(orderId, fileOperationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **fileOperationRequest** | [**FileOperationRequest**](FileOperationRequest.md)| File name | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrder

> Order createOrder(restCreateOrderRequest)

Create an Order

Creates a one time Order with Order items

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let restCreateOrderRequest = new KeapCoreServiceV2Sdk.RestCreateOrderRequest(); // RestCreateOrderRequest | request
apiInstance.createOrder(restCreateOrderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restCreateOrderRequest** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md)| request | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrderCustomField

> CustomFieldMetaData createOrderCustomField(createCustomFieldRequest)

Create an Order Custom Field

Creates a custom field of the specified type and options to the Order object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let createCustomFieldRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createOrderCustomField(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrderItem

> OrderItem createOrderItem(orderId, createOrderItemRequest)

Create an Order Item

Creates an order item on an existing order

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let createOrderItemRequest = new KeapCoreServiceV2Sdk.CreateOrderItemRequest(); // CreateOrderItemRequest | request
apiInstance.createOrderItem(orderId, createOrderItemRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **createOrderItemRequest** | [**CreateOrderItemRequest**](CreateOrderItemRequest.md)| request | 

### Return type

[**OrderItem**](OrderItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPaymentForAnOrder

> PaymentResult createPaymentForAnOrder(orderId, createPaymentRequest)

Create a Payment

Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let createPaymentRequest = new KeapCoreServiceV2Sdk.CreatePaymentRequest(); // CreatePaymentRequest | request
apiInstance.createPaymentForAnOrder(orderId, createPaymentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md)| request | 

### Return type

[**PaymentResult**](PaymentResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrder

> deleteOrder(orderId)

Delete an Order

Deletes an Order&lt;br/&gt; Note: The Order must not have any transactions recorded to be available for deletion. 

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
apiInstance.deleteOrder(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOrderCustomField

> deleteOrderCustomField(customFieldId)

Delete an Order Custom Field

Deletes a Custom Field from the Order object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
apiInstance.deleteOrderCustomField(customFieldId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOrderItem

> deleteOrderItem(orderId, orderItemId)

Delete an Order Item

Deletes an order item on an existing order

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let orderItemId = "orderItemId_example"; // String | order_item_id
apiInstance.deleteOrderItem(orderId, orderItemId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **orderItemId** | **String**| order_item_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## detachFileFromOrder

> Order detachFileFromOrder(orderId, fileOperationRequest)

Detach a File from an Order Invoice

Detaches a File from an Order Invoice

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let fileOperationRequest = new KeapCoreServiceV2Sdk.FileOperationRequest(); // FileOperationRequest | request
apiInstance.detachFileFromOrder(orderId, fileOperationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **fileOperationRequest** | [**FileOperationRequest**](FileOperationRequest.md)| request | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrder

> Order getOrder(orderId)

Retrieve an Order

Retrieves a single Order for a given order id

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
apiInstance.getOrder(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrderPayments

> ListOrderPaymentsResponse listOrderPayments(orderId, opts)

Retrieve Order Payments

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `invoice_id` - (String) `payment_id` - (String) `amount` - (String) `pay_status` - (Boolean) `skip_commission`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=payment_id%3D%3D123` - `filter=pay_status%3D%3DAPPROVED` - `filter=invoice_id%3D%3D456%3Bskip_commission=true` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `invoice_id` - `payment_id` - `amount` - `pay_time` - `pay_status` - `skip_commission` - `last_updated_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOrderPayments(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;invoice_id&#x60; - (String) &#x60;payment_id&#x60; - (String) &#x60;amount&#x60; - (String) &#x60;pay_status&#x60; - (Boolean) &#x60;skip_commission&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;payment_id&#x60; - &#x60;amount&#x60; - &#x60;pay_time&#x60; - &#x60;pay_status&#x60; - &#x60;skip_commission&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOrderPaymentsResponse**](ListOrderPaymentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrders

> ListOrders listOrders(opts)

List orders

Retrieves a list of orders

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `product_id` - (String) `contact_id` - (Boolean) `paid` - (String) `created_since_time` - (String) `created_until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `order_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOrders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOrders**](ListOrders.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveOrderCustomFieldModel

> ObjectModel retrieveOrderCustomFieldModel()

Retrieve Order Custom Field Model

Gets the custom fields for the Order object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
apiInstance.retrieveOrderCustomFieldModel().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrder

> Order updateOrder(orderId, opts)

Update an Order

Updates an Order

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'updateOrderRequest': new KeapCoreServiceV2Sdk.UpdateOrderRequest() // UpdateOrderRequest | order
};
apiInstance.updateOrder(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **updateOrderRequest** | [**UpdateOrderRequest**](UpdateOrderRequest.md)| order | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOrderCustomField

> CustomFieldMetaData updateOrderCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update an Order Custom Field

Updates a custom field of the specified type and options to the Order object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOrderCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOrderItem

> OrderItem updateOrderItem(orderId, orderItemId, opts)

Update an Order Item

Updates an Order Item

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let orderItemId = "orderItemId_example"; // String | order_item_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'updateOrderItemRequest': new KeapCoreServiceV2Sdk.UpdateOrderItemRequest() // UpdateOrderItemRequest | order
};
apiInstance.updateOrderItem(orderId, orderItemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **orderItemId** | **String**| order_item_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **updateOrderItemRequest** | [**UpdateOrderItemRequest**](UpdateOrderItemRequest.md)| order | [optional] 

### Return type

[**OrderItem**](OrderItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

