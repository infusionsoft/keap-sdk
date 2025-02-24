# GetSettingsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate** | [**ApplicationConfigurationModuleAffiliate**](ApplicationConfigurationModuleAffiliate.md) |  | [optional] 
**application** | [**ApplicationConfigurationModuleApplication**](ApplicationConfigurationModuleApplication.md) |  | [optional] 
**appointment** | [**ApplicationConfigurationModuleAppointment**](ApplicationConfigurationModuleAppointment.md) |  | [optional] 
**contact** | [**ApplicationConfigurationModuleContact**](ApplicationConfigurationModuleContact.md) |  | [optional] 
**ecommerce** | [**ApplicationConfigurationModuleEcommerce**](ApplicationConfigurationModuleEcommerce.md) |  | [optional] 
**email** | [**ApplicationConfigurationModuleEmail**](ApplicationConfigurationModuleEmail.md) |  | [optional] 
**forms** | [**ApplicationConfigurationModuleForms**](ApplicationConfigurationModuleForms.md) |  | [optional] 
**fulfillment** | [**ApplicationConfigurationModuleFulfillment**](ApplicationConfigurationModuleFulfillment.md) |  | [optional] 
**invoice** | [**ApplicationConfigurationModuleInvoice**](ApplicationConfigurationModuleInvoice.md) |  | [optional] 
**note** | [**ApplicationConfigurationModuleNote**](ApplicationConfigurationModuleNote.md) |  | [optional] 
**opportunity** | [**ApplicationConfigurationModuleOpportunity**](ApplicationConfigurationModuleOpportunity.md) |  | [optional] 
**task** | [**ApplicationConfigurationModuleTask**](ApplicationConfigurationModuleTask.md) |  | [optional] 
**template** | [**ApplicationConfigurationModuleTemplate**](ApplicationConfigurationModuleTemplate.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.get_settings_response import GetSettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetSettingsResponse from a JSON string
get_settings_response_instance = GetSettingsResponse.from_json(json)
# print the JSON string representation of the object
print(GetSettingsResponse.to_json())

# convert the object into a dict
get_settings_response_dict = get_settings_response_instance.to_dict()
# create an instance of GetSettingsResponse from a dict
get_settings_response_from_dict = GetSettingsResponse.from_dict(get_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


