# DeleteFunnelIntegrationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_names** | **List[str]** | The name of the actions, that will be looked for and uninstalled. | [optional] 
**integration_names** | **List[str]** | The name of the integrations, that will be looked for and uninstalled. This will uninstall all triggers and actions related to this automation. | [optional] 
**trigger_names** | **List[str]** | The name of the triggers, that will be looked for and uninstalled. | [optional] 

## Example

```python
from keap_core_v2_client.models.delete_funnel_integration_request import DeleteFunnelIntegrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteFunnelIntegrationRequest from a JSON string
delete_funnel_integration_request_instance = DeleteFunnelIntegrationRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteFunnelIntegrationRequest.to_json())

# convert the object into a dict
delete_funnel_integration_request_dict = delete_funnel_integration_request_instance.to_dict()
# create an instance of DeleteFunnelIntegrationRequest from a dict
delete_funnel_integration_request_from_dict = DeleteFunnelIntegrationRequest.from_dict(delete_funnel_integration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


