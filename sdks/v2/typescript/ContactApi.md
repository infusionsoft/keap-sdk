# .ContactApi

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


# **createContact**
> Contact createContact(createUpdateContactRequest)

Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified. Optionally accepts a `duplicate_option` query parameter which performs duplicate checking by one of the following options: `Email`, `EmailAndName`, `EmailAndNameAndCompany`. If a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the `duplicate_option` provided, a new contact record will be created. When `duplicate_option` is not specified, a new contact is always created.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiCreateContactRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiCreateContactRequest = {
  
  createUpdateContactRequest: {
    addresses: [
      {
        country: "United States of America",
        line1: "123",
        line2: "Suite 100",
        locality: "Phoenix",
        region: "Arizona",
        field: "BILLING",
        countryCode: "USA",
        postalCode: "85001",
        regionCode: "US-AZ",
        zipCode: "85001",
        zipFour: "1234",
      },
    ],
    company: {
      id: "100",
      companyName: "Thryv",
    },
    origin: {
      ipAddress: "ipAddress_example",
    },
    prefix: "Dr.",
    suffix: "Jr",
    website: "https://thryv.com",
    anniversaryDate: "2015-06-20",
    birthDate: "1985-03-15",
    contactType: "Prospect",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
    emailAddresses: [
      {
        email: "john.smith@example.com",
        field: "EMAIL1",
        optInReason: "Subscribed via website form",
      },
    ],
    familyName: "Smith",
    faxNumbers: [
      {
        number: "5551234568",
        type: "Work",
        field: "FAX1",
      },
    ],
    givenName: "John",
    jobTitle: "Senior Software Engineer",
    leadsourceId: "12",
    middleName: "Robert",
    ownerId: "45",
    phoneNumbers: [
      {
        extension: "101",
        number: "5551234567",
        type: "Work",
        field: "PHONE1",
        numberE164: "+15551234567",
      },
    ],
    preferredLocale: "en_US",
    preferredName: "Johnny",
    referralCode: "REF2024ABC",
    socialAccounts: [
      {
        name: "@thryv",
        type: "FACEBOOK",
      },
    ],
    sourceType: "SOURCE_TYPE_UNSPECIFIED",
    spouseName: "Jane Smith",
    timeZone: "America/New_York",
    utmParameters: {
      keapSourceId: "6088383224687662",
      utmSource: "google",
      utmMedium: "cpc",
      utmTerm: "financial_consulting",
      utmCampaign: "spring_sale",
      utmContent: "textlink",
    },
    assistantName: "assistantName_example",
    assistantPhone: "assistantPhone_example",
    billingInformation: "billingInformation_example",
  },
    // Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) (optional)
  fields: [
    "fields_example",
  ],
    // Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found. (optional)
  duplicateOption: "Email",
};

