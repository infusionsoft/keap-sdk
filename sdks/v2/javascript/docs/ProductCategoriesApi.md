# KeapCoreServiceV2Sdk.ProductCategoriesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignProductsToCategory**](ProductCategoriesApi.md#assignProductsToCategory) | **POST** /v2/productCategories/{category_id}:assignProducts | Assign Products to a Product Category
[**createImageFile**](ProductCategoriesApi.md#createImageFile) | **POST** /v2/productCategories/{category_id}/images | Create the product category image file
[**createProductCategory**](ProductCategoriesApi.md#createProductCategory) | **POST** /v2/productCategories | Create a Product Category
[**deleteImageFile**](ProductCategoriesApi.md#deleteImageFile) | **DELETE** /v2/productCategories/{category_id}/images | Delete the image from a product category
[**deleteProductCategory**](ProductCategoriesApi.md#deleteProductCategory) | **DELETE** /v2/productCategories/{category_id} | Delete a Product Category
[**getProductCategory**](ProductCategoriesApi.md#getProductCategory) | **GET** /v2/productCategories/{category_id} | Get a Product Category
[**listProductCategories**](ProductCategoriesApi.md#listProductCategories) | **GET** /v2/productCategories | List all Product Categories
[**updateProductCategory**](ProductCategoriesApi.md#updateProductCategory) | **PATCH** /v2/productCategories/{category_id} | Update a Product Category



## assignProductsToCategory

> assignProductsToCategory(categoryId, assignProductsRequest)

Assign Products to a Product Category

Assigns products to a Product Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductCategoriesApi();
let categoryId = "categoryId_example"; // String | category_id
let assignProductsRequest = new KeapCoreServiceV2Sdk.AssignProductsRequest(); // AssignProductsRequest | request
apiInstance.assignProductsToCategory(categoryId, assignProductsRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| category_id | 
 **assignProductsRequest** | [**AssignProductsRequest**](AssignProductsRequest.md)| request | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createImageFile

> createImageFile(categoryId, file)

Create the product category image file

Creates the product category image file and uploads it to the specified product category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductCategoriesApi();
let categoryId = "categoryId_example"; // String | category_id
let file = "/path/to/file"; // File | File to upload
apiInstance.createImageFile(categoryId, file).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| category_id | 
 **file** | **File**| File to upload | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## createProductCategory

> ProductCategory createProductCategory(opts)

Create a Product Category

Creates a new Product Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductCategoriesApi();
let opts = {
  'createProductCategoryRequest': new KeapCoreServiceV2Sdk.CreateProductCategoryRequest() // CreateProductCategoryRequest | productCategory
};
apiInstance.createProductCategory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductCategoryRequest** | [**CreateProductCategoryRequest**](CreateProductCategoryRequest.md)| productCategory | [optional] 

### Return type

[**ProductCategory**](ProductCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteImageFile

> deleteImageFile(categoryId)

Delete the image from a product category

Deletes the image from the specified product category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductCategoriesApi();
let categoryId = "categoryId_example"; // String | category_id
apiInstance.deleteImageFile(categoryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| category_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProductCategory

> deleteProductCategory(categoryId)

Delete a Product Category

Deletes the specified Product Category, its sub-categories, and removes products from it

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductCategoriesApi();
let categoryId = "categoryId_example"; // String | category_id
apiInstance.deleteProductCategory(categoryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| category_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductCategory

> ProductCategory getProductCategory(categoryId)

Get a Product Category

Gets a single Product Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductCategoriesApi();
let categoryId = "categoryId_example"; // String | category_id
apiInstance.getProductCategory(categoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| category_id | 

### Return type

[**ProductCategory**](ProductCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductCategories

> ListProductCategoriesResponse listProductCategories(opts)

List all Product Categories

Retrieves a list of Product Categories

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductCategoriesApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `product_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D29` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listProductCategories(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListProductCategoriesResponse**](ListProductCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProductCategory

> ProductCategory updateProductCategory(categoryId, updateProductCategoryRequest, opts)

Update a Product Category

Updates a single Product Category

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductCategoriesApi();
let categoryId = "categoryId_example"; // String | category_id
let updateProductCategoryRequest = new KeapCoreServiceV2Sdk.UpdateProductCategoryRequest(); // UpdateProductCategoryRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateProductCategory(categoryId, updateProductCategoryRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| category_id | 
 **updateProductCategoryRequest** | [**UpdateProductCategoryRequest**](UpdateProductCategoryRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductCategory**](ProductCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

