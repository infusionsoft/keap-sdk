# FunnelIntegrationHttpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The body of the HTTP request that will be made when this action is processed in the builder(s). | [optional] 
**call_type** | **str** | The type of HTTP request that will be made when this action is processed in the builder(s). | [optional] 
**header_parameters** | **Dict[str, str]** | A map of the header parameters of the HTTP request that will be made when this action is processed in the builder(s). | [optional] 
**query_parameters** | **Dict[str, str]** | A map of the query parameters of the HTTP request that will be made when this action is processed in the builder(s). | [optional] 
**url** | **str** | The URL of the HTTP request that will be made when this action is processed in the builder(s). | [optional] 

## Example

```python
from keap_core_v2_client.models.funnel_integration_http_request import FunnelIntegrationHttpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FunnelIntegrationHttpRequest from a JSON string
funnel_integration_http_request_instance = FunnelIntegrationHttpRequest.from_json(json)
# print the JSON string representation of the object
print(FunnelIntegrationHttpRequest.to_json())

# convert the object into a dict
funnel_integration_http_request_dict = funnel_integration_http_request_instance.to_dict()
# create an instance of FunnelIntegrationHttpRequest from a dict
funnel_integration_http_request_from_dict = FunnelIntegrationHttpRequest.from_dict(funnel_integration_http_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


