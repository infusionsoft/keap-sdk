# Keap.Core.V2.Api.TagsApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ApplyTagsUsingPOST**](TagsApi.md#applytagsusingpost) | **POST** /v2/tags/{tag_id}/contacts:applyTags | Apply Tag |
| [**CreateTagCategoryUsingPOST1**](TagsApi.md#createtagcategoryusingpost1) | **POST** /v2/tags/categories | Create Tag Category |
| [**CreateTagUsingPOST1**](TagsApi.md#createtagusingpost1) | **POST** /v2/tags | Create Tag |
| [**DeleteTagCategoryUsingDELETE**](TagsApi.md#deletetagcategoryusingdelete) | **DELETE** /v2/tags/categories/{tag_category_id} | Delete Tag Category |
| [**DeleteTagUsingDELETE**](TagsApi.md#deletetagusingdelete) | **DELETE** /v2/tags/{tag_id} | Delete Tag |
| [**GetCategoryUsingGET**](TagsApi.md#getcategoryusingget) | **GET** /v2/tags/categories/{tag_category_id} | Retrieve a Tag Category |
| [**GetTagUsingGET1**](TagsApi.md#gettagusingget1) | **GET** /v2/tags/{tag_id} | Retrieve a Tag |
| [**ListCompaniesForTagIdUsingGET1**](TagsApi.md#listcompaniesfortagidusingget1) | **GET** /v2/tags/{tag_id}/companies | List Tagged Companies |
| [**ListContactsWithTagIdUsingGET**](TagsApi.md#listcontactswithtagidusingget) | **GET** /v2/tags/{tag_id}/contacts | List Tagged Contacts |
| [**ListTagCategoriesUsingGET**](TagsApi.md#listtagcategoriesusingget) | **GET** /v2/tags/categories | List Tag Categories |
| [**ListTagsUsingGET1**](TagsApi.md#listtagsusingget1) | **GET** /v2/tags | List Tags |
| [**RemoveTagsUsingPOST**](TagsApi.md#removetagsusingpost) | **POST** /v2/tags/{tag_id}/contacts:removeTags | Remove Tags |
| [**UpdateTagCategoryUsingPATCH**](TagsApi.md#updatetagcategoryusingpatch) | **PATCH** /v2/tags/categories/{tag_category_id} | Update a Tag Category |
| [**UpdateTagUsingPATCH**](TagsApi.md#updatetagusingpatch) | **PATCH** /v2/tags/{tag_id} | Update a Tag |

<a id="applytagsusingpost"></a>
# **ApplyTagsUsingPOST**
> ApplyTagsResponse ApplyTagsUsingPOST (string tagId, ApplyRemoveTagRequest applyRemoveTagRequest)

Apply Tag

Applies a Tag to a list of Contacts.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ApplyTagsUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var tagId = "tagId_example";  // string | tag_id
            var applyRemoveTagRequest = new ApplyRemoveTagRequest(); // ApplyRemoveTagRequest | applyRemoveTagRequest

            try
            {
                // Apply Tag
                ApplyTagsResponse result = apiInstance.ApplyTagsUsingPOST(tagId, applyRemoveTagRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.ApplyTagsUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ApplyTagsUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Apply Tag
    ApiResponse<ApplyTagsResponse> response = apiInstance.ApplyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.ApplyTagsUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tagId** | **string** | tag_id |  |
| **applyRemoveTagRequest** | [**ApplyRemoveTagRequest**](ApplyRemoveTagRequest.md) | applyRemoveTagRequest |  |

### Return type

[**ApplyTagsResponse**](ApplyTagsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createtagcategoryusingpost1"></a>
# **CreateTagCategoryUsingPOST1**
> Tag CreateTagCategoryUsingPOST1 (CreateUpdateTagCategoryRequest createUpdateTagCategoryRequest)

Create Tag Category

Creates a new Tag Category.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateTagCategoryUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var createUpdateTagCategoryRequest = new CreateUpdateTagCategoryRequest(); // CreateUpdateTagCategoryRequest | request

            try
            {
                // Create Tag Category
                Tag result = apiInstance.CreateTagCategoryUsingPOST1(createUpdateTagCategoryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.CreateTagCategoryUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateTagCategoryUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Tag Category
    ApiResponse<Tag> response = apiInstance.CreateTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.CreateTagCategoryUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createUpdateTagCategoryRequest** | [**CreateUpdateTagCategoryRequest**](CreateUpdateTagCategoryRequest.md) | request |  |

### Return type

[**Tag**](Tag.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createtagusingpost1"></a>
# **CreateTagUsingPOST1**
> Tag CreateTagUsingPOST1 (CreateUpdateTagRequest createUpdateTagRequest)

Create Tag

Creates a new Tag

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateTagUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var createUpdateTagRequest = new CreateUpdateTagRequest(); // CreateUpdateTagRequest | tag

            try
            {
                // Create Tag
                Tag result = apiInstance.CreateTagUsingPOST1(createUpdateTagRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.CreateTagUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateTagUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Tag
    ApiResponse<Tag> response = apiInstance.CreateTagUsingPOST1WithHttpInfo(createUpdateTagRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.CreateTagUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createUpdateTagRequest** | [**CreateUpdateTagRequest**](CreateUpdateTagRequest.md) | tag |  |

### Return type

[**Tag**](Tag.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletetagcategoryusingdelete"></a>
# **DeleteTagCategoryUsingDELETE**
> void DeleteTagCategoryUsingDELETE (string tagCategoryId)

Delete Tag Category

Deletes the specified Tag Category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteTagCategoryUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var tagCategoryId = "tagCategoryId_example";  // string | tag_category_id

            try
            {
                // Delete Tag Category
                apiInstance.DeleteTagCategoryUsingDELETE(tagCategoryId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.DeleteTagCategoryUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteTagCategoryUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Tag Category
    apiInstance.DeleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.DeleteTagCategoryUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tagCategoryId** | **string** | tag_category_id |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletetagusingdelete"></a>
# **DeleteTagUsingDELETE**
> void DeleteTagUsingDELETE (string tagId)

Delete Tag

Deletes a Tag.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteTagUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var tagId = "tagId_example";  // string | tag_id

            try
            {
                // Delete Tag
                apiInstance.DeleteTagUsingDELETE(tagId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.DeleteTagUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteTagUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Tag
    apiInstance.DeleteTagUsingDELETEWithHttpInfo(tagId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.DeleteTagUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tagId** | **string** | tag_id |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcategoryusingget"></a>
# **GetCategoryUsingGET**
> GetTagCategoryResponse GetCategoryUsingGET (string tagCategoryId)

Retrieve a Tag Category

Returns information about the specified Tag Category

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetCategoryUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var tagCategoryId = "tagCategoryId_example";  // string | tag_category_id

            try
            {
                // Retrieve a Tag Category
                GetTagCategoryResponse result = apiInstance.GetCategoryUsingGET(tagCategoryId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.GetCategoryUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCategoryUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Tag Category
    ApiResponse<GetTagCategoryResponse> response = apiInstance.GetCategoryUsingGETWithHttpInfo(tagCategoryId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.GetCategoryUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tagCategoryId** | **string** | tag_category_id |  |

### Return type

[**GetTagCategoryResponse**](GetTagCategoryResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="gettagusingget1"></a>
# **GetTagUsingGET1**
> Tag GetTagUsingGET1 (string tagId)

Retrieve a Tag

Retrieves information about the specified Tag

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetTagUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var tagId = "tagId_example";  // string | tag_id

            try
            {
                // Retrieve a Tag
                Tag result = apiInstance.GetTagUsingGET1(tagId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.GetTagUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetTagUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Tag
    ApiResponse<Tag> response = apiInstance.GetTagUsingGET1WithHttpInfo(tagId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.GetTagUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tagId** | **string** | tag_id |  |

### Return type

[**Tag**](Tag.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listcompaniesfortagidusingget1"></a>
# **ListCompaniesForTagIdUsingGET1**
> ListTaggedCompaniesResponse ListCompaniesForTagIdUsingGET1 (string tagId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Tagged Companies

Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListCompaniesForTagIdUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var tagId = "tagId_example";  // string | tag_id
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Tagged Companies
                ListTaggedCompaniesResponse result = apiInstance.ListCompaniesForTagIdUsingGET1(tagId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.ListCompaniesForTagIdUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListCompaniesForTagIdUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Tagged Companies
    ApiResponse<ListTaggedCompaniesResponse> response = apiInstance.ListCompaniesForTagIdUsingGET1WithHttpInfo(tagId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.ListCompaniesForTagIdUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tagId** | **string** | tag_id |  |
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListTaggedCompaniesResponse**](ListTaggedCompaniesResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listcontactswithtagidusingget"></a>
# **ListContactsWithTagIdUsingGET**
> ListTaggedContactsResponse ListContactsWithTagIdUsingGET (string tagId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Tagged Contacts

Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListContactsWithTagIdUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var tagId = "tagId_example";  // string | tag_id
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Tagged Contacts
                ListTaggedContactsResponse result = apiInstance.ListContactsWithTagIdUsingGET(tagId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.ListContactsWithTagIdUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListContactsWithTagIdUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Tagged Contacts
    ApiResponse<ListTaggedContactsResponse> response = apiInstance.ListContactsWithTagIdUsingGETWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.ListContactsWithTagIdUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tagId** | **string** | tag_id |  |
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListTaggedContactsResponse**](ListTaggedContactsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listtagcategoriesusingget"></a>
# **ListTagCategoriesUsingGET**
> ListTagCategoriesResponse ListTagCategoriesUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Tag Categories

Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListTagCategoriesUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Tag Categories
                ListTagCategoriesResponse result = apiInstance.ListTagCategoriesUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.ListTagCategoriesUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListTagCategoriesUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Tag Categories
    ApiResponse<ListTagCategoriesResponse> response = apiInstance.ListTagCategoriesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.ListTagCategoriesUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListTagCategoriesResponse**](ListTagCategoriesResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listtagsusingget1"></a>
# **ListTagsUsingGET1**
> ListTagsResponse ListTagsUsingGET1 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Tags

Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListTagsUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Tags
                ListTagsResponse result = apiInstance.ListTagsUsingGET1(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.ListTagsUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListTagsUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Tags
    ApiResponse<ListTagsResponse> response = apiInstance.ListTagsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.ListTagsUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListTagsResponse**](ListTagsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removetagsusingpost"></a>
# **RemoveTagsUsingPOST**
> void RemoveTagsUsingPOST (string tagId, ApplyRemoveTagRequest applyRemoveTagRequest)

Remove Tags

Removes a Tag from a list of Contacts.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RemoveTagsUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var tagId = "tagId_example";  // string | tag_id
            var applyRemoveTagRequest = new ApplyRemoveTagRequest(); // ApplyRemoveTagRequest | applyRemoveTagRequest

            try
            {
                // Remove Tags
                apiInstance.RemoveTagsUsingPOST(tagId, applyRemoveTagRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.RemoveTagsUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveTagsUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove Tags
    apiInstance.RemoveTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.RemoveTagsUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tagId** | **string** | tag_id |  |
| **applyRemoveTagRequest** | [**ApplyRemoveTagRequest**](ApplyRemoveTagRequest.md) | applyRemoveTagRequest |  |

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
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatetagcategoryusingpatch"></a>
# **UpdateTagCategoryUsingPATCH**
> UpdateTagCategoryResponse UpdateTagCategoryUsingPATCH (string tagCategoryId, List<string>? updateMask = null, CreateUpdateTagCategoryRequest? createUpdateTagCategoryRequest = null)

Update a Tag Category

Updates a Tag Category with only the values provided in the request

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateTagCategoryUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var tagCategoryId = "tagCategoryId_example";  // string | tag_category_id
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var createUpdateTagCategoryRequest = new CreateUpdateTagCategoryRequest?(); // CreateUpdateTagCategoryRequest? | tagCategory (optional) 

            try
            {
                // Update a Tag Category
                UpdateTagCategoryResponse result = apiInstance.UpdateTagCategoryUsingPATCH(tagCategoryId, updateMask, createUpdateTagCategoryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.UpdateTagCategoryUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateTagCategoryUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Tag Category
    ApiResponse<UpdateTagCategoryResponse> response = apiInstance.UpdateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, updateMask, createUpdateTagCategoryRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.UpdateTagCategoryUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tagCategoryId** | **string** | tag_category_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **createUpdateTagCategoryRequest** | [**CreateUpdateTagCategoryRequest?**](CreateUpdateTagCategoryRequest?.md) | tagCategory | [optional]  |

### Return type

[**UpdateTagCategoryResponse**](UpdateTagCategoryResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatetagusingpatch"></a>
# **UpdateTagUsingPATCH**
> UpdateTagResponse UpdateTagUsingPATCH (string tagId, List<string>? updateMask = null, CreateUpdateTagRequest? createUpdateTagRequest = null)

Update a Tag

Updates a Tag with only the values provided in the request

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateTagUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new TagsApi(config);
            var tagId = "tagId_example";  // string | tag_id
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var createUpdateTagRequest = new CreateUpdateTagRequest?(); // CreateUpdateTagRequest? | tag (optional) 

            try
            {
                // Update a Tag
                UpdateTagResponse result = apiInstance.UpdateTagUsingPATCH(tagId, updateMask, createUpdateTagRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TagsApi.UpdateTagUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateTagUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Tag
    ApiResponse<UpdateTagResponse> response = apiInstance.UpdateTagUsingPATCHWithHttpInfo(tagId, updateMask, createUpdateTagRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TagsApi.UpdateTagUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tagId** | **string** | tag_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **createUpdateTagRequest** | [**CreateUpdateTagRequest?**](CreateUpdateTagRequest?.md) | tag | [optional]  |

### Return type

[**UpdateTagResponse**](UpdateTagResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

