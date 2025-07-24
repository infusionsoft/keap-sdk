# .CategoryDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategoryDiscount**](CategoryDiscountsApi.md#createCategoryDiscount) | **POST** /v2/discounts/productCategories | Create a Category Discount
[**deleteCategoryDiscount**](CategoryDiscountsApi.md#deleteCategoryDiscount) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**getCategoryDiscount**](CategoryDiscountsApi.md#getCategoryDiscount) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount
[**listCategoryDiscounts**](CategoryDiscountsApi.md#listCategoryDiscounts) | **GET** /v2/discounts/productCategories | List Category Discounts
[**updateCategoryDiscount**](CategoryDiscountsApi.md#updateCategoryDiscount) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount


# **createCategoryDiscount**
> CategoryDiscount createCategoryDiscount(createCategoryDiscountRequest)

Creates a Category Discount

### Example


```typescript
import { createConfiguration, CategoryDiscountsApi } from '';
import type { CategoryDiscountsApiCreateCategoryDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountsApi(configuration);

const request: CategoryDiscountsApiCreateCategoryDiscountRequest = {
    // request
  createCategoryDiscountRequest: {
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
    discountPercent: 3.14,
    name: "name_example",
    productCategoryIds: [
      "productCategoryIds_example",
    ],
  },
};

const data = await apiInstance.createCategoryDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCategoryDiscountRequest** | **CreateCategoryDiscountRequest**| request |


### Return type

**CategoryDiscount**

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

# **deleteCategoryDiscount**
> void deleteCategoryDiscount()

Deletes a specified Category Discount

### Example


```typescript
import { createConfiguration, CategoryDiscountsApi } from '';
import type { CategoryDiscountsApiDeleteCategoryDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountsApi(configuration);

const request: CategoryDiscountsApiDeleteCategoryDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteCategoryDiscount(request);
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

# **getCategoryDiscount**
> CategoryDiscount getCategoryDiscount()

Retrieves a single Category Discount

### Example


```typescript
import { createConfiguration, CategoryDiscountsApi } from '';
import type { CategoryDiscountsApiGetCategoryDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountsApi(configuration);

const request: CategoryDiscountsApiGetCategoryDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getCategoryDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**CategoryDiscount**

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

# **listCategoryDiscounts**
> ListCategoryDiscountsResponse listCategoryDiscounts()

Retrieves a list of Category Discounts

### Example


```typescript
import { createConfiguration, CategoryDiscountsApi } from '';
import type { CategoryDiscountsApiListCategoryDiscountsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountsApi(configuration);

const request: CategoryDiscountsApiListCategoryDiscountsRequest = {
    // Filter to apply, the allowed field is: - (String) `product_category_id`  You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `name`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listCategoryDiscounts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, the allowed field is: - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListCategoryDiscountsResponse**

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

# **updateCategoryDiscount**
> CategoryDiscount updateCategoryDiscount(updateCategoryDiscountRequest)

Updates a Category Discount

### Example


```typescript
import { createConfiguration, CategoryDiscountsApi } from '';
import type { CategoryDiscountsApiUpdateCategoryDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountsApi(configuration);

const request: CategoryDiscountsApiUpdateCategoryDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
    // request
  updateCategoryDiscountRequest: {
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
    discountPercent: 3.14,
    name: "name_example",
    productCategoryIds: [
      "productCategoryIds_example",
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateCategoryDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCategoryDiscountRequest** | **UpdateCategoryDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CategoryDiscount**

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


