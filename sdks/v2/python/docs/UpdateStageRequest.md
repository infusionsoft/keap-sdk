# UpdateStageRequest

Request for updating a stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the stage. | 
**previous_stage_id** | **str** | The ID of the previous stage. | 
**next_stage_id** | **str** | The ID of the next stage. | 
**pipeline_id** | **str** | The ID of the pipeline. | 

## Example

```python
from keap_core_v2_client.models.update_stage_request import UpdateStageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateStageRequest from a JSON string
update_stage_request_instance = UpdateStageRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateStageRequest.to_json())

# convert the object into a dict
update_stage_request_dict = update_stage_request_instance.to_dict()
# create an instance of UpdateStageRequest from a dict
update_stage_request_from_dict = UpdateStageRequest.from_dict(update_stage_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


