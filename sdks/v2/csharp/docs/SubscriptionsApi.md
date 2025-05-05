# Keap.Core.V2.Api.SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateSubscriptionCustomFieldUsingPOST**](SubscriptionsApi.md#createsubscriptioncustomfieldusingpost) | **POST** /v2/subscriptions/model/customFields | Create a Subscription Custom Field |
| [**CreateSubscriptionV2UsingPOST**](SubscriptionsApi.md#createsubscriptionv2usingpost) | **POST** /v2/subscriptions | Create Subscription |
| [**DeleteSubscriptionCustomFieldUsingDELETE**](SubscriptionsApi.md#deletesubscriptioncustomfieldusingdelete) | **DELETE** /v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field |
| [**RetrieveSubscriptionCustomFieldModelUsingGET**](SubscriptionsApi.md#retrievesubscriptioncustomfieldmodelusingget) | **GET** /v2/subscriptions/model | Retrieve Subscription Custom Field Model |
| [**UpdateSubscriptionCustomFieldUsingPATCH**](SubscriptionsApi.md#updatesubscriptioncustomfieldusingpatch) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field |

<a id="createsubscriptioncustomfieldusingpost"></a>
# **CreateSubscriptionCustomFieldUsingPOST**
> CustomFieldMetaData CreateSubscriptionCustomFieldUsingPOST (CreateCustomFieldRequest createCustomFieldRequest)

Create a Subscription Custom Field

Creates a custom field of the specified type and options to the Subscription object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateSubscriptionCustomFieldUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SubscriptionsApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create a Subscription Custom Field
                CustomFieldMetaData result = apiInstance.CreateSubscriptionCustomFieldUsingPOST(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionCustomFieldUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSubscriptionCustomFieldUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Subscription Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionCustomFieldUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) | customField |  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

<a id="createsubscriptionv2usingpost"></a>
# **CreateSubscriptionV2UsingPOST**
> RestSubscriptionV2 CreateSubscriptionV2UsingPOST (CreateSubscriptionV2 createSubscriptionV2)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateSubscriptionV2UsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SubscriptionsApi(config);
            var createSubscriptionV2 = new CreateSubscriptionV2(); // CreateSubscriptionV2 | createSubscriptionV2

            try
            {
                // Create Subscription
                RestSubscriptionV2 result = apiInstance.CreateSubscriptionV2UsingPOST(createSubscriptionV2);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionV2UsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSubscriptionV2UsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Subscription
    ApiResponse<RestSubscriptionV2> response = apiInstance.CreateSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionV2UsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createSubscriptionV2** | [**CreateSubscriptionV2**](CreateSubscriptionV2.md) | createSubscriptionV2 |  |

### Return type

[**RestSubscriptionV2**](RestSubscriptionV2.md)

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

<a id="deletesubscriptioncustomfieldusingdelete"></a>
# **DeleteSubscriptionCustomFieldUsingDELETE**
> void DeleteSubscriptionCustomFieldUsingDELETE (string customFieldId)

Delete a Subscription Custom Field

Deletes a custom field from the Subscription object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteSubscriptionCustomFieldUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SubscriptionsApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id

            try
            {
                // Delete a Subscription Custom Field
                apiInstance.DeleteSubscriptionCustomFieldUsingDELETE(customFieldId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.DeleteSubscriptionCustomFieldUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteSubscriptionCustomFieldUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Subscription Custom Field
    apiInstance.DeleteSubscriptionCustomFieldUsingDELETEWithHttpInfo(customFieldId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.DeleteSubscriptionCustomFieldUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |

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

<a id="retrievesubscriptioncustomfieldmodelusingget"></a>
# **RetrieveSubscriptionCustomFieldModelUsingGET**
> ObjectModel RetrieveSubscriptionCustomFieldModelUsingGET ()

Retrieve Subscription Custom Field Model

Get the custom fields for the Subscription object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RetrieveSubscriptionCustomFieldModelUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SubscriptionsApi(config);

            try
            {
                // Retrieve Subscription Custom Field Model
                ObjectModel result = apiInstance.RetrieveSubscriptionCustomFieldModelUsingGET();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.RetrieveSubscriptionCustomFieldModelUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Subscription Custom Field Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.RetrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ObjectModel**](ObjectModel.md)

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

<a id="updatesubscriptioncustomfieldusingpatch"></a>
# **UpdateSubscriptionCustomFieldUsingPATCH**
> CustomFieldMetaData UpdateSubscriptionCustomFieldUsingPATCH (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, List<string>? updateMask = null)

Update a Subscription Custom Field

Updates a custom field of the specified type and options to the Subscription object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateSubscriptionCustomFieldUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new SubscriptionsApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Subscription Custom Field
                CustomFieldMetaData result = apiInstance.UpdateSubscriptionCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionCustomFieldUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSubscriptionCustomFieldUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionCustomFieldUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

