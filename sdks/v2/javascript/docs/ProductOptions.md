# KeapCoreServiceV2Sdk.ProductOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixedOptions** | [**[ProductFixedOption]**](ProductFixedOption.md) | List of option values for the fixed option | [optional] 
**name** | **String** | The option name | [optional] 
**required** | **Boolean** | If the user is required to select/fill in an option for the product | [optional] 
**type** | **String** | Can be FIXED or VARIABLE. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned. | [optional] 
**variableSetting** | [**ProductVariableSetting**](ProductVariableSetting.md) |  | [optional] 



## Enum: TypeEnum


* `FIXED` (value: `"FIXED"`)

* `VARIABLE` (value: `"VARIABLE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




