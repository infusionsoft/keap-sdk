# KeapCoreServiceV2Sdk.ReferralApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReferral**](ReferralApi.md#createReferral) | **POST** /rest/v2/referrals | Create a Referral
[**listReferrals**](ReferralApi.md#listReferrals) | **GET** /rest/v2/referrals | List Referrals



## createReferral

> Referral createReferral(createReferralRequest)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ReferralApi();
let createReferralRequest = new KeapCoreServiceV2Sdk.CreateReferralRequest(); // CreateReferralRequest | 
apiInstance.createReferral(createReferralRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createReferralRequest** | [**CreateReferralRequest**](CreateReferralRequest.md)|  | 

### Return type

[**Referral**](Referral.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listReferrals

> ListReferralsResponse listReferrals(opts)

List Referrals

Retrieves a list of all referrals with optional filtering and sorting

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ReferralApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `referral_partner_id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `contact_id` - Allowable operators: \"==\", \"<=\", \"<\", \">=\", \">\", \"!=\" - (String) `source` - Wildcard matching allowed - (String) `description` - Wildcard matching allowed - (String) `type` (Allowed values: `COOKIE`, `PERMANENT`, `MANUAL`)  You will need to apply the `==` operator (or other supported operators) to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=referral_partner_id%3D%3D123` - `filter=referral_partner_id%3E10` (referral_partner_id > 10) - `filter=contact_id%3D%3D456` - `filter=contact_id%3C%3D100` (contact_id <= 100) - `filter=source%3D%3DEmail Marketing` - `filter=source%3D%3DEmail*` (starts with \"Email\") - `filter=description%3D%3DReferred*` (starts with \"Referred\") - `filter=type%3D%3DCOOKIE` - `filter=referral_partner_id%3D%3D123%3Bcontact_id%3D%3D456`  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo` 
  'pageToken': "pageToken_example", // String | Page token
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `referral_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0 // Number | Total number of items to return per page
};
apiInstance.listReferrals(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;referral_partner_id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;contact_id&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;source&#x60; - Wildcard matching allowed - (String) &#x60;description&#x60; - Wildcard matching allowed - (String) &#x60;type&#x60; (Allowed values: &#x60;COOKIE&#x60;, &#x60;PERMANENT&#x60;, &#x60;MANUAL&#x60;)  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator (or other supported operators) to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;referral_partner_id%3D%3D123&#x60; - &#x60;filter&#x3D;referral_partner_id%3E10&#x60; (referral_partner_id &gt; 10) - &#x60;filter&#x3D;contact_id%3D%3D456&#x60; - &#x60;filter&#x3D;contact_id%3C%3D100&#x60; (contact_id &lt;&#x3D; 100) - &#x60;filter&#x3D;source%3D%3DEmail Marketing&#x60; - &#x60;filter&#x3D;source%3D%3DEmail*&#x60; (starts with \&quot;Email\&quot;) - &#x60;filter&#x3D;description%3D%3DReferred*&#x60; (starts with \&quot;Referred\&quot;) - &#x60;filter&#x3D;type%3D%3DCOOKIE&#x60; - &#x60;filter&#x3D;referral_partner_id%3D%3D123%3Bcontact_id%3D%3D456&#x60;  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;referral_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 

### Return type

[**ListReferralsResponse**](ListReferralsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

