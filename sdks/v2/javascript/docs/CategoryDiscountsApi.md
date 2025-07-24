# KeapCoreServiceV2Sdk.CategoryDiscountsApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategoryDiscount**](CategoryDiscountsApi.md#createCategoryDiscount) | **POST** /v2/discounts/productCategories | Create a Category Discount
[**deleteCategoryDiscount**](CategoryDiscountsApi.md#deleteCategoryDiscount) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**getCategoryDiscount**](CategoryDiscountsApi.md#getCategoryDiscount) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount
[**listCategoryDiscounts**](CategoryDiscountsApi.md#listCategoryDiscounts) | **GET** /v2/discounts/productCategories | List Category Discounts
[**updateCategoryDiscount**](CategoryDiscountsApi.md#updateCategoryDiscount) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount



## createCategoryDiscount

> CategoryDiscount createCategoryDiscount(createCategoryDiscountRequest)

Create a Category Discount

Creates a Category Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CategoryDiscountsApi();
let createCategoryDiscountRequest = new KeapCoreServiceV2Sdk.CreateCategoryDiscountRequest(); // CreateCategoryDiscountRequest | request
apiInstance.createCategoryDiscount(createCategoryDiscountRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCategoryDiscountRequest** | [**CreateCategoryDiscountRequest**](CreateCategoryDiscountRequest.md)| request | 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCategoryDiscount

> deleteCategoryDiscount(discountId)

Delete a Category Discount

Deletes a specified Category Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CategoryDiscountsApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.deleteCategoryDiscount(discountId).then(() => {
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


## getCategoryDiscount

> CategoryDiscount getCategoryDiscount(discountId)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CategoryDiscountsApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.getCategoryDiscount(discountId).then((data) => {
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

[**CategoryDiscount**](CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCategoryDiscounts

> ListCategoryDiscountsResponse listCategoryDiscounts(opts)

List Category Discounts

Retrieves a list of Category Discounts

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CategoryDiscountsApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, the allowed field is: - (String) `product_category_id`  You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - `id` - `name`  One of the following directions: - `asc` - `desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listCategoryDiscounts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, the allowed field is: - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListCategoryDiscountsResponse**](ListCategoryDiscountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCategoryDiscount

> CategoryDiscount updateCategoryDiscount(discountId, updateCategoryDiscountRequest, opts)

Update a Category Discount

Updates a Category Discount

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.CategoryDiscountsApi();
let discountId = "discountId_example"; // String | discount_id
let updateCategoryDiscountRequest = new KeapCoreServiceV2Sdk.UpdateCategoryDiscountRequest(); // UpdateCategoryDiscountRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateCategoryDiscount(discountId, updateCategoryDiscountRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 
 **updateCategoryDiscountRequest** | [**UpdateCategoryDiscountRequest**](UpdateCategoryDiscountRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

