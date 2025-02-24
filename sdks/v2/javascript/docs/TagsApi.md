# KeapCoreServiceV2Sdk.TagsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyTagsUsingPOST**](TagsApi.md#applyTagsUsingPOST) | **POST** /v2/tags/{tag_id}/contacts:applyTags | Apply Tag
[**createTagCategoryUsingPOST1**](TagsApi.md#createTagCategoryUsingPOST1) | **POST** /v2/tags/categories | Create Tag Category
[**createTagUsingPOST1**](TagsApi.md#createTagUsingPOST1) | **POST** /v2/tags | Create Tag
[**deleteTagCategoryUsingDELETE**](TagsApi.md#deleteTagCategoryUsingDELETE) | **DELETE** /v2/tags/categories/{tag_category_id} | Delete Tag Category
[**deleteTagUsingDELETE**](TagsApi.md#deleteTagUsingDELETE) | **DELETE** /v2/tags/{tag_id} | Delete Tag
[**getCategoryUsingGET**](TagsApi.md#getCategoryUsingGET) | **GET** /v2/tags/categories/{tag_category_id} | Retrieve a Tag Category
[**getTagUsingGET1**](TagsApi.md#getTagUsingGET1) | **GET** /v2/tags/{tag_id} | Retrieve a Tag
[**listCompaniesForTagIdUsingGET1**](TagsApi.md#listCompaniesForTagIdUsingGET1) | **GET** /v2/tags/{tag_id}/companies | List Tagged Companies
[**listContactsWithTagIdUsingGET**](TagsApi.md#listContactsWithTagIdUsingGET) | **GET** /v2/tags/{tag_id}/contacts | List Tagged Contacts
[**listTagCategoriesUsingGET**](TagsApi.md#listTagCategoriesUsingGET) | **GET** /v2/tags/categories | List Tag Categories
[**listTagsUsingGET1**](TagsApi.md#listTagsUsingGET1) | **GET** /v2/tags | List Tags
[**removeTagsUsingPOST**](TagsApi.md#removeTagsUsingPOST) | **POST** /v2/tags/{tag_id}/contacts:removeTags | Remove Tags
[**updateTagCategoryUsingPATCH**](TagsApi.md#updateTagCategoryUsingPATCH) | **PATCH** /v2/tags/categories/{tag_category_id} | Update a Tag Category
[**updateTagUsingPATCH**](TagsApi.md#updateTagUsingPATCH) | **PATCH** /v2/tags/{tag_id} | Update a Tag



## applyTagsUsingPOST

> ApplyTagsResponse applyTagsUsingPOST(tagId, applyRemoveTagRequest)

Apply Tag

Applies a Tag to a list of Contacts.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
let applyRemoveTagRequest = new KeapCoreServiceV2Sdk.ApplyRemoveTagRequest(); // ApplyRemoveTagRequest | applyRemoveTagRequest
apiInstance.applyTagsUsingPOST(tagId, applyRemoveTagRequest).then((data) => {
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


## createTagCategoryUsingPOST1

> Tag createTagCategoryUsingPOST1(createUpdateTagCategoryRequest)

Create Tag Category

Creates a new Tag Category.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let createUpdateTagCategoryRequest = new KeapCoreServiceV2Sdk.CreateUpdateTagCategoryRequest(); // CreateUpdateTagCategoryRequest | request
apiInstance.createTagCategoryUsingPOST1(createUpdateTagCategoryRequest).then((data) => {
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

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTagUsingPOST1

> Tag createTagUsingPOST1(createUpdateTagRequest)

Create Tag

Creates a new Tag

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let createUpdateTagRequest = new KeapCoreServiceV2Sdk.CreateUpdateTagRequest(); // CreateUpdateTagRequest | tag
apiInstance.createTagUsingPOST1(createUpdateTagRequest).then((data) => {
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


## deleteTagCategoryUsingDELETE

> deleteTagCategoryUsingDELETE(tagCategoryId)

Delete Tag Category

Deletes the specified Tag Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
apiInstance.deleteTagCategoryUsingDELETE(tagCategoryId).then(() => {
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


## deleteTagUsingDELETE

> deleteTagUsingDELETE(tagId)

Delete Tag

Deletes a Tag.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
apiInstance.deleteTagUsingDELETE(tagId).then(() => {
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


## getCategoryUsingGET

> GetTagCategoryResponse getCategoryUsingGET(tagCategoryId)

Retrieve a Tag Category

Returns information about the specified Tag Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagCategoryId = "tagCategoryId_example"; // String | tag_category_id
apiInstance.getCategoryUsingGET(tagCategoryId).then((data) => {
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


## getTagUsingGET1

> Tag getTagUsingGET1(tagId)

Retrieve a Tag

Retrieves information about the specified Tag

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
apiInstance.getTagUsingGET1(tagId).then((data) => {
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


## listCompaniesForTagIdUsingGET1

> ListTaggedCompaniesResponse listCompaniesForTagIdUsingGET1(tagId, opts)

List Tagged Companies

Retrieves a list of Companies that have the given Tag applied. To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listCompaniesForTagIdUsingGET1(tagId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| tag_id | 
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListTaggedCompaniesResponse**](ListTaggedCompaniesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContactsWithTagIdUsingGET

> ListTaggedContactsResponse listContactsWithTagIdUsingGET(tagId, opts)

List Tagged Contacts

Retrieves a list of Contacts with the specified Tag To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listContactsWithTagIdUsingGET(tagId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| tag_id | 
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListTaggedContactsResponse**](ListTaggedContactsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTagCategoriesUsingGET

> ListTagCategoriesResponse listTagCategoriesUsingGET(opts)

List Tag Categories

Retrieves a list of defined Tag Categories To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listTagCategoriesUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListTagCategoriesResponse**](ListTagCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTagsUsingGET1

> ListTagsResponse listTagsUsingGET1(opts)

List Tags

Retrieves a list of Tags defined in the application To search for &#x60;null&#x60; or empty fields use &#x60;filter&#x3D;&#x3D;NONE&#x60;

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listTagsUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListTagsResponse**](ListTagsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeTagsUsingPOST

> removeTagsUsingPOST(tagId, applyRemoveTagRequest)

Remove Tags

Removes a Tag from a list of Contacts.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.TagsApi();
let tagId = "tagId_example"; // String | tag_id
let applyRemoveTagRequest = new KeapCoreServiceV2Sdk.ApplyRemoveTagRequest(); // ApplyRemoveTagRequest | applyRemoveTagRequest
apiInstance.removeTagsUsingPOST(tagId, applyRemoveTagRequest).then(() => {
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


## updateTagCategoryUsingPATCH

> UpdateTagCategoryResponse updateTagCategoryUsingPATCH(tagCategoryId, opts)

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
apiInstance.updateTagCategoryUsingPATCH(tagCategoryId, opts).then((data) => {
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


## updateTagUsingPATCH

> UpdateTagResponse updateTagUsingPATCH(tagId, opts)

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
apiInstance.updateTagUsingPATCH(tagId, opts).then((data) => {
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

