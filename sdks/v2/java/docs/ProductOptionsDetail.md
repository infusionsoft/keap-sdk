

# ProductOptionsDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | The option name |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | The option type. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned. |  [optional] |
|**required** | **Boolean** | If the user is required to select/fill in an option for the product |  [optional] |
|**fixedOptions** | [**List&lt;ProductFixedOptionDetail&gt;**](ProductFixedOptionDetail.md) | List of option values for the fixed option |  [optional] |
|**variableSetting** | [**ProductVariableSettingDetail**](ProductVariableSettingDetail.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| FIXED | &quot;FIXED&quot; |
| VARIABLE | &quot;VARIABLE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

