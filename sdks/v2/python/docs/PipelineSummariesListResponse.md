# PipelineSummariesListResponse

Response for a list of pipeline summaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. | [optional] 
**pipeline_summaries** | [**List[PipelineSummary]**](PipelineSummary.md) | The list of pipeline summaries. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_summaries_list_response import PipelineSummariesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineSummariesListResponse from a JSON string
pipeline_summaries_list_response_instance = PipelineSummariesListResponse.from_json(json)
# print the JSON string representation of the object
print(PipelineSummariesListResponse.to_json())

# convert the object into a dict
pipeline_summaries_list_response_dict = pipeline_summaries_list_response_instance.to_dict()
# create an instance of PipelineSummariesListResponse from a dict
pipeline_summaries_list_response_from_dict = PipelineSummariesListResponse.from_dict(pipeline_summaries_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


