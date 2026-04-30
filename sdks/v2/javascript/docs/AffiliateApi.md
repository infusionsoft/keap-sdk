# KeapCoreServiceV2Sdk.AffiliateApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAffiliate**](AffiliateApi.md#addAffiliate) | **POST** /rest/v2/affiliates | Create an Affiliate
[**addAffiliateToProgram**](AffiliateApi.md#addAffiliateToProgram) | **POST** /rest/v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**addCommissionProgram**](AffiliateApi.md#addCommissionProgram) | **POST** /rest/v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assignProductCommissionProgram**](AffiliateApi.md#assignProductCommissionProgram) | **POST** /rest/v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Assign a Product Commission Program
[**assignSubscriptionCommissionProgram**](AffiliateApi.md#assignSubscriptionCommissionProgram) | **POST** /rest/v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Assign a Subscription Commission Program
[**createAffiliateCustomField**](AffiliateApi.md#createAffiliateCustomField) | **POST** /rest/v2/affiliates/model/customFields | Create an Affiliate Custom Field
[**createDefaultCommissionProgram**](AffiliateApi.md#createDefaultCommissionProgram) | **POST** /rest/v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Create a Default Commission Program
[**createRedirectLink**](AffiliateApi.md#createRedirectLink) | **POST** /rest/v2/affiliates/redirects | Create an Affiliate Link
[**deleteAffiliate**](AffiliateApi.md#deleteAffiliate) | **DELETE** /rest/v2/affiliates/{id} | Delete Affiliate
[**deleteAffiliateCommissionProgram**](AffiliateApi.md#deleteAffiliateCommissionProgram) | **DELETE** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**deleteAffiliateCustomField**](AffiliateApi.md#deleteAffiliateCustomField) | **DELETE** /rest/v2/affiliates/model/customFields/{custom_field_id} | Delete a Custom Field
[**deleteRedirectLink**](AffiliateApi.md#deleteRedirectLink) | **DELETE** /rest/v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**getAffiliate**](AffiliateApi.md#getAffiliate) | **GET** /rest/v2/affiliates/{id} | Retrieve an Affiliate
[**getAffiliateCommissionTotal**](AffiliateApi.md#getAffiliateCommissionTotal) | **GET** /rest/v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**getAffiliateCommissions**](AffiliateApi.md#getAffiliateCommissions) | **GET** /rest/v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commissions
[**getAffiliateCustomFields**](AffiliateApi.md#getAffiliateCustomFields) | **GET** /rest/v2/affiliates/model | Retrieve Affiliate Model
[**getCommissionProgram**](AffiliateApi.md#getCommissionProgram) | **GET** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**getRedirectLink**](AffiliateApi.md#getRedirectLink) | **GET** /rest/v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**getReferralsByAffiliateId**](AffiliateApi.md#getReferralsByAffiliateId) | **GET** /rest/v2/affiliates/{affiliate_id}/referrals | Retrieve Affiliate Referrals
[**listAffiliate**](AffiliateApi.md#listAffiliate) | **GET** /rest/v2/affiliates | List Affiliates
[**listAffiliateCommissionPrograms**](AffiliateApi.md#listAffiliateCommissionPrograms) | **GET** /rest/v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**listAffiliateLinks**](AffiliateApi.md#listAffiliateLinks) | **GET** /rest/v2/affiliates/redirects | List Affiliate Links
[**listAffiliatePayments**](AffiliateApi.md#listAffiliatePayments) | **GET** /rest/v2/affiliates/{affiliate_id}/payments | List Affiliate Payments
[**listCommissionProgramResources**](AffiliateApi.md#listCommissionProgramResources) | **GET** /rest/v2/affiliates/commissionPrograms/{commission_program_id}/resources | Retrieve Commission Program Resources
[**listSummaries**](AffiliateApi.md#listSummaries) | **GET** /rest/v2/affiliates/summaries | List Affiliate Summaries
[**removeAffiliateFromProgram**](AffiliateApi.md#removeAffiliateFromProgram) | **POST** /rest/v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**removeProductCommissionFromCommissions**](AffiliateApi.md#removeProductCommissionFromCommissions) | **POST** /rest/v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program
[**removeSubscriptionPlanCommissionFromCommissions**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissions) | **POST** /rest/v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**updateAffiliate**](AffiliateApi.md#updateAffiliate) | **PATCH** /rest/v2/affiliates/{id} | Update an Affiliate
[**updateAffiliateCustomField**](AffiliateApi.md#updateAffiliateCustomField) | **PATCH** /rest/v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field
[**updateCommissionProgram**](AffiliateApi.md#updateCommissionProgram) | **PATCH** /rest/v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program
[**updateDefaultCommissionProgram**](AffiliateApi.md#updateDefaultCommissionProgram) | **PATCH** /rest/v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**updateProductCommissionProgram**](AffiliateApi.md#updateProductCommissionProgram) | **PATCH** /rest/v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**updateRedirectLink**](AffiliateApi.md#updateRedirectLink) | **PATCH** /rest/v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link
[**updateSubscriptionCommissionProgram**](AffiliateApi.md#updateSubscriptionCommissionProgram) | **PATCH** /rest/v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program



## addAffiliate

> RestAffiliate addAffiliate(createAffiliateRequest)

Create an Affiliate

Creates a single Affiliate

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let createAffiliateRequest = new KeapCoreServiceV2Sdk.CreateAffiliateRequest(); // CreateAffiliateRequest | 
apiInstance.addAffiliate(createAffiliateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAffiliateRequest** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)|  | 

### Return type

[**RestAffiliate**](RestAffiliate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addAffiliateToProgram

> addAffiliateToProgram(id, affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let id = "id_example"; // String | 
let affiliateAddToProgramRequest = new KeapCoreServiceV2Sdk.AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | 
apiInstance.addAffiliateToProgram(id, affiliateAddToProgramRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addCommissionProgram

> AffiliateCommissionProgramResponse addCommissionProgram(createCommissionProgramRequest)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let createCommissionProgramRequest = new KeapCoreServiceV2Sdk.CreateCommissionProgramRequest(); // CreateCommissionProgramRequest | 
apiInstance.addCommissionProgram(createCommissionProgramRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCommissionProgramRequest** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)|  | 

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assignProductCommissionProgram

> ProductCommissionProgram assignProductCommissionProgram(commissionProgramId, createProductCommissionProgramRequest)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | 
let createProductCommissionProgramRequest = new KeapCoreServiceV2Sdk.CreateProductCommissionProgramRequest(); // CreateProductCommissionProgramRequest | 
apiInstance.assignProductCommissionProgram(commissionProgramId, createProductCommissionProgramRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**|  | 
 **createProductCommissionProgramRequest** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)|  | 

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assignSubscriptionCommissionProgram

> SubscriptionCommissionProgram assignSubscriptionCommissionProgram(commissionProgramId, createSubscriptionCommissionProgramRequest)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | 
let createSubscriptionCommissionProgramRequest = new KeapCoreServiceV2Sdk.CreateSubscriptionCommissionProgramRequest(); // CreateSubscriptionCommissionProgramRequest | 
apiInstance.assignSubscriptionCommissionProgram(commissionProgramId, createSubscriptionCommissionProgramRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**|  | 
 **createSubscriptionCommissionProgramRequest** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)|  | 

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAffiliateCustomField

> CustomFieldMetaData createAffiliateCustomField(createCustomFieldRequest)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let createCustomFieldRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
apiInstance.createAffiliateCustomField(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDefaultCommissionProgram

> SetDefaultCommissionProgramResponse createDefaultCommissionProgram(commissionProgramId, createDefaultCommissionProgramRequest)

Create a Default Commission Program

Creates a Default Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | 
let createDefaultCommissionProgramRequest = new KeapCoreServiceV2Sdk.CreateDefaultCommissionProgramRequest(); // CreateDefaultCommissionProgramRequest | 
apiInstance.createDefaultCommissionProgram(commissionProgramId, createDefaultCommissionProgramRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**|  | 
 **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)|  | 

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRedirectLink

> AffiliateLink createRedirectLink(createOrUpdateAffiliateLinkRequest)

Create an Affiliate Link

Creates a single Affiliate Link

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let createOrUpdateAffiliateLinkRequest = new KeapCoreServiceV2Sdk.CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | 
apiInstance.createRedirectLink(createOrUpdateAffiliateLinkRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)|  | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAffiliate

> deleteAffiliate(id)

Delete Affiliate

Deletes the specified Affiliate

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let id = "id_example"; // String | 
apiInstance.deleteAffiliate(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAffiliateCommissionProgram

> deleteAffiliateCommissionProgram(commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | 
apiInstance.deleteAffiliateCommissionProgram(commissionProgramId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAffiliateCustomField

> deleteAffiliateCustomField(customFieldId)

Delete a Custom Field

Deletes a Custom Field from Affiliate.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let customFieldId = "customFieldId_example"; // String | 
apiInstance.deleteAffiliateCustomField(customFieldId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRedirectLink

> deleteRedirectLink(redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let redirectId = "redirectId_example"; // String | 
apiInstance.deleteRedirectLink(redirectId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliate

> RestAffiliate getAffiliate(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let id = "id_example"; // String | 
apiInstance.getAffiliate(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**RestAffiliate**](RestAffiliate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCommissionTotal

> AffiliateCommissionEarned getAffiliateCommissionTotal(affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let affiliateId = "affiliateId_example"; // String | 
apiInstance.getAffiliateCommissionTotal(affiliateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | **String**|  | 

### Return type

[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCommissions

> ListAffiliateCommissionsResponse getAffiliateCommissions(affiliateId, opts)

Retrieve Affiliate Commissions

Retrieve a list of Affiliate&#39;s Commissions

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let affiliateId = "affiliateId_example"; // String | 
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z` - `filter=until_time%3D%3D2025-05-21T23:00:00Z` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `invoice_id` - `time_earned`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.getAffiliateCommissions(affiliateId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | **String**|  | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-05-21T23:00:00Z&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;time_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateCommissionsResponse**](ListAffiliateCommissionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCustomFields

> ObjectModel getAffiliateCustomFields()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
apiInstance.getAffiliateCustomFields().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## getCommissionProgram

> GetRestCommissionProgram getCommissionProgram(commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | 
apiInstance.getCommissionProgram(commissionProgramId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**|  | 

### Return type

[**GetRestCommissionProgram**](GetRestCommissionProgram.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRedirectLink

> AffiliateLink getRedirectLink(redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let redirectId = "redirectId_example"; // String | 
apiInstance.getRedirectLink(redirectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**|  | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReferralsByAffiliateId

> ListAffiliateReferralsResponse getReferralsByAffiliateId(affiliateId)

Retrieve Affiliate Referrals

Retrieves all referrals belonging to the given affiliate

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let affiliateId = "affiliateId_example"; // String | 
apiInstance.getReferralsByAffiliateId(affiliateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | **String**|  | 

### Return type

[**ListAffiliateReferralsResponse**](ListAffiliateReferralsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAffiliate

> ListAffiliatesResponse listAffiliate(opts)

List Affiliates

Retrieves a list of Affiliates

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `id` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `name` - Wildcard matching allowed - (String) `contact_id` - (String) `referral_contact_id` - (String) `status` - (String) `code`  You will need to apply the `==` operator to check the equality of one of the filters with the value you want to match, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3C123` - `filter=id%3D%3D123` - `filter=name%3D%3DBob` - `filter=contact_id%3D%3D567` - `filter=contact_id%3D%3D123%3Bcode%3D%3D567`  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `date_created` - `name` - `status` - `code`  One of the following directions: - `asc` - `desc` 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAffiliate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;name&#x60; - Wildcard matching allowed - (String) &#x60;contact_id&#x60; - (String) &#x60;referral_contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with the value you want to match, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3C123&#x60; - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;name%3D%3DBob&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bcode%3D%3D567&#x60;  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliatesResponse**](ListAffiliatesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAffiliateCommissionPrograms

> ListAffiliateCommissionProgramsResponse listAffiliateCommissionPrograms(opts)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAffiliateCommissionPrograms(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateCommissionProgramsResponse**](ListAffiliateCommissionProgramsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAffiliateLinks

> ListAffiliateLinksResponse listAffiliateLinks(opts)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAffiliateLinks(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateLinksResponse**](ListAffiliateLinksResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAffiliatePayments

> ListAffiliatePaymentsResponse listAffiliatePayments(affiliateId, opts)

List Affiliate Payments

Retrieves a list of affiliate payments

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let affiliateId = "affiliateId_example"; // String | 
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-09-17T-15:50+00` - `filter=until_time%3D%3D2024-09-17T-15:50+00` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `create_time` - `pay_date` - `pay_amount`  One of the following directions: - `asc` - `desc` 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAffiliatePayments(affiliateId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | **String**|  | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60; - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;pay_date&#x60; - &#x60;pay_amount&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliatePaymentsResponse**](ListAffiliatePaymentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCommissionProgramResources

> ListProgramResourcesResponse listCommissionProgramResources(commissionProgramId)

Retrieve Commission Program Resources

Retrieves resources for a commission program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | 
apiInstance.listCommissionProgramResources(commissionProgramId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**|  | 

### Return type

[**ListProgramResourcesResponse**](ListProgramResourcesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSummaries

> ListAffiliateSummariesResponse listSummaries(opts)

List Affiliate Summaries

Retrieves a list of Affiliate Summaries

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `affiliate_id` - `amount_earned` - `balance` - `clawbacks`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listSummaries(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeAffiliateFromProgram

> removeAffiliateFromProgram(id, affiliateRemoveFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let id = "id_example"; // String | 
let affiliateRemoveFromProgramRequest = new KeapCoreServiceV2Sdk.AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | 
apiInstance.removeAffiliateFromProgram(id, affiliateRemoveFromProgramRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **affiliateRemoveFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeProductCommissionFromCommissions

> removeProductCommissionFromCommissions(commissionId, deleteProgramCommissionRequest)

Remove a Product from a Commission Program

Removes a Product from a Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionId = "commissionId_example"; // String | 
let deleteProgramCommissionRequest = new KeapCoreServiceV2Sdk.DeleteProgramCommissionRequest(); // DeleteProgramCommissionRequest | 
apiInstance.removeProductCommissionFromCommissions(commissionId, deleteProgramCommissionRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionId** | **String**|  | 
 **deleteProgramCommissionRequest** | [**DeleteProgramCommissionRequest**](DeleteProgramCommissionRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeSubscriptionPlanCommissionFromCommissions

> removeSubscriptionPlanCommissionFromCommissions(commissionId, deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionId = "commissionId_example"; // String | 
let deleteSubscriptionPlanCommissionRequest = new KeapCoreServiceV2Sdk.DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | 
apiInstance.removeSubscriptionPlanCommissionFromCommissions(commissionId, deleteSubscriptionPlanCommissionRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionId** | **String**|  | 
 **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAffiliate

> RestAffiliate updateAffiliate(id, updateAffiliateRequest, opts)

Update an Affiliate

Updates a single Affiliate

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let id = "id_example"; // String | 
let updateAffiliateRequest = new KeapCoreServiceV2Sdk.UpdateAffiliateRequest(); // UpdateAffiliateRequest | 
let opts = {
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateAffiliate(id, updateAffiliateRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updateAffiliateRequest** | [**UpdateAffiliateRequest**](UpdateAffiliateRequest.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestAffiliate**](RestAffiliate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAffiliateCustomField

> CustomFieldMetaData updateAffiliateCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let customFieldId = "customFieldId_example"; // String | 
let updateCustomFieldMetaDataRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
let opts = {
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateAffiliateCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**|  | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCommissionProgram

> AffiliateCommissionProgramResponse updateCommissionProgram(commissionProgramId, updateCommissionProgramRequest, opts)

Update an Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | 
let updateCommissionProgramRequest = new KeapCoreServiceV2Sdk.UpdateCommissionProgramRequest(); // UpdateCommissionProgramRequest | 
let opts = {
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateCommissionProgram(commissionProgramId, updateCommissionProgramRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**|  | 
 **updateCommissionProgramRequest** | [**UpdateCommissionProgramRequest**](UpdateCommissionProgramRequest.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDefaultCommissionProgram

> SetDefaultCommissionProgramResponse updateDefaultCommissionProgram(commissionProgramId, updateDefaultCommissionProgramRequest, opts)

Update a Default Commission Program

Updates a Default Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | 
let updateDefaultCommissionProgramRequest = new KeapCoreServiceV2Sdk.UpdateDefaultCommissionProgramRequest(); // UpdateDefaultCommissionProgramRequest | 
let opts = {
  'updateMask': ["null"] // [String] | 
};
apiInstance.updateDefaultCommissionProgram(commissionProgramId, updateDefaultCommissionProgramRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**|  | 
 **updateDefaultCommissionProgramRequest** | [**UpdateDefaultCommissionProgramRequest**](UpdateDefaultCommissionProgramRequest.md)|  | 
 **updateMask** | [**[String]**](String.md)|  | [optional] 

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductCommissionProgram

> ProductCommissionProgram updateProductCommissionProgram(commissionProgramId, updateProductCommissionProgramRequest, opts)

Update a Product Commission Program

Updates a Product Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | 
let updateProductCommissionProgramRequest = new KeapCoreServiceV2Sdk.UpdateProductCommissionProgramRequest(); // UpdateProductCommissionProgramRequest | 
let opts = {
  'updateMask': ["null"] // [String] | 
};
apiInstance.updateProductCommissionProgram(commissionProgramId, updateProductCommissionProgramRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**|  | 
 **updateProductCommissionProgramRequest** | [**UpdateProductCommissionProgramRequest**](UpdateProductCommissionProgramRequest.md)|  | 
 **updateMask** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRedirectLink

> AffiliateLink updateRedirectLink(redirectId, createOrUpdateAffiliateLinkRequest)

Update an Affiliate Link

Updates an Affiliate Link

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let redirectId = "redirectId_example"; // String | 
let createOrUpdateAffiliateLinkRequest = new KeapCoreServiceV2Sdk.CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | 
apiInstance.updateRedirectLink(redirectId, createOrUpdateAffiliateLinkRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**|  | 
 **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)|  | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSubscriptionCommissionProgram

> SubscriptionCommissionProgram updateSubscriptionCommissionProgram(commissionProgramId, updateSubscriptionCommissionProgramRequest, opts)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | 
let updateSubscriptionCommissionProgramRequest = new KeapCoreServiceV2Sdk.UpdateSubscriptionCommissionProgramRequest(); // UpdateSubscriptionCommissionProgramRequest | 
let opts = {
  'updateMask': ["null"] // [String] | 
};
apiInstance.updateSubscriptionCommissionProgram(commissionProgramId, updateSubscriptionCommissionProgramRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**|  | 
 **updateSubscriptionCommissionProgramRequest** | [**UpdateSubscriptionCommissionProgramRequest**](UpdateSubscriptionCommissionProgramRequest.md)|  | 
 **updateMask** | [**[String]**](String.md)|  | [optional] 

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

