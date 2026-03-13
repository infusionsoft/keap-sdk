# KeapCoreServiceV2Sdk.ProductVariableSettingList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contains** | **String** | Requires the value (excluding start and end) to contain given type. | [optional] 
**minChars** | **Number** | Minimum allowable characters | [optional] 
**maxChars** | **Number** | Max allowable chars. Its value must be greater than min_chars | [optional] 
**containSpaces** | **Boolean** | If spaces are allowed for the option | [optional] 
**startWith** | **String** | Requires the value to start with the given type. | [optional] 
**endWith** | **String** | Requires the value to end with the given type. | [optional] 
**validationMsg** | **String** | Customized validation message to display when option criteria aren&#39;t met | [optional] 



## Enum: ContainsEnum


* `LETTER` (value: `"LETTER"`)

* `NUMBER` (value: `"NUMBER"`)

* `BOTH` (value: `"BOTH"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: StartWithEnum


* `LETTER` (value: `"LETTER"`)

* `NUMBER` (value: `"NUMBER"`)

* `BOTH` (value: `"BOTH"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: EndWithEnum


* `LETTER` (value: `"LETTER"`)

* `NUMBER` (value: `"NUMBER"`)

* `BOTH` (value: `"BOTH"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




