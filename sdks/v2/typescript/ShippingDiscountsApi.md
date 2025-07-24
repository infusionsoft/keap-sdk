# .ShippingDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createShippingDiscount**](ShippingDiscountsApi.md#createShippingDiscount) | **POST** /v2/discounts/shipping | Create a Shipping Discount
[**deleteShippingDiscount**](ShippingDiscountsApi.md#deleteShippingDiscount) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount
[**getShippingDiscount**](ShippingDiscountsApi.md#getShippingDiscount) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount
[**listShippingDiscounts**](ShippingDiscountsApi.md#listShippingDiscounts) | **GET** /v2/discounts/shipping | List all Shipping Discounts
[**updateShippingDiscount**](ShippingDiscountsApi.md#updateShippingDiscount) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount


# **createShippingDiscount**
> ShippingDiscount createShippingDiscount(createShippingDiscountRequest)

Creates a Shipping Discount

### Example


```typescript
import { createConfiguration, ShippingDiscountsApi } from '';
import type { ShippingDiscountsApiCreateShippingDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingDiscountsApi(configuration);

const request: ShippingDiscountsApiCreateShippingDiscountRequest = {
    // request
  createShippingDiscountRequest: {
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
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
};

const data = await apiInstance.createShippingDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShippingDiscountRequest** | **CreateShippingDiscountRequest**| request |


### Return type

**ShippingDiscount**

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

# **deleteShippingDiscount**
> void deleteShippingDiscount()

Deletes a specified Shipping Discount

### Example


```typescript
import { createConfiguration, ShippingDiscountsApi } from '';
import type { ShippingDiscountsApiDeleteShippingDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingDiscountsApi(configuration);

const request: ShippingDiscountsApiDeleteShippingDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteShippingDiscount(request);
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

# **getShippingDiscount**
> ShippingDiscount getShippingDiscount()

Retrieves a Shipping Discount

### Example


```typescript
import { createConfiguration, ShippingDiscountsApi } from '';
import type { ShippingDiscountsApiGetShippingDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingDiscountsApi(configuration);

const request: ShippingDiscountsApiGetShippingDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getShippingDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**ShippingDiscount**

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

# **listShippingDiscounts**
> ListShippingDiscountsResponse listShippingDiscounts()

Retrieves a list of Shipping Discounts

### Example


```typescript
import { createConfiguration, ShippingDiscountsApi } from '';
import type { ShippingDiscountsApiListShippingDiscountsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingDiscountsApi(configuration);

const request: ShippingDiscountsApiListShippingDiscountsRequest = {
    // Filter to apply, allowed fields are: - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D4.5` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `discount_type` - `discount_value` - `id` - `name`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listShippingDiscounts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListShippingDiscountsResponse**

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

# **updateShippingDiscount**
> ShippingDiscount updateShippingDiscount(updateShippingDiscountRequest)

Updates a Shipping Discount

### Example


```typescript
import { createConfiguration, ShippingDiscountsApi } from '';
import type { ShippingDiscountsApiUpdateShippingDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingDiscountsApi(configuration);

const request: ShippingDiscountsApiUpdateShippingDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
    // request
  updateShippingDiscountRequest: {
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
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateShippingDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateShippingDiscountRequest** | **UpdateShippingDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ShippingDiscount**

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


