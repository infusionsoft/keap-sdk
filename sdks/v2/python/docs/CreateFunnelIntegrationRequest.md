# CreateFunnelIntegrationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | The base URL of the integration, that will be used to call the integration related REST endpoints. | [optional] 
**context** | **str** | The context of the integration, that will be used internally to identify the integration. | [optional] 
**enabled** | **bool** | The flag to enable or disable the integration. | [optional] 
**funnel_integration_actions** | [**List[FunnelIntegrationAction]**](FunnelIntegrationAction.md) | The list of actions that will be installed with the integration. | [optional] 
**funnel_integration_triggers** | [**List[FunnelIntegrationAction]**](FunnelIntegrationAction.md) | The list of triggers that will be installed with the integration. | [optional] 
**name** | **str** | The name of the integration, that will be used internally to identify the integration. | [optional] 

## Example

```python
from keap_core_v2_client.models.create_funnel_integration_request import CreateFunnelIntegrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFunnelIntegrationRequest from a JSON string
create_funnel_integration_request_instance = CreateFunnelIntegrationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateFunnelIntegrationRequest.to_json())

# convert the object into a dict
create_funnel_integration_request_dict = create_funnel_integration_request_instance.to_dict()
# create an instance of CreateFunnelIntegrationRequest from a dict
create_funnel_integration_request_from_dict = CreateFunnelIntegrationRequest.from_dict(create_funnel_integration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


