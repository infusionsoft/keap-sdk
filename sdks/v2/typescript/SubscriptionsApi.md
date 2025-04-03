# .SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriptionV2UsingPOST**](SubscriptionsApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription


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


