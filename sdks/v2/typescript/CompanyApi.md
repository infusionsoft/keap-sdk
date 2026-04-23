# .CompanyApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTagToCompany**](CompanyApi.md#addTagToCompany) | **POST** /rest/v2/companies/{company_id}/tags/{tag_id} | Add Tag to Company
[**createCompany**](CompanyApi.md#createCompany) | **POST** /rest/v2/companies | Create a Company
[**createCompanyCustomField**](CompanyApi.md#createCompanyCustomField) | **POST** /rest/v2/companies/model/customFields | Create a Company Custom Field
[**deleteCompany**](CompanyApi.md#deleteCompany) | **DELETE** /rest/v2/companies/{company_id} | Delete a Company
[**getCompany**](CompanyApi.md#getCompany) | **GET** /rest/v2/companies/{company_id} | Retrieve a Company
[**listCompanies**](CompanyApi.md#listCompanies) | **GET** /rest/v2/companies | List Companies
[**listTagsForCompany**](CompanyApi.md#listTagsForCompany) | **GET** /rest/v2/companies/{company_id}/tags | List Applied Tags
[**removeTagFromCompany**](CompanyApi.md#removeTagFromCompany) | **DELETE** /rest/v2/companies/{company_id}/tags/{tag_id} | Remove Tag
[**retrieveCompanyCustomFieldModel**](CompanyApi.md#retrieveCompanyCustomFieldModel) | **GET** /rest/v2/companies/model | Retrieve Company Custom Field Model
[**updateCompany**](CompanyApi.md#updateCompany) | **PATCH** /rest/v2/companies/{company_id} | Update a Company
[**updateCompanyCustomField**](CompanyApi.md#updateCompanyCustomField) | **PATCH** /rest/v2/companies/model/customFields/{custom_field_id} | Update a Company Custom Field


# **addTagToCompany**
> void addTagToCompany()

Applies a Tag to a Company.

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiAddTagToCompanyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiAddTagToCompanyRequest = {
  
  companyId: "company_id_example",
  
  tagId: "tag_id_example",
};

const data = await apiInstance.addTagToCompany(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | [**string**] |  | defaults to undefined
 **tagId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCompany**
> Company createCompany(createCompanyRequest)

Creates a new Company.`country_code` is required if `region` is specified.

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiCreateCompanyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiCreateCompanyRequest = {
  
  createCompanyRequest: {
    address: {
      country: "United States of America",
      line1: "123",
      line2: "Suite 100",
      locality: "Phoenix",
      region: "Arizona",
      field: "BILLING",
      countryCode: "USA",
      postalCode: "85001",
      regionCode: "US-AZ",
      zipCode: "85001",
      zipFour: "1234",
    },
    notes: "Key enterprise client since 2020",
    website: "https://www.thryv.com",
    suffix: "Jr",
    title: "Dr.",
    companyName: "Thryv",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
    emailAddress: {
      email: "john.smith@example.com",
      field: "EMAIL1",
      optInReason: "Subscribed via website form",
      isOptIn: true,
      emailOptStatus: "UNENGAGED_MARKETABLE",
    },
    faxNumber: {
      number: "5551234568",
      type: "Work",
      field: "FAX1",
    },
    phoneNumber: {
      extension: "101",
      number: "5551234567",
      type: "Work",
      field: "PHONE1",
      numberE164: "+15551234567",
    },
    anniversaryDate: "2015-06-20",
    assistantName: "Jane Doe",
    assistantPhone: "555-123-4567",
    billingInformation: "NET 30",
    birthDate: "1985-03-15",
    contactType: "Vendor",
    firstName: "John",
    jobTitle: "CEO",
    lastName: "Smith",
    middleName: "Robert",
    preferredName: "Johnny",
    ownerId: "45",
    referralCode: "REF2024ABC",
    spouseName: "Jane Smith",
  },
};

const data = await apiInstance.createCompany(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCompanyRequest** | **CreateCompanyRequest**|  |


### Return type

**Company**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCompanyCustomField**
> CustomFieldMetaData createCompanyCustomField(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Company object

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiCreateCompanyCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiCreateCompanyCustomFieldRequest = {
  
  createCustomFieldRequest: {
    label: "label_example",
    options: [
      {
        label: "label_example",
      },
    ],
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createCompanyCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**|  |


### Return type

**CustomFieldMetaData**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCompany**
> void deleteCompany()

Deletes the specified Company

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiDeleteCompanyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiDeleteCompanyRequest = {
  
  companyId: "company_id_example",
};

const data = await apiInstance.deleteCompany(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCompany**
> Company getCompany()

Retrieves a single Company

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiGetCompanyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiGetCompanyRequest = {
  
  companyId: "company_id_example",
    // Comma-delimited list of Company properties to include in the response. (Available fields are: `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`) (optional)
  fields: [
    "fields_example",
  ],
};

const data = await apiInstance.getCompany(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | [**string**] |  | defaults to undefined
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;) | (optional) defaults to undefined


### Return type

**Company**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCompanies**
> ListCompaniesResponse listCompanies()

Retrieves a list of all Companies.<br/><br/>

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiListCompaniesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiListCompaniesRequest = {
    // Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number`, `address`, `email_address`, `phone_number`, `update_time`, `create_time` and `custom_fields` aren\'t included, by default.) (optional)
  fields: [
    "fields_example",
  ],
    // Filter to apply, allowed fields are: - (String) `company_name` - exact match on company name (equality only) - (String) `name` - company name with support for a wildcard at the end (e.g. `smith*`) - (String) `email` - exact match on email - (String) `since_time` - companies updated on or after this time - (String) `until_time` - companies updated on or before this time - (Number) `company_id` - supports comparison operators: `==`, `>`, `<`, `>=`, `<=`  For equality filters, use the `==` operator in encoded form `%3D%3D`: - `filter=company_name%3D%3DCompany` - `filter=email%3D%3Dtest@gmail.com` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z`  For wildcard name search (prefix only, case-insensitive): - `filter=name%3D%3DAcme%2A` (starts with \"Acme\")  For company_id comparison: - `filter=company_id%3E5` (company_id > 5) - `filter=company_id%3E%3D10` (company_id >= 10)  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `name` - `email`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listCompanies(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;address&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.) | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - exact match on company name (equality only) - (String) &#x60;name&#x60; - company name with support for a wildcard at the end (e.g. &#x60;smith*&#x60;) - (String) &#x60;email&#x60; - exact match on email - (String) &#x60;since_time&#x60; - companies updated on or after this time - (String) &#x60;until_time&#x60; - companies updated on or before this time - (Number) &#x60;company_id&#x60; - supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60;  For equality filters, use the &#x60;&#x3D;&#x3D;&#x60; operator in encoded form &#x60;%3D%3D&#x60;: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z&#x60;  For wildcard name search (prefix only, case-insensitive): - &#x60;filter&#x3D;name%3D%3DAcme%2A&#x60; (starts with \&quot;Acme\&quot;)  For company_id comparison: - &#x60;filter&#x3D;company_id%3E5&#x60; (company_id &gt; 5) - &#x60;filter&#x3D;company_id%3E%3D10&#x60; (company_id &gt;&#x3D; 10)  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListCompaniesResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTagsForCompany**
> ListCompanyTagsResponse listTagsForCompany()

Retrieves a list of tags applied to the specified Company

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiListTagsForCompanyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiListTagsForCompanyRequest = {
    // Company identifier
  companyId: "company_id_example",
    // Filter to apply, allowed fields are: - (String) `name` - (String) `description` - (String) `category_id` (use `category_id==NONE` to filter tags not assigned to any category) - (String) `since_applied_time` - (String) `until_applied_time` - (String) `since_create_time` - (String) `until_create_time` - (String) `since_update_time` - (String) `until_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DCustomer` - `filter=category_id%3D%3D123` - `filter=category_id%3D%3DNONE` - `filter=since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional)
  filter: "filter_example",
    // Page token (optional)
  pageToken: "page_token_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `create_time` - `update_time` - `applied_time` - `category_id`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
};

const data = await apiInstance.listTagsForCompany(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | [**string**] | Company identifier | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; (use &#x60;category_id&#x3D;&#x3D;NONE&#x60; to filter tags not assigned to any category) - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DCustomer&#x60; - &#x60;filter&#x3D;category_id%3D%3D123&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60; - &#x60;applied_time&#x60; - &#x60;category_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined


### Return type

**ListCompanyTagsResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeTagFromCompany**
> void removeTagFromCompany()

Remove a Tag from a Company.

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiRemoveTagFromCompanyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiRemoveTagFromCompanyRequest = {
  
  companyId: "company_id_example",
  
  tagId: "tag_id_example",
};

const data = await apiInstance.removeTagFromCompany(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | [**string**] |  | defaults to undefined
 **tagId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCompanyCustomFieldModel**
> ObjectModel retrieveCompanyCustomFieldModel()

Get the custom fields for the Company object

### Example


```typescript
import { createConfiguration, CompanyApi } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request = {};

const data = await apiInstance.retrieveCompanyCustomFieldModel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCompany**
> Company updateCompany(updateCompanyRequest)

Updates a Company with the values provided in the request

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiUpdateCompanyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiUpdateCompanyRequest = {
  
  companyId: "company_id_example",
  
  updateCompanyRequest: {
    address: {
      country: "United States of America",
      line1: "123",
      line2: "Suite 100",
      locality: "Phoenix",
      region: "Arizona",
      field: "BILLING",
      countryCode: "USA",
      postalCode: "85001",
      regionCode: "US-AZ",
      zipCode: "85001",
      zipFour: "1234",
    },
    notes: "Key enterprise client since 2020",
    website: "https://www.thryv.com",
    suffix: "Jr",
    title: "Dr.",
    companyName: "Thryv",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
    emailAddress: {
      email: "john.smith@example.com",
      field: "EMAIL1",
      optInReason: "Subscribed via website form",
      isOptIn: true,
      emailOptStatus: "UNENGAGED_MARKETABLE",
    },
    faxNumber: {
      number: "5551234568",
      type: "Work",
      field: "FAX1",
    },
    phoneNumber: {
      extension: "101",
      number: "5551234567",
      type: "Work",
      field: "PHONE1",
      numberE164: "+15551234567",
    },
    anniversaryDate: "2015-06-20",
    assistantName: "Jane Doe",
    assistantPhone: "555-123-4567",
    billingInformation: "NET 30",
    birthDate: "1985-03-15",
    contactType: "Vendor",
    firstName: "John",
    jobTitle: "CEO",
    lastName: "Smith",
    middleName: "Robert",
    preferredName: "Johnny",
    ownerId: "45",
    referralCode: "REF2024ABC",
    spouseName: "Jane Smith",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateCompany(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCompanyRequest** | **UpdateCompanyRequest**|  |
 **companyId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**Company**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCompanyCustomField**
> CustomFieldMetaData updateCompanyCustomField(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Company object

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiUpdateCompanyCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiUpdateCompanyCustomFieldRequest = {
  
  customFieldId: "custom_field_id_example",
  
  updateCustomFieldMetaDataRequest: {
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
      },
    ],
    groupId: "groupId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateCompanyCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**|  |
 **customFieldId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


