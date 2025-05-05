# Keap.Core.V2.Api.AffiliateApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddAffiliateToProgramUsingPOST**](AffiliateApi.md#addaffiliatetoprogramusingpost) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**AddAffiliateUsingPOST**](AffiliateApi.md#addaffiliateusingpost) | **POST** /v2/affiliates | Create an Affiliate |
| [**AddCommissionProgramUsingPOST**](AffiliateApi.md#addcommissionprogramusingpost) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**AssignProductCommissionProgramUsingPOST**](AffiliateApi.md#assignproductcommissionprogramusingpost) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program |
| [**AssignSubscriptionCommissionProgramUsingPOST**](AffiliateApi.md#assignsubscriptioncommissionprogramusingpost) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program |
| [**CreateDefaultCommissionProgramUsingPOST**](AffiliateApi.md#createdefaultcommissionprogramusingpost) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program |
| [**CreateRedirectLinkUsingPOST**](AffiliateApi.md#createredirectlinkusingpost) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**DeleteAffiliateCommissionProgramUsingDELETE**](AffiliateApi.md#deleteaffiliatecommissionprogramusingdelete) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**DeleteAffiliateUsingDELETE**](AffiliateApi.md#deleteaffiliateusingdelete) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**DeleteRedirectLinkUsingDELETE**](AffiliateApi.md#deleteredirectlinkusingdelete) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**GetAffiliateCommissionTotalUsingGET**](AffiliateApi.md#getaffiliatecommissiontotalusingget) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**GetAffiliateCommissionsUsingGET**](AffiliateApi.md#getaffiliatecommissionsusingget) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**GetAffiliateUsingGET1**](AffiliateApi.md#getaffiliateusingget1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**GetCommissionProgramUsingGET**](AffiliateApi.md#getcommissionprogramusingget) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**GetRedirectLinkUsingGET**](AffiliateApi.md#getredirectlinkusingget) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**ListAffiliateCommissionProgramsUsingGET**](AffiliateApi.md#listaffiliatecommissionprogramsusingget) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**ListAffiliateLinksUsingGET**](AffiliateApi.md#listaffiliatelinksusingget) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**ListSummariesUsingGET1**](AffiliateApi.md#listsummariesusingget1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**RemoveAffiliateFromProgramUsingPOST**](AffiliateApi.md#removeaffiliatefromprogramusingpost) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**RemoveProductCommissionFromCommissionsUsingPOST**](AffiliateApi.md#removeproductcommissionfromcommissionsusingpost) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program |
| [**RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST**](AffiliateApi.md#removesubscriptionplancommissionfromcommissionsusingpost) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**UpdateAffiliateUsingPATCH**](AffiliateApi.md#updateaffiliateusingpatch) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**UpdateCommissionProgramUsingPATCH**](AffiliateApi.md#updatecommissionprogramusingpatch) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program |
| [**UpdateDefaultCommissionProgramUsingPATCH**](AffiliateApi.md#updatedefaultcommissionprogramusingpatch) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**UpdateProductCommissionProgramUsingPATCH**](AffiliateApi.md#updateproductcommissionprogramusingpatch) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**UpdateRedirectLinkUsingPATCH**](AffiliateApi.md#updateredirectlinkusingpatch) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**UpdateSubscriptionCommissionProgramUsingPATCH**](AffiliateApi.md#updatesubscriptioncommissionprogramusingpatch) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |

<a id="addaffiliatetoprogramusingpost"></a>
# **AddAffiliateToProgramUsingPOST**
> void AddAffiliateToProgramUsingPOST (string id, AffiliateAddToProgramRequest affiliateAddToProgramRequest)

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
    public class AddAffiliateToProgramUsingPOSTExample
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
                apiInstance.AddAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AddAffiliateToProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddAffiliateToProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign Affiliate to Commission program
    apiInstance.AddAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AddAffiliateToProgramUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="addaffiliateusingpost"></a>
# **AddAffiliateUsingPOST**
> RestAffiliate AddAffiliateUsingPOST (CreateAffiliateRequest? createAffiliateRequest = null)

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
    public class AddAffiliateUsingPOSTExample
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
                RestAffiliate result = apiInstance.AddAffiliateUsingPOST(createAffiliateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AddAffiliateUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddAffiliateUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate
    ApiResponse<RestAffiliate> response = apiInstance.AddAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AddAffiliateUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="addcommissionprogramusingpost"></a>
# **AddCommissionProgramUsingPOST**
> AffiliateCommissionProgramResponse AddCommissionProgramUsingPOST (CreateCommissionProgramRequest? createCommissionProgramRequest = null)

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
    public class AddCommissionProgramUsingPOSTExample
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
                AffiliateCommissionProgramResponse result = apiInstance.AddCommissionProgramUsingPOST(createCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AddCommissionProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddCommissionProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate Commission Program
    ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.AddCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AddCommissionProgramUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="assignproductcommissionprogramusingpost"></a>
# **AssignProductCommissionProgramUsingPOST**
> ProductCommissionProgram AssignProductCommissionProgramUsingPOST (string commissionProgramId, CreateProductCommissionProgramRequest? createProductCommissionProgramRequest = null)

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
    public class AssignProductCommissionProgramUsingPOSTExample
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
                ProductCommissionProgram result = apiInstance.AssignProductCommissionProgramUsingPOST(commissionProgramId, createProductCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AssignProductCommissionProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AssignProductCommissionProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign a Product Commission Program
    ApiResponse<ProductCommissionProgram> response = apiInstance.AssignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AssignProductCommissionProgramUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="assignsubscriptioncommissionprogramusingpost"></a>
# **AssignSubscriptionCommissionProgramUsingPOST**
> SubscriptionCommissionProgram AssignSubscriptionCommissionProgramUsingPOST (string commissionProgramId, CreateSubscriptionCommissionProgramRequest? createSubscriptionCommissionProgramRequest = null)

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
    public class AssignSubscriptionCommissionProgramUsingPOSTExample
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
                SubscriptionCommissionProgram result = apiInstance.AssignSubscriptionCommissionProgramUsingPOST(commissionProgramId, createSubscriptionCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AssignSubscriptionCommissionProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AssignSubscriptionCommissionProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign a Subscription Commission Program
    ApiResponse<SubscriptionCommissionProgram> response = apiInstance.AssignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AssignSubscriptionCommissionProgramUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="createdefaultcommissionprogramusingpost"></a>
# **CreateDefaultCommissionProgramUsingPOST**
> SetDefaultCommissionProgramResponse CreateDefaultCommissionProgramUsingPOST (string commissionProgramId, CreateDefaultCommissionProgramRequest? createDefaultCommissionProgramRequest = null)

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
    public class CreateDefaultCommissionProgramUsingPOSTExample
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
                SetDefaultCommissionProgramResponse result = apiInstance.CreateDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.CreateDefaultCommissionProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDefaultCommissionProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Default Commission Program
    ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.CreateDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.CreateDefaultCommissionProgramUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="createredirectlinkusingpost"></a>
# **CreateRedirectLinkUsingPOST**
> AffiliateLink CreateRedirectLinkUsingPOST (CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest)

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
    public class CreateRedirectLinkUsingPOSTExample
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
                AffiliateLink result = apiInstance.CreateRedirectLinkUsingPOST(createOrUpdateAffiliateLinkRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.CreateRedirectLinkUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateRedirectLinkUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.CreateRedirectLinkUsingPOSTWithHttpInfo(createOrUpdateAffiliateLinkRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.CreateRedirectLinkUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="deleteaffiliatecommissionprogramusingdelete"></a>
# **DeleteAffiliateCommissionProgramUsingDELETE**
> void DeleteAffiliateCommissionProgramUsingDELETE (string commissionProgramId)

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
    public class DeleteAffiliateCommissionProgramUsingDELETEExample
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
                apiInstance.DeleteAffiliateCommissionProgramUsingDELETE(commissionProgramId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateCommissionProgramUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteAffiliateCommissionProgramUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Commission Program
    apiInstance.DeleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateCommissionProgramUsingDELETEWithHttpInfo: " + e.Message);
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

<a id="deleteaffiliateusingdelete"></a>
# **DeleteAffiliateUsingDELETE**
> void DeleteAffiliateUsingDELETE (string id)

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
    public class DeleteAffiliateUsingDELETEExample
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
                apiInstance.DeleteAffiliateUsingDELETE(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteAffiliateUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Affiliate
    apiInstance.DeleteAffiliateUsingDELETEWithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateUsingDELETEWithHttpInfo: " + e.Message);
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

<a id="deleteredirectlinkusingdelete"></a>
# **DeleteRedirectLinkUsingDELETE**
> void DeleteRedirectLinkUsingDELETE (string redirectId)

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
    public class DeleteRedirectLinkUsingDELETEExample
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
                apiInstance.DeleteRedirectLinkUsingDELETE(redirectId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.DeleteRedirectLinkUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteRedirectLinkUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Affiliate Link
    apiInstance.DeleteRedirectLinkUsingDELETEWithHttpInfo(redirectId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.DeleteRedirectLinkUsingDELETEWithHttpInfo: " + e.Message);
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

<a id="getaffiliatecommissiontotalusingget"></a>
# **GetAffiliateCommissionTotalUsingGET**
> AffiliateCommissionEarned GetAffiliateCommissionTotalUsingGET (string affiliateId)

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
    public class GetAffiliateCommissionTotalUsingGETExample
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
                AffiliateCommissionEarned result = apiInstance.GetAffiliateCommissionTotalUsingGET(affiliateId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionTotalUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateCommissionTotalUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Affiliate Commission Earned and View LedgerURl for portal
    ApiResponse<AffiliateCommissionEarned> response = apiInstance.GetAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionTotalUsingGETWithHttpInfo: " + e.Message);
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

<a id="getaffiliatecommissionsusingget"></a>
# **GetAffiliateCommissionsUsingGET**
> ListAffiliateCommissionsResponse GetAffiliateCommissionsUsingGET (string affiliateId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

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
    public class GetAffiliateCommissionsUsingGETExample
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
                ListAffiliateCommissionsResponse result = apiInstance.GetAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateCommissionsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Affiliate Commission and Clawbacks
    ApiResponse<ListAffiliateCommissionsResponse> response = apiInstance.GetAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionsUsingGETWithHttpInfo: " + e.Message);
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

<a id="getaffiliateusingget1"></a>
# **GetAffiliateUsingGET1**
> RestAffiliate GetAffiliateUsingGET1 (string id)

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
    public class GetAffiliateUsingGET1Example
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
                RestAffiliate result = apiInstance.GetAffiliateUsingGET1(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetAffiliateUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Affiliate
    ApiResponse<RestAffiliate> response = apiInstance.GetAffiliateUsingGET1WithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetAffiliateUsingGET1WithHttpInfo: " + e.Message);
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

<a id="getcommissionprogramusingget"></a>
# **GetCommissionProgramUsingGET**
> AffiliateProgramV2 GetCommissionProgramUsingGET (string commissionProgramId)

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
    public class GetCommissionProgramUsingGETExample
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
                AffiliateProgramV2 result = apiInstance.GetCommissionProgramUsingGET(commissionProgramId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetCommissionProgramUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCommissionProgramUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Commission Program
    ApiResponse<AffiliateProgramV2> response = apiInstance.GetCommissionProgramUsingGETWithHttpInfo(commissionProgramId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetCommissionProgramUsingGETWithHttpInfo: " + e.Message);
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

<a id="getredirectlinkusingget"></a>
# **GetRedirectLinkUsingGET**
> AffiliateLink GetRedirectLinkUsingGET (string redirectId)

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
    public class GetRedirectLinkUsingGETExample
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
                AffiliateLink result = apiInstance.GetRedirectLinkUsingGET(redirectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetRedirectLinkUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetRedirectLinkUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.GetRedirectLinkUsingGETWithHttpInfo(redirectId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetRedirectLinkUsingGETWithHttpInfo: " + e.Message);
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

<a id="listaffiliatecommissionprogramsusingget"></a>
# **ListAffiliateCommissionProgramsUsingGET**
> ListAffiliateCommissionProgramsResponse ListAffiliateCommissionProgramsUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

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
    public class ListAffiliateCommissionProgramsUsingGETExample
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
                ListAffiliateCommissionProgramsResponse result = apiInstance.ListAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.ListAffiliateCommissionProgramsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAffiliateCommissionProgramsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Commission Programs
    ApiResponse<ListAffiliateCommissionProgramsResponse> response = apiInstance.ListAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.ListAffiliateCommissionProgramsUsingGETWithHttpInfo: " + e.Message);
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

<a id="listaffiliatelinksusingget"></a>
# **ListAffiliateLinksUsingGET**
> ListAffiliateLinksResponse ListAffiliateLinksUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

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
    public class ListAffiliateLinksUsingGETExample
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
                ListAffiliateLinksResponse result = apiInstance.ListAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.ListAffiliateLinksUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAffiliateLinksUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Links
    ApiResponse<ListAffiliateLinksResponse> response = apiInstance.ListAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.ListAffiliateLinksUsingGETWithHttpInfo: " + e.Message);
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

<a id="listsummariesusingget1"></a>
# **ListSummariesUsingGET1**
> ListAffiliateSummariesResponse ListSummariesUsingGET1 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

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
    public class ListSummariesUsingGET1Example
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
                ListAffiliateSummariesResponse result = apiInstance.ListSummariesUsingGET1(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.ListSummariesUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSummariesUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Summaries
    ApiResponse<ListAffiliateSummariesResponse> response = apiInstance.ListSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.ListSummariesUsingGET1WithHttpInfo: " + e.Message);
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

<a id="removeaffiliatefromprogramusingpost"></a>
# **RemoveAffiliateFromProgramUsingPOST**
> void RemoveAffiliateFromProgramUsingPOST (string id, AffiliateRemoveFromProgramRequest affiliateRemoveFromProgramRequest)

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
    public class RemoveAffiliateFromProgramUsingPOSTExample
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
                apiInstance.RemoveAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.RemoveAffiliateFromProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveAffiliateFromProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove an Affiliate from a Commission Program
    apiInstance.RemoveAffiliateFromProgramUsingPOSTWithHttpInfo(id, affiliateRemoveFromProgramRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.RemoveAffiliateFromProgramUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="removeproductcommissionfromcommissionsusingpost"></a>
# **RemoveProductCommissionFromCommissionsUsingPOST**
> void RemoveProductCommissionFromCommissionsUsingPOST (string commissionId, DeleteProgramCommissionRequest deleteProgramCommissionRequest)

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
    public class RemoveProductCommissionFromCommissionsUsingPOSTExample
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
                apiInstance.RemoveProductCommissionFromCommissionsUsingPOST(commissionId, deleteProgramCommissionRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.RemoveProductCommissionFromCommissionsUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveProductCommissionFromCommissionsUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a Product from a Commission Program
    apiInstance.RemoveProductCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteProgramCommissionRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.RemoveProductCommissionFromCommissionsUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="removesubscriptionplancommissionfromcommissionsusingpost"></a>
# **RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST**
> void RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST (string commissionId, DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest)

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
    public class RemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTExample
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
                apiInstance.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a Subscription from a Commission Program
    apiInstance.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo: " + e.Message);
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

<a id="updateaffiliateusingpatch"></a>
# **UpdateAffiliateUsingPATCH**
> RestAffiliate UpdateAffiliateUsingPATCH (string id, UpdateAffiliateRequest? updateAffiliateRequest = null)

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
    public class UpdateAffiliateUsingPATCHExample
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
                RestAffiliate result = apiInstance.UpdateAffiliateUsingPATCH(id, updateAffiliateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateAffiliateUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateAffiliateUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Affiliate
    ApiResponse<RestAffiliate> response = apiInstance.UpdateAffiliateUsingPATCHWithHttpInfo(id, updateAffiliateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateAffiliateUsingPATCHWithHttpInfo: " + e.Message);
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

<a id="updatecommissionprogramusingpatch"></a>
# **UpdateCommissionProgramUsingPATCH**
> AffiliateCommissionProgramResponse UpdateCommissionProgramUsingPATCH (string commissionProgramId, UpdateCommissionProgramRequest updateCommissionProgramRequest, List<string>? updateMask = null)

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
    public class UpdateCommissionProgramUsingPATCHExample
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
                AffiliateCommissionProgramResponse result = apiInstance.UpdateCommissionProgramUsingPATCH(commissionProgramId, updateCommissionProgramRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateCommissionProgramUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateCommissionProgramUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Affiliate Commission Program
    ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.UpdateCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateCommissionProgramUsingPATCHWithHttpInfo: " + e.Message);
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

<a id="updatedefaultcommissionprogramusingpatch"></a>
# **UpdateDefaultCommissionProgramUsingPATCH**
> SetDefaultCommissionProgramResponse UpdateDefaultCommissionProgramUsingPATCH (string commissionProgramId, List<string>? updateMask = null, UpdateDefaultCommissionProgramRequest? updateDefaultCommissionProgramRequest = null)

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
    public class UpdateDefaultCommissionProgramUsingPATCHExample
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
                SetDefaultCommissionProgramResponse result = apiInstance.UpdateDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateDefaultCommissionProgramUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateDefaultCommissionProgramUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Default Commission Program
    ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.UpdateDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateDefaultCommissionProgramUsingPATCHWithHttpInfo: " + e.Message);
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

<a id="updateproductcommissionprogramusingpatch"></a>
# **UpdateProductCommissionProgramUsingPATCH**
> ProductCommissionProgram UpdateProductCommissionProgramUsingPATCH (string commissionProgramId, List<string>? updateMask = null, UpdateProductCommissionProgramRequest? updateProductCommissionProgramRequest = null)

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
    public class UpdateProductCommissionProgramUsingPATCHExample
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
                ProductCommissionProgram result = apiInstance.UpdateProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateProductCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateProductCommissionProgramUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateProductCommissionProgramUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Product Commission Program
    ApiResponse<ProductCommissionProgram> response = apiInstance.UpdateProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateProductCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateProductCommissionProgramUsingPATCHWithHttpInfo: " + e.Message);
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

<a id="updateredirectlinkusingpatch"></a>
# **UpdateRedirectLinkUsingPATCH**
> AffiliateLink UpdateRedirectLinkUsingPATCH (string redirectId, CreateOrUpdateAffiliateLinkRequest createOrUpdateAffiliateLinkRequest)

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
    public class UpdateRedirectLinkUsingPATCHExample
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
                AffiliateLink result = apiInstance.UpdateRedirectLinkUsingPATCH(redirectId, createOrUpdateAffiliateLinkRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateRedirectLinkUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateRedirectLinkUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.UpdateRedirectLinkUsingPATCHWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateRedirectLinkUsingPATCHWithHttpInfo: " + e.Message);
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

<a id="updatesubscriptioncommissionprogramusingpatch"></a>
# **UpdateSubscriptionCommissionProgramUsingPATCH**
> SubscriptionCommissionProgram UpdateSubscriptionCommissionProgramUsingPATCH (string commissionProgramId, List<string>? updateMask = null, UpdateSubscriptionCommissionProgramRequest? updateSubscriptionCommissionProgramRequest = null)

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
    public class UpdateSubscriptionCommissionProgramUsingPATCHExample
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
                SubscriptionCommissionProgram result = apiInstance.UpdateSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateSubscriptionCommissionProgramUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSubscriptionCommissionProgramUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription Commission Program
    ApiResponse<SubscriptionCommissionProgram> response = apiInstance.UpdateSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateSubscriptionCommissionProgramUsingPATCHWithHttpInfo: " + e.Message);
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

