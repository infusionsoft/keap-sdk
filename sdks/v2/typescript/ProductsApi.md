# .ProductsApi

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


# **addProductOptionListOptionValue**
> ProductOption addProductOptionListOptionValue(createProductOptionListOption)

Adds product option values to a product option of type LIST

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiAddProductOptionListOptionValueRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiAddProductOptionListOptionValueRequest = {
    // product_id
  productId: "product_id_example",
    // product_option_id
  productOptionId: "product_option_id_example",
  
  createProductOptionListOption: [
    {
      itemLabel: "itemLabel_example",
      itemCode: "itemCode_example",
      itemDisplayOrder: 1,
      priceAdjustment: 3.14,
    },
  ],
};

const data = await apiInstance.addProductOptionListOptionValue(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductOptionListOption** | **Array<CreateProductOptionListOption>**|  |
 **productId** | [**string**] | product_id | defaults to undefined
 **productOptionId** | [**string**] | product_option_id | defaults to undefined


### Return type

**ProductOption**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **adjustInventory**
> RestV2ProductDetail adjustInventory(updateProductInventoryRequestDetail)

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
  
  updateProductInventoryRequestDetail: {
    type: "INCREASE",
    quantity: 1,
  },
};

const data = await apiInstance.adjustInventory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductInventoryRequestDetail** | **UpdateProductInventoryRequestDetail**|  |
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**RestV2ProductDetail**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProduct**
> RestV2ProductDetail createProduct(createProductRequestDetail)

Creates a new product

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiCreateProductRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiCreateProductRequest = {
  
  createProductRequestDetail: {
    name: "Premium Widget",
    sku: "PROD-001",
    price: 1250,
    active: true,
    description: "A high-quality widget",
    shippable: true,
    weight: 2.5,
    taxable: true,
    inventory: {
      inventoryLimit: 100,
      inventoryCount: 75,
      outOfStockEnabled: false,
      emailForInventoryNotifications: "notify@example.com",
    },
    shortDescription: "Premium widget",
    subscriptionOnly: false,
    storefrontHidden: false,
    countryTaxable: false,
    stateTaxable: true,
    cityTaxable: false,
  },
};

const data = await apiInstance.createProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductRequestDetail** | **CreateProductRequestDetail**|  |


### Return type

**RestV2ProductDetail**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProductOption**
> ProductOption createProductOption(createProductOptionRequest)

Creates a new product option

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiCreateProductOptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiCreateProductOptionRequest = {
    // product_id
  productId: "product_id_example",
  
  createProductOptionRequest: {
    required: false,
    optionType: "LIST",
    optionLabel: "optionLabel_example",
    displayOrder: 1,
    listItems: [
      {
        itemLabel: "itemLabel_example",
        itemCode: "itemCode_example",
        itemDisplayOrder: 1,
        priceAdjustment: 3.14,
      },
    ],
    textRules: {
      minimumCharacters: 1,
      maximumCharacters: 1,
      allowSpaces: true,
      onlyStartsWith: "NONE",
      onlyEndsWith: "NONE",
      onlyContains: "NONE",
      errorMessage: "errorMessage_example",
    },
  },
};

