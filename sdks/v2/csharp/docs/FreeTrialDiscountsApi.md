# Keap.Core.V2.Api.FreeTrialDiscountsApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateFreeTrialDiscount**](FreeTrialDiscountsApi.md#createfreetrialdiscount) | **POST** /rest/v2/discounts/freeTrials | Create a Subscription Free Trial Discount |
| [**DeleteFreeTrialDiscount**](FreeTrialDiscountsApi.md#deletefreetrialdiscount) | **DELETE** /rest/v2/discounts/freeTrials/{discount_id} | Delete a Subscription Free Trial Discount |
| [**GetFreeTrialDiscount**](FreeTrialDiscountsApi.md#getfreetrialdiscount) | **GET** /rest/v2/discounts/freeTrials/{discount_id} | Retrieve a Subscription Free Trial Discount |
| [**ListFreeTrialDiscounts**](FreeTrialDiscountsApi.md#listfreetrialdiscounts) | **GET** /rest/v2/discounts/freeTrials | List all Subscription Free Trial Discounts |
| [**UpdateFreeTrialDiscount**](FreeTrialDiscountsApi.md#updatefreetrialdiscount) | **PATCH** /rest/v2/discounts/freeTrials/{discount_id} | Update a Subscription Free Trial Discount |

<a id="createfreetrialdiscount"></a>
# **CreateFreeTrialDiscount**
> FreeTrialDiscount CreateFreeTrialDiscount (CreateFreeTrialDiscountRequest createFreeTrialDiscountRequest)

Create a Subscription Free Trial Discount

Creates a Subscription Free Trial Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateFreeTrialDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FreeTrialDiscountsApi(config);
            var createFreeTrialDiscountRequest = new CreateFreeTrialDiscountRequest(); // CreateFreeTrialDiscountRequest | 

            try
            {
                // Create a Subscription Free Trial Discount
                FreeTrialDiscount result = apiInstance.CreateFreeTrialDiscount(createFreeTrialDiscountRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountsApi.CreateFreeTrialDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateFreeTrialDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Subscription Free Trial Discount
    ApiResponse<FreeTrialDiscount> response = apiInstance.CreateFreeTrialDiscountWithHttpInfo(createFreeTrialDiscountRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountsApi.CreateFreeTrialDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createFreeTrialDiscountRequest** | [**CreateFreeTrialDiscountRequest**](CreateFreeTrialDiscountRequest.md) |  |  |

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletefreetrialdiscount"></a>
# **DeleteFreeTrialDiscount**
> void DeleteFreeTrialDiscount (string discountId)

Delete a Subscription Free Trial Discount

Deletes a specified Subscription Free Trial Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteFreeTrialDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FreeTrialDiscountsApi(config);
            var discountId = "discountId_example";  // string | 

            try
            {
                // Delete a Subscription Free Trial Discount
                apiInstance.DeleteFreeTrialDiscount(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountsApi.DeleteFreeTrialDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteFreeTrialDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Subscription Free Trial Discount
    apiInstance.DeleteFreeTrialDiscountWithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountsApi.DeleteFreeTrialDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** |  |  |

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getfreetrialdiscount"></a>
# **GetFreeTrialDiscount**
> FreeTrialDiscount GetFreeTrialDiscount (string discountId)

Retrieve a Subscription Free Trial Discount

Retrieves a Subscription Free Trial Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetFreeTrialDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FreeTrialDiscountsApi(config);
            var discountId = "discountId_example";  // string | 

            try
            {
                // Retrieve a Subscription Free Trial Discount
                FreeTrialDiscount result = apiInstance.GetFreeTrialDiscount(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountsApi.GetFreeTrialDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetFreeTrialDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Subscription Free Trial Discount
    ApiResponse<FreeTrialDiscount> response = apiInstance.GetFreeTrialDiscountWithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountsApi.GetFreeTrialDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** |  |  |

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listfreetrialdiscounts"></a>
# **ListFreeTrialDiscounts**
> ListFreeTrialDiscountsResponse ListFreeTrialDiscounts (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List all Subscription Free Trial Discounts

Retrieves a list of Subscription Free Trial Discounts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListFreeTrialDiscountsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FreeTrialDiscountsApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (Integer) `free_trial_days` - (Boolean) `hide_price` - (String) `subscription_plan_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=free_trial_days%3D%3D14` - `filter=hide_price%3D%3DTrue` - `filter=subscription_plan_id%3D%3DmySubscriptionPlanId` - `filter=free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `free_trial_days` - `hide_price` - `id` - `name` - `subscription_plan_id`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List all Subscription Free Trial Discounts
                ListFreeTrialDiscountsResponse result = apiInstance.ListFreeTrialDiscounts(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountsApi.ListFreeTrialDiscounts: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListFreeTrialDiscountsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all Subscription Free Trial Discounts
    ApiResponse<ListFreeTrialDiscountsResponse> response = apiInstance.ListFreeTrialDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountsApi.ListFreeTrialDiscountsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListFreeTrialDiscountsResponse**](ListFreeTrialDiscountsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatefreetrialdiscount"></a>
# **UpdateFreeTrialDiscount**
> FreeTrialDiscount UpdateFreeTrialDiscount (string discountId, UpdateFreeTrialDiscountRequest updateFreeTrialDiscountRequest, Object? updateMask = null)

Update a Subscription Free Trial Discount

Updates a Subscription Free Trial Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateFreeTrialDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FreeTrialDiscountsApi(config);
            var discountId = "discountId_example";  // string | 
            var updateFreeTrialDiscountRequest = new UpdateFreeTrialDiscountRequest(); // UpdateFreeTrialDiscountRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Subscription Free Trial Discount
                FreeTrialDiscount result = apiInstance.UpdateFreeTrialDiscount(discountId, updateFreeTrialDiscountRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountsApi.UpdateFreeTrialDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateFreeTrialDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription Free Trial Discount
    ApiResponse<FreeTrialDiscount> response = apiInstance.UpdateFreeTrialDiscountWithHttpInfo(discountId, updateFreeTrialDiscountRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountsApi.UpdateFreeTrialDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** |  |  |
| **updateFreeTrialDiscountRequest** | [**UpdateFreeTrialDiscountRequest**](UpdateFreeTrialDiscountRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **405** | Method Not Allowed |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

