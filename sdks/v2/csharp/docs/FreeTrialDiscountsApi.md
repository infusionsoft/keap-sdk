# Keap.Core.V2.Api.FreeTrialDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateDiscountUsingPOST1**](FreeTrialDiscountsApi.md#creatediscountusingpost1) | **POST** /v2/discounts/freeTrials | Create a Subscription Free Trial Discount |
| [**DeleteDiscountUsingDELETE1**](FreeTrialDiscountsApi.md#deletediscountusingdelete1) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Subscription Free Trial Discount |
| [**GetDiscountUsingGET1**](FreeTrialDiscountsApi.md#getdiscountusingget1) | **GET** /v2/discounts/freeTrials/{discount_id} | Retrieve a Subscription Free Trial Discount |
| [**ListFreeTrialsUsingGET**](FreeTrialDiscountsApi.md#listfreetrialsusingget) | **GET** /v2/discounts/freeTrials | List all Subscription Free Trial Discounts |
| [**UpdateDiscountUsingPATCH1**](FreeTrialDiscountsApi.md#updatediscountusingpatch1) | **PATCH** /v2/discounts/freeTrials/{discount_id} | Update a Subscription Free Trial Discount |

<a id="creatediscountusingpost1"></a>
# **CreateDiscountUsingPOST1**
> FreeTrialDiscount CreateDiscountUsingPOST1 (CreateFreeTrialDiscountRequest createFreeTrialDiscountRequest)

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
    public class CreateDiscountUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new FreeTrialDiscountsApi(config);
            var createFreeTrialDiscountRequest = new CreateFreeTrialDiscountRequest(); // CreateFreeTrialDiscountRequest | createFreeTrialDiscountRequest

            try
            {
                // Create a Subscription Free Trial Discount
                FreeTrialDiscount result = apiInstance.CreateDiscountUsingPOST1(createFreeTrialDiscountRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountsApi.CreateDiscountUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDiscountUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Subscription Free Trial Discount
    ApiResponse<FreeTrialDiscount> response = apiInstance.CreateDiscountUsingPOST1WithHttpInfo(createFreeTrialDiscountRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountsApi.CreateDiscountUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createFreeTrialDiscountRequest** | [**CreateFreeTrialDiscountRequest**](CreateFreeTrialDiscountRequest.md) | createFreeTrialDiscountRequest |  |

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

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

<a id="deletediscountusingdelete1"></a>
# **DeleteDiscountUsingDELETE1**
> void DeleteDiscountUsingDELETE1 (string discountId)

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
    public class DeleteDiscountUsingDELETE1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new FreeTrialDiscountsApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Delete a Subscription Free Trial Discount
                apiInstance.DeleteDiscountUsingDELETE1(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountsApi.DeleteDiscountUsingDELETE1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteDiscountUsingDELETE1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Subscription Free Trial Discount
    apiInstance.DeleteDiscountUsingDELETE1WithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountsApi.DeleteDiscountUsingDELETE1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

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

<a id="getdiscountusingget1"></a>
# **GetDiscountUsingGET1**
> FreeTrialDiscount GetDiscountUsingGET1 (string discountId)

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
    public class GetDiscountUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new FreeTrialDiscountsApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Retrieve a Subscription Free Trial Discount
                FreeTrialDiscount result = apiInstance.GetDiscountUsingGET1(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountsApi.GetDiscountUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDiscountUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Subscription Free Trial Discount
    ApiResponse<FreeTrialDiscount> response = apiInstance.GetDiscountUsingGET1WithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountsApi.GetDiscountUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

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

<a id="listfreetrialsusingget"></a>
# **ListFreeTrialsUsingGET**
> ListFreeTrialDiscountsResponse ListFreeTrialsUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

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
    public class ListFreeTrialsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new FreeTrialDiscountsApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (Integer) `free_trial_days` - (Boolean) `hide_price` - (String) `subscription_plan_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=free_trial_days%3D%3D14` - `filter=hide_price%3D%3DTrue` - `filter=subscription_plan_id%3D%3DmySubscriptionPlanId` - `filter=free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `free_trial_days` - `hide_price` - `id` - `name` - `subscription_plan_id`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List all Subscription Free Trial Discounts
                ListFreeTrialDiscountsResponse result = apiInstance.ListFreeTrialsUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountsApi.ListFreeTrialsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListFreeTrialsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all Subscription Free Trial Discounts
    ApiResponse<ListFreeTrialDiscountsResponse> response = apiInstance.ListFreeTrialsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountsApi.ListFreeTrialsUsingGETWithHttpInfo: " + e.Message);
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

<a id="updatediscountusingpatch1"></a>
# **UpdateDiscountUsingPATCH1**
> FreeTrialDiscount UpdateDiscountUsingPATCH1 (string discountId, UpdateFreeTrialDiscountRequest updateFreeTrialDiscountRequest, List<string>? updateMask = null)

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
    public class UpdateDiscountUsingPATCH1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new FreeTrialDiscountsApi(config);
            var discountId = "discountId_example";  // string | discount_id
            var updateFreeTrialDiscountRequest = new UpdateFreeTrialDiscountRequest(); // UpdateFreeTrialDiscountRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Subscription Free Trial Discount
                FreeTrialDiscount result = apiInstance.UpdateDiscountUsingPATCH1(discountId, updateFreeTrialDiscountRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountsApi.UpdateDiscountUsingPATCH1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateDiscountUsingPATCH1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription Free Trial Discount
    ApiResponse<FreeTrialDiscount> response = apiInstance.UpdateDiscountUsingPATCH1WithHttpInfo(discountId, updateFreeTrialDiscountRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountsApi.UpdateDiscountUsingPATCH1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |
| **updateFreeTrialDiscountRequest** | [**UpdateFreeTrialDiscountRequest**](UpdateFreeTrialDiscountRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**FreeTrialDiscount**](FreeTrialDiscount.md)

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

