# KeapCoreServiceV2Sdk.ProductInterestBundlesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductInterestUsingPOST**](ProductInterestBundlesApi.md#addProductInterestUsingPOST) | **POST** /v2/productInterestBundles/{id}/interests | Create a Product Interest in an existing Bundle
[**createProductInterestBundleUsingPOST**](ProductInterestBundlesApi.md#createProductInterestBundleUsingPOST) | **POST** /v2/productInterestBundles | Create a Product Interest Bundle
[**deleteProductInterestBundleUsingDELETE**](ProductInterestBundlesApi.md#deleteProductInterestBundleUsingDELETE) | **DELETE** /v2/productInterestBundles/{id} | Delete a Product Interest Bundle
[**getProductInterestBundleUsingGET**](ProductInterestBundlesApi.md#getProductInterestBundleUsingGET) | **GET** /v2/productInterestBundles/{id} | Get a Product Interest Bundle
[**listProductInterestBundlesUsingGET**](ProductInterestBundlesApi.md#listProductInterestBundlesUsingGET) | **GET** /v2/productInterestBundles | List Product Interest Bundles
[**removeProductInterestUsingDELETE**](ProductInterestBundlesApi.md#removeProductInterestUsingDELETE) | **DELETE** /v2/productInterestBundles/{id}/interests/{interest_id} | Delete a Product Interest from an existing Bundle
[**updateProductInterestBundleUsingPATCH**](ProductInterestBundlesApi.md#updateProductInterestBundleUsingPATCH) | **PATCH** /v2/productInterestBundles/{id} | Update a Product Interest Bundle
[**updateProductInterestUsingPATCH**](ProductInterestBundlesApi.md#updateProductInterestUsingPATCH) | **PATCH** /v2/productInterestBundles/{id}/interests/{interest_id} | Update a Product Interest in an existing Bundle



## addProductInterestUsingPOST

> ProductInterest addProductInterestUsingPOST(id, addProductInterestRequest)

Create a Product Interest in an existing Bundle

Creates a new Product Interest in an existing Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | id
let addProductInterestRequest = new KeapCoreServiceV2Sdk.AddProductInterestRequest(); // AddProductInterestRequest | request
apiInstance.addProductInterestUsingPOST(id, addProductInterestRequest).then((data) => {
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


## createProductInterestBundleUsingPOST

> ProductInterestBundle createProductInterestBundleUsingPOST(createProductInterestBundleRequest)

Create a Product Interest Bundle

Creates a new Product Interest Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let createProductInterestBundleRequest = new KeapCoreServiceV2Sdk.CreateProductInterestBundleRequest(); // CreateProductInterestBundleRequest | createProductInterestBundleRequest
apiInstance.createProductInterestBundleUsingPOST(createProductInterestBundleRequest).then((data) => {
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


## deleteProductInterestBundleUsingDELETE

> deleteProductInterestBundleUsingDELETE(id)

Delete a Product Interest Bundle

Deletes an existing Product Interest Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | id
apiInstance.deleteProductInterestBundleUsingDELETE(id).then(() => {
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


## getProductInterestBundleUsingGET

> ProductInterestBundle getProductInterestBundleUsingGET(id)

Get a Product Interest Bundle

Gets a single Product Interest Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | id
apiInstance.getProductInterestBundleUsingGET(id).then((data) => {
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


## listProductInterestBundlesUsingGET

> ListProductInterestBundleResponse listProductInterestBundlesUsingGET(opts)

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
apiInstance.listProductInterestBundlesUsingGET(opts).then((data) => {
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


## removeProductInterestUsingDELETE

> removeProductInterestUsingDELETE(id, interestId)

Delete a Product Interest from an existing Bundle

Deletes an existing Product Interest from an existing Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | id
let interestId = "interestId_example"; // String | interest_id
apiInstance.removeProductInterestUsingDELETE(id, interestId).then(() => {
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


## updateProductInterestBundleUsingPATCH

> ProductInterestBundle updateProductInterestBundleUsingPATCH(id, updateProductInterestBundleRequest, opts)

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
apiInstance.updateProductInterestBundleUsingPATCH(id, updateProductInterestBundleRequest, opts).then((data) => {
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


## updateProductInterestUsingPATCH

> ProductInterest updateProductInterestUsingPATCH(id, interestId, updateProductInterestRequest, opts)

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
apiInstance.updateProductInterestUsingPATCH(id, interestId, updateProductInterestRequest, opts).then((data) => {
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

