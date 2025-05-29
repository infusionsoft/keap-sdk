# BaseListResponsePipelineCustomField

The list responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. | [optional] 

## Example

```python
from keap_core_v2_client.models.base_list_response_pipeline_custom_field import BaseListResponsePipelineCustomField

# TODO update the JSON string below
json = "{}"
# create an instance of BaseListResponsePipelineCustomField from a JSON string
base_list_response_pipeline_custom_field_instance = BaseListResponsePipelineCustomField.from_json(json)
# print the JSON string representation of the object
print(BaseListResponsePipelineCustomField.to_json())

# convert the object into a dict
base_list_response_pipeline_custom_field_dict = base_list_response_pipeline_custom_field_instance.to_dict()
# create an instance of BaseListResponsePipelineCustomField from a dict
base_list_response_pipeline_custom_field_from_dict = BaseListResponsePipelineCustomField.from_dict(base_list_response_pipeline_custom_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


