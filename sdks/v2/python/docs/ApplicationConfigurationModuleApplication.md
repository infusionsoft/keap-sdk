# ApplicationConfigurationModuleApplication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company** | [**ApplicationCompany**](ApplicationCompany.md) |  | [optional] 
**default_view_locale** | **str** |  | [optional] 
**features_enabled** | [**ApplicationFeaturesEnabled**](ApplicationFeaturesEnabled.md) |  | [optional] 
**time_zone** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_application import ApplicationConfigurationModuleApplication

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleApplication from a JSON string
application_configuration_module_application_instance = ApplicationConfigurationModuleApplication.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleApplication.to_json())

# convert the object into a dict
application_configuration_module_application_dict = application_configuration_module_application_instance.to_dict()
# create an instance of ApplicationConfigurationModuleApplication from a dict
application_configuration_module_application_from_dict = ApplicationConfigurationModuleApplication.from_dict(application_configuration_module_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


