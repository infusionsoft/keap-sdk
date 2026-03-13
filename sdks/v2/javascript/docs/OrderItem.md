# KeapCoreServiceV2Sdk.OrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the order item | [optional] 
**name** | **String** | Name of the item | [optional] 
**description** | **String** | Item description | [optional] 
**notes** | **String** | Additional notes | [optional] 
**quantity** | **Number** | Quantity ordered | [optional] 
**discount** | [**CurrencyValue**](CurrencyValue.md) | If the order item is a discount type, this is the amount of the discount. | [optional] 
**special** | [**Discount**](Discount.md) | If the line item is a discount type, the details about the discount. | [optional] 
**product** | [**OrderItemProduct**](OrderItemProduct.md) | Product details | [optional] 
**subscriptionId** | **String** | If the order item is a subscription type, this refers to the subscription id that generated the order. | [optional] 
**itemType** | **String** | The type of order item. | [optional] 
**costPerUnit** | [**CurrencyValue**](CurrencyValue.md) | Cost per unit | [optional] 
**pricePerUnit** | [**CurrencyValue**](CurrencyValue.md) | Price per unit charged to customer | [optional] 
**subscriptionPlan** | [**SubscriptionPlan**](SubscriptionPlan.md) | If the order item is a subscription type, the details of the subscription plan. | [optional] 



## Enum: ItemTypeEnum


* `PRODUCT` (value: `"PRODUCT"`)

* `SHIPPING` (value: `"SHIPPING"`)

* `TAX` (value: `"TAX"`)

* `SERVICE` (value: `"SERVICE"`)

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

* `UNKNOWN` (value: `"UNKNOWN"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




