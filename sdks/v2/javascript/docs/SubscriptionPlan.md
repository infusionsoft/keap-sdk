# KeapCoreServiceV2Sdk.SubscriptionPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | If the subscription plan is active or not. | [optional] 
**allowProrating** | **Boolean** | Whether or not the plan will allow prorating. | [optional] 
**cycleType** | **String** | The cycle type of the subscription plan. Possible values: YEAR, MONTH, WEEK, DAY | [optional] 
**displayOrderIndex** | **Number** | The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list. | [optional] 
**frequency** | **Number** | Total number of times of a cycle type which constitutes a plan cycle. Minimum value is 1. | [optional] 
**id** | **String** | Id of the subscription plan. | [optional] 
**planPrice** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**productId** | **String** |  | [optional] 
**totalCycles** | **Number** | Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end. | [optional] 



## Enum: CycleTypeEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `YEARLY` (value: `"YEARLY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




