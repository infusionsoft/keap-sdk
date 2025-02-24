# ApplicationConfigurationModuleAffiliateCommission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_type** | **str** |  | [optional] 
**levels** | **int** |  | [optional] 
**participant_types** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_affiliate_commission import ApplicationConfigurationModuleAffiliateCommission

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleAffiliateCommission from a JSON string
application_configuration_module_affiliate_commission_instance = ApplicationConfigurationModuleAffiliateCommission.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleAffiliateCommission.to_json())

# convert the object into a dict
application_configuration_module_affiliate_commission_dict = application_configuration_module_affiliate_commission_instance.to_dict()
# create an instance of ApplicationConfigurationModuleAffiliateCommission from a dict
application_configuration_module_affiliate_commission_from_dict = ApplicationConfigurationModuleAffiliateCommission.from_dict(application_configuration_module_affiliate_commission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