const data = await apiInstance.createProductOption(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductOptionRequest** | **CreateProductOptionRequest**|  |
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**ProductOption**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProductOption**
> void deleteProductOption()

Deletes a single product option

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiDeleteProductOptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiDeleteProductOptionRequest = {
    // product_id
  productId: "product_id_example",
    // product_option_id
  productOptionId: "product_option_id_example",
};

const data = await apiInstance.deleteProductOption(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined
 **productOptionId** | [**string**] | product_option_id | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProductOptionListOptionValue**
> void deleteProductOptionListOptionValue()

Deletes a single option value in a Product Option of type LIST

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiDeleteProductOptionListOptionValueRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiDeleteProductOptionListOptionValueRequest = {
    // product_id
  productId: "product_id_example",
    // product_option_id
  productOptionId: "product_option_id_example",
    // item_id
  itemId: "item_id_example",
};

const data = await apiInstance.deleteProductOptionListOptionValue(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined
 **productOptionId** | [**string**] | product_option_id | defaults to undefined
 **itemId** | [**string**] | item_id | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProduct**
> RestV2ProductDetail getProduct()

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

**RestV2ProductDetail**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductOption**
> ProductOption getProductOption()

Retrieves a Product Option

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiGetProductOptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiGetProductOptionRequest = {
    // product_id
  productId: "product_id_example",
    // product_option_id
  productOptionId: "product_option_id_example",
};

const data = await apiInstance.getProductOption(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined
 **productOptionId** | [**string**] | product_option_id | defaults to undefined


### Return type

**ProductOption**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProductOptions**
> ListProductOptionsResponse listProductOptions()

Retrieves all options of a Product

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiListProductOptionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiListProductOptionsRequest = {
    // product_id
  productId: "product_id_example",
};

const data = await apiInstance.listProductOptions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**ListProductOptionsResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProducts**
> ListProductsResponseList listProducts()

Retrieves a list of Products

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiListProductsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiListProductsRequest = {
    // Filter to apply, allowed fields are: - (String) `name` - (String) `sku`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3Dtestsearch` - `filter=sku%3D%3Dtestsearch` - `filter=name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch`  (optional)
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
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;sku&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;sku%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListProductsResponseList**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProduct**
> RestV2ProductDetail updateProduct(updateProductRequestDetail)

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
  
  updateProductRequestDetail: {
    name: "Premium Widget",
    sku: "PROD-001",
    price: 1250,
    active: true,
    description: "A high-quality widget",
    shippable: true,
    weight: 2.5,
    taxable: true,
    shortDescription: "Premium widget",
    subscriptionOnly: false,
    storefrontHidden: false,
    countryTaxable: false,
    stateTaxable: true,
    cityTaxable: false,
    inventoryLimit: 100,
    outOfStockEnabled: false,
    emailForInventoryNotifications: "notify@example.com",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: `active,name,description,price,sku,shippable,short_description,subscription_only,
storefront_hidden,weight,taxable,country_taxable,city_taxable,state_taxable,
inventory_limit,out_of_stock_enabled,email_for_inventory_notifications`,
};

const data = await apiInstance.updateProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductRequestDetail** | **UpdateProductRequestDetail**|  |
 **productId** | [**string**] | product_id | defaults to undefined
 **updateMask** | [**&#39;active,name,description,price,sku,shippable,short_description,subscription_only, storefront_hidden,weight,taxable,country_taxable,city_taxable,state_taxable, inventory_limit,out_of_stock_enabled,email_for_inventory_notifications&#39;**]**Array<&#39;active,name,description,price,sku,shippable,short_description,subscription_only, storefront_hidden,weight,taxable,country_taxable,city_taxable,state_taxable, inventory_limit,out_of_stock_enabled,email_for_inventory_notifications&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestV2ProductDetail**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProductOption**
> ProductOption updateProductOption(updateProductOptionRequest)

Updates a product option

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateProductOptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateProductOptionRequest = {
    // product_id
  productId: "product_id_example",
    // product_option_id
  productOptionId: "product_option_id_example",
  
  updateProductOptionRequest: {
    required: true,
    optionLabel: "optionLabel_example",
    displayOrder: 1,
    minimumCharacters: 1,
    maximumCharacters: 1,
    allowSpaces: true,
    onlyStartsWith: "NONE",
    onlyEndsWith: "NONE",
    onlyContains: "NONE",
    errorMessage: "errorMessage_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: `option_label,display_order,required,minimum_characters,maximum_characters,allow_spaces,
only_starts_with,only_ends_with,only_contains,error_message`,
};

const data = await apiInstance.updateProductOption(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductOptionRequest** | **UpdateProductOptionRequest**|  |
 **productId** | [**string**] | product_id | defaults to undefined
 **productOptionId** | [**string**] | product_option_id | defaults to undefined
 **updateMask** | [**&#39;option_label,display_order,required,minimum_characters,maximum_characters,allow_spaces, only_starts_with,only_ends_with,only_contains,error_message&#39;**]**Array<&#39;option_label,display_order,required,minimum_characters,maximum_characters,allow_spaces, only_starts_with,only_ends_with,only_contains,error_message&#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ProductOption**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProductOptionListOptionValue**
> ProductOption updateProductOptionListOptionValue(updateProductOptionListOption)

Updates a single product option value

### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateProductOptionListOptionValueRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateProductOptionListOptionValueRequest = {
    // product_id
  productId: "product_id_example",
    // product_option_id
  productOptionId: "product_option_id_example",
    // item_id
  itemId: "item_id_example",
  
  updateProductOptionListOption: {
    itemLabel: "itemLabel_example",
    itemCode: "itemCode_example",
    itemDisplayOrder: 1,
    priceAdjustment: 3.14,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: `item_label,item_code,item_display_order,price_adjustment
`,
};

const data = await apiInstance.updateProductOptionListOptionValue(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductOptionListOption** | **UpdateProductOptionListOption**|  |
 **productId** | [**string**] | product_id | defaults to undefined
 **productOptionId** | [**string**] | product_option_id | defaults to undefined
 **itemId** | [**string**] | item_id | defaults to undefined
 **updateMask** | [**&#39;item_label,item_code,item_display_order,price_adjustment &#39;**]**Array<&#39;item_label,item_code,item_display_order,price_adjustment &#39;>** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ProductOption**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


