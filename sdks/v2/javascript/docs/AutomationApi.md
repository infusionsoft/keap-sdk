# KeapCoreServiceV2Sdk.AutomationApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**achieveGoal**](AutomationApi.md#achieveGoal) | **POST** /rest/v2/automations/goals/achieve | Achieve an Automation Goal
[**addContactsToAutomationSequence**](AutomationApi.md#addContactsToAutomationSequence) | **POST** /rest/v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence
[**bulkAssignmentAutomationsCategories**](AutomationApi.md#bulkAssignmentAutomationsCategories) | **POST** /rest/v2/automations/categories/batchAssign | Bulk update for Automations Categories
[**bulkUnpublishAutomations**](AutomationApi.md#bulkUnpublishAutomations) | **POST** /rest/v2/automations/batch-unpublish | Bulk unpublish Automations
[**deleteAutomation**](AutomationApi.md#deleteAutomation) | **DELETE** /rest/v2/automations | Delete an Automation
[**getAutomation**](AutomationApi.md#getAutomation) | **GET** /rest/v2/automations/{automation_id} | Retrieve an Automation
[**listAllAutomationIds**](AutomationApi.md#listAllAutomationIds) | **GET** /rest/v2/automations/ids | List Automations Ids
[**listAutomations**](AutomationApi.md#listAutomations) | **GET** /rest/v2/automations | List Automations
[**renameAutomationV2**](AutomationApi.md#renameAutomationV2) | **PATCH** /rest/v2/easy-automations/{automation_id} | Renames an Easy Automation.
[**unpublishAutomation**](AutomationApi.md#unpublishAutomation) | **PUT** /rest/v2/automations/{automation_id}/unpublish | Unpublish an Automation



## achieveGoal

> AchieveGoalResponse achieveGoal(achieveGoalRequest)

Achieve an Automation Goal

Achieves a goal in an automation for a contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let achieveGoalRequest = new KeapCoreServiceV2Sdk.AchieveGoalRequest(); // AchieveGoalRequest | 
apiInstance.achieveGoal(achieveGoalRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **achieveGoalRequest** | [**AchieveGoalRequest**](AchieveGoalRequest.md)|  | 

### Return type

[**AchieveGoalResponse**](AchieveGoalResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addContactsToAutomationSequence

> AddToAutomationSequenceResponse addContactsToAutomationSequence(automationId, sequenceId, addToAutomationSequenceRequest)

Add Contacts to an Automation Sequence

Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let automationId = "automationId_example"; // String | 
let sequenceId = "sequenceId_example"; // String | 
let addToAutomationSequenceRequest = new KeapCoreServiceV2Sdk.AddToAutomationSequenceRequest(); // AddToAutomationSequenceRequest | 
apiInstance.addContactsToAutomationSequence(automationId, sequenceId, addToAutomationSequenceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | **String**|  | 
 **sequenceId** | **String**|  | 
 **addToAutomationSequenceRequest** | [**AddToAutomationSequenceRequest**](AddToAutomationSequenceRequest.md)|  | 

### Return type

[**AddToAutomationSequenceResponse**](AddToAutomationSequenceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkAssignmentAutomationsCategories

> bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest)

Bulk update for Automations Categories

Bulk updates the categories of one or more automations

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let assignAutomationCategoryRequest = new KeapCoreServiceV2Sdk.AssignAutomationCategoryRequest(); // AssignAutomationCategoryRequest | 
apiInstance.bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignAutomationCategoryRequest** | [**AssignAutomationCategoryRequest**](AssignAutomationCategoryRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkUnpublishAutomations

> bulkUnpublishAutomations(batchUnpublishAutomationRequest)

Bulk unpublish Automations

Bulk unpublish one or more automations

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let batchUnpublishAutomationRequest = new KeapCoreServiceV2Sdk.BatchUnpublishAutomationRequest(); // BatchUnpublishAutomationRequest | 
apiInstance.bulkUnpublishAutomations(batchUnpublishAutomationRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchUnpublishAutomationRequest** | [**BatchUnpublishAutomationRequest**](BatchUnpublishAutomationRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAutomation

> deleteAutomation(automationIds)

Delete an Automation

Deletes a single automation

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let automationIds = [null]; // [Number] | 
apiInstance.deleteAutomation(automationIds).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationIds** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutomation

> Automation getAutomation(automationId)

Retrieve an Automation

Retrieves a single automation

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let automationId = "automationId_example"; // String | 
apiInstance.getAutomation(automationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | **String**|  | 

### Return type

[**Automation**](Automation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllAutomationIds

> ListAutomationIdsResponse listAllAutomationIds(opts)

List Automations Ids

Retrieves a list of automations IDs

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:  - `name` (String): Filter by automation name. Supports the `==` operator with optional prefix wildcard (`foo*`).   Without a wildcard, the search matches automations whose name contains the given text.   With a prefix wildcard, it matches automations whose name starts with the given text.   - `filter=name%3D%3DSpring Automation` — names containing \"Spring Automation\"   - `filter=name%3D%3DSpring*` — names starting with \"Spring\"  - `id` (Long): Filter by automation ID. Supports comparison operators:   `==` `!=` `>` `<` `>=` `<=`   - `filter=id%3E5` — id > 5   - `filter=id%3E%3D10` — id >= 10  - `status` (String): Filter by automation status. Accepted values: `published`, `draft`.   - `filter=status%3D%3Dpublished` — published automations only   - `filter=status%3D%3Ddraft` — draft automations only  - `categories` (String): Filter by category ID (comma-separated list of IDs).   - `filter=categories%3D%3D1` — automations in category 1   - `filter=categories%3D%3D1,2,3` — automations in categories 1, 2, or 3  Multiple filters can be combined with `;` (AND logic): - `filter=name%3D%3DSpring*%3Bautomation_id%3E5` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAllAutomationIds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:  - &#x60;name&#x60; (String): Filter by automation name. Supports the &#x60;&#x3D;&#x3D;&#x60; operator with optional prefix wildcard (&#x60;foo*&#x60;).   Without a wildcard, the search matches automations whose name contains the given text.   With a prefix wildcard, it matches automations whose name starts with the given text.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; — names containing \&quot;Spring Automation\&quot;   - &#x60;filter&#x3D;name%3D%3DSpring*&#x60; — names starting with \&quot;Spring\&quot;  - &#x60;id&#x60; (Long): Filter by automation ID. Supports comparison operators:   &#x60;&#x3D;&#x3D;&#x60; &#x60;!&#x3D;&#x60; &#x60;&gt;&#x60; &#x60;&lt;&#x60; &#x60;&gt;&#x3D;&#x60; &#x60;&lt;&#x3D;&#x60;   - &#x60;filter&#x3D;id%3E5&#x60; — id &gt; 5   - &#x60;filter&#x3D;id%3E%3D10&#x60; — id &gt;&#x3D; 10  - &#x60;status&#x60; (String): Filter by automation status. Accepted values: &#x60;published&#x60;, &#x60;draft&#x60;.   - &#x60;filter&#x3D;status%3D%3Dpublished&#x60; — published automations only   - &#x60;filter&#x3D;status%3D%3Ddraft&#x60; — draft automations only  - &#x60;categories&#x60; (String): Filter by category ID (comma-separated list of IDs).   - &#x60;filter&#x3D;categories%3D%3D1&#x60; — automations in category 1   - &#x60;filter&#x3D;categories%3D%3D1,2,3&#x60; — automations in categories 1, 2, or 3  Multiple filters can be combined with &#x60;;&#x60; (AND logic): - &#x60;filter&#x3D;name%3D%3DSpring*%3Bautomation_id%3E5&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAutomationIdsResponse**](ListAutomationIdsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAutomations

> ListAutomationResponse listAutomations(opts)

List Automations

Retrieves a list of automations

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:  - `name` (String): Filter by automation name. Supports the `==` operator with optional prefix wildcard (`foo*`).   Without a wildcard, the search matches automations whose name contains the given text.   With a prefix wildcard, it matches automations whose name starts with the given text.   - `filter=name%3D%3DSpring Automation` — names containing \"Spring Automation\"   - `filter=name%3D%3DSpring*` — names starting with \"Spring\"  - `id` (Long): Filter by automation ID. Supports comparison operators:   `==` `!=` `>` `<` `>=` `<=`   - `filter=id%3E5` — id > 5   - `filter=id%3E%3D10` — id >= 10  - `status` (String): Filter by automation status. Accepted values: `published`, `draft`.   - `filter=status%3D%3Dpublished` — published automations only   - `filter=status%3D%3Ddraft` — draft automations only  - `categories` (String): Filter by category ID (comma-separated list of IDs).   - `filter=categories%3D%3D1` — automations in category 1   - `filter=categories%3D%3D1,2,3` — automations in categories 1, 2, or 3  Multiple filters can be combined with `;` (AND logic): - `filter=name%3D%3DSpring*%3Bautomation_id%3E5` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `category` - `activeContacts` - `publishedDate`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAutomations(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:  - &#x60;name&#x60; (String): Filter by automation name. Supports the &#x60;&#x3D;&#x3D;&#x60; operator with optional prefix wildcard (&#x60;foo*&#x60;).   Without a wildcard, the search matches automations whose name contains the given text.   With a prefix wildcard, it matches automations whose name starts with the given text.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; — names containing \&quot;Spring Automation\&quot;   - &#x60;filter&#x3D;name%3D%3DSpring*&#x60; — names starting with \&quot;Spring\&quot;  - &#x60;id&#x60; (Long): Filter by automation ID. Supports comparison operators:   &#x60;&#x3D;&#x3D;&#x60; &#x60;!&#x3D;&#x60; &#x60;&gt;&#x60; &#x60;&lt;&#x60; &#x60;&gt;&#x3D;&#x60; &#x60;&lt;&#x3D;&#x60;   - &#x60;filter&#x3D;id%3E5&#x60; — id &gt; 5   - &#x60;filter&#x3D;id%3E%3D10&#x60; — id &gt;&#x3D; 10  - &#x60;status&#x60; (String): Filter by automation status. Accepted values: &#x60;published&#x60;, &#x60;draft&#x60;.   - &#x60;filter&#x3D;status%3D%3Dpublished&#x60; — published automations only   - &#x60;filter&#x3D;status%3D%3Ddraft&#x60; — draft automations only  - &#x60;categories&#x60; (String): Filter by category ID (comma-separated list of IDs).   - &#x60;filter&#x3D;categories%3D%3D1&#x60; — automations in category 1   - &#x60;filter&#x3D;categories%3D%3D1,2,3&#x60; — automations in categories 1, 2, or 3  Multiple filters can be combined with &#x60;;&#x60; (AND logic): - &#x60;filter&#x3D;name%3D%3DSpring*%3Bautomation_id%3E5&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAutomationResponse**](ListAutomationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## renameAutomationV2

> renameAutomationV2(automationId, renameEasyAutomationCommand)

Renames an Easy Automation.

Updates the name of a single easy automation.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let automationId = "HWv0fbDNDbWg6cFKY027"; // String | automation_id
let renameEasyAutomationCommand = new KeapCoreServiceV2Sdk.RenameEasyAutomationCommand(); // RenameEasyAutomationCommand | 
apiInstance.renameAutomationV2(automationId, renameEasyAutomationCommand).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | **String**| automation_id | 
 **renameEasyAutomationCommand** | [**RenameEasyAutomationCommand**](RenameEasyAutomationCommand.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unpublishAutomation

> unpublishAutomation(automationId, unpublishAutomationRequest)

Unpublish an Automation

Unpublishes a single automation

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.AutomationApi();
let automationId = "automationId_example"; // String | 
let unpublishAutomationRequest = new KeapCoreServiceV2Sdk.UnpublishAutomationRequest(); // UnpublishAutomationRequest | 
apiInstance.unpublishAutomation(automationId, unpublishAutomationRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | **String**|  | 
 **unpublishAutomationRequest** | [**UnpublishAutomationRequest**](UnpublishAutomationRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

