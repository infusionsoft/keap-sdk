# CreateStageRequest

Request for creating a stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the stage. | 
**pipeline_id** | **str** | The ID of the pipeline to which the stage belongs. | 

## Example

```python
from keap_core_v2_client.models.create_stage_request import CreateStageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateStageRequest from a JSON string
create_stage_request_instance = CreateStageRequest.from_json(json)
# print the JSON string representation of the object
print(CreateStageRequest.to_json())

# convert the object into a dict
create_stage_request_dict = create_stage_request_instance.to_dict()
# create an instance of CreateStageRequest from a dict
create_stage_request_from_dict = CreateStageRequest.from_dict(create_stage_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


