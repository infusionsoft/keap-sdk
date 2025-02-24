# FunnelIntegrationAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | The base URL of the trigger, that will be used to call the integration related REST endpoints. | [optional] 
**context** | **str** | The context of the trigger, that will be used internally to identify the integration. | [optional] 
**enabled** | **bool** | The flag to enable or disable the integration trigger. | [optional] 
**icon_url** | **str** | The icon URL of the trigger, that will be used to display the icon of this specific integration trigger. | [optional] 
**name** | **str** | The name of the trigger, that will be used internally to identify and initiate the trigger. | [optional] 
**schema_fields** | [**List[FunnelIntegrationSchemaField]**](FunnelIntegrationSchemaField.md) | The schema for this trigger that can be used in the builder context, and populated when a trigger is initiated. | [optional] 

## Example

```python
from keap_core_v2_client.models.funnel_integration_action import FunnelIntegrationAction

# TODO update the JSON string below
json = "{}"
# create an instance of FunnelIntegrationAction from a JSON string
funnel_integration_action_instance = FunnelIntegrationAction.from_json(json)
# print the JSON string representation of the object
print(FunnelIntegrationAction.to_json())

# convert the object into a dict
funnel_integration_action_dict = funnel_integration_action_instance.to_dict()
# create an instance of FunnelIntegrationAction from a dict
funnel_integration_action_from_dict = FunnelIntegrationAction.from_dict(funnel_integration_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


