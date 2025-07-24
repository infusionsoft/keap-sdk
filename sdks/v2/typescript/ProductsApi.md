# .ProductsApi

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


# **adjustInventory**
> RestV2Product adjustInventory(updateProductInventoryRequest)

Increase or decrease the quantity of the Product

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiAdjustInventoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiAdjustInventoryRequest = {
    // product_id
  productId: "product_id_example",
    // updateProductInventoryRequest
  updateProductInventoryRequest: {
    quantity: 1,
    type: "INCREASE",
  },
};

const data = await apiInstance.adjustInventory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductInventoryRequest** | **UpdateProductInventoryRequest**| updateProductInventoryRequest |
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**RestV2Product**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProduct**
> RestV2Product createProduct(createProductRequest)

Creates a new product

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiCreateProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiCreateProductRequest = {
    // createProductRequest
  createProductRequest: {
    active: true,
    cityTaxable: true,
    countryTaxable: true,
    description: "description_example",
    inventory: {
      emailForInventoryNotifications: "emailForInventoryNotifications_example",
      inventoryCount: 1,
      inventoryLimit: 1,
      outOfStockEnabled: true,
    },
    name: "name_example",
    price: 1,
    shippable: true,
    shortDescription: "shortDescription_example",
    sku: "sku_example",
    stateTaxable: true,
    storefrontHidden: true,
    subscriptionOnly: true,
    taxable: true,
    weight: 3.14,
  },
};

const data = await apiInstance.createProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductRequest** | **CreateProductRequest**| createProductRequest |


### Return type

**RestV2Product**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProductImage**
> void createProductImage()

Creates the Product Image file and uploads it to the specified Product

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiCreateProductImageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiCreateProductImageRequest = {
    // product_id
  productId: "product_id_example",
    // File to upload
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.createProductImage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined
 **file** | [**HttpFile**] | File to upload | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProduct**
> void deleteProduct()

Deletes a single product

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiDeleteProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiDeleteProductRequest = {
    // product_id
  productId: "product_id_example",
};

const data = await apiInstance.deleteProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProductImage**
> void deleteProductImage()

Deletes the Product Image from the specified Product

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiDeleteProductImageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiDeleteProductImageRequest = {
    // product_id
  productId: "product_id_example",
};

const data = await apiInstance.deleteProductImage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProduct**
> RestV2Product getProduct()

Gets a single Product

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiGetProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiGetProductRequest = {
    // product_id
  productId: "product_id_example",
};

const data = await apiInstance.getProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**RestV2Product**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProducts**
> ListProductsResponse listProducts()

Retrieves a list of Products

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiListProductsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiListProductsRequest = {
    // Filter to apply, allowed fields are: - (String) `name`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listProducts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListProductsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProduct**
> RestV2Product updateProduct(updateProductRequest)

Updates a product

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateProductRequest = {
    // product_id
  productId: "product_id_example",
    // updateProductRequest
  updateProductRequest: {
    active: true,
    cityTaxable: true,
    countryTaxable: true,
    description: "description_example",
    emailForInventoryNotifications: "emailForInventoryNotifications_example",
    inventoryLimit: 1,
    name: "name_example",
    outOfStockEnabled: true,
    price: 1,
    shippable: true,
    shortDescription: "shortDescription_example",
    sku: "sku_example",
    stateTaxable: true,
    storefrontHidden: true,
    subscriptionOnly: true,
    taxable: true,
    weight: 3.14,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "active",
  ],
};

const data = await apiInstance.updateProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductRequest** | **UpdateProductRequest**| updateProductRequest |
 **productId** | [**string**] | product_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestV2Product**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


