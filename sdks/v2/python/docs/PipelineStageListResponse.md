# PipelineStageListResponse

Response for a list of stages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. | [optional] 
**stages** | [**List[Stage]**](Stage.md) | The list of stages. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_stage_list_response import PipelineStageListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineStageListResponse from a JSON string
pipeline_stage_list_response_instance = PipelineStageListResponse.from_json(json)
# print the JSON string representation of the object
print(PipelineStageListResponse.to_json())

# convert the object into a dict
pipeline_stage_list_response_dict = pipeline_stage_list_response_instance.to_dict()
# create an instance of PipelineStageListResponse from a dict
pipeline_stage_list_response_from_dict = PipelineStageListResponse.from_dict(pipeline_stage_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


