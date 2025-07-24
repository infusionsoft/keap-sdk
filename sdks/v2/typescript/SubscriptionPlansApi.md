# .SubscriptionPlansApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriptionPlans**](SubscriptionPlansApi.md#createSubscriptionPlans) | **POST** /v2/products/{product_id}/subscriptions | Create Subscription Plan
[**deleteSubscriptionPlan**](SubscriptionPlansApi.md#deleteSubscriptionPlan) | **DELETE** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Delete Subscription Plan
[**fetchSubscriptionPlan**](SubscriptionPlansApi.md#fetchSubscriptionPlan) | **GET** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Get Subscription Plan
[**listSubscriptionPlans**](SubscriptionPlansApi.md#listSubscriptionPlans) | **GET** /v2/products/{product_id}/subscriptions | List Subscription Plans
[**updateSubscriptionPlan**](SubscriptionPlansApi.md#updateSubscriptionPlan) | **PATCH** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Update Subscription Plan


# **createSubscriptionPlans**
> SubscriptionPlan createSubscriptionPlans(createSubscriptionPlanRequest)

Creates a Subscription Plan

### Example


```typescript
import { createConfiguration, SubscriptionPlansApi } from '';
import type { SubscriptionPlansApiCreateSubscriptionPlansRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionPlansApi(configuration);

const request: SubscriptionPlansApiCreateSubscriptionPlansRequest = {
    // product_id
  productId: "product_id_example",
    // createSubscriptionPlanRequest
  createSubscriptionPlanRequest: {
    active: true,
    allowProrating: true,
    cycleType: "DAILY",
    displayOrderIndex: 1,
    frequency: 1,
    planPrice: 3.14,
    totalCycles: 1,
  },
};

const data = await apiInstance.createSubscriptionPlans(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionPlanRequest** | **CreateSubscriptionPlanRequest**| createSubscriptionPlanRequest |
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**SubscriptionPlan**

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

# **deleteSubscriptionPlan**
> void deleteSubscriptionPlan()

Deletes a Subscription Plan

### Example


```typescript
import { createConfiguration, SubscriptionPlansApi } from '';
import type { SubscriptionPlansApiDeleteSubscriptionPlanRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionPlansApi(configuration);

const request: SubscriptionPlansApiDeleteSubscriptionPlanRequest = {
    // product_id
  productId: "product_id_example",
    // subscription_plan_id
  subscriptionPlanId: "subscription_plan_id_example",
};

const data = await apiInstance.deleteSubscriptionPlan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined
 **subscriptionPlanId** | [**string**] | subscription_plan_id | defaults to undefined


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

# **fetchSubscriptionPlan**
> SubscriptionPlan fetchSubscriptionPlan()

Retrieves a Subscription Plan

### Example


```typescript
import { createConfiguration, SubscriptionPlansApi } from '';
import type { SubscriptionPlansApiFetchSubscriptionPlanRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionPlansApi(configuration);

const request: SubscriptionPlansApiFetchSubscriptionPlanRequest = {
    // product_id
  productId: "product_id_example",
    // subscription_plan_id
  subscriptionPlanId: "subscription_plan_id_example",
};

const data = await apiInstance.fetchSubscriptionPlan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined
 **subscriptionPlanId** | [**string**] | subscription_plan_id | defaults to undefined


### Return type

**SubscriptionPlan**

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

# **listSubscriptionPlans**
> ListSubscriptionPlansResponse listSubscriptionPlans()

Retrieves a list of Subscription Plans

### Example


```typescript
import { createConfiguration, SubscriptionPlansApi } from '';
import type { SubscriptionPlansApiListSubscriptionPlansRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionPlansApi(configuration);

const request: SubscriptionPlansApiListSubscriptionPlansRequest = {
    // product_id
  productId: "'-' can be used for a wildcard (/v2/products/-/subscriptions",
    // Filter to apply, allowed fields are: - (Boolean) `active`: true or false - (BillingCycle) `cycle_type`: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=active%3D%3Dtrue` - `filter=cycle_type%3D%3DDAILY` - `filter=active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `product_id`  One of the following directions: - `asc` - `desc`  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listSubscriptionPlans(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListSubscriptionPlansResponse**

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

# **updateSubscriptionPlan**
> SubscriptionPlan updateSubscriptionPlan(updateSubscriptionPlanRequest)

Updates a Subscription Plan

### Example


```typescript
import { createConfiguration, SubscriptionPlansApi } from '';
import type { SubscriptionPlansApiUpdateSubscriptionPlanRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionPlansApi(configuration);

const request: SubscriptionPlansApiUpdateSubscriptionPlanRequest = {
    // product_id
  productId: "product_id_example",
    // subscription_plan_id
  subscriptionPlanId: "subscription_plan_id_example",
    // updateSubscriptionPlanRequest
  updateSubscriptionPlanRequest: {
    active: true,
    allowProrating: true,
    cycleType: "DAILY",
    displayOrderIndex: 1,
    frequency: 1,
    planPrice: 3.14,
    totalCycles: 1,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "active",
  ],
};

const data = await apiInstance.updateSubscriptionPlan(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSubscriptionPlanRequest** | **UpdateSubscriptionPlanRequest**| updateSubscriptionPlanRequest |
 **productId** | [**string**] | product_id | defaults to undefined
 **subscriptionPlanId** | [**string**] | subscription_plan_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**SubscriptionPlan**

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


