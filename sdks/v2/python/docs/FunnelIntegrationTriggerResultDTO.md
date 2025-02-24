# FunnelIntegrationTriggerResultDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_id** | **int** |  | [optional] 
**goal_id** | **int** |  | [optional] 
**message** | **str** |  | [optional] 
**schema_data** | **str** |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.funnel_integration_trigger_result_dto import FunnelIntegrationTriggerResultDTO

# TODO update the JSON string below
json = "{}"
# create an instance of FunnelIntegrationTriggerResultDTO from a JSON string
funnel_integration_trigger_result_dto_instance = FunnelIntegrationTriggerResultDTO.from_json(json)
# print the JSON string representation of the object
print(FunnelIntegrationTriggerResultDTO.to_json())

# convert the object into a dict
funnel_integration_trigger_result_dto_dict = funnel_integration_trigger_result_dto_instance.to_dict()
# create an instance of FunnelIntegrationTriggerResultDTO from a dict
funnel_integration_trigger_result_dto_from_dict = FunnelIntegrationTriggerResultDTO.from_dict(funnel_integration_trigger_result_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


