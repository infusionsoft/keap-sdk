# Keap.Core.V2.Model.ProductOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FixedOptions** | [**List&lt;ProductFixedOption&gt;**](ProductFixedOption.md) | List of option values for the fixed option | [optional] 
**Name** | **string** | The option name | [optional] 
**Required** | **bool** | If the user is required to select/fill in an option for the product | [optional] 
**Type** | **string** | Can be FIXED or VARIABLE. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned. | [optional] 
**VariableSetting** | [**ProductVariableSetting**](ProductVariableSetting.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

