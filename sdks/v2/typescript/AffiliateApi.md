# .AffiliateApi

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


# **addAffiliate**
> RestAffiliate addAffiliate(createAffiliateRequest)

Creates a single Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAddAffiliateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAddAffiliateRequest = {
  
  createAffiliateRequest: {
    code: "M123",
    status: "ACTIVE",
    name: "John Smith",
    contactId: "1",
    parentAffiliateId: "0",
    notifyOnSale: true,
    notifyOnLead: true,
    trackLeadsDays: 30,
    password: "password_example",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
  },
};

const data = await apiInstance.addAffiliate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAffiliateRequest** | **CreateAffiliateRequest**|  |


### Return type

**RestAffiliate**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  id: "id_example",
  
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
 **affiliateAddToProgramRequest** | **AffiliateAddToProgramRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addCommissionProgram**
> AffiliateCommissionProgramResponse addCommissionProgram(createCommissionProgramRequest)

Creates an Affiliate Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAddCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAddCommissionProgramRequest = {
  
  createCommissionProgramRequest: {
    name: "Fitness program",
    notes: "20% default commission",
    priority: 1,
  },
};

const data = await apiInstance.addCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCommissionProgramRequest** | **CreateCommissionProgramRequest**|  |


### Return type

**AffiliateCommissionProgramResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assignProductCommissionProgram**
> GetRestCommissionProgram assignProductCommissionProgram(createProductCommissionProgramRequest)

Assigns a Product Commission Program to a Product

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAssignProductCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAssignProductCommissionProgramRequest = {
  
  commissionProgramId: "commission_program_id_example",
  
  createProductCommissionProgramRequest: {
    percentage: "10.5",
    unused: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    dollarAmount: "25",
    level1: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    level2: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    payoutType: "UPFRONT",
    productId: "123",
  },
};

const data = await apiInstance.assignProductCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductCommissionProgramRequest** | **CreateProductCommissionProgramRequest**|  |
 **commissionProgramId** | [**string**] |  | defaults to undefined


### Return type

**GetRestCommissionProgram**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assignSubscriptionCommissionProgram**
> GetRestCommissionProgram assignSubscriptionCommissionProgram(createSubscriptionCommissionProgramRequest)

Assigns a Subscription Commission Program to a Subscription

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAssignSubscriptionCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAssignSubscriptionCommissionProgramRequest = {
  
  commissionProgramId: "commission_program_id_example",
  
  createSubscriptionCommissionProgramRequest: {
    percentage: "10.5",
    unused: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    dollarAmount: "25",
    level1: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    level2: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    payoutType: "UPFRONT",
    subscriptionId: "456",
  },
};

const data = await apiInstance.assignSubscriptionCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionCommissionProgramRequest** | **CreateSubscriptionCommissionProgramRequest**|  |
 **commissionProgramId** | [**string**] |  | defaults to undefined


### Return type

**GetRestCommissionProgram**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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

const data = await apiInstance.createAffiliateCustomField(request);
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDefaultCommissionProgram**
> GetRestCommissionProgram createDefaultCommissionProgram(createDefaultCommissionProgramRequest)

Creates a Default Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiCreateDefaultCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiCreateDefaultCommissionProgramRequest = {
  
  commissionProgramId: "commission_program_id_example",
  
  createDefaultCommissionProgramRequest: {
    percentage: "10.5",
    unused: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    dollarAmount: "25",
    level1: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    level2: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    payoutType: "UPFRONT",
  },
};

const data = await apiInstance.createDefaultCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDefaultCommissionProgramRequest** | **CreateDefaultCommissionProgramRequest**|  |
 **commissionProgramId** | [**string**] |  | defaults to undefined


### Return type

**GetRestCommissionProgram**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  createOrUpdateAffiliateLinkRequest: {
    name: "Fitness Program",
    code: "fP100",
    affiliateId: "1",
    websiteAddress: "https://thryv.com/promo",
    programIds: [1, 2],
  },
};

const data = await apiInstance.createRedirectLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateAffiliateLinkRequest** | **CreateOrUpdateAffiliateLinkRequest**|  |


