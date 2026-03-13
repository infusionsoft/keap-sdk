# FlowEventResultDTO

Result of a flow being started or stopped

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | Whether the flow operation was successful | [optional] 
**message** | **str** | A message with details about the flow operation | [optional] 
**flow_id** | **int** | The flow ID that was affected | [optional] 

## Example

```python
from keap_core_v2_client.models.flow_event_result_dto import FlowEventResultDTO

# TODO update the JSON string below
json = "{}"
# create an instance of FlowEventResultDTO from a JSON string
flow_event_result_dto_instance = FlowEventResultDTO.from_json(json)
# print the JSON string representation of the object
print(FlowEventResultDTO.to_json())

# convert the object into a dict
flow_event_result_dto_dict = flow_event_result_dto_instance.to_dict()
# create an instance of FlowEventResultDTO from a dict
flow_event_result_dto_from_dict = FlowEventResultDTO.from_dict(flow_event_result_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


