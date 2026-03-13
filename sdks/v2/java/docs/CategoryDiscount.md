

# CategoryDiscount


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique identifier for this category discount |  [optional] |
|**name** | **String** | Name of the discount |  [optional] |
|**description** | **String** | Description of the discount |  [optional] |
|**criteria** | [**List&lt;CategoryDiscountCriteriaResponse&gt;**](CategoryDiscountCriteriaResponse.md) | List of criteria that must be met for this discount to apply |  [optional] |
|**discountPercent** | **Double** | Percentage discount to apply (0-100) |  [optional] |
|**applyToCommissions** | **Boolean** | Whether to apply this discount to commission calculations |  [optional] |
|**productCategories** | **List&lt;String&gt;** | List of product category IDs this discount applies to |  [optional] |


## Implemented Interfaces

* Serializable

