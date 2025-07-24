# Keap.Core.V2.Api.AffiliateApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddAffiliate**](AffiliateApi.md#addaffiliate) | **POST** /v2/affiliates | Create an Affiliate |
| [**AddAffiliateToProgram**](AffiliateApi.md#addaffiliatetoprogram) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**AddCommissionProgram**](AffiliateApi.md#addcommissionprogram) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**AssignProductCommissionProgram**](AffiliateApi.md#assignproductcommissionprogram) | **POST** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Assign a Product Commission Program |
| [**AssignSubscriptionCommissionProgram**](AffiliateApi.md#assignsubscriptioncommissionprogram) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Assign a Subscription Commission Program |
| [**CreateDefaultCommissionProgram**](AffiliateApi.md#createdefaultcommissionprogram) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Create a Default Commission Program |
| [**CreateRedirectLink**](AffiliateApi.md#createredirectlink) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**DeleteAffiliate**](AffiliateApi.md#deleteaffiliate) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**DeleteAffiliateCommissionProgram**](AffiliateApi.md#deleteaffiliatecommissionprogram) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**DeleteRedirectLink**](AffiliateApi.md#deleteredirectlink) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**GetAffiliate**](AffiliateApi.md#getaffiliate) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**GetAffiliateCommissionTotal**](AffiliateApi.md#getaffiliatecommissiontotal) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**GetAffiliateCommissions**](AffiliateApi.md#getaffiliatecommissions) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**GetCommissionProgram**](AffiliateApi.md#getcommissionprogram) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**GetRedirectLink**](AffiliateApi.md#getredirectlink) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**ListAffiliateCommissionPrograms**](AffiliateApi.md#listaffiliatecommissionprograms) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**ListAffiliateLinks**](AffiliateApi.md#listaffiliatelinks) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**ListSummaries**](AffiliateApi.md#listsummaries) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**RemoveAffiliateFromProgram**](AffiliateApi.md#removeaffiliatefromprogram) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**RemoveProductCommissionFromCommissions**](AffiliateApi.md#removeproductcommissionfromcommissions) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program |
| [**RemoveSubscriptionPlanCommissionFromCommissions**](AffiliateApi.md#removesubscriptionplancommissionfromcommissions) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**UpdateAffiliate**](AffiliateApi.md#updateaffiliate) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**UpdateCommissionProgram**](AffiliateApi.md#updatecommissionprogram) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program |
| [**UpdateDefaultCommissionProgram**](AffiliateApi.md#updatedefaultcommissionprogram) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**UpdateProductCommissionProgram**](AffiliateApi.md#updateproductcommissionprogram) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**UpdateRedirectLink**](AffiliateApi.md#updateredirectlink) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**UpdateSubscriptionCommissionProgram**](AffiliateApi.md#updatesubscriptioncommissionprogram) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |

<a id="addaffiliate"></a>
# **AddAffiliate**
> RestAffiliate AddAffiliate (CreateAffiliateRequest? createAffiliateRequest = null)

Create an Affiliate

Creates a single Affiliate

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AddAffiliateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var createAffiliateRequest = new CreateAffiliateRequest?(); // CreateAffiliateRequest? | Affiliate request to insert (optional) 

            try
            {
                // Create an Affiliate
                RestAffiliate result = apiInstance.AddAffiliate(createAffiliateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AddAffiliate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddAffiliateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate
    ApiResponse<RestAffiliate> response = apiInstance.AddAffiliateWithHttpInfo(createAffiliateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AddAffiliateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createAffiliateRequest** | [**CreateAffiliateRequest?**](CreateAffiliateRequest?.md) | Affiliate request to insert | [optional]  |

### Return type

[**RestAffiliate**](RestAffiliate.md)

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

<a id="addaffiliatetoprogram"></a>
# **AddAffiliateToProgram**
> void AddAffiliateToProgram (string id, AffiliateAddToProgramRequest affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AddAffiliateToProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var id = "id_example";  // string | id
            var affiliateAddToProgramRequest = new AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | affiliateAddToProgramRequest

            try
            {
                // Assign Affiliate to Commission program
                apiInstance.AddAffiliateToProgram(id, affiliateAddToProgramRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AddAffiliateToProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddAffiliateToProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign Affiliate to Commission program
    apiInstance.AddAffiliateToProgramWithHttpInfo(id, affiliateAddToProgramRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AddAffiliateToProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md) | affiliateAddToProgramRequest |  |

### Return type

void (empty response body)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="addcommissionprogram"></a>
# **AddCommissionProgram**
> AffiliateCommissionProgramResponse AddCommissionProgram (CreateCommissionProgramRequest? createCommissionProgramRequest = null)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AddCommissionProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var createCommissionProgramRequest = new CreateCommissionProgramRequest?(); // CreateCommissionProgramRequest? | Commission Program to insert (optional) 

            try
            {
                // Create an Affiliate Commission Program
                AffiliateCommissionProgramResponse result = apiInstance.AddCommissionProgram(createCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AddCommissionProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddCommissionProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate Commission Program
    ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.AddCommissionProgramWithHttpInfo(createCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AddCommissionProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCommissionProgramRequest** | [**CreateCommissionProgramRequest?**](CreateCommissionProgramRequest?.md) | Commission Program to insert | [optional]  |

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

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

<a id="assignproductcommissionprogram"></a>
# **AssignProductCommissionProgram**
> ProductCommissionProgram AssignProductCommissionProgram (string commissionProgramId, CreateProductCommissionProgramRequest? createProductCommissionProgramRequest = null)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AssignProductCommissionProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var createProductCommissionProgramRequest = new CreateProductCommissionProgramRequest?(); // CreateProductCommissionProgramRequest? | Product Commission Program (optional) 

            try
            {
                // Assign a Product Commission Program
                ProductCommissionProgram result = apiInstance.AssignProductCommissionProgram(commissionProgramId, createProductCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AssignProductCommissionProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AssignProductCommissionProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign a Product Commission Program
    ApiResponse<ProductCommissionProgram> response = apiInstance.AssignProductCommissionProgramWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AssignProductCommissionProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **createProductCommissionProgramRequest** | [**CreateProductCommissionProgramRequest?**](CreateProductCommissionProgramRequest?.md) | Product Commission Program | [optional]  |

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

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

<a id="assignsubscriptioncommissionprogram"></a>
# **AssignSubscriptionCommissionProgram**
> SubscriptionCommissionProgram AssignSubscriptionCommissionProgram (string commissionProgramId, CreateSubscriptionCommissionProgramRequest? createSubscriptionCommissionProgramRequest = null)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class AssignSubscriptionCommissionProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var createSubscriptionCommissionProgramRequest = new CreateSubscriptionCommissionProgramRequest?(); // CreateSubscriptionCommissionProgramRequest? | Subscription Commission Program (optional) 

            try
            {
                // Assign a Subscription Commission Program
                SubscriptionCommissionProgram result = apiInstance.AssignSubscriptionCommissionProgram(commissionProgramId, createSubscriptionCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AssignSubscriptionCommissionProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AssignSubscriptionCommissionProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign a Subscription Commission Program
    ApiResponse<SubscriptionCommissionProgram> response = apiInstance.AssignSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AssignSubscriptionCommissionProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **createSubscriptionCommissionProgramRequest** | [**CreateSubscriptionCommissionProgramRequest?**](CreateSubscriptionCommissionProgramRequest?.md) | Subscription Commission Program | [optional]  |

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

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

<a id="createdefaultcommissionprogram"></a>
# **CreateDefaultCommissionProgram**
> SetDefaultCommissionProgramResponse CreateDefaultCommissionProgram (string commissionProgramId, CreateDefaultCommissionProgramRequest? createDefaultCommissionProgramRequest = null)

Create a Default Commission Program

Creates a Default Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateDefaultCommissionProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var createDefaultCommissionProgramRequest = new CreateDefaultCommissionProgramRequest?(); // CreateDefaultCommissionProgramRequest? | Values of the Default Commission Program (optional) 

            try
            {
                // Create a Default Commission Program
                SetDefaultCommissionProgramResponse result = apiInstance.CreateDefaultCommissionProgram(commissionProgramId, createDefaultCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.CreateDefaultCommissionProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDefaultCommissionProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Default Commission Program
    ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.CreateDefaultCommissionProgramWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.CreateDefaultCommissionProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest?**](CreateDefaultCommissionProgramRequest?.md) | Values of the Default Commission Program | [optional]  |

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

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

<a id="createredirectlink"></a>
# **CreateRedirectLink**
> AffiliateLink CreateRedirectLink (CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest)

Create an Affiliate Link

Creates a single Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateRedirectLinkExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var createOrUpdateAffiliateLinkRequest = new CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | request

            try
            {
                // Create an Affiliate Link
                AffiliateLink result = apiInstance.CreateRedirectLink(createOrUpdateAffiliateLinkRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.CreateRedirectLink: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateRedirectLinkWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.CreateRedirectLinkWithHttpInfo(createOrUpdateAffiliateLinkRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.CreateRedirectLinkWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md) | request |  |

### Return type

[**AffiliateLink**](AffiliateLink.md)

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

<a id="deleteaffiliate"></a>
# **DeleteAffiliate**
> void DeleteAffiliate (string id)

Delete Affiliate

Deletes the specified Affiliate

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteAffiliateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var id = "id_example";  // string | id

            try
            {
                // Delete Affiliate
                apiInstance.DeleteAffiliate(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.DeleteAffiliate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteAffiliateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Affiliate
    apiInstance.DeleteAffiliateWithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |

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

<a id="deleteaffiliatecommissionprogram"></a>
# **DeleteAffiliateCommissionProgram**
> void DeleteAffiliateCommissionProgram (string commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteAffiliateCommissionProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id

            try
            {
                // Delete a Commission Program
                apiInstance.DeleteAffiliateCommissionProgram(commissionProgramId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateCommissionProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteAffiliateCommissionProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Commission Program
    apiInstance.DeleteAffiliateCommissionProgramWithHttpInfo(commissionProgramId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateCommissionProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |

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

<a id="deleteredirectlink"></a>
# **DeleteRedirectLink**
> void DeleteRedirectLink (string redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteRedirectLinkExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var redirectId = "redirectId_example";  // string | redirect_id

            try
            {
                // Delete an Affiliate Link
                apiInstance.DeleteRedirectLink(redirectId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.DeleteRedirectLink: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteRedirectLinkWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Affiliate Link
    apiInstance.DeleteRedirectLinkWithHttpInfo(redirectId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.DeleteRedirectLinkWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **redirectId** | **string** | redirect_id |  |

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

<a id="getaffiliate"></a>
# **GetAffiliate**
> RestAffiliate GetAffiliate (string id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetAffiliateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var id = "id_example";  // string | id

            try
            {
                // Retrieve an Affiliate
                RestAffiliate result = apiInstance.GetAffiliate(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetAffiliate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Affiliate
    ApiResponse<RestAffiliate> response = apiInstance.GetAffiliateWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetAffiliateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |

### Return type

[**RestAffiliate**](RestAffiliate.md)

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

<a id="getaffiliatecommissiontotal"></a>
# **GetAffiliateCommissionTotal**
> AffiliateCommissionEarned GetAffiliateCommissionTotal (string affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetAffiliateCommissionTotalExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var affiliateId = "affiliateId_example";  // string | affiliate_id

            try
            {
                // Retrieve Affiliate Commission Earned and View LedgerURl for portal
                AffiliateCommissionEarned result = apiInstance.GetAffiliateCommissionTotal(affiliateId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionTotal: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateCommissionTotalWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Affiliate Commission Earned and View LedgerURl for portal
    ApiResponse<AffiliateCommissionEarned> response = apiInstance.GetAffiliateCommissionTotalWithHttpInfo(affiliateId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionTotalWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **affiliateId** | **string** | affiliate_id |  |

### Return type

[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)

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

<a id="getaffiliatecommissions"></a>
# **GetAffiliateCommissions**
> ListAffiliateCommissionsResponse GetAffiliateCommissions (string affiliateId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate's Commissions and Clawbacks

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetAffiliateCommissionsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var affiliateId = "affiliateId_example";  // string | affiliate_id
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `affiliateId` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliateId%3D%3D123`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `invoice_id` - `affowed_id` - `date_earned`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // Retrieve Affiliate Commission and Clawbacks
                ListAffiliateCommissionsResponse result = apiInstance.GetAffiliateCommissions(affiliateId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissions: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateCommissionsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Affiliate Commission and Clawbacks
    ApiResponse<ListAffiliateCommissionsResponse> response = apiInstance.GetAffiliateCommissionsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **affiliateId** | **string** | affiliate_id |  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;affiliateId&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliateId%3D%3D123&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;affowed_id&#x60; - &#x60;date_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListAffiliateCommissionsResponse**](ListAffiliateCommissionsResponse.md)

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

<a id="getcommissionprogram"></a>
# **GetCommissionProgram**
> AffiliateProgramV2 GetCommissionProgram (string commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetCommissionProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id

            try
            {
                // Retrieve a Commission Program
                AffiliateProgramV2 result = apiInstance.GetCommissionProgram(commissionProgramId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetCommissionProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCommissionProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Commission Program
    ApiResponse<AffiliateProgramV2> response = apiInstance.GetCommissionProgramWithHttpInfo(commissionProgramId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetCommissionProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |

### Return type

[**AffiliateProgramV2**](AffiliateProgramV2.md)

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

<a id="getredirectlink"></a>
# **GetRedirectLink**
> AffiliateLink GetRedirectLink (string redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetRedirectLinkExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var redirectId = "redirectId_example";  // string | redirect_id

            try
            {
                // Retrieve an Affiliate Link
                AffiliateLink result = apiInstance.GetRedirectLink(redirectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetRedirectLink: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetRedirectLinkWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.GetRedirectLinkWithHttpInfo(redirectId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetRedirectLinkWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **redirectId** | **string** | redirect_id |  |

### Return type

[**AffiliateLink**](AffiliateLink.md)

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

<a id="listaffiliatecommissionprograms"></a>
# **ListAffiliateCommissionPrograms**
> ListAffiliateCommissionProgramsResponse ListAffiliateCommissionPrograms (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListAffiliateCommissionProgramsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Affiliate Commission Programs
                ListAffiliateCommissionProgramsResponse result = apiInstance.ListAffiliateCommissionPrograms(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.ListAffiliateCommissionPrograms: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAffiliateCommissionProgramsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Commission Programs
    ApiResponse<ListAffiliateCommissionProgramsResponse> response = apiInstance.ListAffiliateCommissionProgramsWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.ListAffiliateCommissionProgramsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListAffiliateCommissionProgramsResponse**](ListAffiliateCommissionProgramsResponse.md)

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

<a id="listaffiliatelinks"></a>
# **ListAffiliateLinks**
> ListAffiliateLinksResponse ListAffiliateLinks (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListAffiliateLinksExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Affiliate Links
                ListAffiliateLinksResponse result = apiInstance.ListAffiliateLinks(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.ListAffiliateLinks: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAffiliateLinksWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Links
    ApiResponse<ListAffiliateLinksResponse> response = apiInstance.ListAffiliateLinksWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.ListAffiliateLinksWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListAffiliateLinksResponse**](ListAffiliateLinksResponse.md)

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

<a id="listsummaries"></a>
# **ListSummaries**
> ListAffiliateSummariesResponse ListSummaries (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Affiliate Summaries

Retrieves a list of Affiliate Summaries

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListSummariesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `affiliate_id` - `amount_earned` - `balance` - `clawbacks`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Affiliate Summaries
                ListAffiliateSummariesResponse result = apiInstance.ListSummaries(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.ListSummaries: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSummariesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Summaries
    ApiResponse<ListAffiliateSummariesResponse> response = apiInstance.ListSummariesWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.ListSummariesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)

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

<a id="removeaffiliatefromprogram"></a>
# **RemoveAffiliateFromProgram**
> void RemoveAffiliateFromProgram (string id, AffiliateRemoveFromProgramRequest affiliateRemoveFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RemoveAffiliateFromProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var id = "id_example";  // string | id
            var affiliateRemoveFromProgramRequest = new AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | removeFromProgramRequest

            try
            {
                // Remove an Affiliate from a Commission Program
                apiInstance.RemoveAffiliateFromProgram(id, affiliateRemoveFromProgramRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.RemoveAffiliateFromProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveAffiliateFromProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove an Affiliate from a Commission Program
    apiInstance.RemoveAffiliateFromProgramWithHttpInfo(id, affiliateRemoveFromProgramRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.RemoveAffiliateFromProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **affiliateRemoveFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md) | removeFromProgramRequest |  |

### Return type

void (empty response body)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removeproductcommissionfromcommissions"></a>
# **RemoveProductCommissionFromCommissions**
> void RemoveProductCommissionFromCommissions (string commissionId, DeleteProgramCommissionRequest deleteProgramCommissionRequest)

Remove a Product from a Commission Program

Removes a Product from a Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RemoveProductCommissionFromCommissionsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionId = "commissionId_example";  // string | commission_id
            var deleteProgramCommissionRequest = new DeleteProgramCommissionRequest(); // DeleteProgramCommissionRequest | deleteProgramCommissionRequest

            try
            {
                // Remove a Product from a Commission Program
                apiInstance.RemoveProductCommissionFromCommissions(commissionId, deleteProgramCommissionRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.RemoveProductCommissionFromCommissions: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveProductCommissionFromCommissionsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a Product from a Commission Program
    apiInstance.RemoveProductCommissionFromCommissionsWithHttpInfo(commissionId, deleteProgramCommissionRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.RemoveProductCommissionFromCommissionsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionId** | **string** | commission_id |  |
| **deleteProgramCommissionRequest** | [**DeleteProgramCommissionRequest**](DeleteProgramCommissionRequest.md) | deleteProgramCommissionRequest |  |

### Return type

void (empty response body)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removesubscriptionplancommissionfromcommissions"></a>
# **RemoveSubscriptionPlanCommissionFromCommissions**
> void RemoveSubscriptionPlanCommissionFromCommissions (string commissionId, DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RemoveSubscriptionPlanCommissionFromCommissionsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionId = "commissionId_example";  // string | commission_id
            var deleteSubscriptionPlanCommissionRequest = new DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest

            try
            {
                // Remove a Subscription from a Commission Program
                apiInstance.RemoveSubscriptionPlanCommissionFromCommissions(commissionId, deleteSubscriptionPlanCommissionRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.RemoveSubscriptionPlanCommissionFromCommissions: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveSubscriptionPlanCommissionFromCommissionsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a Subscription from a Commission Program
    apiInstance.RemoveSubscriptionPlanCommissionFromCommissionsWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.RemoveSubscriptionPlanCommissionFromCommissionsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionId** | **string** | commission_id |  |
| **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md) | deleteSubscriptionPlanCommissionRequest |  |

### Return type

void (empty response body)

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
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateaffiliate"></a>
# **UpdateAffiliate**
> RestAffiliate UpdateAffiliate (string id, UpdateAffiliateRequest? updateAffiliateRequest = null)

Update an Affiliate

Updates a single Affiliate

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateAffiliateExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var id = "id_example";  // string | id
            var updateAffiliateRequest = new UpdateAffiliateRequest?(); // UpdateAffiliateRequest? | Request to update an affiliate (optional) 

            try
            {
                // Update an Affiliate
                RestAffiliate result = apiInstance.UpdateAffiliate(id, updateAffiliateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateAffiliate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateAffiliateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Affiliate
    ApiResponse<RestAffiliate> response = apiInstance.UpdateAffiliateWithHttpInfo(id, updateAffiliateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateAffiliateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **updateAffiliateRequest** | [**UpdateAffiliateRequest?**](UpdateAffiliateRequest?.md) | Request to update an affiliate | [optional]  |

### Return type

[**RestAffiliate**](RestAffiliate.md)

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

<a id="updatecommissionprogram"></a>
# **UpdateCommissionProgram**
> AffiliateCommissionProgramResponse UpdateCommissionProgram (string commissionProgramId, UpdateCommissionProgramRequest updateCommissionProgramRequest, List<string>? updateMask = null)

Update an Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateCommissionProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var updateCommissionProgramRequest = new UpdateCommissionProgramRequest(); // UpdateCommissionProgramRequest | updateCommissionProgramRequest
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Affiliate Commission Program
                AffiliateCommissionProgramResponse result = apiInstance.UpdateCommissionProgram(commissionProgramId, updateCommissionProgramRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateCommissionProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateCommissionProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Affiliate Commission Program
    ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.UpdateCommissionProgramWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateCommissionProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **updateCommissionProgramRequest** | [**UpdateCommissionProgramRequest**](UpdateCommissionProgramRequest.md) | updateCommissionProgramRequest |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

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

<a id="updatedefaultcommissionprogram"></a>
# **UpdateDefaultCommissionProgram**
> SetDefaultCommissionProgramResponse UpdateDefaultCommissionProgram (string commissionProgramId, List<string>? updateMask = null, UpdateDefaultCommissionProgramRequest? updateDefaultCommissionProgramRequest = null)

Update a Default Commission Program

Updates a Default Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateDefaultCommissionProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var updateMask = new List<string>?(); // List<string>? | update_mask (optional) 
            var updateDefaultCommissionProgramRequest = new UpdateDefaultCommissionProgramRequest?(); // UpdateDefaultCommissionProgramRequest? | Values of the default Commission Program (optional) 

            try
            {
                // Update a Default Commission Program
                SetDefaultCommissionProgramResponse result = apiInstance.UpdateDefaultCommissionProgram(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateDefaultCommissionProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateDefaultCommissionProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Default Commission Program
    ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.UpdateDefaultCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateDefaultCommissionProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | update_mask | [optional]  |
| **updateDefaultCommissionProgramRequest** | [**UpdateDefaultCommissionProgramRequest?**](UpdateDefaultCommissionProgramRequest?.md) | Values of the default Commission Program | [optional]  |

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

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

<a id="updateproductcommissionprogram"></a>
# **UpdateProductCommissionProgram**
> ProductCommissionProgram UpdateProductCommissionProgram (string commissionProgramId, List<string>? updateMask = null, UpdateProductCommissionProgramRequest? updateProductCommissionProgramRequest = null)

Update a Product Commission Program

Updates a Product Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateProductCommissionProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var updateMask = new List<string>?(); // List<string>? | update_mask (optional) 
            var updateProductCommissionProgramRequest = new UpdateProductCommissionProgramRequest?(); // UpdateProductCommissionProgramRequest? | Values of the product Commission Program (optional) 

            try
            {
                // Update a Product Commission Program
                ProductCommissionProgram result = apiInstance.UpdateProductCommissionProgram(commissionProgramId, updateMask, updateProductCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateProductCommissionProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateProductCommissionProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Product Commission Program
    ApiResponse<ProductCommissionProgram> response = apiInstance.UpdateProductCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateProductCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateProductCommissionProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | update_mask | [optional]  |
| **updateProductCommissionProgramRequest** | [**UpdateProductCommissionProgramRequest?**](UpdateProductCommissionProgramRequest?.md) | Values of the product Commission Program | [optional]  |

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

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

<a id="updateredirectlink"></a>
# **UpdateRedirectLink**
> AffiliateLink UpdateRedirectLink (string redirectId, CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest)

Update an Affiliate Link

Updates an Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateRedirectLinkExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var redirectId = "redirectId_example";  // string | redirect_id
            var createOrUpdateAffiliateLinkRequest = new CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | request

            try
            {
                // Update an Affiliate Link
                AffiliateLink result = apiInstance.UpdateRedirectLink(redirectId, createOrUpdateAffiliateLinkRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateRedirectLink: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateRedirectLinkWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.UpdateRedirectLinkWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateRedirectLinkWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **redirectId** | **string** | redirect_id |  |
| **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md) | request |  |

### Return type

[**AffiliateLink**](AffiliateLink.md)

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

<a id="updatesubscriptioncommissionprogram"></a>
# **UpdateSubscriptionCommissionProgram**
> SubscriptionCommissionProgram UpdateSubscriptionCommissionProgram (string commissionProgramId, List<string>? updateMask = null, UpdateSubscriptionCommissionProgramRequest? updateSubscriptionCommissionProgramRequest = null)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateSubscriptionCommissionProgramExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var updateMask = new List<string>?(); // List<string>? | update_mask (optional) 
            var updateSubscriptionCommissionProgramRequest = new UpdateSubscriptionCommissionProgramRequest?(); // UpdateSubscriptionCommissionProgramRequest? | Values of the subscription Commission Program (optional) 

            try
            {
                // Update a Subscription Commission Program
                SubscriptionCommissionProgram result = apiInstance.UpdateSubscriptionCommissionProgram(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateSubscriptionCommissionProgram: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSubscriptionCommissionProgramWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription Commission Program
    ApiResponse<SubscriptionCommissionProgram> response = apiInstance.UpdateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateSubscriptionCommissionProgramWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | update_mask | [optional]  |
| **updateSubscriptionCommissionProgramRequest** | [**UpdateSubscriptionCommissionProgramRequest?**](UpdateSubscriptionCommissionProgramRequest?.md) | Values of the subscription Commission Program | [optional]  |

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

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

