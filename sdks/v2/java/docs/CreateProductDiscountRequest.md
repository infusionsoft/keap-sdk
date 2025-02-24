

# CreateProductDiscountRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**applyToCommissions** | **Boolean** |  |  [optional] |
|**criteria** | [**List&lt;DiscountCriteria&gt;**](DiscountCriteria.md) |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**discountType** | [**DiscountTypeEnum**](#DiscountTypeEnum) |  |  |
|**discountValue** | **Double** |  |  |
|**name** | **String** |  |  [optional] |
|**productId** | **String** |  |  |



## Enum: DiscountTypeEnum

| Name | Value |
|---- | -----|
| AMOUNT | &quot;AMOUNT&quot; |
| PERCENT | &quot;PERCENT&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

