# .CategoryDiscountsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategoryDiscount**](CategoryDiscountsApi.md#createCategoryDiscount) | **POST** /rest/v2/discounts/productCategories | Create a Category Discount
[**deleteCategoryDiscount**](CategoryDiscountsApi.md#deleteCategoryDiscount) | **DELETE** /rest/v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**getCategoryDiscount**](CategoryDiscountsApi.md#getCategoryDiscount) | **GET** /rest/v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount
[**listCategoryDiscounts**](CategoryDiscountsApi.md#listCategoryDiscounts) | **GET** /rest/v2/discounts/productCategories | List Category Discounts
[**updateCategoryDiscount**](CategoryDiscountsApi.md#updateCategoryDiscount) | **PATCH** /rest/v2/discounts/productCategories/{discount_id} | Update a Category Discount


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
  
  createCategoryDiscountRequest: {
    name: "Electronics Category Sale",
    description: "15% off all electronics",
    criteria: [
      {
        type: "DATE_RANGE",
        code: "SUMMER2024",
        rangeStartTime: new Date('2024-01-01T00:00:00Z'),
        rangeEndTime: new Date('2024-12-31T23:59:59Z'),
      },
    ],
    applyToCommissions: false,
    discountPercent: 15,
    productCategoryIds: [10, 11, 12],
  },
};

const data = await apiInstance.createCategoryDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCategoryDiscountRequest** | **CreateCategoryDiscountRequest**|  |


### Return type

**CategoryDiscount**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteCategoryDiscount(request);
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  discountId: "discount_id_example",
};

const data = await apiInstance.getCategoryDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] |  | defaults to undefined


### Return type

**CategoryDiscount**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
    // Filter to apply, the allowed field is: - (String) `id` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (List[String]) `ids` - (String) `name` - Wildcard matching allowed - (String) `description` - Wildcard matching allowed - (String) `product_category_id`  You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4` - `filter=ids%3D%3D1,10,4,24` - `filter=id%3E5`  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `description==foo*` finds anything in `description` that begins with `foo`   (optional)
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
 **filter** | [**string**] | Filter to apply, the allowed field is: - (String) &#x60;id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (List[String]) &#x60;ids&#x60; - (String) &#x60;name&#x60; - Wildcard matching allowed - (String) &#x60;description&#x60; - Wildcard matching allowed - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; - &#x60;filter&#x3D;ids%3D%3D1,10,4,24&#x60; - &#x60;filter&#x3D;id%3E5&#x60;  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;description&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;description&#x60; that begins with &#x60;foo&#x60;   | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListCategoryDiscountsResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  discountId: "discount_id_example",
  
  updateCategoryDiscountRequest: {
    name: "Electronics Category Sale",
    description: "15% off all electronics",
    criteria: [
      {
        type: "DATE_RANGE",
        code: "SUMMER2024",
        rangeStartTime: new Date('2024-01-01T00:00:00Z'),
        rangeEndTime: new Date('2024-12-31T23:59:59Z'),
      },
    ],
    applyToCommissions: false,
    discountPercent: 15,
    productCategoryIds: [10, 11, 12],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateCategoryDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCategoryDiscountRequest** | **UpdateCategoryDiscountRequest**|  |
 **discountId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CategoryDiscount**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


