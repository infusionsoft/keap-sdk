

# CreateProductOptionRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**required** | **Boolean** | Whether this option is required for product purchase. |  [optional] |
|**optionType** | [**OptionTypeEnum**](#OptionTypeEnum) | The type of option. Possible valid values are LIST and TEXT. |  |
|**optionLabel** | **String** | The displayable name of the option (e.g. Size). Cannot be whitespace only. |  [optional] |
|**displayOrder** | **Integer** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. |  [optional] |
|**listItems** | [**List&lt;CreateProductOptionListOption&gt;**](CreateProductOptionListOption.md) | Appears only for option_type of LIST. A fixed list of available selectable items for this product option. |  [optional] |
|**textRules** | [**CreateProductOptionTextOption**](CreateProductOptionTextOption.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. |  [optional] |



## Enum: OptionTypeEnum

| Name | Value |
|---- | -----|
| LIST | &quot;LIST&quot; |
| TEXT | &quot;TEXT&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

