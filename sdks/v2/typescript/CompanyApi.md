# .CompanyApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompanyUsingPOST1**](CompanyApi.md#createCompanyUsingPOST1) | **POST** /v2/companies | Create a Company
[**deleteCompanyUsingDELETE**](CompanyApi.md#deleteCompanyUsingDELETE) | **DELETE** /v2/companies/{company_id} | Delete a Company
[**getCompanyUsingGET1**](CompanyApi.md#getCompanyUsingGET1) | **GET** /v2/companies/{company_id} | Retrieve a Company
[**listCompaniesUsingGET1**](CompanyApi.md#listCompaniesUsingGET1) | **GET** /v2/companies | List Companies
[**updateCompanyUsingPATCH1**](CompanyApi.md#updateCompanyUsingPATCH1) | **PATCH** /v2/companies/{company_id} | Update a Company


# **createCompanyUsingPOST1**
> Company createCompanyUsingPOST1()

Creates a new Company.`country_code` is required if `region` is specified.

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiCreateCompanyUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiCreateCompanyUsingPOST1Request = {
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

const data = await apiInstance.createCompanyUsingPOST1(request);
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCompanyUsingDELETE**
> void deleteCompanyUsingDELETE()

Deletes the specified Company

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiDeleteCompanyUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiDeleteCompanyUsingDELETERequest = {
    // company_id
  companyId: "company_id_example",
};

const data = await apiInstance.deleteCompanyUsingDELETE(request);
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCompanyUsingGET1**
> Company getCompanyUsingGET1()

Retrieves a single Company

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiGetCompanyUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiGetCompanyUsingGET1Request = {
    // company_id
  companyId: "company_id_example",
    // Comma-delimited list of Company properties to include in the response. (Available fields are: `company_name`, `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`) (optional)
  fields: [
    "fields_example",
  ],
};

const data = await apiInstance.getCompanyUsingGET1(request);
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCompaniesUsingGET1**
> ListCompaniesResponse listCompaniesUsingGET1()

Retrieves a list of all Companies

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiListCompaniesUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiListCompaniesUsingGET1Request = {
    // Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number` and `custom_fields` aren\'t included, by default.) (optional)
  fields: [
    "fields_example",
  ],
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listCompaniesUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.) | (optional) defaults to undefined
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCompanyUsingPATCH1**
> Company updateCompanyUsingPATCH1()

Updates a Company with the values provided in the request

### Example


```typescript
import { createConfiguration, CompanyApi } from '';
import type { CompanyApiUpdateCompanyUsingPATCH1Request } from '';

const configuration = createConfiguration();
const apiInstance = new CompanyApi(configuration);

const request: CompanyApiUpdateCompanyUsingPATCH1Request = {
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

const data = await apiInstance.updateCompanyUsingPATCH1(request);
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


