

# OrderItem


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**costPerUnit** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**discount** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**itemType** | [**ItemTypeEnum**](#ItemTypeEnum) | The order item type. Valid values are: PRODUCT, SHIPPING, TAX, SERVICE, PRODUCT, UPSELL, FINANCE_CHARGE, DISCOUNT, PROGRAM, SUBSCRIPTION, DISCOUNT_FREE_TRIAL, DISCOUNT_ORDER_TOTAL, DISCOUNT_PRODUCT, DISCOUNT_PRODUCT_CATEGORY, DISCOUNT_SHIPPING, TIP, OTHER. |  [optional] |
|**name** | **String** |  |  [optional] |
|**notes** | **String** |  |  [optional] |
|**pricePerUnit** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**product** | [**OrderItemProduct**](OrderItemProduct.md) |  |  [optional] |
|**quantity** | **Integer** |  |  [optional] |
|**special** | [**Discount**](Discount.md) |  |  [optional] |
|**subscriptionId** | **String** | If the order item is a subscription type, this refers to the subscription id that generated the order. |  [optional] |
|**subscriptionPlan** | [**SubscriptionPlan**](SubscriptionPlan.md) |  |  [optional] |



## Enum: ItemTypeEnum

| Name | Value |
|---- | -----|
| UNKNOWN | &quot;UNKNOWN&quot; |
| SHIPPING | &quot;SHIPPING&quot; |
| TAX | &quot;TAX&quot; |
| SERVICE | &quot;SERVICE&quot; |
| PRODUCT | &quot;PRODUCT&quot; |
| UPSELL | &quot;UPSELL&quot; |
| FINANCE_CHARGE | &quot;FINANCE_CHARGE&quot; |
| DISCOUNT | &quot;DISCOUNT&quot; |
| PROGRAM | &quot;PROGRAM&quot; |
| SUBSCRIPTION | &quot;SUBSCRIPTION&quot; |
| DISCOUNT_FREE_TRIAL | &quot;DISCOUNT_FREE_TRIAL&quot; |
| DISCOUNT_ORDER_TOTAL | &quot;DISCOUNT_ORDER_TOTAL&quot; |
| DISCOUNT_PRODUCT | &quot;DISCOUNT_PRODUCT&quot; |
| DISCOUNT_PRODUCT_CATEGORY | &quot;DISCOUNT_PRODUCT_CATEGORY&quot; |
| DISCOUNT_SHIPPING | &quot;DISCOUNT_SHIPPING&quot; |
| TIP | &quot;TIP&quot; |
| OTHER | &quot;OTHER&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

