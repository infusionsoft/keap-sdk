# KeapCoreServiceV2Sdk.CompanyApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompanyUsingPOST1**](CompanyApi.md#createCompanyUsingPOST1) | **POST** /v2/companies | Create a Company
[**deleteCompanyUsingDELETE**](CompanyApi.md#deleteCompanyUsingDELETE) | **DELETE** /v2/companies/{company_id} | Delete a Company
[**getCompanyUsingGET1**](CompanyApi.md#getCompanyUsingGET1) | **GET** /v2/companies/{company_id} | Retrieve a Company
[**listCompaniesUsingGET1**](CompanyApi.md#listCompaniesUsingGET1) | **GET** /v2/companies | List Companies
[**updateCompanyUsingPATCH1**](CompanyApi.md#updateCompanyUsingPATCH1) | **PATCH** /v2/companies/{company_id} | Update a Company



## createCompanyUsingPOST1

> Company createCompanyUsingPOST1(opts)

Create a Company

Creates a new Company.&#x60;country_code&#x60; is required if &#x60;region&#x60; is specified.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CompanyApi();
let opts = {
  'createCompanyRequest': new KeapCoreServiceV2Sdk.CreateCompanyRequest() // CreateCompanyRequest | company
};
apiInstance.createCompanyUsingPOST1(opts).then((data) => {
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


## deleteCompanyUsingDELETE

> deleteCompanyUsingDELETE(companyId)

Delete a Company

Deletes the specified Company

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CompanyApi();
let companyId = "companyId_example"; // String | company_id
apiInstance.deleteCompanyUsingDELETE(companyId).then(() => {
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


## getCompanyUsingGET1

> Company getCompanyUsingGET1(companyId, opts)

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
apiInstance.getCompanyUsingGET1(companyId, opts).then((data) => {
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


## listCompaniesUsingGET1

> ListCompaniesResponse listCompaniesUsingGET1(opts)

List Companies

Retrieves a list of all Companies

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CompanyApi();
let opts = {
  'fields': ["null"], // [String] | Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number` and `custom_fields` aren't included, by default.)
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listCompaniesUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#39;t included, by default.) | [optional] 
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListCompaniesResponse**](ListCompaniesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCompanyUsingPATCH1

> Company updateCompanyUsingPATCH1(companyId, opts)

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
apiInstance.updateCompanyUsingPATCH1(companyId, opts).then((data) => {
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

