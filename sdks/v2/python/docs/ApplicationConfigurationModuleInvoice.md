# ApplicationConfigurationModuleInvoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tax_label** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_invoice import ApplicationConfigurationModuleInvoice

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleInvoice from a JSON string
application_configuration_module_invoice_instance = ApplicationConfigurationModuleInvoice.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleInvoice.to_json())

# convert the object into a dict
application_configuration_module_invoice_dict = application_configuration_module_invoice_instance.to_dict()
# create an instance of ApplicationConfigurationModuleInvoice from a dict
application_configuration_module_invoice_from_dict = ApplicationConfigurationModuleInvoice.from_dict(application_configuration_module_invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


