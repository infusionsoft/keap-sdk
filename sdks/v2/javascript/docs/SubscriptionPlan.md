# KeapCoreServiceV2Sdk.SubscriptionPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Subscription plan ID | [optional] 
**frequency** | **Number** | Interval at which a customer receives a product or service as part of a subscription plan. | [optional] 
**active** | **Boolean** | If the subscription plan is active or not. | [optional] 
**subscriptionPlanName** | **String** | Plan name | [optional] 
**cycleType** | **String** | The cycle type of the subscription plan. | [optional] 
**totalCycles** | **Number** | Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end. | [optional] 
**planPrice** | [**CurrencyValue**](CurrencyValue.md) | Price of the plan | [optional] 
**displayOrderIndex** | **Number** | The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list. | [optional] 



## Enum: CycleTypeEnum


* `YEARLY` (value: `"YEARLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `DAILY` (value: `"DAILY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




