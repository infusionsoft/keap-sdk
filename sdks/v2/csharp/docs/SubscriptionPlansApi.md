# Keap.Core.V2.Api.SubscriptionPlansApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateSubscriptionPlans**](SubscriptionPlansApi.md#createsubscriptionplans) | **POST** /v2/products/{product_id}/subscriptions | Create Subscription Plan |
| [**DeleteSubscriptionPlan**](SubscriptionPlansApi.md#deletesubscriptionplan) | **DELETE** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Delete Subscription Plan |
| [**FetchSubscriptionPlan**](SubscriptionPlansApi.md#fetchsubscriptionplan) | **GET** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Get Subscription Plan |
| [**ListSubscriptionPlans**](SubscriptionPlansApi.md#listsubscriptionplans) | **GET** /v2/products/{product_id}/subscriptions | List Subscription Plans |
| [**UpdateSubscriptionPlan**](SubscriptionPlansApi.md#updatesubscriptionplan) | **PATCH** /v2/products/{product_id}/subscriptions/{subscription_plan_id} | Update Subscription Plan |

<a id="createsubscriptionplans"></a>
# **CreateSubscriptionPlans**
> SubscriptionPlan CreateSubscriptionPlans (string productId, CreateSubscriptionPlanRequest createSubscriptionPlanRequest)

Create Subscription Plan

Creates a Subscription Plan

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateSubscriptionPlansExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SubscriptionPlansApi(config);
            var productId = "productId_example";  // string | product_id
            var createSubscriptionPlanRequest = new CreateSubscriptionPlanRequest(); // CreateSubscriptionPlanRequest | createSubscriptionPlanRequest

            try
            {
                // Create Subscription Plan
                SubscriptionPlan result = apiInstance.CreateSubscriptionPlans(productId, createSubscriptionPlanRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionPlansApi.CreateSubscriptionPlans: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSubscriptionPlansWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Subscription Plan
    ApiResponse<SubscriptionPlan> response = apiInstance.CreateSubscriptionPlansWithHttpInfo(productId, createSubscriptionPlanRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionPlansApi.CreateSubscriptionPlansWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **createSubscriptionPlanRequest** | [**CreateSubscriptionPlanRequest**](CreateSubscriptionPlanRequest.md) | createSubscriptionPlanRequest |  |

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletesubscriptionplan"></a>
# **DeleteSubscriptionPlan**
> void DeleteSubscriptionPlan (string productId, string subscriptionPlanId)

Delete Subscription Plan

Deletes a Subscription Plan

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteSubscriptionPlanExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SubscriptionPlansApi(config);
            var productId = "productId_example";  // string | product_id
            var subscriptionPlanId = "subscriptionPlanId_example";  // string | subscription_plan_id

            try
            {
                // Delete Subscription Plan
                apiInstance.DeleteSubscriptionPlan(productId, subscriptionPlanId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionPlansApi.DeleteSubscriptionPlan: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteSubscriptionPlanWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Subscription Plan
    apiInstance.DeleteSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionPlansApi.DeleteSubscriptionPlanWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **subscriptionPlanId** | **string** | subscription_plan_id |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="fetchsubscriptionplan"></a>
# **FetchSubscriptionPlan**
> SubscriptionPlan FetchSubscriptionPlan (string productId, string subscriptionPlanId)

Get Subscription Plan

Retrieves a Subscription Plan

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class FetchSubscriptionPlanExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SubscriptionPlansApi(config);
            var productId = "productId_example";  // string | product_id
            var subscriptionPlanId = "subscriptionPlanId_example";  // string | subscription_plan_id

            try
            {
                // Get Subscription Plan
                SubscriptionPlan result = apiInstance.FetchSubscriptionPlan(productId, subscriptionPlanId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionPlansApi.FetchSubscriptionPlan: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the FetchSubscriptionPlanWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Subscription Plan
    ApiResponse<SubscriptionPlan> response = apiInstance.FetchSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionPlansApi.FetchSubscriptionPlanWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **subscriptionPlanId** | **string** | subscription_plan_id |  |

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listsubscriptionplans"></a>
# **ListSubscriptionPlans**
> ListSubscriptionPlansResponse ListSubscriptionPlans (string productId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListSubscriptionPlansExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SubscriptionPlansApi(config);
            var productId = '-' can be used for a wildcard (/v2/products/-/subscriptions;  // string | product_id
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (Boolean) `active`: true or false - (BillingCycle) `cycle_type`: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=active%3D%3Dtrue` - `filter=cycle_type%3D%3DDAILY` - `filter=active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `id` - `product_id`  One of the following directions: - `asc` - `desc`  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Subscription Plans
                ListSubscriptionPlansResponse result = apiInstance.ListSubscriptionPlans(productId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionPlansApi.ListSubscriptionPlans: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSubscriptionPlansWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Subscription Plans
    ApiResponse<ListSubscriptionPlansResponse> response = apiInstance.ListSubscriptionPlansWithHttpInfo(productId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionPlansApi.ListSubscriptionPlansWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatesubscriptionplan"></a>
# **UpdateSubscriptionPlan**
> SubscriptionPlan UpdateSubscriptionPlan (string productId, string subscriptionPlanId, UpdateSubscriptionPlanRequest updateSubscriptionPlanRequest, List<string>? updateMask = null)

Update Subscription Plan

Updates a Subscription Plan

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateSubscriptionPlanExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SubscriptionPlansApi(config);
            var productId = "productId_example";  // string | product_id
            var subscriptionPlanId = "subscriptionPlanId_example";  // string | subscription_plan_id
            var updateSubscriptionPlanRequest = new UpdateSubscriptionPlanRequest(); // UpdateSubscriptionPlanRequest | updateSubscriptionPlanRequest
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update Subscription Plan
                SubscriptionPlan result = apiInstance.UpdateSubscriptionPlan(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionPlansApi.UpdateSubscriptionPlan: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSubscriptionPlanWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update Subscription Plan
    ApiResponse<SubscriptionPlan> response = apiInstance.UpdateSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionPlansApi.UpdateSubscriptionPlanWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |
| **subscriptionPlanId** | **string** | subscription_plan_id |  |
| **updateSubscriptionPlanRequest** | [**UpdateSubscriptionPlanRequest**](UpdateSubscriptionPlanRequest.md) | updateSubscriptionPlanRequest |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**SubscriptionPlan**](SubscriptionPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

