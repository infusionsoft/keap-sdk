# KeapCoreServiceV2Sdk.ProductOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique id of the product option | [optional] 
**required** | **Boolean** | Whether this option is required for product purchase. | [optional] 
**optionLabel** | **String** | The displayable name of the option. E.g. Size | [optional] 
**productId** | **String** | The product id that this option belongs to. | [optional] 
**optionType** | **String** | The type of option. Possible valid values are LIST and TEXT. | [optional] 
**displayOrder** | **Number** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**listItems** | [**[ListOption]**](ListOption.md) | Appears only for option_type of LIST. A fixed list of available selectable items for this product option. e.g (Medium) | [optional] 
**textRules** | [**TextOption**](TextOption.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. | [optional] 



## Enum: OptionTypeEnum


* `LIST` (value: `"LIST"`)

* `TEXT` (value: `"TEXT"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




