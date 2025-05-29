

# PipelineCustomField

Represents a custom field in the system. This class extends the BaseModel and includes various properties related to custom fields.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The identifier of the custom field. |  |
|**name** | **String** | The name of the custom field. This field is optional. |  [optional] |
|**type** | [**PipelineCustomFieldType**](PipelineCustomFieldType.md) | The type of the custom field. This field is optional and must be a valid PipelineCustomFieldType. |  [optional] |
|**label** | **String** | The label of the custom field. This field is optional. |  [optional] |
|**description** | **String** | The description of the custom field. This field is optional. |  [optional] |
|**helperText** | **String** | The helper text for the custom field. This field is optional and is serialized to JSON as \&quot;helper_text\&quot;. |  [optional] |
|**defaultValue** | **Object** | The default value of the custom field. This field is optional and must be a valid Object. |  |
|**validators** | [**List&lt;PipelineCustomFieldPropertyValidator&gt;**](PipelineCustomFieldPropertyValidator.md) | The list of validators for the custom field. This field is optional and must be a list of valid PipelineCustomFieldPropertyValidator. |  [optional] |
|**displayOptions** | [**PipelineCustomFieldDisplayOptions**](PipelineCustomFieldDisplayOptions.md) | The display options for the custom field. This field is optional and must be a valid DisplayOptions. |  [optional] |
|**options** | [**PipelineCustomFieldOptions**](PipelineCustomFieldOptions.md) | The options for the custom field. This field is optional and must be a valid PipelineCustomFieldOptions. |  [optional] |


## Implemented Interfaces

* Serializable

