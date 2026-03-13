# .ShippingDiscountsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createShippingDiscount**](ShippingDiscountsApi.md#createShippingDiscount) | **POST** /rest/v2/discounts/shipping | Create a Shipping Discount
[**deleteShippingDiscount**](ShippingDiscountsApi.md#deleteShippingDiscount) | **DELETE** /rest/v2/discounts/shipping/{discount_id} | Delete a Shipping Discount
[**getShippingDiscount**](ShippingDiscountsApi.md#getShippingDiscount) | **GET** /rest/v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount
[**listShippingDiscounts**](ShippingDiscountsApi.md#listShippingDiscounts) | **GET** /rest/v2/discounts/shipping | List all Shipping Discounts
[**updateShippingDiscount**](ShippingDiscountsApi.md#updateShippingDiscount) | **PATCH** /rest/v2/discounts/shipping/{discount_id} | Update a Shipping Discount


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
  
  createShippingDiscountRequest: {
    name: "Free Shipping Over $100",
    description: "Free shipping on orders over $100",
    criteria: [
      {
        type: "DATE_RANGE",
        code: "SUMMER2024",
        criteriaId: "501",
        rangeStartTime: new Date('2024-01-01T00:00:00Z'),
        rangeEndTime: new Date('2024-12-31T23:59:59Z'),
        productId: "456",
        productQuantityMin: 1,
        productQuantityMax: 10,
        planId: "789",
        subscriptionQuantity: 1,
        totalAmount: 100,
        operator: "GREATER_THAN",
      },
    ],
    discountType: "PERCENT",
    discountValue: 100,
  },
};

const data = await apiInstance.createShippingDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShippingDiscountRequest** | **CreateShippingDiscountRequest**|  |


### Return type

**ShippingDiscount**

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
  
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteShippingDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] |  | defaults to undefined


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
  
  discountId: "discount_id_example",
};

const data = await apiInstance.getShippingDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] |  | defaults to undefined


### Return type

**ShippingDiscount**

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
  
  discountId: "discount_id_example",
  
  updateShippingDiscountRequest: {
    name: "Free Shipping Over $100",
    description: "Free shipping on orders over $100",
    criteria: [
      {
        type: "DATE_RANGE",
        code: "SUMMER2024",
        criteriaId: "501",
        rangeStartTime: new Date('2024-01-01T00:00:00Z'),
        rangeEndTime: new Date('2024-12-31T23:59:59Z'),
        productId: "456",
        productQuantityMin: 1,
        productQuantityMax: 10,
        planId: "789",
        subscriptionQuantity: 1,
        totalAmount: 100,
        operator: "GREATER_THAN",
      },
    ],
    discountType: "PERCENT",
    discountValue: 100,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: "name,description,discount_type,discount_value,criteria",
};

const data = await apiInstance.updateShippingDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateShippingDiscountRequest** | **UpdateShippingDiscountRequest**|  |
 **discountId** | [**string**] |  | defaults to undefined
 **updateMask** | [**&#39;name,description,discount_type,discount_value,criteria&#39;**]**Array<&#39;name,description,discount_type,discount_value,criteria&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ShippingDiscount**

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


