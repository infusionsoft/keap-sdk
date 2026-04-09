# KeapCoreServiceV2Sdk.ContactApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](ContactApi.md#createContact) | **POST** /rest/v2/contacts | Create a Contact
[**createContactCustomField**](ContactApi.md#createContactCustomField) | **POST** /rest/v2/contacts/model/customFields | Create a Contact Custom Field
[**createContactLinkType**](ContactApi.md#createContactLinkType) | **POST** /rest/v2/contacts/links/types | Create a Contact Link type
[**deleteContact**](ContactApi.md#deleteContact) | **DELETE** /rest/v2/contacts/{contact_id} | Delete a Contact
[**getContact**](ContactApi.md#getContact) | **GET** /rest/v2/contacts/{contact_id} | Retrieve a Contact
[**linkContacts**](ContactApi.md#linkContacts) | **POST** /rest/v2/contacts:link | Link Contacts
[**listContactLinkTypes**](ContactApi.md#listContactLinkTypes) | **GET** /rest/v2/contacts/links/types | List Contact Link types
[**listContactLinks**](ContactApi.md#listContactLinks) | **GET** /rest/v2/contacts/{contact_id}/links | List Linked Contacts
[**listContacts**](ContactApi.md#listContacts) | **GET** /rest/v2/contacts | List Contacts
[**listTagsForContact**](ContactApi.md#listTagsForContact) | **GET** /rest/v2/contacts/{contact_id}/tags | List Applied Tags
[**retrieveContactModel**](ContactApi.md#retrieveContactModel) | **GET** /rest/v2/contacts/model | Retrieve Contact Model
[**unlinkContacts**](ContactApi.md#unlinkContacts) | **POST** /rest/v2/contacts:unlink | Delete Link between two Contacts
[**updateContact**](ContactApi.md#updateContact) | **PATCH** /rest/v2/contacts/{contact_id} | Update a Contact



## createContact

> Contact createContact(createUpdateContactRequest, opts)

Create a Contact

Creates a new Contact. *Note:* Contact must contain at least one item in &#x60;email_addresses&#x60; or &#x60;phone_numbers&#x60; and &#x60;country_code&#x60; is required if &#x60;region&#x60; is specified. Optionally accepts a &#x60;duplicate_option&#x60; query parameter which performs duplicate checking by one of the following options: &#x60;Email&#x60;, &#x60;EmailAndName&#x60;, &#x60;EmailAndNameAndCompany&#x60;. If a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the &#x60;duplicate_option&#x60; provided, a new contact record will be created. When &#x60;duplicate_option&#x60; is not specified, a new contact is always created.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let createUpdateContactRequest = new KeapCoreServiceV2Sdk.CreateUpdateContactRequest(); // CreateUpdateContactRequest | 
let opts = {
  'fields': ["null"], // [String] | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by)
  'duplicateOption': "duplicateOption_example" // String | Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found.
};
apiInstance.createContact(createUpdateContactRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateContactRequest** | [**CreateUpdateContactRequest**](CreateUpdateContactRequest.md)|  | 
 **fields** | [**[String]**](String.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | [optional] 
 **duplicateOption** | **String**| Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found. | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContactCustomField

> CustomFieldMetaData createContactCustomField(createCustomFieldRequest)

Create a Contact Custom Field

Creates a custom field of the specified type and options to the Contact object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let createCustomFieldRequest = new KeapCoreServiceV2Sdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
apiInstance.createContactCustomField(createCustomFieldRequest).then((data) => {
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


## createContactLinkType

> ContactLinkType createContactLinkType(createContactLinkTypeRequest)

Create a Contact Link type

Creates a new type of Contact Link

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let createContactLinkTypeRequest = new KeapCoreServiceV2Sdk.CreateContactLinkTypeRequest(); // CreateContactLinkTypeRequest | 
apiInstance.createContactLinkType(createContactLinkTypeRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactLinkTypeRequest** | [**CreateContactLinkTypeRequest**](CreateContactLinkTypeRequest.md)|  | 

### Return type

[**ContactLinkType**](ContactLinkType.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContact

> deleteContact(contactId)

Delete a Contact

Deletes the specified Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let contactId = "contactId_example"; // String | 
apiInstance.deleteContact(contactId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContact

> Contact getContact(contactId, opts)

Retrieve a Contact

Retrieves a single Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let contactId = "contactId_example"; // String | 
let opts = {
  'fields': ["null"] // [String] | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by)
};
apiInstance.getContact(contactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**|  | 
 **fields** | [**[String]**](String.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## linkContacts

> ContactLink linkContacts(linkContactsRequest)

Link Contacts

Links two Contacts together using the provided Link type

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let linkContactsRequest = new KeapCoreServiceV2Sdk.LinkContactsRequest(); // LinkContactsRequest | 
apiInstance.linkContacts(linkContactsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkContactsRequest** | [**LinkContactsRequest**](LinkContactsRequest.md)|  | 

### Return type

[**ContactLink**](ContactLink.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listContactLinkTypes

> ListContactLinkTypesResponse listContactLinkTypes(opts)

List Contact Link types

Retrieves a list of Contact Link types.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DexpectedValue` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `max_links` - `create_time`  One of the following directions: - `asc` - `desc` 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listContactLinkTypes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;max_links&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListContactLinkTypesResponse**](ListContactLinkTypesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContactLinks

> ListContactLinksResponse listContactLinks(contactId)

List Linked Contacts

Retrieves a list of Linked Contacts for a given Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let contactId = "contactId_example"; // String | 
apiInstance.listContactLinks(contactId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**|  | 

### Return type

[**ListContactLinksResponse**](ListContactLinksResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContacts

> ListContactsResponse listContacts(opts)

List Contacts

Retrieves a list of Contacts

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let opts = {
  'fields': ["null"], // [String] | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by)
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `email` - (String) `given_name` - (String) `family_name` - (String) `company_id` - (Set[String]) `contact_ids` - (String) `start_update_time` - (String) `end_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=given_name%3D%3DMary` - `filter=company_id%3D%3D123` - `filter=company_id%3D%3D123%3Bfamily_name%3D%3DSmith` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `email`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listContacts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | [optional] 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;company_id&#x60; - (Set[String]) &#x60;contact_ids&#x60; - (String) &#x60;start_update_time&#x60; - (String) &#x60;end_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListContactsResponse**](ListContactsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTagsForContact

> ListContactTagsResponse listTagsForContact(contactId, opts)

List Applied Tags

Retrieves a list of tags applied to the specified Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let contactId = "contactId_example"; // String | Contact identifier
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name` - (String) `description` - (String) `category_id` (use `category_id==NONE` to filter tags not assigned to any category) - (String) `since_applied_time` - (String) `until_applied_time` - (String) `since_create_time` - (String) `until_create_time` - (String) `since_update_time` - (String) `until_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DCustomer` - `filter=category_id%3D%3D123` - `filter=category_id%3D%3DNONE` - `filter=since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;` 
  'pageToken': "pageToken_example", // String | Page token
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `create_time` - `update_time` - `applied_time` - `category_id` One of the following directions: - `asc` - `desc`
  'pageSize': 0 // Number | Total number of items to return per page
};
apiInstance.listTagsForContact(contactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| Contact identifier | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; (use &#x60;category_id&#x3D;&#x3D;NONE&#x60; to filter tags not assigned to any category) - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DCustomer&#x60; - &#x60;filter&#x3D;category_id%3D%3D123&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60; - &#x60;applied_time&#x60; - &#x60;category_id&#x60; One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 

### Return type

[**ListContactTagsResponse**](ListContactTagsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveContactModel

> ObjectModel retrieveContactModel()

Retrieve Contact Model

Get the custom fields and optional properties for the Contact object

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
apiInstance.retrieveContactModel().then((data) => {
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


## unlinkContacts

> unlinkContacts(linkContactsRequest)

Delete Link between two Contacts

Deletes Link between two Contacts

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let linkContactsRequest = new KeapCoreServiceV2Sdk.LinkContactsRequest(); // LinkContactsRequest | 
apiInstance.unlinkContacts(linkContactsRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkContactsRequest** | [**LinkContactsRequest**](LinkContactsRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateContact

> Contact updateContact(contactId, createUpdateContactRequest, opts)

Update a Contact

Updates a Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let contactId = "contactId_example"; // String | 
let createUpdateContactRequest = new KeapCoreServiceV2Sdk.CreateUpdateContactRequest(); // CreateUpdateContactRequest | 
let opts = {
  'updateMask': null, // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'fields': ["null"] // [String] | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by)
};
apiInstance.updateContact(contactId, createUpdateContactRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**|  | 
 **createUpdateContactRequest** | [**CreateUpdateContactRequest**](CreateUpdateContactRequest.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **fields** | [**[String]**](String.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

