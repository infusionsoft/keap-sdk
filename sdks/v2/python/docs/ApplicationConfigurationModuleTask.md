# ApplicationConfigurationModuleTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointment_types** | **str** |  | [optional] 
**share_opportunity_with_related_user** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_task import ApplicationConfigurationModuleTask

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleTask from a JSON string
application_configuration_module_task_instance = ApplicationConfigurationModuleTask.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleTask.to_json())

# convert the object into a dict
application_configuration_module_task_dict = application_configuration_module_task_instance.to_dict()
# create an instance of ApplicationConfigurationModuleTask from a dict
application_configuration_module_task_from_dict = ApplicationConfigurationModuleTask.from_dict(application_configuration_module_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


