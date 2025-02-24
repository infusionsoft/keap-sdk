# FunnelIntegrationTriggerEventDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **int** |  | [optional] 
**oracle_id** | **str** |  | [optional] 
**schema_data** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.funnel_integration_trigger_event_dto import FunnelIntegrationTriggerEventDTO

# TODO update the JSON string below
json = "{}"
# create an instance of FunnelIntegrationTriggerEventDTO from a JSON string
funnel_integration_trigger_event_dto_instance = FunnelIntegrationTriggerEventDTO.from_json(json)
# print the JSON string representation of the object
print(FunnelIntegrationTriggerEventDTO.to_json())

# convert the object into a dict
funnel_integration_trigger_event_dto_dict = funnel_integration_trigger_event_dto_instance.to_dict()
# create an instance of FunnelIntegrationTriggerEventDTO from a dict
funnel_integration_trigger_event_dto_from_dict = FunnelIntegrationTriggerEventDTO.from_dict(funnel_integration_trigger_event_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


