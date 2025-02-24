# PipelineOutcomeLabelListResponse

Represents a response containing a list of pipeline outcome labels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. | [optional] 
**outcome_labels** | [**List[PipelineOutcomeLabel]**](PipelineOutcomeLabel.md) | The list of outcome labels. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_outcome_label_list_response import PipelineOutcomeLabelListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineOutcomeLabelListResponse from a JSON string
pipeline_outcome_label_list_response_instance = PipelineOutcomeLabelListResponse.from_json(json)
# print the JSON string representation of the object
print(PipelineOutcomeLabelListResponse.to_json())

# convert the object into a dict
pipeline_outcome_label_list_response_dict = pipeline_outcome_label_list_response_instance.to_dict()
# create an instance of PipelineOutcomeLabelListResponse from a dict
pipeline_outcome_label_list_response_from_dict = PipelineOutcomeLabelListResponse.from_dict(pipeline_outcome_label_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


