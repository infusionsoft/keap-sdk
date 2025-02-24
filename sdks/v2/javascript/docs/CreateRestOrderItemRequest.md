# KeapCoreServiceV2Sdk.CreateRestOrderItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** |  | [optional] 
**price** | **Number** | Overridable price of the product. If not specified, the default will be used. Must be greater than or equal to 0. | [optional] 
**productId** | **String** | The id of the product to be added to the order. | 
**productType** | **String** |  | [optional] 
**quantity** | **Number** | Quantity must be greater than or equal to 1 | 



## Enum: ProductTypeEnum


* `PRODUCT` (value: `"PRODUCT"`)

* `DIGITAL` (value: `"DIGITAL"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




