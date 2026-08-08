# Keap.Core.V2.Api.SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CancelSubscription**](SubscriptionsApi.md#cancelsubscription) | **POST** /rest/v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription |
| [**CreateSubscription**](SubscriptionsApi.md#createsubscription) | **POST** /rest/v2/subscriptions | Create Subscription |
| [**CreateSubscriptionCustomField**](SubscriptionsApi.md#createsubscriptioncustomfield) | **POST** /rest/v2/subscriptions/model/customFields | Create a Subscription Custom Field |
| [**CreateSubscriptionCustomFieldGroup**](SubscriptionsApi.md#createsubscriptioncustomfieldgroup) | **POST** /rest/v2/subscriptions/model/customFields/groups | Create a Subscription Custom Field Group |
| [**CreateSubscriptionCustomFieldTab**](SubscriptionsApi.md#createsubscriptioncustomfieldtab) | **POST** /rest/v2/subscriptions/model/customFields/tabs | Create a Subscription Custom Field Tab |
| [**DeleteSubscriptionCustomField**](SubscriptionsApi.md#deletesubscriptioncustomfield) | **DELETE** /rest/v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field |
| [**DeleteSubscriptionCustomFieldGroup**](SubscriptionsApi.md#deletesubscriptioncustomfieldgroup) | **DELETE** /rest/v2/subscriptions/model/customFields/groups/{group_id} | Delete a Subscription Custom Field Group |
| [**DeleteSubscriptionCustomFieldTab**](SubscriptionsApi.md#deletesubscriptioncustomfieldtab) | **DELETE** /rest/v2/subscriptions/model/customFields/tabs/{tab_id} | Delete a Subscription Custom Field Tab |
| [**GetSubscription**](SubscriptionsApi.md#getsubscription) | **GET** /rest/v2/subscriptions/{subscription_id} | Retrieve a Subscription |
| [**GetSubscriptionCustomFieldGroup**](SubscriptionsApi.md#getsubscriptioncustomfieldgroup) | **GET** /rest/v2/subscriptions/model/customFields/groups/{group_id} | Retrieve a Subscription Custom Field Group |
| [**GetSubscriptionCustomFieldTab**](SubscriptionsApi.md#getsubscriptioncustomfieldtab) | **GET** /rest/v2/subscriptions/model/customFields/tabs/{tab_id} | Retrieve a Subscription Custom Field Tab |
| [**InvoiceSubscription**](SubscriptionsApi.md#invoicesubscription) | **POST** /rest/v2/subscriptions/{subscription_id}:invoice | Invoice a Subscription |
| [**ListSubscriptionCustomFieldGroups**](SubscriptionsApi.md#listsubscriptioncustomfieldgroups) | **GET** /rest/v2/subscriptions/model/customFields/groups | List Subscription Custom Field Groups |
| [**ListSubscriptionCustomFieldTabs**](SubscriptionsApi.md#listsubscriptioncustomfieldtabs) | **GET** /rest/v2/subscriptions/model/customFields/tabs | List Subscription Custom Field Tabs |
| [**ListSubscriptions**](SubscriptionsApi.md#listsubscriptions) | **GET** /rest/v2/subscriptions | List Subscriptions |
| [**RetrieveSubscriptionCustomFieldModel**](SubscriptionsApi.md#retrievesubscriptioncustomfieldmodel) | **GET** /rest/v2/subscriptions/model | Retrieve Subscription Custom Field Model |
| [**UpdateSubscription**](SubscriptionsApi.md#updatesubscription) | **PATCH** /rest/v2/subscriptions/{subscription_id} | Update a Subscription |
| [**UpdateSubscriptionCustomField**](SubscriptionsApi.md#updatesubscriptioncustomfield) | **PATCH** /rest/v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field |
| [**UpdateSubscriptionCustomFieldGroup**](SubscriptionsApi.md#updatesubscriptioncustomfieldgroup) | **PATCH** /rest/v2/subscriptions/model/customFields/groups/{group_id} | Update a Subscription Custom Field Group |
| [**UpdateSubscriptionCustomFieldTab**](SubscriptionsApi.md#updatesubscriptioncustomfieldtab) | **PATCH** /rest/v2/subscriptions/model/customFields/tabs/{tab_id} | Update a Subscription Custom Field Tab |

<a id="cancelsubscription"></a>
# **CancelSubscription**
> void CancelSubscription (string subscriptionId, CancelSubscriptionRequest cancelSubscriptionRequest)

Cancel Subscription

Cancels the specified subscription

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CancelSubscriptionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var subscriptionId = "subscriptionId_example";  // string | 
            var cancelSubscriptionRequest = new CancelSubscriptionRequest(); // CancelSubscriptionRequest | 

            try
            {
                // Cancel Subscription
                apiInstance.CancelSubscription(subscriptionId, cancelSubscriptionRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.CancelSubscription: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CancelSubscriptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Cancel Subscription
    apiInstance.CancelSubscriptionWithHttpInfo(subscriptionId, cancelSubscriptionRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.CancelSubscriptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **subscriptionId** | **string** |  |  |
| **cancelSubscriptionRequest** | [**CancelSubscriptionRequest**](CancelSubscriptionRequest.md) |  |  |

### Return type

void (empty response body)

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

<a id="createsubscription"></a>
# **CreateSubscription**
> Subscription CreateSubscription (CreateSubscriptionRequest createSubscriptionRequest)

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
    public class CreateSubscriptionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var createSubscriptionRequest = new CreateSubscriptionRequest(); // CreateSubscriptionRequest | 

            try
            {
                // Create Subscription
                Subscription result = apiInstance.CreateSubscription(createSubscriptionRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.CreateSubscription: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSubscriptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Subscription
    ApiResponse<Subscription> response = apiInstance.CreateSubscriptionWithHttpInfo(createSubscriptionRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createSubscriptionRequest** | [**CreateSubscriptionRequest**](CreateSubscriptionRequest.md) |  |  |

### Return type

[**Subscription**](Subscription.md)

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

<a id="createsubscriptioncustomfield"></a>
# **CreateSubscriptionCustomField**
> CustomFieldMetaData CreateSubscriptionCustomField (CreateCustomFieldRequest createCustomFieldRequest)

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
    public class CreateSubscriptionCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 

            try
            {
                // Create a Subscription Custom Field
                CustomFieldMetaData result = apiInstance.CreateSubscriptionCustomField(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSubscriptionCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Subscription Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateSubscriptionCustomFieldWithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) |  |  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

<a id="createsubscriptioncustomfieldgroup"></a>
# **CreateSubscriptionCustomFieldGroup**
> CustomFieldGroup CreateSubscriptionCustomFieldGroup (CreateCustomFieldGroupRequest createCustomFieldGroupRequest)

Create a Subscription Custom Field Group

Creates a new custom field group for the Subscription record type. If `tab_id` is omitted, the group is added to the default 'Custom Fields' tab.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateSubscriptionCustomFieldGroupExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var createCustomFieldGroupRequest = new CreateCustomFieldGroupRequest(); // CreateCustomFieldGroupRequest | 

            try
            {
                // Create a Subscription Custom Field Group
                CustomFieldGroup result = apiInstance.CreateSubscriptionCustomFieldGroup(createCustomFieldGroupRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionCustomFieldGroup: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSubscriptionCustomFieldGroupWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Subscription Custom Field Group
    ApiResponse<CustomFieldGroup> response = apiInstance.CreateSubscriptionCustomFieldGroupWithHttpInfo(createCustomFieldGroupRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionCustomFieldGroupWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldGroupRequest** | [**CreateCustomFieldGroupRequest**](CreateCustomFieldGroupRequest.md) |  |  |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

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

<a id="createsubscriptioncustomfieldtab"></a>
# **CreateSubscriptionCustomFieldTab**
> CustomFieldTab CreateSubscriptionCustomFieldTab (CreateCustomFieldTabRequest createCustomFieldTabRequest)

Create a Subscription Custom Field Tab

Creates a new custom field tab for the Subscription record type.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateSubscriptionCustomFieldTabExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var createCustomFieldTabRequest = new CreateCustomFieldTabRequest(); // CreateCustomFieldTabRequest | 

            try
            {
                // Create a Subscription Custom Field Tab
                CustomFieldTab result = apiInstance.CreateSubscriptionCustomFieldTab(createCustomFieldTabRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionCustomFieldTab: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSubscriptionCustomFieldTabWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Subscription Custom Field Tab
    ApiResponse<CustomFieldTab> response = apiInstance.CreateSubscriptionCustomFieldTabWithHttpInfo(createCustomFieldTabRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionCustomFieldTabWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldTabRequest** | [**CreateCustomFieldTabRequest**](CreateCustomFieldTabRequest.md) |  |  |

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

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

<a id="deletesubscriptioncustomfield"></a>
# **DeleteSubscriptionCustomField**
> void DeleteSubscriptionCustomField (string customFieldId)

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
    public class DeleteSubscriptionCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var customFieldId = "customFieldId_example";  // string | 

            try
            {
                // Delete a Subscription Custom Field
                apiInstance.DeleteSubscriptionCustomField(customFieldId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.DeleteSubscriptionCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteSubscriptionCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Subscription Custom Field
    apiInstance.DeleteSubscriptionCustomFieldWithHttpInfo(customFieldId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.DeleteSubscriptionCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** |  |  |

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

<a id="deletesubscriptioncustomfieldgroup"></a>
# **DeleteSubscriptionCustomFieldGroup**
> void DeleteSubscriptionCustomFieldGroup (string groupId)

Delete a Subscription Custom Field Group

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteSubscriptionCustomFieldGroupExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var groupId = "groupId_example";  // string | 

            try
            {
                // Delete a Subscription Custom Field Group
                apiInstance.DeleteSubscriptionCustomFieldGroup(groupId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.DeleteSubscriptionCustomFieldGroup: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteSubscriptionCustomFieldGroupWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Subscription Custom Field Group
    apiInstance.DeleteSubscriptionCustomFieldGroupWithHttpInfo(groupId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.DeleteSubscriptionCustomFieldGroupWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |

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

<a id="deletesubscriptioncustomfieldtab"></a>
# **DeleteSubscriptionCustomFieldTab**
> void DeleteSubscriptionCustomFieldTab (string tabId)

Delete a Subscription Custom Field Tab

Deletes a custom field tab. Returns 409 Conflict if the tab still contains groups.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteSubscriptionCustomFieldTabExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var tabId = "tabId_example";  // string | 

            try
            {
                // Delete a Subscription Custom Field Tab
                apiInstance.DeleteSubscriptionCustomFieldTab(tabId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.DeleteSubscriptionCustomFieldTab: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteSubscriptionCustomFieldTabWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Subscription Custom Field Tab
    apiInstance.DeleteSubscriptionCustomFieldTabWithHttpInfo(tabId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.DeleteSubscriptionCustomFieldTabWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tabId** | **string** |  |  |

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

<a id="getsubscription"></a>
# **GetSubscription**
> Subscription GetSubscription (string subscriptionId)

Retrieve a Subscription

Retrieves a single subscription

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetSubscriptionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var subscriptionId = "subscriptionId_example";  // string | 

            try
            {
                // Retrieve a Subscription
                Subscription result = apiInstance.GetSubscription(subscriptionId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.GetSubscription: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSubscriptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Subscription
    ApiResponse<Subscription> response = apiInstance.GetSubscriptionWithHttpInfo(subscriptionId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.GetSubscriptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **subscriptionId** | **string** |  |  |

### Return type

[**Subscription**](Subscription.md)

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

<a id="getsubscriptioncustomfieldgroup"></a>
# **GetSubscriptionCustomFieldGroup**
> CustomFieldGroup GetSubscriptionCustomFieldGroup (string groupId)

Retrieve a Subscription Custom Field Group

Retrieves a single custom field group by id for the Subscription record type.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetSubscriptionCustomFieldGroupExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var groupId = "groupId_example";  // string | 

            try
            {
                // Retrieve a Subscription Custom Field Group
                CustomFieldGroup result = apiInstance.GetSubscriptionCustomFieldGroup(groupId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.GetSubscriptionCustomFieldGroup: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSubscriptionCustomFieldGroupWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Subscription Custom Field Group
    ApiResponse<CustomFieldGroup> response = apiInstance.GetSubscriptionCustomFieldGroupWithHttpInfo(groupId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.GetSubscriptionCustomFieldGroupWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

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

<a id="getsubscriptioncustomfieldtab"></a>
# **GetSubscriptionCustomFieldTab**
> CustomFieldTab GetSubscriptionCustomFieldTab (string tabId)

Retrieve a Subscription Custom Field Tab

Retrieves a single custom field tab by id for the Subscription record type.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetSubscriptionCustomFieldTabExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var tabId = "tabId_example";  // string | 

            try
            {
                // Retrieve a Subscription Custom Field Tab
                CustomFieldTab result = apiInstance.GetSubscriptionCustomFieldTab(tabId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.GetSubscriptionCustomFieldTab: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSubscriptionCustomFieldTabWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Subscription Custom Field Tab
    ApiResponse<CustomFieldTab> response = apiInstance.GetSubscriptionCustomFieldTabWithHttpInfo(tabId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.GetSubscriptionCustomFieldTabWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tabId** | **string** |  |  |

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

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

<a id="invoicesubscription"></a>
# **InvoiceSubscription**
> OrderV2 InvoiceSubscription (string subscriptionId)

Invoice a Subscription

Generates invoices from all cycles of a subscription that are due. Returns the most recently billed invoice.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class InvoiceSubscriptionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var subscriptionId = "subscriptionId_example";  // string | 

            try
            {
                // Invoice a Subscription
                OrderV2 result = apiInstance.InvoiceSubscription(subscriptionId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.InvoiceSubscription: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the InvoiceSubscriptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Invoice a Subscription
    ApiResponse<OrderV2> response = apiInstance.InvoiceSubscriptionWithHttpInfo(subscriptionId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.InvoiceSubscriptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **subscriptionId** | **string** |  |  |

### Return type

[**OrderV2**](OrderV2.md)

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

<a id="listsubscriptioncustomfieldgroups"></a>
# **ListSubscriptionCustomFieldGroups**
> ListCustomFieldGroupsResponse ListSubscriptionCustomFieldGroups (string? tabId = null)

List Subscription Custom Field Groups

Retrieves a list of custom field groups for the Subscription record type. Optionally filter by tab_id to scope to a specific tab.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListSubscriptionCustomFieldGroupsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var tabId = "tabId_example";  // string? | Optional tab id to scope groups to a single tab (optional) 

            try
            {
                // List Subscription Custom Field Groups
                ListCustomFieldGroupsResponse result = apiInstance.ListSubscriptionCustomFieldGroups(tabId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.ListSubscriptionCustomFieldGroups: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSubscriptionCustomFieldGroupsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Subscription Custom Field Groups
    ApiResponse<ListCustomFieldGroupsResponse> response = apiInstance.ListSubscriptionCustomFieldGroupsWithHttpInfo(tabId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.ListSubscriptionCustomFieldGroupsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tabId** | **string?** | Optional tab id to scope groups to a single tab | [optional]  |

### Return type

[**ListCustomFieldGroupsResponse**](ListCustomFieldGroupsResponse.md)

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

<a id="listsubscriptioncustomfieldtabs"></a>
# **ListSubscriptionCustomFieldTabs**
> ListCustomFieldTabsResponse ListSubscriptionCustomFieldTabs ()

List Subscription Custom Field Tabs

Retrieves a list of custom field tabs for the Subscription record type.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListSubscriptionCustomFieldTabsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);

            try
            {
                // List Subscription Custom Field Tabs
                ListCustomFieldTabsResponse result = apiInstance.ListSubscriptionCustomFieldTabs();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.ListSubscriptionCustomFieldTabs: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSubscriptionCustomFieldTabsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Subscription Custom Field Tabs
    ApiResponse<ListCustomFieldTabsResponse> response = apiInstance.ListSubscriptionCustomFieldTabsWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.ListSubscriptionCustomFieldTabsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ListCustomFieldTabsResponse**](ListCustomFieldTabsResponse.md)

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

<a id="listsubscriptions"></a>
# **ListSubscriptions**
> ListSubscriptionsResponse ListSubscriptions (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListSubscriptionsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `contact_id` - (String) `subscription_plan_id` - (String) `status` - (String) `id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `billing_amount` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (List[String]) `ids` - (List[String]) `subscription_plan_ids`  Custom fields can be filtered by their field_name (case-insensitive, as returned by GET /v2/subscriptions/model). A standard field above takes precedence over a custom field with the same name. The supported operators depend on the custom field's type: - Text-like fields (text, text area, name, email, phone, website, social security   number) and single-value choice fields with text options (dropdown, radio,   state): `==` only, with optional trailing wildcard (e.g. `_SubscriptionNote0%3D%3DValue%2A`) - Yes/No and drilldown fields: `==` only - Numeric fields (whole number, decimal, currency, percent, year, month, day of   week, user): `==`, `>`, `<`, `>=`, `<=` - Date fields: `==`, `>`, `<`, `>=`, `<=` using full ISO 8601 - Multi-select fields: `==` matches records that contain the given option Custom field filtering on non-indexed fields is supported but may be slower.  You will need to apply the `==` operator (or other supported operators), to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=subscription_plan_id%3D%3D456` - `filter=status%3D%3DActive` - `filter=id%3E5` - `filter=billing_amount%3E%3D100` - `filter=ids%3D%3D1,10,4,24` - `filter=subscription_plan_ids%3D%3D10,20,30` - `filter=contact_id%3D%3D123%3Bstatus%3D%3DActive`  Custom field examples (for custom fields with field_name `_SubscriptionNote0` and `_SubscriptionCount1`): - `filter=_SubscriptionNote0%3D%3DTest` (custom field exact match) - `filter=_SubscriptionNote0%3D%3DTest%2A` (custom field prefix wildcard) - `filter=_SubscriptionCount1%3E100` (custom field numeric comparison) - `filter=contact_id%3D%3D123%3B_SubscriptionNote0%3D%3DActive` (combined standard + custom field filter)  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `id` - `contact_id` - `subscription_plan_id` - `modification_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Subscriptions
                ListSubscriptionsResponse result = apiInstance.ListSubscriptions(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.ListSubscriptions: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSubscriptionsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Subscriptions
    ApiResponse<ListSubscriptionsResponse> response = apiInstance.ListSubscriptionsWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.ListSubscriptionsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;billing_amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (List[String]) &#x60;ids&#x60; - (List[String]) &#x60;subscription_plan_ids&#x60;  Custom fields can be filtered by their field_name (case-insensitive, as returned by GET /v2/subscriptions/model). A standard field above takes precedence over a custom field with the same name. The supported operators depend on the custom field&#39;s type: - Text-like fields (text, text area, name, email, phone, website, social security   number) and single-value choice fields with text options (dropdown, radio,   state): &#x60;&#x3D;&#x3D;&#x60; only, with optional trailing wildcard (e.g. &#x60;_SubscriptionNote0%3D%3DValue%2A&#x60;) - Yes/No and drilldown fields: &#x60;&#x3D;&#x3D;&#x60; only - Numeric fields (whole number, decimal, currency, percent, year, month, day of   week, user): &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - Date fields: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; using full ISO 8601 - Multi-select fields: &#x60;&#x3D;&#x3D;&#x60; matches records that contain the given option Custom field filtering on non-indexed fields is supported but may be slower.  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator (or other supported operators), to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3D456&#x60; - &#x60;filter&#x3D;status%3D%3DActive&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;billing_amount%3E%3D100&#x60; - &#x60;filter&#x3D;ids%3D%3D1,10,4,24&#x60; - &#x60;filter&#x3D;subscription_plan_ids%3D%3D10,20,30&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bstatus%3D%3DActive&#x60;  Custom field examples (for custom fields with field_name &#x60;_SubscriptionNote0&#x60; and &#x60;_SubscriptionCount1&#x60;): - &#x60;filter&#x3D;_SubscriptionNote0%3D%3DTest&#x60; (custom field exact match) - &#x60;filter&#x3D;_SubscriptionNote0%3D%3DTest%2A&#x60; (custom field prefix wildcard) - &#x60;filter&#x3D;_SubscriptionCount1%3E100&#x60; (custom field numeric comparison) - &#x60;filter&#x3D;contact_id%3D%3D123%3B_SubscriptionNote0%3D%3DActive&#x60; (combined standard + custom field filter)  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60; - &#x60;modification_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListSubscriptionsResponse**](ListSubscriptionsResponse.md)

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

<a id="retrievesubscriptioncustomfieldmodel"></a>
# **RetrieveSubscriptionCustomFieldModel**
> ObjectModel RetrieveSubscriptionCustomFieldModel ()

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
    public class RetrieveSubscriptionCustomFieldModelExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);

            try
            {
                // Retrieve Subscription Custom Field Model
                ObjectModel result = apiInstance.RetrieveSubscriptionCustomFieldModel();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.RetrieveSubscriptionCustomFieldModel: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveSubscriptionCustomFieldModelWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Subscription Custom Field Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveSubscriptionCustomFieldModelWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.RetrieveSubscriptionCustomFieldModelWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ObjectModel**](ObjectModel.md)

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

<a id="updatesubscription"></a>
# **UpdateSubscription**
> Subscription UpdateSubscription (string subscriptionId, UpdateSubscriptionRequest updateSubscriptionRequest, List<string>? updateMask = null)

Update a Subscription

Updates a Subscription

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateSubscriptionExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var subscriptionId = "subscriptionId_example";  // string | 
            var updateSubscriptionRequest = new UpdateSubscriptionRequest(); // UpdateSubscriptionRequest | 
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Subscription
                Subscription result = apiInstance.UpdateSubscription(subscriptionId, updateSubscriptionRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscription: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSubscriptionWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription
    ApiResponse<Subscription> response = apiInstance.UpdateSubscriptionWithHttpInfo(subscriptionId, updateSubscriptionRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **subscriptionId** | **string** |  |  |
| **updateSubscriptionRequest** | [**UpdateSubscriptionRequest**](UpdateSubscriptionRequest.md) |  |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**Subscription**](Subscription.md)

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

<a id="updatesubscriptioncustomfield"></a>
# **UpdateSubscriptionCustomField**
> CustomFieldMetaData UpdateSubscriptionCustomField (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, List<string>? updateMask = null)

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
    public class UpdateSubscriptionCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var customFieldId = "customFieldId_example";  // string | 
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Subscription Custom Field
                CustomFieldMetaData result = apiInstance.UpdateSubscriptionCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSubscriptionCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateSubscriptionCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionCustomFieldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** |  |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) |  |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

<a id="updatesubscriptioncustomfieldgroup"></a>
# **UpdateSubscriptionCustomFieldGroup**
> CustomFieldGroup UpdateSubscriptionCustomFieldGroup (string groupId, List<string> updateMask, UpdateCustomFieldGroupRequest updateCustomFieldGroupRequest)

Update a Subscription Custom Field Group

Updates an existing custom field group. Only fields listed in `update_mask` are applied.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateSubscriptionCustomFieldGroupExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var groupId = "groupId_example";  // string | 
            var updateMask = new List<string>(); // List<string> | Comma-separated list of fields to update
            var updateCustomFieldGroupRequest = new UpdateCustomFieldGroupRequest(); // UpdateCustomFieldGroupRequest | 

            try
            {
                // Update a Subscription Custom Field Group
                CustomFieldGroup result = apiInstance.UpdateSubscriptionCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionCustomFieldGroup: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSubscriptionCustomFieldGroupWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription Custom Field Group
    ApiResponse<CustomFieldGroup> response = apiInstance.UpdateSubscriptionCustomFieldGroupWithHttpInfo(groupId, updateMask, updateCustomFieldGroupRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionCustomFieldGroupWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **groupId** | **string** |  |  |
| **updateMask** | [**List&lt;string&gt;**](string.md) | Comma-separated list of fields to update |  |
| **updateCustomFieldGroupRequest** | [**UpdateCustomFieldGroupRequest**](UpdateCustomFieldGroupRequest.md) |  |  |

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

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

<a id="updatesubscriptioncustomfieldtab"></a>
# **UpdateSubscriptionCustomFieldTab**
> CustomFieldTab UpdateSubscriptionCustomFieldTab (string tabId, List<string> updateMask, UpdateCustomFieldTabRequest updateCustomFieldTabRequest)

Update a Subscription Custom Field Tab

Updates an existing custom field tab. Only fields listed in `update_mask` are applied.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateSubscriptionCustomFieldTabExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SubscriptionsApi(config);
            var tabId = "tabId_example";  // string | 
            var updateMask = new List<string>(); // List<string> | Comma-separated list of fields to update
            var updateCustomFieldTabRequest = new UpdateCustomFieldTabRequest(); // UpdateCustomFieldTabRequest | 

            try
            {
                // Update a Subscription Custom Field Tab
                CustomFieldTab result = apiInstance.UpdateSubscriptionCustomFieldTab(tabId, updateMask, updateCustomFieldTabRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionCustomFieldTab: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSubscriptionCustomFieldTabWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription Custom Field Tab
    ApiResponse<CustomFieldTab> response = apiInstance.UpdateSubscriptionCustomFieldTabWithHttpInfo(tabId, updateMask, updateCustomFieldTabRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionCustomFieldTabWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tabId** | **string** |  |  |
| **updateMask** | [**List&lt;string&gt;**](string.md) | Comma-separated list of fields to update |  |
| **updateCustomFieldTabRequest** | [**UpdateCustomFieldTabRequest**](UpdateCustomFieldTabRequest.md) |  |  |

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

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

