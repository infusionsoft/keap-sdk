# .OrdersApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderCustomField**](OrdersApi.md#createOrderCustomField) | **POST** /v2/orders/model/customFields | Create an Order Custom Field
[**deleteOrder**](OrdersApi.md#deleteOrder) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**deleteOrderCustomField**](OrdersApi.md#deleteOrderCustomField) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order Custom Field
[**deleteOrderItem**](OrdersApi.md#deleteOrderItem) | **DELETE** /v2/orders/{order_id}/items/{order_item_id} | Delete an Order Item
[**retrieveOrderCustomFieldModel**](OrdersApi.md#retrieveOrderCustomFieldModel) | **GET** /v2/orders/model | Retrieve Order Custom Field Model
[**updateOrderCustomField**](OrdersApi.md#updateOrderCustomField) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order Custom Field


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


