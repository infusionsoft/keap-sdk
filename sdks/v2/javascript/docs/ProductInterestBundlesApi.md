# KeapCoreServiceV2Sdk.ProductInterestBundlesApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductInterest**](ProductInterestBundlesApi.md#addProductInterest) | **POST** /rest/v2/productInterestBundles/{id}/interests | Create a Product Interest in an existing Bundle
[**createProductInterestBundle**](ProductInterestBundlesApi.md#createProductInterestBundle) | **POST** /rest/v2/productInterestBundles | Create a Product Interest Bundle
[**deleteProductInterestBundle**](ProductInterestBundlesApi.md#deleteProductInterestBundle) | **DELETE** /rest/v2/productInterestBundles/{id} | Delete a Product Interest Bundle
[**getProductInterestBundle**](ProductInterestBundlesApi.md#getProductInterestBundle) | **GET** /rest/v2/productInterestBundles/{id} | Get a Product Interest Bundle
[**listProductInterestBundles**](ProductInterestBundlesApi.md#listProductInterestBundles) | **GET** /rest/v2/productInterestBundles | List Product Interest Bundles
[**removeProductInterest**](ProductInterestBundlesApi.md#removeProductInterest) | **DELETE** /rest/v2/productInterestBundles/{id}/interests/{interest_id} | Delete a Product Interest from an existing Bundle
[**updateProductInterest**](ProductInterestBundlesApi.md#updateProductInterest) | **PATCH** /rest/v2/productInterestBundles/{id}/interests/{interest_id} | Update a Product Interest in an existing Bundle
[**updateProductInterestBundle**](ProductInterestBundlesApi.md#updateProductInterestBundle) | **PATCH** /rest/v2/productInterestBundles/{id} | Update a Product Interest Bundle



## addProductInterest

> ProductInterest addProductInterest(id, addProductInterestRequest)

Create a Product Interest in an existing Bundle

Creates a new Product Interest in an existing Bundle.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | 
let addProductInterestRequest = new KeapCoreServiceV2Sdk.AddProductInterestRequest(); // AddProductInterestRequest | 
apiInstance.addProductInterest(id, addProductInterestRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **addProductInterestRequest** | [**AddProductInterestRequest**](AddProductInterestRequest.md)|  | 

### Return type

[**ProductInterest**](ProductInterest.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let createProductInterestBundleRequest = new KeapCoreServiceV2Sdk.CreateProductInterestBundleRequest(); // CreateProductInterestBundleRequest | 
apiInstance.createProductInterestBundle(createProductInterestBundleRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductInterestBundleRequest** | [**CreateProductInterestBundleRequest**](CreateProductInterestBundleRequest.md)|  | 

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | 
apiInstance.deleteProductInterestBundle(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | 
apiInstance.getProductInterestBundle(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

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

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | 
let interestId = "interestId_example"; // String | 
apiInstance.removeProductInterest(id, interestId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **interestId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | 
let interestId = "interestId_example"; // String | 
let updateProductInterestRequest = new KeapCoreServiceV2Sdk.UpdateProductInterestRequest(); // UpdateProductInterestRequest | 
let opts = {
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
 **id** | **String**|  | 
 **interestId** | **String**|  | 
 **updateProductInterestRequest** | [**UpdateProductInterestRequest**](UpdateProductInterestRequest.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductInterest**](ProductInterest.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductInterestBundlesApi();
let id = "id_example"; // String | 
let updateProductInterestBundleRequest = new KeapCoreServiceV2Sdk.UpdateProductInterestBundleRequest(); // UpdateProductInterestBundleRequest | 
let opts = {
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
 **id** | **String**|  | 
 **updateProductInterestBundleRequest** | [**UpdateProductInterestBundleRequest**](UpdateProductInterestBundleRequest.md)|  | 
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductInterestBundle**](ProductInterestBundle.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

