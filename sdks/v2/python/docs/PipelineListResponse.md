# PipelineListResponse

Response for a list of pipelines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. | [optional] 
**pipelines** | [**List[Pipeline]**](Pipeline.md) | The list of pipelines. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_list_response import PipelineListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineListResponse from a JSON string
pipeline_list_response_instance = PipelineListResponse.from_json(json)
# print the JSON string representation of the object
print(PipelineListResponse.to_json())

# convert the object into a dict
pipeline_list_response_dict = pipeline_list_response_instance.to_dict()
# create an instance of PipelineListResponse from a dict
pipeline_list_response_from_dict = PipelineListResponse.from_dict(pipeline_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


