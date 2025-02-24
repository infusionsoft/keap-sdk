# ApplicationConfigurationModuleContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_labels** | [**ApplicationConfigurationModuleContactAddressLabels**](ApplicationConfigurationModuleContactAddressLabels.md) |  | [optional] 
**contact_types** | **str** |  | [optional] 
**default_new_contact_form** | **str** |  | [optional] 
**disable_contact_edit_in_client_login** | **bool** |  | [optional] 
**fax_types** | **str** |  | [optional] 
**phone_types** | **str** |  | [optional] 
**suffix_types** | **str** |  | [optional] 
**title_types** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_contact import ApplicationConfigurationModuleContact

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleContact from a JSON string
application_configuration_module_contact_instance = ApplicationConfigurationModuleContact.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleContact.to_json())

# convert the object into a dict
application_configuration_module_contact_dict = application_configuration_module_contact_instance.to_dict()
# create an instance of ApplicationConfigurationModuleContact from a dict
application_configuration_module_contact_from_dict = ApplicationConfigurationModuleContact.from_dict(application_configuration_module_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


