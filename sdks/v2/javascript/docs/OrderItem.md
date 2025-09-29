# KeapCoreServiceV2Sdk.OrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**costPerUnit** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**description** | **String** |  | [optional] 
**discount** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**id** | **String** |  | [optional] 
**itemType** | **String** | The order item type. Valid values are: PRODUCT, SHIPPING, TAX, SERVICE, PRODUCT, UPSELL, FINANCE_CHARGE, DISCOUNT, PROGRAM, SUBSCRIPTION, DISCOUNT_FREE_TRIAL, DISCOUNT_ORDER_TOTAL, DISCOUNT_PRODUCT, DISCOUNT_PRODUCT_CATEGORY, DISCOUNT_SHIPPING, TIP, OTHER. | [optional] 
**name** | **String** |  | [optional] 
**notes** | **String** |  | [optional] 
**pricePerUnit** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**product** | [**OrderItemProduct**](OrderItemProduct.md) |  | [optional] 
**quantity** | **Number** |  | [optional] 
**special** | [**Discount**](Discount.md) |  | [optional] 
**subscriptionId** | **String** | If the order item is a subscription type, this refers to the subscription id that generated the order. | [optional] 
**subscriptionPlan** | [**SubscriptionPlan**](SubscriptionPlan.md) |  | [optional] 



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




