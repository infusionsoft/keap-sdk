# KeapCoreServiceV2Sdk.CreateRestOrderItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** |  | [optional] 
**itemType** | **String** | The type of this line item. For now only [PRODUCT] is supported. Will default to [PRODUCT] if omitted. | [optional] 
**price** | **Number** | Overridable price of the product. If not specified, the default will be used. Must be greater than or equal to 0. | [optional] 
**productId** | **String** | The id of the product to be added to the order. | 
**quantity** | **Number** | Quantity must be greater than or equal to 1 | 



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




