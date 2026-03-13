# KeapCoreServiceV2Sdk.UpdateCategoryDiscountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the discount | [optional] 
**description** | **String** | Description of the discount | [optional] 
**criteria** | [**[CategoryDiscountCriteriaRequest]**](CategoryDiscountCriteriaRequest.md) | List of criteria that must be met for this discount to apply | [optional] 
**applyToCommissions** | **Boolean** | Whether to apply this discount to commission calculations | [optional] 
**discountPercent** | **Number** | Percentage discount to apply. Must be greater than or equal to 0. | [optional] 
**productCategoryIds** | **[String]** | List of product category IDs this discount applies to | [optional] 


