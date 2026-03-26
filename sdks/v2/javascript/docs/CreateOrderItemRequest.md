# KeapCoreServiceV2Sdk.CreateOrderItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the order item. Must not be whitespace. If not specified, the product name will be used. | [optional] 
**description** | **String** | The description of the order item. Must not be whitespace. | [optional] 
**quantity** | **Number** | The quantity. Must be greater than or equal to 1. | 
**notes** | **String** | The notes for the order item. Must not be whitespace. | [optional] 
**productId** | **String** | The id of the product to be added to the order. Must be a valid product id. Required for item_type PRODUCT or SUBSCRIPTION. | [optional] 
**subscriptionPlanId** | **String** | The id of the subscription plan to be added to the order. Must be a valid subscription plan id. Required only when the item_type is SUBSCRIPTION. | [optional] 
**subscriptionPlanDescription** | **String** | A short description of the subscription&#39;s schedule. Used only for item_type SUBSCRIPTION. Must not be whitespace. | [optional] 
**itemType** | **String** | The type of this order item. Will default to [PRODUCT] if omitted. | [optional] [default to &#39;PRODUCT&#39;]
**pricePerUnit** | **Number** | The price per unit. For item_type PRODUCT or SUBSCRIPTION, if not specified, the product price will be used. | [optional] 
**costPerUnit** | **Number** | The cost per unit. Used only for item_type PRODUCT or SUBSCRIPTION. If not specified, the product cost will be used. | [optional] 



## Enum: ItemTypeEnum


* `PRODUCT` (value: `"PRODUCT"`)

* `SHIPPING` (value: `"SHIPPING"`)

* `TAX` (value: `"TAX"`)

* `FINANCE_CHARGE` (value: `"FINANCE_CHARGE"`)

* `SUBSCRIPTION` (value: `"SUBSCRIPTION"`)

* `DISCOUNT` (value: `"DISCOUNT"`)

* `DISCOUNT_FREE_TRIAL` (value: `"DISCOUNT_FREE_TRIAL"`)

* `DISCOUNT_ORDER_TOTAL` (value: `"DISCOUNT_ORDER_TOTAL"`)

* `DISCOUNT_PRODUCT` (value: `"DISCOUNT_PRODUCT"`)

* `DISCOUNT_PRODUCT_CATEGORY` (value: `"DISCOUNT_PRODUCT_CATEGORY"`)

* `DISCOUNT_SHIPPING` (value: `"DISCOUNT_SHIPPING"`)

* `OTHER` (value: `"OTHER"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




