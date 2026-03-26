

# CreateOrderItemRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | The name of the order item. Must not be whitespace. If not specified, the product name will be used. |  [optional] |
|**description** | **String** | The description of the order item. Must not be whitespace. |  [optional] |
|**quantity** | **Integer** | The quantity. Must be greater than or equal to 1. |  |
|**notes** | **String** | The notes for the order item. Must not be whitespace. |  [optional] |
|**productId** | **String** | The id of the product to be added to the order. Must be a valid product id. Required for item_type PRODUCT or SUBSCRIPTION. |  [optional] |
|**subscriptionPlanId** | **String** | The id of the subscription plan to be added to the order. Must be a valid subscription plan id. Required only when the item_type is SUBSCRIPTION. |  [optional] |
|**subscriptionPlanDescription** | **String** | A short description of the subscription&#39;s schedule. Used only for item_type SUBSCRIPTION. Must not be whitespace. |  [optional] |
|**itemType** | [**ItemTypeEnum**](#ItemTypeEnum) | The type of this order item. Will default to [PRODUCT] if omitted. |  [optional] |
|**pricePerUnit** | **Double** | The price per unit. For item_type PRODUCT or SUBSCRIPTION, if not specified, the product price will be used. |  [optional] |
|**costPerUnit** | **Double** | The cost per unit. Used only for item_type PRODUCT or SUBSCRIPTION. If not specified, the product cost will be used. |  [optional] |



## Enum: ItemTypeEnum

| Name | Value |
|---- | -----|
| PRODUCT | &quot;PRODUCT&quot; |
| SHIPPING | &quot;SHIPPING&quot; |
| TAX | &quot;TAX&quot; |
| FINANCE_CHARGE | &quot;FINANCE_CHARGE&quot; |
| SUBSCRIPTION | &quot;SUBSCRIPTION&quot; |
| DISCOUNT | &quot;DISCOUNT&quot; |
| DISCOUNT_FREE_TRIAL | &quot;DISCOUNT_FREE_TRIAL&quot; |
| DISCOUNT_ORDER_TOTAL | &quot;DISCOUNT_ORDER_TOTAL&quot; |
| DISCOUNT_PRODUCT | &quot;DISCOUNT_PRODUCT&quot; |
| DISCOUNT_PRODUCT_CATEGORY | &quot;DISCOUNT_PRODUCT_CATEGORY&quot; |
| DISCOUNT_SHIPPING | &quot;DISCOUNT_SHIPPING&quot; |
| OTHER | &quot;OTHER&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

