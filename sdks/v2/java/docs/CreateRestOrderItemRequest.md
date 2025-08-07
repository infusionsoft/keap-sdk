

# CreateRestOrderItemRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**description** | **String** |  |  [optional] |
|**itemType** | [**ItemTypeEnum**](#ItemTypeEnum) | The type of this line item. For now only [PRODUCT] is supported. Will default to [PRODUCT] if omitted. |  [optional] |
|**price** | **Double** | Overridable price of the product. Must be greater than or equal to 0. If not specified, the product price will be used. |  [optional] |
|**productId** | **String** | The id of the product to be added to the order. |  |
|**quantity** | **Integer** | Quantity must be greater than or equal to 1 |  |



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

