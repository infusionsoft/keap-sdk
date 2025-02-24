# ApplicationConfigurationModuleNote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointment_types** | **str** |  | [optional] 
**share_opportunity_with_related_user** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_note import ApplicationConfigurationModuleNote

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleNote from a JSON string
application_configuration_module_note_instance = ApplicationConfigurationModuleNote.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleNote.to_json())

# convert the object into a dict
application_configuration_module_note_dict = application_configuration_module_note_instance.to_dict()
# create an instance of ApplicationConfigurationModuleNote from a dict
application_configuration_module_note_from_dict = ApplicationConfigurationModuleNote.from_dict(application_configuration_module_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


