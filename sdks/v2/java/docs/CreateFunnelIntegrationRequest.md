

# CreateFunnelIntegrationRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**baseUrl** | **String** | The base URL of the integration, that will be used to call the integration related REST endpoints. |  [optional] |
|**context** | **String** | The context of the integration, that will be used internally to identify the integration. |  [optional] |
|**enabled** | **Boolean** | The flag to enable or disable the integration. |  [optional] |
|**funnelIntegrationActions** | [**List&lt;FunnelIntegrationAction&gt;**](FunnelIntegrationAction.md) | The list of actions that will be installed with the integration. |  [optional] |
|**funnelIntegrationTriggers** | [**List&lt;FunnelIntegrationAction&gt;**](FunnelIntegrationAction.md) | The list of triggers that will be installed with the integration. |  [optional] |
|**name** | **String** | The name of the integration, that will be used internally to identify the integration. |  [optional] |


## Implemented Interfaces

* Serializable

