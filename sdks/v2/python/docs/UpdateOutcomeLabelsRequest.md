# UpdateOutcomeLabelsRequest

Represents a request to update outcome labels for a pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outcome_labels** | [**List[PipelineOutcomeLabel]**](PipelineOutcomeLabel.md) | List of outcome labels to be updated. | 

## Example

```python
from keap_core_v2_client.models.update_outcome_labels_request import UpdateOutcomeLabelsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOutcomeLabelsRequest from a JSON string
update_outcome_labels_request_instance = UpdateOutcomeLabelsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOutcomeLabelsRequest.to_json())

# convert the object into a dict
update_outcome_labels_request_dict = update_outcome_labels_request_instance.to_dict()
# create an instance of UpdateOutcomeLabelsRequest from a dict
update_outcome_labels_request_from_dict = UpdateOutcomeLabelsRequest.from_dict(update_outcome_labels_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


