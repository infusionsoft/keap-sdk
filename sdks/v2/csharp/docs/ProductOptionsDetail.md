# Keap.Core.V2.Model.ProductOptionsDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The option name | [optional] 
**Type** | **string** | The option type. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned. | [optional] 
**Required** | **bool** | If the user is required to select/fill in an option for the product | [optional] 
**FixedOptions** | [**List&lt;ProductFixedOptionDetail&gt;**](ProductFixedOptionDetail.md) | List of option values for the fixed option | [optional] 
**VariableSetting** | [**ProductVariableSettingDetail**](ProductVariableSettingDetail.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

