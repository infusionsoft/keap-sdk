# KeapCoreServiceV2Sdk.UpdateSubscriptionPlanRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether the subscription plan is active. | [optional] 
**allowProrating** | **Boolean** | Allow prorating of the subscription plan. | [optional] 
**cycleType** | **String** | The cycle type of the subscription plan. | 
**displayOrderIndex** | **Number** | The order that this plan will be displayed to the user. | [optional] 
**frequency** | **Number** | The frequency of the subscription plan. Must be greater than 0. | [optional] 
**planPrice** | **Number** | The price of the subscription plan in the smallest currency unit. Must be greater than or equal to 0. | 
**totalCycles** | **Number** | How many cycles the subscription plan will have. 0 means infinite. | [optional] 



## Enum: CycleTypeEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `YEARLY` (value: `"YEARLY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