### Return type

**AffiliateLink**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  id: "id_example",
};

const data = await apiInstance.deleteAffiliate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.deleteAffiliateCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | [**string**] |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteAffiliateCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  redirectId: "redirect_id_example",
};

const data = await apiInstance.deleteRedirectLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | [**string**] |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  id: "id_example",
};

const data = await apiInstance.getAffiliate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**RestAffiliate**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  affiliateId: "affiliate_id_example",
};

const data = await apiInstance.getAffiliateCommissionTotal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | [**string**] |  | defaults to undefined


### Return type

**AffiliateCommissionEarned**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAffiliateCommissions**
> ListAffiliateCommissionsResponse getAffiliateCommissions()

Retrieve a list of Affiliate\'s Commissions

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetAffiliateCommissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetAffiliateCommissionsRequest = {
  
  affiliateId: "affiliate_id_example",
    // Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z` - `filter=until_time%3D%3D2025-05-21T23:00:00Z`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `invoice_id` - `time_earned`  One of the following directions: - `asc` - `desc` (optional)
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
 **affiliateId** | [**string**] |  | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-05-21T23:00:00Z&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;time_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateCommissionsResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCommissionProgram**
> GetRestCommissionProgram getCommissionProgram()

Retrieves a single Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetCommissionProgramRequest = {
  
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.getCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | [**string**] |  | defaults to undefined


### Return type

**GetRestCommissionProgram**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  redirectId: "redirect_id_example",
};

const data = await apiInstance.getRedirectLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | [**string**] |  | defaults to undefined


### Return type

**AffiliateLink**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReferralsByAffiliateId**
> ListAffiliateReferralsResponse getReferralsByAffiliateId()

Retrieves all referrals belonging to the given affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetReferralsByAffiliateIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetReferralsByAffiliateIdRequest = {
  
  affiliateId: "affiliate_id_example",
};

const data = await apiInstance.getReferralsByAffiliateId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | [**string**] |  | defaults to undefined


### Return type

**ListAffiliateReferralsResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
    // Filter to apply, allowed fields are: - (String) `id` - Allowable operators: \"==\",\"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `name` - Wildcard matching allowed - (String) `contact_id` - (String) `referral_contact_id` - (String) `status` - (String) `code`  You will need to apply the `==` operator to check the equality of one of the filters with the value you want to match, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3C123` - `filter=id%3D%3D123` - `filter=name%3D%3DBob` - `filter=contact_id%3D%3D567` - `filter=contact_id%3D%3D123%3Bcode%3D%3D567`  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `date_created` - `name` - `status` - `code`  One of the following directions: - `asc` - `desc`  (optional)
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
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;name&#x60; - Wildcard matching allowed - (String) &#x60;contact_id&#x60; - (String) &#x60;referral_contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with the value you want to match, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3C123&#x60; - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;name%3D%3DBob&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bcode%3D%3D567&#x60;  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliatesResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  affiliateId: "affiliate_id_example",
    // Filter to apply, allowed fields are: - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=since_time%3D%3D2024-09-17T-15:50+00` - `filter=until_time%3D%3D2024-09-17T-15:50+00`  (optional)
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
 **affiliateId** | [**string**] |  | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60; - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;pay_date&#x60; - &#x60;pay_amount&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliatePaymentsResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCommissionProgramResources**
> ListProgramResourcesResponse listCommissionProgramResources()

Retrieves resources for a commission program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListCommissionProgramResourcesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListCommissionProgramResourcesRequest = {
  
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.listCommissionProgramResources(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | [**string**] |  | defaults to undefined


### Return type

**ListProgramResourcesResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
    // Filter to apply, allowed fields are: - (List[String]) `affiliate_ids` - (String) `since_time` - (String) `until_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional)
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
 **filter** | [**string**] | Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateSummariesResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  id: "id_example",
  
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
 **affiliateRemoveFromProgramRequest** | **AffiliateRemoveFromProgramRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  commissionId: "commission_id_example",
  
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
 **deleteProgramCommissionRequest** | **DeleteProgramCommissionRequest**|  |
 **commissionId** | [**string**] |  | defaults to undefined


### Return type

**void**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  commissionId: "commission_id_example",
  
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
 **deleteSubscriptionPlanCommissionRequest** | **DeleteSubscriptionPlanCommissionRequest**|  |
 **commissionId** | [**string**] |  | defaults to undefined


### Return type

**void**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAffiliate**
> RestAffiliate updateAffiliate(updateAffiliateRequest)

Updates a single Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateAffiliateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateAffiliateRequest = {
  
  id: "id_example",
  
  updateAffiliateRequest: {
    code: "M123",
    name: "John Smith",
    status: "ACTIVE",
    contactId: "1",
    parentAffiliateId: "0",
    notifyOnSale: true,
    notifyOnLead: true,
    trackLeadsDays: 30,
    password: "password_example",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateAffiliate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAffiliateRequest** | **UpdateAffiliateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestAffiliate**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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

const data = await apiInstance.updateAffiliateCustomField(request);
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  commissionProgramId: "commission_program_id_example",
  
  updateCommissionProgramRequest: {
    name: "Fitness program",
    notes: "20% default commission",
    priority: 1,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCommissionProgramRequest** | **UpdateCommissionProgramRequest**|  |
 **commissionProgramId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**AffiliateCommissionProgramResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDefaultCommissionProgram**
> GetRestCommissionProgram updateDefaultCommissionProgram(updateDefaultCommissionProgramRequest)

Updates a Default Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateDefaultCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateDefaultCommissionProgramRequest = {
  
  commissionProgramId: "commission_program_id_example",
  
  updateDefaultCommissionProgramRequest: {
    percentage: "10.5",
    unused: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    dollarAmount: "25",
    level1: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    level2: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    payoutType: "UPFRONT",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateDefaultCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDefaultCommissionProgramRequest** | **UpdateDefaultCommissionProgramRequest**|  |
 **commissionProgramId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**GetRestCommissionProgram**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProductCommissionProgram**
> GetRestCommissionProgram updateProductCommissionProgram(updateProductCommissionProgramRequest)

Updates a Product Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateProductCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateProductCommissionProgramRequest = {
  
  commissionProgramId: "commission_program_id_example",
  
  updateProductCommissionProgramRequest: {
    percentage: "10.5",
    unused: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    dollarAmount: "25",
    level1: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    level2: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    payoutType: "UPFRONT",
    productId: "123",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateProductCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductCommissionProgramRequest** | **UpdateProductCommissionProgramRequest**|  |
 **commissionProgramId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**GetRestCommissionProgram**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  redirectId: "redirect_id_example",
  
  createOrUpdateAffiliateLinkRequest: {
    name: "Fitness Program",
    code: "fP100",
    affiliateId: "1",
    websiteAddress: "https://thryv.com/promo",
    programIds: [1, 2],
  },
};

const data = await apiInstance.updateRedirectLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateAffiliateLinkRequest** | **CreateOrUpdateAffiliateLinkRequest**|  |
 **redirectId** | [**string**] |  | defaults to undefined


### Return type

**AffiliateLink**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSubscriptionCommissionProgram**
> GetRestCommissionProgram updateSubscriptionCommissionProgram(updateSubscriptionCommissionProgramRequest)

Updates a Subscription Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateSubscriptionCommissionProgramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateSubscriptionCommissionProgramRequest = {
  
  commissionProgramId: "commission_program_id_example",
  
  updateSubscriptionCommissionProgramRequest: {
    percentage: "10.5",
    unused: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    dollarAmount: "25",
    level1: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    level2: {
      salePercent: "10.5",
      saleAmount: "25",
      leadPercent: "10.5",
      leadAmount: "25",
    },
    payoutType: "UPFRONT",
    subscriptionId: "456",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateSubscriptionCommissionProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSubscriptionCommissionProgramRequest** | **UpdateSubscriptionCommissionProgramRequest**|  |
 **commissionProgramId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**GetRestCommissionProgram**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


