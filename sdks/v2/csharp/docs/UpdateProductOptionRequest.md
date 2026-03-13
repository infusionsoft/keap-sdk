# Keap.Core.V2.Model.UpdateProductOptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Required** | **bool** | Whether this option is required for product purchase. | [optional] 
**OptionLabel** | **string** | The displayable name of the option (e.g. Size). Cannot be whitespace only. | [optional] 
**DisplayOrder** | **int** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**MinimumCharacters** | **int** | Used only for option_type of &#x60;TEXT&#x60;. Minimum allowable characters. Minimum is 0. | [optional] 
**MaximumCharacters** | **int** | Used only for option_type of &#x60;TEXT&#x60;. Maximum allowable characters. Minimum is 0. | [optional] 
**AllowSpaces** | **bool** | Used only for option_type of &#x60;TEXT&#x60;. Whether or not to allow whitespace in the text. | [optional] 
**OnlyStartsWith** | **string** | Used only for option_type of &#x60;TEXT&#x60;.  Restricts the text to start with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**OnlyEndsWith** | **string** | Used only for option_type of &#x60;TEXT&#x60;. Restricts the text to end with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**OnlyContains** | **string** | Used only for option_type of &#x60;TEXT&#x60;. Restricts the text to contain certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**ErrorMessage** | **string** | Used only for option_type of &#x60;TEXT&#x60;. An error message to display if any rules are broken. Cannot be whitespace only. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

