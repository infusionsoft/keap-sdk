# PipelineCustomFieldRefType

Class representing a reference type for custom fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of the custom field reference type. | [optional] 
**name** | **str** | The name of the custom field reference type. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_ref_type import PipelineCustomFieldRefType

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldRefType from a JSON string
pipeline_custom_field_ref_type_instance = PipelineCustomFieldRefType.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldRefType.to_json())

# convert the object into a dict
pipeline_custom_field_ref_type_dict = pipeline_custom_field_ref_type_instance.to_dict()
# create an instance of PipelineCustomFieldRefType from a dict
pipeline_custom_field_ref_type_from_dict = PipelineCustomFieldRefType.from_dict(pipeline_custom_field_ref_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


