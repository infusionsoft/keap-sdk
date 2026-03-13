# Keap.Core.V2.Model.CreateCategoryDiscountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the discount | 
**Description** | **string** | Description of the discount | [optional] 
**Criteria** | [**List&lt;CategoryDiscountCriteriaRequest&gt;**](CategoryDiscountCriteriaRequest.md) | List of criteria that must be met for this discount to apply | [optional] 
**ApplyToCommissions** | **bool** | Whether to apply this discount to commission calculations | 
**DiscountPercent** | **double** | Percentage discount to apply. Must be greater than or equal to 0. | 
**ProductCategoryIds** | **List&lt;string&gt;** | List of product category IDs this discount applies to | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

