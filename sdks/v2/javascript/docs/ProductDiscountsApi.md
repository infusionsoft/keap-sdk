# KeapCoreServiceV2Sdk.ProductDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductDiscount**](ProductDiscountsApi.md#createProductDiscount) | **POST** /v2/discounts/products | Create a Product Discount
[**deleteProductDiscount**](ProductDiscountsApi.md#deleteProductDiscount) | **DELETE** /v2/discounts/products/{discount_id} | Delete a Product Discount
[**getProductDiscount**](ProductDiscountsApi.md#getProductDiscount) | **GET** /v2/discounts/products/{discount_id} | Retrieve a Product Discount
[**listProductDiscounts**](ProductDiscountsApi.md#listProductDiscounts) | **GET** /v2/discounts/products | List all Product Discounts
[**updateProductDiscount**](ProductDiscountsApi.md#updateProductDiscount) | **PATCH** /v2/discounts/products/{discount_id} | Update a Product Discount



## createProductDiscount

> ProductDiscount createProductDiscount(createProductDiscountRequest)

Create a Product Discount

Creates a Product Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductDiscountsApi();
let createProductDiscountRequest = new KeapCoreServiceV2Sdk.CreateProductDiscountRequest(); // CreateProductDiscountRequest | request
apiInstance.createProductDiscount(createProductDiscountRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductDiscountRequest** | [**CreateProductDiscountRequest**](CreateProductDiscountRequest.md)| request | 

### Return type

[**ProductDiscount**](ProductDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProductDiscount

> deleteProductDiscount(discountId)

Delete a Product Discount

Deletes a specified Product Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductDiscountsApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.deleteProductDiscount(discountId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductDiscount

> ProductDiscount getProductDiscount(discountId)

Retrieve a Product Discount

Retrieves a Product Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductDiscountsApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.getProductDiscount(discountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 

### Return type

[**ProductDiscount**](ProductDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductDiscounts

> ListProductDiscountsResponse listProductDiscounts(opts)

List all Product Discounts

Retrieves a list of Product Discounts

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductDiscountsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (Boolean) `apply_to_commissions` - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value` - (String) `product_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=apply_to_commissions%3D%3Dtrue` - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D10.0` - `filter=product_id%3D%3D2` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `apply_to_commissions` - `discount_type` - `discount_value` - `id` - `name` - `product_id`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listProductDiscounts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListProductDiscountsResponse**](ListProductDiscountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProductDiscount

> ProductDiscount updateProductDiscount(discountId, updateProductDiscountRequest, opts)

Update a Product Discount

Updates a Product Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductDiscountsApi();
let discountId = "discountId_example"; // String | discount_id
let updateProductDiscountRequest = new KeapCoreServiceV2Sdk.UpdateProductDiscountRequest(); // UpdateProductDiscountRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateProductDiscount(discountId, updateProductDiscountRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 
 **updateProductDiscountRequest** | [**UpdateProductDiscountRequest**](UpdateProductDiscountRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ProductDiscount**](ProductDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

