# KeapCoreServiceV2Sdk.SubscriptionPlanList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The subscription plan id | [optional] 
**active** | **Boolean** | If the subscription plan should be active/available for purchase | [optional] 
**prorate** | **Boolean** | If the subscription plan should allow prorating | [optional] 
**billingCycle** | **String** | How frequent to bill. | [optional] 
**billingFrequency** | **Number** | How many times per billing cycle to bill | [optional] 
**numberOfCycles** | **Number** | How many billing cycles to bill. Optional field i.e. can be no value or 0. | [optional] 
**planPrice** | [**CurrencyValueList**](CurrencyValueList.md) | The price of the subscription plan | [optional] 
**orderIndex** | **Number** | Determines the order in which the plan will be displayed | [optional] 



## Enum: BillingCycleEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `YEARLY` (value: `"YEARLY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




