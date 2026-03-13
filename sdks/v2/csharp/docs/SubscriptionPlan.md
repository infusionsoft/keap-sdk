# Keap.Core.V2.Model.SubscriptionPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Id of the subscription plan. | [optional] 
**Active** | **bool** | If the subscription plan is active or not. | [optional] 
**Frequency** | **int** | Total number of times of a cycle type which constitutes a plan cycle. Minimum value is 1. | [optional] 
**AllowProrating** | **bool** | Whether or not the plan will allow prorating. | [optional] 
**ProductId** | **string** | The product ID this plan belongs to. | [optional] 
**CycleType** | **string** | The cycle type of the subscription plan. | [optional] 
**DisplayOrderIndex** | **int** | The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list. | [optional] 
**TotalCycles** | **int** | Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end. | [optional] 
**PlanPrice** | [**CurrencyValue**](CurrencyValue.md) | The price of the subscription plan. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

