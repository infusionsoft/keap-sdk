# KeapCoreServiceV2Sdk.OpportunityApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOpportunity**](OpportunityApi.md#createOpportunity) | **POST** /rest/v2/opportunities | Create an Opportunity
[**createOpportunityCustomFieldGroup**](OpportunityApi.md#createOpportunityCustomFieldGroup) | **POST** /rest/v2/opportunities/model/customFields/groups | Create an Opportunity Custom Field Group
[**createOpportunityCustomFieldTab**](OpportunityApi.md#createOpportunityCustomFieldTab) | **POST** /rest/v2/opportunities/model/customFields/tabs | Create an Opportunity Custom Field Tab
[**createOpportunityCustomFields**](OpportunityApi.md#createOpportunityCustomFields) | **POST** /rest/v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**createOpportunityStage**](OpportunityApi.md#createOpportunityStage) | **POST** /rest/v2/opportunities/stages | Create an Opportunity Stage
[**deleteOpportunitiesCustomField**](OpportunityApi.md#deleteOpportunitiesCustomField) | **DELETE** /rest/v2/opportunities/model/customFields/{custom_field_id} | Delete an Opportunity Custom Field
[**deleteOpportunity**](OpportunityApi.md#deleteOpportunity) | **DELETE** /rest/v2/opportunities/{opportunity_id} | Delete an Opportunity
[**deleteOpportunityCustomFieldGroup**](OpportunityApi.md#deleteOpportunityCustomFieldGroup) | **DELETE** /rest/v2/opportunities/model/customFields/groups/{group_id} | Delete an Opportunity Custom Field Group
[**deleteOpportunityCustomFieldTab**](OpportunityApi.md#deleteOpportunityCustomFieldTab) | **DELETE** /rest/v2/opportunities/model/customFields/tabs/{tab_id} | Delete an Opportunity Custom Field Tab
[**deleteOpportunityStage**](OpportunityApi.md#deleteOpportunityStage) | **DELETE** /rest/v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**getOpportunity**](OpportunityApi.md#getOpportunity) | **GET** /rest/v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**getOpportunityCustomFieldGroup**](OpportunityApi.md#getOpportunityCustomFieldGroup) | **GET** /rest/v2/opportunities/model/customFields/groups/{group_id} | Retrieve an Opportunity Custom Field Group
[**getOpportunityCustomFieldTab**](OpportunityApi.md#getOpportunityCustomFieldTab) | **GET** /rest/v2/opportunities/model/customFields/tabs/{tab_id} | Retrieve an Opportunity Custom Field Tab
[**getOpportunityStage**](OpportunityApi.md#getOpportunityStage) | **GET** /rest/v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**getOpportunityStageMove**](OpportunityApi.md#getOpportunityStageMove) | **GET** /rest/v2/opportunities/stageMoves/{stage_move_id} | Retrieve an Opportunity Stage Move
[**listOpportunities**](OpportunityApi.md#listOpportunities) | **GET** /rest/v2/opportunities | List Opportunities
[**listOpportunityCustomFieldGroups**](OpportunityApi.md#listOpportunityCustomFieldGroups) | **GET** /rest/v2/opportunities/model/customFields/groups | List Opportunity Custom Field Groups
[**listOpportunityCustomFieldTabs**](OpportunityApi.md#listOpportunityCustomFieldTabs) | **GET** /rest/v2/opportunities/model/customFields/tabs | List Opportunity Custom Field Tabs
[**listOpportunityStageMoves**](OpportunityApi.md#listOpportunityStageMoves) | **GET** /rest/v2/opportunities/stageMoves | List Opportunity Stage Moves
[**listOpportunityStages**](OpportunityApi.md#listOpportunityStages) | **GET** /rest/v2/opportunities/stages | List of Opportunity Stages
[**retrieveOpportunityCustomFieldModel**](OpportunityApi.md#retrieveOpportunityCustomFieldModel) | **GET** /rest/v2/opportunities/model | Retrieve Opportunity Custom Field Model
[**updateOpportunity**](OpportunityApi.md#updateOpportunity) | **PATCH** /rest/v2/opportunities/{opportunity_id} | Update an opportunity
[**updateOpportunityCustomField**](OpportunityApi.md#updateOpportunityCustomField) | **PATCH** /rest/v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field
[**updateOpportunityCustomFieldGroup**](OpportunityApi.md#updateOpportunityCustomFieldGroup) | **PATCH** /rest/v2/opportunities/model/customFields/groups/{group_id} | Update an Opportunity Custom Field Group
[**updateOpportunityCustomFieldTab**](OpportunityApi.md#updateOpportunityCustomFieldTab) | **PATCH** /rest/v2/opportunities/model/customFields/tabs/{tab_id} | Update an Opportunity Custom Field Tab
[**updateOpportunityStage**](OpportunityApi.md#updateOpportunityStage) | **PATCH** /rest/v2/opportunities/stages/{stage_id} | Update an Opportunity Stage



## createOpportunity

> RestV2Opportunity createOpportunity(createOpportunityRequest, opts)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let createOpportunityRequest = new KeapCoreServiceV2Sdk.CreateOpportunityRequest(); // CreateOpportunityRequest | 
let opts = {
  'fields': ["null"] // [String] | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
};
apiInstance.createOpportunity(createOpportunityRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)|  | 
 **fields** | [**[String]**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOpportunityCustomFieldGroup

> CustomFieldGroup createOpportunityCustomFieldGroup(createCustomFieldGroupRequest)

Create an Opportunity Custom Field Group

Creates a new custom field group for the Opportunity record type. If &#x60;tab_id&#x60; is omitted, the group is added to the default &#39;Custom Fields&#39; tab.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let createCustomFieldGroupRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldGroupRequest(); // CreateCustomFieldGroupRequest | 
apiInstance.createOpportunityCustomFieldGroup(createCustomFieldGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldGroupRequest** | [**CreateCustomFieldGroupRequest**](CreateCustomFieldGroupRequest.md)|  | 

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOpportunityCustomFieldTab

> CustomFieldTab createOpportunityCustomFieldTab(createCustomFieldTabRequest)

Create an Opportunity Custom Field Tab

Creates a new custom field tab for the Opportunity record type.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let createCustomFieldTabRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldTabRequest(); // CreateCustomFieldTabRequest | 
apiInstance.createOpportunityCustomFieldTab(createCustomFieldTabRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldTabRequest** | [**CreateCustomFieldTabRequest**](CreateCustomFieldTabRequest.md)|  | 

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOpportunityCustomFields

> CustomFieldMetaData createOpportunityCustomFields(createCustomFieldRequest)

Create an Opportunity Custom Field

Creates a custom field of the specified type and options to the Opportunity object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let createCustomFieldRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
apiInstance.createOpportunityCustomFields(createCustomFieldRequest).then((data) => {
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


## createOpportunityStage

> RestOpportunityStage createOpportunityStage(createOpportunityStageRequest)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let createOpportunityStageRequest = new KeapCoreServiceV2Sdk.CreateOpportunityStageRequest(); // CreateOpportunityStageRequest | 
apiInstance.createOpportunityStage(createOpportunityStageRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityStageRequest** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)|  | 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOpportunitiesCustomField

> deleteOpportunitiesCustomField(customFieldId)

Delete an Opportunity Custom Field

Deletes a Custom Field from Opportunity.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let customFieldId = "customFieldId_example"; // String | 
apiInstance.deleteOpportunitiesCustomField(customFieldId).then(() => {
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


## deleteOpportunity

> deleteOpportunity(opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | 
apiInstance.deleteOpportunity(opportunityId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOpportunityCustomFieldGroup

> deleteOpportunityCustomFieldGroup(groupId)

Delete an Opportunity Custom Field Group

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let groupId = "groupId_example"; // String | 
apiInstance.deleteOpportunityCustomFieldGroup(groupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOpportunityCustomFieldTab

> deleteOpportunityCustomFieldTab(tabId)

Delete an Opportunity Custom Field Tab

Deletes a custom field tab. Returns 409 Conflict if the tab still contains groups.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let tabId = "tabId_example"; // String | 
apiInstance.deleteOpportunityCustomFieldTab(tabId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOpportunityStage

> deleteOpportunityStage(stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let stageId = "stageId_example"; // String | 
apiInstance.deleteOpportunityStage(stageId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunity

> RestV2Opportunity getOpportunity(opportunityId, opts)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | 
let opts = {
  'fields': ["null"] // [String] | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
};
apiInstance.getOpportunity(opportunityId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**|  | 
 **fields** | [**[String]**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunityCustomFieldGroup

> CustomFieldGroup getOpportunityCustomFieldGroup(groupId)

Retrieve an Opportunity Custom Field Group

Retrieves a single custom field group by id for the Opportunity record type.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let groupId = "groupId_example"; // String | 
apiInstance.getOpportunityCustomFieldGroup(groupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**|  | 

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunityCustomFieldTab

> CustomFieldTab getOpportunityCustomFieldTab(tabId)

Retrieve an Opportunity Custom Field Tab

Retrieves a single custom field tab by id for the Opportunity record type.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let tabId = "tabId_example"; // String | 
apiInstance.getOpportunityCustomFieldTab(tabId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | **String**|  | 

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunityStage

> RestOpportunityStage getOpportunityStage(stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let stageId = "stageId_example"; // String | 
apiInstance.getOpportunityStage(stageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**|  | 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunityStageMove

> OpportunityStageMove getOpportunityStageMove(stageMoveId)

Retrieve an Opportunity Stage Move

Retrieves a single historical record of an opportunity being moved from one pipeline stage to another.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let stageMoveId = "stageMoveId_example"; // String | 
apiInstance.getOpportunityStageMove(stageMoveId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageMoveId** | **String**|  | 

### Return type

[**OpportunityStageMove**](OpportunityStageMove.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunities

> ListOpportunitiesResponse listOpportunities(opts)

List Opportunities

Retrieves a list of all Opportunities.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opts = {
  'fields': ["null"], // [String] | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `stage_id` - (String) `user_id` - (String) `contact_id` - (String) `opportunity_title` — supports wildcard prefix search (e.g. `opportunity_title==Deal*`) - (String) `lead_source_name` — supports wildcard prefix search (e.g. `lead_source_name==Web*`) - (String) `affiliate_id` — exact match only (e.g. `affiliate_id==123`) - (String) `opportunity_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` - (String) `ids` — comma-separated list of opportunity IDs (e.g. `ids==1,2,3`), maximum 100 IDs - (String) `contact_phone` — matches the contact's phone. By default it is an exact match against the stored value, including any formatting characters (e.g. `contact_phone==(480) 123-4567`); it does not normalize or search across an unformatted number. Supports wildcard prefix search for partial matches (e.g. `contact_phone==480*`) - (String) `contact_city` — matches the contact's city; supports wildcard prefix search (e.g. `contact_city==Chand*`) - (String) `contact_state` — matches the contact's state; supports wildcard prefix search (e.g. `contact_state==AZ*`) - (String) `projected_revenue_high` — projected revenue high; supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `projected_revenue_high>=1000`) - (String) `projected_revenue_low` — projected revenue low; supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `projected_revenue_low<=500`) Note: `opportunity_id` and `ids` cannot be used together in the same request.  **Custom fields:** opportunities may also be filtered by any custom field defined on the Opportunity record, referenced by its field name (e.g. `cf_priority==10`). Both indexed and non-indexed custom fields are filterable. The supported operator and value depend on the field's data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (`==`) and prefix wildcard (e.g. `cf_company==Acme*`) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (`==`, `>`, `<`, `>=`, `<=`) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. `cf_renewDate<=2026-01-01T00:00:00.000Z`). Date-only values such as `2026-01-01` are rejected - Yes/No fields — equals only, value `0` (No) or `1` (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. `cf_tags==red`) A custom field that does not exist, an operator unsupported for the field's type, or a value that does not match the field's type returns `400 Bad Request`. 
  'orderBy': "orderBy_example", // String | Attribute and direction to opportunities items. One of the following fields: - `next_action_time` - `contact_name` - `opportunity_title` - `created_time` - `update_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOpportunities(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;opportunity_title&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_title&#x3D;&#x3D;Deal*&#x60;) - (String) &#x60;lead_source_name&#x60; — supports wildcard prefix search (e.g. &#x60;lead_source_name&#x3D;&#x3D;Web*&#x60;) - (String) &#x60;affiliate_id&#x60; — exact match only (e.g. &#x60;affiliate_id&#x3D;&#x3D;123&#x60;) - (String) &#x60;opportunity_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (String) &#x60;ids&#x60; — comma-separated list of opportunity IDs (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;), maximum 100 IDs - (String) &#x60;contact_phone&#x60; — matches the contact&#39;s phone. By default it is an exact match against the stored value, including any formatting characters (e.g. &#x60;contact_phone&#x3D;&#x3D;(480) 123-4567&#x60;); it does not normalize or search across an unformatted number. Supports wildcard prefix search for partial matches (e.g. &#x60;contact_phone&#x3D;&#x3D;480*&#x60;) - (String) &#x60;contact_city&#x60; — matches the contact&#39;s city; supports wildcard prefix search (e.g. &#x60;contact_city&#x3D;&#x3D;Chand*&#x60;) - (String) &#x60;contact_state&#x60; — matches the contact&#39;s state; supports wildcard prefix search (e.g. &#x60;contact_state&#x3D;&#x3D;AZ*&#x60;) - (String) &#x60;projected_revenue_high&#x60; — projected revenue high; supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;projected_revenue_high&gt;&#x3D;1000&#x60;) - (String) &#x60;projected_revenue_low&#x60; — projected revenue low; supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;projected_revenue_low&lt;&#x3D;500&#x60;) Note: &#x60;opportunity_id&#x60; and &#x60;ids&#x60; cannot be used together in the same request.  **Custom fields:** opportunities may also be filtered by any custom field defined on the Opportunity record, referenced by its field name (e.g. &#x60;cf_priority&#x3D;&#x3D;10&#x60;). Both indexed and non-indexed custom fields are filterable. The supported operator and value depend on the field&#39;s data type: - Text-like fields (Text, Text Area, Name, Email, Website, Phone, Social Security Number) and choice fields with text options (Dropdown, Radio, State) — equals (&#x60;&#x3D;&#x3D;&#x60;) and prefix wildcard (e.g. &#x60;cf_company&#x3D;&#x3D;Acme*&#x60;) - Numeric fields (Whole Number, Decimal, Currency, Percent, Year, Month, Day of Week, User) — equals and comparison (&#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60;) - Date and Date/Time fields — equals and comparison; the value must be a full ISO-8601 date-time with milliseconds and a timezone offset (e.g. &#x60;cf_renewDate&lt;&#x3D;2026-01-01T00:00:00.000Z&#x60;). Date-only values such as &#x60;2026-01-01&#x60; are rejected - Yes/No fields — equals only, value &#x60;0&#x60; (No) or &#x60;1&#x60; (Yes) - Drilldown fields — equals only, integer value - Multi-select fields (List Box, User List Box) — equals only, matched as a contains search over the stored selections (e.g. &#x60;cf_tags&#x3D;&#x3D;red&#x60;) A custom field that does not exist, an operator unsupported for the field&#39;s type, or a value that does not match the field&#39;s type returns &#x60;400 Bad Request&#x60;.  | [optional] 
 **orderBy** | **String**| Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_title&#x60; - &#x60;created_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunityCustomFieldGroups

> ListCustomFieldGroupsResponse listOpportunityCustomFieldGroups(opts)

List Opportunity Custom Field Groups

Retrieves a list of custom field groups for the Opportunity record type. Optionally filter by tab_id to scope to a specific tab.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opts = {
  'tabId': "tabId_example" // String | Optional tab id to scope groups to a single tab
};
apiInstance.listOpportunityCustomFieldGroups(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | **String**| Optional tab id to scope groups to a single tab | [optional] 

### Return type

[**ListCustomFieldGroupsResponse**](ListCustomFieldGroupsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunityCustomFieldTabs

> ListCustomFieldTabsResponse listOpportunityCustomFieldTabs()

List Opportunity Custom Field Tabs

Retrieves a list of custom field tabs for the Opportunity record type.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
apiInstance.listOpportunityCustomFieldTabs().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListCustomFieldTabsResponse**](ListCustomFieldTabsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunityStageMoves

> ListOpportunityStageMoveResponse listOpportunityStageMoves(opts)

List Opportunity Stage Moves

Returns a paginated list of historical stage-move records.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply. Allowed fields: - (Id) `opportunity_id` — supports `==` - (Id) `user_id` — supports `==`  Separate multiple filters with semicolons: `opportunity_id==7;user_id==1` 
  'pageToken': "pageToken_example", // String | Page token
  'orderBy': "orderBy_example", // String | Field and direction to order results. Supported fields: `move_date`, `id` Directions: `asc` | `desc` Example: `move_date desc` 
  'pageSize': 0 // Number | Total number of items to return per page
};
apiInstance.listOpportunityStageMoves(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply. Allowed fields: - (Id) &#x60;opportunity_id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60; - (Id) &#x60;user_id&#x60; — supports &#x60;&#x3D;&#x3D;&#x60;  Separate multiple filters with semicolons: &#x60;opportunity_id&#x3D;&#x3D;7;user_id&#x3D;&#x3D;1&#x60;  | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **orderBy** | **String**| Field and direction to order results. Supported fields: &#x60;move_date&#x60;, &#x60;id&#x60; Directions: &#x60;asc&#x60; | &#x60;desc&#x60; Example: &#x60;move_date desc&#x60;  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 

### Return type

[**ListOpportunityStageMoveResponse**](ListOpportunityStageMoveResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunityStages

> ListOpportunityStagesResponse listOpportunityStages(opts)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `opportunity_stage_name` — supports wildcard prefix search (e.g. `opportunity_stage_name==Qualified*`) - (String) `opportunity_stage_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `opportunity_stage_id>5`) 
  'orderBy': "orderBy_example", // String | Attribute and direction to order stage items. One of the following fields: - `stage_order`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOpportunityStages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;opportunity_stage_name&#x60; — supports wildcard prefix search (e.g. &#x60;opportunity_stage_name&#x3D;&#x3D;Qualified*&#x60;) - (String) &#x60;opportunity_stage_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;opportunity_stage_id&gt;5&#x60;)  | [optional] 
 **orderBy** | **String**| Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveOpportunityCustomFieldModel

> ObjectModel retrieveOpportunityCustomFieldModel()

Retrieve Opportunity Custom Field Model

Get the custom fields for the Opportunity object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
apiInstance.retrieveOpportunityCustomFieldModel().then((data) => {
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


## updateOpportunity

> RestV2Opportunity updateOpportunity(opportunityId, updateOpportunityRequestV2, opts)

Update an opportunity

Updates specified values of a given opportunity

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | 
let updateOpportunityRequestV2 = new KeapCoreServiceV2Sdk.UpdateOpportunityRequestV2(); // UpdateOpportunityRequestV2 | 
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'fields': ["null"] // [String] | Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time
};
apiInstance.updateOpportunity(opportunityId, updateOpportunityRequestV2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**|  | 
 **updateOpportunityRequestV2** | [**UpdateOpportunityRequestV2**](UpdateOpportunityRequestV2.md)|  | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **fields** | [**[String]**](String.md)| Comma-delimited list of optional Opportunities properties to include in the response. Legacy field names are supported for optional fields only if legacy opportunities feature is enabled. Allowed optional values: custom_fields,created_by,last_updated_by,status_id. Allowed legacy optional values: monthly_revenue,order_revenue,objection,status,stage_entrance_time | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityCustomField

> CustomFieldMetaData updateOpportunityCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Opportunity&#39;s Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let customFieldId = "customFieldId_example"; // String | 
let updateCustomFieldMetaDataRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
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
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityCustomFieldGroup

> CustomFieldGroup updateOpportunityCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest)

Update an Opportunity Custom Field Group

Updates an existing custom field group. Only fields listed in &#x60;update_mask&#x60; are applied.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let groupId = "groupId_example"; // String | 
let updateMask = ["null"]; // [String] | Comma-separated list of fields to update
let updateCustomFieldGroupRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldGroupRequest(); // UpdateCustomFieldGroupRequest | 
apiInstance.updateOpportunityCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**|  | 
 **updateMask** | [**[String]**](String.md)| Comma-separated list of fields to update | 
 **updateCustomFieldGroupRequest** | [**UpdateCustomFieldGroupRequest**](UpdateCustomFieldGroupRequest.md)|  | 

### Return type

[**CustomFieldGroup**](CustomFieldGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityCustomFieldTab

> CustomFieldTab updateOpportunityCustomFieldTab(tabId, updateMask, updateCustomFieldTabRequest)

Update an Opportunity Custom Field Tab

Updates an existing custom field tab. Only fields listed in &#x60;update_mask&#x60; are applied.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let tabId = "tabId_example"; // String | 
let updateMask = ["null"]; // [String] | Comma-separated list of fields to update
let updateCustomFieldTabRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldTabRequest(); // UpdateCustomFieldTabRequest | 
apiInstance.updateOpportunityCustomFieldTab(tabId, updateMask, updateCustomFieldTabRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tabId** | **String**|  | 
 **updateMask** | [**[String]**](String.md)| Comma-separated list of fields to update | 
 **updateCustomFieldTabRequest** | [**UpdateCustomFieldTabRequest**](UpdateCustomFieldTabRequest.md)|  | 

### Return type

[**CustomFieldTab**](CustomFieldTab.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityStage

> RestOpportunityStage updateOpportunityStage(stageId, updateOpportunityStageRequest, opts)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.OpportunityApi();
let stageId = "stageId_example"; // String | 
let updateOpportunityStageRequest = new KeapCoreServiceV2Sdk.UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | 
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityStage(stageId, updateOpportunityStageRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**|  | 
 **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)|  | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

