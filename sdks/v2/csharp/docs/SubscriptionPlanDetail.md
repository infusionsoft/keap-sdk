# Keap.Core.V2.Model.SubscriptionPlanDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The subscription plan id | [optional] 
**Active** | **bool** | If the subscription plan should be active/available for purchase | [optional] 
**Prorate** | **bool** | If the subscription plan should allow prorating | [optional] 
**BillingCycle** | **string** | How frequent to bill. | [optional] 
**BillingFrequency** | **int** | How many times per billing cycle to bill | [optional] 
**NumberOfCycles** | **int** | How many billing cycles to bill. Optional field i.e. can be no value or 0. | [optional] 
**PlanPrice** | [**CurrencyValueDetail**](CurrencyValueDetail.md) | The price of the subscription plan | [optional] 
**OrderIndex** | **int** | Determines the order in which the plan will be displayed | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

