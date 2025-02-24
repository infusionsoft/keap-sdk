# PipelineOutcomeLabel

Represents a label for a pipeline outcome.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**DealStatus**](DealStatus.md) | The status of the deal. This field is required. | 
**label** | **str** | The label for the outcome. This field is optional but must have at least one character if provided. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_outcome_label import PipelineOutcomeLabel

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineOutcomeLabel from a JSON string
pipeline_outcome_label_instance = PipelineOutcomeLabel.from_json(json)
# print the JSON string representation of the object
print(PipelineOutcomeLabel.to_json())

# convert the object into a dict
pipeline_outcome_label_dict = pipeline_outcome_label_instance.to_dict()
# create an instance of PipelineOutcomeLabel from a dict
pipeline_outcome_label_from_dict = PipelineOutcomeLabel.from_dict(pipeline_outcome_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


