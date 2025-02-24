# ApplicationConfigurationModuleTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_country_code** | **int** |  | [optional] 
**default_user_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_template import ApplicationConfigurationModuleTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleTemplate from a JSON string
application_configuration_module_template_instance = ApplicationConfigurationModuleTemplate.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleTemplate.to_json())

# convert the object into a dict
application_configuration_module_template_dict = application_configuration_module_template_instance.to_dict()
# create an instance of ApplicationConfigurationModuleTemplate from a dict
application_configuration_module_template_from_dict = ApplicationConfigurationModuleTemplate.from_dict(application_configuration_module_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


