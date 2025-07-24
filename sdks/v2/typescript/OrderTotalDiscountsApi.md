# .OrderTotalDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderTotalDiscount**](OrderTotalDiscountsApi.md#createOrderTotalDiscount) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount
[**deleteOrderTotalDiscount**](OrderTotalDiscountsApi.md#deleteOrderTotalDiscount) | **DELETE** /v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount
[**getOrderTotalDiscount**](OrderTotalDiscountsApi.md#getOrderTotalDiscount) | **GET** /v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount
[**listOrderTotalDiscounts**](OrderTotalDiscountsApi.md#listOrderTotalDiscounts) | **GET** /v2/discounts/orderTotals | List all Order Total Discounts
[**updateOrderTotalDiscount**](OrderTotalDiscountsApi.md#updateOrderTotalDiscount) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount


# **createOrderTotalDiscount**
> OrderTotalDiscount createOrderTotalDiscount(createOrderTotalDiscountRequest)

Creates an Order Total Discount

### Example


```typescript
import { createConfiguration, OrderTotalDiscountsApi } from '';
import type { OrderTotalDiscountsApiCreateOrderTotalDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderTotalDiscountsApi(configuration);

const request: OrderTotalDiscountsApiCreateOrderTotalDiscountRequest = {
    // request
  createOrderTotalDiscountRequest: {
    applyToCommissions: true,
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountStrategy: "GROSS",
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
};

const data = await apiInstance.createOrderTotalDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderTotalDiscountRequest** | **CreateOrderTotalDiscountRequest**| request |


### Return type

**OrderTotalDiscount**

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

# **deleteOrderTotalDiscount**
> void deleteOrderTotalDiscount()

Deletes a specified Order Total Discount

### Example


```typescript
import { createConfiguration, OrderTotalDiscountsApi } from '';
import type { OrderTotalDiscountsApiDeleteOrderTotalDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderTotalDiscountsApi(configuration);

const request: OrderTotalDiscountsApiDeleteOrderTotalDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteOrderTotalDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


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

# **getOrderTotalDiscount**
> OrderTotalDiscount getOrderTotalDiscount()

Retrieves an Order Total Discount

### Example


```typescript
import { createConfiguration, OrderTotalDiscountsApi } from '';
import type { OrderTotalDiscountsApiGetOrderTotalDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderTotalDiscountsApi(configuration);

const request: OrderTotalDiscountsApiGetOrderTotalDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getOrderTotalDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**OrderTotalDiscount**

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

# **listOrderTotalDiscounts**
> ListOrderTotalDiscountsResponse listOrderTotalDiscounts()

Retrieves a list of Order Total Discounts

### Example


```typescript
import { createConfiguration, OrderTotalDiscountsApi } from '';
import type { OrderTotalDiscountsApiListOrderTotalDiscountsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderTotalDiscountsApi(configuration);

const request: OrderTotalDiscountsApiListOrderTotalDiscountsRequest = {
    // Filter to apply, allowed fields are: - (Boolean) `apply_to_commissions` - (DiscountStrategy) `discount_strategy`: GROSS or NET - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=apply_to_commissions%3D%3Dtrue` - `filter=discount_strategy%3D%3DGROSS` - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D10.0` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `apply_to_commissions` - `discount_strategy` - `discount_type` - `discount_value` - `id` - `name`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOrderTotalDiscounts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOrderTotalDiscountsResponse**

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

# **updateOrderTotalDiscount**
> OrderTotalDiscount updateOrderTotalDiscount(updateOrderTotalDiscountRequest)

Updates an Order Total Discount

### Example


```typescript
import { createConfiguration, OrderTotalDiscountsApi } from '';
import type { OrderTotalDiscountsApiUpdateOrderTotalDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderTotalDiscountsApi(configuration);

const request: OrderTotalDiscountsApiUpdateOrderTotalDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
    // request
  updateOrderTotalDiscountRequest: {
    applyToCommissions: true,
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountStrategy: "GROSS",
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateOrderTotalDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOrderTotalDiscountRequest** | **UpdateOrderTotalDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**OrderTotalDiscount**

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


