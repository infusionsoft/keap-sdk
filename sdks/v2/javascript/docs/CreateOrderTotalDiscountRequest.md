# KeapCoreServiceV2Sdk.CreateOrderTotalDiscountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the discount | 
**description** | **String** | Description of the discount | [optional] 
**criteria** | [**[DiscountCriteria]**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**applyToCommissions** | **Boolean** | Whether to apply this discount to commission calculations | [optional] 
**discountType** | **String** | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) | 
**discountValue** | **Number** | Value of the discount (amount or percentage depending on discount_type) | 
**discountStrategy** | **String** | Strategy for applying discount: GROSS (before tax) or NET (after tax) | [optional] 



## Enum: DiscountTypeEnum


* `AMOUNT` (value: `"AMOUNT"`)

* `PERCENT` (value: `"PERCENT"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: DiscountStrategyEnum


* `GROSS` (value: `"GROSS"`)

* `NET` (value: `"NET"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




