# PipelineCustomFields

Represents a list of custom fields in the system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. | [optional] 
**custom_fields** | [**List[PipelineCustomField]**](PipelineCustomField.md) | The list of custom fields. | 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_fields import PipelineCustomFields

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFields from a JSON string
pipeline_custom_fields_instance = PipelineCustomFields.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFields.to_json())

# convert the object into a dict
pipeline_custom_fields_dict = pipeline_custom_fields_instance.to_dict()
# create an instance of PipelineCustomFields from a dict
pipeline_custom_fields_from_dict = PipelineCustomFields.from_dict(pipeline_custom_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


