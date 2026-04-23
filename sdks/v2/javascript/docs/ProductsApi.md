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
[**getFileData**](ProductsApi.md#getFileData) | **GET** /rest/v2/products/{product_id}/images/legacyImageData | Retrieve Product Legacy Image Data
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

> createProductImage(productId, file, opts)

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
let productId = "productId_example"; // String | The product ID
let file = "/path/to/file"; // File | The image file to upload
let opts = {
  'legacy': true // Boolean | Set to 'true' if the product image should also be used in legacy cart features. Only one image is allowed. If an image already exists, it will be replaced by the current image.
};
apiInstance.createProductImage(productId, file, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The product ID | 
 **file** | **File**| The image file to upload | 
 **legacy** | **Boolean**| Set to &#39;true&#39; if the product image should also be used in legacy cart features. Only one image is allowed. If an image already exists, it will be replaced by the current image. | [optional] 

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


## getFileData

> Blob getFileData(productId)

Retrieve Product Legacy Image Data

Retrieves the product&#39;s legacy image

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';
let defaultClient = KeapCoreServiceV2Sdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KeapCoreServiceV2Sdk.ProductsApi();
let productId = "productId_example"; // String | product_id
apiInstance.getFileData(productId).then((data) => {
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

**Blob**

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
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) `name` - Wildcard matching allowed - (String) `sku` - Wildcard matching allowed - (String) `description` - Wildcard matching allowed - (String) `short_description` - Wildcard matching allowed - (String) `product_id` - supports comparison operators: `==`, `>`, `<`, `>=`, `<=` - (List[String]) `product_ids` - accepts a comma-separated list of product IDs  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`.  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo`  For the filters listed above, here are some examples: - `filter=name%3D%3Dtestsearch` - `filter=name%3D%3Dtest*` (starts with \"test\") - `filter=sku%3D%3Dtestsearch` - `filter=sku%3D%3DSKU*` (starts with \"SKU\") - `filter=product_id>5` (product ID greater than 5) - `filter=product_id>=10` (product ID greater than or equal to 10) - `filter=product_id%3D%3D42` (product ID equals 42) - `filter=product_ids%3D%3D1,2,3,4,5` (products with IDs 1, 2, 3, 4, or 5) - `filter=name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `name` - `sku` - `last_updated_time`  One of the following directions: - `asc` - `desc`
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
 **filter** | **String**| Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - Wildcard matching allowed - (String) &#x60;sku&#x60; - Wildcard matching allowed - (String) &#x60;description&#x60; - Wildcard matching allowed - (String) &#x60;short_description&#x60; - Wildcard matching allowed - (String) &#x60;product_id&#x60; - supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; - (List[String]) &#x60;product_ids&#x60; - accepts a comma-separated list of product IDs  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;.  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;name%3D%3Dtest*&#x60; (starts with \&quot;test\&quot;) - &#x60;filter&#x3D;sku%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;sku%3D%3DSKU*&#x60; (starts with \&quot;SKU\&quot;) - &#x60;filter&#x3D;product_id&gt;5&#x60; (product ID greater than 5) - &#x60;filter&#x3D;product_id&gt;&#x3D;10&#x60; (product ID greater than or equal to 10) - &#x60;filter&#x3D;product_id%3D%3D42&#x60; (product ID equals 42) - &#x60;filter&#x3D;product_ids%3D%3D1,2,3,4,5&#x60; (products with IDs 1, 2, 3, 4, or 5) - &#x60;filter&#x3D;name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;sku&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
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
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

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
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

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
  'updateMask': null // Object | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
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
 **updateMask** | [**Object**](.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

