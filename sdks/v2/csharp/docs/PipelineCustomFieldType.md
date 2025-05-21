# Keap.Core.V2.Model.PipelineCustomFieldType
Class representing a custom field type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimitiveType** | **PipelineCustomFieldPrimitiveType** | The base primitive type of the custom field. This field is required. | 
**Discriminator** | **PipelineCustomFieldModelPropertyTypeDiscriminator** | The discriminator for the model property type. This field is required. | 
**Array** | [**PipelineCustomFieldArrayPropertyType**](PipelineCustomFieldArrayPropertyType.md) | The array property type of the custom field. This field is optional. | [optional] 
**Ref** | [**PipelineCustomFieldRefPropertyType**](PipelineCustomFieldRefPropertyType.md) | The reference property type of the custom field. This field is optional. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

