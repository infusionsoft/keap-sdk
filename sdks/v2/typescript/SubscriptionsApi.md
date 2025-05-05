# .SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriptionCustomFieldUsingPOST**](SubscriptionsApi.md#createSubscriptionCustomFieldUsingPOST) | **POST** /v2/subscriptions/model/customFields | Create a Subscription Custom Field
[**createSubscriptionV2UsingPOST**](SubscriptionsApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription
[**deleteSubscriptionCustomFieldUsingDELETE**](SubscriptionsApi.md#deleteSubscriptionCustomFieldUsingDELETE) | **DELETE** /v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field
[**retrieveSubscriptionCustomFieldModelUsingGET**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModelUsingGET) | **GET** /v2/subscriptions/model | Retrieve Subscription Custom Field Model
[**updateSubscriptionCustomFieldUsingPATCH**](SubscriptionsApi.md#updateSubscriptionCustomFieldUsingPATCH) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field


# **createSubscriptionCustomFieldUsingPOST**
> CustomFieldMetaData createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Subscription object

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiCreateSubscriptionCustomFieldUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiCreateSubscriptionCustomFieldUsingPOSTRequest = {
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

const data = await apiInstance.createSubscriptionCustomFieldUsingPOST(request);
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

# **createSubscriptionV2UsingPOST**
> RestSubscriptionV2 createSubscriptionV2UsingPOST(createSubscriptionV2)

Creates a subscription with the specified product and product subscription id.

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest = {
    // createSubscriptionV2
  createSubscriptionV2: {
    allowDuplicate: true,
    allowTax: true,
    autoCharge: true,
    billingAmount: 3.14,
    contactId: "contactId_example",
    firstBillDate: new Date('1970-01-01').toISOString().split('T')[0];,
    paymentMethodId: "paymentMethodId_example",
    quantity: 1,
    saleAffiliateId: "saleAffiliateId_example",
    subscriptionPlanId: "subscriptionPlanId_example",
  },
};

const data = await apiInstance.createSubscriptionV2UsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionV2** | **CreateSubscriptionV2**| createSubscriptionV2 |


### Return type

**RestSubscriptionV2**

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

# **deleteSubscriptionCustomFieldUsingDELETE**
> void deleteSubscriptionCustomFieldUsingDELETE()

Deletes a custom field from the Subscription object

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiDeleteSubscriptionCustomFieldUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiDeleteSubscriptionCustomFieldUsingDELETERequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteSubscriptionCustomFieldUsingDELETE(request);
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

# **retrieveSubscriptionCustomFieldModelUsingGET**
> ObjectModel retrieveSubscriptionCustomFieldModelUsingGET()

Get the custom fields for the Subscription object

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request = {};

const data = await apiInstance.retrieveSubscriptionCustomFieldModelUsingGET(request);
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

# **updateSubscriptionCustomFieldUsingPATCH**
> CustomFieldMetaData updateSubscriptionCustomFieldUsingPATCH(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Subscription object

### Example


```typescript
import { createConfiguration, SubscriptionsApi } from '';
import type { SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionsApi(configuration);

const request: SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCHRequest = {
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

const data = await apiInstance.updateSubscriptionCustomFieldUsingPATCH(request);
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


