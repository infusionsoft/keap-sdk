# .ProductInterestBundlesApi

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


# **addProductInterest**
> ProductInterest addProductInterest(addProductInterestRequest)

Creates a new Product Interest in an existing Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiAddProductInterestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiAddProductInterestRequest = {
    // id
  id: "id_example",
    // request
  addProductInterestRequest: {
    discountPercent: 1,
    entityId: "entityId_example",
    price: 3.14,
    quantity: 1,
    type: "PRODUCT",
  },
};

const data = await apiInstance.addProductInterest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addProductInterestRequest** | **AddProductInterestRequest**| request |
 **id** | [**string**] | id | defaults to undefined


### Return type

**ProductInterest**

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

# **createProductInterestBundle**
> ProductInterestBundle createProductInterestBundle(createProductInterestBundleRequest)

Creates a new Product Interest Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiCreateProductInterestBundleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiCreateProductInterestBundleRequest = {
    // createProductInterestBundleRequest
  createProductInterestBundleRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createProductInterestBundle(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductInterestBundleRequest** | **CreateProductInterestBundleRequest**| createProductInterestBundleRequest |


### Return type

**ProductInterestBundle**

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

# **deleteProductInterestBundle**
> void deleteProductInterestBundle()

Deletes an existing Product Interest Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiDeleteProductInterestBundleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiDeleteProductInterestBundleRequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.deleteProductInterestBundle(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined


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

# **getProductInterestBundle**
> ProductInterestBundle getProductInterestBundle()

Gets a single Product Interest Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiGetProductInterestBundleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiGetProductInterestBundleRequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.getProductInterestBundle(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined


### Return type

**ProductInterestBundle**

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

# **listProductInterestBundles**
> ListProductInterestBundleResponse listProductInterestBundles()

Retrieves a list of Product Interest Bundles

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiListProductInterestBundlesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiListProductInterestBundlesRequest = {
    // Filter to apply, allowed fields are: - (String) `name`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc`  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listProductInterestBundles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListProductInterestBundleResponse**

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

# **removeProductInterest**
> void removeProductInterest()

Deletes an existing Product Interest from an existing Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiRemoveProductInterestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiRemoveProductInterestRequest = {
    // id
  id: "id_example",
    // interest_id
  interestId: "interest_id_example",
};

const data = await apiInstance.removeProductInterest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined
 **interestId** | [**string**] | interest_id | defaults to undefined


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

# **updateProductInterest**
> ProductInterest updateProductInterest(updateProductInterestRequest)

Updates an existing Product Interest in an existing Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiUpdateProductInterestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiUpdateProductInterestRequest = {
    // id
  id: "id_example",
    // interest_id
  interestId: "interest_id_example",
    // updateProductInterestRequest
  updateProductInterestRequest: {
    discountPercent: 1,
    price: 3.14,
    quantity: 1,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "quantity",
  ],
};

const data = await apiInstance.updateProductInterest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductInterestRequest** | **UpdateProductInterestRequest**| updateProductInterestRequest |
 **id** | [**string**] | id | defaults to undefined
 **interestId** | [**string**] | interest_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ProductInterest**

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

# **updateProductInterestBundle**
> ProductInterestBundle updateProductInterestBundle(updateProductInterestBundleRequest)

Updates an existing Product Interest Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiUpdateProductInterestBundleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiUpdateProductInterestBundleRequest = {
    // id
  id: "id_example",
    // updateProductInterestBundleRequest
  updateProductInterestBundleRequest: {
    description: "description_example",
    name: "name_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateProductInterestBundle(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductInterestBundleRequest** | **UpdateProductInterestBundleRequest**| updateProductInterestBundleRequest |
 **id** | [**string**] | id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ProductInterestBundle**

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


