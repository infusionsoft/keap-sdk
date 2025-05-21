

# PipelineCustomFieldType

Class representing a custom field type.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**primitiveType** | **PipelineCustomFieldPrimitiveType** | The base primitive type of the custom field. This field is required. |  |
|**discriminator** | **PipelineCustomFieldModelPropertyTypeDiscriminator** | The discriminator for the model property type. This field is required. |  |
|**array** | [**PipelineCustomFieldArrayPropertyType**](PipelineCustomFieldArrayPropertyType.md) | The array property type of the custom field. This field is optional. |  [optional] |
|**ref** | [**PipelineCustomFieldRefPropertyType**](PipelineCustomFieldRefPropertyType.md) | The reference property type of the custom field. This field is optional. |  [optional] |


## Implemented Interfaces

* Serializable

