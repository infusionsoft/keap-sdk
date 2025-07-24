# .FreeTrialDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFreeTrialDiscount**](FreeTrialDiscountsApi.md#createFreeTrialDiscount) | **POST** /v2/discounts/freeTrials | Create a Subscription Free Trial Discount
[**deleteFreeTrialDiscount**](FreeTrialDiscountsApi.md#deleteFreeTrialDiscount) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Subscription Free Trial Discount
[**getFreeTrialDiscount**](FreeTrialDiscountsApi.md#getFreeTrialDiscount) | **GET** /v2/discounts/freeTrials/{discount_id} | Retrieve a Subscription Free Trial Discount
[**listFreeTrialDiscounts**](FreeTrialDiscountsApi.md#listFreeTrialDiscounts) | **GET** /v2/discounts/freeTrials | List all Subscription Free Trial Discounts
[**updateFreeTrialDiscount**](FreeTrialDiscountsApi.md#updateFreeTrialDiscount) | **PATCH** /v2/discounts/freeTrials/{discount_id} | Update a Subscription Free Trial Discount


# **createFreeTrialDiscount**
> FreeTrialDiscount createFreeTrialDiscount(createFreeTrialDiscountRequest)

Creates a Subscription Free Trial Discount

### Example


```typescript
import { createConfiguration, FreeTrialDiscountsApi } from '';
import type { FreeTrialDiscountsApiCreateFreeTrialDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FreeTrialDiscountsApi(configuration);

const request: FreeTrialDiscountsApiCreateFreeTrialDiscountRequest = {
    // createFreeTrialDiscountRequest
  createFreeTrialDiscountRequest: {
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
    freeTrialDays: 1,
    hidePrice: true,
    name: "name_example",
    subscriptionPlanId: "subscriptionPlanId_example",
  },
};

const data = await apiInstance.createFreeTrialDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFreeTrialDiscountRequest** | **CreateFreeTrialDiscountRequest**| createFreeTrialDiscountRequest |


### Return type

**FreeTrialDiscount**

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

# **deleteFreeTrialDiscount**
> void deleteFreeTrialDiscount()

Deletes a specified Subscription Free Trial Discount

### Example


```typescript
import { createConfiguration, FreeTrialDiscountsApi } from '';
import type { FreeTrialDiscountsApiDeleteFreeTrialDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FreeTrialDiscountsApi(configuration);

const request: FreeTrialDiscountsApiDeleteFreeTrialDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteFreeTrialDiscount(request);
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

# **getFreeTrialDiscount**
> FreeTrialDiscount getFreeTrialDiscount()

Retrieves a Subscription Free Trial Discount

### Example


```typescript
import { createConfiguration, FreeTrialDiscountsApi } from '';
import type { FreeTrialDiscountsApiGetFreeTrialDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FreeTrialDiscountsApi(configuration);

const request: FreeTrialDiscountsApiGetFreeTrialDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getFreeTrialDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**FreeTrialDiscount**

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

# **listFreeTrialDiscounts**
> ListFreeTrialDiscountsResponse listFreeTrialDiscounts()

Retrieves a list of Subscription Free Trial Discounts

### Example


```typescript
import { createConfiguration, FreeTrialDiscountsApi } from '';
import type { FreeTrialDiscountsApiListFreeTrialDiscountsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FreeTrialDiscountsApi(configuration);

const request: FreeTrialDiscountsApiListFreeTrialDiscountsRequest = {
    // Filter to apply, allowed fields are: - (Integer) `free_trial_days` - (Boolean) `hide_price` - (String) `subscription_plan_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=free_trial_days%3D%3D14` - `filter=hide_price%3D%3DTrue` - `filter=subscription_plan_id%3D%3DmySubscriptionPlanId` - `filter=free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `free_trial_days` - `hide_price` - `id` - `name` - `subscription_plan_id`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listFreeTrialDiscounts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListFreeTrialDiscountsResponse**

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

# **updateFreeTrialDiscount**
> FreeTrialDiscount updateFreeTrialDiscount(updateFreeTrialDiscountRequest)

Updates a Subscription Free Trial Discount

### Example


```typescript
import { createConfiguration, FreeTrialDiscountsApi } from '';
import type { FreeTrialDiscountsApiUpdateFreeTrialDiscountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FreeTrialDiscountsApi(configuration);

const request: FreeTrialDiscountsApiUpdateFreeTrialDiscountRequest = {
    // discount_id
  discountId: "discount_id_example",
    // request
  updateFreeTrialDiscountRequest: {
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
    freeTrialDays: 1,
    hidePrice: true,
    name: "name_example",
    subscriptionPlanId: "subscriptionPlanId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateFreeTrialDiscount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFreeTrialDiscountRequest** | **UpdateFreeTrialDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**FreeTrialDiscount**

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


