

# CreateCategoryDiscountRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | Name of the discount |  |
|**description** | **String** | Description of the discount |  [optional] |
|**criteria** | [**List&lt;CategoryDiscountCriteriaRequest&gt;**](CategoryDiscountCriteriaRequest.md) | List of criteria that must be met for this discount to apply |  [optional] |
|**applyToCommissions** | **Boolean** | Whether to apply this discount to commission calculations |  |
|**discountPercent** | **Double** | Percentage discount to apply. Must be greater than or equal to 0. |  |
|**productCategoryIds** | **List&lt;String&gt;** | List of product category IDs this discount applies to |  |


## Implemented Interfaces

* Serializable

