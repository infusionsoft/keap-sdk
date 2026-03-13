# KeapCoreServiceV2Sdk.CreateProductDiscountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the discount | 
**description** | **String** | Description of the discount | [optional] 
**criteria** | [**[DiscountCriteria]**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**applyToCommissions** | **Boolean** | Whether to apply this discount to commission calculations | [optional] 
**productId** | **String** | ID of the product this discount applies to | 
**discountType** | **String** | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) | 
**discountValue** | **Number** | Value of the discount (amount or percentage depending on discount_type) | 



## Enum: DiscountTypeEnum


* `AMOUNT` (value: `"AMOUNT"`)

* `PERCENT` (value: `"PERCENT"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




