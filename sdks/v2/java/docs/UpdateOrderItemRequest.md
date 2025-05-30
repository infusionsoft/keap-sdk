

# UpdateOrderItemRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**chargeInventory** | **Boolean** | Determine if the order item has an impact on inventory. |  [optional] |
|**costPerUnit** | **Double** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**note** | **String** |  |  [optional] |
|**pricePerUnit** | **Double** |  |  [optional] |
|**quantity** | **Integer** |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  [optional] |



## Enum: TypeEnum

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

