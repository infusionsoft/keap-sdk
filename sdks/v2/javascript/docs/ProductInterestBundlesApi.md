# KeapCoreServiceV2Sdk.ProductInterestBundlesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductInterest**](ProductInterestBundlesApi.md#addProductInterest) | **POST** /v2/productInterestBundles/{id}/interests | Create a Product Interest in an existing Bundle
[**createProductInterestBundle**](ProductInterestBundlesApi.md#createProductInterestBundle) | **POST** /v2/productInterestBundles | Create a Product Interest Bundle
[**deleteProductInterestBundle**](ProductInterestBundlesApi.md#deleteProductInterestBundle) | **DELETE** /v2/productInterestBundles/{id} | Delete a Product Interest Bundle
[**getProductInterestBundle**](ProductInterestBundlesApi.md#getProductInterestBundle) | **GET** /v2/productInterestBundles/{id} | Get a Product Interest Bundle
[**listProductInterestBundles**](ProductInterestBundlesApi.md#listProductInterestBundles) | **GET** /v2/productInterestBundles | List Product Interest Bundles
[**removeProductInterest**](ProductInterestBundlesApi.md#removeProductInterest) | **DELETE** /v2/productInterestBundles/{id}/interests/{interest_id} | Delete a Product Interest from an existing Bundle
[**updateProductInterest**](ProductInterestBundlesApi.md#updateProductInterest) | **PATCH** /v2/productInterestBundles/{id}/interests/{interest_id} | Update a Product Interest in an existing Bundle
[**updateProductInterestBundle**](ProductInterestBundlesApi.md#updateProductInterestBundle) | **PATCH** /v2/productInterestBundles/{id} | Update a Product Interest Bundle



## addProductInterest

> ProductInterest addProductInterest(id, addProductInterestRequest)

Create a Product Interest in an existing Bundle

Creates a new Product Interest in an existing Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | id
let addProductInterestRequest = new KeapCoreServiceV2Sdk.AddProductInterestRequest(); // AddProductInterestRequest | request
apiInstance.addProductInterest(id, addProductInterestRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **addProductInterestRequest** | [**AddProductInterestRequest**](AddProductInterestRequest.md)| request | 

### Return type

[**ProductInterest**](ProductInterest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProductInterestBundle

> ProductInterestBundle createProductInterestBundle(createProductInterestBundleRequest)

Create a Product Interest Bundle

Creates a new Product Interest Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let createProductInterestBundleRequest = new KeapCoreServiceV2Sdk.CreateProductInterestBundleRequest(); // CreateProductInterestBundleRequest | createProductInterestBundleRequest
apiInstance.createProductInterestBundle(createProductInterestBundleRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductInterestBundleRequest** | [**CreateProductInterestBundleRequest**](CreateProductInterestBundleRequest.md)| createProductInterestBundleRequest | 

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProductInterestBundle

> deleteProductInterestBundle(id)

Delete a Product Interest Bundle

Deletes an existing Product Interest Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | id
apiInstance.deleteProductInterestBundle(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductInterestBundle

> ProductInterestBundle getProductInterestBundle(id)

Get a Product Interest Bundle

Gets a single Product Interest Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | id
apiInstance.getProductInterestBundle(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductInterestBundles

> ListProductInterestBundleResponse listProductInterestBundles(opts)

List Product Interest Bundles

Retrieves a list of Product Interest Bundles

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listProductInterestBundles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListProductInterestBundleResponse**](ListProductInterestBundleResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeProductInterest

> removeProductInterest(id, interestId)

Delete a Product Interest from an existing Bundle

Deletes an existing Product Interest from an existing Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | id
let interestId = "interestId_example"; // String | interest_id
apiInstance.removeProductInterest(id, interestId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **interestId** | **String**| interest_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProductInterest

> ProductInterest updateProductInterest(id, interestId, updateProductInterestRequest, opts)

Update a Product Interest in an existing Bundle

Updates an existing Product Interest in an existing Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | id
let interestId = "interestId_example"; // String | interest_id
let updateProductInterestRequest = new KeapCoreServiceV2Sdk.UpdateProductInterestRequest(); // UpdateProductInterestRequest | updateProductInterestRequest
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateProductInterest(id, interestId, updateProductInterestRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **interestId** | **String**| interest_id | 
 **updateProductInterestRequest** | [**UpdateProductInterestRequest**](UpdateProductInterestRequest.md)| updateProductInterestRequest | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductInterest**](ProductInterest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductInterestBundle

> ProductInterestBundle updateProductInterestBundle(id, updateProductInterestBundleRequest, opts)

Update a Product Interest Bundle

Updates an existing Product Interest Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | id
let updateProductInterestBundleRequest = new KeapCoreServiceV2Sdk.UpdateProductInterestBundleRequest(); // UpdateProductInterestBundleRequest | updateProductInterestBundleRequest
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateProductInterestBundle(id, updateProductInterestBundleRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **updateProductInterestBundleRequest** | [**UpdateProductInterestBundleRequest**](UpdateProductInterestBundleRequest.md)| updateProductInterestBundleRequest | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

