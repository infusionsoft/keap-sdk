# KeapCoreServiceV2Sdk.CreateProductOptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required** | **Boolean** | Whether this option is required for product purchase. | [optional] [default to false]
**optionType** | **String** | The type of option. Possible valid values are LIST and TEXT. | 
**optionLabel** | **String** | The displayable name of the option (e.g. Size). Cannot be whitespace only. | [optional] 
**displayOrder** | **Number** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**listItems** | [**[CreateProductOptionListOption]**](CreateProductOptionListOption.md) | Appears only for option_type of LIST. A fixed list of available selectable items for this product option. | [optional] 
**textRules** | [**CreateProductOptionTextOption**](CreateProductOptionTextOption.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. | [optional] 



## Enum: OptionTypeEnum


* `LIST` (value: `"LIST"`)

* `TEXT` (value: `"TEXT"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




