

# CreateProductDiscountRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | Name of the discount |  |
|**description** | **String** | Description of the discount |  [optional] |
|**criteria** | [**List&lt;DiscountCriteria&gt;**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply |  [optional] |
|**applyToCommissions** | **Boolean** | Whether to apply this discount to commission calculations |  [optional] |
|**productId** | **String** | ID of the product this discount applies to |  |
|**discountType** | [**DiscountTypeEnum**](#DiscountTypeEnum) | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) |  |
|**discountValue** | **Double** | Value of the discount (amount or percentage depending on discount_type) |  |



## Enum: DiscountTypeEnum

| Name | Value |
|---- | -----|
| AMOUNT | &quot;AMOUNT&quot; |
| PERCENT | &quot;PERCENT&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

