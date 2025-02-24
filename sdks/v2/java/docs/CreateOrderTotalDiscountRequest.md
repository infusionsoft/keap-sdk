

# CreateOrderTotalDiscountRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**applyToCommissions** | **Boolean** |  |  [optional] |
|**criteria** | [**List&lt;DiscountCriteria&gt;**](DiscountCriteria.md) |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**discountStrategy** | [**DiscountStrategyEnum**](#DiscountStrategyEnum) |  |  [optional] |
|**discountType** | [**DiscountTypeEnum**](#DiscountTypeEnum) |  |  |
|**discountValue** | **Double** |  |  |
|**name** | **String** |  |  |



## Enum: DiscountStrategyEnum

| Name | Value |
|---- | -----|
| GROSS | &quot;GROSS&quot; |
| NET | &quot;NET&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: DiscountTypeEnum

| Name | Value |
|---- | -----|
| AMOUNT | &quot;AMOUNT&quot; |
| PERCENT | &quot;PERCENT&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

