# KeapCoreServiceV2Sdk.UpdateDisplayPropertyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sortOrder** | **Number** | Determines the order for where this display property shows up on the group. | [optional] 
**id** | **String** | Identifies the custom field that is tied to this display property. | [optional] 
**source** | [**DisplayPropertySource**](DisplayPropertySource.md) | Indicates whether this display property is a system or custom field. | 
**systemFieldRecord** | **String** | Represents the domain (e.g., pipeline, contact) that this display property belongs to. | [optional] 
**systemFieldId** | **String** | Represents the identifier of the system field that is in that displayProperty. The source of this field will depend on the domain (e. g., \&quot;dealName\&quot; in pipelines) | [optional] 
**label** | **String** | The label to display on this property to help users identify it | [optional] 
**description** | **String** | Documentation that explains the purpose of this property | [optional] 
**helperText** | **String** | More detailed explanation of the property to be shown if a user requests more information about it | [optional] 
**defaultValue** | **Object** | The value of this property if a value is not explicitly provided | [optional] 
**displayOptions** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | Allowed values for this property | [optional] 


