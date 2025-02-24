# CreateFunnelIntegrationTriggerEvents


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**funnel_integration_trigger_events** | [**List[FunnelIntegrationTriggerEventDTO]**](FunnelIntegrationTriggerEventDTO.md) | A list of trigger events to be created. | [optional] 

## Example

```python
from keap_core_v2_client.models.create_funnel_integration_trigger_events import CreateFunnelIntegrationTriggerEvents

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFunnelIntegrationTriggerEvents from a JSON string
create_funnel_integration_trigger_events_instance = CreateFunnelIntegrationTriggerEvents.from_json(json)
# print the JSON string representation of the object
print(CreateFunnelIntegrationTriggerEvents.to_json())

# convert the object into a dict
create_funnel_integration_trigger_events_dict = create_funnel_integration_trigger_events_instance.to_dict()
# create an instance of CreateFunnelIntegrationTriggerEvents from a dict
create_funnel_integration_trigger_events_from_dict = CreateFunnelIntegrationTriggerEvents.from_dict(create_funnel_integration_trigger_events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


