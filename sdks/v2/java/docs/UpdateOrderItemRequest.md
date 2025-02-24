

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
| SPECIAL | &quot;SPECIAL&quot; |
| PROGRAM | &quot;PROGRAM&quot; |
| SUBSCRIPTION | &quot;SUBSCRIPTION&quot; |
| SPECIAL_FREE_TRIAL_DAYS | &quot;SPECIAL_FREE_TRIAL_DAYS&quot; |
| SPECIAL_ORDER_TOTAL | &quot;SPECIAL_ORDER_TOTAL&quot; |
| SPECIAL_PRODUCT | &quot;SPECIAL_PRODUCT&quot; |
| SPECIAL_CATEGORY | &quot;SPECIAL_CATEGORY&quot; |
| SPECIAL_SHIPPING | &quot;SPECIAL_SHIPPING&quot; |
| TIP | &quot;TIP&quot; |
| OTHER | &quot;OTHER&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

