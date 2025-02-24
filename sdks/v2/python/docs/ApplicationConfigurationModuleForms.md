# ApplicationConfigurationModuleForms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spam_filters_enabled** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_forms import ApplicationConfigurationModuleForms

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleForms from a JSON string
application_configuration_module_forms_instance = ApplicationConfigurationModuleForms.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleForms.to_json())

# convert the object into a dict
application_configuration_module_forms_dict = application_configuration_module_forms_instance.to_dict()
# create an instance of ApplicationConfigurationModuleForms from a dict
application_configuration_module_forms_from_dict = ApplicationConfigurationModuleForms.from_dict(application_configuration_module_forms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


