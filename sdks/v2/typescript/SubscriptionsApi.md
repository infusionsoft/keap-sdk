# .SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscription**](SubscriptionsApi.md#cancelSubscription) | **POST** /rest/v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /rest/v2/subscriptions | Create Subscription
[**createSubscriptionCustomField**](SubscriptionsApi.md#createSubscriptionCustomField) | **POST** /rest/v2/subscriptions/model/customFields | Create a Subscription Custom Field
[**deleteSubscriptionCustomField**](SubscriptionsApi.md#deleteSubscriptionCustomField) | **DELETE** /rest/v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field
[**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /rest/v2/subscriptions/{subscription_id} | Retrieve a Subscription
[**listSubscriptions**](SubscriptionsApi.md#listSubscriptions) | **GET** /rest/v2/subscriptions | List Subscriptions
[**retrieveSubscriptionCustomFieldModel**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModel) | **GET** /rest/v2/subscriptions/model | Retrieve Subscription Custom Field Model
[**updateSubscription**](SubscriptionsApi.md#updateSubscription) | **PATCH** /rest/v2/subscriptions/{subscription_id} | Update a Subscription
[**updateSubscriptionCustomField**](SubscriptionsApi.md#updateSubscriptionCustomField) | **PATCH** /rest/v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field


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
  
  subscriptionId: "subscription_id_example",
  
  cancelSubscriptionRequest: {
    reason: "Customer request",
  },
};

const data = await apiInstance.cancelSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelSubscriptionRequest** | **CancelSubscriptionRequest**|  |
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**void**

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
  
  createSubscriptionRequest: {
    quantity: 1,
    active: true,
    contactId: "123",
    subscriptionPlanId: "456",
    billingAmount: 10000,
    autoCharge: true,
    maxChargeAttempts: 3,
    daysBetweenRetries: 5,
    startDate: new Date('2024-05-21').toISOString().split('T')[0];,
    paymentMethodId: "789",
    allowTax: false,
    allowDuplicate: false,
    leadAffiliateId: "101",
    saleAffiliateId: "102",
    shippingAddress: {
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      field: "BILLING",
      countryCode: "USA",
      postalCode: "postalCode_example",
      regionCode: "US-AZ",
    },
    promoCode: "PROMO123",
    shippingOptionId: "123",
    reasonStopped: "Customer requested",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
  },
};

const data = await apiInstance.createSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionRequest** | **CreateSubscriptionRequest**|  |


### Return type

**Subscription**

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
  
  createCustomFieldRequest: {
    label: "label_example",
    options: [
      {
        label: "label_example",
      },
    ],
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createSubscriptionCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**|  |


### Return type

**CustomFieldMetaData**

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
  
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteSubscriptionCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] |  | defaults to undefined


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
  
  subscriptionId: "subscription_id_example",
};

const data = await apiInstance.getSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**Subscription**

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
    // Filter to apply, allowed fields are: - (String) `contact_id` - (String) `subscription_plan_id` - (String) `status` - (String) `id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `billing_amount` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (List[String]) `ids` - (List[String]) `subscription_plan_ids`  You will need to apply the `==` operator (or other supported operators), to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=subscription_plan_id%3D%3D456` - `filter=status%3D%3DActive` - `filter=id%3E5` - `filter=billing_amount%3E%3D100` - `filter=ids%3D%3D1,10,4,24` - `filter=subscription_plan_ids%3D%3D10,20,30` - `filter=contact_id%3D%3D123%3Bstatus%3D%3DActive`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `contact_id` - `subscription_plan_id` - `modification_time`  One of the following directions: - `asc` - `desc` (optional)
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
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;billing_amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (List[String]) &#x60;ids&#x60; - (List[String]) &#x60;subscription_plan_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator (or other supported operators), to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3D456&#x60; - &#x60;filter&#x3D;status%3D%3DActive&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;billing_amount%3E%3D100&#x60; - &#x60;filter&#x3D;ids%3D%3D1,10,4,24&#x60; - &#x60;filter&#x3D;subscription_plan_ids%3D%3D10,20,30&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bstatus%3D%3DActive&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60; - &#x60;modification_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListSubscriptionsResponse**

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
  
  subscriptionId: "subscription_id_example",
  
  updateSubscriptionRequest: {
    quantity: 1,
    active: true,
    contactId: "123",
    subscriptionPlanId: "456",
    billingAmount: 10000,
    autoCharge: true,
    maxChargeAttempts: 3,
    daysBetweenRetries: 5,
    billingFrequency: 30,
    billingCycle: "MONTH",
    nextBillDate: new Date('2024-06-21').toISOString().split('T')[0];,
    endDate: new Date('2025-05-21').toISOString().split('T')[0];,
    paymentMethodId: "789",
    allowTax: false,
    leadAffiliateId: "101",
    saleAffiliateId: "102",
    shippingAddress: {
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      field: "BILLING",
      countryCode: "USA",
      postalCode: "postalCode_example",
      regionCode: "US-AZ",
    },
    promoCode: "PROMO123",
    shippingOptionId: "123",
    reasonStopped: "Customer requested cancellation",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSubscriptionRequest** | **UpdateSubscriptionRequest**|  |
 **subscriptionId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**Subscription**

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
  
  customFieldId: "custom_field_id_example",
  
  updateCustomFieldMetaDataRequest: {
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
      },
    ],
    groupId: "groupId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateSubscriptionCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**|  |
 **customFieldId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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


