# KeapCoreServiceV2Sdk.CompanyApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompany**](CompanyApi.md#createCompany) | **POST** /v2/companies | Create a Company
[**deleteCompany**](CompanyApi.md#deleteCompany) | **DELETE** /v2/companies/{company_id} | Delete a Company
[**getCompany**](CompanyApi.md#getCompany) | **GET** /v2/companies/{company_id} | Retrieve a Company
[**listCompanies**](CompanyApi.md#listCompanies) | **GET** /v2/companies | List Companies
[**updateCompany**](CompanyApi.md#updateCompany) | **PATCH** /v2/companies/{company_id} | Update a Company



## createCompany

> Company createCompany(opts)

Create a Company

Creates a new Company.&#x60;country_code&#x60; is required if &#x60;region&#x60; is specified.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CompanyApi();
let opts = {
  'createCompanyRequest': new KeapCoreServiceV2Sdk.CreateCompanyRequest() // CreateCompanyRequest | company
};
apiInstance.createCompany(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCompanyRequest** | [**CreateCompanyRequest**](CreateCompanyRequest.md)| company | [optional] 

### Return type

[**Company**](Company.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCompany

> deleteCompany(companyId)

Delete a Company

Deletes the specified Company

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CompanyApi();
let companyId = "companyId_example"; // String | company_id
apiInstance.deleteCompany(companyId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| company_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompany

> Company getCompany(companyId, opts)

Retrieve a Company

Retrieves a single Company

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CompanyApi();
let companyId = "companyId_example"; // String | company_id
let opts = {
  'fields': ["null"] // [String] | Comma-delimited list of Company properties to include in the response. (Available fields are: `company_name`, `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`)
};
apiInstance.getCompany(companyId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| company_id | 
 **fields** | [**[String]**](String.md)| Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;) | [optional] 

### Return type

[**Company**](Company.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCompanies

> ListCompaniesResponse listCompanies(opts)

List Companies

Retrieves a list of all Companies.&lt;br/&gt;&lt;br/&gt;If the feature flag is &lt;b&gt;enabled&lt;/b&gt;, the endpoint returns the &lt;span style&#x3D;&#39;color:red&#39;&gt;legacy&lt;/span&gt; non-paginated list of all companies.&lt;br/&gt;If the flag is &lt;b&gt;disabled&lt;/b&gt;, it returns a paginated list using the v2-compliant implementation.&lt;br/&gt;&lt;br/&gt;&lt;span style&#x3D;&#39;color:red&#39;&gt;Deprecated as of v2&lt;/span&gt;: The legacy behavior will be removed after the transition period.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CompanyApi();
let opts = {
  'fields': ["null"], // [String] | Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number`, `email_address`, `phone_number`, `update_time`, `create_time` and `custom_fields` aren't included, by default.)
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `company_name` - (String) `email` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=company_name%3D%3DCompany` - `filter=email%3D%3Dtest@gmail.com` - `filter=since_time%3D%3D2025-04-16T20:33:02.321Z;` - `filter=until_time%3D%3D2025-08-16T20:33:02.321Z;` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `name` - `email`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listCompanies(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren&#39;t included, by default.) | [optional] 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListCompaniesResponse**](ListCompaniesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCompany

> Company updateCompany(companyId, opts)

Update a Company

Updates a Company with the values provided in the request

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CompanyApi();
let companyId = "companyId_example"; // String | company_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'updateCompanyRequest': new KeapCoreServiceV2Sdk.UpdateCompanyRequest() // UpdateCompanyRequest | company
};
apiInstance.updateCompany(companyId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| company_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **updateCompanyRequest** | [**UpdateCompanyRequest**](UpdateCompanyRequest.md)| company | [optional] 

### Return type

[**Company**](Company.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

