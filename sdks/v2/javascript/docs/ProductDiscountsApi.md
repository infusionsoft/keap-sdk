# KeapCoreServiceV2Sdk.ProductDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDiscountUsingPOST2**](ProductDiscountsApi.md#createDiscountUsingPOST2) | **POST** /v2/discounts/products | Create a Product Discount
[**deleteDiscountUsingDELETE2**](ProductDiscountsApi.md#deleteDiscountUsingDELETE2) | **DELETE** /v2/discounts/products/{discount_id} | Delete a Product Discount
[**getDiscountUsingGET2**](ProductDiscountsApi.md#getDiscountUsingGET2) | **GET** /v2/discounts/products/{discount_id} | Retrieve a Product Discount
[**listDiscountsUsingGET**](ProductDiscountsApi.md#listDiscountsUsingGET) | **GET** /v2/discounts/products | List all Product Discounts
[**updateDiscountUsingPATCH2**](ProductDiscountsApi.md#updateDiscountUsingPATCH2) | **PATCH** /v2/discounts/products/{discount_id} | Update a Product Discount



## createDiscountUsingPOST2

> ProductDiscount createDiscountUsingPOST2(createProductDiscountRequest)

Create a Product Discount

Creates a Product Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductDiscountsApi();
let createProductDiscountRequest = new KeapCoreServiceV2Sdk.CreateProductDiscountRequest(); // CreateProductDiscountRequest | request
apiInstance.createDiscountUsingPOST2(createProductDiscountRequest).then((data) => {
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


## deleteDiscountUsingDELETE2

> deleteDiscountUsingDELETE2(discountId)

Delete a Product Discount

Deletes a specified Product Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductDiscountsApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.deleteDiscountUsingDELETE2(discountId).then(() => {
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


## getDiscountUsingGET2

> ProductDiscount getDiscountUsingGET2(discountId)

Retrieve a Product Discount

Retrieves a Product Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductDiscountsApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.getDiscountUsingGET2(discountId).then((data) => {
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


## listDiscountsUsingGET

> ListProductDiscountsResponse listDiscountsUsingGET(opts)

List all Product Discounts

Retrieves a list of Product Discounts

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.ProductDiscountsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (Boolean) `apply_to_commissions` - (DiscountType) `discount_type`: AMOUNT or PERCENT - (Double) `discount_value` - (String) `product_id`  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=apply_to_commissions%3D%3Dtrue` - `filter=discount_type%3D%3DAMOUNT` - `filter=discount_value%3D%3D10.0` - `filter=product_id%3D%3D2` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `apply_to_commissions` - `discount_type` - `discount_value` - `id` - `product_id`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listDiscountsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListProductDiscountsResponse**](ListProductDiscountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDiscountUsingPATCH2

> ProductDiscount updateDiscountUsingPATCH2(discountId, updateProductDiscountRequest, opts)

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
apiInstance.updateDiscountUsingPATCH2(discountId, updateProductDiscountRequest, opts).then((data) => {
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

