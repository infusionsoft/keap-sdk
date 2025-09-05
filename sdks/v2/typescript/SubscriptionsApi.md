# .SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscription**](SubscriptionsApi.md#cancelSubscription) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /v2/subscriptions | Create Subscription
[**createSubscriptionCustomField**](SubscriptionsApi.md#createSubscriptionCustomField) | **POST** /v2/subscriptions/model/customFields | Create a Subscription Custom Field
[**deleteSubscriptionCustomField**](SubscriptionsApi.md#deleteSubscriptionCustomField) | **DELETE** /v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field
[**retrieveSubscriptionCustomFieldModel**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModel) | **GET** /v2/subscriptions/model | Retrieve Subscription Custom Field Model
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
      country: "United States of America",
      countryCode: "USA",
      field: "ADDRESS_FIELD_UNSPECIFIED",
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      postalCode: "postalCode_example",
      region: "Arizona",
      regionCode: "US-AZ",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
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


