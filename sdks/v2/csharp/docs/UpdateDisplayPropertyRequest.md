# Keap.Core.V2.Model.UpdateDisplayPropertyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SortOrder** | **int** | Determines the order for where this display property shows up on the group. | [optional] 
**Id** | **string** | Identifies the custom field that is tied to this display property. | [optional] 
**Source** | **DisplayPropertySource** | Indicates whether this display property is a system or custom field. | 
**SystemFieldRecord** | **string** | Represents the domain (e.g., pipeline, contact) that this display property belongs to. | [optional] 
**SystemFieldId** | **string** | Represents the identifier of the system field that is in that displayProperty. The source of this field will depend on the domain (e. g., \&quot;dealName\&quot; in pipelines) | [optional] 
**Label** | **string** | The label to display on this property to help users identify it | [optional] 
**Description** | **string** | Documentation that explains the purpose of this property | [optional] 
**HelperText** | **string** | More detailed explanation of the property to be shown if a user requests more information about it | [optional] 
**DefaultValue** | **Object** | The value of this property if a value is not explicitly provided | [optional] 
**DisplayOptions** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | Allowed values for this property | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

