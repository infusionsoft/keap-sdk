# .ProductDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductDiscount**](ProductDiscountsApi.md#createProductDiscount) | **POST** /v2/discounts/products | Create a Product Discount
[**deleteProductDiscount**](ProductDiscountsApi.md#deleteProductDiscount) | **DELETE** /v2/discounts/products/{discount_id} | Delete a Product Discount
[**getProductDiscount**](ProductDiscountsApi.md#getProductDiscount) | **GET** /v2/discounts/products/{discount_id} | Retrieve a Product Discount
[**listProductDiscounts**](ProductDiscountsApi.md#listProductDiscounts) | **GET** /v2/discounts/products | List all Product Discounts
[**updateProductDiscount**](ProductDiscountsApi.md#updateProductDiscount) | **PATCH** /v2/discounts/products/{discount_id} | Update a Product Discount


# **createProductDiscount**
> ProductDiscount createProductDiscount(createProductDiscountRequest)

Creates a Product Discount

### Example


```typescript
import { createConfiguration, ProductDiscountsApi } from '';
import type { ProductDiscountsApiCreateProductDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductDiscountsApi(configuration);

const request: ProductDiscountsApiCreateProductDiscountRequest = {
    // request
  createProductDiscountRequest: {
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
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
    productId: "productId_example",
  },
};

const data = await apiInstance.createProductDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductDiscountRequest** | **CreateProductDiscountRequest**| request |


### Return type

**ProductDiscount**

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

# **deleteProductDiscount**
> void deleteProductDiscount()

Deletes a specified Product Discount

### Example


```typescript
import { createConfiguration, ProductDiscountsApi } from '';
import type { ProductDiscountsApiDeleteProductDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductDiscountsApi(configuration);

const request: ProductDiscountsApiDeleteProductDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteProductDiscount(request);
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

# **getProductDiscount**
> ProductDiscount getProductDiscount()

Retrieves a Product Discount

### Example


```typescript
import { createConfiguration, ProductDiscountsApi } from '';
import type { ProductDiscountsApiGetProductDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductDiscountsApi(configuration);

const request: ProductDiscountsApiGetProductDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getProductDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**ProductDiscount**

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

# **listProductDiscounts**
> ListProductDiscountsResponse listProductDiscounts()

Retrieves a list of Product Discounts

### Example


```typescript
import { createConfiguration, ProductDiscountsApi } from '';
import type { ProductDiscountsApiListProductDiscountsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductDiscountsApi(configuration);

const request: ProductDiscountsApiListProductDiscountsRequest = {
    // Filter to apply, allowed fields are: - (Boolean) `apply_to_commissions` - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value` - (String) `product_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=apply_to_commissions%3D%3Dtrue` - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D10.0` - `filter=product_id%3D%3D2` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `apply_to_commissions` - `discount_type` - `discount_value` - `id` - `name` - `product_id`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listProductDiscounts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListProductDiscountsResponse**

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

# **updateProductDiscount**
> ProductDiscount updateProductDiscount(updateProductDiscountRequest)

Updates a Product Discount

### Example


```typescript
import { createConfiguration, ProductDiscountsApi } from '';
import type { ProductDiscountsApiUpdateProductDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductDiscountsApi(configuration);

const request: ProductDiscountsApiUpdateProductDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
    // request
  updateProductDiscountRequest: {
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
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
    productId: "productId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateProductDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductDiscountRequest** | **UpdateProductDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ProductDiscount**

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


