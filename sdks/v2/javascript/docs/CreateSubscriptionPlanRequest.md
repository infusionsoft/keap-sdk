# KeapCoreServiceV2Sdk.CreateSubscriptionPlanRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether the subscription plan is active. | [optional] 
**frequency** | **Number** | The frequency of the subscription plan. Must be greater than 0. Default is 1. | [optional] [default to 1]
**allowProrating** | **Boolean** | Allow prorating of the subscription plan. | [optional] 
**cycleType** | **String** | The cycle type of the subscription plan. | 
**displayOrderIndex** | **Number** | The order that this plan will be displayed to the user. Lower values indicate higher priority in order. | [optional] [default to 0]
**planPrice** | **Number** | The price of the subscription plan in the smallest currency unit. Must be greater than or equal to 0. | 
**totalCycles** | **Number** | How many cycles the subscription plan will have. 0 means infinite. | [optional] [default to 0]



## Enum: CycleTypeEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `YEARLY` (value: `"YEARLY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




