# KeapCoreServiceV2Sdk.ProductsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductOptionListOptionValue**](ProductsApi.md#addProductOptionListOptionValue) | **POST** /rest/v2/products/{product_id}/options/{product_option_id}/listItems | Add a Product Option List Option Value
[**adjustInventory**](ProductsApi.md#adjustInventory) | **POST** /rest/v2/products/{product_id}:adjustInventory | Adjust Inventory of a Product
[**createProduct**](ProductsApi.md#createProduct) | **POST** /rest/v2/products | Create a Product
[**createProductImage**](ProductsApi.md#createProductImage) | **POST** /rest/v2/products/{product_id}/images | Create the Product Image
[**createProductOption**](ProductsApi.md#createProductOption) | **POST** /rest/v2/products/{product_id}/options | Create a Product Option
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /rest/v2/products/{product_id} | Delete a Product
[**deleteProductImage**](ProductsApi.md#deleteProductImage) | **DELETE** /rest/v2/products/{product_id}/images | Delete the Product Image
[**deleteProductOption**](ProductsApi.md#deleteProductOption) | **DELETE** /rest/v2/products/{product_id}/options/{product_option_id} | Delete a Product Option
[**deleteProductOptionListOptionValue**](ProductsApi.md#deleteProductOptionListOptionValue) | **DELETE** /rest/v2/products/{product_id}/options/{product_option_id}/listItems/{item_id} | Delete a Product Option List Item
[**getProduct**](ProductsApi.md#getProduct) | **GET** /rest/v2/products/{product_id} | Get a Product
[**getProductOption**](ProductsApi.md#getProductOption) | **GET** /rest/v2/products/{product_id}/options/{product_option_id} | Get Product Option
[**listProductOptions**](ProductsApi.md#listProductOptions) | **GET** /rest/v2/products/{product_id}/options | List Product Options
[**listProducts**](ProductsApi.md#listProducts) | **GET** /rest/v2/products | List Products
[**updateProduct**](ProductsApi.md#updateProduct) | **PATCH** /rest/v2/products/{product_id} | Update a Product
[**updateProductOption**](ProductsApi.md#updateProductOption) | **PATCH** /rest/v2/products/{product_id}/options/{product_option_id} | Updates a Product Option
[**updateProductOptionListOptionValue**](ProductsApi.md#updateProductOptionListOptionValue) | **PATCH** /rest/v2/products/{product_id}/options/{product_option_id}/listItems/{item_id} | Updates a Product Option List Option Value



## addProductOptionListOptionValue

> ProductOption addProductOptionListOptionValue(productId, productOptionId, createProductOptionListOption)

Add a Product Option List Option Value

Adds product option values to a product option of type LIST

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let productOptionId = "productOptionId_example"; // String | product_option_id
let createProductOptionListOption = [new KeapCoreServiceV2Sdk.CreateProductOptionListOption()]; // [CreateProductOptionListOption] | 
apiInstance.addProductOptionListOptionValue(productId, productOptionId, createProductOptionListOption).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **productOptionId** | **String**| product_option_id | 
 **createProductOptionListOption** | [**[CreateProductOptionListOption]**](CreateProductOptionListOption.md)|  | 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adjustInventory

> RestV2ProductDetail adjustInventory(productId, updateProductInventoryRequestDetail)

Adjust Inventory of a Product

Increase or decrease the quantity of the Product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let updateProductInventoryRequestDetail = new KeapCoreServiceV2Sdk.UpdateProductInventoryRequestDetail(); // UpdateProductInventoryRequestDetail | 
apiInstance.adjustInventory(productId, updateProductInventoryRequestDetail).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **updateProductInventoryRequestDetail** | [**UpdateProductInventoryRequestDetail**](UpdateProductInventoryRequestDetail.md)|  | 

### Return type

[**RestV2ProductDetail**](RestV2ProductDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProduct

> RestV2ProductDetail createProduct(createProductRequestDetail)

Create a Product

Creates a new product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let createProductRequestDetail = new KeapCoreServiceV2Sdk.CreateProductRequestDetail(); // CreateProductRequestDetail | 
apiInstance.createProduct(createProductRequestDetail).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductRequestDetail** | [**CreateProductRequestDetail**](CreateProductRequestDetail.md)|  | 

### Return type

[**RestV2ProductDetail**](RestV2ProductDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

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

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## createProductOption

> ProductOption createProductOption(productId, createProductOptionRequest)

Create a Product Option

Creates a new product option

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let createProductOptionRequest = new KeapCoreServiceV2Sdk.CreateProductOptionRequest(); // CreateProductOptionRequest | 
apiInstance.createProductOption(productId, createProductOptionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **createProductOptionRequest** | [**CreateProductOptionRequest**](CreateProductOptionRequest.md)|  | 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProduct

> deleteProduct(productId)

Delete a Product

Deletes a single product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

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

[oauth2](../README.md#oauth2)

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
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

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

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProductOption

> deleteProductOption(productId, productOptionId)

Delete a Product Option

Deletes a single product option

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let productOptionId = "productOptionId_example"; // String | product_option_id
apiInstance.deleteProductOption(productId, productOptionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **productOptionId** | **String**| product_option_id | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProductOptionListOptionValue

> deleteProductOptionListOptionValue(productId, productOptionId, itemId)

Delete a Product Option List Item

Deletes a single option value in a Product Option of type LIST

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let productOptionId = "productOptionId_example"; // String | product_option_id
let itemId = "itemId_example"; // String | item_id
apiInstance.deleteProductOptionListOptionValue(productId, productOptionId, itemId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **productOptionId** | **String**| product_option_id | 
 **itemId** | **String**| item_id | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProduct

> RestV2ProductDetail getProduct(productId)

Get a Product

Gets a single Product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

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

[**RestV2ProductDetail**](RestV2ProductDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductOption

> ProductOption getProductOption(productId, productOptionId)

Get Product Option

Retrieves a Product Option

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let productOptionId = "productOptionId_example"; // String | product_option_id
apiInstance.getProductOption(productId, productOptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **productOptionId** | **String**| product_option_id | 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductOptions

> ListProductOptionsResponse listProductOptions(productId)

List Product Options

Retrieves all options of a Product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
apiInstance.listProductOptions(productId).then((data) => {
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

[**ListProductOptionsResponse**](ListProductOptionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProducts

> ListProductsResponseList listProducts(opts)

List Products

Retrieves a list of Products

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name` - (String) `sku`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3Dtestsearch` - `filter=sku%3D%3Dtestsearch` - `filter=name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch` 
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
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;sku&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;sku%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListProductsResponseList**](ListProductsResponseList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProduct

> RestV2ProductDetail updateProduct(productId, updateProductRequestDetail, opts)

Update a Product

Updates a product

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let updateProductRequestDetail = new KeapCoreServiceV2Sdk.UpdateProductRequestDetail(); // UpdateProductRequestDetail | 
let opts = {
  'updateMask': "updateMask_example" // String | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateProduct(productId, updateProductRequestDetail, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **updateProductRequestDetail** | [**UpdateProductRequestDetail**](UpdateProductRequestDetail.md)|  | 
 **updateMask** | **String**| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestV2ProductDetail**](RestV2ProductDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductOption

> ProductOption updateProductOption(productId, productOptionId, updateProductOptionRequest, opts)

Updates a Product Option

Updates a product option

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let productOptionId = "productOptionId_example"; // String | product_option_id
let updateProductOptionRequest = new KeapCoreServiceV2Sdk.UpdateProductOptionRequest(); // UpdateProductOptionRequest | 
let opts = {
  'updateMask': "updateMask_example" // String | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateProductOption(productId, productOptionId, updateProductOptionRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **productOptionId** | **String**| product_option_id | 
 **updateProductOptionRequest** | [**UpdateProductOptionRequest**](UpdateProductOptionRequest.md)|  | 
 **updateMask** | **String**| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductOptionListOptionValue

> ProductOption updateProductOptionListOptionValue(productId, productOptionId, itemId, updateProductOptionListOption, opts)

Updates a Product Option List Option Value

Updates a single product option value

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
let productOptionId = "productOptionId_example"; // String | product_option_id
let itemId = "itemId_example"; // String | item_id
let updateProductOptionListOption = new KeapCoreServiceV2Sdk.UpdateProductOptionListOption(); // UpdateProductOptionListOption | 
let opts = {
  'updateMask': "updateMask_example" // String | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateProductOptionListOptionValue(productId, productOptionId, itemId, updateProductOptionListOption, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **productOptionId** | **String**| product_option_id | 
 **itemId** | **String**| item_id | 
 **updateProductOptionListOption** | [**UpdateProductOptionListOption**](UpdateProductOptionListOption.md)|  | 
 **updateMask** | **String**| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

