# ApplicationConfigurationModuleFulfillment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_message_fields** | **str** |  | [optional] 
**default_message_to** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_fulfillment import ApplicationConfigurationModuleFulfillment

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleFulfillment from a JSON string
application_configuration_module_fulfillment_instance = ApplicationConfigurationModuleFulfillment.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleFulfillment.to_json())

# convert the object into a dict
application_configuration_module_fulfillment_dict = application_configuration_module_fulfillment_instance.to_dict()
# create an instance of ApplicationConfigurationModuleFulfillment from a dict
application_configuration_module_fulfillment_from_dict = ApplicationConfigurationModuleFulfillment.from_dict(application_configuration_module_fulfillment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


