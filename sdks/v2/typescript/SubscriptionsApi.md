# .SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscription**](SubscriptionsApi.md#cancelSubscription) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /v2/subscriptions | Create Subscription
[**createSubscriptionCustomField**](SubscriptionsApi.md#createSubscriptionCustomField) | **POST** /v2/subscriptions/model/customFields | Create a Subscription Custom Field
[**deleteSubscriptionCustomField**](SubscriptionsApi.md#deleteSubscriptionCustomField) | **DELETE** /v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field
[**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /v2/subscriptions/{subscription_id} | Retrieve a Subscription
[**listSubscriptions**](SubscriptionsApi.md#listSubscriptions) | **GET** /v2/subscriptions | List Subscriptions
[**retrieveSubscriptionCustomFieldModel**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModel) | **GET** /v2/subscriptions/model | Retrieve Subscription Custom Field Model
[**updateSubscription**](SubscriptionsApi.md#updateSubscription) | **PATCH** /v2/subscriptions/{subscription_id} | Update a Subscription
[**updateSubscriptionCustomField**](SubscriptionsApi.md#updateSubscriptionCustomField) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field


# **cancelSubscription**
> void cancelSubscription(cancelSubscriptionRequest)

Cancels the specified subscription

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiCancelSubscriptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiCancelSubscriptionRequest = {
    // subscription_id
  subscriptionId: "subscription_id_example",
    // request
  cancelSubscriptionRequest: {
    reason: "reason_example",
  },
};

const data = await apiInstance.cancelSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelSubscriptionRequest** | **CancelSubscriptionRequest**| request |
 **subscriptionId** | [**string**] | subscription_id | defaults to undefined


### Return type

**void**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSubscription**
> Subscription createSubscription(createSubscriptionRequest)

Creates a subscription with the specified product and product subscription id.

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiCreateSubscriptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiCreateSubscriptionRequest = {
    // request
  createSubscriptionRequest: {
    active: true,
    allowDuplicate: true,
    allowTax: true,
    autoCharge: true,
    billingAmount: 3.14,
    contactId: "contactId_example",
    daysBetweenRetries: 1,
    leadAffiliateId: "leadAffiliateId_example",
    maxChargeAttempts: 1,
    paymentMethodId: "paymentMethodId_example",
    quantity: 1,
    saleAffiliateId: "saleAffiliateId_example",
    shippingAddress: {
      countryCode: "USA",
      field: "ADDRESS_FIELD_UNSPECIFIED",
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      postalCode: "postalCode_example",
      regionCode: "US-AZ",
    },
    startDate: "startDate_example",
    subscriptionPlanId: "subscriptionPlanId_example",
  },
};

const data = await apiInstance.createSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionRequest** | **CreateSubscriptionRequest**| request |


### Return type

**Subscription**

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

# **createSubscriptionCustomField**
> CustomFieldMetaData createSubscriptionCustomField(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Subscription object

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiCreateSubscriptionCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiCreateSubscriptionCustomFieldRequest = {
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

const data = await apiInstance.createSubscriptionCustomField(request);
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

# **deleteSubscriptionCustomField**
> void deleteSubscriptionCustomField()

Deletes a custom field from the Subscription object

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiDeleteSubscriptionCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiDeleteSubscriptionCustomFieldRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteSubscriptionCustomField(request);
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

# **getSubscription**
> Subscription getSubscription()

Retrieves a single subscription

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiGetSubscriptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiGetSubscriptionRequest = {
    // subscription_id
  subscriptionId: "subscription_id_example",
};

const data = await apiInstance.getSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | [**string**] | subscription_id | defaults to undefined


### Return type

**Subscription**

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

# **listSubscriptions**
> ListSubscriptionsResponse listSubscriptions()

Retrieves a list of subscriptions using the specified search criteria.

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiListSubscriptionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiListSubscriptionsRequest = {
    // Filter to apply, allowed fields are: - (String) `contact_id` - (String) `subscription_plan_id`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `contact_id` - `subscription_plan_id`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listSubscriptions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListSubscriptionsResponse**

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

# **retrieveSubscriptionCustomFieldModel**
> ObjectModel retrieveSubscriptionCustomFieldModel()

Get the custom fields for the Subscription object

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request = {};

const data = await apiInstance.retrieveSubscriptionCustomFieldModel(request);
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

# **updateSubscription**
> Subscription updateSubscription(updateSubscriptionRequest)

Updates a Subscription

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiUpdateSubscriptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiUpdateSubscriptionRequest = {
    // subscription_id
  subscriptionId: "subscription_id_example",
    // request
  updateSubscriptionRequest: {
    active: true,
    allowTax: true,
    autoCharge: true,
    billingAmount: 3.14,
    billingCycle: "YEAR",
    billingFrequency: 1,
    contactId: "contactId_example",
    daysBetweenRetries: 1,
    endDate: "endDate_example",
    leadAffiliateId: "leadAffiliateId_example",
    maxChargeAttempts: 1,
    nextBillDate: "nextBillDate_example",
    paymentMethodId: "paymentMethodId_example",
    quantity: 1,
    saleAffiliateId: "saleAffiliateId_example",
    shippingAddress: {
      countryCode: "USA",
      field: "ADDRESS_FIELD_UNSPECIFIED",
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      postalCode: "postalCode_example",
      regionCode: "US-AZ",
    },
    subscriptionPlanId: "subscriptionPlanId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "contact_id",
  ],
};

const data = await apiInstance.updateSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSubscriptionRequest** | **UpdateSubscriptionRequest**| request |
 **subscriptionId** | [**string**] | subscription_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**Subscription**

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

# **updateSubscriptionCustomField**
> CustomFieldMetaData updateSubscriptionCustomField(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Subscription object

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiUpdateSubscriptionCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiUpdateSubscriptionCustomFieldRequest = {
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

const data = await apiInstance.updateSubscriptionCustomField(request);
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


