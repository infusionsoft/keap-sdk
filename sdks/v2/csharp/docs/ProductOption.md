# Keap.Core.V2.Model.ProductOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique id of the product option | [optional] 
**Required** | **bool** | Whether this option is required for product purchase. | [optional] 
**OptionLabel** | **string** | The displayable name of the option. E.g. Size | [optional] 
**ProductId** | **string** | The product id that this option belongs to. | [optional] 
**OptionType** | **string** | The type of option. Possible valid values are LIST and TEXT. | [optional] 
**DisplayOrder** | **int** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**ListItems** | [**List&lt;ListOption&gt;**](ListOption.md) | Appears only for option_type of LIST. A fixed list of available selectable items for this product option. e.g (Medium) | [optional] 
**TextRules** | [**TextOption**](TextOption.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

