

# ProductDiscount


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique identifier for this product discount |  [optional] |
|**name** | **String** | Name of the discount |  [optional] |
|**description** | **String** | Description of the discount |  [optional] |
|**criteria** | [**List&lt;DiscountCriteria&gt;**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply |  [optional] |
|**applyToCommissions** | **Boolean** | Whether to apply this discount to commission calculations |  [optional] |
|**productId** | **String** | ID of the product this discount applies to |  [optional] |
|**discountType** | [**DiscountTypeEnum**](#DiscountTypeEnum) | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) |  [optional] |
|**discountValue** | **Double** | Value of the discount (amount or percentage depending on discount_type) |  [optional] |



## Enum: DiscountTypeEnum

| Name | Value |
|---- | -----|
| AMOUNT | &quot;AMOUNT&quot; |
| PERCENT | &quot;PERCENT&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

