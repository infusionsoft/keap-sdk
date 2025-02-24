# KeapCoreServiceV2Sdk.RestV2OrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billingCycle** | **Number** |  | [optional] 
**cost** | **Number** |  | [optional] 
**cycle** | **String** | The interval at which the customer is charged for the subscription. | [optional] 
**description** | **String** |  | [optional] 
**discount** | **Number** |  | [optional] 
**frequency** | **Number** | Interval at which a customer receives a product or service as part of a subscription plan. | [optional] 
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**notes** | **String** |  | [optional] 
**numberOfPayments** | **Number** |  | [optional] 
**orderItemTaxes** | [**[OrderItemTax]**](OrderItemTax.md) |  | [optional] 
**price** | **Number** |  | [optional] 
**product** | [**OrderItemProduct**](OrderItemProduct.md) |  | [optional] 
**quantity** | **Number** |  | [optional] 
**special** | [**Discount**](Discount.md) |  | [optional] 
**subscription** | [**RestV2Subscription**](RestV2Subscription.md) |  | [optional] 
**subscriptionBased** | **Boolean** |  | [optional] 
**subscriptionId** | **String** |  | [optional] 
**subscriptionPlan** | [**RestSubscriptionPlan**](RestSubscriptionPlan.md) |  | [optional] 
**type** | **String** |  | [optional] 



## Enum: CycleEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `YEARLY` (value: `"YEARLY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: TypeEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `SHIPPING` (value: `"SHIPPING"`)

* `TAX` (value: `"TAX"`)

* `SERVICE` (value: `"SERVICE"`)

* `PRODUCT` (value: `"PRODUCT"`)

* `UPSELL` (value: `"UPSELL"`)

* `FINANCE_CHARGE` (value: `"FINANCE_CHARGE"`)

* `SPECIAL` (value: `"SPECIAL"`)

* `PROGRAM` (value: `"PROGRAM"`)

* `SUBSCRIPTION` (value: `"SUBSCRIPTION"`)

* `SPECIAL_FREE_TRIAL_DAYS` (value: `"SPECIAL_FREE_TRIAL_DAYS"`)

* `SPECIAL_ORDER_TOTAL` (value: `"SPECIAL_ORDER_TOTAL"`)

* `SPECIAL_PRODUCT` (value: `"SPECIAL_PRODUCT"`)

* `SPECIAL_CATEGORY` (value: `"SPECIAL_CATEGORY"`)

* `SPECIAL_SHIPPING` (value: `"SPECIAL_SHIPPING"`)

* `TIP` (value: `"TIP"`)

* `OTHER` (value: `"OTHER"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




