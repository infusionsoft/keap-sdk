# ApplicationConfigurationModuleOpportunity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_stage** | **str** |  | [optional] 
**states** | [**ApplicationConfigurationModuleOpportunityStates**](ApplicationConfigurationModuleOpportunityStates.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_opportunity import ApplicationConfigurationModuleOpportunity

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleOpportunity from a JSON string
application_configuration_module_opportunity_instance = ApplicationConfigurationModuleOpportunity.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleOpportunity.to_json())

# convert the object into a dict
application_configuration_module_opportunity_dict = application_configuration_module_opportunity_instance.to_dict()
# create an instance of ApplicationConfigurationModuleOpportunity from a dict
application_configuration_module_opportunity_from_dict = ApplicationConfigurationModuleOpportunity.from_dict(application_configuration_module_opportunity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


