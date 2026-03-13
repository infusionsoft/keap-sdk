# KeapCoreServiceV2Sdk.UpdateProductOptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required** | **Boolean** | Whether this option is required for product purchase. | [optional] 
**optionLabel** | **String** | The displayable name of the option (e.g. Size). Cannot be whitespace only. | [optional] 
**displayOrder** | **Number** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**minimumCharacters** | **Number** | Used only for option_type of &#x60;TEXT&#x60;. Minimum allowable characters. Minimum is 0. | [optional] 
**maximumCharacters** | **Number** | Used only for option_type of &#x60;TEXT&#x60;. Maximum allowable characters. Minimum is 0. | [optional] 
**allowSpaces** | **Boolean** | Used only for option_type of &#x60;TEXT&#x60;. Whether or not to allow whitespace in the text. | [optional] 
**onlyStartsWith** | **String** | Used only for option_type of &#x60;TEXT&#x60;.  Restricts the text to start with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**onlyEndsWith** | **String** | Used only for option_type of &#x60;TEXT&#x60;. Restricts the text to end with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**onlyContains** | **String** | Used only for option_type of &#x60;TEXT&#x60;. Restricts the text to contain certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**errorMessage** | **String** | Used only for option_type of &#x60;TEXT&#x60;. An error message to display if any rules are broken. Cannot be whitespace only. | [optional] 



## Enum: OnlyStartsWithEnum


* `NONE` (value: `"NONE"`)

* `LETTER` (value: `"LETTER"`)

* `DIGIT` (value: `"DIGIT"`)

* `BOTH` (value: `"BOTH"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: OnlyEndsWithEnum


* `NONE` (value: `"NONE"`)

* `LETTER` (value: `"LETTER"`)

* `DIGIT` (value: `"DIGIT"`)

* `BOTH` (value: `"BOTH"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: OnlyContainsEnum


* `NONE` (value: `"NONE"`)

* `LETTER` (value: `"LETTER"`)

* `DIGIT` (value: `"DIGIT"`)

* `BOTH` (value: `"BOTH"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




