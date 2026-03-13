

# OrderItem


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique identifier for the order item |  [optional] |
|**name** | **String** | Name of the item |  [optional] |
|**description** | **String** | Item description |  [optional] |
|**notes** | **String** | Additional notes |  [optional] |
|**quantity** | **Integer** | Quantity ordered |  [optional] |
|**discount** | [**CurrencyValue**](CurrencyValue.md) | If the order item is a discount type, this is the amount of the discount. |  [optional] |
|**special** | [**Discount**](Discount.md) | If the line item is a discount type, the details about the discount. |  [optional] |
|**product** | [**OrderItemProduct**](OrderItemProduct.md) | Product details |  [optional] |
|**subscriptionId** | **String** | If the order item is a subscription type, this refers to the subscription id that generated the order. |  [optional] |
|**itemType** | [**ItemTypeEnum**](#ItemTypeEnum) | The type of order item. |  [optional] |
|**costPerUnit** | [**CurrencyValue**](CurrencyValue.md) | Cost per unit |  [optional] |
|**pricePerUnit** | [**CurrencyValue**](CurrencyValue.md) | Price per unit charged to customer |  [optional] |
|**subscriptionPlan** | [**SubscriptionPlan**](SubscriptionPlan.md) | If the order item is a subscription type, the details of the subscription plan. |  [optional] |



## Enum: ItemTypeEnum

| Name | Value |
|---- | -----|
| PRODUCT | &quot;PRODUCT&quot; |
| SHIPPING | &quot;SHIPPING&quot; |
| TAX | &quot;TAX&quot; |
| SERVICE | &quot;SERVICE&quot; |
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
| UNKNOWN | &quot;UNKNOWN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

