# KeapCoreServiceV2Sdk.CreateOrderItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**costPerUnit** | **Number** | The cost per unit. Must be greater than or equal to 0. | [optional] 
**description** | **String** | The description of the order item. Must not be whitespace. | [optional] 
**itemType** | **String** | The type of this order item. For now only [PRODUCT] is supported. Will default to [PRODUCT] if omitted. | [optional] 
**name** | **String** | The name of the order item. Must not be whitespace. If not specified, the product name will be used. | [optional] 
**notes** | **String** | The notes for the order item. Must not be whitespace. | [optional] 
**pricePerUnit** | **Number** | The price per unit. Must be greater than or equal to 0. If not specified, the product price will be used. | [optional] 
**productId** | **String** | The id of the product to be added to the order. Must be a valid product id. | 
**quantity** | **Number** | The quantity. Must be greater than or equal to 1. | 



## Enum: ItemTypeEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `SHIPPING` (value: `"SHIPPING"`)

* `TAX` (value: `"TAX"`)

* `SERVICE` (value: `"SERVICE"`)

* `PRODUCT` (value: `"PRODUCT"`)

* `UPSELL` (value: `"UPSELL"`)

* `FINANCE_CHARGE` (value: `"FINANCE_CHARGE"`)

* `DISCOUNT` (value: `"DISCOUNT"`)

* `PROGRAM` (value: `"PROGRAM"`)

* `SUBSCRIPTION` (value: `"SUBSCRIPTION"`)

* `DISCOUNT_FREE_TRIAL` (value: `"DISCOUNT_FREE_TRIAL"`)

* `DISCOUNT_ORDER_TOTAL` (value: `"DISCOUNT_ORDER_TOTAL"`)

* `DISCOUNT_PRODUCT` (value: `"DISCOUNT_PRODUCT"`)

* `DISCOUNT_PRODUCT_CATEGORY` (value: `"DISCOUNT_PRODUCT_CATEGORY"`)

* `DISCOUNT_SHIPPING` (value: `"DISCOUNT_SHIPPING"`)

* `TIP` (value: `"TIP"`)

* `OTHER` (value: `"OTHER"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