const data = await apiInstance.createContact(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateContactRequest** | **CreateUpdateContactRequest**|  |
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | (optional) defaults to undefined
 **duplicateOption** | [**&#39;Email&#39; | &#39;EmailAndName&#39; | &#39;EmailAndNameAndCompany&#39;**]**Array<&#39;Email&#39; &#124; &#39;EmailAndName&#39; &#124; &#39;EmailAndNameAndCompany&#39;>** | Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found. | (optional) defaults to undefined


### Return type

**Contact**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createContactCustomField**
> CustomFieldMetaData createContactCustomField(createCustomFieldRequest)

Creates a custom field of the specified type and options to the Contact object

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiCreateContactCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiCreateContactCustomFieldRequest = {
  
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

const data = await apiInstance.createContactCustomField(request);
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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createContactLinkType**
> ContactLinkType createContactLinkType(createContactLinkTypeRequest)

Creates a new type of Contact Link

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiCreateContactLinkTypeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiCreateContactLinkTypeRequest = {
  
  createContactLinkTypeRequest: {
    name: "Spouse",
    maxLinks: 1,
  },
};

const data = await apiInstance.createContactLinkType(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactLinkTypeRequest** | **CreateContactLinkTypeRequest**|  |


### Return type

**ContactLinkType**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteContact**
> void deleteContact()

Deletes the specified Contact

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiDeleteContactRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiDeleteContactRequest = {
  
  contactId: "contact_id_example",
};

const data = await apiInstance.deleteContact(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] |  | defaults to undefined


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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContact**
> Contact getContact()

Retrieves a single Contact

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiGetContactRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiGetContactRequest = {
  
  contactId: "contact_id_example",
    // Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) (optional)
  fields: [
    "fields_example",
  ],
};

const data = await apiInstance.getContact(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] |  | defaults to undefined
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | (optional) defaults to undefined


### Return type

**Contact**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **linkContacts**
> ContactLink linkContacts(linkContactsRequest)

Links two Contacts together using the provided Link type

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiLinkContactsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiLinkContactsRequest = {
  
  linkContactsRequest: {
    contact1Id: "1001",
    linkTypeId: "1",
    contact2Id: "1002",
  },
};

const data = await apiInstance.linkContacts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkContactsRequest** | **LinkContactsRequest**|  |


### Return type

**ContactLink**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listContactLinkTypes**
> ListContactLinkTypesResponse listContactLinkTypes()

Retrieves a list of Contact Link types.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiListContactLinkTypesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiListContactLinkTypesRequest = {
    // Filter to apply, allowed fields are: - (String) `name`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DexpectedValue`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `max_links` - `create_time`  One of the following directions: - `asc` - `desc`  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listContactLinkTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;max_links&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListContactLinkTypesResponse**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listContactLinks**
> ListContactLinksResponse listContactLinks()

Retrieves a list of Linked Contacts for a given Contact

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiListContactLinksRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiListContactLinksRequest = {
  
  contactId: "contact_id_example",
};

const data = await apiInstance.listContactLinks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] |  | defaults to undefined


### Return type

**ListContactLinksResponse**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listContacts**
> ListContactsResponse listContacts()

Retrieves a list of Contacts

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiListContactsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiListContactsRequest = {
    // Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) (optional)
  fields: [
    "fields_example",
  ],
    // Filter to apply, allowed fields are: - (String) `email` — supports wildcard (e.g. `email==john*`) - (String) `given_name` — supports wildcard (e.g. `given_name==Mar*`) - (String) `family_name` — supports wildcard (e.g. `family_name==Smi*`) - (String) `middle_name` — supports wildcard (e.g. `middle_name==J*`) - (String) `company_id` - (Set[String]) `contact_ids` - (Set[String]) `ids` — accepts a list of contact IDs (e.g. `ids==1,2,3`) - (String) `start_update_time` - (String) `end_update_time` - (String) `phone_number` — the phone number to search for. Requires `phone_fields` to be specified; only the specified phone fields are searched. - (Set[String]) `phone_fields` — restricts which phone fields to search (e.g. PHONE1, PHONE2, or comma-separated list PHONE1,PHONE2,PHONE3,PHONE4,PHONE5). Required when `phone_number` is supplied. - (String) `billing_address_line1` - (String) `billing_address_locality` - (String) `billing_address_region` (long-form region/state name, e.g. \"Arizona\") - (String) `billing_address_postal_code` - (String) `billing_address_country_code` (ISO 3166-1 alpha-3, e.g. \"USA\") - (String) `shipping_address_line1` - (String) `shipping_address_locality` - (String) `shipping_address_region` - (String) `shipping_address_postal_code` - (String) `shipping_address_country_code` - (String) `other_address_line1` - (String) `other_address_locality` - (String) `other_address_region` - (String) `other_address_postal_code` - (String) `other_address_country_code` - (String) `website` — supports wildcard (e.g. `website==https://example*`) - (String) `lead_source_name` — supports wildcard (e.g. `lead_source_name==Google*`) - (String) `contact_id` — supports comparison operators: `==`, `>`, `<`, `>=`, `<=` (e.g. `contact_id>5` encoded as `contact_id%3E5`)  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For wildcard filtering, use `*` at the end of the value (prefix matching), encoded as `%2A`. For the filters listed above, here are some examples: - `filter=given_name%3D%3DMary` - `filter=given_name%3D%3DMar%2A` (wildcard: starts with \"Mar\") - `filter=company_id%3D%3D123` - `filter=company_id%3D%3D123%3Bfamily_name%3D%3DSmith` - `filter=billing_address_locality%3D%3DChandler` - `filter=shipping_address_country_code%3D%3DUSA%3Bshipping_address_region%3D%3DArizona` - `filter=contact_id%3E5` (contact_id > 5) - `filter=ids%3D%3D1,2,3` (contacts with IDs 1, 2, or 3)  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id` - `create_time` - `email` - `update_time`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listContacts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;email&#x60; — supports wildcard (e.g. &#x60;email&#x3D;&#x3D;john*&#x60;) - (String) &#x60;given_name&#x60; — supports wildcard (e.g. &#x60;given_name&#x3D;&#x3D;Mar*&#x60;) - (String) &#x60;family_name&#x60; — supports wildcard (e.g. &#x60;family_name&#x3D;&#x3D;Smi*&#x60;) - (String) &#x60;middle_name&#x60; — supports wildcard (e.g. &#x60;middle_name&#x3D;&#x3D;J*&#x60;) - (String) &#x60;company_id&#x60; - (Set[String]) &#x60;contact_ids&#x60; - (Set[String]) &#x60;ids&#x60; — accepts a list of contact IDs (e.g. &#x60;ids&#x3D;&#x3D;1,2,3&#x60;) - (String) &#x60;start_update_time&#x60; - (String) &#x60;end_update_time&#x60; - (String) &#x60;phone_number&#x60; — the phone number to search for. Requires &#x60;phone_fields&#x60; to be specified; only the specified phone fields are searched. - (Set[String]) &#x60;phone_fields&#x60; — restricts which phone fields to search (e.g. PHONE1, PHONE2, or comma-separated list PHONE1,PHONE2,PHONE3,PHONE4,PHONE5). Required when &#x60;phone_number&#x60; is supplied. - (String) &#x60;billing_address_line1&#x60; - (String) &#x60;billing_address_locality&#x60; - (String) &#x60;billing_address_region&#x60; (long-form region/state name, e.g. \&quot;Arizona\&quot;) - (String) &#x60;billing_address_postal_code&#x60; - (String) &#x60;billing_address_country_code&#x60; (ISO 3166-1 alpha-3, e.g. \&quot;USA\&quot;) - (String) &#x60;shipping_address_line1&#x60; - (String) &#x60;shipping_address_locality&#x60; - (String) &#x60;shipping_address_region&#x60; - (String) &#x60;shipping_address_postal_code&#x60; - (String) &#x60;shipping_address_country_code&#x60; - (String) &#x60;other_address_line1&#x60; - (String) &#x60;other_address_locality&#x60; - (String) &#x60;other_address_region&#x60; - (String) &#x60;other_address_postal_code&#x60; - (String) &#x60;other_address_country_code&#x60; - (String) &#x60;website&#x60; — supports wildcard (e.g. &#x60;website&#x3D;&#x3D;https://example*&#x60;) - (String) &#x60;lead_source_name&#x60; — supports wildcard (e.g. &#x60;lead_source_name&#x3D;&#x3D;Google*&#x60;) - (String) &#x60;contact_id&#x60; — supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; (e.g. &#x60;contact_id&gt;5&#x60; encoded as &#x60;contact_id%3E5&#x60;)  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For wildcard filtering, use &#x60;*&#x60; at the end of the value (prefix matching), encoded as &#x60;%2A&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;given_name%3D%3DMar%2A&#x60; (wildcard: starts with \&quot;Mar\&quot;) - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; - &#x60;filter&#x3D;billing_address_locality%3D%3DChandler&#x60; - &#x60;filter&#x3D;shipping_address_country_code%3D%3DUSA%3Bshipping_address_region%3D%3DArizona&#x60; - &#x60;filter&#x3D;contact_id%3E5&#x60; (contact_id &gt; 5) - &#x60;filter&#x3D;ids%3D%3D1,2,3&#x60; (contacts with IDs 1, 2, or 3)  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;email&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListContactsResponse**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTagsForContact**
> ListContactTagsResponse listTagsForContact()

Retrieves a list of tags applied to the specified Contact

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiListTagsForContactRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiListTagsForContactRequest = {
    // Contact identifier
  contactId: "contact_id_example",
    // Filter to apply, allowed fields are: - (String) `name` - (String) `description` - (String) `category_id` (use `category_id==NONE` to filter tags not assigned to any category) - (String) `since_applied_time` - (String) `until_applied_time` - (String) `since_create_time` - (String) `until_create_time` - (String) `since_update_time` - (String) `until_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DCustomer` - `filter=category_id%3D%3D123` - `filter=category_id%3D%3DNONE` - `filter=since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;`  (optional)
  filter: "filter_example",
    // Page token (optional)
  pageToken: "page_token_example",
    // Attribute and direction to order items. One of the following fields: - `name` - `create_time` - `update_time` - `applied_time` - `category_id` One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
};

const data = await apiInstance.listTagsForContact(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | Contact identifier | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; (use &#x60;category_id&#x3D;&#x3D;NONE&#x60; to filter tags not assigned to any category) - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DCustomer&#x60; - &#x60;filter&#x3D;category_id%3D%3D123&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60; - &#x60;applied_time&#x60; - &#x60;category_id&#x60; One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined


### Return type

**ListContactTagsResponse**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveContactModel**
> ObjectModel retrieveContactModel()

Get the custom fields and optional properties for the Contact object

### Example


```typescript
import { createConfiguration, ContactApi } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request = {};

const data = await apiInstance.retrieveContactModel(request);
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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unlinkContacts**
> void unlinkContacts(linkContactsRequest)

Deletes Link between two Contacts

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiUnlinkContactsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiUnlinkContactsRequest = {
  
  linkContactsRequest: {
    contact1Id: "1001",
    linkTypeId: "1",
    contact2Id: "1002",
  },
};

const data = await apiInstance.unlinkContacts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkContactsRequest** | **LinkContactsRequest**|  |


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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateContact**
> Contact updateContact(createUpdateContactRequest)

Updates a Contact

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiUpdateContactRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiUpdateContactRequest = {
  
  contactId: "contact_id_example",
  
  createUpdateContactRequest: {
    addresses: [
      {
        country: "United States of America",
        line1: "123",
        line2: "Suite 100",
        locality: "Phoenix",
        region: "Arizona",
        field: "BILLING",
        countryCode: "USA",
        postalCode: "85001",
        regionCode: "US-AZ",
        zipCode: "85001",
        zipFour: "1234",
      },
    ],
    company: {
      id: "100",
      companyName: "Thryv",
    },
    origin: {
      ipAddress: "ipAddress_example",
    },
    prefix: "Dr.",
    suffix: "Jr",
    website: "https://thryv.com",
    anniversaryDate: "2015-06-20",
    birthDate: "1985-03-15",
    contactType: "Prospect",
    customFields: [
      {
        id: "id_example",
        content: null,
      },
    ],
    emailAddresses: [
      {
        email: "john.smith@example.com",
        field: "EMAIL1",
        optInReason: "Subscribed via website form",
      },
    ],
    familyName: "Smith",
    faxNumbers: [
      {
        number: "5551234568",
        type: "Work",
        field: "FAX1",
      },
    ],
    givenName: "John",
    jobTitle: "Senior Software Engineer",
    leadsourceId: "12",
    middleName: "Robert",
    ownerId: "45",
    phoneNumbers: [
      {
        extension: "101",
        number: "5551234567",
        type: "Work",
        field: "PHONE1",
        numberE164: "+15551234567",
      },
    ],
    preferredLocale: "en_US",
    preferredName: "Johnny",
    referralCode: "REF2024ABC",
    socialAccounts: [
      {
        name: "@thryv",
        type: "FACEBOOK",
      },
    ],
    sourceType: "SOURCE_TYPE_UNSPECIFIED",
    spouseName: "Jane Smith",
    timeZone: "America/New_York",
    utmParameters: {
      keapSourceId: "6088383224687662",
      utmSource: "google",
      utmMedium: "cpc",
      utmTerm: "financial_consulting",
      utmCampaign: "spring_sale",
      utmContent: "textlink",
    },
    assistantName: "assistantName_example",
    assistantPhone: "assistantPhone_example",
    billingInformation: "billingInformation_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
    // Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) (optional)
  fields: [
    "fields_example",
  ],
};

const data = await apiInstance.updateContact(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateContactRequest** | **CreateUpdateContactRequest**|  |
 **contactId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by) | (optional) defaults to undefined


### Return type

**Contact**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


