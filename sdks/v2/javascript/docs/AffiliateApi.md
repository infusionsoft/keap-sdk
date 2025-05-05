# KeapCoreServiceV2Sdk.AffiliateApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAffiliateToProgramUsingPOST**](AffiliateApi.md#addAffiliateToProgramUsingPOST) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**addAffiliateUsingPOST**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate
[**addCommissionProgramUsingPOST**](AffiliateApi.md#addCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assignProductCommissionProgramUsingPOST**](AffiliateApi.md#assignProductCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program
[**assignSubscriptionCommissionProgramUsingPOST**](AffiliateApi.md#assignSubscriptionCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program
[**createDefaultCommissionProgramUsingPOST**](AffiliateApi.md#createDefaultCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program
[**createRedirectLinkUsingPOST**](AffiliateApi.md#createRedirectLinkUsingPOST) | **POST** /v2/affiliates/redirects | Create an Affiliate Link
[**deleteAffiliateCommissionProgramUsingDELETE**](AffiliateApi.md#deleteAffiliateCommissionProgramUsingDELETE) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**deleteAffiliateUsingDELETE**](AffiliateApi.md#deleteAffiliateUsingDELETE) | **DELETE** /v2/affiliates/{id} | Delete Affiliate
[**deleteRedirectLinkUsingDELETE**](AffiliateApi.md#deleteRedirectLinkUsingDELETE) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**getAffiliateCommissionTotalUsingGET**](AffiliateApi.md#getAffiliateCommissionTotalUsingGET) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**getAffiliateCommissionsUsingGET**](AffiliateApi.md#getAffiliateCommissionsUsingGET) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks
[**getAffiliateUsingGET1**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
[**getCommissionProgramUsingGET**](AffiliateApi.md#getCommissionProgramUsingGET) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**getRedirectLinkUsingGET**](AffiliateApi.md#getRedirectLinkUsingGET) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**listAffiliateCommissionProgramsUsingGET**](AffiliateApi.md#listAffiliateCommissionProgramsUsingGET) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**listAffiliateLinksUsingGET**](AffiliateApi.md#listAffiliateLinksUsingGET) | **GET** /v2/affiliates/redirects | List Affiliate Links
[**listSummariesUsingGET1**](AffiliateApi.md#listSummariesUsingGET1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries
[**removeAffiliateFromProgramUsingPOST**](AffiliateApi.md#removeAffiliateFromProgramUsingPOST) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**removeProductCommissionFromCommissionsUsingPOST**](AffiliateApi.md#removeProductCommissionFromCommissionsUsingPOST) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program
[**removeSubscriptionPlanCommissionFromCommissionsUsingPOST**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOST) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**updateAffiliateUsingPATCH**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate
[**updateCommissionProgramUsingPATCH**](AffiliateApi.md#updateCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program
[**updateDefaultCommissionProgramUsingPATCH**](AffiliateApi.md#updateDefaultCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**updateProductCommissionProgramUsingPATCH**](AffiliateApi.md#updateProductCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**updateRedirectLinkUsingPATCH**](AffiliateApi.md#updateRedirectLinkUsingPATCH) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link
[**updateSubscriptionCommissionProgramUsingPATCH**](AffiliateApi.md#updateSubscriptionCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program



## addAffiliateToProgramUsingPOST

> addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let id = "id_example"; // String | id
let affiliateAddToProgramRequest = new KeapCoreServiceV2Sdk.AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | affiliateAddToProgramRequest
apiInstance.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)| affiliateAddToProgramRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addAffiliateUsingPOST

> RestAffiliate addAffiliateUsingPOST(opts)

Create an Affiliate

Creates a single Affiliate

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let opts = {
  'createAffiliateRequest': new KeapCoreServiceV2Sdk.CreateAffiliateRequest() // CreateAffiliateRequest | Affiliate request to insert
};
apiInstance.addAffiliateUsingPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAffiliateRequest** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)| Affiliate request to insert | [optional] 

### Return type

[**RestAffiliate**](RestAffiliate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addCommissionProgramUsingPOST

> AffiliateCommissionProgramResponse addCommissionProgramUsingPOST(opts)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let opts = {
  'createCommissionProgramRequest': new KeapCoreServiceV2Sdk.CreateCommissionProgramRequest() // CreateCommissionProgramRequest | Commission Program to insert
};
apiInstance.addCommissionProgramUsingPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCommissionProgramRequest** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)| Commission Program to insert | [optional] 

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assignProductCommissionProgramUsingPOST

> ProductCommissionProgram assignProductCommissionProgramUsingPOST(commissionProgramId, opts)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'createProductCommissionProgramRequest': new KeapCoreServiceV2Sdk.CreateProductCommissionProgramRequest() // CreateProductCommissionProgramRequest | Product Commission Program
};
apiInstance.assignProductCommissionProgramUsingPOST(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **createProductCommissionProgramRequest** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)| Product Commission Program | [optional] 

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assignSubscriptionCommissionProgramUsingPOST

> SubscriptionCommissionProgram assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, opts)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'createSubscriptionCommissionProgramRequest': new KeapCoreServiceV2Sdk.CreateSubscriptionCommissionProgramRequest() // CreateSubscriptionCommissionProgramRequest | Subscription Commission Program
};
apiInstance.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **createSubscriptionCommissionProgramRequest** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)| Subscription Commission Program | [optional] 

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDefaultCommissionProgramUsingPOST

> SetDefaultCommissionProgramResponse createDefaultCommissionProgramUsingPOST(commissionProgramId, opts)

Create a Default Commission Program

Creates a Default Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'createDefaultCommissionProgramRequest': new KeapCoreServiceV2Sdk.CreateDefaultCommissionProgramRequest() // CreateDefaultCommissionProgramRequest | Values of the Default Commission Program
};
apiInstance.createDefaultCommissionProgramUsingPOST(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)| Values of the Default Commission Program | [optional] 

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRedirectLinkUsingPOST

> AffiliateLink createRedirectLinkUsingPOST(createOrUpdateAffiliateLinkRequest)

Create an Affiliate Link

Creates a single Affiliate Link

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let createOrUpdateAffiliateLinkRequest = new KeapCoreServiceV2Sdk.CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | request
apiInstance.createRedirectLinkUsingPOST(createOrUpdateAffiliateLinkRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)| request | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAffiliateCommissionProgramUsingDELETE

> deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
apiInstance.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAffiliateUsingDELETE

> deleteAffiliateUsingDELETE(id)

Delete Affiliate

Deletes the specified Affiliate

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let id = "id_example"; // String | id
apiInstance.deleteAffiliateUsingDELETE(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRedirectLinkUsingDELETE

> deleteRedirectLinkUsingDELETE(redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let redirectId = "redirectId_example"; // String | redirect_id
apiInstance.deleteRedirectLinkUsingDELETE(redirectId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| redirect_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCommissionTotalUsingGET

> AffiliateCommissionEarned getAffiliateCommissionTotalUsingGET(affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let affiliateId = "affiliateId_example"; // String | affiliate_id
apiInstance.getAffiliateCommissionTotalUsingGET(affiliateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | **String**| affiliate_id | 

### Return type

[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCommissionsUsingGET

> ListAffiliateCommissionsResponse getAffiliateCommissionsUsingGET(affiliateId, opts)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate&#39;s Commissions and Clawbacks

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let affiliateId = "affiliateId_example"; // String | affiliate_id
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `affiliateId` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliateId%3D%3D123` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `invoice_id` - `affowed_id` - `date_earned`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.getAffiliateCommissionsUsingGET(affiliateId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | **String**| affiliate_id | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;affiliateId&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliateId%3D%3D123&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;affowed_id&#x60; - &#x60;date_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateCommissionsResponse**](ListAffiliateCommissionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateUsingGET1

> RestAffiliate getAffiliateUsingGET1(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let id = "id_example"; // String | id
apiInstance.getAffiliateUsingGET1(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**RestAffiliate**](RestAffiliate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCommissionProgramUsingGET

> AffiliateProgramV2 getCommissionProgramUsingGET(commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
apiInstance.getCommissionProgramUsingGET(commissionProgramId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 

### Return type

[**AffiliateProgramV2**](AffiliateProgramV2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRedirectLinkUsingGET

> AffiliateLink getRedirectLinkUsingGET(redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let redirectId = "redirectId_example"; // String | redirect_id
apiInstance.getRedirectLinkUsingGET(redirectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| redirect_id | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAffiliateCommissionProgramsUsingGET

> ListAffiliateCommissionProgramsResponse listAffiliateCommissionProgramsUsingGET(opts)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAffiliateCommissionProgramsUsingGET(opts).then((data) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAffiliateLinksUsingGET

> ListAffiliateLinksResponse listAffiliateLinksUsingGET(opts)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAffiliateLinksUsingGET(opts).then((data) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSummariesUsingGET1

> ListAffiliateSummariesResponse listSummariesUsingGET1(opts)

List Affiliate Summaries

Retrieves a list of Affiliate Summaries

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `affiliate_id` - `amount_earned` - `balance` - `clawbacks`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listSummariesUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeAffiliateFromProgramUsingPOST

> removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let id = "id_example"; // String | id
let affiliateRemoveFromProgramRequest = new KeapCoreServiceV2Sdk.AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | removeFromProgramRequest
apiInstance.removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **affiliateRemoveFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)| removeFromProgramRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeProductCommissionFromCommissionsUsingPOST

> removeProductCommissionFromCommissionsUsingPOST(commissionId, deleteProgramCommissionRequest)

Remove a Product from a Commission Program

Removes a Product from a Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionId = "commissionId_example"; // String | commission_id
let deleteProgramCommissionRequest = new KeapCoreServiceV2Sdk.DeleteProgramCommissionRequest(); // DeleteProgramCommissionRequest | deleteProgramCommissionRequest
apiInstance.removeProductCommissionFromCommissionsUsingPOST(commissionId, deleteProgramCommissionRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionId** | **String**| commission_id | 
 **deleteProgramCommissionRequest** | [**DeleteProgramCommissionRequest**](DeleteProgramCommissionRequest.md)| deleteProgramCommissionRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeSubscriptionPlanCommissionFromCommissionsUsingPOST

> removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionId = "commissionId_example"; // String | commission_id
let deleteSubscriptionPlanCommissionRequest = new KeapCoreServiceV2Sdk.DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest
apiInstance.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionId** | **String**| commission_id | 
 **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)| deleteSubscriptionPlanCommissionRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAffiliateUsingPATCH

> RestAffiliate updateAffiliateUsingPATCH(id, opts)

Update an Affiliate

Updates a single Affiliate

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let id = "id_example"; // String | id
let opts = {
  'updateAffiliateRequest': new KeapCoreServiceV2Sdk.UpdateAffiliateRequest() // UpdateAffiliateRequest | Request to update an affiliate
};
apiInstance.updateAffiliateUsingPATCH(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **updateAffiliateRequest** | [**UpdateAffiliateRequest**](UpdateAffiliateRequest.md)| Request to update an affiliate | [optional] 

### Return type

[**RestAffiliate**](RestAffiliate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCommissionProgramUsingPATCH

> AffiliateCommissionProgramResponse updateCommissionProgramUsingPATCH(commissionProgramId, updateCommissionProgramRequest, opts)

Update an Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let updateCommissionProgramRequest = new KeapCoreServiceV2Sdk.UpdateCommissionProgramRequest(); // UpdateCommissionProgramRequest | updateCommissionProgramRequest
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateCommissionProgramUsingPATCH(commissionProgramId, updateCommissionProgramRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **updateCommissionProgramRequest** | [**UpdateCommissionProgramRequest**](UpdateCommissionProgramRequest.md)| updateCommissionProgramRequest | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDefaultCommissionProgramUsingPATCH

> SetDefaultCommissionProgramResponse updateDefaultCommissionProgramUsingPATCH(commissionProgramId, opts)

Update a Default Commission Program

Updates a Default Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'updateMask': ["null"], // [String] | update_mask
  'updateDefaultCommissionProgramRequest': new KeapCoreServiceV2Sdk.UpdateDefaultCommissionProgramRequest() // UpdateDefaultCommissionProgramRequest | Values of the default Commission Program
};
apiInstance.updateDefaultCommissionProgramUsingPATCH(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **updateMask** | [**[String]**](String.md)| update_mask | [optional] 
 **updateDefaultCommissionProgramRequest** | [**UpdateDefaultCommissionProgramRequest**](UpdateDefaultCommissionProgramRequest.md)| Values of the default Commission Program | [optional] 

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductCommissionProgramUsingPATCH

> ProductCommissionProgram updateProductCommissionProgramUsingPATCH(commissionProgramId, opts)

Update a Product Commission Program

Updates a Product Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'updateMask': ["null"], // [String] | update_mask
  'updateProductCommissionProgramRequest': new KeapCoreServiceV2Sdk.UpdateProductCommissionProgramRequest() // UpdateProductCommissionProgramRequest | Values of the product Commission Program
};
apiInstance.updateProductCommissionProgramUsingPATCH(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **updateMask** | [**[String]**](String.md)| update_mask | [optional] 
 **updateProductCommissionProgramRequest** | [**UpdateProductCommissionProgramRequest**](UpdateProductCommissionProgramRequest.md)| Values of the product Commission Program | [optional] 

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRedirectLinkUsingPATCH

> AffiliateLink updateRedirectLinkUsingPATCH(redirectId, createOrUpdateAffiliateLinkRequest)

Update an Affiliate Link

Updates an Affiliate Link

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let redirectId = "redirectId_example"; // String | redirect_id
let createOrUpdateAffiliateLinkRequest = new KeapCoreServiceV2Sdk.CreateOrUpdateAffiliateLinkRequest(); // CreateOrUpdateAffiliateLinkRequest | request
apiInstance.updateRedirectLinkUsingPATCH(redirectId, createOrUpdateAffiliateLinkRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| redirect_id | 
 **createOrUpdateAffiliateLinkRequest** | [**CreateOrUpdateAffiliateLinkRequest**](CreateOrUpdateAffiliateLinkRequest.md)| request | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSubscriptionCommissionProgramUsingPATCH

> SubscriptionCommissionProgram updateSubscriptionCommissionProgramUsingPATCH(commissionProgramId, opts)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'updateMask': ["null"], // [String] | update_mask
  'updateSubscriptionCommissionProgramRequest': new KeapCoreServiceV2Sdk.UpdateSubscriptionCommissionProgramRequest() // UpdateSubscriptionCommissionProgramRequest | Values of the subscription Commission Program
};
apiInstance.updateSubscriptionCommissionProgramUsingPATCH(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **updateMask** | [**[String]**](String.md)| update_mask | [optional] 
 **updateSubscriptionCommissionProgramRequest** | [**UpdateSubscriptionCommissionProgramRequest**](UpdateSubscriptionCommissionProgramRequest.md)| Values of the subscription Commission Program | [optional] 

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

