# UpdatePipelineRequest

Request for updating a pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the pipeline. | 

## Example

```python
from keap_core_v2_client.models.update_pipeline_request import UpdatePipelineRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePipelineRequest from a JSON string
update_pipeline_request_instance = UpdatePipelineRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePipelineRequest.to_json())

# convert the object into a dict
update_pipeline_request_dict = update_pipeline_request_instance.to_dict()
# create an instance of UpdatePipelineRequest from a dict
update_pipeline_request_from_dict = UpdatePipelineRequest.from_dict(update_pipeline_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


