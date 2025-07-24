# Keap.Core.V2.Api.CategoryDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateCategoryDiscount**](CategoryDiscountsApi.md#createcategorydiscount) | **POST** /v2/discounts/productCategories | Create a Category Discount |
| [**DeleteCategoryDiscount**](CategoryDiscountsApi.md#deletecategorydiscount) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount |
| [**GetCategoryDiscount**](CategoryDiscountsApi.md#getcategorydiscount) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount |
| [**ListCategoryDiscounts**](CategoryDiscountsApi.md#listcategorydiscounts) | **GET** /v2/discounts/productCategories | List Category Discounts |
| [**UpdateCategoryDiscount**](CategoryDiscountsApi.md#updatecategorydiscount) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount |

<a id="createcategorydiscount"></a>
# **CreateCategoryDiscount**
> CategoryDiscount CreateCategoryDiscount (CreateCategoryDiscountRequest createCategoryDiscountRequest)

Create a Category Discount

Creates a Category Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateCategoryDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new CategoryDiscountsApi(config);
            var createCategoryDiscountRequest = new CreateCategoryDiscountRequest(); // CreateCategoryDiscountRequest | request

            try
            {
                // Create a Category Discount
                CategoryDiscount result = apiInstance.CreateCategoryDiscount(createCategoryDiscountRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CategoryDiscountsApi.CreateCategoryDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateCategoryDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Category Discount
    ApiResponse<CategoryDiscount> response = apiInstance.CreateCategoryDiscountWithHttpInfo(createCategoryDiscountRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CategoryDiscountsApi.CreateCategoryDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCategoryDiscountRequest** | [**CreateCategoryDiscountRequest**](CreateCategoryDiscountRequest.md) | request |  |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

<a id="deletecategorydiscount"></a>
# **DeleteCategoryDiscount**
> void DeleteCategoryDiscount (string discountId)

Delete a Category Discount

Deletes a specified Category Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteCategoryDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new CategoryDiscountsApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Delete a Category Discount
                apiInstance.DeleteCategoryDiscount(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CategoryDiscountsApi.DeleteCategoryDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteCategoryDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Category Discount
    apiInstance.DeleteCategoryDiscountWithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CategoryDiscountsApi.DeleteCategoryDiscountWithHttpInfo: " + e.Message);
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

<a id="getcategorydiscount"></a>
# **GetCategoryDiscount**
> CategoryDiscount GetCategoryDiscount (string discountId)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetCategoryDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new CategoryDiscountsApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Retrieve a Category Discount
                CategoryDiscount result = apiInstance.GetCategoryDiscount(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CategoryDiscountsApi.GetCategoryDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCategoryDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Category Discount
    ApiResponse<CategoryDiscount> response = apiInstance.GetCategoryDiscountWithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CategoryDiscountsApi.GetCategoryDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

<a id="listcategorydiscounts"></a>
# **ListCategoryDiscounts**
> ListCategoryDiscountsResponse ListCategoryDiscounts (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Category Discounts

Retrieves a list of Category Discounts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListCategoryDiscountsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new CategoryDiscountsApi(config);
            var filter = "filter_example";  // string? | Filter to apply, the allowed field is: - (String) `product_category_id`  You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `id` - `name`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Category Discounts
                ListCategoryDiscountsResponse result = apiInstance.ListCategoryDiscounts(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CategoryDiscountsApi.ListCategoryDiscounts: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListCategoryDiscountsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Category Discounts
    ApiResponse<ListCategoryDiscountsResponse> response = apiInstance.ListCategoryDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CategoryDiscountsApi.ListCategoryDiscountsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, the allowed field is: - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListCategoryDiscountsResponse**](ListCategoryDiscountsResponse.md)

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

<a id="updatecategorydiscount"></a>
# **UpdateCategoryDiscount**
> CategoryDiscount UpdateCategoryDiscount (string discountId, UpdateCategoryDiscountRequest updateCategoryDiscountRequest, List<string>? updateMask = null)

Update a Category Discount

Updates a Category Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateCategoryDiscountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new CategoryDiscountsApi(config);
            var discountId = "discountId_example";  // string | discount_id
            var updateCategoryDiscountRequest = new UpdateCategoryDiscountRequest(); // UpdateCategoryDiscountRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Category Discount
                CategoryDiscount result = apiInstance.UpdateCategoryDiscount(discountId, updateCategoryDiscountRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CategoryDiscountsApi.UpdateCategoryDiscount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateCategoryDiscountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Category Discount
    ApiResponse<CategoryDiscount> response = apiInstance.UpdateCategoryDiscountWithHttpInfo(discountId, updateCategoryDiscountRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CategoryDiscountsApi.UpdateCategoryDiscountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |
| **updateCategoryDiscountRequest** | [**UpdateCategoryDiscountRequest**](UpdateCategoryDiscountRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

