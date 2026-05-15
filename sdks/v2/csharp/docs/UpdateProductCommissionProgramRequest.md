# Keap.Core.V2.Model.UpdateProductCommissionProgramRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Percentage** | **string** | Level 1 percentage to be paid for commission (0-100). This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; | [optional] 
**Unused** | [**CommissionItemRequest**](CommissionItemRequest.md) | Payout rules for any unused commissions. | [optional] 
**DollarAmount** | **string** | Level 1 fixed dollar amount to be paid for commission. This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; | [optional] 
**Level1** | [**CommissionItemRequest**](CommissionItemRequest.md) | Payout rules for Level 1 recipients of the commission. | [optional] 
**Level2** | [**CommissionItemRequest**](CommissionItemRequest.md) | Payout rules for Level 2 recipients of the commission. | [optional] 
**PayoutType** | **string** | The payout type for this commission. | [optional] [default to PayoutTypeEnum.UPFRONT]
**ProductId** | **string** | Product ID to assign commission | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

