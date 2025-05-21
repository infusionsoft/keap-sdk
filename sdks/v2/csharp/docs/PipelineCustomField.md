# Keap.Core.V2.Model.PipelineCustomField
Represents a custom field in the system. This class extends the BaseModel and includes various properties related to custom fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The identifier of the custom field. | 
**Name** | **string** | The name of the custom field. This field is optional. | [optional] 
**Type** | [**PipelineCustomFieldType**](PipelineCustomFieldType.md) | The type of the custom field. This field is optional and must be a valid PipelineCustomFieldType. | [optional] 
**Label** | **string** | The label of the custom field. This field is optional. | [optional] 
**Description** | **string** | The description of the custom field. This field is optional. | [optional] 
**HelperText** | **string** | The helper text for the custom field. This field is optional and is serialized to JSON as \&quot;helper_text\&quot;. | [optional] 
**DefaultValue** | **Object** | The default value of the custom field. This field is optional and must be a valid Object. | 
**Validators** | [**List&lt;PipelineCustomFieldPropertyValidator&gt;**](PipelineCustomFieldPropertyValidator.md) | The list of validators for the custom field. This field is optional and must be a list of valid PipelineCustomFieldPropertyValidator. | [optional] 
**DisplayOptions** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | The display options for the custom field. This field is optional and must be a valid DisplayOptions. | [optional] 
**Options** | [**PipelineCustomFieldOptions**](PipelineCustomFieldOptions.md) | The options for the custom field. This field is optional and must be a valid PipelineCustomFieldOptions. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

