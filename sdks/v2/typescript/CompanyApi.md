# .CompanyApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompany**](CompanyApi.md#createCompany) | **POST** /v2/companies | Create a Company
[**deleteCompany**](CompanyApi.md#deleteCompany) | **DELETE** /v2/companies/{company_id} | Delete a Company
[**getCompany**](CompanyApi.md#getCompany) | **GET** /v2/companies/{company_id} | Retrieve a Company
[**listCompanies**](CompanyApi.md#listCompanies) | **GET** /v2/companies | List Companies
[**updateCompany**](CompanyApi.md#updateCompany) | **PATCH** /v2/companies/{company_id} | Update a Company


# **createCompany**
> Company createCompany()

Creates a new Company.`country_code` is required if `region` is specified.

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiCreateCompanyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiCreateCompanyRequest = {
    // company (optional)
  createCompanyRequest: {
    address: {
      country: "United States of America",
      countryCode: "USA",
      field: "ADDRESS_FIELD_UNSPECIFIED",
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      postalCode: "postalCode_example",
      region: "Arizona",
      regionCode: "US-AZ",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
    },
    companyName: "companyName_example",
    customFields: [
      {
        content: {},
        id: "id_example",
      },
    ],
    emailAddress: {
      email: "email_example",
      emailOptStatus: "UNENGAGED_MARKETABLE",
      field: "EMAIL_FIELD_UNSPECIFIED",
      isOptIn: true,
      optInReason: "optInReason_example",
    },
    faxNumber: {
      field: "FAX_NUMBER_FIELD_UNSPECIFIED",
      number: "number_example",
      type: "type_example",
    },
    notes: "notes_example",
    phoneNumber: {
      extension: "extension_example",
      field: "PHONE_NUMBER_FIELD_UNSPECIFIED",
      number: "number_example",
      numberE164: "numberE164_example",
      type: "type_example",
    },
    website: "website_example",
  },
};

const data = await apiInstance.createCompany(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCompanyRequest** | **CreateCompanyRequest**| company |


### Return type

**Company**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

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
    // company_id
  companyId: "company_id_example",
};

const data = await apiInstance.deleteCompany(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | [**string**] | company_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

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
    // company_id
  companyId: "company_id_example",
    // Comma-delimited list of Company properties to include in the response. (Available fields are: `company_name`, `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`) (optional)
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
 **companyId** | [**string**] | company_id | defaults to undefined
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;) | (optional) defaults to undefined


### Return type

**Company**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCompanies**
> ListCompaniesResponse listCompanies()

Retrieves a list of all Companies.<br/><br/>If the feature flag is <b>enabled</b>, the endpoint returns the <span style=\'color:red\'>legacy</span> non-paginated list of all companies.<br/>If the flag is <b>disabled</b>, it returns a paginated list using the v2-compliant implementation.<br/><br/><span style=\'color:red\'>Deprecated as of v2</span>: The legacy behavior will be removed after the transition period.

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiListCompaniesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiListCompaniesRequest = {
    // Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number`, `email_address`, `phone_number`, `update_time`, `create_time` and `custom_fields` aren\'t included, by default.) (optional)
  fields: [
    "fields_example",
  ],
    // Filter to apply, allowed fields are: - (String) `company_name` - (String) `email` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=company_name%3D%3DCompany` - `filter=email%3D%3Dtest@gmail.com` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional)
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
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.) | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListCompaniesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCompany**
> Company updateCompany()

Updates a Company with the values provided in the request

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiUpdateCompanyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiUpdateCompanyRequest = {
    // company_id
  companyId: "company_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "id",
  ],
    // company (optional)
  updateCompanyRequest: {
    address: {
      country: "United States of America",
      countryCode: "USA",
      field: "ADDRESS_FIELD_UNSPECIFIED",
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      postalCode: "postalCode_example",
      region: "Arizona",
      regionCode: "US-AZ",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
    },
    companyName: "companyName_example",
    customFields: [
      {
        content: {},
        id: "id_example",
      },
    ],
    emailAddress: {
      email: "email_example",
      emailOptStatus: "UNENGAGED_MARKETABLE",
      field: "EMAIL_FIELD_UNSPECIFIED",
      isOptIn: true,
      optInReason: "optInReason_example",
    },
    faxNumber: {
      field: "FAX_NUMBER_FIELD_UNSPECIFIED",
      number: "number_example",
      type: "type_example",
    },
    notes: "notes_example",
    phoneNumber: {
      extension: "extension_example",
      field: "PHONE_NUMBER_FIELD_UNSPECIFIED",
      number: "number_example",
      numberE164: "numberE164_example",
      type: "type_example",
    },
    website: "website_example",
  },
};

const data = await apiInstance.updateCompany(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCompanyRequest** | **UpdateCompanyRequest**| company |
 **companyId** | [**string**] | company_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**Company**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


