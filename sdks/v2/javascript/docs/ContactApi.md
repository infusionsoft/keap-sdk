# KeapCoreServiceV2Sdk.ContactApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](ContactApi.md#createContact) | **POST** /v2/contacts | Create a Contact
[**createContactLinkType**](ContactApi.md#createContactLinkType) | **POST** /v2/contacts/links/types | Create a Contact Link type
[**deleteContact**](ContactApi.md#deleteContact) | **DELETE** /v2/contacts/{contact_id} | Delete a Contact
[**getContact**](ContactApi.md#getContact) | **GET** /v2/contacts/{contact_id} | Retrieve a Contact
[**linkContacts**](ContactApi.md#linkContacts) | **POST** /v2/contacts:link | Link Contacts
[**listContactLinkTypes**](ContactApi.md#listContactLinkTypes) | **GET** /v2/contacts/links/types | List Contact Link types
[**listContactLinks**](ContactApi.md#listContactLinks) | **GET** /v2/contacts/{contact_id}/links | List Linked Contacts
[**listContacts**](ContactApi.md#listContacts) | **GET** /v2/contacts | List Contacts
[**retrieveContactModel**](ContactApi.md#retrieveContactModel) | **GET** /v2/contacts/model | Retrieve Contact Model
[**unlinkContacts**](ContactApi.md#unlinkContacts) | **POST** /v2/contacts:unlink | Delete Link between two Contacts
[**updateContact**](ContactApi.md#updateContact) | **PATCH** /v2/contacts/{contact_id} | Update a Contact



## createContact

> Contact createContact(opts)

Create a Contact

Creates a new Contact. *Note:* Contact must contain at least one item in &#x60;email_addresses&#x60; or &#x60;phone_numbers&#x60; and &#x60;country_code&#x60; is required if &#x60;region&#x60; is specified.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let opts = {
  'createUpdateContactRequest': new KeapCoreServiceV2Sdk.CreateUpdateContactRequest() // CreateUpdateContactRequest | contact
};
apiInstance.createContact(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateContactRequest** | [**CreateUpdateContactRequest**](CreateUpdateContactRequest.md)| contact | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

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

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let createContactLinkTypeRequest = new KeapCoreServiceV2Sdk.CreateContactLinkTypeRequest(); // CreateContactLinkTypeRequest | request
apiInstance.createContactLinkType(createContactLinkTypeRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactLinkTypeRequest** | [**CreateContactLinkTypeRequest**](CreateContactLinkTypeRequest.md)| request | 

### Return type

[**ContactLinkType**](ContactLinkType.md)

### Authorization

No authorization required

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

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let contactId = "contactId_example"; // String | contact_id
apiInstance.deleteContact(contactId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let contactId = "contactId_example"; // String | contact_id
let opts = {
  'fields': ["null"] // [String] | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
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
 **contactId** | **String**| contact_id | 
 **fields** | [**[String]**](String.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website) | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

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

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let linkContactsRequest = new KeapCoreServiceV2Sdk.LinkContactsRequest(); // LinkContactsRequest | linkContactsRequest
apiInstance.linkContacts(linkContactsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkContactsRequest** | [**LinkContactsRequest**](LinkContactsRequest.md)| linkContactsRequest | 

### Return type

[**ContactLink**](ContactLink.md)

### Authorization

No authorization required

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

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DexpectedValue` 
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
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;max_links&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListContactLinkTypesResponse**](ListContactLinkTypesResponse.md)

### Authorization

No authorization required

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

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let contactId = "contactId_example"; // String | contact_id
apiInstance.listContactLinks(contactId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 

### Return type

[**ListContactLinksResponse**](ListContactLinksResponse.md)

### Authorization

No authorization required

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

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let opts = {
  'fields': ["null"], // [String] | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
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
 **fields** | [**[String]**](String.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website) | [optional] 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;company_id&#x60; - (Set[String]) &#x60;contact_ids&#x60; - (String) &#x60;start_update_time&#x60; - (String) &#x60;end_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListContactsResponse**](ListContactsResponse.md)

### Authorization

No authorization required

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

No authorization required

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

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let linkContactsRequest = new KeapCoreServiceV2Sdk.LinkContactsRequest(); // LinkContactsRequest | linkContactsRequest
apiInstance.unlinkContacts(linkContactsRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkContactsRequest** | [**LinkContactsRequest**](LinkContactsRequest.md)| linkContactsRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateContact

> Contact updateContact(contactId, opts)

Update a Contact

Updates a Contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ContactApi();
let contactId = "contactId_example"; // String | contact_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'createUpdateContactRequest': new KeapCoreServiceV2Sdk.CreateUpdateContactRequest() // CreateUpdateContactRequest | contact
};
apiInstance.updateContact(contactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **createUpdateContactRequest** | [**CreateUpdateContactRequest**](CreateUpdateContactRequest.md)| contact | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

