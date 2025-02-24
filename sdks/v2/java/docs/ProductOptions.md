

# ProductOptions


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**fixedOptions** | [**List&lt;ProductFixedOption&gt;**](ProductFixedOption.md) | List of option values for the fixed option |  [optional] |
|**name** | **String** | The option name |  [optional] |
|**required** | **Boolean** | If the user is required to select/fill in an option for the product |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | Can be FIXED or VARIABLE. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned. |  [optional] |
|**variableSetting** | [**ProductVariableSetting**](ProductVariableSetting.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| FIXED | &quot;FIXED&quot; |
| VARIABLE | &quot;VARIABLE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

