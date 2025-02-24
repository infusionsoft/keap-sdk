# ApplicationConfigurationModuleAppointment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointment_types** | **str** |  | [optional] 
**share_opportunity_with_related_user** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_appointment import ApplicationConfigurationModuleAppointment

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleAppointment from a JSON string
application_configuration_module_appointment_instance = ApplicationConfigurationModuleAppointment.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleAppointment.to_json())

# convert the object into a dict
application_configuration_module_appointment_dict = application_configuration_module_appointment_instance.to_dict()
# create an instance of ApplicationConfigurationModuleAppointment from a dict
application_configuration_module_appointment_from_dict = ApplicationConfigurationModuleAppointment.from_dict(application_configuration_module_appointment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


