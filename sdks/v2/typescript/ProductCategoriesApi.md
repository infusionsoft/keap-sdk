# .ProductCategoriesApi

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


# **assignProductsToCategory**
> void assignProductsToCategory(assignProductsRequest)

Assigns products to a Product Category

### Example


```typescript
import { createConfiguration, ProductCategoriesApi } from '';
import type { ProductCategoriesApiAssignProductsToCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductCategoriesApi(configuration);

const request: ProductCategoriesApiAssignProductsToCategoryRequest = {
    // category_id
  categoryId: "category_id_example",
    // request
  assignProductsRequest: {
    productIds: [
      "productIds_example",
    ],
  },
};

const data = await apiInstance.assignProductsToCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignProductsRequest** | **AssignProductsRequest**| request |
 **categoryId** | [**string**] | category_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createImageFile**
> void createImageFile()

Creates the product category image file and uploads it to the specified product category

### Example


```typescript
import { createConfiguration, ProductCategoriesApi } from '';
import type { ProductCategoriesApiCreateImageFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductCategoriesApi(configuration);

const request: ProductCategoriesApiCreateImageFileRequest = {
    // category_id
  categoryId: "category_id_example",
    // File to upload
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.createImageFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | category_id | defaults to undefined
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

# **createProductCategory**
> ProductCategory createProductCategory()

Creates a new Product Category

### Example


```typescript
import { createConfiguration, ProductCategoriesApi } from '';
import type { ProductCategoriesApiCreateProductCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductCategoriesApi(configuration);

const request: ProductCategoriesApiCreateProductCategoryRequest = {
    // productCategory (optional)
  createProductCategoryRequest: {
    displayOrderIndex: 1,
    name: "name_example",
    parentCategoryId: "parentCategoryId_example",
  },
};

const data = await apiInstance.createProductCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductCategoryRequest** | **CreateProductCategoryRequest**| productCategory |


### Return type

**ProductCategory**

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

# **deleteImageFile**
> void deleteImageFile()

Deletes the image from the specified product category

### Example


```typescript
import { createConfiguration, ProductCategoriesApi } from '';
import type { ProductCategoriesApiDeleteImageFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductCategoriesApi(configuration);

const request: ProductCategoriesApiDeleteImageFileRequest = {
    // category_id
  categoryId: "category_id_example",
};

const data = await apiInstance.deleteImageFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | category_id | defaults to undefined


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

# **deleteProductCategory**
> void deleteProductCategory()

Deletes the specified Product Category, its sub-categories, and removes products from it

### Example


```typescript
import { createConfiguration, ProductCategoriesApi } from '';
import type { ProductCategoriesApiDeleteProductCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductCategoriesApi(configuration);

const request: ProductCategoriesApiDeleteProductCategoryRequest = {
    // category_id
  categoryId: "category_id_example",
};

const data = await apiInstance.deleteProductCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | category_id | defaults to undefined


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

# **getProductCategory**
> ProductCategory getProductCategory()

Gets a single Product Category

### Example


```typescript
import { createConfiguration, ProductCategoriesApi } from '';
import type { ProductCategoriesApiGetProductCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductCategoriesApi(configuration);

const request: ProductCategoriesApiGetProductCategoryRequest = {
    // category_id
  categoryId: "category_id_example",
};

const data = await apiInstance.getProductCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | category_id | defaults to undefined


### Return type

**ProductCategory**

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

# **listProductCategories**
> ListProductCategoriesResponse listProductCategories()

Retrieves a list of Product Categories

### Example


```typescript
import { createConfiguration, ProductCategoriesApi } from '';
import type { ProductCategoriesApiListProductCategoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductCategoriesApi(configuration);

const request: ProductCategoriesApiListProductCategoriesRequest = {
    // Filter to apply, allowed fields are: - (String) `product_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D29`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `id`  One of the following directions: - `asc` - `desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listProductCategories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListProductCategoriesResponse**

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

# **updateProductCategory**
> ProductCategory updateProductCategory(updateProductCategoryRequest)

Updates a single Product Category

### Example


```typescript
import { createConfiguration, ProductCategoriesApi } from '';
import type { ProductCategoriesApiUpdateProductCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductCategoriesApi(configuration);

const request: ProductCategoriesApiUpdateProductCategoryRequest = {
    // category_id
  categoryId: "category_id_example",
    // request
  updateProductCategoryRequest: {
    displayOrderIndex: 1,
    name: "name_example",
    parentCategoryId: "parentCategoryId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateProductCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductCategoryRequest** | **UpdateProductCategoryRequest**| request |
 **categoryId** | [**string**] | category_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ProductCategory**

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


