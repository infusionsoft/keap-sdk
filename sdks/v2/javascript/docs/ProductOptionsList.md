# KeapCoreServiceV2Sdk.ProductOptionsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The option name | [optional] 
**type** | **String** | The option type. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned. | [optional] 
**required** | **Boolean** | If the user is required to select/fill in an option for the product | [optional] 
**fixedOptions** | [**[ProductFixedOptionList]**](ProductFixedOptionList.md) | List of option values for the fixed option | [optional] 
**variableSetting** | [**ProductVariableSettingList**](ProductVariableSettingList.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. | [optional] 



## Enum: TypeEnum


* `FIXED` (value: `"FIXED"`)

* `VARIABLE` (value: `"VARIABLE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




