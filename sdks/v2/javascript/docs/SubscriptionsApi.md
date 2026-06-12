# KeapCoreServiceV2Sdk.SubscriptionsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscription**](SubscriptionsApi.md#cancelSubscription) | **POST** /rest/v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /rest/v2/subscriptions | Create Subscription
[**createSubscriptionCustomField**](SubscriptionsApi.md#createSubscriptionCustomField) | **POST** /rest/v2/subscriptions/model/customFields | Create a Subscription Custom Field
[**createSubscriptionCustomFieldGroup**](SubscriptionsApi.md#createSubscriptionCustomFieldGroup) | **POST** /rest/v2/subscriptions/model/customFields/groups | Create a Subscription Custom Field Group
[**deleteSubscriptionCustomField**](SubscriptionsApi.md#deleteSubscriptionCustomField) | **DELETE** /rest/v2/subscriptions/model/customFields/{custom_field_id} | Delete a Subscription Custom Field
[**deleteSubscriptionCustomFieldGroup**](SubscriptionsApi.md#deleteSubscriptionCustomFieldGroup) | **DELETE** /rest/v2/subscriptions/model/customFields/groups/{group_id} | Delete a Subscription Custom Field Group
[**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /rest/v2/subscriptions/{subscription_id} | Retrieve a Subscription
[**getSubscriptionCustomFieldGroup**](SubscriptionsApi.md#getSubscriptionCustomFieldGroup) | **GET** /rest/v2/subscriptions/model/customFields/groups/{group_id} | Retrieve a Subscription Custom Field Group
[**invoiceSubscription**](SubscriptionsApi.md#invoiceSubscription) | **POST** /rest/v2/subscriptions/{subscription_id}:invoice | Invoice a Subscription
[**listSubscriptionCustomFieldGroups**](SubscriptionsApi.md#listSubscriptionCustomFieldGroups) | **GET** /rest/v2/subscriptions/model/customFields/groups | List Subscription Custom Field Groups
[**listSubscriptions**](SubscriptionsApi.md#listSubscriptions) | **GET** /rest/v2/subscriptions | List Subscriptions
[**retrieveSubscriptionCustomFieldModel**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModel) | **GET** /rest/v2/subscriptions/model | Retrieve Subscription Custom Field Model
[**updateSubscription**](SubscriptionsApi.md#updateSubscription) | **PATCH** /rest/v2/subscriptions/{subscription_id} | Update a Subscription
[**updateSubscriptionCustomField**](SubscriptionsApi.md#updateSubscriptionCustomField) | **PATCH** /rest/v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription Custom Field
[**updateSubscriptionCustomFieldGroup**](SubscriptionsApi.md#updateSubscriptionCustomFieldGroup) | **PATCH** /rest/v2/subscriptions/model/customFields/groups/{group_id} | Update a Subscription Custom Field Group



## cancelSubscription

> cancelSubscription(subscriptionId, cancelSubscriptionRequest)

Cancel Subscription

Cancels the specified subscription

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | 
let cancelSubscriptionRequest = new KeapCoreServiceV2Sdk.CancelSubscriptionRequest(); // CancelSubscriptionRequest | 
apiInstance.cancelSubscription(subscriptionId, cancelSubscriptionRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**|  | 
 **cancelSubscriptionRequest** | [**CancelSubscriptionRequest**](CancelSubscriptionRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSubscription

> Subscription createSubscription(createSubscriptionRequest)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let createSubscriptionRequest = new KeapCoreServiceV2Sdk.CreateSubscriptionRequest(); // CreateSubscriptionRequest | 
apiInstance.createSubscription(createSubscriptionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionRequest** | [**CreateSubscriptionRequest**](CreateSubscriptionRequest.md)|  | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSubscriptionCustomField

> CustomFieldMetaData createSubscriptionCustomField(createCustomFieldRequest)

Create a Subscription Custom Field

Creates a custom field of the specified type and options to the Subscription object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let createCustomFieldRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
apiInstance.createSubscriptionCustomField(createCustomFieldRequest).then((data) => {
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


## createSubscriptionCustomFieldGroup

> CustomFieldGroup createSubscriptionCustomFieldGroup(createCustomFieldGroupRequest)

Create a Subscription Custom Field Group

Creates a new custom field group for the Subscription record type. If &#x60;tab_id&#x60; is omitted, the group is added to the default &#39;Custom Fields&#39; tab.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let createCustomFieldGroupRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldGroupRequest(); // CreateCustomFieldGroupRequest | 
apiInstance.createSubscriptionCustomFieldGroup(createCustomFieldGroupRequest).then((data) => {
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


## deleteSubscriptionCustomField

> deleteSubscriptionCustomField(customFieldId)

Delete a Subscription Custom Field

Deletes a custom field from the Subscription object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let customFieldId = "customFieldId_example"; // String | 
apiInstance.deleteSubscriptionCustomField(customFieldId).then(() => {
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


## deleteSubscriptionCustomFieldGroup

> deleteSubscriptionCustomFieldGroup(groupId)

Delete a Subscription Custom Field Group

Deletes a custom field group. Returns 409 Conflict if the group still contains custom fields.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let groupId = "groupId_example"; // String | 
apiInstance.deleteSubscriptionCustomFieldGroup(groupId).then(() => {
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


## getSubscription

> Subscription getSubscription(subscriptionId)

Retrieve a Subscription

Retrieves a single subscription

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | 
apiInstance.getSubscription(subscriptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**|  | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubscriptionCustomFieldGroup

> CustomFieldGroup getSubscriptionCustomFieldGroup(groupId)

Retrieve a Subscription Custom Field Group

Retrieves a single custom field group by id for the Subscription record type.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let groupId = "groupId_example"; // String | 
apiInstance.getSubscriptionCustomFieldGroup(groupId).then((data) => {
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


## invoiceSubscription

> OrderV2 invoiceSubscription(subscriptionId)

Invoice a Subscription

Generates invoices from all cycles of a subscription that are due. Returns the most recently billed invoice.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | 
apiInstance.invoiceSubscription(subscriptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**|  | 

### Return type

[**OrderV2**](OrderV2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSubscriptionCustomFieldGroups

> ListCustomFieldGroupsResponse listSubscriptionCustomFieldGroups(opts)

List Subscription Custom Field Groups

Retrieves a list of custom field groups for the Subscription record type. Optionally filter by tab_id to scope to a specific tab.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let opts = {
  'tabId': "tabId_example" // String | Optional tab id to scope groups to a single tab
};
apiInstance.listSubscriptionCustomFieldGroups(opts).then((data) => {
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


## listSubscriptions

> ListSubscriptionsResponse listSubscriptions(opts)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `contact_id` - (String) `subscription_plan_id` - (String) `status` - (String) `id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `billing_amount` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (List[String]) `ids` - (List[String]) `subscription_plan_ids`  You will need to apply the `==` operator (or other supported operators), to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=subscription_plan_id%3D%3D456` - `filter=status%3D%3DActive` - `filter=id%3E5` - `filter=billing_amount%3E%3D100` - `filter=ids%3D%3D1,10,4,24` - `filter=subscription_plan_ids%3D%3D10,20,30` - `filter=contact_id%3D%3D123%3Bstatus%3D%3DActive` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `contact_id` - `subscription_plan_id` - `modification_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listSubscriptions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;billing_amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (List[String]) &#x60;ids&#x60; - (List[String]) &#x60;subscription_plan_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator (or other supported operators), to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3D456&#x60; - &#x60;filter&#x3D;status%3D%3DActive&#x60; - &#x60;filter&#x3D;id%3E5&#x60; - &#x60;filter&#x3D;billing_amount%3E%3D100&#x60; - &#x60;filter&#x3D;ids%3D%3D1,10,4,24&#x60; - &#x60;filter&#x3D;subscription_plan_ids%3D%3D10,20,30&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bstatus%3D%3DActive&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60; - &#x60;modification_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListSubscriptionsResponse**](ListSubscriptionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveSubscriptionCustomFieldModel

> ObjectModel retrieveSubscriptionCustomFieldModel()

Retrieve Subscription Custom Field Model

Get the custom fields for the Subscription object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
apiInstance.retrieveSubscriptionCustomFieldModel().then((data) => {
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


## updateSubscription

> Subscription updateSubscription(subscriptionId, updateSubscriptionRequest, opts)

Update a Subscription

Updates a Subscription

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | 
let updateSubscriptionRequest = new KeapCoreServiceV2Sdk.UpdateSubscriptionRequest(); // UpdateSubscriptionRequest | 
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateSubscription(subscriptionId, updateSubscriptionRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**|  | 
 **updateSubscriptionRequest** | [**UpdateSubscriptionRequest**](UpdateSubscriptionRequest.md)|  | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSubscriptionCustomField

> CustomFieldMetaData updateSubscriptionCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Subscription Custom Field

Updates a custom field of the specified type and options to the Subscription object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let customFieldId = "customFieldId_example"; // String | 
let updateCustomFieldMetaDataRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | 
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateSubscriptionCustomField(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
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


## updateSubscriptionCustomFieldGroup

> CustomFieldGroup updateSubscriptionCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest)

Update a Subscription Custom Field Group

Updates an existing custom field group. Only fields listed in &#x60;update_mask&#x60; are applied.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.SubscriptionsApi();
let groupId = "groupId_example"; // String | 
let updateMask = ["null"]; // [String] | Comma-separated list of fields to update
let updateCustomFieldGroupRequest = new KeapCoreServiceV2Sdk.UpdateCustomFieldGroupRequest(); // UpdateCustomFieldGroupRequest | 
apiInstance.updateSubscriptionCustomFieldGroup(groupId, updateMask, updateCustomFieldGroupRequest).then((data) => {
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

