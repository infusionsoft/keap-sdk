# PipelineSummary

Represents a summary of a pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the model. | [optional] 
**pipeline_id** | **str** | The ID of the pipeline. Can be null and must be a string of digits if present. | [optional] 
**pipeline_name** | **str** | The name of the pipeline. Must be a non-null string with a length between 1 and 255 characters. | 
**stat_total_deal_count** | **int** | The total count of deals in the pipeline. Can be null. | [optional] 
**stat_new_deal_count** | **int** | The count of new deals in the pipeline. Can be null. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_summary import PipelineSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineSummary from a JSON string
pipeline_summary_instance = PipelineSummary.from_json(json)
# print the JSON string representation of the object
print(PipelineSummary.to_json())

# convert the object into a dict
pipeline_summary_dict = pipeline_summary_instance.to_dict()
# create an instance of PipelineSummary from a dict
pipeline_summary_from_dict = PipelineSummary.from_dict(pipeline_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


