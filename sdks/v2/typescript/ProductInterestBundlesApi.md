# .ProductInterestBundlesApi

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


# **addProductInterestUsingPOST**
> ProductInterest addProductInterestUsingPOST(addProductInterestRequest)

Creates a new Product Interest in an existing Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiAddProductInterestUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiAddProductInterestUsingPOSTRequest = {
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

const data = await apiInstance.addProductInterestUsingPOST(request);
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

# **createProductInterestBundleUsingPOST**
> ProductInterestBundle createProductInterestBundleUsingPOST(createProductInterestBundleRequest)

Creates a new Product Interest Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiCreateProductInterestBundleUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiCreateProductInterestBundleUsingPOSTRequest = {
    // createProductInterestBundleRequest
  createProductInterestBundleRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createProductInterestBundleUsingPOST(request);
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

# **deleteProductInterestBundleUsingDELETE**
> void deleteProductInterestBundleUsingDELETE()

Deletes an existing Product Interest Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiDeleteProductInterestBundleUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiDeleteProductInterestBundleUsingDELETERequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.deleteProductInterestBundleUsingDELETE(request);
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

# **getProductInterestBundleUsingGET**
> ProductInterestBundle getProductInterestBundleUsingGET()

Gets a single Product Interest Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiGetProductInterestBundleUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiGetProductInterestBundleUsingGETRequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.getProductInterestBundleUsingGET(request);
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

# **listProductInterestBundlesUsingGET**
> ListProductInterestBundleResponse listProductInterestBundlesUsingGET()

Retrieves a list of Product Interest Bundles

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiListProductInterestBundlesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiListProductInterestBundlesUsingGETRequest = {
    // Filter to apply, allowed fields are: - (String) `name`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - `name`  One of the following directions: - `asc` - `desc`  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listProductInterestBundlesUsingGET(request);
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

# **removeProductInterestUsingDELETE**
> void removeProductInterestUsingDELETE()

Deletes an existing Product Interest from an existing Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiRemoveProductInterestUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiRemoveProductInterestUsingDELETERequest = {
    // id
  id: "id_example",
    // interest_id
  interestId: "interest_id_example",
};

const data = await apiInstance.removeProductInterestUsingDELETE(request);
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

# **updateProductInterestBundleUsingPATCH**
> ProductInterestBundle updateProductInterestBundleUsingPATCH(updateProductInterestBundleRequest)

Updates an existing Product Interest Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiUpdateProductInterestBundleUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiUpdateProductInterestBundleUsingPATCHRequest = {
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

const data = await apiInstance.updateProductInterestBundleUsingPATCH(request);
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

# **updateProductInterestUsingPATCH**
> ProductInterest updateProductInterestUsingPATCH(updateProductInterestRequest)

Updates an existing Product Interest in an existing Bundle.

### Example


```typescript
import { createConfiguration, ProductInterestBundlesApi } from '';
import type { ProductInterestBundlesApiUpdateProductInterestUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductInterestBundlesApi(configuration);

const request: ProductInterestBundlesApiUpdateProductInterestUsingPATCHRequest = {
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

const data = await apiInstance.updateProductInterestUsingPATCH(request);
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


