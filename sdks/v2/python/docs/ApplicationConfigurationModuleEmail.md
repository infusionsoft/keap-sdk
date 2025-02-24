# ApplicationConfigurationModuleEmail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**append_contact_key_to_links** | **bool** |  | [optional] 
**default_opt_in_link** | **str** |  | [optional] 
**default_opt_out_link** | **str** |  | [optional] 
**hide_emails_to_and_from_domains** | **str** |  | [optional] 
**whitelisted_domains** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_email import ApplicationConfigurationModuleEmail

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleEmail from a JSON string
application_configuration_module_email_instance = ApplicationConfigurationModuleEmail.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleEmail.to_json())

# convert the object into a dict
application_configuration_module_email_dict = application_configuration_module_email_instance.to_dict()
# create an instance of ApplicationConfigurationModuleEmail from a dict
application_configuration_module_email_from_dict = ApplicationConfigurationModuleEmail.from_dict(application_configuration_module_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


