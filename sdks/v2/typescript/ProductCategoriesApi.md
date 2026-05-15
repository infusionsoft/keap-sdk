# .ProductCategoriesApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignProductsToCategory**](ProductCategoriesApi.md#assignProductsToCategory) | **POST** /rest/v2/productCategories/{category_id}:assignProducts | Assign Products to a Product Category
[**createImageFile**](ProductCategoriesApi.md#createImageFile) | **POST** /rest/v2/productCategories/{category_id}/images | Create the product category image file
[**createProductCategory**](ProductCategoriesApi.md#createProductCategory) | **POST** /rest/v2/productCategories | Create a Product Category
[**deleteImageFile**](ProductCategoriesApi.md#deleteImageFile) | **DELETE** /rest/v2/productCategories/{category_id}/images | Delete the image from a product category
[**deleteProductCategory**](ProductCategoriesApi.md#deleteProductCategory) | **DELETE** /rest/v2/productCategories/{category_id} | Delete a Product Category
[**getProductCategory**](ProductCategoriesApi.md#getProductCategory) | **GET** /rest/v2/productCategories/{category_id} | Get a Product Category
[**listProductCategories**](ProductCategoriesApi.md#listProductCategories) | **GET** /rest/v2/productCategories | List all Product Categories
[**updateProductCategory**](ProductCategoriesApi.md#updateProductCategory) | **PATCH** /rest/v2/productCategories/{category_id} | Update a Product Category


# **assignProductsToCategory**
> void assignProductsToCategory(assignProductsRequest)

Updates the list of products assigned to a Product Category. **Note:** The full list of product IDs that should remain assigned must be provided; any IDs omitted are removed automatically.

### Example


```typescript
import { createConfiguration, ProductCategoriesApi } from '';
import type { ProductCategoriesApiAssignProductsToCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductCategoriesApi(configuration);

const request: ProductCategoriesApiAssignProductsToCategoryRequest = {
  
  categoryId: "category_id_example",
  
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
 **assignProductsRequest** | **AssignProductsRequest**|  |
 **categoryId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
 **categoryId** | [**string**] |  | defaults to undefined
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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProductCategory**
> ProductCategory createProductCategory(createProductCategoryRequest)

Creates a new Product Category

### Example


```typescript
import { createConfiguration, ProductCategoriesApi } from '';
import type { ProductCategoriesApiCreateProductCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductCategoriesApi(configuration);

const request: ProductCategoriesApiCreateProductCategoryRequest = {
  
  createProductCategoryRequest: {
    name: "Electronics",
    displayOrderIndex: 0,
    parentCategoryId: "2",
  },
};

const data = await apiInstance.createProductCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductCategoryRequest** | **CreateProductCategoryRequest**|  |


### Return type

**ProductCategory**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  categoryId: "category_id_example",
};

const data = await apiInstance.deleteImageFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  categoryId: "category_id_example",
};

const data = await apiInstance.deleteProductCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] |  | defaults to undefined


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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  categoryId: "category_id_example",
};

const data = await apiInstance.getProductCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] |  | defaults to undefined


### Return type

**ProductCategory**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
    // Filter to apply, allowed fields are: - (String) `product_id` - (String) `name` - Wildcard matching allowed - (Number) `product_category_id` - supports comparison operators: `==`,`!=`, `>`, `<`, `>=`, `<=`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`.  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - `field==foo*` finds anything in `field` that begins with `foo`  For the filters listed above, here are some examples: - `filter=product_id%3D%3D29` - `filter=name%3D%3DTestSearch` - `filter=name%3D%3DElec*` (starts with \"Elec\") - `filter=product_category_id>5` (category ID greater than 5) - `filter=product_category_id>=10` (category ID greater than or equal to 10) - `filter=product_category_id%3D%3D42` (category ID equals 42) - `filter=name%3D%3DElec*%3Bproduct_category_id>5` (multiple filters combined)  (optional)
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
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;name&#x60; - Wildcard matching allowed - (Number) &#x60;product_category_id&#x60; - supports comparison operators: &#x60;&#x3D;&#x3D;&#x60;,&#x60;!&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;.  For fields which allow wildcard matching, you may use the * wildcard character (or its encoded form %2A) for case-insensitive partial matching on text fields. Example of a valid pattern of wildcard usage: - &#x60;field&#x3D;&#x3D;foo*&#x60; finds anything in &#x60;field&#x60; that begins with &#x60;foo&#x60;  For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60; - &#x60;filter&#x3D;name%3D%3DTestSearch&#x60; - &#x60;filter&#x3D;name%3D%3DElec*&#x60; (starts with \&quot;Elec\&quot;) - &#x60;filter&#x3D;product_category_id&gt;5&#x60; (category ID greater than 5) - &#x60;filter&#x3D;product_category_id&gt;&#x3D;10&#x60; (category ID greater than or equal to 10) - &#x60;filter&#x3D;product_category_id%3D%3D42&#x60; (category ID equals 42) - &#x60;filter&#x3D;name%3D%3DElec*%3Bproduct_category_id&gt;5&#x60; (multiple filters combined)  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListProductCategoriesResponse**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

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
  
  categoryId: "category_id_example",
  
  updateProductCategoryRequest: {
    name: "Electronics",
    displayOrderIndex: 0,
    parentCategoryId: "2",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: null,
};

const data = await apiInstance.updateProductCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductCategoryRequest** | **UpdateProductCategoryRequest**|  |
 **categoryId** | [**string**] |  | defaults to undefined
 **updateMask** | **any** | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ProductCategory**

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
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


