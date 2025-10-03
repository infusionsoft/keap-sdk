# KeapCoreServiceV2Sdk.TagsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyTags**](TagsApi.md#applyTags) | **POST** /v2/tags/{tag_id}/contacts:applyTags | Apply Tag
[**createTag**](TagsApi.md#createTag) | **POST** /v2/tags | Create Tag
[**createTagCategory**](TagsApi.md#createTagCategory) | **POST** /v2/tags/categories | Create Tag Category
[**deleteTag**](TagsApi.md#deleteTag) | **DELETE** /v2/tags/{tag_id} | Delete Tag
[**deleteTagCategory**](TagsApi.md#deleteTagCategory) | **DELETE** /v2/tags/categories/{tag_category_id} | Delete Tag Category
[**getCategory**](TagsApi.md#getCategory) | **GET** /v2/tags/categories/{tag_category_id} | Retrieve a Tag Category
[**getTag**](TagsApi.md#getTag) | **GET** /v2/tags/{tag_id} | Retrieve a Tag
[**listCompaniesForTagId**](TagsApi.md#listCompaniesForTagId) | **GET** /v2/tags/{tag_id}/companies | List Tagged Companies
[**listContactsWithTagId**](TagsApi.md#listContactsWithTagId) | **GET** /v2/tags/{tag_id}/contacts | List Tagged Contacts
[**listTagCategories**](TagsApi.md#listTagCategories) | **GET** /v2/tags/categories | List Tag Categories
[**listTags**](TagsApi.md#listTags) | **GET** /v2/tags | List Tags
[**removeTags**](TagsApi.md#removeTags) | **POST** /v2/tags/{tag_id}/contacts:removeTags | Remove Tags
[**updateTag**](TagsApi.md#updateTag) | **PATCH** /v2/tags/{tag_id} | Update a Tag
[**updateTagCategory**](TagsApi.md#updateTagCategory) | **PATCH** /v2/tags/categories/{tag_category_id} | Update a Tag Category



## applyTags

> ApplyTagsResponse applyTags(tagId, applyRemoveTagRequest)

Apply Tag

Applies a Tag to a list of Contacts.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
let applyRemoveTagRequest = new KeapCoreServiceV2Sdk.ApplyRemoveTagRequest(); // ApplyRemoveTagRequest | applyRemoveTagRequest
apiInstance.applyTags(tagId, applyRemoveTagRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| tag_id | 
 **applyRemoveTagRequest** | [**ApplyRemoveTagRequest**](ApplyRemoveTagRequest.md)| applyRemoveTagRequest | 

### Return type

[**ApplyTagsResponse**](ApplyTagsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTag

> Tag createTag(createUpdateTagRequest)

Create Tag

Creates a new Tag

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let createUpdateTagRequest = new KeapCoreServiceV2Sdk.CreateUpdateTagRequest(); // CreateUpdateTagRequest | tag
apiInstance.createTag(createUpdateTagRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTagRequest** | [**CreateUpdateTagRequest**](CreateUpdateTagRequest.md)| tag | 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTagCategory

> TagCategory createTagCategory(createUpdateTagCategoryRequest)

Create Tag Category

Creates a new Tag Category.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let createUpdateTagCategoryRequest = new KeapCoreServiceV2Sdk.CreateUpdateTagCategoryRequest(); // CreateUpdateTagCategoryRequest | request
apiInstance.createTagCategory(createUpdateTagCategoryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateTagCategoryRequest** | [**CreateUpdateTagCategoryRequest**](CreateUpdateTagCategoryRequest.md)| request | 

### Return type

[**TagCategory**](TagCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTag

> deleteTag(tagId)

Delete Tag

Deletes a Tag.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
apiInstance.deleteTag(tagId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| tag_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTagCategory

> deleteTagCategory(tagCategoryId)

Delete Tag Category

Deletes the specified Tag Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
apiInstance.deleteTagCategory(tagCategoryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagCategoryId** | **String**| tag_category_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategory

> GetTagCategoryResponse getCategory(tagCategoryId)

Retrieve a Tag Category

Returns information about the specified Tag Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
apiInstance.getCategory(tagCategoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagCategoryId** | **String**| tag_category_id | 

### Return type

[**GetTagCategoryResponse**](GetTagCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTag

> Tag getTag(tagId)

Retrieve a Tag

Retrieves information about the specified Tag

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
apiInstance.getTag(tagId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| tag_id | 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCompaniesForTagId

> ListTaggedCompaniesResponse listCompaniesForTagId(tagId, opts)

List Tagged Companies

Retrieves a list of Companies that have the given Tag applied. To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `company_name` - (String) `email` - (String) `since_applied_time` - (String) `until_applied_time` You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `email`, it will check for the non-existence of that field. For the filters listed above, here are some examples: - `filter=company_name%3D%3DCompany` - `filter=email%3D%3Dtest@gmail.com` - `filter=since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `company_name` - `email` - `applied_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listCompaniesForTagId(tagId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| tag_id | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;company_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListTaggedCompaniesResponse**](ListTaggedCompaniesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContactsWithTagId

> ListTaggedContactsResponse listContactsWithTagId(tagId, opts)

List Tagged Contacts

Retrieves a list of Contacts with the specified Tag To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `given_name` - (String) `family_name` - (String) `email` - (String) `since_applied_time` - (String) `until_applied_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `email`, `given_name`, or `family_name`, it will check for the non-existence of that field. For the filters listed above, here are some examples: - `filter=given_name%3D%3DJohn` - `filter=family_name%3D%3DSmith` - `filter=email%3D%3DNONE`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `given_name` - `family_name` - `email` - `applied_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listContactsWithTagId(tagId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| tag_id | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, &#x60;given_name&#x60;, or &#x60;family_name&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DJohn&#x60; - &#x60;filter&#x3D;family_name%3D%3DSmith&#x60; - &#x60;filter&#x3D;email%3D%3DNONE&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;given_name&#x60; - &#x60;family_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListTaggedContactsResponse**](ListTaggedContactsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTagCategories

> ListTagCategoriesResponse listTagCategories(opts)

List Tag Categories

Retrieves a list of defined Tag Categories To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:  - (String) `name` - (String) `description` - (String) `since_create_time` - (String) `until_create_time` - (String) `since_update_time` - (String) `until_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `category_id` or `description`, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - `filter=name%3D%3Dmy-tag` - `filter=description%3D%3DNONE` - `filter=since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields:  - `name` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listTagCategories(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListTagCategoriesResponse**](ListTagCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTags

> ListTagsResponse listTags(opts)

List Tags

Retrieves a list of Tags defined in the application To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:  - (String) `name` - (String) `description` - (String) `category_id` - (String) `since_create_time` - (String) `until_create_time` - (String) `since_update_time` - (String) `until_update_time`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. If NONE is passed in for `category_id` or `description`, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - `filter=name%3D%3Dmy-tag` - `filter=category_id%3D%3DNONE` - `filter=description%3D%3DNONE` - `filter=since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields:  - `name` - `create_time` - `update_time`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listTags(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListTagsResponse**](ListTagsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeTags

> removeTags(tagId, applyRemoveTagRequest)

Remove Tags

Removes a Tag from a list of Contacts.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
let applyRemoveTagRequest = new KeapCoreServiceV2Sdk.ApplyRemoveTagRequest(); // ApplyRemoveTagRequest | applyRemoveTagRequest
apiInstance.removeTags(tagId, applyRemoveTagRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| tag_id | 
 **applyRemoveTagRequest** | [**ApplyRemoveTagRequest**](ApplyRemoveTagRequest.md)| applyRemoveTagRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTag

> UpdateTagResponse updateTag(tagId, opts)

Update a Tag

Updates a Tag with only the values provided in the request

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'createUpdateTagRequest': new KeapCoreServiceV2Sdk.CreateUpdateTagRequest() // CreateUpdateTagRequest | tag
};
apiInstance.updateTag(tagId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| tag_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **createUpdateTagRequest** | [**CreateUpdateTagRequest**](CreateUpdateTagRequest.md)| tag | [optional] 

### Return type

[**UpdateTagResponse**](UpdateTagResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTagCategory

> UpdateTagCategoryResponse updateTagCategory(tagCategoryId, opts)

Update a Tag Category

Updates a Tag Category with only the values provided in the request

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'createUpdateTagCategoryRequest': new KeapCoreServiceV2Sdk.CreateUpdateTagCategoryRequest() // CreateUpdateTagCategoryRequest | tagCategory
};
apiInstance.updateTagCategory(tagCategoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagCategoryId** | **String**| tag_category_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **createUpdateTagCategoryRequest** | [**CreateUpdateTagCategoryRequest**](CreateUpdateTagCategoryRequest.md)| tagCategory | [optional] 

### Return type

[**UpdateTagCategoryResponse**](UpdateTagCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

