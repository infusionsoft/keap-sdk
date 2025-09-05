# KeapCoreServiceV2Sdk.OrdersApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderCustomField**](OrdersApi.md#createOrderCustomField) | **POST** /v2/orders/model/customFields | Create an Order Custom Field
[**deleteOrder**](OrdersApi.md#deleteOrder) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**deleteOrderCustomField**](OrdersApi.md#deleteOrderCustomField) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order Custom Field
[**deleteOrderItem**](OrdersApi.md#deleteOrderItem) | **DELETE** /v2/orders/{order_id}/items/{order_item_id} | Delete an Order Item
[**retrieveOrderCustomFieldModel**](OrdersApi.md#retrieveOrderCustomFieldModel) | **GET** /v2/orders/model | Retrieve Order Custom Field Model
[**updateOrderCustomField**](OrdersApi.md#updateOrderCustomField) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order Custom Field



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

