# Keap.Core.V2.Model.CategoryDiscount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier for this category discount | [optional] 
**Name** | **string** | Name of the discount | [optional] 
**Description** | **string** | Description of the discount | [optional] 
**Criteria** | [**List&lt;CategoryDiscountCriteriaResponse&gt;**](CategoryDiscountCriteriaResponse.md) | List of criteria that must be met for this discount to apply | [optional] 
**DiscountPercent** | **double** | Percentage discount to apply (0-100) | [optional] 
**ApplyToCommissions** | **bool** | Whether to apply this discount to commission calculations | [optional] 
**ProductCategories** | **List&lt;string&gt;** | List of product category IDs this discount applies to | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

