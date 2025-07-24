# KeapCoreServiceV2Sdk.ProductsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjustInventory**](ProductsApi.md#adjustInventory) | **POST** /v2/products/{product_id}:adjustInventory | Adjust Inventory of a Product
[**createProduct**](ProductsApi.md#createProduct) | **POST** /v2/products | Create a Product
[**createProductImage**](ProductsApi.md#createProductImage) | **POST** /v2/products/{product_id}/images | Create the Product Image
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /v2/products/{product_id} | Delete a Product
[**deleteProductImage**](ProductsApi.md#deleteProductImage) | **DELETE** /v2/products/{product_id}/images | Delete the Product Image
[**getProduct**](ProductsApi.md#getProduct) | **GET** /v2/products/{product_id} | Get a Product
[**listProducts**](ProductsApi.md#listProducts) | **GET** /v2/products | List Products
[**updateProduct**](ProductsApi.md#updateProduct) | **PATCH** /v2/products/{product_id} | Update a Product



## adjustInventory

> RestV2Product adjustInventory(productId, updateProductInventoryRequest)

Adjust Inventory of a Product

Increase or decrease the quantity of the Product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let updateProductInventoryRequest = new KeapCoreServiceV2Sdk.UpdateProductInventoryRequest(); // UpdateProductInventoryRequest | updateProductInventoryRequest
apiInstance.adjustInventory(productId, updateProductInventoryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **updateProductInventoryRequest** | [**UpdateProductInventoryRequest**](UpdateProductInventoryRequest.md)| updateProductInventoryRequest | 

### Return type

[**RestV2Product**](RestV2Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProduct

> RestV2Product createProduct(createProductRequest)

Create a Product

Creates a new product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let createProductRequest = new KeapCoreServiceV2Sdk.CreateProductRequest(); // CreateProductRequest | createProductRequest
apiInstance.createProduct(createProductRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md)| createProductRequest | 

### Return type

[**RestV2Product**](RestV2Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProductImage

> createProductImage(productId, file)

Create the Product Image

Creates the Product Image file and uploads it to the specified Product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let file = "/path/to/file"; // File | File to upload
apiInstance.createProductImage(productId, file).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **file** | **File**| File to upload | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## deleteProduct

> deleteProduct(productId)

Delete a Product

Deletes a single product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
apiInstance.deleteProduct(productId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProductImage

> deleteProductImage(productId)

Delete the Product Image

Deletes the Product Image from the specified Product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
apiInstance.deleteProductImage(productId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProduct

> RestV2Product getProduct(productId)

Get a Product

Gets a single Product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
apiInstance.getProduct(productId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 

### Return type

[**RestV2Product**](RestV2Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProducts

> ListProductsResponse listProducts(opts)

List Products

Retrieves a list of Products

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listProducts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListProductsResponse**](ListProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProduct

> RestV2Product updateProduct(productId, updateProductRequest, opts)

Update a Product

Updates a product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let updateProductRequest = new KeapCoreServiceV2Sdk.UpdateProductRequest(); // UpdateProductRequest | updateProductRequest
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateProduct(productId, updateProductRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **updateProductRequest** | [**UpdateProductRequest**](UpdateProductRequest.md)| updateProductRequest | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestV2Product**](RestV2Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

