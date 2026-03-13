# KeapCoreServiceV2Sdk.TextOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimumCharacters** | **Number** | Minimum allowable characters. Minimum is 0. | [optional] 
**maximumCharacters** | **Number** | Maximum allowable characters. Minimum is 0. | [optional] 
**allowSpaces** | **Boolean** | Whether or not to allow whitespace in the text. | [optional] 
**onlyStartsWith** | **String** | Restricts the text to start with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**onlyEndsWith** | **String** | Restricts the text to end with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**onlyContains** | **String** | Restricts the text to contain certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**errorMessage** | **String** | An error message to display if any rules are broken. | [optional] 



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




