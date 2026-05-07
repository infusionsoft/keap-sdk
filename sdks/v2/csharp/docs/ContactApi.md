# Keap.Core.V2.Api.ContactApi

All URIs are relative to *https://api.keap.com/crm*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateContact**](ContactApi.md#createcontact) | **POST** /rest/v2/contacts | Create a Contact |
| [**CreateContactCustomField**](ContactApi.md#createcontactcustomfield) | **POST** /rest/v2/contacts/model/customFields | Create a Contact Custom Field |
| [**CreateContactLinkType**](ContactApi.md#createcontactlinktype) | **POST** /rest/v2/contacts/links/types | Create a Contact Link type |
| [**DeleteContact**](ContactApi.md#deletecontact) | **DELETE** /rest/v2/contacts/{contact_id} | Delete a Contact |
| [**GetContact**](ContactApi.md#getcontact) | **GET** /rest/v2/contacts/{contact_id} | Retrieve a Contact |
| [**LinkContacts**](ContactApi.md#linkcontacts) | **POST** /rest/v2/contacts:link | Link Contacts |
| [**ListContactLinkTypes**](ContactApi.md#listcontactlinktypes) | **GET** /rest/v2/contacts/links/types | List Contact Link types |
| [**ListContactLinks**](ContactApi.md#listcontactlinks) | **GET** /rest/v2/contacts/{contact_id}/links | List Linked Contacts |
| [**ListContacts**](ContactApi.md#listcontacts) | **GET** /rest/v2/contacts | List Contacts |
| [**ListTagsForContact**](ContactApi.md#listtagsforcontact) | **GET** /rest/v2/contacts/{contact_id}/tags | List Applied Tags |
| [**RetrieveContactModel**](ContactApi.md#retrievecontactmodel) | **GET** /rest/v2/contacts/model | Retrieve Contact Model |
| [**UnlinkContacts**](ContactApi.md#unlinkcontacts) | **POST** /rest/v2/contacts:unlink | Delete Link between two Contacts |
| [**UpdateContact**](ContactApi.md#updatecontact) | **PATCH** /rest/v2/contacts/{contact_id} | Update a Contact |

<a id="createcontact"></a>
# **CreateContact**
> Contact CreateContact (CreateUpdateContactRequest createUpdateContactRequest, List<string>? fields = null, string? duplicateOption = null)

Create a Contact

Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified. Optionally accepts a `duplicate_option` query parameter which performs duplicate checking by one of the following options: `Email`, `EmailAndName`, `EmailAndNameAndCompany`. If a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the `duplicate_option` provided, a new contact record will be created. When `duplicate_option` is not specified, a new contact is always created.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateContactExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var createUpdateContactRequest = new CreateUpdateContactRequest(); // CreateUpdateContactRequest | 
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) (optional) 
            var duplicateOption = "Email";  // string? | Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found. (optional) 

            try
            {
                // Create a Contact
                Contact result = apiInstance.CreateContact(createUpdateContactRequest, fields, duplicateOption);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.CreateContact: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateContactWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Contact
    ApiResponse<Contact> response = apiInstance.CreateContactWithHttpInfo(createUpdateContactRequest, fields, duplicateOption);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.CreateContactWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createUpdateContactRequest** | [**CreateUpdateContactRequest**](CreateUpdateContactRequest.md) |  |  |
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | [optional]  |
| **duplicateOption** | **string?** | Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found. | [optional]  |

### Return type

[**Contact**](Contact.md)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createcontactcustomfield"></a>
# **CreateContactCustomField**
> CustomFieldMetaData CreateContactCustomField (CreateCustomFieldRequest createCustomFieldRequest)

Create a Contact Custom Field

Creates a custom field of the specified type and options to the Contact object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateContactCustomFieldExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | 

            try
            {
                // Create a Contact Custom Field
                CustomFieldMetaData result = apiInstance.CreateContactCustomField(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.CreateContactCustomField: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateContactCustomFieldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Contact Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateContactCustomFieldWithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.CreateContactCustomFieldWithHttpInfo: " + e.Message);
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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createcontactlinktype"></a>
# **CreateContactLinkType**
> ContactLinkType CreateContactLinkType (CreateContactLinkTypeRequest createContactLinkTypeRequest)

Create a Contact Link type

Creates a new type of Contact Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class CreateContactLinkTypeExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var createContactLinkTypeRequest = new CreateContactLinkTypeRequest(); // CreateContactLinkTypeRequest | 

            try
            {
                // Create a Contact Link type
                ContactLinkType result = apiInstance.CreateContactLinkType(createContactLinkTypeRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.CreateContactLinkType: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateContactLinkTypeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Contact Link type
    ApiResponse<ContactLinkType> response = apiInstance.CreateContactLinkTypeWithHttpInfo(createContactLinkTypeRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.CreateContactLinkTypeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createContactLinkTypeRequest** | [**CreateContactLinkTypeRequest**](CreateContactLinkTypeRequest.md) |  |  |

### Return type

[**ContactLinkType**](ContactLinkType.md)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletecontact"></a>
# **DeleteContact**
> void DeleteContact (string contactId)

Delete a Contact

Deletes the specified Contact

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class DeleteContactExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var contactId = "contactId_example";  // string | 

            try
            {
                // Delete a Contact
                apiInstance.DeleteContact(contactId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.DeleteContact: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteContactWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Contact
    apiInstance.DeleteContactWithHttpInfo(contactId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.DeleteContactWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** |  |  |

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcontact"></a>
# **GetContact**
> Contact GetContact (string contactId, List<string>? fields = null)

Retrieve a Contact

Retrieves a single Contact

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class GetContactExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var contactId = "contactId_example";  // string | 
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) (optional) 

            try
            {
                // Retrieve a Contact
                Contact result = apiInstance.GetContact(contactId, fields);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.GetContact: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetContactWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Contact
    ApiResponse<Contact> response = apiInstance.GetContactWithHttpInfo(contactId, fields);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.GetContactWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** |  |  |
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | [optional]  |

### Return type

[**Contact**](Contact.md)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="linkcontacts"></a>
# **LinkContacts**
> ContactLink LinkContacts (LinkContactsRequest linkContactsRequest)

Link Contacts

Links two Contacts together using the provided Link type

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class LinkContactsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var linkContactsRequest = new LinkContactsRequest(); // LinkContactsRequest | 

            try
            {
                // Link Contacts
                ContactLink result = apiInstance.LinkContacts(linkContactsRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.LinkContacts: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the LinkContactsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Link Contacts
    ApiResponse<ContactLink> response = apiInstance.LinkContactsWithHttpInfo(linkContactsRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.LinkContactsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **linkContactsRequest** | [**LinkContactsRequest**](LinkContactsRequest.md) |  |  |

### Return type

[**ContactLink**](ContactLink.md)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listcontactlinktypes"></a>
# **ListContactLinkTypes**
> ListContactLinkTypesResponse ListContactLinkTypes (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Contact Link types

Retrieves a list of Contact Link types.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListContactLinkTypesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DexpectedValue`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `name` - `max_links` - `create_time`  One of the following directions: - `asc` - `desc`  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Contact Link types
                ListContactLinkTypesResponse result = apiInstance.ListContactLinkTypes(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.ListContactLinkTypes: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListContactLinkTypesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Contact Link types
    ApiResponse<ListContactLinkTypesResponse> response = apiInstance.ListContactLinkTypesWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.ListContactLinkTypesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;max_links&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListContactLinkTypesResponse**](ListContactLinkTypesResponse.md)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listcontactlinks"></a>
# **ListContactLinks**
> ListContactLinksResponse ListContactLinks (string contactId)

List Linked Contacts

Retrieves a list of Linked Contacts for a given Contact

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListContactLinksExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var contactId = "contactId_example";  // string | 

            try
            {
                // List Linked Contacts
                ListContactLinksResponse result = apiInstance.ListContactLinks(contactId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.ListContactLinks: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListContactLinksWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Linked Contacts
    ApiResponse<ListContactLinksResponse> response = apiInstance.ListContactLinksWithHttpInfo(contactId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.ListContactLinksWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** |  |  |

### Return type

[**ListContactLinksResponse**](ListContactLinksResponse.md)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listcontacts"></a>
# **ListContacts**
> ListContactsResponse ListContacts (List<string>? fields = null, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Contacts

Retrieves a list of Contacts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListContactsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) (optional) 
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `email` — supports wildcard (e.g. `email==john*`) - (String) `given_name` — supports wildcard (e.g. `given_name==Mar*`) - (String) `family_name` — supports wildcard (e.g. `family_name==Smi*`) - (String) `middle_name` — supports wildcard (e.g. `middle_name==J*`) - (String) `company_id` - (Set[String]) `contact_ids` - (Set[String]) `ids` — accepts a list of contact IDs (e.g. `ids==1,2,3`) - (String) `start_update_time` - (String) `end_update_time` - (String) `phone_number` — the phone number to search for. Requires `phone_fields` to be specified; only the specified phone fields are searched. - (Set[String]) `phone_fields` — restricts which phone fields to search (e.g. PHONE1, PHONE2, or comma-separated list PHONE1,PHONE2,PHONE3,PHONE4,PHONE5). Required when `phone_number` is supplied. - (String) `billing_address_line1` - (String) `billing_address_locality` - (String) `billing_address_region` (long-form region/state name, e.g. \"Arizona\") - (String) `billing_address_postal_code` - (String) `billing_address_country_code` (ISO 3166-1 alpha-3, e.g. \"USA\") - (String) `shipping_address_line1` - (String) `shipping_address_locality` - (String) `shipping_address_region` - (String) `shipping_address_postal_code` - (String) `shipping_address_country_code` - (String) `other_address_line1` - (String) `other_address_locality` - (String) `other_address_region` - (String) `other_address_postal_code` - (String) `other_address_country_code` - (String) `website` — supports wildcard (e.g. `website==https://example*`) - (String) `lead_source_name` — supports wildcard (e.g. `lead_source_name==Google*`) - (String) `contact_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `contact_id>5` encoded as `contact_id%3E5`)  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For wildcard filtering, use `*` at the end of the value (prefix matching), encoded as `%2A`. For the filters listed above, here are some examples: - `filter=given_name%3D%3DMary` - `filter=given_name%3D%3DMar%2A` (wildcard: starts with \"Mar\") - `filter=company_id%3D%3D123` - `filter=company_id%3D%3D123%3Bfamily_name%3D%3DSmith` - `filter=billing_address_locality%3D%3DChandler` - `filter=shipping_address_country_code%3D%3DUSA%3Bshipping_address_region%3D%3DArizona` - `filter=contact_id%3E5` (contact_id > 5) - `filter=ids%3D%3D1,2,3` (contacts with IDs 1, 2, or 3)  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `email` - `update_time`  One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Contacts
                ListContactsResponse result = apiInstance.ListContacts(fields, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.ListContacts: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListContactsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Contacts
    ApiResponse<ListContactsResponse> response = apiInstance.ListContactsWithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.ListContactsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | [optional]  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;email&#x60; — supports wildcard (e.g. &#x60;email&#x3D;&#x3D;john*&#x60;) - (String) &#x60;given_name&#x60; — supports wildcard (e.g. &#x60;given_name&#x3D;&#x3D;Mar*&#x60;) - (String) &#x60;family_name&#x60; — supports wildcard (e.g. &#x60;family_name&#x3D;&#x3D;Smi*&#x60;) - (String) &#x60;middle_name&#x60; — supports wildcard (e.g. &#x60;middle_name&#x3D;&#x3D;J*&#x60;) - (String) &#x60;company_id&#x60; - (Set[String]) &#x60;contact_ids&#x60; - (Set[String]) &#x60;ids&#x60; — accepts a list of contact IDs (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;start_update_time&#x60; - (String) &#x60;end_update_time&#x60; - (String) &#x60;phone_number&#x60; — the phone number to search for. Requires &#x60;phone_fields&#x60; to be specified; only the specified phone fields are searched. - (Set[String]) &#x60;phone_fields&#x60; — restricts which phone fields to search (e.g. PHONE1, PHONE2, or comma-separated list PHONE1,PHONE2,PHONE3,PHONE4,PHONE5). Required when &#x60;phone_number&#x60; is supplied. - (String) &#x60;billing_address_line1&#x60; - (String) &#x60;billing_address_locality&#x60; - (String) &#x60;billing_address_region&#x60; (long-form region/state name, e.g. \&quot;Arizona\&quot;) - (String) &#x60;billing_address_postal_code&#x60; - (String) &#x60;billing_address_country_code&#x60; (ISO 3166-1 alpha-3, e.g. \&quot;USA\&quot;) - (String) &#x60;shipping_address_line1&#x60; - (String) &#x60;shipping_address_locality&#x60; - (String) &#x60;shipping_address_region&#x60; - (String) &#x60;shipping_address_postal_code&#x60; - (String) &#x60;shipping_address_country_code&#x60; - (String) &#x60;other_address_line1&#x60; - (String) &#x60;other_address_locality&#x60; - (String) &#x60;other_address_region&#x60; - (String) &#x60;other_address_postal_code&#x60; - (String) &#x60;other_address_country_code&#x60; - (String) &#x60;website&#x60; — supports wildcard (e.g. &#x60;website&#x3D;&#x3D;https://example*&#x60;) - (String) &#x60;lead_source_name&#x60; — supports wildcard (e.g. &#x60;lead_source_name&#x3D;&#x3D;Google*&#x60;) - (String) &#x60;contact_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;contact_id&gt;5&#x60; encoded as &#x60;contact_id%3E5&#x60;)  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For wildcard filtering, use &#x60;*&#x60; at the end of the value (prefix matching), encoded as &#x60;%2A&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;given_name%3D%3DMar%2A&#x60; (wildcard: starts with \&quot;Mar\&quot;) - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; - &#x60;filter&#x3D;billing_address_locality%3D%3DChandler&#x60; - &#x60;filter&#x3D;shipping_address_country_code%3D%3DUSA%3Bshipping_address_region%3D%3DArizona&#x60; - &#x60;filter&#x3D;contact_id%3E5&#x60; (contact_id &gt; 5) - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; (contacts with IDs 1, 2, or 3)  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;email&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListContactsResponse**](ListContactsResponse.md)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listtagsforcontact"></a>
# **ListTagsForContact**
> ListContactTagsResponse ListTagsForContact (string contactId, string? filter = null, string? pageToken = null, string? orderBy = null, int? pageSize = null)

List Applied Tags

Retrieves a list of tags applied to the specified Contact

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class ListTagsForContactExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var contactId = "contactId_example";  // string | Contact identifier
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) `name` - (String) `description` - (String) `category_id` (use `category_id==NONE` to filter tags not assigned to any category) - (String) `since_applied_time` - (String) `until_applied_time` - (String) `since_create_time` - (String) `until_create_time` - (String) `since_update_time` - (String) `until_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DCustomer` - `filter=category_id%3D%3D123` - `filter=category_id%3D%3DNONE` - `filter=since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - `name` - `create_time` - `update_time` - `applied_time` - `category_id` One of the following directions: - `asc` - `desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 

            try
            {
                // List Applied Tags
                ListContactTagsResponse result = apiInstance.ListTagsForContact(contactId, filter, pageToken, orderBy, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.ListTagsForContact: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListTagsForContactWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Applied Tags
    ApiResponse<ListContactTagsResponse> response = apiInstance.ListTagsForContactWithHttpInfo(contactId, filter, pageToken, orderBy, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.ListTagsForContactWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** | Contact identifier |  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; (use &#x60;category_id&#x3D;&#x3D;NONE&#x60; to filter tags not assigned to any category) - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DCustomer&#x60; - &#x60;filter&#x3D;category_id%3D%3D123&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60; - &#x60;applied_time&#x60; - &#x60;category_id&#x60; One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |

### Return type

[**ListContactTagsResponse**](ListContactTagsResponse.md)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="retrievecontactmodel"></a>
# **RetrieveContactModel**
> ObjectModel RetrieveContactModel ()

Retrieve Contact Model

Get the custom fields and optional properties for the Contact object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class RetrieveContactModelExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);

            try
            {
                // Retrieve Contact Model
                ObjectModel result = apiInstance.RetrieveContactModel();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.RetrieveContactModel: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveContactModelWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Contact Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveContactModelWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.RetrieveContactModelWithHttpInfo: " + e.Message);
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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="unlinkcontacts"></a>
# **UnlinkContacts**
> void UnlinkContacts (LinkContactsRequest linkContactsRequest)

Delete Link between two Contacts

Deletes Link between two Contacts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UnlinkContactsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var linkContactsRequest = new LinkContactsRequest(); // LinkContactsRequest | 

            try
            {
                // Delete Link between two Contacts
                apiInstance.UnlinkContacts(linkContactsRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.UnlinkContacts: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UnlinkContactsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Link between two Contacts
    apiInstance.UnlinkContactsWithHttpInfo(linkContactsRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.UnlinkContactsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **linkContactsRequest** | [**LinkContactsRequest**](LinkContactsRequest.md) |  |  |

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
| **204** | No Content |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatecontact"></a>
# **UpdateContact**
> Contact UpdateContact (string contactId, CreateUpdateContactRequest createUpdateContactRequest, Object? updateMask = null, List<string>? fields = null)

Update a Contact

Updates a Contact

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Core.V2.Api;
using Keap.Core.V2.Client;
using Keap.Core.V2.Model;

namespace Example
{
    public class UpdateContactExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContactApi(config);
            var contactId = "contactId_example";  // string | 
            var createUpdateContactRequest = new CreateUpdateContactRequest(); // CreateUpdateContactRequest | 
            var updateMask = new Object?(); // Object? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var fields = new List<string>?(); // List<string>? | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) (optional) 

            try
            {
                // Update a Contact
                Contact result = apiInstance.UpdateContact(contactId, createUpdateContactRequest, updateMask, fields);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ContactApi.UpdateContact: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateContactWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Contact
    ApiResponse<Contact> response = apiInstance.UpdateContactWithHttpInfo(contactId, createUpdateContactRequest, updateMask, fields);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ContactApi.UpdateContactWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **string** |  |  |
| **createUpdateContactRequest** | [**CreateUpdateContactRequest**](CreateUpdateContactRequest.md) |  |  |
| **updateMask** | [**Object?**](Object?.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **fields** | [**List&lt;string&gt;?**](string.md) | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | [optional]  |

### Return type

[**Contact**](Contact.md)

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
| **409** | Conflict |  -  |
| **500** | Internal Server Error |  -  |
| **501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

