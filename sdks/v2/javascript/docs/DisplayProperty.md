# KeapCoreServiceV2Sdk.DisplayProperty

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the display property. | [optional] 
**property** | [**PipelineCustomField**](PipelineCustomField.md) | The custom field that defines this display property. | [optional] 
**source** | [**DisplayPropertySource**](DisplayPropertySource.md) | The source of the display property. | [optional] 
**systemFieldRecord** | **String** | Represents the domain (e.g., pipeline, contact) that this display property belongs to. | [optional] 
**systemFieldId** | **String** | Represents the identifier of the system field that is in that displayProperty. The source of this field will depend on the domain (e. g., \&quot;dealName\&quot; in pipelines) | [optional] 
**label** | **String** | The label to display on this property to help users identify it | [optional] 
**description** | **String** | Documentation that explains the purpose of this property | [optional] 
**helperText** | **String** | More detailed explanation of the property to be shown if a user requests more information about it | [optional] 
**defaultValue** | **Object** | The value of this property if a value is not explicitly provided | [optional] 
**displayOptions** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | Allowed values for this property | [optional] 


