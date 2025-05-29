# Keap.Core.V2.Model.DisplayProperty
A property for a group inside a display form

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier for the display property. | [optional] 
**Property** | [**PipelineCustomField**](PipelineCustomField.md) | The custom field that defines this display property. | [optional] 
**Source** | **DisplayPropertySource** | The source of the display property. | [optional] 
**SystemFieldRecord** | **string** | Represents the domain (e.g., pipeline, contact) that this display property belongs to. | [optional] 
**SystemFieldId** | **string** | Represents the identifier of the system field that is in that displayProperty. The source of this field will depend on the domain (e. g., \&quot;dealName\&quot; in pipelines) | [optional] 
**Label** | **string** | The label to display on this property to help users identify it | [optional] 
**Description** | **string** | Documentation that explains the purpose of this property | [optional] 
**HelperText** | **string** | More detailed explanation of the property to be shown if a user requests more information about it | [optional] 
**DefaultValue** | **Object** | The value of this property if a value is not explicitly provided | [optional] 
**DisplayOptions** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | Allowed values for this property | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

