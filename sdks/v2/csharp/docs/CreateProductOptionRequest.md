# Keap.Core.V2.Model.CreateProductOptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Required** | **bool** | Whether this option is required for product purchase. | [optional] [default to false]
**OptionType** | **string** | The type of option. Possible valid values are LIST and TEXT. | 
**OptionLabel** | **string** | The displayable name of the option (e.g. Size). Cannot be whitespace only. | [optional] 
**DisplayOrder** | **int** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**ListItems** | [**List&lt;CreateProductOptionListOption&gt;**](CreateProductOptionListOption.md) | Appears only for option_type of LIST. A fixed list of available selectable items for this product option. | [optional] 
**TextRules** | [**CreateProductOptionTextOption**](CreateProductOptionTextOption.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

