# .AffiliateApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAffiliate**](AffiliateApi.md#addAffiliate) | **POST** /v2/affiliates | Create an Affiliate
[**addAffiliateToProgram**](AffiliateApi.md#addAffiliateToProgram) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**addCommissionProgram**](AffiliateApi.md#addCommissionProgram) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assignProductCommissionProgram**](AffiliateApi.md#assignProductCommissionProgram) | **POST** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Assign a Product Commission Program
[**assignSubscriptionCommissionProgram**](AffiliateApi.md#assignSubscriptionCommissionProgram) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Assign a Subscription Commission Program
[**createAffiliateCustomField**](AffiliateApi.md#createAffiliateCustomField) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field
[**createDefaultCommissionProgram**](AffiliateApi.md#createDefaultCommissionProgram) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Create a Default Commission Program
[**createRedirectLink**](AffiliateApi.md#createRedirectLink) | **POST** /v2/affiliates/redirects | Create an Affiliate Link
[**deleteAffiliate**](AffiliateApi.md#deleteAffiliate) | **DELETE** /v2/affiliates/{id} | Delete Affiliate
[**deleteAffiliateCommissionProgram**](AffiliateApi.md#deleteAffiliateCommissionProgram) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**deleteAffiliateCustomField**](AffiliateApi.md#deleteAffiliateCustomField) | **DELETE** /v2/affiliates/model/customFields/{custom_field_id} | Delete a Custom Field
[**deleteRedirectLink**](AffiliateApi.md#deleteRedirectLink) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**getAffiliate**](AffiliateApi.md#getAffiliate) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
[**getAffiliateCommissionTotal**](AffiliateApi.md#getAffiliateCommissionTotal) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**getAffiliateCommissions**](AffiliateApi.md#getAffiliateCommissions) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks
[**getAffiliateCustomFields**](AffiliateApi.md#getAffiliateCustomFields) | **GET** /v2/affiliates/model | Retrieve Affiliate Model
[**getCommissionProgram**](AffiliateApi.md#getCommissionProgram) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**getRedirectLink**](AffiliateApi.md#getRedirectLink) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**listAffiliate**](AffiliateApi.md#listAffiliate) | **GET** /v2/affiliates | List Affiliates
[**listAffiliateCommissionPrograms**](AffiliateApi.md#listAffiliateCommissionPrograms) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**listAffiliateLinks**](AffiliateApi.md#listAffiliateLinks) | **GET** /v2/affiliates/redirects | List Affiliate Links
[**listAffiliatePayments**](AffiliateApi.md#listAffiliatePayments) | **GET** /v2/affiliates/{affiliate_id}/payments | List Affiliate Payments
[**listSummaries**](AffiliateApi.md#listSummaries) | **GET** /v2/affiliates/summaries | List Affiliate Summaries
[**removeAffiliateFromProgram**](AffiliateApi.md#removeAffiliateFromProgram) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**removeProductCommissionFromCommissions**](AffiliateApi.md#removeProductCommissionFromCommissions) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeProductCommission | Remove a Product from a Commission Program
[**removeSubscriptionPlanCommissionFromCommissions**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissions) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**updateAffiliate**](AffiliateApi.md#updateAffiliate) | **PATCH** /v2/affiliates/{id} | Update an Affiliate
[**updateAffiliateCustomField**](AffiliateApi.md#updateAffiliateCustomField) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field
[**updateCommissionProgram**](AffiliateApi.md#updateCommissionProgram) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update an Affiliate Commission Program
[**updateDefaultCommissionProgram**](AffiliateApi.md#updateDefaultCommissionProgram) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**updateProductCommissionProgram**](AffiliateApi.md#updateProductCommissionProgram) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**updateRedirectLink**](AffiliateApi.md#updateRedirectLink) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link
[**updateSubscriptionCommissionProgram**](AffiliateApi.md#updateSubscriptionCommissionProgram) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program


# **addAffiliate**
> RestAffiliate addAffiliate()

Creates a single Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAddAffiliateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAddAffiliateRequest = {
    // Affiliate request to insert (optional)
  createAffiliateRequest: {
    code: "M123",
    contactId: "1",
    name: "Affiliate Name",
    status: "active",
  },
};

const data = await apiInstance.addAffiliate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAffiliateRequest** | **CreateAffiliateRequest**| Affiliate request to insert |


### Return type

**RestAffiliate**

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

# **addAffiliateToProgram**
> void addAffiliateToProgram(affiliateAddToProgramRequest)

Assigns an Affiliate to Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAddAffiliateToProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAddAffiliateToProgramRequest = {
    // id
  id: "id_example",
    // affiliateAddToProgramRequest
  affiliateAddToProgramRequest: {
    affiliateProgramId: "affiliateProgramId_example",
  },
};

const data = await apiInstance.addAffiliateToProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateAddToProgramRequest** | **AffiliateAddToProgramRequest**| affiliateAddToProgramRequest |
 **id** | [**string**] | id | defaults to undefined


### Return type

**void**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addCommissionProgram**
> AffiliateCommissionProgramResponse addCommissionProgram()

Creates an Affiliate Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAddCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAddCommissionProgramRequest = {
    // Commission Program to insert (optional)
  createCommissionProgramRequest: {
    name: "Fitness program",
    notes: "20% default commission",
    priority: 100,
  },
};

const data = await apiInstance.addCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCommissionProgramRequest** | **CreateCommissionProgramRequest**| Commission Program to insert |


### Return type

**AffiliateCommissionProgramResponse**

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

# **assignProductCommissionProgram**
> ProductCommissionProgram assignProductCommissionProgram()

Assigns a Product Commission Program to a Product

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAssignProductCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAssignProductCommissionProgramRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Product Commission Program (optional)
  createProductCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    productId: "productId_example",
  },
};

const data = await apiInstance.assignProductCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductCommissionProgramRequest** | **CreateProductCommissionProgramRequest**| Product Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**ProductCommissionProgram**

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

# **assignSubscriptionCommissionProgram**
> SubscriptionCommissionProgram assignSubscriptionCommissionProgram()

Assigns a Subscription Commission Program to a Subscription

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAssignSubscriptionCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAssignSubscriptionCommissionProgramRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Subscription Commission Program (optional)
  createSubscriptionCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    subscriptionId: "subscriptionId_example",
  },
};

const data = await apiInstance.assignSubscriptionCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionCommissionProgramRequest** | **CreateSubscriptionCommissionProgramRequest**| Subscription Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**SubscriptionCommissionProgram**

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

# **createAffiliateCustomField**
> CustomFieldMetaData createAffiliateCustomField(createCustomFieldRequest)

Creates a single Affiliate Custom Field

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiCreateAffiliateCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiCreateAffiliateCustomFieldRequest = {
    // customField
  createCustomFieldRequest: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createAffiliateCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

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

# **createDefaultCommissionProgram**
> SetDefaultCommissionProgramResponse createDefaultCommissionProgram()

Creates a Default Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiCreateDefaultCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiCreateDefaultCommissionProgramRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Values of the Default Commission Program (optional)
  createDefaultCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
  },
};

const data = await apiInstance.createDefaultCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDefaultCommissionProgramRequest** | **CreateDefaultCommissionProgramRequest**| Values of the Default Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**SetDefaultCommissionProgramResponse**

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

# **createRedirectLink**
> AffiliateLink createRedirectLink(createOrUpdateAffiliateLinkRequest)

Creates a single Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiCreateRedirectLinkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiCreateRedirectLinkRequest = {
    // request
  createOrUpdateAffiliateLinkRequest: {
    affiliateId: "1",
    code: "fP100",
    name: "Fitness Program",
    programIds: [
      "programIds_example",
    ],
    websiteAddress: "www.fitnessProgram.com",
  },
};

const data = await apiInstance.createRedirectLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateAffiliateLinkRequest** | **CreateOrUpdateAffiliateLinkRequest**| request |


### Return type

**AffiliateLink**

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

# **deleteAffiliate**
> void deleteAffiliate()

Deletes the specified Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiDeleteAffiliateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiDeleteAffiliateRequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.deleteAffiliate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined


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

# **deleteAffiliateCommissionProgram**
> void deleteAffiliateCommissionProgram()

Deletes a Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiDeleteAffiliateCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiDeleteAffiliateCommissionProgramRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.deleteAffiliateCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


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

# **deleteAffiliateCustomField**
> void deleteAffiliateCustomField()

Deletes a Custom Field from Affiliate.

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiDeleteAffiliateCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiDeleteAffiliateCustomFieldRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteAffiliateCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined


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

# **deleteRedirectLink**
> void deleteRedirectLink()

Deletes an Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiDeleteRedirectLinkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiDeleteRedirectLinkRequest = {
    // redirect_id
  redirectId: "redirect_id_example",
};

const data = await apiInstance.deleteRedirectLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | [**string**] | redirect_id | defaults to undefined


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

# **getAffiliate**
> RestAffiliate getAffiliate()

Retrieves a single Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetAffiliateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetAffiliateRequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.getAffiliate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined


### Return type

**RestAffiliate**

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

# **getAffiliateCommissionTotal**
> AffiliateCommissionEarned getAffiliateCommissionTotal()

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetAffiliateCommissionTotalRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetAffiliateCommissionTotalRequest = {
    // affiliate_id
  affiliateId: "affiliate_id_example",
};

const data = await apiInstance.getAffiliateCommissionTotal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | [**string**] | affiliate_id | defaults to undefined


### Return type

**AffiliateCommissionEarned**

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

# **getAffiliateCommissions**
> ListAffiliateCommissionsResponse getAffiliateCommissions()

Retrieve a list of Affiliate\'s Commissions and Clawbacks

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetAffiliateCommissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetAffiliateCommissionsRequest = {
    // affiliate_id
  affiliateId: "affiliate_id_example",
    // Filter to apply, allowed fields are: - (String) `affiliateId` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliateId%3D%3D123`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `invoice_id` - `affowed_id` - `date_earned`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.getAffiliateCommissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | [**string**] | affiliate_id | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;affiliateId&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliateId%3D%3D123&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;affowed_id&#x60; - &#x60;date_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateCommissionsResponse**

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

# **getAffiliateCustomFields**
> ObjectModel getAffiliateCustomFields()

Get the custom fields and optional properties for the Affiliate object

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request = {};

const data = await apiInstance.getAffiliateCustomFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

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

# **getCommissionProgram**
> AffiliateProgramV2 getCommissionProgram()

Retrieves a single Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetCommissionProgramRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.getCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**AffiliateProgramV2**

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

# **getRedirectLink**
> AffiliateLink getRedirectLink()

Retrieves information about a single Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetRedirectLinkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetRedirectLinkRequest = {
    // redirect_id
  redirectId: "redirect_id_example",
};

const data = await apiInstance.getRedirectLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | [**string**] | redirect_id | defaults to undefined


### Return type

**AffiliateLink**

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

# **listAffiliate**
> ListAffiliatesResponse listAffiliate()

Retrieves a list of Affiliates

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListAffiliateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListAffiliateRequest = {
    // Filter to apply, allowed fields are: - (String) `affiliate_name` - (String) `contact_id` - (String) `status` - (String) `code`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `name` - `status` - `code`  One of the following directions: - `asc` - `desc`  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAffiliate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;affiliate_name&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliatesResponse**

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

# **listAffiliateCommissionPrograms**
> ListAffiliateCommissionProgramsResponse listAffiliateCommissionPrograms()

Retrieves a list of Affiliate Commission Programs

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListAffiliateCommissionProgramsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListAffiliateCommissionProgramsRequest = {
    // Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAffiliateCommissionPrograms(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateCommissionProgramsResponse**

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

# **listAffiliateLinks**
> ListAffiliateLinksResponse listAffiliateLinks()

Retrieves a list of Affiliate Links

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListAffiliateLinksRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListAffiliateLinksRequest = {
    // Filter to apply, allowed fields are: - (String) `name` - (String) `affiliate_id`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `date_created`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAffiliateLinks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateLinksResponse**

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

# **listAffiliatePayments**
> ListAffiliatePaymentsResponse listAffiliatePayments()

Retrieves a list of affiliate payments

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListAffiliatePaymentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListAffiliatePaymentsRequest = {
    // affiliate_id
  affiliateId: "affiliate_id_example",
    // Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-09-17T-15:50+00` - `filter=until_time%3D%3D2024-09-17T-15:50+00`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `create_time` - `pay_date` - `pay_amount`  One of the following directions: - `asc` - `desc`  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAffiliatePayments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | [**string**] | affiliate_id | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60; - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;pay_date&#x60; - &#x60;pay_amount&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliatePaymentsResponse**

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

# **listSummaries**
> ListAffiliateSummariesResponse listSummaries()

Retrieves a list of Affiliate Summaries

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListSummariesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListSummariesRequest = {
    // Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `affiliate_id` - `amount_earned` - `balance` - `clawbacks`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listSummaries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateSummariesResponse**

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

# **removeAffiliateFromProgram**
> void removeAffiliateFromProgram(affiliateRemoveFromProgramRequest)

Removes an Affiliate from a Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiRemoveAffiliateFromProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiRemoveAffiliateFromProgramRequest = {
    // id
  id: "id_example",
    // removeFromProgramRequest
  affiliateRemoveFromProgramRequest: {
    affiliateProgramId: "affiliateProgramId_example",
  },
};

const data = await apiInstance.removeAffiliateFromProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateRemoveFromProgramRequest** | **AffiliateRemoveFromProgramRequest**| removeFromProgramRequest |
 **id** | [**string**] | id | defaults to undefined


### Return type

**void**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeProductCommissionFromCommissions**
> void removeProductCommissionFromCommissions(deleteProgramCommissionRequest)

Removes a Product from a Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiRemoveProductCommissionFromCommissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiRemoveProductCommissionFromCommissionsRequest = {
    // commission_id
  commissionId: "commission_id_example",
    // deleteProgramCommissionRequest
  deleteProgramCommissionRequest: {
    productId: "productId_example",
  },
};

const data = await apiInstance.removeProductCommissionFromCommissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteProgramCommissionRequest** | **DeleteProgramCommissionRequest**| deleteProgramCommissionRequest |
 **commissionId** | [**string**] | commission_id | defaults to undefined


### Return type

**void**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeSubscriptionPlanCommissionFromCommissions**
> void removeSubscriptionPlanCommissionFromCommissions(deleteSubscriptionPlanCommissionRequest)

Removes a Subscription from a Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsRequest = {
    // commission_id
  commissionId: "commission_id_example",
    // deleteSubscriptionPlanCommissionRequest
  deleteSubscriptionPlanCommissionRequest: {
    productId: "productId_example",
    subscriptionPlanId: "subscriptionPlanId_example",
  },
};

const data = await apiInstance.removeSubscriptionPlanCommissionFromCommissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteSubscriptionPlanCommissionRequest** | **DeleteSubscriptionPlanCommissionRequest**| deleteSubscriptionPlanCommissionRequest |
 **commissionId** | [**string**] | commission_id | defaults to undefined


### Return type

**void**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAffiliate**
> RestAffiliate updateAffiliate()

Updates a single Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateAffiliateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateAffiliateRequest = {
    // id
  id: "id_example",
    // Request to update an affiliate (optional)
  updateAffiliateRequest: {
    code: "M123",
    contactId: "1",
    name: "Affiliate Name",
    status: "ACTIVE",
  },
};

const data = await apiInstance.updateAffiliate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAffiliateRequest** | **UpdateAffiliateRequest**| Request to update an affiliate |
 **id** | [**string**] | id | defaults to undefined


### Return type

**RestAffiliate**

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

# **updateAffiliateCustomField**
> CustomFieldMetaData updateAffiliateCustomField(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Affiliate object.

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateAffiliateCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateAffiliateCustomFieldRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  updateCustomFieldMetaDataRequest: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateAffiliateCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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

# **updateCommissionProgram**
> AffiliateCommissionProgramResponse updateCommissionProgram(updateCommissionProgramRequest)

Updates the properties of an Affiliate Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateCommissionProgramRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // updateCommissionProgramRequest
  updateCommissionProgramRequest: {
    name: "Fitness program",
    notes: "20% default commission",
    priority: 100,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCommissionProgramRequest** | **UpdateCommissionProgramRequest**| updateCommissionProgramRequest |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**AffiliateCommissionProgramResponse**

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

# **updateDefaultCommissionProgram**
> SetDefaultCommissionProgramResponse updateDefaultCommissionProgram()

Updates a Default Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateDefaultCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateDefaultCommissionProgramRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // update_mask (optional)
  updateMask: [
    "update_mask_example",
  ],
    // Values of the default Commission Program (optional)
  updateDefaultCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
  },
};

const data = await apiInstance.updateDefaultCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDefaultCommissionProgramRequest** | **UpdateDefaultCommissionProgramRequest**| Values of the default Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | update_mask | (optional) defaults to undefined


### Return type

**SetDefaultCommissionProgramResponse**

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

# **updateProductCommissionProgram**
> ProductCommissionProgram updateProductCommissionProgram()

Updates a Product Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateProductCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateProductCommissionProgramRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // update_mask (optional)
  updateMask: [
    "update_mask_example",
  ],
    // Values of the product Commission Program (optional)
  updateProductCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    productId: "productId_example",
  },
};

const data = await apiInstance.updateProductCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductCommissionProgramRequest** | **UpdateProductCommissionProgramRequest**| Values of the product Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | update_mask | (optional) defaults to undefined


### Return type

**ProductCommissionProgram**

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

# **updateRedirectLink**
> AffiliateLink updateRedirectLink(createOrUpdateAffiliateLinkRequest)

Updates an Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateRedirectLinkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateRedirectLinkRequest = {
    // redirect_id
  redirectId: "redirect_id_example",
    // request
  createOrUpdateAffiliateLinkRequest: {
    affiliateId: "1",
    code: "fP100",
    name: "Fitness Program",
    programIds: [
      "programIds_example",
    ],
    websiteAddress: "www.fitnessProgram.com",
  },
};

const data = await apiInstance.updateRedirectLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateAffiliateLinkRequest** | **CreateOrUpdateAffiliateLinkRequest**| request |
 **redirectId** | [**string**] | redirect_id | defaults to undefined


### Return type

**AffiliateLink**

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

# **updateSubscriptionCommissionProgram**
> SubscriptionCommissionProgram updateSubscriptionCommissionProgram()

Updates a Subscription Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateSubscriptionCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateSubscriptionCommissionProgramRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // update_mask (optional)
  updateMask: [
    "update_mask_example",
  ],
    // Values of the subscription Commission Program (optional)
  updateSubscriptionCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    subscriptionId: "subscriptionId_example",
  },
};

const data = await apiInstance.updateSubscriptionCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSubscriptionCommissionProgramRequest** | **UpdateSubscriptionCommissionProgramRequest**| Values of the subscription Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | update_mask | (optional) defaults to undefined


### Return type

**SubscriptionCommissionProgram**

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


