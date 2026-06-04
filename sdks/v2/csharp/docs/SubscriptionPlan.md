# Keap.Core.V2.Model.SubscriptionPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Subscription plan ID | [optional] 
**Frequency** | **int** | Interval at which a customer receives a product or service as part of a subscription plan. | [optional] 
**Active** | **bool** | If the subscription plan is active or not. | [optional] 
**SubscriptionPlanName** | **string** | Plan name | [optional] 
**CycleType** | **string** | The cycle type of the subscription plan. | [optional] 
**TotalCycles** | **int** | Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end. | [optional] 
**PlanPrice** | [**CurrencyValue**](CurrencyValue.md) | Price of the plan | [optional] 
**DisplayOrderIndex** | **int** | The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

