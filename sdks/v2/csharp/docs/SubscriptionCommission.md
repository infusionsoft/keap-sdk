# Keap.Core.V2.Model.SubscriptionCommission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PayoutType** | **string** | The payout type for this commission. | [optional] [default to PayoutTypeEnum.UPFRONT]
**DollarAmount** | **double** | Level 1 fixed dollar amount to be paid for commission. This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; | [optional] 
**Percentage** | **double** | Level 1 percentage to be paid for commission (0-100). This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; | [optional] 
**Unused** | [**CommissionItem**](CommissionItem.md) | Payout rules for any unused commissions. | [optional] 
**Level1** | [**CommissionItem**](CommissionItem.md) | Payout rules for Level 1 recipients of the commission. | [optional] 
**Level2** | [**CommissionItem**](CommissionItem.md) | Payout rules for Level 2 recipients of the commission. | [optional] 
**Name** | **string** | Subscription name | [optional] 
**SubscriptionId** | **string** | Subscription ID | [optional] 
**PlanPrice** | **double** | Plan price | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

