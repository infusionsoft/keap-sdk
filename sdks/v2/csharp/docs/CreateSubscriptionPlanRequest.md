# Keap.Core.V2.Model.CreateSubscriptionPlanRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** | Whether the subscription plan is active. | [optional] 
**Frequency** | **int** | The frequency of the subscription plan. Must be greater than 0. Default is 1. | [optional] [default to 1]
**AllowProrating** | **bool** | Allow prorating of the subscription plan. | [optional] 
**CycleType** | **string** | The cycle type of the subscription plan. | 
**DisplayOrderIndex** | **int** | The order that this plan will be displayed to the user. Lower values indicate higher priority in order. | [optional] [default to 0]
**PlanPrice** | **double** | The price of the subscription plan in the smallest currency unit. Must be greater than or equal to 0. | 
**TotalCycles** | **int** | How many cycles the subscription plan will have. 0 means infinite. | [optional] [default to 0]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

