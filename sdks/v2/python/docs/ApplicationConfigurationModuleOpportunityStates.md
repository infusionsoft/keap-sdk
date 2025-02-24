# ApplicationConfigurationModuleOpportunityStates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | [**ApplicationConfigurationModuleOpportunityStatesActive**](ApplicationConfigurationModuleOpportunityStatesActive.md) |  | [optional] 
**loss** | [**ApplicationConfigurationModuleOpportunityStatesLoss**](ApplicationConfigurationModuleOpportunityStatesLoss.md) |  | [optional] 
**win** | [**ApplicationConfigurationModuleOpportunityStatesWin**](ApplicationConfigurationModuleOpportunityStatesWin.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_opportunity_states import ApplicationConfigurationModuleOpportunityStates

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleOpportunityStates from a JSON string
application_configuration_module_opportunity_states_instance = ApplicationConfigurationModuleOpportunityStates.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleOpportunityStates.to_json())

# convert the object into a dict
application_configuration_module_opportunity_states_dict = application_configuration_module_opportunity_states_instance.to_dict()
# create an instance of ApplicationConfigurationModuleOpportunityStates from a dict
application_configuration_module_opportunity_states_from_dict = ApplicationConfigurationModuleOpportunityStates.from_dict(application_configuration_module_opportunity_states_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


