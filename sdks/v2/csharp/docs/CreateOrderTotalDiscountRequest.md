# Keap.Core.V2.Model.CreateOrderTotalDiscountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the discount | 
**Description** | **string** | Description of the discount | [optional] 
**Criteria** | [**List&lt;DiscountCriteria&gt;**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**ApplyToCommissions** | **bool** | Whether to apply this discount to commission calculations | [optional] 
**DiscountType** | **string** | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) | 
**DiscountValue** | **double** | Value of the discount (amount or percentage depending on discount_type) | 
**DiscountStrategy** | **string** | Strategy for applying discount: GROSS (before tax) or NET (after tax) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

