# KeapCoreServiceV2Sdk.CreateDefaultCommissionProgramRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **String** | Level 1 percentage to be paid for commission (0-100). This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; | [optional] 
**unused** | [**CommissionItemRequest**](CommissionItemRequest.md) | Payout rules for any unused commissions. | [optional] 
**dollarAmount** | **String** | Level 1 fixed dollar amount to be paid for commission. This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; | [optional] 
**level1** | [**CommissionItemRequest**](CommissionItemRequest.md) | Payout rules for Level 1 recipients of the commission. | [optional] 
**level2** | [**CommissionItemRequest**](CommissionItemRequest.md) | Payout rules for Level 2 recipients of the commission. | [optional] 
**payoutType** | **String** | The payout type for this commission. | [optional] [default to &#39;UPFRONT&#39;]



## Enum: PayoutTypeEnum


* `UPFRONT` (value: `"UPFRONT"`)

* `PAYMENT_RECEIVED` (value: `"PAYMENT_RECEIVED"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




